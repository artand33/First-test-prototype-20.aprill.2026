"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Syringe, Sparkles, Dumbbell, Droplets, Scale, Zap, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Syringe,
    title: "Injectables & Volume",
    description: "Natural-looking refresh with precision placement and doctor-led planning.",
    tags: ["Botox", "Sculptra", "Lip Filler"],
    treats: "Lines, volume loss, facial balance",
    downtime: "Minimal to none",
    sessions: "1 session, maintenance every 3-12 months",
    popular: true,
  },
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    description: "Texture, tone, and glow treatments matched to your skin goals.",
    tags: ["Morpheus8", "DiamondGlow", "Chemical Peels"],
    treats: "Texture, pigmentation, fine lines",
    downtime: "Low to moderate, treatment-dependent",
    sessions: "3-4 sessions for best outcomes",
    popular: true,
  },
  {
    icon: Dumbbell,
    title: "Body Sculpting",
    description: "Non-surgical contouring for shape, lift, and firmer skin.",
    tags: ["Non-Surgical BBL", "Sculpting"],
    treats: "Loose skin, contour, proportion",
    downtime: "Usually none",
    sessions: "2-6 sessions based on goals",
    popular: false,
  },
  {
    icon: Scale,
    title: "Wellness & Weight Programs",
    description: "Physician-guided protocols to improve body composition and energy.",
    tags: ["GLP-1", "IV Therapy", "Supervised"],
    treats: "Weight plateaus, fatigue, metabolic support",
    downtime: "None",
    sessions: "Monthly check-ins + custom timeline",
    popular: false,
  },
  {
    icon: Zap,
    title: "Skin Tightening",
    description: "Advanced radiofrequency and laser treatments that lift without surgery.",
    tags: ["RF Therapy", "Laser"],
    treats: "Mild laxity, jawline and neck definition",
    downtime: "Low",
    sessions: "3 sessions typically recommended",
    popular: false,
  },
  {
    icon: Droplets,
    title: "Hydration & Recovery",
    description: "Targeted IV blends for hydration, recovery, and immune support.",
    tags: ["Hydration", "Vitamins"],
    treats: "Dehydration, low energy, recovery",
    downtime: "None",
    sessions: "As needed or weekly plans",
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 md:py-28 section-surface-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze mb-4 block">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-foreground mb-4">Treatments Built Around You</h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Pick a focus area below to quickly compare what it treats, expected downtime, and typical treatment cadence.
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="initial" animate={isInView ? "animate" : "initial"}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} whileHover={{ y: -4, scale: 1.01 }}>
                <Card className="h-full group cursor-pointer hover:border-brand-bronze/30 hover:shadow-warm-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-full bg-brand-muted-bg flex items-center justify-center group-hover:bg-brand-bronze/10 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-brand-bronze" strokeWidth={1.5} />
                      </div>
                      {service.popular && <Badge variant="bronze">Popular</Badge>}
                    </div>
                    <CardTitle className="mt-3">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                    <ul className="mt-4 space-y-1.5 text-sm text-brand-muted">
                      <li><span className="font-medium text-brand-foreground">What it treats:</span> {service.treats}</li>
                      <li><span className="font-medium text-brand-foreground">Downtime:</span> {service.downtime}</li>
                      <li><span className="font-medium text-brand-foreground">Typical sessions:</span> {service.sessions}</li>
                    </ul>
                  </CardHeader>
                  <CardFooter className="flex flex-wrap gap-2 pt-0">
                    {service.tags.map((tag) => <Badge key={tag} variant="default">{tag}</Badge>)}
                    <div className="ml-auto"><ArrowRight className="w-4 h-4 text-brand-bronze opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
