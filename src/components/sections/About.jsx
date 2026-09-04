"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="overflow-hidden bg-[#fdfaf7] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Two Column Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* About Content - LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:order-1"
          >
            {/* Small Label */}
            <span className="text-sm font-semibold uppercase tracking-widest text-[#DD901E]">
              About Baba Event Planner
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              We Turn Your Special Moments Into
              <span className="block text-[#DD901E]">
                Beautiful Memories
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-slate-600">
              At Baba Event Planner, we believe that every celebration deserves
              to be special. From intimate family gatherings to grand weddings
              and professional corporate events, we carefully plan every detail
              to bring your vision to life.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our experienced team handles planning, decoration, coordination
              and execution so that you can relax and enjoy your special day
              with your family and guests.
            </p>
          </motion.div>

          {/* About Video - RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-2"
          >
            {/* Main Video */}
            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-xl sm:h-[550px]">

              <video
                src="/videos/about-event.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 rounded-2xl border border-[#F5D9A6] bg-white p-6 shadow-xl sm:right-6"
            >
              <p className="text-3xl font-bold text-[#DD901E]">
                10+
              </p>

              <p className="mt-1 text-sm font-medium text-slate-600">
                Years of Experience
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Button - Centered Below BOTH Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex justify-center"
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