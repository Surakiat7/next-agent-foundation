# Agent Instructions

This repository uses a vendor-neutral engineering instruction system for Claude Code, GitHub Copilot, Devin, and other AI coding agents.

## Source of Truth

- Repository-wide rules: `.agents/rules/`
- Task-specific workflows: `.agents/skills/`

Rules define how code must be written.
Skills define how a type of task should be executed.

## Core Principles

1. Inspect before modifying.
2. Search before creating.
3. Reuse before abstracting.
4. Prefer existing project conventions over personal preference.
5. Make the smallest coherent change required.
6. Do not introduce new architecture silently.
7. Do not install dependencies unless necessary.
8. Do not bypass TypeScript, linting, tests, or validation.
9. Do not modify unrelated code.
10. Fix root causes rather than symptoms.

## Rules

- `.agents/rules/architecture.md`
- `.agents/rules/coding-style.md`
- `.agents/rules/naming-conventions.md`
- `.agents/rules/component-rules.md`
- `.agents/rules/typescript-rules.md`
- `.agents/rules/nextjs-rules.md`
- `.agents/rules/data-fetching.md`
- `.agents/rules/forms-validation.md`
- `.agents/rules/error-handling.md`
- `.agents/rules/testing-rules.md`
- `.agents/rules/security.md`
- `.agents/rules/git-conventions.md`
- `.agents/rules/anti-patterns.md`

## Skills

- `.agents/skills/create-feature/SKILL.md`
- `.agents/skills/create-component/SKILL.md`
- `.agents/skills/api-integration/SKILL.md`
- `.agents/skills/create-form/SKILL.md`
- `.agents/skills/refactor/SKILL.md`
- `.agents/skills/bug-fix/SKILL.md`
- `.agents/skills/code-review/SKILL.md`

## Before Any Task

Inspect the relevant parts of the repository, including existing source files, package configuration, TypeScript configuration, linting rules, formatting rules, tests, and nearby implementation patterns.

Existing repository-specific conventions take precedence over generic examples in these documents unless an explicit migration is requested.

## Git Safety

Do not commit, push, force-push, reset, rebase, rewrite history, or delete branches unless explicitly requested.
