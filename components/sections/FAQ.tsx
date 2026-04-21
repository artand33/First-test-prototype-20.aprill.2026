"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [
  { q: "Do the treatments hurt?", a: "Most of our treatments involve minimal to no discomfort. For injectable treatments, we use topical numbing creams and ultra-fine needles." },
  { q: "How long do results last?", a: "It varies by treatment. Botox typically lasts 3–4 months. Fillers can last 12–18 months. Sculptra builds collagen that lasts 2+ years." },
  { q: "Is there downtime after treatments?", a: "Most treatments have zero to minimal downtime. Injectables may cause mild swelling or bruising for 1–3 days." },
  { q: "How much do treatments cost?", a: "Pricing depends on the treatment and your individual goals. Injectables typically start at $300–$500 per session." },
  { q: "Do I need a consultation before booking?", a: "Yes, and it's free. A consultation lets Dr. Mendieta's team fully assess your goals and design a treatment plan that's right for you." },
  { q: "Are the treatments safe?", a: "Absolutely. All treatments are FDA-approved or FDA-cleared, and performed by licensed, board-certified professionals." },
  { q: "Can I combine multiple treatments?", a: "Yes, and combination approaches often deliver the best results. Dr. Mendieta is expert in designing multi-treatment plans." },
];
export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="faq" className="py-20 md:py-28 section-surface-pearl" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze block mb-4">Common Questions</span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-foreground mb-4">Everything You Need to Know</h2>
          <p className="text-brand-muted text-lg">No jargon. Straight answers to the questions we hear most.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (<AccordionItem key={i} value={`item-${i}`}><AccordionTrigger>{faq.q}</AccordionTrigger><AccordionContent>{faq.a}</AccordionContent></AccordionItem>))}
          </Accordion>
          <div className="mt-8 rounded-2xl border border-brand-border bg-white/70 px-5 py-4 text-sm text-brand-muted flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p>Still have questions? Speak directly with our team.</p>
            <a href="tel:7868827351" className="font-medium text-brand-bronze hover:text-brand-bronze-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2 rounded-sm">
              Call (786) 882-7351
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
