import {
  BlocksIcon,
  BotIcon,
  BoxesIcon,
  FolderTreeIcon,
  MoonStarIcon,
  ShieldCheckIcon,
} from "lucide-react"

const capabilities = [
  {
    icon: BoxesIcon,
    title: "Next.js foundation",
    description: "Modern App Router architecture with strict TypeScript.",
  },
  {
    icon: BlocksIcon,
    title: "shadcn/ui",
    description: "Accessible UI primitives designed for customization.",
  },
  {
    icon: MoonStarIcon,
    title: "Theme system",
    description: "Light, dark, system preferences, and semantic design tokens.",
  },
  {
    icon: FolderTreeIcon,
    title: "Feature architecture",
    description:
      "Clear boundaries for routes, features, shared UI, and services.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Engineering conventions",
    description:
      "Rules for TypeScript, components, Git, testing, and security.",
  },
  {
    icon: BotIcon,
    title: "Agent-ready workflow",
    description: "Provider-neutral instructions and reusable task skills.",
  },
] as const

export function CapabilitiesSection() {
  return (
    <section
      id="foundation"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Foundation capabilities
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          The recurring decisions are already made.
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          Start with a coherent system, then add only the architecture your
          product actually needs.
        </p>
      </div>

      <div className="mt-10 grid border-l border-t sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="group min-h-48 border-r border-b bg-background p-6 transition-colors hover:bg-muted/40"
          >
            <div className="grid size-9 place-items-center rounded-lg border bg-muted/40 transition-colors group-hover:bg-background">
              <Icon className="size-4" aria-hidden="true" />
            </div>
            <h3 className="mt-8 font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
