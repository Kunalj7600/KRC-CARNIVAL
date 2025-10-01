"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // EmailJS integration
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_cz3pckn",
          template_id: "template_6inturw",
          user_id: "8AejkcK88C35rBKof",
          template_params: {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
          },
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-input/50 backdrop-blur-sm border-accent/30 focus:border-accent text-foreground placeholder:text-muted-foreground font-mono transition-all duration-300 focus:shadow-[0_0_20px_rgba(121,199,179,0.3)]"
        />

        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-input/50 backdrop-blur-sm border-accent/30 focus:border-accent text-foreground placeholder:text-muted-foreground font-mono transition-all duration-300 focus:shadow-[0_0_20px_rgba(121,199,179,0.3)]"
        />

        <Textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="bg-input/50 backdrop-blur-sm border-accent/30 focus:border-accent text-foreground placeholder:text-muted-foreground font-mono resize-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(121,199,179,0.3)]"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/80 text-background font-bold font-mono tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(121,199,179,0.6)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>

      {submitStatus === "success" && (
        <p className="text-accent text-center font-mono animate-fade-in">✓ Message sent successfully!</p>
      )}

      {submitStatus === "error" && (
        <p className="text-destructive text-center font-mono animate-fade-in">
          ✗ Failed to send message. Please try again.
        </p>
      )}
    </form>
  )
}
