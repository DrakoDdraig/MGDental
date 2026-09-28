"use client"

import { CldVideoPlayer } from "next-cloudinary"
import "next-cloudinary/dist/cld-video-player.css"

type Props = {
  id: string
  src: string
}

export function VideoPlayer({ id, src }: Props) {
  return (
    <CldVideoPlayer
      id={id}
      width="1920"
      height="1080"
      src={src}
      transformation={{ quality: "auto", fetchFormat: "auto" }}
      logo={false}
    />
  )
}