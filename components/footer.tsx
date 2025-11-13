import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-primary font-bold text-lg">US</span>
              </div>
              <span className="font-bold">Urban Style</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">Ropa urbana, cómoda y con onda para tu día a día.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-primary-foreground transition">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-primary-foreground transition">
                  Destacados
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-primary-foreground transition">
                  Colección
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#how-to-buy" className="hover:text-primary-foreground transition">
                  Cómo comprar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Cambios y devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Guía de talles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Seguinos</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:opacity-80 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:opacity-80 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:opacity-80 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>&copy; 2025 Urban Style. Todos los derechos reservados.</p>
          <p>Hecho con onda desde Argentina 🇦🇷</p>
        </div>
      </div>
    </footer>
  )
}
