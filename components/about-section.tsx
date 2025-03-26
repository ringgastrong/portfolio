"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap, User } from "lucide-react"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="mt-2 h-1 w-12 bg-primary rounded-full" />
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Get to know more about me, my experience, and what drives my passion for design and development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-lg border">
            <div className="absolute inset-0 bg-primary/10" />
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="About me"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-2xl font-bold">
              Creative Designer & Developer with a passion for crafting digital experiences
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web design and development, I specialize in creating user-centered
              digital experiences that are both beautiful and functional. My approach combines creative design thinking
              with technical expertise to deliver solutions that exceed expectations.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about staying on top of the latest design trends and technologies, ensuring that my work is
              always fresh, innovative, and effective.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <span className="font-bold">Name:</span>
                <span>M. Ringga Aryasatya</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>zurafisurax@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Availability:</span>
                <span>Freelance</span>
              </div>
            </div>

            <Button className="mt-4 w-fit">Download CV</Button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">5+ Years</h4>
              <p className="text-muted-foreground">Experience</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">100+</h4>
              <p className="text-muted-foreground">Projects</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">15+</h4>
              <p className="text-muted-foreground">Awards</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold">3+</h4>
              <p className="text-muted-foreground">Certifications</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

