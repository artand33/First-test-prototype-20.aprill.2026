"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
const categories = ["All", "Injectables", "Face", "Body", "Skin"];
const transformations = [
  { category: "Injectables", treatment: "Lip Filler", before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", after: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", result: "Natural volume, defined Cupid's bow" },
  { category: "Face", treatment: "Morpheus8", before: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80", after: "https://images.unsplash.com/photo-1547163928-5da1c50cc6e0?w=400&q=80", result: "Tighter skin, reduced fine lines" },
  { category: "Body", treatment: "Non-Surgical BBL", before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", after: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80", result: "Lifted contour, natural shape" },
  { category: "Skin", treatment: "DiamondGlow", before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80", after: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80", result: "Glowing, even-toned complexion" },
  { category: "Injectables", treatment: "Sculptra", before: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80", after: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&q=80", result: "Restored volume, youthful contours" },
  { category: "Face", treatment: "Chemical Peel", before: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=400&q=80", after: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", result: "Renewed texture, faded spots" },
];
function BeforeAfterCard({ item }: { item: typeof transformations[0] }) {
  const [sliderX, setSliderX] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setSliderX(pct);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderX((current) => Math.max(0, current - 5));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderX((current) => Math.min(100, current + 5));
    }
  };
  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-square rounded-2xl overflow-hidden cursor-col-resize select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-label={`${item.treatment} before and after comparison`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderX)}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.after})` }} />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.before})`, clipPath: `inset(0 ${100 - sliderX}% 0 0)` }} />
        <div className="absolute top-0 bottom-0 w-px bg-white/80 z-10" style={{ left: `${sliderX}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <span className="text-brand-espresso text-xs font-bold">↔</span>
          </div>
        </div>
        <div className="absolute top-3 left-3 z-10"><span className="text-xs font-sans font-medium uppercase tracking-widest bg-black/50 text-white/80 px-2 py-1 rounded-full">Before</span></div>
        <div className="absolute top-3 right-3 z-10"><span className="text-xs font-sans font-medium uppercase tracking-widest bg-brand-bronze/80 text-white px-2 py-1 rounded-full">After</span></div>
      </div>
      <div className="mt-3 px-1">
        <p className="font-display text-lg text-brand-foreground">{item.treatment}</p>
        <p className="text-sm text-brand-muted mt-0.5">{item.result}</p>
      </div>
    </div>
  );
}
export default function Transformations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? transformations : transformations.filter((t) => t.category === activeCategory);
  return (
    <section id="transformations" className="py-20 md:py-28 section-surface-pearl" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze mb-4 block">Real Clients · Real Results</span>
          <h2 className="font-display text-4xl md:text-5xl text-brand-foreground mb-4">See the Transformations</h2>
          <p className="text-brand-muted text-lg max-w-lg mx-auto">Drag, swipe, or use left and right arrow keys to compare before and after.</p>
          <p className="text-brand-muted text-sm mt-3">Results vary by anatomy and treatment plan.</p>
        </motion.div>
        <motion.div className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:overflow-visible justify-start sm:justify-center gap-2 mb-10 pb-1" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream ${activeCategory === cat ? "bg-brand-bronze text-white shadow-md" : "bg-brand-muted-bg text-brand-muted hover:bg-brand-beige"}`}>{cat}</button>
          ))}
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="initial" animate={isInView ? "animate" : "initial"} key={activeCategory}>
          {filtered.map((item) => (
            <motion.div key={item.treatment + item.category} variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <BeforeAfterCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
