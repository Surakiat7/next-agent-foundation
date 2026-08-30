# Skill: Create Form

## Purpose

Create a predictable, accessible, validated form using the repository's existing form stack.

## Preconditions

Inspect:

- existing form components;
- schemas;
- React Hook Form usage;
- Zod usage;
- API error patterns;
- shared field primitives.

## Workflow

1. Define the validation schema.
2. Infer TypeScript types when appropriate.
3. Set explicit default values.
4. Reuse existing field primitives.
5. Handle pending, field errors, server errors, and success.
6. Prevent unsafe duplicate submission.
7. Preserve accessibility.

## Validation Checklist

- schema matches requirements;
- server remains authoritative;
- invalid state is visible;
- pending state is visible;
- server errors are handled;
- keyboard navigation works;
- success behavior is explicit.

## Common Mistakes

- duplicated validation rules;
- losing user input after recoverable errors;
- hiding server validation failures;
- uncontrolled/controlled input mismatches.
