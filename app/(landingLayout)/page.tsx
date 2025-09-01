import type { Metadata } from "next";
import Hero from "./Sections/Hero";
import WhatCanYouDo from "./Sections/WhatCanYouDo";

export const metadata: Metadata = {
  title: "Tempo | Stay on Track, Stay in Tempo",
  description:
    "Tempo helps you organize tasks, track events, stay focused with Pomodoro, and capture notes—all in one simple app. Make every minute count and keep your productivity in perfect tempo.",
  keywords: [
    "Tempo",
    "productivity app",
    "task manager",
    "to-do list",
    "countdown timer",
    "pomodoro timer",
    "notes app",
    "journal app",
    "habit tracking",
    "time management",
  ],
  openGraph: {
    title: "Tempo | Stay on Track, Stay in Tempo",
    description:
      "All-in-one productivity app with countdowns, to-do lists, Pomodoro sessions, and journaling. Stay organized and focused with Tempo.",
    url: process.env.APP_URL,
    siteName: "Tempo",
    images: [
      {
        url: `${process.env.APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Tempo App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempo | Stay on Track, Stay in Tempo",
    description:
      "Organize tasks, countdowns, Pomodoro sessions, and notes in one place. Boost your productivity with Tempo.",
    images: [`${process.env.APP_URL}/og-image.png`],
    creator: "@MarshalGrayson",
  },
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
