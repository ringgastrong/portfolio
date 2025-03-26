"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Braces, Code2, Database, FileCode, Figma, Layers, Palette, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Braces className="h-6 w-6 text-primary" />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Design",
    icon: <Palette className="h-6 w-6 text-primary" />,
    items: [
      { name: "UI/UX Design", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Photoshop", level: 75 },
    ],
  },
  {
    category: "Other Skills",
    icon: <Layers className="h-6 w-6 text-primary" />,
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "SEO", level: 80 },
      { name: "Performance Optimization", level: 85 },
    ],
  },
]

const technologies = [
  { name: "HTML5", icon: <FileCode className="h-6 w-6" /> },
  { name: "CSS3", icon: <FileCode className="h-6 w-6" /> },
  { name: "JavaScript", icon: <Braces className="h-6 w-6" /> },
  { name: "React", icon: <Code2 className="h-6 w-6" /> },
  { name: "Next.js", icon: <Code2 className="h-6 w-6" /> },
  { name: "Node.js", icon: <Braces className="h-6 w-6" /> },
  { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
  { name: "Figma", icon: <Figma className="h-6 w-6" /> },
  { name: "Responsive", icon: <Smartphone className="h-6 w-6" /> },
  { name: "Git", icon: <Braces className="h-6 w-6" /> },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="skills" ref={sectionRef} className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <div className="mt-2 h-1 w-12 bg-primary rounded-full" />
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            I've developed a diverse set of skills to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <SkillCard key={index} skillGroup={skillGroup} index={index} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {technologies.map((tech, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-md hover:bg-muted/50">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {tech.icon}
                  </div>
                  <h4 className="font-medium">{tech.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  skillGroup,
  index,
}: {
  skillGroup: (typeof skills)[0]
  index: number
}) {
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
    <Card ref={cardRef} className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">{skillGroup.icon}</div>
          <h3 className="text-xl font-bold">{skillGroup.category}</h3>
        </div>

        <div className="space-y-4">
          {skillGroup.items.map((skill, skillIndex) => (
            <div key={skillIndex} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

