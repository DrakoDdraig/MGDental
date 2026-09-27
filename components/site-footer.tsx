export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center rounded-xl oklch(0.72 0.09 182); px-3 py-1.5">
            <img src="/images/mg-dental-logo-white.png" alt="MG Dental" className="h-20 w-auto" />
          </span>
        </div>

        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
          <span className="size-1.5 rounded-full bg-gold" />
          Jerónimo Salguero 86 · Almagro, CABA
        </p>

        <p className="text-xs">© {new Date().getFullYear()} MG Dental. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
