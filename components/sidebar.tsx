"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, GraduationCap, Award, Code, Briefcase, Trophy, Github, Linkedin } from 'lucide-react'
import { useState } from "react"

const routes = [
  {
    path: "/",
    name: "Home",
    icon: Home
  },
  {
    path: "/education",
    name: "Education",
    icon: GraduationCap
  },
  {
    path: "/experience",
    name: "Experience",
    icon: Briefcase
  },
  {
    path: "/skills",
    name: "Skills",
    icon: Code
  },
  {
    path: "/achievements",
    name: "Achievements",
    icon: Trophy
  },
  {
    path: "/activities",
    name: "Activities",
    icon: Award
  }
]

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn("relative", className)}>
      <Button
        variant="ghost"
        className="absolute top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </Button>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-gray-100/40 dark:bg-gray-800/40 transition-transform md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">ARF Prince</span>
            <ThemeToggle />
          </div>
          <nav className="mt-6 flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-4">
              {routes.map((route) => {
                const Icon = route.icon
                return (
                  <li key={route.path}>
                    <Link href={route.path}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          pathname === route.path && "bg-gray-200 dark:bg-gray-700"
                        )}
                      >
                        <Icon className="mr-2 h-5 w-5" />
                        {route.name}
                      </Button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 p-4">
          <Button variant="outline" asChild className="w-full">
            <Link href="https://github.com/arfprince" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

