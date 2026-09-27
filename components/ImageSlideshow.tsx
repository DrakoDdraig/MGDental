"use client"

import { useEffect, useState } from "react"

const IMAGES = [
  "/images/about-care.png",
  "/images/clinic-chair.png",
]

export function ImageSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border-2 border-ink">
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 700ms ease-in-out",
        }}
      >
        {IMAGES.map((src, index) => (
          <div
            key={src}
            className="h-full w-full shrink-0"
          >
            <img
              src={src}
              alt={`MG Dental ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}