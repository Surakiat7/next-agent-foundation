# Architecture Rules

## Goal

Keep the application predictable, scalable, and easy to navigate.

## Recommended Structure

Use the existing repository structure first. For a feature-based Next.js application, a typical structure is:

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── shared/
│   └── layout/
├── features/
├── services/
├── hooks/
├── lib/
├── providers/
├── config/
├── constants/
├── types/
└── styles/
```

Do not create folders that contain no real code.

## `app/`

Use for routing, layouts, metadata, route composition, and route-level loading/error/not-found boundaries.

Avoid large business logic directly in `page.tsx`.

## `features/`

Place domain-specific UI and behavior here.

Example:

```text
features/orders/
├── components/
├── hooks/
├── schemas/
├── types/
└── utils/
```

## `components/ui/`

Use only for reusable, domain-neutral UI primitives such as shadcn/ui components.

Do not put business-specific components here.

## `components/shared/`

Use for reusable application components shared across multiple features.

## `services/`

Use for centralized API or external-service integration when this matches the repository's architecture.

Prefer explicit names such as:

```text
order.service.ts
customer.service.ts
```

Avoid vague names such as:

```text
api.ts
common.ts
```

## Dependency Boundaries

Avoid circular dependencies and deep imports into another feature's internals.

Do not reorganize existing code solely to match this document unless an architectural migration is explicitly requested.
