# Shipyard Docs

Developer documentation for Shipyard and Release Manager. Built with
Next.js + Nextra 4, sidebar navigation, and full-text search (Pagefind).

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building for production / regenerating search

```bash
npm run build
npm run start
```

`npm run build` also runs `postbuild`, which rebuilds the Pagefind search
index into `public/_pagefind/` — that folder is gitignored and regenerated
on every build, so there's nothing to keep in sync by hand.

## Adding or updating content

Every page is an `.mdx` file under `content/`. Sidebar order and titles for
each directory are controlled by that directory's `_meta.ts` file — add a
new page there too, or it won't show up in the sidebar.

```
content/
  index.mdx                    Introduction
  getting-started/             Install, quickstart, operator secrets
  concepts/                    Phases, envelopes, gates, retries & budget
  cli/                         Full command reference
  topologies/                  Writing and scaling topologies
  architecture/                Runner, trace & recovery, bays & landing
  dashboard/                   The yard view (web dashboard)
  adapters/                    Model adapters and routing
  acceptance/                  Criteria & scorecards
  release-manager/             The first Shipyard-built product
  testing/                     Testing philosophy
```

This is meant to be a living document — update the relevant page whenever a
real behavior, bug fix, or decision changes, the same way the project's
`spec.md` files get updated.

## A note on a real bug hit while building this

`nextra-theme-docs@4.6.1` combined with `zod@4.4.x` throws
`Invalid input: expected nonoptional, received undefined → at children` on
every single page — a real upstream bug
([nextra#5008](https://github.com/shuding/nextra/issues/5008)), not
anything in this content. `package.json` pins `zod` to `4.3.6` via
`overrides` to avoid it. If a future `npm install` re-triggers this error,
either bump that override once nextra ships a fix, or check the issue
above for the current status.
