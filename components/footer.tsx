import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Portfolio<span className="text-primary">.</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}

