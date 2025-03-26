import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Modern Portfolio",
  description: "A modern and elegant portfolio website with cool animations",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

