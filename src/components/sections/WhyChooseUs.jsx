"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const backgroundImages = [
  {
    src: "/images/why-1.jpg",
    alt: "Beautiful wedding event",
  },
  {
    src: "/images/why-2.jpg",
    alt: "Birthday celebration",
  },
  {
    src: "/images/why-3.jpg",
    alt: "Corporate event",
  },
  {
    src: "/images/why-4.jpg",
    alt: "Beautiful event decoration",
  },
];

const reasons = [
  {
    title: "Creative Planning",
    description:
      "Fresh ideas and creative concepts that make every celebration unique.",
  },
  {
    title: "Beautiful Decorations",
    description:
      "Stunning themes and decorations designed around your vision.",
  },
  {
    title: "Dedicated Team",
    description:
      "Our experienced team takes care of every detail from start to finish.",
  },
  {
    title: "Budget Friendly",
    description:
      "Beautiful events and smart solutions designed to suit your budget.",
  },
  {
    title: "On-Time Management",
    description:
      "Careful coordination ensures your event runs smoothly and on time.",
  },
  {
    title: "Personalized Experience",
    description:
      "Every celebration is planned according to your ideas and preferences.",
  },
];

export default function WhyChooseUs() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) =>
        previousImage === backgroundImages.length - 1
          ? 0
          : previousImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImage
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Lighter overlay so images are more visible */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Light gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#DD901E]">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Making Every Celebration

            <span className="block bg-gradient-to-r from-[#DD901E] via-[#F5D08A] to-[#FFE7B3] bg-clip-text text-transparent">
              Truly Special
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We combine creativity, experience and careful planning to
            create unforgettable events that you and your guests will
            always remember.
          </p>
        </motion.div>

        {/* Reasons Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group rounded-2xl
                border border-white/20
                bg-white/10
                p-6
                backdrop-blur-md
                transition-all duration-300
                hover:border-[#F5D08A]/60
                hover:bg-[#F5D08A]/15
                hover:shadow-2xl
              "
            >

              {/* Title */}
              <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#F5D08A]">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 text-center"
        >
          <Link
            href="/contact"
            className="
              inline-flex rounded-xl
              bg-[#DD901E]
              px-8 py-4
              font-semibold text-white
              shadow-lg shadow-[#DD901E]/30
              transition duration-300
              hover:-translate-y-1
              hover:bg-[#B87512]
            "
          >
            Start Planning Your Event →
          </Link>
        </motion.div>

        {/* Slider Indicators */}
        <div className="mt-12 flex justify-center gap-3">
          {backgroundImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "w-8 bg-[#DD901E]"
                  : "w-2 bg-white/50 hover:bg-[#F5D08A]"
              }`}
              aria-label={`Show background image ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

