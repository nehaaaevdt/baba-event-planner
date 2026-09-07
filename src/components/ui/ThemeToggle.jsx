"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  // Before mounting, render a placeholder button with matching dimensions to prevent layout shifts
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5D9A6] bg-white text-slate-700 transition hover:bg-[#FFF7E8] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 ${className}`}
      >
        <span className="h-5 w-5 opacity-0" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#F5D9A6] bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-[#DD901E] hover:bg-[#FFF7E8] hover:text-[#DD901E] active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-[#DD901E] dark:hover:bg-slate-800 dark:hover:text-[#DD901E] ${className}`}
    >
      {/* Sun Icon for Dark Mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-5 w-5 transition-all duration-300 ${
          isDark
            ? "rotate-0 scale-100 text-[#DD901E]"
            : "absolute -rotate-90 scale-0 opacity-0"
        }`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      {/* Moon Icon for Light Mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-5 w-5 transition-all duration-300 ${
          isDark
            ? "absolute rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 text-slate-700 group-hover:text-[#DD901E]"
        }`}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}

