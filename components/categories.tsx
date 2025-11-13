import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Hombre",
      image: "/ropa-para-hombre-urbana-camisetas.jpg",
    },
    {
      id: 2,
      name: "Mujer",
      image: "/ropa-para-mujer-urbana-remeras.jpg",
    },
    {
      id: 3,
      name: "Unisex",
      image: "/ropa-unisex-urbana-buzos.jpg",
    },
    {
      id: 4,
      name: "Accesorios",
      image: "/accesorios-urbanos-gorras-mochilas.jpg",
    },
  ]

  return (
    <section id="categories" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Nuestras Categorías</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Explora cada sección y encuentra lo que buscas
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative h-48 md:h-56 rounded-lg overflow-hidden bg-muted mb-4">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{category.name}</h3>
              <Link
                href="#"
                className="text-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Explorar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
