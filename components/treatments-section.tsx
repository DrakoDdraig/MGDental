import { TREATMENTS } from "@/lib/treatments"

export function TreatmentsSection() {
  return (
    <section id="tratamientos" className="scroll-mt-20 bg-background">
      {/* Intro band */}
      <div className="bg-gold py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-dark">Tratamientos</span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-[1.05] text-white md:text-5xl">
            Todo lo que tu sonrisa necesita
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-white/70">
            Atendemos a niños y adultos. Evaluamos cada caso de forma personalizada para recomendar el tratamiento
            adecuado.
          </p>
        </div>
      </div>

      {/* Treatments list — pricing-table style layout */}
      <div className="py-20">
        <div className="mx-auto max-w-5xl px-10">
          <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Nuestras especialidades
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-[0_20px_120px_-40px_rgba(1,2,3,1.35)]">
            {/* Header row (desktop) */}
            <div className="hidden bg-linear-to-r from-gold to-gold md:grid md:grid-cols-[1fr_1.8fr_auto]">
              {["Tratamiento", "Descripción", ""].map((col, i) => (
                <div
                  key={i}
                  className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/90"
                >
                  {col}
                </div>
              ))}
            </div>

            <div className="divide-y divide-border bg-white">
              {TREATMENTS.map((t) => (
                <div
                  key={t.name}
                  className="grid gap-3 px-6 py-5 transition-colors hover:bg-muted/40 md:grid-cols-[1fr_1.8fr_auto] md:items-center md:gap-4"
                >
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{t.subtitle}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>

                  {/* Usamos <a> en lugar de <Link> para forzar recarga completa y evitar el bug del video */}
                  <a
                    href={`/treatments/${t.slug}`}
                    className="justify-self-start rounded-full border border-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark transition-colors hover:bg-gold hover:text-white md:justify-self-end"
                  >
                    Ver tratamiento
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-15 text-center text-xs leading-relaxed text-muted-foreground">
            * Los tratamientos y valores se determinan según el caso particular de cada paciente. La evaluación durante
            la primera consulta es necesaria para definir el plan de tratamiento adecuado. *
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-muted/50 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-pretty text-lg font-medium text-ink">
              ¿No sabés qué tratamiento necesitás? Contanos tu consulta y te orientamos.
            </p>
            <a
              href={`https://wa.me/5491136153197?text=${encodeURIComponent("Hola, quiero consultar por un tratamiento en MG Dental.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark"
            >
              Consultanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}