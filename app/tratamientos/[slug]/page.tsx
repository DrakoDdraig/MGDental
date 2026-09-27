import { notFound } from "next/navigation"
import { CldVideoPlayer } from "next-cloudinary"
import "next-cloudinary/dist/cld-video-player.css"
import Link from "next/link"

const TRATAMIENTOS = {
  "estetica-dental": {
    title: "Estética dental",
    subtitle: "Diseño de sonrisa",
    videoPublicId: "tratamientos/estetica-dental",
    description:
      "Blanqueamiento, carillas y diseño de sonrisa para lograr una sonrisa armónica y natural.",
  },
  "implantes-dentales": {
    title: "Implantes dentales",
    subtitle: "Rehabilitación",
    videoPublicId: "tratamientos/implantes-dentales",
    description:
      "Reemplazo de piezas perdidas con implantes de titanio, seguros y duraderos.",
  },
  "endodoncia": {
    title: "Endodoncia",
    subtitle: "Tratamiento de conducto",
    videoPublicId: "tratamientos/endodoncia",
    description:
      "Tratamiento de conducto para conservar piezas dañadas y eliminar el dolor.",
  },
  "periodoncia": {
    title: "Periodoncia",
    subtitle: "Salud de encías",
    videoPublicId: "tratamientos/periodoncia",
    description:
      "Prevención y tratamiento de enfermedades de las encías y tejidos de soporte.",
  },
  "cirugia": {
    title: "Cirugía",
    subtitle: "Cirugía bucal",
    videoPublicId: "tratamientos/cirugia",
    description:
      "Extracciones y cirugía bucal con protocolos seguros y recuperación cuidada.",
  },
  "armonizacion-orofacial": {
    title: "Armonización orofacial",
    subtitle: "Estética facial",
    videoPublicId: "tratamientos/armonizacion-orofacial",
    description:
      "Procedimientos estéticos faciales para realzar la armonía de tu rostro.",
  },
  "ortodoncia": {
    title: "Ortodoncia",
    subtitle: "Niños y adultos",
    videoPublicId: "tratamientos/ortodoncia",
    description:
      "Brackets y alineadores para corregir la posición de tus dientes a toda edad.",
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function TratamientoPage({ params }: Props) {
  const { slug } = await params
  const tratamiento = TRATAMIENTOS[slug as keyof typeof TRATAMIENTOS]

  if (!tratamiento) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-4xl px-5">
        <Link
          href="/#tratamientos"
          className="text-sm font-medium text-gold-dark underline-offset-4 hover:underline"
        >
          ← Volver a tratamientos
        </Link>

        <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
          {tratamiento.subtitle}
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink md:text-5xl">
          {tratamiento.title}
        </h1>

        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10">
          <CldVideoPlayer
            id={`video-${slug}`}
            width="1920"
            height="1080"
            src={tratamiento.videoPublicId}
            transformation={{ quality: "auto", fetchFormat: "auto" }}
          />
        </div>

        <div className="mt-10">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {tratamiento.description}
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-gold/30 bg-gold/5 p-8 text-center">
          <p className="font-serif text-2xl font-semibold text-ink">
            ¿Querés consultar por este tratamiento?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Escribinos y te respondemos a la brevedad.
          </p>
          <Link
            href="/#contacto"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark"
          >
            Consultar turno
          </Link>
        </div>
      </div>
    </main>
  )
}