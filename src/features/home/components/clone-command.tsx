"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

const CLONE_COMMAND =
  "git clone https://github.com/Surakiat7/next-foundation.git"

export function CloneCommand() {
  const [isCopied, setIsCopied] = useState(false)

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(CLONE_COMMAND)
      setIsCopied(true)
      window.setTimeout(() => setIsCopied(false), 2000)
    } catch {
      setIsCopied(false)
    }
  }

  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl border bg-card p-2 pl-4 shadow-sm">
      <code className="min-w-0 flex-1 overflow-x-auto py-2 font-mono text-sm whitespace-nowrap">
        <span className="select-none text-muted-foreground">$ </span>
        {CLONE_COMMAND}
      </code>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={copyCommand}
        aria-label={isCopied ? "Clone command copied" : "Copy clone command"}
        className="shrink-0"
      >
        {isCopied ? (
          <CheckIcon data-icon="inline-start" aria-hidden="true" />
        ) : (
          <CopyIcon data-icon="inline-start" aria-hidden="true" />
        )}
        <span className="hidden sm:inline">{isCopied ? "Copied" : "Copy"}</span>
      </Button>
    </div>
  )
}
