# Skill: Refactor

## Purpose

Improve internal structure while preserving intended behavior.

## Preconditions

1. Understand current behavior.
2. Inspect relevant tests.
3. Identify callers and dependencies.
4. Define what must remain unchanged.
5. Separate refactor goals from unrelated cleanup.

## Workflow

1. Establish safety with tests or clear behavioral understanding.
2. Refactor incrementally.
3. Preserve public behavior unless explicitly changing it.
4. Avoid scope creep.
5. Run relevant validation.

## Validation Checklist

- behavior preserved;
- contracts preserved unless intentionally changed;
- tests pass;
- no new dependency cycles;
- no unnecessary abstractions;
- unrelated files untouched.

## Common Mistakes

- rewriting instead of refactoring;
- changing behavior unintentionally;
- replacing working architecture with personal preference;
- mixing a large refactor with unrelated feature work.
