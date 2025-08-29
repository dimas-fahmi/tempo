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
    </main>
  );
}
