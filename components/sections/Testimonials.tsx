"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const testimonials = [
  { name: "Maria G.", location: "Coral Gables, FL", treatment: "Sculptra + Botox", rating: 5, quote: "I came in feeling self-conscious about the volume loss in my face. The results are genuinely shocking. I look like myself, just 10 years younger.", initials: "MG" },
  { name: "Ashley R.", location: "Brickell, FL", treatment: "Non-Surgical BBL", rating: 5, quote: "I was skeptical about non-surgical options. Dr. Mendieta's team explained everything and the results after just 3 sessions exceeded everything I hoped for.", initials: "AR" },
  { name: "Carmen D.", location: "Miami Shores, FL", treatment: "Morpheus8", rating: 5, quote: "My skin has been transformed. Three Morpheus8 sessions and my friends keep asking if I've done something — but they can't figure out what.", initials: "CD" },
  { name: "Stephanie L.", location: "Coconut Grove, FL", treatment: "IV Therapy + Weight Loss", rating: 5, quote: "The whole-body approach here is different. I've lost 22 lbs and feel better than I have in years.", initials: "SL" },
  { name: "Priya N.", location: "Miami Beach, FL", treatment: "Lip Filler + DiamondGlow", rating: 5, quote: "I've been to other places in Miami and nothing compares. 4Beauty is the only place I trust with my face.", initials: "PN" },
];
export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const visible = [testimonials[current % testimonials.length], testimonials[(current + 1) % testimonials.length], testimonials[(current + 2) % testimonials.length]];
  return (
    <section className="py-20 md:py-28 bg-brand-muted-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze block mb-4">Client Stories</span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-foreground mb-4">Real People, Real Results</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-brand-bronze text-brand-bronze" />)}</div>
            <span className="text-brand-muted">4.9 average · 200+ reviews</span>
          </div>
        </motion.div>
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <motion.div key={`${t.name}-${current}-${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <Card className="h-full bg-white border-brand-border">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-brand-bronze/30 mb-4" />
                  <p className="text-brand-foreground leading-relaxed mb-6 flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-bronze flex items-center justify-center text-white text-sm font-semibold">{t.initials}</div>
                      <div><p className="font-medium text-brand-foreground text-sm">{t.name}</p><p className="text-brand-muted text-xs">{t.location}</p></div>
                    </div>
                    <Badge variant="bronze">{t.treatment}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <Card className="bg-white border-brand-border">
                <CardContent className="p-6 flex flex-col">
                  <Quote className="w-8 h-8 text-brand-bronze/30 mb-4" />
                  <p className="text-brand-foreground leading-relaxed mb-6 italic">&ldquo;{testimonials[current].quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-bronze flex items-center justify-center text-white text-sm font-semibold">{testimonials[current].initials}</div>
                      <div><p className="font-medium text-brand-foreground text-sm">{testimonials[current].name}</p><p className="text-brand-muted text-xs">{testimonials[current].location}</p></div>
                    </div>
                    <Badge variant="bronze">{testimonials[current].treatment}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-brand-border hover:border-brand-bronze hover:text-brand-bronze flex items-center justify-center transition-colors cursor-pointer" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
          <div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 rounded-full cursor-pointer ${i === current ? "w-6 h-2 bg-brand-bronze" : "w-2 h-2 bg-brand-border"}`} aria-label={`Go to testimonial ${i + 1}`} />)}</div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-brand-border hover:border-brand-bronze hover:text-brand-bronze flex items-center justify-center transition-colors cursor-pointer" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </section>
  );
}
