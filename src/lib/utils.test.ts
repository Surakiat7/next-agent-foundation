import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn", () => {
  it("combines conditional class names", () => {
    expect(cn("base", false && "hidden", { active: true })).toBe("base active")
  })

  it("resolves conflicting Tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4")
  })
})
