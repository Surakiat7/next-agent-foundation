# Error Handling

## Categories

Distinguish between:

- validation errors;
- expected domain errors;
- authentication/authorization failures;
- network/service failures;
- unexpected programming errors.

## User-Facing Errors

Show actionable, safe messages.

Do not expose stack traces, internal infrastructure details, credentials, or sensitive payloads.

## Logging

Unexpected errors should use the established logging or observability system.

Avoid logging sensitive data.

## API Errors

Normalize API errors in the established HTTP/service layer when practical.

Do not repeat raw parsing logic across components.

## Retry

Retry only when it is safe and meaningful.

Do not automatically retry non-idempotent side effects unless the backend guarantees idempotency.

## Silent Failures

Never silently swallow errors without an intentional and documented reason.
