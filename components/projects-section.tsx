"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A modern e-commerce platform with a seamless shopping experience.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A secure and user-friendly mobile banking application.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A creative portfolio website for a photographer.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A productivity app to help users manage their tasks efficiently.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description: "An elegant website for a high-end restaurant with online reservations.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "A comprehensive fitness tracking application with personalized insights.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    link: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  const [category, setCategory] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "duration-700")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="mt-2 h-1 w-12 bg-primary rounded-full" />
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Explore my recent projects and discover the passion I bring to every design and development challenge.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setCategory("all")} className="text-sm">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="web" onClick={() => setCategory("web")} className="text-sm">
                Web Design
              </TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setCategory("mobile")} className="text-sm">
                Mobile Apps
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4", "duration-700")
            entry.target.style.animationDelay = `${index * 100}ms`
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <Card ref={cardRef} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
          <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full">
            <Link href={project.link}>
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Visit project</span>
            </Link>
          </Button>
          <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full">
            <Link href={project.github}>
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub repository</span>
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
      </CardContent>
    </Card>
  )
}

