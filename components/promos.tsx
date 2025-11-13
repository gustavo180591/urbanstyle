import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Promos() {
  const promos = [
    {
      title: "2x1 en seleccionados",
      description: "Comprá dos prendas y pagá una en toda la sección de buzos y remeras",
      color: "bg-accent",
    },
    {
      title: "Descuentos especiales",
      description: "Hasta 20% off en efectivo o transferencia bancaria",
      color: "bg-primary",
    },
    {
      title: "Envío gratis",
      description: "En compras mayores a $5.000 a todo el país",
      color: "bg-slate-700",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Ofertas y Promos</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className={`${promo.color} text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow`}
            >
              <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
              <p className="text-white/90">{promo.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#featured"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Ver prendas en promo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
