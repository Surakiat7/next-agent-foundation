# Skill: Create Component

## Purpose

Create a component in the correct layer with a clear responsibility.

## Preconditions

Before creating a new component:

1. Search for an existing equivalent.
2. Check whether shadcn/ui already provides the primitive.
3. Determine whether it is:
   - a UI primitive;
   - a shared application component;
   - a feature-specific component.
4. Confirm that a new component is actually needed.

## Placement

### UI Primitive

```text
components/ui/
```

### Shared Application Component

```text
components/shared/
```

### Feature Component

```text
features/<feature>/components/
```

## Workflow

1. Define one clear responsibility.
2. Define minimal props.
3. Reuse existing primitives.
4. Preserve accessibility.
5. Handle relevant UI states.
6. Add tests when behavior is meaningful.
7. Validate placement and imports.

## Common Mistakes

- extracting solely to reduce line count;
- making every component client-side;
- oversized prop interfaces;
- hiding domain logic inside generic shared components.
