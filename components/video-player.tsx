"use client"

type Props = {
  src: string
}

export function VideoPlayer({ src }: Props) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${src}.mp4`

  return (
    <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-3xl border border-ink/10">
      <video
        controls
        playsInline
        preload="metadata"
        className="block h-auto w-full"
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  )
}