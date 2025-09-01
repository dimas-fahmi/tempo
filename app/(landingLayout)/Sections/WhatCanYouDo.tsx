import SectionHeader from "@/src/ui/components/SectionHeader";
import { MessageCircleQuestionMark } from "lucide-react";
import Image from "next/image";
import React from "react";

const items = [
  {
    illo: "https://zvgpixcwdvbogm3e.public.blob.vercel-storage.com/tempo/arts/illo-clocky.png",
    title: "Never Miss Important Moments!",
    label: "Countdown",
    overview:
      "Track the days, hours, and minutes left until any event—whether it’s the big match Arsenal vs Liverpool or your girlfriend’s birthday.",
  },
  {
    illo: "https://zvgpixcwdvbogm3e.public.blob.vercel-storage.com/tempo/arts/illo-clocky.png",
    title: "Organize, Stay on Top of Your Tasks!",
    label: "To-Do List",
    overview:
      "Organize projects with tasks and subtasks so nothing slips through the cracks. Perfect for both work and personal goals.",
  },
  {
    illo: "https://zvgpixcwdvbogm3e.public.blob.vercel-storage.com/tempo/arts/illo-clocky.png",
    title: "Boost Focus With Smart Breaks!",
    label: "Pomodoro",
    overview:
      "Work in focused sprints and recharge with timed breaks. A proven technique to maximize productivity and prevent burnout.",
  },
  {
    illo: "https://zvgpixcwdvbogm3e.public.blob.vercel-storage.com/tempo/arts/illo-clocky.png",
    title: "Capture Thoughts & Ideas!",
    label: "Notes / Journal",
    overview:
      "Write down quick notes, reflect on your day, or keep a journal of your progress. A simple space for your ideas and memories.",
  },
];

const WhatCanYouDo = () => {
  return (
    <section id="whatCanYouDo">
      {/* Header */}
      <SectionHeader
        icon={MessageCircleQuestionMark}
        title="What Can You Do?"
        subtitle="What kind of question is that? You can get organize!"
        className="mb-6"
      />

      {/* Content Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Card */}
        {items.map((item, index) => (
          <div
            className="border p-4 rounded-md shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-300"
            key={index}
          >
            {/* Header */}
            <header className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-header">{item.title}</h1>
              <Image width={80} height={80} src={item.illo} alt="Placeholder" />
            </header>

            {/* Content */}
            <div>
              <h2 className="text-sm uppercase font-header opacity-70">
                {item.label}
              </h2>
              <p className="text-xs opacity-70 font-sans mt-0.5">
                {item.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatCanYouDo;
