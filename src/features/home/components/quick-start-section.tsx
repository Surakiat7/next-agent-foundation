import { TerminalIcon } from "lucide-react"

export function QuickStartSection() {
  return (
    <section
      id="quick-start"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid overflow-hidden rounded-xl border bg-card lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b p-6 sm:p-8 lg:border-r lg:border-b-0">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Quick start
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Install. Run. Build.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
            The npm workflow includes development, linting, type checking,
            tests, formatting, and production builds.
          </p>
        </div>

        <div className="min-w-0 bg-muted/30 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <TerminalIcon className="size-3.5" aria-hidden="true" />
            <span className="font-mono">quick-start.sh</span>
          </div>
          <pre className="mt-6 overflow-x-auto font-mono text-sm leading-8">
            <code>
              <span className="select-none text-muted-foreground">$ </span>
              npm install{"\n"}
              <span className="select-none text-muted-foreground">$ </span>
              npm run dev{"\n"}
              <span className="select-none text-muted-foreground">$ </span>
              npm run lint && npm run typecheck && npm run test
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
