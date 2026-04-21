"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function BookingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <>
      <section id="booking" className="py-20 md:py-28 bg-brand-beige" ref={ref}>
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze block mb-6">Ready to Start?</span>
            <h2 className="font-display text-4xl md:text-6xl text-brand-foreground leading-tight mb-6">Your Best Self Is<br /><span className="text-brand-bronze">One Call Away</span></h2>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">Book your free consultation today. No pressure, no obligation — just an honest conversation about your goals.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button size="lg" asChild><a href="#" className="flex items-center gap-2"><Calendar className="w-5 h-5" />Book Free Consultation<ArrowRight className="w-5 h-5" /></a></Button>
              <Button size="lg" variant="outline" asChild><a href="tel:7868827351" className="flex items-center gap-2"><Phone className="w-5 h-5" />(786) 882-7351</a></Button>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-espresso/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-3">
        <a href="tel:7868827351" className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-white rounded-full py-2.5 text-sm font-medium hover:border-brand-bronze transition-colors"><Phone className="w-4 h-4" />Call Now</a>
        <a href="#booking" className="flex-1 flex items-center justify-center gap-2 bg-brand-bronze text-white rounded-full py-2.5 text-sm font-medium hover:bg-brand-bronze-dark transition-colors"><Calendar className="w-4 h-4" />Book Free Consult</a>
      </div>
    </>
  );
}
