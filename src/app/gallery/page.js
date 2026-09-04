const galleryItems = [
  "Luxury Wedding",
  "Birthday Celebration",
  "Corporate Event",
  "Floral Decoration",
  "Wedding Stage",
  "Outdoor Celebration",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
            Our Gallery
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-6xl">
            Moments We Have Created
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Explore some of the beautiful events and memorable experiences
            created by Baba Event Planner.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={item}
             className="group relative flex h-72 items-end overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5D9A6] via-[#FDF3E3] to-orange-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <p className="text-sm font-medium text-[#DD901E]">
                  Event {index + 1}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {item}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}