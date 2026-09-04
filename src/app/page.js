import {
  Hero,
  About,
  Services,
  WhyChooseUs,
  Gallery,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Preview Section */}
      <About />

      {/* 3. Services Preview Section */}
      <Services />

      {/* 4. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 5. Gallery Preview Section */}
      <Gallery />

      {/* 6. Contact CTA Section */}
      <Contact />
    </main>
  );
}