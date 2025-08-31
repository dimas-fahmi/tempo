import type { Metadata } from "next";
import Hero from "./Sections/Hero";

export const metadata: Metadata = {
  title: "Tempo | Landing Page",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      <div className="min-h-[1000px]"></div>
    </main>
  );
}
