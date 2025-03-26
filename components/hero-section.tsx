"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8", "duration-700")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),transparent)]" />
      <div className="container grid items-center gap-6 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for freelance work
          </div>
          <h1
            ref={textRef}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl opacity-0"
          >
            Creative <span className="text-primary">Designer</span> & Developer
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            I craft beautiful and functional websites that help businesses grow and succeed in the digital world.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border md:mx-0">
          <div className="animate-spin-slow absolute inset-0 rounded-full border-t-4 border-primary" />
          <div className="absolute inset-3 overflow-hidden rounded-full bg-muted">
            <Image
              src="https://avatars.githubusercontent.com/u/87937152?v=40"
              alt="Profile"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mt-16 md:mt-24">
        <div className="flex flex-wrap items-center justify-center gap-8 grayscale">
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" width={120} height={40} />
          <Image src="/placeholder.svg?height=40&width=120" alt="Client logo" width={120} height={40} />
        </div>
      </div>
    </section>
  )
}

