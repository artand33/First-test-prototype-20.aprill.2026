"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, UserCheck, TrendingUp } from "lucide-react";
import { staggerContainer } from "@/lib/animations";
const pillars = [
  { icon: GraduationCap, title: "Doctor-Led, Always", body: "Every treatment plan is overseen by Dr. Mendieta — Harvard-trained, board-certified, and with 25+ years of precision aesthetic experience." },
  { icon: UserCheck, title: "Personalized, Not Generic", body: "We don't run everyone through the same protocol. Your consultation maps your unique anatomy, goals, and lifestyle." },
  { icon: TrendingUp, title: "Proven, Visible Results", body: "Our 4.9-star rating isn't an accident. We track outcomes, adjust treatments, and only recommend what actually works." },
];
export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-20 md:py-28 bg-brand-muted-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-beige" initial={{ opacity: 0, x: -32 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80')" }} />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-warm">
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-brand-muted mb-1">Lead Physician</p>
              <p className="font-display text-xl text-brand-foreground">Dr. Constantino Mendieta, MD</p>
              <p className="text-sm text-brand-muted mt-0.5">Board-Certified Plastic Surgeon · Harvard-Trained</p>
            </div>
          </motion.div>
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
              <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze block mb-4">Why 4Beauty</span>
              <h2 className="font-display text-4xl md:text-5xl text-brand-foreground leading-tight">The Difference Is<span className="text-brand-bronze"> Who&apos;s Behind It</span></h2>
            </motion.div>
            <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate={isInView ? "animate" : "initial"}>
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div key={pillar.title} className="flex gap-5" variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}>
                    <div className="w-12 h-12 rounded-full bg-brand-bronze/10 flex items-center justify-center shrink-0 mt-0.5"><Icon className="w-5 h-5 text-brand-bronze" strokeWidth={1.5} /></div>
                    <div><h3 className="font-display text-xl text-brand-foreground mb-2">{pillar.title}</h3><p className="text-brand-muted leading-relaxed">{pillar.body}</p></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
