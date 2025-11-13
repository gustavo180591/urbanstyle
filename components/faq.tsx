"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "¿Cómo sé cuál es mi talle?",
      answer:
        "Tenemos una guía de talles detallada en cada producto. Si tenes dudas, mandanos un WhatsApp y te ayudamos a elegir el talle perfecto según tus medidas.",
    },
    {
      question: "¿Puedo cambiar un producto?",
      answer:
        "Sí! Si el producto no te queda bien o no te satisface, podés cambiarlo sin problema. Solo contactanos dentro de 7 días de la compra.",
    },
    {
      question: "¿Cuánto tarda el envío?",
      answer:
        "Los envíos a CABA y GBA tardan 2-3 días hábiles. Al interior del país, 5-7 días hábiles. Hacemos seguimiento de tu pedido desde el momento que se despacha.",
    },
    {
      question: "¿Qué medios de pago aceptan?",
      answer:
        "Aceptamos transferencia bancaria, efectivo contra entrega en CABA, y también trabajamos con plataformas de pago como Mercado Pago. Consultá opciones especiales.",
    },
    {
      question: "¿Hay descuentos por cantidad?",
      answer:
        "Claro! Si compras en cantidad, tenemos opciones especiales. Contactanos por WhatsApp para armar tu mejor propuesta.",
    },
  ]

  const toggleItem = (idx: number) => {
    setOpenItems((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]))
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Preguntas Frecuentes</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Respondemos tus dudas más comunes</p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full p-4 md:p-6 flex items-center justify-between bg-card hover:bg-muted transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent transition-transform flex-shrink-0 ${
                    openItems.includes(idx) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItems.includes(idx) && (
                <div className="p-4 md:p-6 bg-background border-t border-border text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
