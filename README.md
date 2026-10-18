# martinhedlund.com

Personal site. Next.js 16 (App Router), Node 26 (`nvm use` reads `.nvmrc`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # every route prerenders as static HTML
```

## Layout

| Path | What |
| --- | --- |
| `src/content/site.ts` | All copy, projects, and media references. Edit content here. |
| `src/app/page.tsx` | Design picker at `/` |
| `src/app/{minimal,editorial,terminal}/` | One design per route, each with its own fonts and CSS module |
| `src/components/ProjectMedia.tsx` | Renders an image (via `next/image`) or a lazy video |
| `src/lib/media.ts` | Turns a media path into a URL under `NEXT_PUBLIC_MEDIA_BASE_URL` |
| `public/media/` | Local media, used until the bucket is set up |

Once a design is chosen: move its `page.tsx`, `layout.tsx`, and CSS into
`src/app/`, then delete the other design folders.

## Media

Files are referenced by relative path (`"rowing.jpg"`). With
`NEXT_PUBLIC_MEDIA_BASE_URL` unset they load from `public/media/`; set it to a
public bucket URL and the same paths resolve there. See `.env.example`.

To move to Supabase Storage: create a public bucket called `media`, upload the
contents of `public/media/`, set the variable in Vercel, and delete
`public/media/`. Never overwrite a file in place; upload a new name, because
optimized copies are cached for 30 days.

## Deploy

Vercel: import the GitHub repo and leave the defaults. Add the custom domain under
Project → Settings → Domains and set the DNS records it shows at your registrar.
