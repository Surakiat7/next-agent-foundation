import { ArrowDownIcon, BracesIcon, GitBranchIcon } from "lucide-react"

const applicationLayers = [
  "app/",
  "features/",
  "components/",
  "services/ · lib/",
]
const agentLayers = ["AGENTS.md", ".agents/rules/", ".agents/skills/"]

function FlowColumn({
  label,
  layers,
}: {
  label: string
  layers: readonly string[]
}) {
  return (
    <div className="rounded-xl border bg-background p-4 sm:p-5">
      <p className="mb-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </p>
      <div className="flex flex-col items-center">
        {layers.map((layer, index) => (
          <div key={layer} className="contents">
            <div className="w-full border bg-card px-4 py-3 text-center font-mono text-sm shadow-xs first:rounded-t-md last:rounded-b-md">
              {layer}
            </div>
            {index < layers.length - 1 ? (
              <div className="grid h-8 place-items-center border-x">
                <ArrowDownIcon
                  className="size-3.5 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ArchitectureSection() {
  return (
    <section id="architecture" className="border-y bg-muted/30 scroll-mt-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <GitBranchIcon className="size-4" aria-hidden="true" />
            <p className="font-mono text-xs tracking-widest uppercase">
              System architecture
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Structure for the code.
            <br />
            Context for the agents.
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
            Application boundaries keep features predictable. A parallel agent
            system keeps every coding tool aligned with the same standards.
          </p>
          <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <BracesIcon className="size-4" aria-hidden="true" />
            Explicit boundaries · predictable flow
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FlowColumn label="Application" layers={applicationLayers} />
          <FlowColumn label="Agent context" layers={agentLayers} />
        </div>
      </div>
    </section>
  )
}
