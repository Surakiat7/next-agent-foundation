# Anti-patterns

Avoid these patterns unless there is a clear documented reason.

## Architecture

- speculative architecture;
- unnecessary factories, adapters, repositories, or wrappers;
- circular dependencies;
- deep cross-feature imports;
- empty scaffolding.

## Components

- giant components with unrelated responsibilities;
- business logic inside UI primitives;
- duplicated shadcn/ui primitives;
- unnecessary `'use client'`.

## React

- `useEffect` for derived state;
- `useEffect` for ordinary data fetching when a better solution exists;
- unnecessary global state;
- premature `useMemo` / `useCallback`;
- premature optimization.

## TypeScript

- `any`;
- unsafe casts;
- `@ts-ignore`;
- disabling strictness to hide issues.

## Linting

Do not disable lint rules simply to make errors disappear.

## Networking

- direct API calls scattered in components;
- hard-coded API URLs;
- feature-specific HTTP clients without reason.

## Utilities

Avoid vague files such as:

```text
helpers.ts
misc.ts
common.ts
stuff.ts
```

Use intent-specific names.

## Barrel Files

Do not create `index.ts` barrel exports everywhere by default.

## Scope Creep

Do not refactor unrelated code during a focused task.

## Dependencies

Do not install libraries for problems already solved by the existing stack.
