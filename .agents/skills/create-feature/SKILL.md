# Skill: Create Feature

## Purpose

Implement a new application feature while preserving repository architecture.

## When to Use

Use when adding a new domain or user-facing feature.

## Preconditions

1. Read `AGENTS.md`.
2. Read relevant rules.
3. Search for similar existing features.
4. Inspect route, API, state, form, permission, and testing patterns.
5. Identify reusable shared components.

## Workflow

1. Define scope:
   - routes;
   - user behavior;
   - API requirements;
   - state ownership;
   - permissions;
   - validation;
   - loading/error/empty states;
   - tests.

2. Design the minimum required structure.

3. Implement in a stable order when relevant:
   - schema/types;
   - service;
   - query keys;
   - query/mutation hooks;
   - feature components;
   - page composition;
   - tests.

4. Reuse existing primitives and shared components.

5. Validate loading, empty, error, success, and permission-denied states.

## Validation Checklist

Run the relevant repository commands:

- lint;
- typecheck;
- tests;
- build when appropriate.

## Common Mistakes

- creating empty folders;
- duplicating an existing component;
- putting business logic in `page.tsx`;
- direct API calls in UI components;
- adding global state without need;
- changing unrelated code.
