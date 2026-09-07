import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageIntro from "@/components/ui/PageIntro";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baba Event Planner | Luxury Weddings, Corporate & Social Celebrations",
  description:
    "Baba Event Planner creates unforgettable memories with bespoke event management, floral design, wedding planning, birthday celebrations, and corporate galas.",
  keywords: [
    "Event Planner",
    "Wedding Planning",
    "Corporate Events",
    "Birthday Parties",
    "Decorations",
    "Baba Events",
  ],
};

const themeScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem('theme');
    var isDark = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-[#fdfaf7] text-slate-900 font-sans transition-colors duration-300 dark:bg-[#0B0F17] dark:text-slate-100">
        <ThemeProvider>
          <PageIntro />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
