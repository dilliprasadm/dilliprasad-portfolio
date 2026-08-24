import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="w-8 md:w-12 h-[1px] bg-primary/70 inline-block" />
      <span className="font-mono text-label-technical text-primary uppercase tracking-[0.2em]">
        {number} / {label}
      </span>
    </div>
  );
}
