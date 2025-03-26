"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <div className="mt-2 h-1 w-12 bg-primary rounded-full" />
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="mt-2 text-muted-foreground">+62 878 9143 9149</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="mt-2 text-muted-foreground">zurafisurax.@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Location</h3>
              <p className="mt-2 text-muted-foreground">Jakarta, Indonesia</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

