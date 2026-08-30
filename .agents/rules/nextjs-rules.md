# Next.js Rules

Always inspect the installed Next.js version before using version-specific APIs.

## App Router

When the repository uses App Router, follow App Router patterns.

Do not introduce Pages Router patterns without a compatibility requirement.

## Server Components

Prefer Server Components for server-side data access, secure server-only work, and non-interactive rendering.

## Client Components

Use Client Components only when needed for browser APIs, interactive state, event handlers, or client-only libraries.

Keep `'use client'` at the smallest practical boundary.

## Route Files

Use framework files for their intended purpose:

```text
page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx
route.ts
```

Keep route files focused on routing and composition.

## Data Fetching

Do not default to `useEffect` for application data fetching.

Use Server Component fetching or the repository's established client query layer as appropriate.

## Caching

Do not guess caching or revalidation behavior.

Understand freshness requirements before configuring cache behavior.

## Environment Variables

Keep server-only secrets out of client bundles.

Only expose variables publicly when explicitly intended.
