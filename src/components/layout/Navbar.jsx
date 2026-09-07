"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY_INFO } from "@/constants";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#F5D9A6] bg-white/95 py-2.5 shadow-md backdrop-blur-md dark:border-slate-800 dark:bg-[#0B0F17]/95"
          : "bg-white/90 py-3.5 backdrop-blur-sm dark:bg-[#0B0F17]/90"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            LOGO + COMPANY NAME
        ====================================================== */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="relative h-[65px] w-[200px] sm:h-[72px] sm:w-[250px] transition-transform duration-300 group-hover:scale-[1.03]">
            <Image
              src="/images/baba-logo (1).jpg"
              alt="Baba Event Planner"
              fill
              sizes="(max-width: 640px) 300px, 360px"
              className="object-contain object-left rounded-lg"
              priority
            />
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#FFF7E8] font-semibold text-[#DD901E] dark:bg-slate-800/90 dark:text-[#DD901E]"
                    : "text-slate-600 hover:bg-[#FFF7E8] hover:text-[#DD901E] dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-[#DD901E]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#DD901E]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            DESKTOP CTA + THEME TOGGLE
        ====================================================== */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/contact" variant="primary" size="md">
            Plan Your Event
          </Button>
        </div>

        {/* =====================================================
            MOBILE RIGHT CONTROLS (TOGGLE + HAMBURGER)
        ====================================================== */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#F5D9A6] bg-white text-slate-700 transition hover:bg-[#FFF7E8] active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <div className="relative flex h-5 w-6 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-all duration-200 dark:bg-slate-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-slate-800 transition-all duration-300 dark:bg-slate-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE DROPDOWN
      ====================================================== */}
      <div
        className={`overflow-hidden border-b border-[#F5D9A6] bg-white/98 backdrop-blur-xl transition-all duration-300 ease-in-out dark:border-slate-800 dark:bg-[#0B0F17]/98 md:hidden ${
          menuOpen
            ? "max-h-[460px] px-6 py-6 opacity-100 shadow-xl"
            : "max-h-0 px-6 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? "bg-[#FFF7E8] font-semibold text-[#DD901E] dark:bg-slate-800 dark:text-[#DD901E]"
                    : "text-slate-700 hover:bg-[#FFF7E8] hover:text-[#DD901E] dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-[#DD901E]"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="text-sm text-[#DD901E]">●</span>
                )}
              </Link>
            );
          })}

          <div className="mt-2 flex flex-col gap-3 border-t border-[#F5D9A6] pt-4 dark:border-slate-800">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center text-center"
              onClick={() => setMenuOpen(false)}
            >
              Plan Your Event
            </Button>

            <p className="text-center text-xs text-slate-500 dark:text-slate-400">
              Call us:{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {COMPANY_INFO.phone}
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}