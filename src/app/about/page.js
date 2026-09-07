export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf7] pt-32 transition-colors duration-300 dark:bg-[#0B0F17]">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#DD901E]">
            About Us
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Creating Unforgettable Moments
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Baba Event Planner is passionate about transforming your special
            moments into unforgettable memories. From intimate celebrations to
            grand events, we take care of every detail.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Our team works closely with you to understand your vision and
            create an experience that reflects your personality and style.
          </p>
        </div>
      </section>
    </main>
  
  );
}