import SectionHeader from "@/src/ui/components/SectionHeader";
import { MessageCircleQuestionMark } from "lucide-react";
import Image from "next/image";
import React from "react";

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
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              className="border p-4 rounded-md shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-300"
              key={index}
            >
              {/* Header */}
              <header className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-header">
                  Never Miss Important Events Again
                </h1>
                <Image
                  width={80}
                  height={80}
                  src={"/resources/Illustration Arts/placeholder-art.svg"}
                  alt="Placeholder"
                />
              </header>

              {/* Content */}
              <div>
                <h2 className="text-sm uppercase font-header opacity-70">
                  Countdown
                </h2>
                <p className="text-xs opacity-70 font-sans mt-0.5">
                  {`Keep track how many hours, minutes and seconds until Arsenal vs Liverpool or simply your Girlfriend's Birthday.`}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default WhatCanYouDo;
