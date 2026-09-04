"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Wedding Planning",
    image: "/images/service-wedding.jpg",
    description:
      "From intimate ceremonies to grand celebrations, we plan every detail of your dream wedding.",
    icon: "💍",
  },
  {
    title: "Birthday Parties",
    image: "/images/service-birthday.jpg",
    description:
      "Fun, creative and memorable birthday celebrations designed especially for you and your guests.",
    icon: "🎂",
  },
  {
    title: "Corporate Events",
    image: "/images/service-corporate.jpg",
    description:
      "Professional event planning for conferences, meetings, launches, parties and corporate celebrations.",
    icon: "🏢",
  },
  {
    title: "Event Decoration",
    image: "/images/service-decoration.jpg",
    description:
      "Beautiful themes, elegant decorations and stunning setups that transform your event space.",
    icon: "🌸",
  },
  {
    title: "Engagement & Anniversary",
    image: "/images/service-engagement.jpg",
    description:
      "Celebrate your special milestones with personalized planning, decoration and memorable experiences.",
    icon: "❤️",
  },
  {
    title: "Private Parties",
    image: "/images/service-party.jpg",
    description:
      "From family gatherings to special celebrations, we create events that are unique and unforgettable.",
    icon: "🎉",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#DD901E]">
            What We Do
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Our Event Planning Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            From weddings and birthdays to corporate events and beautiful
            decorations, we take care of every detail to make your celebration
            unforgettable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="
                group rounded-2xl border border-slate-200 bg-white p-8
                shadow-sm
                transition-all duration-300
                hover:border-[#F5D08A]
                hover:bg-[#FFF9EF]
                hover:shadow-xl
              "
            >

              {/* Service Image */}
              <div className="relative mb-6 h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              {/* Learn More */}
              <Link
                href="/services"
                className="mt-6 inline-flex font-semibold text-[#DD901E] transition-colors hover:text-[#B87512]"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <Link
            href="/services"
            className="
              inline-flex rounded-xl
              bg-[#DD901E]
              px-7 py-4
              font-semibold text-white
              shadow-lg shadow-[#DD901E]/20
              transition duration-300
              hover:-translate-y-1
              hover:bg-[#B87512]
            "
          >
            View All Services →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

