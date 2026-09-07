"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf7] pt-32 transition-colors duration-300 dark:bg-[#0B0F17]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#DD901E]">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Let&apos;s Plan Something
              <span className="block text-[#DD901E]">
                Beautiful
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Have an event in mind? We&apos;re here to turn your ideas into a
              memorable celebration.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917000631709"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#DD901E] bg-white px-6 py-3 font-semibold text-[#DD901E] shadow-lg shadow-[#DD901E]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#C77A18] hover:text-white dark:bg-slate-900"
              >
                WhatsApp Us
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/p/BABA-EVENT-Planer-100063647783658/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#DD901E] bg-white px-6 py-3 font-semibold text-[#DD901E] transition duration-300 hover:-translate-y-1 hover:bg-[#FFF7E8] dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                Facebook
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/babaeventplannerkorba/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#DD901E] bg-white px-6 py-3 font-semibold text-[#DD901E] transition duration-300 hover:-translate-y-1 hover:bg-[#FFF7E8] dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                Instagram
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10 dark:border dark:border-slate-800 dark:bg-slate-900">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Get In Touch
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              We&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-7">

              {/* PHONE */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#DD901E]">
                  Phone
                </p>

                <p className="mt-2 text-lg font-medium text-slate-800 dark:text-slate-200">
                  +91 70006 31709
                </p>
              </div>

              {/* EMAIL */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#DD901E]">
                  Email
                </p>

                <p className="mt-2 text-lg font-medium text-slate-800 dark:text-slate-200">
                  hello@babaevents.com
                </p>
              </div>

              {/* ADDRESS */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#DD901E]">
                  Address
                </p>

                <p className="mt-2 text-lg leading-7 font-medium text-slate-800 dark:text-slate-200">
                  GURUDWARA AMRIT PAILESH,
                  <br />
                  Stadium Rd, behind T.P. NAGAR,
                  <br />
                  Korba, Transport Nagar,
                  <br />
                  Chhattisgarh 495677
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}