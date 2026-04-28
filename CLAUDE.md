# jeongraklee-site

Personal academic website for Jeongrak Lee.
**Live**: https://jeongraklee-site.vercel.app/ · **Repo**: https://github.com/moongu97-creator/jeongraklee-site

## 📖 Maintenance guide (always read this first)

`C:\Users\user_f\wiki\topics\projects\jeongraklee-site.md`

The wiki page is the source of truth — it documents the directory layout,
how data files map to pages, design decisions (HighlightAuthor myIndex,
Featured highlight styling, Korean parentheses, Joohoon-style CV header),
and standard maintenance flows (adding a publication, replacing the CV
PDF, refreshing the photo, KakaoTalk OG cache, deployment).

## Quick commands

```bash
npm run dev      # http://localhost:3000
npm run lint
npm run build
git push         # Vercel deploys automatically
```

## Where things live

- Content edits → `data/*.ts` (publications, awards, talks, profile, …)
- Layout/component edits → `components/*.tsx`, `app/*/page.tsx`
- CV PDF → `public/cv.pdf` (replace via Word COM PowerShell, see wiki)
- Home portrait → `public/portrait.jpg` (Forbes-style, 1000x1499 ~80KB)
- CV portrait → `public/profile.jpg` (formal headshot)

## Stack note (read before editing)

@AGENTS.md
