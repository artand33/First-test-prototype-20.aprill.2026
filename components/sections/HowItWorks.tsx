"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, FlaskConical, Sparkles } from "lucide-react";
import { staggerContainer } from "@/lib/animations";
const steps = [
  { step: "01", icon: MessageSquare, title: "Free Consultation", body: "Meet with our team — in person or virtually. We listen to your goals, assess your needs, and answer every question with zero pressure." },
  { step: "02", icon: FlaskConical, title: "Your Custom Plan", body: "Dr. Mendieta designs a personalized treatment protocol — only what you need, in the right sequence, at the right pace." },
  { step: "03", icon: Sparkles, title: "Transform & Glow", body: "Walk in, get treated, walk out. Most treatments have zero downtime. Your results start showing within days." },
];
export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-20 md:py-28 bg-brand-espresso" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze block mb-4">Simple Process</span>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">Your Journey to <span className="text-brand-bronze-light">Transformation</span></h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8" variants={staggerContainer} initial="initial" animate={isInView ? "animate" : "initial"}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.step} className="flex flex-col items-center text-center" variants={{ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.15 } } }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-brand-bronze/10 border border-brand-bronze/30 flex items-center justify-center"><Icon className="w-8 h-8 text-brand-bronze" strokeWidth={1.5} /></div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-bronze flex items-center justify-center text-white text-xs font-bold">{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed max-w-xs">{step.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="text-center mt-14" initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <a href="#booking" className="inline-flex items-center gap-2 bg-brand-bronze hover:bg-brand-bronze-dark text-white font-medium rounded-full px-8 py-3 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5">Start with a Free Consult</a>
        </motion.div>
      </div>
    </section>
  );
}
