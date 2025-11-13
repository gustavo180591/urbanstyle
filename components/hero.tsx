import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8 animate-fade-in-up">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight text-pretty">
                Vestite como querés, todos los días
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ropa urbana, cómoda y con onda. Envíos a todo el país.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span>
                Cambios fáciles
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span>
                Medios de pago seguros
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#featured"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-center"
              >
                Ver colección
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/5491234567890?text=Hola,%20quiero%20ver%20la%20colección%20de%20Urban%20Style"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar por WhatsApp
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden bg-muted">
            <img src="/modelo-urbano-ropa-moderna-streetwear.jpg" alt="Modelo con ropa urbana" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
