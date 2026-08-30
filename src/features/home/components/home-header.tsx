import { ArrowUpRightIcon, BracesIcon } from "lucide-react"

import { ThemeToggle } from "@/components/shared/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md border bg-muted/50">
            <BracesIcon className="size-3.5" aria-hidden="true" />
          </span>
          <span className="hidden sm:inline">Next Agent Foundation</span>
          <span className="sm:hidden">NAF</span>
        </a>

        <nav
          className="flex items-center gap-1"
          aria-label="Primary navigation"
        >
          <a
            href="#foundation"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            Foundation
          </a>
          <a
            href="#architecture"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            Architecture
          </a>
          <a
            href="https://github.com/Surakiat7/next-foundation"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            GitHub
            <ArrowUpRightIcon data-icon="inline-end" aria-hidden="true" />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
