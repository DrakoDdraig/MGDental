export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-dentist.png"
          alt="Equipo de MG Dental en el consultorio de Almagro"
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-hero/75 via-hero/60 to-hero/25" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-gold" />
            Consultorio en Almagro, CABA
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            Tu sonrisa, cuidada de <span className="italic text-gold">forma</span> personalizada.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
            En MG Dental atendemos a niños y adultos. Consultanos por tratamientos, disponibilidad y atención
            particular con un equipo que combina experiencia clínica y trato cercano.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#tratamientos"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark"
            >
              Ver tratamientos
            </a>
            <a
              href={`https://wa.me/5491141472917?text=${encodeURIComponent("Hola, quiero consultar por un turno en MG Dental.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
            >
              Solicitar turno
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { value: "7", label: "Especialidades" },
              { value: "2", label: "Profesionales" },
              { value: "100%", label: "Atención personalizada" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl font-semibold text-gold">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
