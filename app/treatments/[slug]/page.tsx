import { notFound } from "next/navigation"
import Link from "next/link"
import { TREATMENTS_BY_SLUG, WHATSAPP_NUMBER } from "@/lib/treatments"
import { VideoPlayer } from "@/components/video-player"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params
  const treatment = TREATMENTS_BY_SLUG[slug]

  if (!treatment) {
    notFound()
  }

  const hasSubTreatments =
    Array.isArray(treatment.subTreatments) && treatment.subTreatments.length > 0

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
          {treatment.subtitle}
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink md:text-5xl">
          {treatment.title}
        </h1>

        {hasSubTreatments ? (
          <>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {treatment.description}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {treatment.subTreatments!.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/treatments/${slug}/${sub.slug}`}
                  className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-ink">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {sub.description}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-gold-dark transition-transform group-hover:translate-x-1">
                    Conocer más →
                  </span>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10">
              <VideoPlayer id={`video-${slug}`} src={treatment.videoPublicId!} />
            </div>

            <div className="mt-10">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {treatment.description}
              </p>
            </div>

            <div className="mt-12 rounded-3xl border border-gold/30 bg-gold/5 p-8 text-center">
              <p className="font-serif text-2xl font-semibold text-ink">
                ¿Querés consultar por este tratamiento?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Escribinos por WhatsApp y te respondemos a la brevedad.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  treatment.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  )
}