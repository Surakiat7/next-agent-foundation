import { BracesIcon } from "lucide-react"

export function HomeFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-foreground">
          <BracesIcon className="size-4" aria-hidden="true" />
          <span className="font-medium">Next Agent Foundation</span>
        </div>
        <p>Built with Next.js, Tailwind CSS, and shadcn/ui.</p>
      </div>
    </footer>
  )
}
