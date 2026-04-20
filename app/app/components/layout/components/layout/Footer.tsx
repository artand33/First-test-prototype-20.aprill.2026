import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const services = [
  "Injectables & Fillers",
  "Face Treatments",
  "Body Contouring",
  "IV Therapy",
  "Medical Weight Loss",
  "Skin Tightening",
];

const links = [
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Meet the Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a Consult", href: "#booking" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="font-display text-3xl font-semibold mb-4">
              <span className="text-brand-bronze">4</span>Beauty
              <span className="block text-xs font-sans tracking-widest uppercase text-white/50 mt-1">Med Spa</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Miami&apos;s most trusted non-surgical aesthetic center. Led by board-certified plastic surgeon Dr. Constantino Mendieta, MD.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/4beautymedspa" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-bronze hover:text-brand-bronze transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com/4beautymedspa" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-bronze hover:text-brand-bronze transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze mb-5">Treatments</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}><a href="#services" className="text-sm text-white/60 hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze mb-5">Explore</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}><a href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze mb-5">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-relaxed">2310 S Dixie Hwy, 2nd Floor<br />Miami, FL 33133<br /><span className="text-white/40">(Coconut Grove)</span></span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                <a href="tel:7868827351" className="text-sm text-white/60 hover:text-white transition-colors">(786) 882-7351</a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-brand-bronze shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">Mon–Fri: 9am – 5pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} 4Beauty Med Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
