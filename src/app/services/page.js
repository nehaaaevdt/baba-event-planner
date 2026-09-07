const services = [
  {
    title: "Wedding Planning",
    description:
      "Complete wedding planning and coordination to make your special day stress-free and unforgettable.",
  },
  {
    title: "Birthday Celebrations",
    description:
      "Creative birthday themes, decorations, entertainment, and complete event coordination.",
  },
  {
    title: "Corporate Events",
    description:
      "Professional planning for conferences, meetings, product launches, and corporate celebrations.",
  },
  {
    title: "Event Decoration",
    description:
      "Beautiful decorations designed around your theme, venue, and personal preferences.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf7] pt-32 transition-colors duration-300 dark:bg-[#0B0F17]">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#DD901E]">
            Our Services
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-6xl dark:text-white">
            Everything You Need for Your Perfect Event
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            From planning to execution, Baba Event Planner takes care of every
            detail.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}