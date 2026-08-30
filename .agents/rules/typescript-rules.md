# TypeScript Rules

## Strict Typing

Preserve strict TypeScript settings.

Do not weaken compiler settings to avoid fixing code.

## Avoid `any`

Use real types.

When input is unknown, prefer `unknown` and narrow it safely.

## Type Assertions

Avoid unsafe type assertions unless correctness is guaranteed by validation or a trusted boundary.

## Inference

Prefer inference when the type is obvious.

## Domain Types

Keep feature-specific types close to the domain they describe.

Do not create global types without genuine cross-feature reuse.

## API Types

Avoid duplicating API response types across layers.

## Unions

Use discriminated unions when they make finite states safer and clearer.

## Enums

Prefer literal unions unless an enum provides a concrete benefit.

## Suppression

Do not use `@ts-ignore`, `@ts-nocheck`, or unsafe casts as shortcuts.

Any unavoidable suppression must include a specific justification.
