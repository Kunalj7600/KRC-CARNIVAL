"use client"

import type React from "react"
import { Mail, Phone, Instagram } from "lucide-react"
import { ContactForm } from "./contact-form"
import { NeonText } from "./neon-text"
import { GlitchText } from "./glitch-text"
import { CyberpunkGrid } from "./cyberpunk-grid"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="fixed top-0 left-0 w-full h-full object-cover -z-10">
        <source src="/bgvi1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/60 -z-10" />

      {/* Animated Grid Background */}
      <CyberpunkGrid />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="text-center pt-12 pb-6 px-4 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/krccarnival-a9IDY1WOU6zCc9dy9ohrQ9ZkjRnnpB.png"
                alt="KRC Carnival Logo"
                className="relative w-48 h-auto drop-shadow-[0_0_25px_rgba(121,199,179,0.6)] group-hover:drop-shadow-[0_0_35px_rgba(121,199,179,0.9)] transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <GlitchText text="Karuyantra" className="text-4xl md:text-5xl font-bold mb-2 font-mono tracking-wider" />
          <NeonText text="The Robotics Club" className="text-xl md:text-2xl font-mono tracking-widest" />
        </header>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-4 py-8 animate-slide-up">
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent opacity-30 blur-lg rounded-2xl animate-pulse" />

            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-accent/30 shadow-[0_0_50px_rgba(121,199,179,0.2)] p-8 md:p-12">
              {/* Title */}
              <div className="mb-12">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 font-mono tracking-tight">
                  <span className="inline-block animate-glow">Contact</span>{" "}
                  <span className="inline-block text-accent animate-glow animation-delay-200">Us</span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accent to-transparent rounded-full" />
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-accent font-mono tracking-wider">KRC CARNIVAL</h2>

                    <div className="space-y-4">
                      <ContactItem
                        icon={<Phone className="w-5 h-5" />}
                        label="Phone"
                        value="+91 85889 30528"
                        href="tel:+918588930528"
                      />

                      <ContactItem
                        icon={<Mail className="w-5 h-5" />}
                        label="Email"
                        value="krc.usar@gmail.com"
                        href="mailto:krc.usar@gmail.com"
                      />

                      <ContactItem
                        icon={<Instagram className="w-5 h-5" />}
                        label="Instagram"
                        value="@robosoc.usar"
                        href="https://instagram.com/robosoc.usar"
                        external
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>

              {/* Footer */}
              <div className="mt-12 pt-8 border-t border-accent/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <a
                  href="mailto:krc.usar@gmail.com"
                  className="text-lg font-bold text-accent hover:text-accent/80 transition-colors font-mono group"
                >
                  <span className="group-hover:drop-shadow-[0_0_10px_rgba(121,199,179,0.8)]">krc.usar@gmail.com</span>
                </a>
                <span className="text-lg font-bold text-foreground font-mono tracking-wider">+91 85889 30528</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}

function ContactItem({ icon, label, value, href, external }: ContactItemProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-start gap-3 group cursor-pointer"
    >
      <div className="mt-1 text-accent group-hover:text-accent/80 transition-colors group-hover:drop-shadow-[0_0_10px_rgba(121,199,179,0.8)] animate-pulse-glow">
        {icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground font-mono">{label}</div>
        <div className="text-foreground group-hover:text-accent transition-colors font-mono">{value}</div>
      </div>
    </a>
  )
}
