import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
<div>
  <Link
    href="/"
    className="inline-flex items-center"
  >
    <Image
      src="/images/Baba-footer-logo.jpg"
      alt="Baba Event Planner"
      width={320}
      height={140}
      className="h-auto w-[260px] object-contain"
    />
  </Link>

</div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 transition-colors duration-200 hover:text-[#DD901E]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition-colors duration-200 hover:text-[#DD901E]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-slate-400 transition-colors duration-200 hover:text-[#DD901E]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 transition-colors duration-200 hover:text-[#DD901E]"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 transition-colors duration-200 hover:text-[#DD901E]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>Wedding Planning</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Event Decoration</li>
              <li>Engagement &amp; Anniversary</li>
              <li>Private Parties</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Get In Touch
            </h3>

            {/* Phone */}
            <div className="mt-5">
              <p className="text-sm font-medium text-[#DD901E]">
                Phone
              </p>

              <a
                href="tel:+917000631709"
                className="mt-2 inline-block text-sm text-slate-300 transition-colors duration-200 hover:text-[#DD901E]"
              >
                +91 70006 31709
              </a>
            </div>

            {/* Address */}
            <div className="mt-6">
              <p className="text-sm font-medium text-[#DD901E]">
                Address
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                GURUDWARA AMRIT PAILESH, Stadium Rd,
                <br />
                behind T.P. NAGAR, Korba, Transport Nagar,
                <br />
                Chhattisgarh 495677
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:px-8 md:flex-row lg:px-12 md:text-left">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Baba Event Planner. All rights
            reserved.
          </p>

          <p className="text-sm text-slate-500">
            Making your moments{" "}
            <span className="font-semibold text-[#DD901E]">
              truly special
            </span>
          </p>

        </div>
      </div>

    </footer>
  ); 
}
