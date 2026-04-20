import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bronze" | "outline" | "dark";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-widest uppercase",
      variant === "default" && "bg-brand-muted-bg text-brand-muted",
      variant === "bronze" && "bg-brand-bronze/10 text-brand-bronze",
      variant === "outline" && "border border-brand-bronze text-brand-bronze",
      variant === "dark" && "bg-brand-espresso text-white",
      className)} {...props} />
  );
}

export { Badge };
