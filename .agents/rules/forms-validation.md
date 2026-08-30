# Forms and Validation

Inspect the existing form stack first.

If React Hook Form and Zod are established, prefer them for non-trivial forms.

## Schema

Prefer:

```text
schema
  ↓
inferred TypeScript type
  ↓
form
```

Avoid duplicating the same validation rules manually across multiple layers.

## Validation

Client-side validation improves experience, but server-side validation remains authoritative.

## Errors

Display field-level errors near the relevant controls.

Display server/general form errors clearly and safely.

## Submission

Handle:

- pending state;
- duplicate submission;
- API errors;
- field errors;
- success behavior.

Preserve user input when recoverable errors occur.

## Accessibility

Inputs should have associated labels, accessible descriptions, keyboard support, and clear invalid states.
