import { ArrowDownIcon, ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { CloneCommand } from "@/features/home/components/clone-command"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b scroll-mt-14"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <Badge variant="outline" className="font-mono font-normal">
          Next.js · TypeScript · shadcn/ui · Agent-ready
        </Badge>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
          Build from a foundation,
          <span className="text-muted-foreground"> not from scratch.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          A reusable Next.js foundation with shadcn/ui, engineering conventions,
          and vendor-neutral AI agent workflows.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#quick-start"
            className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
          >
            Start with this foundation
            <ArrowDownIcon data-icon="inline-end" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Surakiat7/next-foundation"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-10 px-4"
            )}
          >
            GitHub
            <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 max-w-4xl">
          <CloneCommand />
        </div>
      </div>
    </section>
  )
}
