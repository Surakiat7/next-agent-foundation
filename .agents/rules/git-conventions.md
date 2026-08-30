# Git Conventions

## Conventional Commits

Use:

```text
<type>(<scope>): <description>
```

Preferred types:

- `feat`
- `fix`
- `refactor`
- `perf`
- `test`
- `docs`
- `style`
- `build`
- `ci`
- `chore`
- `revert`

Examples:

```text
feat(order): add status filter
fix(auth): prevent expired session redirect loop
refactor(customer): extract profile form logic
test(order): add cancellation regression test
chore(deps): update development dependencies
```

## Commit Rules

- use a lowercase type;
- keep the description concise and imperative;
- keep one logical change per commit where practical;
- do not mix unrelated refactors with feature work;
- do not commit secrets or local environment files.

## AI Attribution

Do not add AI attribution or AI co-author lines unless explicitly requested.

## Git Safety

Do not commit, push, force-push, reset, rebase, cherry-pick, rewrite history, or delete branches unless explicitly requested.
