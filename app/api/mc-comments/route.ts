// MetaCube 설계 리뷰 댓글 API — 저장소: repo 내 public/metacube/comments.json (커밋 방식)
// POST 등록에는 Vercel 환경변수 GITHUB_TOKEN(Contents RW, 이 레포 한정 fine-grained 권장) 필요.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OWNER = "moongu97-creator";
const REPO = "jeongraklee-site";
const FILE = "public/metacube/comments.json";
const BRANCH = "main";
const API = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(FILE)}`;

const PAGES = new Set(["assembly", "barrel"]);
const TYPES = new Set(["일반질문", "설계변경"]);

function gh(token?: string): Record<string, string> {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "metacube-comments",
  };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function readFile(token?: string) {
  const r = await fetch(`${API}?ref=${BRANCH}`, { headers: gh(token), cache: "no-store" });
  if (!r.ok) throw new Error(`github read ${r.status}`);
  const j = await r.json();
  const data = JSON.parse(Buffer.from(j.content, "base64").toString("utf-8"));
  return { data, sha: j.sha as string };
}

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const { data } = await readFile(token);
    return Response.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ comments: [], error: "read_failed" }, { status: 502 });
  }
}

export async function POST(req: Request) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return Response.json({ error: "server_token_missing" }, { status: 503 });
  }
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_json" }, { status: 400 });
  }
  const page = String(body.page ?? "");
  const type = String(body.type ?? "");
  const name = String(body.name ?? "").trim().slice(0, 40);
  const text = String(body.text ?? "").trim().slice(0, 2000);
  const hp = String(body.hp ?? "");
  if (hp !== "" || !PAGES.has(page) || !TYPES.has(type) || !name || text.length < 2) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  const entry = {
    id: `c-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    page,
    type,
    name,
    text,
    ts: new Date().toISOString(),
    status: "접수",
    replies: [] as unknown[],
  };
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const { data, sha } = await readFile(token);
      const list = Array.isArray(data.comments) ? data.comments : [];
      list.push(entry);
      while (list.length > 500) list.shift();
      const content = Buffer.from(
        JSON.stringify({ comments: list }, null, 2),
        "utf-8"
      ).toString("base64");
      const r = await fetch(API, {
        method: "PUT",
        headers: gh(token),
        body: JSON.stringify({
          message: `댓글: ${page}/${type} by ${name}`,
          content,
          sha,
          branch: BRANCH,
        }),
      });
      if (r.status === 409) continue; // sha 충돌 → 재시도
      if (!r.ok) throw new Error(`github write ${r.status}`);
      return Response.json({ ok: true, entry });
    } catch (e) {
      if (attempt === 1) {
        return Response.json({ error: "write_failed" }, { status: 502 });
      }
    }
  }
  return Response.json({ error: "conflict" }, { status: 409 });
}
