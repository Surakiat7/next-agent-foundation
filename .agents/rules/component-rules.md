# Component Rules

## Responsibility

A component should have one clear responsibility.

Do not split components merely to reduce line count. Extract when it improves responsibility, reuse, testability, readability, or isolation.

## Server and Client Components

In the Next.js App Router:

- prefer Server Components when client behavior is not required;
- add `'use client'` only when needed;
- keep the client boundary as small as practical.

## UI Primitives

Reuse existing shadcn/ui primitives before creating equivalent primitives.

Do not put business logic into `components/ui/`.

## Placement

- UI primitives → `components/ui/`
- shared application components → `components/shared/`
- domain-specific components → `features/<feature>/components/`

## State

Do not store derived values in state when they can be calculated during render.

Avoid `useEffect` for behavior that can be handled declaratively.

## Data-Driven UI

Consider all relevant states:

- loading;
- empty;
- error;
- success.

## Destructive Actions

Use appropriate confirmation for destructive or costly actions such as deletion, refund, revoke, suspend, or irreversible cancellation.

## Accessibility

Preserve semantic markup, keyboard access, labels, focus behavior, and accessible names.
