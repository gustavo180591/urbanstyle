import { ShoppingBag, MessageCircle, Truck } from "lucide-react"

export default function HowToBuy() {
  const steps = [
    {
      number: 1,
      icon: ShoppingBag,
      title: "Elegís tus prendas favoritas",
      description: "Browsea nuestro catálogo y selecciona lo que te late",
    },
    {
      number: 2,
      icon: MessageCircle,
      title: "Nos escribís por WhatsApp",
      description: "Mandanos los modelos y talles que querés, nosotros confirmamos disponibilidad",
    },
    {
      number: 3,
      icon: Truck,
      title: "Coordinamos pago y envío",
      description: "Agendamos la forma de pago y tu pedido sale hacia tu casa",
    },
  ]

  return (
    <section id="how-to-buy" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Cómo comprar</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">3 pasos simples para tu próximo outfit</p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <Icon className="w-6 h-6 text-primary hidden sm:block" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
