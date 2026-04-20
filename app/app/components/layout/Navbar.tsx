"use client";

import React, { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "About", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-brand-cream/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-1">
          <span className={cn("font-display text-2xl font-semibold transition-colors duration-500", scrolled ? "text-brand-foreground" : "text-white")}>
            <span className="text-brand-bronze">4</span>Beauty
          </span>
          <span className={cn("text-xs font-sans tracking-widest uppercase ml-1 transition-colors duration-500", scrolled ? "text-brand-muted" : "text-white/70")}>
            Med Spa
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={cn("text-sm font-medium tracking-wide transition-colors duration-300 hover:text-brand-bronze", scrolled ? "text-brand-foreground" : "text-white/90")}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:7868827351" className={cn("flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-brand-bronze", scrolled ? "text-brand-muted" : "text-white/80")}>
            <Phone className="w-4 h-4" />
            (786) 882-7351
          </a>
          <Button size="sm" variant={scrolled ? "default" : "white"} asChild>
            <a href="#booking">Book Free Consult</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button className={cn("md:hidden p-2 rounded-lg transition-colors", scrolled ? "text-brand-foreground hover:bg-brand-muted-bg" : "text-white hover:bg-white/10")} aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.label}>
                  <a href={link.href} className="py-3 px-2 font-display text-xl text-brand-foreground hover:text-brand-bronze border-b border-brand-border transition-colors">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:7868827351" className="flex items-center gap-2 text-brand-muted text-sm">
                  <Phone className="w-4 h-4 text-brand-bronze" />
                  (786) 882-7351
                </a>
                <Button asChild className="w-full">
                  <a href="#booking">Book Free Consult</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
