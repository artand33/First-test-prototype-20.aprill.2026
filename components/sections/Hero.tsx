"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Award, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1800&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2420]/90 via-[#2C2420]/72 to-[#2C2420]/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/55 via-[#2C2420]/20 to-[#2C2420]/35" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 md:pt-32 w-full">
        <motion.div className="max-w-3xl" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze border border-brand-bronze/40 rounded-full px-4 py-2">
              <Award className="w-3 h-3" />Miami&apos;s #1 Non-Surgical Aesthetic Center
            </span>
          </motion.div>
          <motion.h1 variants={staggerItem} className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.02] mb-6 max-w-[16ch]">
            Real Results.<br /><span className="text-brand-bronze-light">No Surgery.</span><br />No Downtime.
          </motion.h1>
          <motion.p variants={staggerItem} className="text-white/88 text-lg md:text-xl leading-relaxed mb-8 max-w-[34rem]">
            Harvard-trained Dr. Mendieta and his team deliver board-certified, personalized aesthetic treatments — so you look and feel your best, on your terms.
          </motion.p>
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-4 max-w-2xl">
            <Button size="lg" asChild>
              <Link href="/?booking=1" scroll={false}>
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-brand-espresso" asChild><a href="#transformations">See Before &amp; After</a></Button>
          </motion.div>
          <motion.p variants={staggerItem} className="text-white/78 text-sm md:text-base mb-10">
            No pressure consultation. Personalized treatment plan. Most visits under 1 hour.
          </motion.p>
          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-x-6 gap-y-3 bg-black/25 border border-white/15 rounded-2xl px-4 py-3 max-w-fit">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-brand-bronze text-brand-bronze" />))}</div>
              <span className="text-white/70 text-sm">4.9 on Google Reviews · 500+ clients</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm"><Shield className="w-4 h-4 text-brand-bronze" />Board-Certified MD</div>
            <div className="flex items-center gap-2 text-white/70 text-sm"><Award className="w-4 h-4 text-brand-bronze" />25+ Years Experience</div>
            <div className="flex items-center gap-2 text-white/70 text-sm"><MapPin className="w-4 h-4 text-brand-bronze" />Miami, FL</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
