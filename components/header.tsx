"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Categorías", href: "#categories" },
    { label: "Destacados", href: "#featured" },
    { label: "Colección", href: "#collection" },
    { label: "Cómo comprar", href: "#how-to-buy" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">US</span>
            </div>
            <span className="hidden sm:inline font-bold text-primary text-lg">Urban Style</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://wa.me/5491234567890?text=Hola,%20quiero%20conocer%20las%20colecciones%20de%20Urban%20Style"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border bg-card">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/5491234567890?text=Hola,%20quiero%20conocer%20las%20colecciones%20de%20Urban%20Style"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5491234567890?text=Hola,%20quiero%20conocer%20las%20colecciones%20de%20Urban%20Style"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform md:hidden"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  )
}
