"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="overflow-hidden bg-[#fdfaf7] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =========================
              ABOUT CONTENT - LEFT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:order-1"
          >
            {/* Small Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="inline-block text-sm font-semibold uppercase tracking-widest text-[#DD901E]"
            >
              About Baba Event Planner
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl"
            >
              We Turn Your Special Moments Into
              <span className="block text-[#DD901E]">
                Beautiful Memories
              </span>
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="mt-6 text-lg leading-8 text-slate-600"
            >
              At Baba Event Planner, we believe that every celebration deserves
              to be special. From intimate family gatherings to grand weddings
              and professional corporate events, we carefully plan every detail
              to bring your vision to life.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-4 text-lg leading-8 text-slate-600"
            >
              Our experienced team handles planning, decoration, coordination
              and execution so that you can relax and enjoy your special day
              with your family and guests.
            </motion.p>
          </motion.div>


          {/* =========================
              VIDEO - RIGHT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:order-2"
          >

            {/* Main Video */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              className="relative h-[450px] overflow-hidden rounded-3xl shadow-xl sm:h-[550px]"
            >
              <video
                src="/videos/about-event.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Video Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Subtle Golden Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="pointer-events-none absolute inset-0 bg-[#DD901E]/5"
              />
            </motion.div>


            {/* =========================
                EXPERIENCE CARD
            ========================== */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="absolute -bottom-6 -right-2 rounded-2xl border border-[#F5D9A6] bg-white p-6 shadow-xl sm:right-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl font-bold text-[#DD901E]"
              >
                10+
              </motion.p>

              <p className="mt-1 text-sm font-medium text-slate-600">
                Years of Experience
              </p>
            </motion.div>

          </motion.div>
        </div>


        {/* =========================
            LEARN MORE BUTTON
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/about"
            className="inline-flex rounded-xl bg-[#DD901E] px-8 py-4 font-semibold text-white shadow-lg shadow-[#DD901E]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#C77A18]"
          >
            Learn More About Us →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

