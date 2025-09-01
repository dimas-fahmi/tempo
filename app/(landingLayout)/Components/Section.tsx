import { cn } from "@/src/lib/shadcn/utils";
import Image from "next/image";
import React from "react";

export interface SectionProps {
  reverse?: boolean;
  title: string;
  overview: string;
  illo: string;
  className?: string;
  illoWidth?: number;
  illoHeight?: number;
  illoAlt: string;
}

const Section = ({
  illo,
  overview,
  title,
  reverse = false,
  illoAlt,
  className,
  illoHeight,
  illoWidth,
}: SectionProps) => {
  return (
    <section
      id="id"
      className={cn(
        `flex ${reverse ? "flex-row-reverse" : ""} justify-between`,
        className
      )}
    >
      {/* Content*/}
      <div className="max-w-lg flex items-center flex-grow">
        {/* Wrapper */}
        <div className="space-y-6">
          <h1 className="text-5xl font-header">{title}</h1>
          <p className="font-sans">{overview}</p>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex-grow flex justify-center items-center">
        <Image
          width={illoWidth ?? 500}
          height={illoHeight ?? 500}
          src={illo}
          alt={illoAlt}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Section;
