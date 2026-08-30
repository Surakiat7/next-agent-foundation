# Coding Style

## Principles

Code should be clear, explicit, maintainable, and locally understandable.

Prefer simple code over clever code.

## Functions

Functions should have one clear purpose.

Prefer early returns when they improve readability.

Avoid mixing unrelated responsibilities such as data access, validation, transformation, and UI state in one large function.

## Comments

Comments should explain why something exists, not restate what the code already says.

## Duplication

Do not abstract at the first sign of duplication.

Extract shared logic when the abstraction has a clear purpose and stable reuse.

## Imports

Follow the repository's existing import conventions and configured aliases.

## Dead Code

Remove unused imports, variables, obsolete commented code, and temporary debug logging before considering a task complete.
