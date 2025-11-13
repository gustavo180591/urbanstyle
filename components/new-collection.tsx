import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewCollection() {
  return (
    <section id="collection" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src="/colecci-n-oto-o-invierno-2024-ropa-urbana.jpg"
              alt="Colección Otoño-Invierno"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 md:order-2">
            <div>
              <p className="text-accent font-semibold mb-2">Nueva Temporada</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-pretty">
                Colección Otoño-Invierno
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Descubrí nuestras prendas premium con las mejores telas, colores sofisticados y diseños que reflejan tu
                estilo urbano. Esta temporada traemos buzos, camperas y abrigos perfectos para los días frescos,
                manteniendo ese toque de onda que te caracteriza.
              </p>
            </div>

            <Link
              href="#featured"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-fit text-center"
            >
              Ver colección completa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
