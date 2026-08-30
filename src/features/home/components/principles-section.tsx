const principles = [
  "Search before create.",
  "Understand before modify.",
  "Reuse before abstract.",
  "Prefer consistency over personal preference.",
  "Prefer simple code over clever code.",
  "Fix root causes, not symptoms.",
] as const

export function PrinciplesSection() {
  return (
    <section className="border-y">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Engineering principles
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Defaults that keep work focused.
            </h2>
          </div>

          <ol className="border-t">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="grid grid-cols-[2.5rem_1fr] gap-3 border-b py-4 sm:grid-cols-[3.5rem_1fr]"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium sm:text-base">
                  {principle}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
