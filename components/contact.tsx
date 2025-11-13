"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, MapPin, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form data:", formData)
    setFormData({ name: "", email: "", whatsapp: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">¿Listx para tu próximo outfit?</h2>
        <p className="text-center text-primary-foreground/80 mb-12 text-lg">
          Contactanos y descubrí todas nuestras opciones
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-primary-foreground text-foreground p-6 md:p-8 rounded-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="Tu WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <textarea
              name="message"
              placeholder="Contanos qué buscás..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <a
              href="https://wa.me/5491234567890?text=Hola,%20me%20interesa%20conocer%20más%20de%20Urban%20Style"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm opacity-90">+54 9 1234 567890</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-primary-foreground/80">hola@urbanstyle.com.ar</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Local Físico</p>
                <p className="text-primary-foreground/80">
                  Belgrano, CABA
                  <br />
                  Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Horarios de atención</p>
                <p className="text-primary-foreground/80">
                  Lunes a Viernes: 10:00 - 18:00
                  <br />
                  Sábado: 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
