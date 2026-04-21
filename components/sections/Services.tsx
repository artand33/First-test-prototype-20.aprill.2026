"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Syringe, Sparkles, Dumbbell, Droplets, Scale, Zap, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { staggerContainer } from "@/lib/animations";
const services = [
  { icon: Syringe, title: "Injectables & Fillers", description: "Botox, Sculptra, Juvederm, Restylane — precision-placed by our board-certified team for natural-looking rejuvenation.", tags: ["Botox", "Sculptra", "Lip Filler"], popular: true },
  { icon: Sparkles, title: "Face & Skin Treatments", description: "DiamondGlow, Morpheus8, oxygen facials, and chemical peels — tailored to your skin's unique needs.", tags: ["Morpheus8", "DiamondGlow"], popular: false },
  { icon: Dumbbell, title: "Body Contouring", description: "Non-surgical butt lift and skin tightening treatments that sculpt and define without a single incision.", tags: ["Non-Surgical BBL", "Sculpting"], popular: true },
  { icon: Droplets, title: "IV Therapy & Wellness", description: "Targeted vitamin drips and hydration therapy — boost energy, immunity, and glow from the inside out.", tags: ["Hydration", "Vitamins"], popular: false },
  { icon: Scale, title: "Medical Weight Loss", description: "Physician-guided weight management with personalized protocols, not cookie-cutter plans.", tags: ["GLP-1", "Supervised"], popular: false },
  { icon: Zap, title: "Skin Tightening", description: "Advanced radiofrequency and laser treatments that firm, lift, and rejuvenate — zero downtime.", tags: ["RF Therapy", "Laser"], popular: false },
];
export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="services" className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze mb-4 block">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-foreground mb-4">Treatments Built Around You</h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">Every service is personalized. No templates, no shortcuts — just real results designed for your body and goals.</p>
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
