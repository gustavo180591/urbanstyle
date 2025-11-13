import { Truck, RotateCcw, MessageCircle, CreditCard } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Truck,
      title: "Envíos a todo el país",
      description: "Llega a tu puerta rápido y seguro, sin importar dónde estés",
    },
    {
      icon: RotateCcw,
      title: "Cambios fáciles",
      description: "Si no te queda perfecto, hacemos el cambio sin problema",
    },
    {
      icon: MessageCircle,
      title: "Atención personalizada",
      description: "Nuestro equipo te asesora por WhatsApp en todo momento",
    },
    {
      icon: CreditCard,
      title: "Medios de pago seguros",
      description: "Tarjeta, transferencia o efectivo. Elegí lo que prefieras",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Por qué elegirnos</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Somos más que una tienda, somos tu aliado en estilo
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div key={idx} className="flex flex-col gap-4 p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
