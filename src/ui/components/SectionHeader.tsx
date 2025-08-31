import { cn } from "@/src/lib/shadcn/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

export interface SectionheaderProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
}

const SectionHeader = ({
  icon,
  subtitle,
  title,
  className,
}: SectionheaderProps) => {
  const Icon = icon;

  return (
    <header className={cn("space-y-2", className)}>
      <h1 className="flex items-center gap-4 text-xl">
        <Icon />
        <span className="font-header">{title}</span>
      </h1>
      <p className="font-sans">{subtitle}</p>
    </header>
  );
};

export default SectionHeader;
