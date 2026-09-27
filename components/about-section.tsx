import { ImageSlideshow } from "@/components/ImageSlideshow"
import { Check } from "lucide-react"
import Link from "next/link"

const HIGHLIGHTS = [
  {
    title: "Atención a niños y adultos",
    description: "Atendemos a toda la familia con un enfoque cálido y adaptado a cada edad.",
  },
  {
    title: "Tratamientos integrales",
    description: "Resolvemos salud y estética dental con un equipo multidisciplinario.",
  },
  {
    title: "Consultorio en Almagro",
    description: "Un espacio moderno y cómodo, fácil de llegar en Jerónimo Salguero 86, CABA.",
  },
]

// TODO: reemplazá los "href" con los links reales de Instagram
const DOCTORS = [
  {
    name: "Dra. Mariel Gallardo",
    role: "Odontóloga",
    instagram: "https://www.instagram.com/odonto.mgallardo/", 
  },
  {
    name: "Dr. Milton Morón",
    role: "Odontólogo",
    instagram: "https://www.instagram.com/dr.miltonmoron/", 
  },
]

// TODO: reemplazá con el link real de Google Maps del consultorio
const MAPS_URL =
  "https://maps.app.goo.gl/NE82vaWDXdRQA4gy6"

export function AboutSection() {
  const newLocal =
    "absolute -bottom-6 -right-4 hidden max-w-55 rounded-2xl border border-ink bg-gold p-6 text-white shadow-xl sm:block transition-transform hover:scale-105"
  return (
    <section id="nosotros" className="bg-background py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden">
            <ImageSlideshow />
          </div>

          {/* Tarjeta Almagro → ahora clickeable a Google Maps */}
          <Link
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={newLocal}
            aria-label="Ver ubicación en Google Maps"
          >
            <p className="font-serif text-2xl font-semibold text-ink">Almagro</p>
            <p className="mt-1 text-sm leading-snug text-white/80">
              Jerónimo Salguero 86 — C.A.B.A.
            </p>
          </Link>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Nosotros
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Atención odontológica cercana y profesional
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            MG Dental es un consultorio odontológico dedicado a la salud y estética dental. Nuestro
            equipo combina experiencia clínica y atención personalizada para cada paciente,
            evaluando cada caso de forma individual para recomendar el tratamiento adecuado.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-dark">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              Nuestro equipo
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {DOCTORS.map((doc) => (
                // Tarjeta doctor → ahora clickeable a Instagram
                <Link
                  key={doc.name}
                  href={doc.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-gold bg-gold/30 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  aria-label={`Instagram de ${doc.name}`}
                >
                  <p className="font-serif text-lg font-semibold text-ink">{doc.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{doc.role}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}