"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-[#fdfaf7] px-6 py-24 transition-colors duration-300 dark:bg-[#0B0F17] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#DD901E]">
            Our Gallery
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Moments We&apos;ve Created
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300">
            A glimpse of our celebrations, decorations and unforgettable
            events.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
            >
              <Image
                src={image}
                alt={`Event gallery image ${index + 1}`}
                width={600}
                height={750}
                className="h-80 w-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-90"
              />

              {/* Golden hover overlay */}
              <div className="absolute inset-0 bg-[#DD901E]/0 transition-all duration-500 group-hover:bg-[#DD901E]/15" />

              {/* Golden border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-[#F5D08A]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}