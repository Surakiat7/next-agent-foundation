# Skill: API Integration

## Purpose

Integrate backend APIs using the established networking and server-state patterns.

## Preconditions

Inspect:

- shared HTTP client;
- services;
- query library;
- query keys;
- authentication;
- error normalization;
- existing API/domain types.

## Preferred Flow

When Axios and TanStack Query are established:

```text
HTTP Client
    ↓
Service
    ↓
Query / Mutation Hook
    ↓
Feature Component
```

## Workflow

1. Define the request and response contract.
2. Reuse or add authoritative types.
3. Add a domain-specific service operation.
4. Add query/mutation hooks when appropriate.
5. Configure stable query keys and minimal invalidation.
6. Integrate through the established UI/data boundary.

## Validation Checklist

- typed request and response;
- normalized errors;
- correct auth behavior;
- stable query keys;
- correct invalidation;
- loading/error/empty states handled;
- duplicate non-idempotent submissions prevented.

## Common Mistakes

- direct Axios calls inside components;
- a new HTTP client per feature;
- invalidating the whole cache;
- hiding important request state inside presentation components.
