import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
