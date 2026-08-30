# AI Agent Engineering System

This directory is the provider-neutral source of truth for AI-assisted engineering in this repository.

It is intended for:

- Claude Code
- GitHub Copilot
- Devin
- other model providers used through agentic coding harnesses

## Structure

```text
.agents/
├── rules/
└── skills/
```

## Rules

Rules define repository-wide engineering constraints such as architecture, naming, TypeScript, Next.js, testing, security, and Git conventions.

## Skills

Skills define repeatable workflows for specific tasks such as creating a feature, integrating an API, fixing a bug, refactoring, or reviewing code.

## Principles

- Search before create.
- Understand before modify.
- Reuse before abstract.
- Prefer consistency over personal preference.
- Prefer simple code over clever code.
- Prefer explicit code over hidden magic.
- Fix root causes rather than symptoms.
- Avoid unrelated changes.
