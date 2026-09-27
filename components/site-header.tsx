"use client"

import { useEffect, useState } from "react"

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Cómo llegar", href: "#como-llegar" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="MG Dental, inicio">
          <img
            src="/images/mg-dental-logo.png"
            alt="MG Dental"
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-gold-dark"
        >
          Consultanos
        </a>
      </div>
    </header>
  )
}
