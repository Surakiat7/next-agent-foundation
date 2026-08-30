# Data Fetching

Inspect the repository's existing data-fetching approach before implementing a new one.

If Axios and TanStack Query are established, prefer:

```text
Feature Component
      ↓
Query / Mutation Hook
      ↓
Service Layer
      ↓
Shared HTTP Client
      ↓
Backend API
```

## HTTP Client

Use the shared HTTP client for base URL, headers, authentication, interceptors, error normalization, and timeout policy.

Do not create a separate Axios instance per feature without a clear reason.

## Services

Use explicit domain operations such as:

```ts
orderService.getOrders()
orderService.getOrderById()
orderService.cancelOrder()
```

Avoid direct network calls scattered through UI components.

## Query Keys

Use stable, deterministic, parameter-aware query keys.

## Mutations

Handle pending state, errors, cache invalidation, and duplicate-submit risk.

## Cache Invalidation

Invalidate the narrowest practical scope.

Do not invalidate the entire cache by default.

## Server Data

Do not force all data through TanStack Query when Server Component fetching is more appropriate.
