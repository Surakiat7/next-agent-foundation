# Testing Rules

Adapt testing to the framework already installed in the repository.

## Priorities

Test behavior and outcomes, not implementation details.

Prioritize:

- business rules;
- user-visible behavior;
- critical transformations;
- regressions;
- high-risk workflows.

## Bug Fixes

Meaningful bug fixes should add or update regression coverage when practical.

## Unit Tests

Use for isolated logic such as pure functions, validators, and domain rules.

## Component Tests

Use for interactions, rendered states, form behavior, and accessibility-sensitive behavior.

## Integration Tests

Use when multiple modules must work together for meaningful behavior.

## End-to-End Tests

Use for critical flows when an end-to-end framework exists.

## Quality

Do not write meaningless tests purely to increase coverage.

Do not weaken valid tests to hide regressions.

Tests should be deterministic and isolated.
