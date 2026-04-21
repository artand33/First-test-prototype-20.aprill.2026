"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, Globe } from "lucide-react";
import { staggerContainer } from "@/lib/animations";
const credentials = [{ icon: GraduationCap, label: "Harvard Medical School" },{ icon: Award, label: "Board-Certified Plastic Surgeon" },{ icon: Globe, label: "Royal College of Surgeons, England" }];
const teamMembers = [
  { name: "Dr. Constantino Mendieta", role: "Lead Plastic Surgeon & Founder", specialties: ["Injectables", "Body Contouring", "Facial Aesthetics"], image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", featured: true },
  { name: "Sarah Mitchell, PA-C", role: "Lead Aesthetic Injector", specialties: ["Botox", "Fillers", "Lip Enhancement"], image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80", featured: false },
  { name: "Isabella Torres, RN", role: "Senior Aesthetic Nurse", specialties: ["IV Therapy", "Skin Treatments", "Post-Care"], image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80", featured: false },
  { name: "Kayla Chen, LE", role: "Master Esthetician", specialties: ["Facials", "Chemical Peels", "DiamondGlow"], image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", featured: false },
];
export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="team" className="py-20 md:py-28 bg-brand-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze block mb-4">The Experts</span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-foreground">Meet Your Care Team</h2>
        </motion.div>
        <motion.div className="grid lg:grid-cols-2 gap-10 mb-16 bg-brand-muted-bg rounded-3xl overflow-hidden" initial={{ opacity: 0, y: 32 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="aspect-[4/3] lg:aspect-auto bg-cover bg-center bg-top" style={{ backgroundImage: `url(${teamMembers[0].image})` }} />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze mb-4">Founder & Lead Surgeon</span>
            <h3 className="font-display text-3xl md:text-4xl text-brand-foreground mb-2">{teamMembers[0].name}</h3>
            <p className="text-brand-muted mb-6">{teamMembers[0].role}</p>
            <p className="text-brand-foreground leading-relaxed mb-8">Dr. Mendieta is one of the most recognized names in non-surgical aesthetics globally. Trained at Harvard and the Royal College of Surgeons in England, he has spent 25+ years perfecting natural-looking rejuvenation.</p>
            <div className="flex flex-col gap-3">
              {credentials.map((cred) => { const Icon = cred.icon; return (<div key={cred.label} className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-brand-bronze/10 flex items-center justify-center shrink-0"><Icon className="w-4 h-4 text-brand-bronze" strokeWidth={1.5} /></div><span className="text-sm text-brand-foreground">{cred.label}</span></div>); })}
            </div>
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer} initial="initial" animate={isInView ? "animate" : "initial"}>
          {teamMembers.slice(1).map((member, i) => (
            <motion.div key={member.name} className="group rounded-2xl overflow-hidden bg-brand-beige border border-brand-border hover:border-brand-bronze/30 hover:shadow-warm transition-all duration-300" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }} whileHover={{ y: -4 }}>
              <div className="aspect-[3/4] bg-cover bg-center bg-top" style={{ backgroundImage: `url(${member.image})` }} />
              <div className="p-5">
                <p className="font-display text-xl text-brand-foreground">{member.name}</p>
                <p className="text-brand-muted text-sm mt-0.5 mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-1.5">{member.specialties.map((s) => <span key={s} className="text-xs bg-brand-muted-bg text-brand-muted px-2 py-1 rounded-full">{s}</span>)}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
