# noahstarkenburg.dev

My personal portfolio — a fast, statically-rendered site showcasing my work as a
full-stack & applied-AI engineer.

**Live:** _coming soon_ → deploying to Vercel at `noahstarkenburg.dev`

## Stack

- **Next.js 16** (App Router, React Server Components, React Compiler)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** for animation
- Statically prerendered · deployed on **Vercel**

## Editing content

All copy lives in one place — **`lib/content.ts`**. Change your bio, projects,
experience, and skills there; the components read from it. Search that file for
`TODO` to find the spots that need real details (automation-job specifics,
metrics, LinkedIn URL, résumé PDF).

Drop your résumé at `public/Noah-Starkenburg-Resume.pdf` (filename is set in
`lib/content.ts`).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

```bash
npx vercel        # preview
npx vercel --prod # production
```

Then point the `noahstarkenburg.dev` domain at the Vercel project.
