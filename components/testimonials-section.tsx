"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/placeholder.svg?height=100&width=100",
    text: "Working with this team was an absolute pleasure. They delivered our website ahead of schedule and exceeded all our expectations. Their attention to detail and creative approach helped us stand out in a competitive market.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director, Innovate Inc",
    image: "/placeholder.svg?height=100&width=100",
    text: "The redesign of our e-commerce platform resulted in a 40% increase in conversions. Their understanding of UX principles and ability to create intuitive interfaces made all the difference. I highly recommend their services.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder, DesignHub",
    image: "/placeholder.svg?height=100&width=100",
    text: "I've worked with many developers, but few have the combination of technical skill and design sensibility that this team possesses. They don't just build websites; they create experiences that engage and convert.",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO, FutureTech",
    image: "/placeholder.svg?height=100&width=100",
    text: "The mobile app they developed for us has received outstanding feedback from our users. Their ability to translate complex requirements into a seamless user experience is remarkable. We're already planning our next project with them.",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const maxVisibleItems = 3

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - maxVisibleItems ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - maxVisibleItems : prev - 1))
  }

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    Math.min(activeIndex + maxVisibleItems, testimonials.length),
  )

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
          <div className="mt-2 h-1 w-12 bg-primary rounded-full" />
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-6 md:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonials</span>
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonials</span>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center bg-muted/50 p-8 rounded-lg">
          <Quote className="h-12 w-12 text-primary/40 mb-4" />
          <p className="text-xl md:text-2xl font-medium text-center max-w-3xl">
            "I believe that great design is not just about aesthetics, but about creating meaningful experiences that
            solve real problems."
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary">
              <Image
                src="https://avatars.githubusercontent.com/u/87937152?v=4"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">M. Ringga Aryastya</h4>
              <p className="text-muted-foreground">Student & Editor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
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
    <Card ref={cardRef} className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Quote className="h-5 w-5 text-primary" />
        </div>
        <p className="mb-6 text-muted-foreground">"{testimonial.text}"</p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

