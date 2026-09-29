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
    description: "Blanqueamiento, carillas y diseño de sonrisa para lograr una sonrisa armónica y natural.",
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
    description: "Prevención y tratamiento de enfermedades de las encías y tejidos de soporte.",
  },
  {
    name: "Cirugía",
    slug: "cirugia",
    subtitle: "Cirugía bucal",
    description: "Extracciones y cirugía bucal con protocolos seguros y recuperación cuidada.",
  },
  {
    name: "Prótesis",
    slug: "protesis",
    subtitle: "Fijas y removibles",
    description: "Prótesis fijas y removibles, placas de bruxismo y soluciones personalizadas para recuperar tu sonrisa.",
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
  customPage?: string
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
          "Láminas finas de porcelana o composite que se adhieren a la superficie del diente para mejorar su forma, color y alineación.",
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
      {
        slug: "caries",
        title: "Caries",
        description:
          "Tratamiento de caries dental para detener la progresión de la lesión y restaurar la pieza afectada.",
        videoPublicId: "tratamientos/caries",
        whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Caries",
      },
      {
        slug: "incrustaciones",
        title: "Incrustaciones",
        description:
          "Restauraciones que se elaboran en laboratorio y se cementan en la pieza dental para reconstruirla con precisión y resistencia.",
        videoPublicId: "tratamientos/incrustaciones",
        whatsappMessage: "¡Hola! Quería consultar por Incrustaciones",
      },
    ],
  },
  "implantes-dentales": {
    title: "Implantes dentales",
    subtitle: "Rehabilitación",
    videoPublicId: "tratamientos/implantes-dentales",
    description:
      "Reemplazo de piezas perdidas con implantes de titanio, seguros y duraderos.",
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
      "Prevención y tratamiento de enfermedades de las encías y tejidos de soporte.",
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
          "Extracción de piezas dentarias que no pueden conservarse, con protocolo seguro y cuidado post-operatorio.",
        videoPublicId: "tratamientos/exodoncia",
        whatsappMessage: "¡Hola! Quería consultar por una Exodoncia",
      },
    ],
  },
  protesis: {
    title: "Prótesis",
    subtitle: "Fijas y removibles",
    description:
      "Prótesis fijas y removibles, placas de bruxismo y soluciones personalizadas para recuperar tu sonrisa.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Prótesis",
    customPage: "protesis",
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
    videoPublicId: "tratamientos/Ortodoncia",
    description:
      "Brackets y alineadores para corregir la posición de tus dientes a toda edad.",
    whatsappMessage: "¡Hola! Quería consultar por el tratamiento de Ortodoncia",
  },
}

// ─────────────────────────────────────────────────────────────
// Opciones para la página de Prótesis
// ─────────────────────────────────────────────────────────────

export type ProtOption = {
  value: string
  label: string
  whatsappMessage: string
}

export const PROTESIS_FIJAS_OPTIONS: ProtOption[] = [
  {
    value: "pernos",
    label: "Pernos",
    whatsappMessage: "¡Hola! Quería consultar por las prótesis fijas de pernos",
  },
  {
    value: "coronas",
    label: "Coronas",
    whatsappMessage: "¡Hola! Quería consultar por las prótesis fijas de coronas",
  },
]

export const PROTESIS_REMOVIBLES_OPTIONS: ProtOption[] = [
  {
    value: "cromocobalto",
    label: "Cromocobalto",
    whatsappMessage: "¡Hola! Quería consultar por las prótesis removibles de cromocobalto",
  },
  {
    value: "acrilico",
    label: "Acrílico",
    whatsappMessage: "¡Hola! Quería consultar por las prótesis removibles de acrílico",
  },
  {
    value: "flexibles",
    label: "Flexibles",
    whatsappMessage: "¡Hola! Quería consultar por las prótesis removibles flexibles",
  },
]

export const PLACAS_BRUXISMO_OPTIONS: ProtOption[] = [
  {
    value: "rigidas",
    label: "Rígidas",
    whatsappMessage: "¡Hola! Quería consultar por las placas de bruxismo rígidas",
  },
  {
    value: "flexibles",
    label: "Flexibles",
    whatsappMessage: "¡Hola! Quería consultar por las placas de bruxismo flexibles",
  },
]