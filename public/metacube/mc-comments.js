// MetaCube 설계 리뷰 댓글 위젯 — data-page="assembly|barrel|thruster|coldgas"
(function () {
  var host = document.getElementById("mccmt");
  if (!host) return;
  var PAGE = host.getAttribute("data-page") || "assembly";
  var RAW = "https://raw.githubusercontent.com/moongu97-creator/jeongraklee-site/main/public/metacube/comments.json";
  var NAVY = "#1F3864";

  // 좌측 댓글 칼럼과 동일한 h2 헤더를 써서 두 칼럼의 제목·상단선이 정확히 같은 높이로 정렬됨
  var GUIDE =
    '<aside style="flex:0 0 300px;min-width:260px;position:sticky;top:14px;align-self:flex-start">' +
    '<h2 style="font-size:16px;color:' + NAVY + ';border-bottom:2px solid ' + NAVY + ';' +
    'padding-bottom:5px;margin:0 0 10px">이 창 사용법</h2>' +
    '<div style="background:#f7f9fc;border:1px solid #d0d4da;' +
    'border-radius:8px;padding:14px 16px;font-size:12.5px;color:#2b3138;line-height:1.65">' +
    '<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #e2e7ef">' +
    '<span style="background:#2E4E7E;color:#fff;border-radius:3px;padding:1px 7px;font-size:11px;' +
    'font-weight:700">일반질문</span> ' +
    '<div style="margin-top:6px">설계·해석·부품 무엇이든 물어보세요. ' +
    '<b>보통 5분 이내 감지</b> 후 근거를 확인해 답글을 작성합니다.<br>' +
    '<span style="color:#5c6470">예) 소재 물성이 뭐야 / CMOS 발열 얼마야 / 이 치수 왜 이렇게 정했어</span></div></div>' +
    '<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #e2e7ef">' +
    '<span style="background:#d98040;color:#fff;border-radius:3px;padding:1px 7px;font-size:11px;' +
    'font-weight:700">설계변경 제안</span> ' +
    '<div style="margin-top:6px">바꿔야 할 부분이 있으면 유형을 <b>설계변경 제안</b>으로 바꿔 남겨주세요. ' +
    '전용 설계 Brain이 정본·공학 근거·검증 결과로 독립 판단합니다. 근거와 회귀검증이 닫히면 ' +
    'CAD·수치·STEP·BOM·페이지까지 자율 반영하고, 시험·제조사·ICD 확인이 남으면 <b>검토중</b>으로 관리합니다.<br><span style="color:#5c6470">예) 벽 더 얇게 / 이 기둥 빼줘 / 베인 각도 바꿔줘</span></div></div>' +
    '<div style="margin-bottom:10px"><b>상태 표시</b><br>' +
    '<span style="color:#5c6470">질문 → 답변완료 · 설계변경 → 접수 → 검토중 → 반영 / 기각</span></div>' +
    '<div style="background:#fff6e8;border:1px solid #f0d5ae;border-radius:5px;padding:8px 10px;' +
    'font-size:11.5px;color:#7a5a20">자동 답변은 작업 세션이 켜져 있을 때 동작합니다. ' +
    '응답이 없으면 잠시 후 다시 확인해 주세요 — 댓글은 사라지지 않고 그대로 남습니다.</div></div></aside>';

  host.innerHTML =
    '<div style="max-width:1240px;margin:18px auto 40px;padding:0 16px;font-family:\'Malgun Gothic\',sans-serif;' +
    'display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap">' +
    '<div style="flex:1 1 600px;min-width:320px">' +
    '<h2 style="font-size:16px;color:' + NAVY + ';border-bottom:2px solid ' + NAVY + ';padding-bottom:5px;margin:0 0 10px">' +
    "설계 리뷰 댓글 — " + ({
      barrel: "경통(카메라)",
      thruster: "추력기(PCB 기화식)",
      coldgas: "냉가스 추진모듈(R134a)",
      assembly: "전기체 3U"
    }[PAGE] || "전기체 3U") + "</h2>" +
    '<div id="mcc-list" style="margin:10px 0;font-size:13px;color:#333">불러오는 중…</div>' +
    '<div style="background:#f4f6fa;border:1px solid #d0d4da;border-radius:6px;padding:12px;margin-top:14px">' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">' +
    '<input id="mcc-name" placeholder="이름" maxlength="40" style="flex:0 0 130px;padding:6px 8px;border:1px solid #b9c3d4;border-radius:4px;font-size:12.5px">' +
    '<select id="mcc-type" style="flex:0 0 150px;padding:6px 8px;border:1px solid #b9c3d4;border-radius:4px;font-size:12.5px">' +
    '<option value="일반질문">일반질문</option><option value="설계변경">설계변경 제안</option></select>' +
    '<input id="mcc-hp" style="display:none" tabindex="-1" autocomplete="off"></div>' +
    '<textarea id="mcc-text" rows="3" maxlength="2000" placeholder="댓글 내용 — 일반질문은 답변 댓글이 달리고, 설계변경 제안은 접수→검토→반영/기각 상태로 관리됩니다." style="width:100%;box-sizing:border-box;padding:8px;border:1px solid #b9c3d4;border-radius:4px;font-size:13px"></textarea>' +
    '<div style="display:flex;align-items:center;gap:10px;margin-top:8px">' +
    '<button id="mcc-send" style="background:' + NAVY + ';color:#fff;border:0;border-radius:4px;padding:7px 18px;font-size:13px;font-weight:700;cursor:pointer">등록</button>' +
    '<span id="mcc-msg" style="font-size:12px;color:#5c6470"></span></div></div></div>' +
    GUIDE + "</div>";

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // 저장은 ISO(UTC 또는 +09:00), 표시는 항상 한국시간(KST)
  function fmt(ts) {
    if (!ts) return "";
    var d = new Date(ts);
    if (isNaN(d.getTime())) return String(ts).slice(0, 16).replace("T", " ");
    try {
      return new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", hour12: false
      }).format(d).replace(/\.\s*/g, "-").replace(/-$/, "").replace(/-(\d{2}:)/, " $1");
    } catch {
      return String(ts).slice(0, 16).replace("T", " ");
    }
  }
  function badge(txt, bg) {
    return '<span style="background:' + bg + ';color:#fff;border-radius:3px;padding:1px 7px;font-size:11px;font-weight:700;margin-right:6px">' + txt + "</span>";
  }
  var STATUS_BG = { "접수": "#8a93a0", "검토중": "#d98040", "반영": "#1F9D55", "기각": "#a64d4d", "답변완료": "#2E4E7E" };

  function render(data) {
    var el = document.getElementById("mcc-list");
    var list = (data.comments || []).filter(function (c) { return c.page === PAGE; });
    if (!list.length) { el.innerHTML = '<span style="color:#8a93a0">아직 댓글이 없습니다.</span>'; return; }
    list.sort(function (a, b) { return (b.ts || "").localeCompare(a.ts || ""); });
    el.innerHTML = list.map(function (c) {
      var h = '<div style="border-bottom:1px solid #e4e7ec;padding:9px 2px">';
      h += badge(c.type, c.type === "설계변경" ? "#d98040" : "#2E4E7E");
      if (c.status) h += badge(c.status, STATUS_BG[c.status] || "#8a93a0");
      h += "<b>" + esc(c.name) + "</b> <span style='color:#8a93a0;font-size:11px'>" + esc(fmt(c.ts)) + "</span>";
      h += '<div style="margin:5px 0 0;white-space:pre-wrap">' + esc(c.text) + "</div>";
      (c.replies || []).forEach(function (r) {
        h += '<div style="margin:7px 0 0 18px;padding:7px 10px;background:#f0f3f8;border-left:3px solid ' + NAVY + ';border-radius:0 4px 4px 0">' +
          badge(r.by || "Prof. Anna", NAVY) +
          "<span style='color:#8a93a0;font-size:11px'>" + esc(fmt(r.ts)) + "</span>" +
          '<div style="margin-top:4px;white-space:pre-wrap">' + esc(r.text) + "</div></div>";
      });
      return h + "</div>";
    }).join("");
  }

  function load() {
    fetch("/api/mc-comments", { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(render)
      .catch(function () {
        fetch(RAW + "?t=" + Date.now()).then(function (r) { return r.json(); }).then(render)
          .catch(function () { document.getElementById("mcc-list").textContent = "댓글을 불러오지 못했습니다."; });
      });
  }
  load();

  document.getElementById("mcc-send").onclick = function () {
    var name = document.getElementById("mcc-name").value.trim();
    var text = document.getElementById("mcc-text").value.trim();
    var type = document.getElementById("mcc-type").value;
    var msg = document.getElementById("mcc-msg");
    if (!name || text.length < 2) { msg.textContent = "이름과 내용을 입력해 주세요."; return; }
    msg.textContent = "등록 중…";
    fetch("/api/mc-comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: PAGE, type: type, name: name, text: text, hp: document.getElementById("mcc-hp").value }),
    }).then(function (r) {
      if (r.status === 503) { msg.textContent = "⚠ 서버 토큰 미설정 — 관리자에게 문의(Vercel GITHUB_TOKEN)"; throw 0; }
      if (!r.ok) { msg.textContent = "등록 실패 — 잠시 후 다시 시도해 주세요."; throw 0; }
      return r.json();
    }).then(function () {
      msg.textContent = "등록 완료 — Anna가 확인 후 답변/반영합니다.";
      document.getElementById("mcc-text").value = "";
      setTimeout(load, 800);
    }).catch(function () {});
  };
})();
