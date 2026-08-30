# Security Rules

## Secrets

Never commit API keys, tokens, passwords, private keys, or production credentials.

Keep server-only secrets out of client bundles.

## Input

Treat all external input as untrusted and validate at trust boundaries.

## Authentication and Authorization

Authentication identifies the user.
Authorization controls what the user may do.

Do not rely solely on hidden UI controls for authorization.

Permission enforcement must exist at a trusted backend or server boundary.

## Sensitive Data

Avoid logging tokens, passwords, payment data, health data, or personally identifiable information unless explicitly required and protected.

## Environment Variables

Public environment variables must be intentionally safe for client exposure.

## Errors

Do not leak internal security or infrastructure information through user-facing errors.
