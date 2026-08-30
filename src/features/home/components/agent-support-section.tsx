import { ArrowRightIcon, FileCodeIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const agents = [
  "Claude Code",
  "GitHub Copilot",
  "Devin",
  "Other agentic harnesses",
] as const

const contextFiles = [
  { path: "AGENTS.md", purpose: "Canonical entry point" },
  { path: ".agents/rules/", purpose: "Engineering standards" },
  { path: ".agents/skills/", purpose: "Task workflows" },
] as const

export function AgentSupportSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
      <div>
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Vendor-neutral by design
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          One foundation.
          <br />
          Any coding agent.
        </h2>
        <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
          Claude Code, GitHub Copilot, Devin, and other coding models can follow
          the same repository rules and task-specific skills.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {agents.map((agent) => (
            <Badge key={agent} variant="outline" className="h-6 px-2.5">
              {agent}
            </Badge>
          ))}
        </div>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center gap-2 px-5 py-4">
          <FileCodeIcon className="size-4" aria-hidden="true" />
          <span className="text-sm font-medium">Repository context</span>
        </div>
        <Separator />
        <div className="p-2">
          {contextFiles.map(({ path, purpose }, index) => (
            <div key={path}>
              <div className="grid gap-1 rounded-lg px-3 py-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <code className="text-sm font-medium">{path}</code>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ArrowRightIcon
                    className="hidden size-3 sm:block"
                    aria-hidden="true"
                  />
                  {purpose}
                </div>
              </div>
              {index < contextFiles.length - 1 ? <Separator /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
