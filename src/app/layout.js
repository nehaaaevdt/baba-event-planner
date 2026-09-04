import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fdfaf7] text-slate-900 font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
