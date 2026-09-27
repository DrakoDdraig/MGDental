"use client";

import Script from "next/script";

export default function ReviewsCarousel() {
  return (
    <div className="w-full py-12">
      {/* Contenedor donde SociableKit renderiza las reseñas */}
      <div className="sk-ww-google-reviews" data-embed-id="25717302"></div>

      {/* Script de SociableKit */}
      <Script
        src="https://widgets.sociablekit.com/google-reviews/widget.js"
        strategy="afterInteractive"
        defer
      />
    </div>
  );
}