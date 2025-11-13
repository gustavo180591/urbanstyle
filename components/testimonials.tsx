import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "María G.",
      review:
        "La calidad de la ropa es increíble. Me encantó el buzo que compré y los talles son exactos. Super recomendado!",
      rating: 5,
    },
    {
      name: "Juan M.",
      review:
        "Mejor atención imposible. Me contestaron al toque por WhatsApp y el envío llegó en dos días. Volveré a comprar seguro.",
      rating: 5,
    },
    {
      name: "Sofia L.",
      review:
        "Encontré exactamente lo que buscaba. Las prendas tienen ese toque urbano que me encanta y los precios están justos.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Opiniones de nuestros clientes
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Mirá qué dicen quienes ya compraron con nosotros
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">&quot;{testimonial.review}&quot;</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
