# Skill: Bug Fix

## Purpose

Resolve a defect by identifying the root cause and applying the smallest reliable fix.

## Preconditions

1. Understand expected behavior.
2. Reproduce or reason through the failure.
3. Inspect related code paths.
4. Search for similar behavior elsewhere.
5. Identify the risk surface.

## Workflow

1. Trace symptom → state/data → logic → origin.
2. Assess impact on permissions, money, data integrity, auth, destructive actions, analytics, and related flows.
3. Implement the smallest reliable fix.
4. Add or update regression coverage when practical.
5. Validate both the failing scenario and adjacent success scenarios.

## Validation Checklist

- root cause identified;
- expected behavior restored;
- no unrelated behavior changed;
- regression coverage added when valuable;
- lint/typecheck/tests pass.

## Common Mistakes

- symptom-only patches;
- broad refactors during a focused fix;
- suppressing errors instead of correcting logic;
- weakening tests to make CI pass.
