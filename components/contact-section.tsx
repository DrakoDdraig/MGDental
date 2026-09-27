"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react"

const INFO = [
  {
    icon: MapPin,
    label: "Dirección",
    lines: ["Jerónimo Salguero 86", "Almagro, C.A.B.A."],
  },
  {
    icon: Phone,
    label: "Turnos y consultas",
    lines: ["11 4722-6746"],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["011 4147-2917"],
  },
  {
    icon: Clock,
    label: "Horarios de atención",
    lines: ["Lun de 11 a 18 h", "Mar, Vie y Sáb", "de 14:30 a 19:30 h"],
  },
]

const WEB3FORMS_ACCESS_KEY = "da424655-b583-466c-ac65-f2d14cb42213"

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY)
    formData.append("subject", "Nueva consulta desde la web de MG Dental")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setSent(true)
      } else {
        console.error("Error al enviar:", data)
        alert("Hubo un error al enviar la consulta. Por favor, intentá de nuevo.")
      }
    } catch (error) {
      console.error("Error de red:", error)
      alert("Hubo un error de conexión. Revisá tu internet e intentá de nuevo.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left: intro + info */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Contacto
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] md:text-5xl">
              Turnos y consultas
              <br />
              <span className="italic text-gold">en Almagro.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/70">
              Atendemos de forma personalizada a niños y adultos. Escribinos para consultar por
              tratamientos y disponibilidad.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {INFO.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/3 p-5"
                  >
                    <div className="flex items-center gap-2.5 text-gold">
                      <Icon className="size-4" aria-hidden="true" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                        {item.label}
                      </span>
                    </div>
                    <div className="mt-3 space-y-0.5">
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm leading-relaxed text-white/80">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-white/10 bg-white/4 p-7 sm:p-9">
            <h3 className="font-serif text-2xl font-semibold">Envianos tu consulta</h3>
            <p className="mt-1.5 text-sm text-white/60">Te respondemos a la brevedad.</p>

            {sent ? (
              <div
                role="status"
                className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-6 text-center"
              >
                <p className="font-medium text-white">¡Gracias por tu consulta!</p>
                <p className="mt-1 text-sm text-white/70">
                  Recibimos tu mensaje y te contactaremos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="nombre" label="Nombre y apellido" placeholder="Tu nombre" required />
                  <Field
                    id="telefono"
                    label="Teléfono"
                    type="tel"
                    placeholder="+54 11 ..."
                    required
                  />
                </div>
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />

                <div>
                  <label
                    htmlFor="tratamiento"
                    className="mb-1.5 block text-sm font-medium text-white/80"
                  >
                    Tratamiento de interés
                  </label>
                  <select
                    id="tratamiento"
                    name="tratamiento"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
                  >
                    <option value="" disabled className="text-ink">
                      Seleccioná una opción
                    </option>
                    {[
                      "Estética dental",
                      "Implantes dentales",
                      "Endodoncia",
                      "Periodoncia",
                      "Cirugía",
                      "Armonización orofacial",
                      "Ortodoncia",
                      "No estoy seguro/a",
                    ].map((opt) => (
                      <option key={opt} value={opt} className="text-ink">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="obraSocial"
                    className="mb-1.5 block text-sm font-medium text-white/80"
                  >
                    Obra Social
                  </label>
                  <select
                    id="obraSocial"
                    name="obraSocial"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
                  >
                    <option value="" disabled className="text-ink">
                      Seleccioná una opción
                    </option>
                    <option value="Jerárquicos Salud" className="text-ink">
                      Jerárquicos Salud
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="consulta"
                    className="mb-1.5 block text-sm font-medium text-white/80"
                  >
                    Consulta
                  </label>
                  <textarea
                    id="consulta"
                    name="consulta"
                    rows={4}
                    placeholder="Contanos brevemente qué necesitás..."
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? "Enviando..." : "Consultar turno"}
                  </button>
                  <a
                    href="tel:+541147226746"
                    className="rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
                  >
                    Llamar ahora
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Obras sociales */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/4 p-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Obras sociales con las que trabajamos
          </span>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="https://www.jerarquicos.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Jerárquicos Salud"
              className="grid h-17 min-w-55 place-items-center rounded-2xl border-2 border-ink bg-white px-7 transition-transform hover:scale-[1.02]"
            >
              <img
                src="/images/jerarquicos-logo.png"
                alt="Jerárquicos Salud"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Map / Cómo llegar */}
        <div
          id="como-llegar"
          className="mt-16 scroll-mt-24 overflow-hidden rounded-3xl border border-white/10"
        >
          <iframe
            title="Ubicación de MG Dental en Almagro"
            src="https://www.google.com/maps?q=Jer%C3%B3nimo+Salguero+86,+Almagro,+CABA&output=embed"
            className="h-80 w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="bg-ink px-5 py-4 text-center">
            <a
              href="https://maps.app.goo.gl/HEWvjK3nETmfnB1k8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold underline-offset-4 hover:underline"
            >
              Ver en Google Maps · Jerónimo Salguero 86, Almagro
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-gold"
      />
    </div>
  )
}