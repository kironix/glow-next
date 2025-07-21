"use client"

import { Config } from "@/config"

import { toast } from "@/hooks/use-toast"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Home() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">{Config.title}</h1>
      <p className="text-center text-balance">{Config.description}</p>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          onClick={() =>
            toast({
              title: "Success",
              description: "Hello World..!",
            })
          }
        >
          Click Me
        </Button>
        <a
          href="https://github.com/kironix/glow-next"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "default" })}
        >
          Get Started
        </a>
      </div>
      <div className="absolute top-3 right-3">
        <ThemeSwitcher />
      </div>
    </div>
  )
}
