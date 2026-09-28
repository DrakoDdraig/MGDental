import { notFound } from "next/navigation"
import Link from "next/link"
import { TREATMENTS_BY_SLUG, WHATSAPP_NUMBER } from "@/lib/treatments"
import { VideoPlayer } from "@/components/video-player"

type Props = {
  params: Promise<{ slug: string; subslug: string }>
}

export async function generateStaticParams() {
  const params: { slug: string; subslug: string }[] = []

  Object.entries(TREATMENTS_BY_SLUG).forEach(([slug, treatment]) => {
    if (treatment.subTreatments) {
      treatment.subTreatments.forEach((sub) => {
        params.push({ slug, subslug: sub.slug })
      })
    }
  })

  return params
}

export default async function SubTreatmentPage({ params }: Props) {
  const { slug, subslug } = await params
  const treatment = TREATMENTS_BY_SLUG[slug]

  if (!treatment || !treatment.subTreatments) {
    notFound()
  }

  const sub = treatment.subTreatments.find((s) => s.slug === subslug)

  if (!sub) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-4xl px-5">
        <Link
          href={`/treatments/${slug}`}
          className="text-sm font-medium text-gold-dark underline-offset-4 hover:underline"
        >
          ← Volver a {treatment.title}
        </Link>

        <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
          {treatment.title}
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink md:text-5xl">
          {sub.title}
        </h1>

        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10">
          <VideoPlayer id={`video-${subslug}`} src={sub.videoPublicId} />
        </div>

        <div className="mt-10">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {sub.description}
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-gold/30 bg-gold/5 p-8 text-center">
          <p className="font-serif text-2xl font-semibold text-ink">
            ¿Querés consultar por {sub.title}?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Escribinos por WhatsApp y te respondemos a la brevedad.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              sub.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}