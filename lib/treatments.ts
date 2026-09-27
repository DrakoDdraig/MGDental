export type Treatment = {
  name: string
  slug: string
  subtitle: string
  description: string
}

export const TREATMENTS: Treatment[] = [
  {
    name: "Estética dental",
    slug: "estetica-dental",
    subtitle: "Diseño de sonrisa",
    description: "Láminas finas de porcelana o resinas esteticas que se adhieren a la superficie del diente para mejorar su forma, color y alineación.",
  },
  {
    name: "Implantes dentales",
    slug: "implantes-dentales",
    subtitle: "Rehabilitación",
    description: "Reemplazo de piezas perdidas con implantes de titanio, seguros y duraderos.",
  },
  {
    name: "Endodoncia",
    slug: "endodoncia",
    subtitle: "Tratamiento de conducto",
    description: "Tratamiento de conducto para conservar piezas dañadas y eliminar el dolor.",
  },
  {
    name: "Periodoncia",
    slug: "periodoncia",
    subtitle: "Salud de encías",
    description: "Prevención, tratamiento y limpieza de calculo dental (sarro) que afecta el tejido de soporte y a la encía.",
  },
  {
    name: "Cirugía",
    slug: "cirugia",
    subtitle: "Cirugía bucal",
    description: "Extracciones y cirugía bucal con protocolos seguros y recuperación cuidada.",
  },
  {
    name: "Armonización orofacial",
    slug: "armonizacion-orofacial",
    subtitle: "Estética facial",
    description: "Procedimientos estéticos faciales para realzar la armonía de tu rostro.",
  },
  {
    name: "Ortodoncia",
    slug: "ortodoncia",
    subtitle: "Niños y adultos",
    description: "Brackets y alineadores para corregir la posición de tus dientes a toda edad.",
  },
]

// ─────────────────────────────────────────────────────────────
// Datos para las páginas de detalle (/treatments/[slug])
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "5491136153197"

export type SubTreatment = {
  slug: string
  title: string
  description: string
  videoPublicId: string
  whatsappMessage: string
}

export type TreatmentDetail = {
  title: string
  subtitle: string
  description: string
  whatsappMessage: string
  videoPublicId?: string
  subTreatments?: SubTreatment[]
}

export const TREATMENTS_BY_SLUG: Record<string, TreatmentDetail> = {
  "estetica-dental": {
    title: "Estética dental",
    subtitle: "Diseño de sonrisa",
    description:
      "Blanqueamiento, carillas y diseño de sonrisa para lograr una sonrisa armónica y natural.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Estética dental",
    subTreatments: [
      {
        slug: "carillas",
        title: "Carillas",
        description:
          "Láminas finas de porcelana o resinas esteticas que se adhieren a la superficie del diente para mejorar su forma, color y alineación.",
        videoPublicId: "tratamientos/carillas",
        whatsappMessage: "¡Hola! Quería consultar por Carillas",
      },
      {
        slug: "blanqueamiento",
        title: "Blanqueamiento",
        description:
          "Tratamiento estético que aclara el color de los dientes, eliminando manchas y devolviendo el brillo natural de la sonrisa.",
        videoPublicId: "tratamientos/blanqueamiento",
        whatsappMessage: "¡Hola! Quería consultar por Blanqueamiento",
      },
    ],
  },
  "implantes-dentales": {
    title: "Implantes dentales",
    subtitle: "Rehabilitación",
    videoPublicId: "tratamientos/implantes-dentales",
    description:
      "Reemplazo de piezas perdidas con implantes de titanio o zirconia, seguros y duraderos.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Implantes dentales",
  },
  endodoncia: {
    title: "Endodoncia",
    subtitle: "Tratamiento de conducto",
    videoPublicId: "tratamientos/endodoncia",
    description:
      "Tratamiento de conducto para conservar piezas dañadas y eliminar el dolor.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Endodoncia",
  },
  periodoncia: {
    title: "Periodoncia",
    subtitle: "Salud de encías",
    videoPublicId: "tratamientos/periodoncia",
    description:
      "Prevención, tratamiento y limpieza de calculo dental (sarro) que afecta el tejido de soporte y a la encía.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Periodoncia",
  },
  cirugia: {
    title: "Cirugía",
    subtitle: "Cirugía bucal",
    description:
      "Extracciones y cirugía bucal con protocolos seguros y recuperación cuidada.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Cirugía bucal",
    subTreatments: [
      {
        slug: "exodoncia",
        title: "Exodoncia",
        description:
          "Extracción de piezas dentarias simples y complejas que no pueden conservarse, con protocolo seguro y cuidado post-operatorio.",
        videoPublicId: "tratamientos/exodoncia",
        whatsappMessage: "¡Hola! Quería consultar por una Exodoncia",
      },
    ],
  },
  "armonizacion-orofacial": {
    title: "Armonización orofacial",
    subtitle: "Estética facial",
    videoPublicId: "tratamientos/armonizacion-orofacial",
    description:
      "Procedimientos estéticos faciales para realzar la armonía de tu rostro.",
    whatsappMessage:
      "¡Hola! Quería consultar por el tratamiento de Armonización orofacial",
  },
  ortodoncia: {
    title: "Ortodoncia",
    subtitle: "Niños y adultos",
    videoPublicId: "Ortodoncia",
    description:
      "Brackets y alineadores para corregir la posición de tus dientes a toda edad.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Ortodoncia",
  },
}