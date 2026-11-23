"use client";

import { useState } from "react";
import Image from "next/image";

export default function CreationCarousel({ item, wide = false }) {
  const [index, setIndex] = useState(0);
  const image = item.images[index];

  function showPrevious() {
    setIndex((current) => (current - 1 + item.images.length) % item.images.length);
  }

  function showNext() {
    setIndex((current) => (current + 1) % item.images.length);
  }

  return (
    <div
      className={`creation-image creation-carousel ${wide ? "creation-image--wide" : ""}`}
      role="group"
      aria-label={`Photos : ${item.title}`}
    >
      {item.images.map((photo, photoIndex) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photoIndex === index ? photo.alt : ""}
          aria-hidden={photoIndex !== index}
          fill
          sizes={wide ? "(max-width: 720px) 100vw, 1200px" : "(max-width: 720px) 100vw, 55vw"}
          className={`object-image carousel-slide ${photoIndex === index ? "carousel-slide--active" : ""}`}
        />
      ))}

      <button
        className="carousel-arrow carousel-arrow--previous"
        type="button"
        onClick={showPrevious}
        aria-label={`Photo précédente : ${item.title}`}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="m15 5-7 7 7 7" />
        </svg>
      </button>
      <button
        className="carousel-arrow carousel-arrow--next"
        type="button"
        onClick={showNext}
        aria-label={`Photo suivante : ${item.title}`}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path d="m9 5 7 7-7 7" />
        </svg>
      </button>

      <span className="price-tag" aria-label={`Prix indicatif : ${item.price}`}>
        {item.price}
      </span>
      <span className="visually-hidden" role="status">
        Photo {index + 1} sur {item.images.length} : {image.alt}
      </span>
    </div>
  );
}
