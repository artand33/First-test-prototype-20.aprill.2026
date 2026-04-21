"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const stats = [{ value: "25+", label: "Years Experience" },{ value: "500+", label: "Treatments / Month" },{ value: "4.9★", label: "Average Rating" },{ value: "Harvard", label: "Trained Surgeon" }];
export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section className="bg-brand-espresso py-8 md:py-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} className="flex flex-col items-center text-center md:px-8" initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <span className="font-display text-2xl md:text-3xl font-semibold text-brand-bronze-light">{stat.value}</span>
              <span className="text-xs font-sans font-medium tracking-widest uppercase text-white/50 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
