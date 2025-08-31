import type { Metadata } from "next";
import Hero from "./Sections/Hero";
import WhatCanYouDo from "./Sections/WhatCanYouDo";

export const metadata: Metadata = {
  title: "Tempo | Landing Page",
};

export default function Home() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <Hero />

      {/* What Can You Do Section */}
      <WhatCanYouDo />

      <div className="min-h-[1000px]"></div>
    </main>
  );
}
