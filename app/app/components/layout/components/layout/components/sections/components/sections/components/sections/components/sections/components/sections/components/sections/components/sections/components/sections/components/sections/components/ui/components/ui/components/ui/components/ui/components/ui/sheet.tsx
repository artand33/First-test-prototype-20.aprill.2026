"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

const SheetOverlay = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Overlay>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>>(
  ({ className, ...props }, ref) => <DialogPrimitive.Overlay className={cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-fade-in", className)} {...props} ref={ref} />
);
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Content>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(
  ({ className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content ref={ref} className={cn("fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-brand-cream shadow-2xl transition-transform duration-300 data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full", className)} {...props}>
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <span className="font-display text-xl text-brand-foreground">Menu</span>
          <SheetClose className="rounded-full p-2 hover:bg-brand-muted-bg transition-colors cursor-pointer"><X className="h-5 w-5 text-brand-muted" /></SheetClose>
        </div>
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = DialogPrimitive.Content.displayName;

export { Sheet, SheetTrigger, SheetClose, SheetContent };
