"use client";

import { motion } from "framer-motion";

const contactInfo = [
  {
    title: "Location",
    details: (
      <>
        GURUDWARA AMRIT PAILESH, Stadium Rd,
        <br />
        behind T.P. NAGAR, Korba, Transport Nagar,
        <br />
        Chhattisgarh 495677
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.657 16.657 13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },

  {
    title: "Phone",
    details: (
      <>
        <a
          href="tel:+917000631709"
          className="transition-colors hover:text-[#DD901E]"
        >
          +91 70006 31709
        </a>
        <br />
        Available All Day
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498A1 1 0 0 1 21 15.28V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z"
        />
      </svg>
    ),
  },

  {
    title: "Email",
    details: (
      <>
        Contact us for
        <br />
        all your event planning needs
      </>
    ),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section className="bg-[#fdfaf7] px-6 py-24 transition-colors duration-300 dark:bg-[#0B0F17] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#DD901E]">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Let&apos;s Plan Your{" "}
            <span className="text-[#DD901E]">Perfect Event</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-300">
            Have an event in mind? Get in touch with Baba Event Planner and
            let&apos;s create a memorable celebration together.
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group text-center"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#DD901E] shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#DD901E] group-hover:text-white group-hover:shadow-xl dark:bg-slate-900 dark:shadow-slate-900/50">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              {/* Details */}
              <div className="text-sm leading-7 text-gray-600 dark:text-slate-300">
                {item.details}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="tel:+917000631709"
            className="inline-flex items-center rounded-full bg-[#DD901E] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#DD901E]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B87512] hover:shadow-xl"
          >
            Call Us &amp; Plan Your Event
          </a>
        </motion.div>

      </div>
    </section>
  );
}
