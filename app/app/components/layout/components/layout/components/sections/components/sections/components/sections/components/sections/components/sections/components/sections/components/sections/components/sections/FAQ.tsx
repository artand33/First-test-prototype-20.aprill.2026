"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do the treatments hurt?", a: "Most of our treatments involve minimal to no discomfort. For injectable treatments, we use topical numbing creams and ultra-fine needles. For device-based treatments like Morpheus8, we apply prescription-strength numbing beforehand. The vast majority of our clients are comfortable throughout — and many fall asleep during facials." },
  { q: "How long do results last?", a: "It varies by treatment. Botox typically lasts 3–4 months. Fillers can last 12–18 months depending on the product and area. Sculptra builds collagen that lasts 2+ years. Body contouring results are long-lasting when maintained with a healthy lifestyle. We'll be transparent about expected timelines during your consultation." },
  { q: "Is there downtime after treatments?", a: "Most treatments have zero to minimal downtime — that's one of the key advantages of non-surgical aesthetics. Injectables may cause mild swelling or bruising for 1–3 days. Morpheus8 and more intensive skin treatments may involve redness for 24–48 hours. We'll give you specific aftercare instructions before every appointment." },
  { q: "How much do treatments cost?", a: "Pricing depends on the treatment, the amount of product used, and your individual goals. Injectables typically start at $300–$500 per session. More comprehensive treatments are discussed in detail during your free consultation. We never upsell — you only pay for what you actually need." },
  { q: "Do I need a consultation before booking?", a: "Yes, and it's free. A consultation lets Dr. Mendieta's team fully assess your goals, examine your anatomy, and design a treatment plan that's right for you. It's also your chance to ask every question you have — with no obligation to proceed." },
  { q: "Are the treatments safe?", a: "Absolutely. All treatments are FDA-approved or FDA-cleared, and performed by licensed, board-certified professionals. We don't cut corners on safety — every product, every device, and every protocol meets the highest medical standards. Dr. Mendieta's 25 years of surgical background means we have a level of expertise most medspas simply don't." },
  { q: "Can I combine multiple treatments?", a: "Yes, and combination approaches often deliver the best results. Dr. Mendieta is expert in designing multi-treatment plans — sequencing treatments so each one enhances the next. We'll map this out for you in your consultation." },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-20 md:py-28 bg-brand-muted-bg" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze block mb-4">Common Questions</span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-foreground mb-4">Everything You Need to Know</h2>
          <p className="text-brand-muted text-lg">No jargon. Straight answers to the questions we hear most.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p className="text-center text-brand-muted mt-10 text-sm" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.6 }}>
          Still have questions?{" "}
          <a href="tel:7868827351" className="text-brand-bronze hover:underline underline-offset-4">Call us directly</a>
          {" "}— we&apos;re happy to talk you through anything.
        </motion.p>
      </div>
    </section>
  );
}
