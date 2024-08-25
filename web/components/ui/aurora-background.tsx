"use client";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className="w-full h-full min-h-screen flex relative flex flex-col w-full h-full items-center justify-center bg-slate-900 dark:bg-slate-900 text-slate-950 transition-bg">
      <div
        className={`relative flex flex-col w-full h-full items-center justify-center bg-slate-900 dark:bg-slate-900 text-slate-950 transition-bg ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    </main>
  );
};
