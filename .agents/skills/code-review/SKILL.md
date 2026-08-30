# Skill: Code Review

## Purpose

Review changes for correctness, risk, and maintainability.

## Review Priority

Review in this order:

1. correctness;
2. security;
3. data integrity;
4. regression risk;
5. architecture;
6. performance;
7. maintainability;
8. accessibility;
9. tests;
10. style.

## Workflow

1. Understand the intended behavior.
2. Inspect the diff and surrounding context.
3. Identify high-risk issues.
4. Check repository architecture and conventions.
5. Check meaningful test coverage.

## Finding Format

Each finding should include:

- severity;
- file/location;
- issue;
- impact;
- recommended fix.

## Severity

Use:

- Critical
- High
- Medium
- Low

Do not inflate cosmetic preferences into high-severity findings.

## Common Mistakes

- focusing mostly on formatting;
- suggesting rewrites without a concrete problem;
- ignoring error cases and tests;
- reviewing only changed lines without understanding context.
