"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter transition-colors">
          Portfolio<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {["Home", "About", "Projects", "Skills", "Contact", "Testimonials"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const element = document.getElementById(item.toLowerCase())
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item}
            </button>
          ))}
          <Button>Download CV</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="container flex flex-col items-center justify-center gap-6 p-8 animate-in fade-in duration-300">
            {["Home", "About", "Projects", "Skills", "Contact", "Testimonials"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setIsOpen(false)
                  const element = document.getElementById(item.toLowerCase())
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="text-xl font-medium transition-colors hover:text-primary"
              >
                {item}
              </button>
            ))}
            <Button className="mt-4 w-full">Download CV</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

