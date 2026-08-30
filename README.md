# Next Agent Foundation

> Production-ready Next.js foundation with shadcn/ui, reusable UI primitives, engineering conventions, and vendor-neutral AI agent workflows.

A reusable foundation for building modern Next.js applications with a consistent project structure, UI system, coding conventions, and AI-assisted engineering workflow.

The goal of this repository is simple:

> Start a new Next.js project with the engineering foundation already in place instead of rebuilding the same setup every time.

It provides a clean starting point for both human developers and AI coding agents such as Claude Code, GitHub Copilot, Devin, and other models running through agentic coding harnesses.

---

## Why This Repository Exists

Starting a new Next.js project usually involves repeating the same setup:

- project structure
- Tailwind CSS
- shadcn/ui
- theme configuration
- dark mode
- fonts
- reusable UI primitives
- code conventions
- naming conventions
- TypeScript rules
- component architecture
- Git conventions
- testing expectations
- AI coding instructions

This repository keeps those decisions centralized and reusable.

Instead of starting from an empty Next.js project:

```text
create-next-app
      ↓
configure Tailwind
      ↓
install shadcn/ui
      ↓
setup theme
      ↓
setup fonts
      ↓
create project structure
      ↓
write conventions
      ↓
configure AI agents
      ↓
start development
```

Start from:

```text
next-agent-foundation
        ↓
   build features
```

---

# Tech Stack

The foundation is designed around a modern Next.js frontend stack.

### Core

- Next.js
- React
- TypeScript
- App Router

### Styling

- Tailwind CSS
- shadcn/ui
- CSS Variables
- Dark / Light Theme
- Reusable design tokens

### UI

- shadcn/ui primitives
- Base UI components
- reusable, domain-neutral primitives
- responsive design foundation

### Development

- ESLint
- TypeScript strict mode
- project-level conventions
- feature-based architecture
- reusable engineering rules

### AI-Assisted Development

Designed to work with:

- Claude Code
- GitHub Copilot
- Devin
- GPT-based coding agents
- Gemini-based coding agents
- Qwen-based coding agents
- DeepSeek-based coding agents
- MiniMax-based coding agents
- other LLMs through agentic coding harnesses

The repository does not depend on one specific AI model provider.

---

# Key Features

## Next.js Foundation

A structured starting point for modern Next.js applications using the App Router.

The architecture separates:

```text
Routing
Business Features
Shared Components
UI Primitives
Infrastructure
Configuration
Providers
```

This helps prevent application code from becoming tightly coupled as the project grows.

---

## shadcn/ui Ready

The project uses `shadcn/ui` as the UI primitive layer.

```text
src/components/ui/
```

is reserved for reusable UI primitives such as:

```text
button
dialog
input
select
table
dropdown-menu
sheet
tabs
tooltip
popover
calendar
checkbox
```

Business-specific components should not be placed inside `src/components/ui`.

For example:

```text
❌ src/components/ui/order-table.tsx
❌ src/components/ui/customer-profile.tsx
❌ src/components/ui/refund-dialog.tsx
```

Prefer:

```text
src/features/orders/components/table.tsx
src/features/customers/components/profile.tsx
src/features/orders/components/refund-dialog.tsx
```

---

# Theme System

The foundation is prepared for application-level theming.

Supported patterns include:

- light mode
- dark mode
- system theme
- CSS variables
- Tailwind design tokens
- shadcn/ui theme tokens

Example:

```text
Light
  ↕
System
  ↕
Dark
```

Theme-specific styling should prefer semantic tokens rather than hard-coded colors.

For example:

```tsx
className = "bg-background text-foreground"
```

instead of:

```tsx
className = "bg-white text-black dark:bg-black dark:text-white"
```

when a semantic theme token already exists.

---

# Fonts

Application fonts should be configured centrally through Next.js font utilities.

Recommended approach:

```text
src/app/
└── layout.tsx
```

or a dedicated font configuration when the project grows.

Prefer:

```tsx
import { Geist } from "next/font/google"
```

over loading fonts manually through external stylesheets when Next.js font optimization can handle them.

---

# Current Project Structure

The repository currently contains:

```text
.
├── .agents/
│   ├── rules/                 # Repository-wide engineering rules
│   └── skills/                # Task-specific agent workflows
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css        # Tailwind imports and theme tokens
│   │   ├── layout.tsx         # Root layout and font configuration
│   │   └── page.tsx           # Home route
│   ├── components/
│   │   ├── shared/            # Shared application components
│   │   └── ui/                # shadcn/ui and custom UI primitives
│   ├── hooks/
│   │   └── use-mobile.ts      # Shared responsive-state hook
│   ├── lib/
│   │   ├── utils.test.ts      # Example Vitest unit test
│   │   └── utils.ts           # Shared class-name utility
│   └── providers/             # Application-level providers
├── AGENTS.md                  # Entry point for AI agent instructions
├── CLAUDE.md                  # Claude Code adapter
├── commitlint.config.mjs      # Conventional Commit validation
├── components.json            # shadcn/ui configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and npm scripts
├── postcss.config.mjs         # PostCSS configuration
├── prettier.config.mjs        # Formatting configuration
└── tsconfig.json              # TypeScript configuration and aliases
```

As the application grows, domain code should normally be added under `src/features/`. Shared application components can be added under `src/components/shared/`, while services, providers, schemas, configuration, constants, and types should only be introduced when real code requires them.

Do not generate empty architecture for hypothetical future features.

---

# Feature-Based Architecture

Business-domain code should normally be grouped by feature.

Example:

```text
src/features/
├── auth/
├── orders/
├── customers/
├── products/
└── reports/
```

A feature can grow into:

```text
src/features/orders/
├── components/
├── hooks/
├── schemas/
├── types/
└── utils/
```

Not every feature needs every folder.

Create only what the feature actually uses.

---

# App Router Philosophy

The `app/` directory should primarily handle:

- routing
- layouts
- metadata
- route boundaries
- page composition

Avoid putting large business logic directly inside:

```text
page.tsx
```

Prefer:

```tsx
import { OrderListView } from "@/features/orders/components/order-list-view"

export default function OrdersPage() {
  return <OrderListView />
}
```

rather than implementing the entire feature inside the route file.

---

# Server and Client Components

Prefer Server Components by default.

Use Client Components only when client-side behavior is required.

Examples include:

- browser APIs
- event handlers
- interactive state
- client-side form libraries
- client query libraries

Keep the client boundary as small as practical.

Avoid:

```tsx
"use client"

// entire page with mostly static/server-rendered content
```

when only a small interactive component requires client-side behavior.

---

# Naming Conventions

## Files and Folders

Use `kebab-case`.

Correct:

```text
user-profile.tsx
order-history.tsx
product-card.tsx
use-current-user.ts
query-client.ts
product-card.types.ts
```

Avoid:

```text
UserProfile.tsx
userProfile.tsx
useCurrentUser.ts
ProductCard.types.ts
```

Framework-required files remain unchanged:

```text
page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx
route.ts
proxy.ts
```

---

## Components

React components use `PascalCase`.

```tsx
export function UserProfile() {
  return <div />
}
```

---

## Functions

Functions and variables use `camelCase`.

```ts
function calculateOrderTotal() {}

const currentOrder = {}
```

---

## Hooks

Hooks must start with `use`.

```ts
useCurrentUser()
useOrders()
usePermission()
```

---

## Boolean Variables

Prefer semantic prefixes.

```ts
isLoading
isActive

hasPermission
hasError

canEdit
canDelete

shouldRetry
shouldRedirect
```

---

# Component Architecture

Components should have a clear responsibility.

A single component should not unnecessarily own:

```text
data fetching
+
business logic
+
form state
+
large table configuration
+
multiple dialogs
+
presentation
```

at the same time.

However, do not split components merely to reduce line count.

Extract components when it improves:

- readability
- responsibility
- reuse
- isolation
- testability
- maintainability

---

# UI Layers

Use the following UI layers as the application grows. Only the primitive layer exists in the initial repository.

## UI Primitives

```text
src/components/ui/
```

Examples:

```text
button.tsx
input.tsx
dialog.tsx
table.tsx
select.tsx
```

These should remain domain-neutral.

---

## Shared Components

```text
src/components/shared/
```

Examples:

```text
data-table/
page-header/
empty-state/
confirm-dialog/
date-range-picker/
```

These can understand application-level behavior but should remain reusable across multiple features.

---

## Feature Components

```text
src/features/<feature>/components/
```

Examples:

```text
src/features/orders/components/table.tsx
src/features/orders/components/detail-panel.tsx

src/features/customers/components/profile.tsx
```

These may contain domain-specific behavior.

---

# Data Fetching

The repository architecture supports a clean separation between network infrastructure and feature UI.

When using Axios with TanStack Query, the preferred flow is:

```text
Feature Component
       ↓
Query / Mutation Hook
       ↓
Service Layer
       ↓
Shared HTTP Client
       ↓
Backend API
```

Example:

```text
OrderList
    ↓
useOrders()
    ↓
orderService.getOrders()
    ↓
httpClient.get(...)
```

Avoid scattering direct API requests across components.

---

# Forms and Validation

For complex forms, a recommended stack is:

- React Hook Form
- Zod
- shadcn/ui form primitives

Preferred flow:

```text
Zod Schema
     ↓
TypeScript Type
     ↓
React Hook Form
     ↓
API Submission
```

Client-side validation improves user experience, but backend validation remains authoritative.

Forms should explicitly handle:

- validation errors
- server errors
- pending state
- duplicate submission
- success state
- accessibility

---

# AI Agent Engineering System

One of the main goals of this repository is to make AI-assisted coding predictable.

Instead of having different engineering standards for every AI tool:

```text
Claude rules
Copilot rules
Devin rules
GPT rules
Gemini rules
...
```

the repository uses one vendor-neutral source of truth.

```text
                    Claude Code
                         │
GitHub Copilot ────── AGENTS.md ────── Devin
                         │
                    Other Agents
                         │
                      .agents/
                   Rules + Skills
```

---

# AI Agent Structure

```text
AGENTS.md
CLAUDE.md

.agents/
├── README.md
│
├── rules/
│   ├── architecture.md
│   ├── coding-style.md
│   ├── naming-conventions.md
│   ├── component-rules.md
│   ├── typescript-rules.md
│   ├── nextjs-rules.md
│   ├── data-fetching.md
│   ├── forms-validation.md
│   ├── error-handling.md
│   ├── testing-rules.md
│   ├── security.md
│   ├── git-conventions.md
│   └── anti-patterns.md
│
└── skills/
    ├── create-feature/
    │   └── SKILL.md
    ├── create-component/
    │   └── SKILL.md
    ├── api-integration/
    │   └── SKILL.md
    ├── create-form/
    │   └── SKILL.md
    ├── refactor/
    │   └── SKILL.md
    ├── bug-fix/
    │   └── SKILL.md
    └── code-review/
        └── SKILL.md
```

---

# Rules vs Skills

The agent system separates two concepts.

### Rules

Rules define **how code should be written**.

Examples:

```text
naming-conventions.md
typescript-rules.md
component-rules.md
git-conventions.md
```

These apply across many different tasks.

### Skills

Skills define **how a task should be executed**.

Examples:

```text
create-feature
api-integration
bug-fix
refactor
code-review
```

A skill is effectively a reusable engineering playbook for an AI coding agent.

---

# Agent Principles

All coding agents should follow these principles:

```text
Search before create.
Understand before modify.
Reuse before abstract.
Prefer consistency over personal preference.
Prefer simple code over clever code.
Prefer explicit code over hidden magic.
Fix root causes rather than symptoms.
Do not change unrelated code.
```

Agents should inspect existing code before creating new patterns.

Existing repository conventions take priority over generic assumptions.

---

# Supported AI Tools

## Claude Code

Claude Code uses:

```text
CLAUDE.md
```

which points to:

```text
AGENTS.md
.agents/rules/
.agents/skills/
```

This avoids duplicating engineering rules inside Claude-specific configuration.

---

## GitHub Copilot

No Copilot-specific instruction file is included in the initial repository. Agentic tools that support `AGENTS.md` should use:

```text
AGENTS.md
.agents/rules/
.agents/skills/
```

---

## Devin

Devin should treat:

```text
AGENTS.md
```

as the repository-level engineering entry point.

No separate competing Devin rules are required.

---

## Other AI Models

Other models can use the same system through an agentic coding harness.

For example:

```text
GPT
Gemini
Qwen
DeepSeek
MiniMax
other LLM providers
```

The harness should instruct the model to read:

```text
AGENTS.md
```

and load the relevant skill before performing work.

This keeps engineering standards independent from the model provider.

---

# Example Agent Workflow

Suppose an agent needs to implement a new Orders feature.

It should read:

```text
AGENTS.md

.agents/rules/
├── architecture.md
├── naming-conventions.md
├── component-rules.md
├── typescript-rules.md
├── nextjs-rules.md
└── data-fetching.md

.agents/skills/
└── create-feature/
    └── SKILL.md
```

Then:

```text
Inspect repository
        ↓
Search similar features
        ↓
Understand existing architecture
        ↓
Plan minimal implementation
        ↓
Reuse existing components
        ↓
Implement
        ↓
Typecheck
        ↓
Lint
        ↓
Test
```

---

# Anti-Patterns

The repository discourages:

- unnecessary abstractions
- speculative architecture
- giant components
- duplicated utilities
- business logic in UI primitives
- direct API calls scattered across components
- unnecessary `useEffect`
- unnecessary global state
- premature memoization
- excessive barrel files
- `any`
- TypeScript suppression
- ESLint suppression as a shortcut
- hard-coded API URLs
- hard-coded secrets
- duplicate shadcn/ui primitives
- empty architecture folders
- vague files such as `helpers.ts` or `common.ts`
- unrelated refactoring during focused tasks
- unnecessary dependencies

---

# Git Conventions

Use Conventional Commits.

Format:

```text
<type>(<scope>): <description>
```

Examples:

```text
feat(order): add status filter

fix(auth): prevent expired session redirect loop

refactor(customer): extract profile form logic

test(order): add cancellation regression test

chore(deps): update development dependencies
```

Preferred types:

```text
feat
fix
refactor
perf
test
docs
style
build
ci
chore
revert
```

AI agents must not automatically add:

```text
Generated by AI
Generated by Claude
Co-Authored-By: AI
Co-Authored-By: Claude
```

Agents should not commit or push unless explicitly requested.

---

# Static Enforcement

AI instructions should not be the only mechanism enforcing engineering standards.

Whenever possible, use deterministic tooling.

```text
Formatting
    ↓
Prettier

Code Quality
    ↓
ESLint

Type Safety
    ↓
TypeScript

Tests
    ↓
Test Runner

Commit Format
    ↓
Commitlint
```

The philosophy is:

> Documentation explains intent. Tooling enforces deterministic rules.

---

# Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Enter the project:

```bash
cd <project-directory>
```

Install dependencies with npm:

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Validation Scripts

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run lint`         | Check the code with ESLint                   |
| `npm run typecheck`    | Check TypeScript without emitting files      |
| `npm run test`         | Run the Vitest suite once                    |
| `npm run test:watch`   | Run Vitest in watch mode                     |
| `npm run format`       | Format supported files with Prettier         |
| `npm run format:check` | Check formatting without changing files      |
| `npm run build`        | Create an optimized production build         |
| `npm run commitlint`   | Validate a commit message supplied via stdin |

---

# shadcn/ui

Add a new shadcn/ui component:

```bash
npx shadcn@latest add button
```

Example:

```bash
npx shadcn@latest add dialog
```

You can also install all available components:

```bash
npx shadcn@latest add --all
```

Before installing everything, preview the operation with:

```bash
npx shadcn@latest add --all --dry-run
```

Generated primitives should remain under:

```text
src/components/ui/
```

---

# Creating a New Feature

Example:

```text
src/features/orders/
├── components/
│   ├── table.tsx
│   ├── filters.tsx
│   └── detail-panel.tsx
│
├── hooks/
│   └── use-orders.ts
│
├── schemas/
│   └── order-filter.schema.ts
│
└── types/
    └── order.types.ts
```

Do not create every folder automatically.

A small feature could simply be:

```text
src/features/profile/
└── components/
    └── profile-card.tsx
```

Structure should follow actual complexity.

---

# Development Workflow

A typical workflow is:

```text
Create branch
     ↓
Inspect existing patterns
     ↓
Implement feature
     ↓
Typecheck
     ↓
Lint
     ↓
Test
     ↓
Review
     ↓
Commit
```

Before considering work complete, run the project's validation commands.

For example:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Use only scripts that actually exist in `package.json`.

---

# Environment Variables

Do not commit local secrets.

Use environment files according to project requirements.

Typical example:

```text
.env.local
```

Never expose sensitive server credentials using public environment-variable prefixes.

Only client-safe values should be intentionally exposed to browser code.

---

# Security Principles

The foundation assumes:

- untrusted input is validated;
- server secrets stay server-side;
- authentication and authorization are separate concerns;
- UI permission checks are not sufficient security controls;
- sensitive values are not logged;
- destructive operations are explicitly protected.

Authorization should always be enforced by a trusted backend or server boundary.

---

# Accessibility

Reusable components should preserve accessibility behavior.

Consider:

- keyboard navigation
- focus visibility
- labels
- semantic HTML
- accessible names
- form error descriptions
- dialog focus management
- screen-reader behavior

shadcn/ui and Base UI primitives already provide useful accessibility foundations. Avoid removing those behaviors without a strong reason.

---

# Philosophy

This repository intentionally prefers:

```text
Convention over improvisation

Simple architecture over speculative architecture

Feature ownership over global dumping grounds

Explicit code over hidden magic

Reusable primitives over duplicated components

Tooling enforcement over documentation-only rules

Provider-neutral AI workflows over model-specific conventions
```

The goal is not to create the most abstract Next.js architecture.

The goal is to provide a foundation that remains understandable when the application, team, and AI-assisted development workflow grow.

---

# Using This Repository as a Template

This repository is intended to work well as a GitHub Template Repository.

When starting a new application:

```text
next-agent-foundation
        ↓
Use this template
        ↓
new-project
        ↓
add domain features
```

This gives the new project a clean Git history while preserving the engineering foundation.

---

# Customizing for a Project

After creating a project from this foundation:

1. Update the project name.
2. Update metadata.
3. Configure fonts.
4. Configure design tokens.
5. Configure the application theme.
6. Add required environment variables.
7. Add project-specific features.
8. Extend `.agents/rules/` only when the project needs additional rules.
9. Add new skills only for workflows that occur repeatedly.

Avoid turning the agent rule system into a large documentation dump.

Rules should exist because they improve consistency or prevent real engineering problems.

---

# Repository Philosophy for AI Agents

AI agents are treated as engineering collaborators, not as a replacement for repository architecture.

The model may change:

```text
Claude
   ↓
GPT
   ↓
Gemini
   ↓
Qwen
   ↓
Future Model
```

but the repository's engineering standards remain:

```text
AGENTS.md
    ↓
.agents/rules/
    ↓
.agents/skills/
```

This makes the development workflow portable across model providers.

---

# Contributing

When contributing:

1. Follow `AGENTS.md`.
2. Follow the relevant rules under `.agents/rules/`.
3. Keep changes focused.
4. Follow naming conventions.
5. Reuse existing architecture.
6. Add tests for meaningful behavior.
7. Run validation before submitting changes.
8. Use Conventional Commits.

If introducing a new architectural pattern, document why it is needed instead of silently adding it.

---

# License

Add the appropriate license for your project.

For reusable open-source foundations, MIT is a common choice.

```text
MIT License
```

---

## Summary

**Next Agent Foundation** provides a reusable starting point for modern Next.js applications with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- reusable UI primitives
- dark/light theme foundation
- font configuration
- feature-based architecture
- naming conventions
- component conventions
- TypeScript rules
- Git conventions
- security and testing guidelines
- vendor-neutral AI agent rules
- reusable AI engineering skills
- Claude Code support
- GitHub Copilot support
- Devin support
- compatibility with other coding models and agent harnesses

Build the product.

Keep the foundation consistent.
