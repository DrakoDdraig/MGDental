"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  WHATSAPP_NUMBER,
  PROTESIS_REMOVIBLES_OPTIONS,
  PLACAS_BRUXISMO_OPTIONS,
  type ProtOption,
} from "@/lib/treatments"

type ConsultaCardConSelectProps = {
  title: string
  imageSrc: string
  description: string[]
  options: ProtOption[]
}

function ConsultaCardConSelect({
  title,
  imageSrc,
  description,
  options,
}: ConsultaCardConSelectProps) {
  const [selected, setSelected] = useState<string>("")
  const option = options.find((o) => o.value === selected)

  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
      {/* Imagen */}
      <div className="relative aspect-[16/9] w-full bg-ink/5">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Imagen próximamente
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h2>

        <div className="mt-4 space-y-3">
          {description.map((parrafo, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground">
              {parrafo}
            </p>
          ))}
        </div>

        {/* Menú desplegable */}
        <div className="mt-6">
          <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-gold-dark">
            Consultar por
          </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-xl border-2 border-gold bg-gold px-4 py-3.5 text-sm font-semibold text-white outline-none transition-colors hover:bg-gold-dark focus:border-gold-dark"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1.1em",
            }}
          >
            <option value="" className="bg-white text-ink">
              Seleccioná una opción
            </option>
            {options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-white text-ink"
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Botón que aparece SOLO cuando hay una opción seleccionada */}
        {option && (
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              option.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark"
          >
            Consultar por WhatsApp
          </a>
        )}
      </div>
    </div>
  )
}

type ConsultaCardConBotonProps = {
  title: string
  imageSrc: string
  description: string[]
  buttonLabel: string
  whatsappMessage: string
}

function ConsultaCardConBoton({
  title,
  imageSrc,
  description,
  buttonLabel,
  whatsappMessage,
}: ConsultaCardConBotonProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
      {/* Imagen */}
      <div className="relative aspect-[16/9] w-full bg-ink/5">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Imagen próximamente
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h2>

        <div className="mt-4 space-y-3">
          {description.map((parrafo, i) => (
            <p key={i} className="text-sm leading-relaxed text-muted-foreground">
              {parrafo}
            </p>
          ))}
        </div>

        {/* Botón directo */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  )
}

export default function ProtesisPage() {
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
          Fijas y removibles
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-ink md:text-5xl">
          Prótesis
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Ofrecemos prótesis fijas, removibles y placas de bruxismo adaptadas a
          las necesidades de cada paciente. Conocé cada opción y escribinos por
          WhatsApp para recibir más información.
        </p>

        <div className="mt-10 grid gap-8">
          {/* Prótesis fijas — botón directo, sin select */}
          <ConsultaCardConBoton
            title="Prótesis fijas"
            // 👇 ACÁ VA LA RUTA DE TU IMAGEN
            imageSrc=""  // Ejemplo: "/images/protesis-fijas.jpg"
            description={[
              "Las prótesis fijas son coronas que se cementan de forma permanente sobre los dientes naturales o sobre implantes, y el paciente no puede retirarlas por sí mismo.",
              "Se utilizan cuando una pieza dental está muy dañada y no puede repararse con una restauración simple, o cuando se necesita reemplazar una pieza ausente. Permiten recuperar la función masticatoria, la estética y la protección del diente remanente.",
              "Pueden ser de porcelana pura (zirconio, disilicato de litio) o metalocerámicas.",
            ]}
            buttonLabel="Consultar por coronas"
            whatsappMessage="¡Hola! Quería consultar por las prótesis fijas de coronas"
          />

          {/* Prótesis removibles — con select */}
          <ConsultaCardConSelect
            title="Prótesis removibles"
            // 👇 ACÁ VA LA RUTA DE TU IMAGEN
            imageSrc=""  // Ejemplo: "/images/protesis-removibles.jpg"
            description={[
              "Las prótesis removibles son estructuras que el paciente puede retirar y volver a colocar por sí mismo, ideales cuando faltan varias piezas dentarias o su totalidad y cuando no es posible realizar una prótesis fija.",
              "Se apoyan sobre los dientes remanentes y las encías, y se fabrican con distintos materiales según las necesidades y preferencias de cada caso.",
              "Trabajamos con tres tipos: cromocobalto, acrílico y flexibles.",
            ]}
            options={PROTESIS_REMOVIBLES_OPTIONS}
          />

          {/* Placas de bruxismo — con select */}
          <ConsultaCardConSelect
            title="Placas de bruxismo"
            // 👇 ACÁ VA LA RUTA DE TU IMAGEN
            imageSrc=""  // Ejemplo: "/images/placas-bruxismo.jpg"
            description={[
              "Las placas de bruxismo son dispositivos de protección que se colocan sobre los dientes para evitar el desgaste causado por el apretamiento o rechinamiento nocturno.",
              "Su uso es fundamental para proteger el esmalte dental, evitar fracturas, reducir la tensión muscular y prevenir dolores de cabeza o de mandíbula asociados al bruxismo.",
              "Ofrecemos dos versiones: rígidas y flexibles, cada una indicada según el caso.",
            ]}
            options={PLACAS_BRUXISMO_OPTIONS}
          />
        </div>
      </div>
    </main>
  )
}