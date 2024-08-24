"use client";
import { cn } from "../../utils/cn";
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
    <main className="w-full h-full flex-grow">
      <div
        className={cn(
          "relative flex flex-col w-full h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg flex-grow",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 pointer-events-none",
              [
                "--white-gradient:repeating-linear-gradient(100deg, var(--white) 0%, var(--white) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--white) 16%)",
                "--dark-gradient:repeating-linear-gradient(100deg, var(--black) 0%, var(--black) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--black) 16%)",
                "--aurora:repeating-linear-gradient(100deg, var(--blue-500) 10%, var(--indigo-300) 15%, var(--blue-300) 20%, var(--violet-200) 25%, var(--blue-400) 30%)",
                "background-image: var(--white-gradient), var(--aurora)",
                "dark:bg-background: var(--dark-gradient), var(--aurora)",
                "background-size: 300% 200%",
                "background-position: 50% 50%, 50% 50%",
                "filter: blur(10px) invert",
                'after:content: ""',
                "after:absolute",
                "after:inset-0",
                "after:background-image: var(--white-gradient), var(--aurora)",
                "after:dark:bg-background: var(--dark-gradient), var(--aurora)",
                "after:background-size: 200% 100%",
                "after:animate-aurora",
                "after:background-attachment: fixed",
                "after:mix-blend-difference",
                "opacity: 50%",
                "will-change: transform",
              ],
              showRadialGradient &&
                "mask-image: radial-gradient(ellipse_at_100%_0%, black 10%, var(--transparent) 70%)"
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
