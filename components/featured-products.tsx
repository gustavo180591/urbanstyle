import { MessageCircle } from "lucide-react"

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Buzo Oversize Classic",
      price: "$2.499",
      image: "/buzo-oversize-negro-urbano.jpg",
      badge: "Más vendido",
      badgeColor: "bg-primary",
    },
    {
      id: 2,
      name: "Remera Estampada Urban",
      price: "$899",
      image: "/remera-estampada-urbana-blanca.jpg",
      badge: "Nuevo",
      badgeColor: "bg-accent",
    },
    {
      id: 3,
      name: "Jeans Skinny Fit",
      price: "$3.299",
      image: "/jeans-negros-skinny-fit-urbano.jpg",
      badge: null,
    },
    {
      id: 4,
      name: "Campera Cargo Tech",
      price: "$4.199",
      image: "/campera-cargo-negra-techwear.jpg",
      badge: "Oferta",
      badgeColor: "bg-red-500",
    },
    {
      id: 5,
      name: "Vestido Midi Elegante",
      price: "$2.999",
      image: "/vestido-midi-negro-elegante-urbano.jpg",
      badge: null,
    },
    {
      id: 6,
      name: "Zapatillas Street Style",
      price: "$3.599",
      image: "/zapatillas-blancas-urbanas-street-style.jpg",
      badge: "Nuevo",
      badgeColor: "bg-accent",
    },
  ]

  return (
    <section id="featured" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Productos Destacados</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Lo más buscado y amado por nuestros clientes</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Product Image */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-muted mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <div
                    className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                <p className="text-2xl font-bold text-accent">{product.price}</p>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/5491234567890?text=Hola,%20me%20interesa%20el%20producto:%20${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ver detalles
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
