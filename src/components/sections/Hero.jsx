"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/hero-wedding.jpg",
    alt: "Beautiful wedding event",
  },
  {
    src: "/images/hero-birthday.jpg.webp",
    alt: "Birthday celebration event",
  },
  {
    src: "/images/hero-corporate.jpg",
    alt: "Corporate event",
  },
  {
    src: "/images/hero-decoration.jpg",
    alt: "Luxury event decoration",
  },
  {
    src: "/images/hero1.jpg",
    alt: "Beautiful wedding event",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) =>
        previousImage === heroImages.length - 1
          ? 0
          : previousImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fdfaf7]">

      {/* Animated Image Slider */}
      <div className="relative mx-auto mt-20 h-[45vh] min-h-[350px] max-w-7xl overflow-hidden rounded-3xl px-4 sm:h-[55vh] sm:px-6 lg:px-8">

        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentImage
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        ))}

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {heroImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "w-8 bg-[#DD901E]"
                  : "w-2 bg-white/60 hover:bg-[#DD901E]"
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">

        {/* Small Label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F5D9A6] bg-white px-4 py-2 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#DD901E]" />

          <span className="text-sm font-medium text-slate-700">
            Creating Memories That Last Forever
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
          Turning Your Special Moments Into

          <span className="block bg-gradient-to-r from-[#C77A18] via-[#DD901E] to-[#F4A514] bg-clip-text text-transparent">
            Unforgettable Memories
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
          From dream weddings and elegant celebrations to unforgettable
          birthdays and professional corporate events, Baba Event Planner
          transforms your vision into a beautiful reality.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          {/* Primary Button */}
          <Link
            href="/contact"
            className="rounded-xl border border-[#F5D9A6] bg-white px-7 py-4 text-center font-semibold text-slate-800 shadow-lg shadow-[#DD901E]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#C77A18]"
          >
            Plan Your Event →
          </Link>

          {/* Secondary Button */}
          <Link
            href="/services"
            className="rounded-xl border border-[#F5D9A6] bg-white px-7 py-4 text-center font-semibold text-slate-800 shadow-lg shadow-[#DD901E]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#C77A18]"
          >
            Explore Services
          </Link>

        </div>

        {/* Statistics */}
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-200 pt-8">

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              500+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Events Planned
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              10+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              100%
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Happy Clients
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Decorative Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/50 to-transparent" />

    </section>
  );
}