"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2420]/85 via-[#2C2420]/60 to-[#2C2420]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/40 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
        <motion.div className="max-w-2xl" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze border border-brand-bronze/40 rounded-full px-4 py-2">
              <Award className="w-3 h-3" />Miami&apos;s #1 Non-Surgical Aesthetic Center
            </span>
          </motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            Real Results.<br /><span className="text-brand-bronze-light">No Surgery.</span><br />No Downtime.
          </motion.h1>
          <motion.p variants={staggerItem} className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Harvard-trained Dr. Mendieta and his team deliver board-certified, personalized aesthetic treatments — so you look and feel your best, on your terms.
          </motion.p>
          <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" asChild><a href="#booking">Book Free Consultation<ArrowRight className="w-5 h-5" /></a></Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-brand-espresso" asChild><a href="#transformations">See Transformations</a></Button>
          </motion.div>
          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-brand-bronze text-brand-bronze" />))}</div>
              <span className="text-white/70 text-sm">4.9 · 500+ happy clients</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm"><Shield className="w-4 h-4 text-brand-bronze" />Board-Certified MD</div>
            <div className="flex items-center gap-2 text-white/70 text-sm"><Award className="w-4 h-4 text-brand-bronze" />25+ Years Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
