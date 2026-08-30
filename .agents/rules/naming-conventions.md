# Naming Conventions

## Files and Folders

Use kebab-case unless the framework requires a specific filename.

Correct:

```text
user-profile.tsx
order-history.tsx
use-current-user.ts
product-card.types.ts
query-client.ts
```

Incorrect:

```text
UserProfile.tsx
userProfile.tsx
useCurrentUser.ts
```

Framework-required filenames remain unchanged:

```text
page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx
route.ts
proxy.ts
```

## React Components

Use PascalCase.

```tsx
export function UserProfile() {}
```

## Functions and Variables

Use camelCase.

```ts
function calculateOrderTotal() {}
const currentOrder = ...
```

## Hooks

Hooks must start with `use`.

```ts
useCurrentUser
useOrders
usePermission
```

## Booleans

Prefer semantic prefixes:

- `is`
- `has`
- `can`
- `should`

Examples:

```ts
isLoading
hasPermission
canEdit
shouldRetry
```

## Constants

Use SCREAMING_SNAKE_CASE for true application constants when appropriate.

## Avoid Redundant Feature Prefixes

Inside `features/orders/components/`, prefer concise names such as `table.tsx` or `filters.tsx` when the folder already provides enough context.

Keep the domain word when it improves clarity or avoids ambiguity.

## Avoid Vague Names

Avoid names such as:

```text
helpers.ts
misc.ts
common.ts
stuff.ts
```

Prefer intent-specific names.
