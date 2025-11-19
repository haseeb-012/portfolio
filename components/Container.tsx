import React from "react";
import { cn } from "@/lib/utils/cn";

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-4xl bg-white dark:bg-black dark:text-primary",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
