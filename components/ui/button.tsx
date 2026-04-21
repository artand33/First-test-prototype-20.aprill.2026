"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-brand-bronze hover:bg-brand-bronze-dark text-white shadow-md hover:shadow-xl hover:-translate-y-0.5",
        outline: "border border-brand-bronze text-brand-bronze hover:bg-brand-bronze hover:text-white",
        ghost: "text-brand-bronze hover:bg-brand-muted-bg",
        dark: "bg-brand-espresso hover:bg-brand-foreground text-white shadow-md hover:shadow-xl hover:-translate-y-0.5",
        white: "bg-white hover:bg-brand-cream text-brand-espresso shadow-md hover:shadow-xl hover:-translate-y-0.5",
      },
      size: {
        sm: "px-5 py-2 text-sm",
        default: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };
