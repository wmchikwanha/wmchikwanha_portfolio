import { motion } from "motion/react";
import { ArrowRight, Linkedin, Globe } from "lucide-react";

import { PERSONAL_INFO, LINKS, HERO_IMAGE } from "../constants";

export default function Hero() {
  return (
    <div className="relative flex items-start justify-center pt-28 md:pt-36 pb-10 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
         
        {/* Left on desktop, 2nd on mobile: Photo, Quote & Direct Inquiry */}
        <div className="order-2 md:order-1 md:col-span-4 flex flex-col gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-ivory p-1 rounded-sm shadow-2xl relative group"
          >
            <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden bg-navy">
              <img 
                src={HERO_IMAGE} 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale-refined group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="border-l-2 border-gold pl-6 py-2"
          >
            <p className="text-sm md:text-base italic leading-relaxed opacity-90 font-serif">
              "{PERSONAL_INFO.bio.split(',')[0]}..."
            </p>
          </motion.div>

          <div className="pt-4 border-t border-white/10 md:border-t-0 md:pt-2">
            <p className="text-[10px] uppercase tracking-widest text-gold mb-1 font-bold">Direct Inquiry</p>
            <p className="text-lg md:text-2xl font-medium tracking-tight break-all">{PERSONAL_INFO.email}</p>
          </div>
        </div>

        {/* Right on desktop, 1st on mobile: Main Headline & Intro */}
        <div className="order-1 md:order-2 md:col-span-8 flex flex-col space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] md:leading-[0.9] tracking-tighter mb-4 md:mb-6 block uppercase">
              {PERSONAL_INFO.heroHeadline.line1}<br />
              {PERSONAL_INFO.heroHeadline.line2}<br />
              <span className="text-gold">{PERSONAL_INFO.heroHeadline.highlight}</span>
            </h1>
            
            <p className="max-w-2xl text-base md:text-lg lg:text-xl text-ivory/80 font-light leading-relaxed">
              {PERSONAL_INFO.heroSubheadline}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href="#platforms"
              className="px-8 md:px-10 py-3.5 md:py-4 bg-gold text-navy font-black rounded-sm active:scale-95 transition-all text-xs uppercase tracking-widest text-center"
            >
              Explore Solutions
            </a>
            <div className="flex items-center gap-2">
              <a 
                href={LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-3.5 md:py-4 border border-gold/30 rounded-sm hover:bg-gold/10 transition-all text-xs font-bold uppercase tracking-widest text-center"
              >
                LinkedIn
              </a>
              <a 
                href={LINKS.syllixOne} 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-3.5 md:py-4 border border-gold/30 rounded-sm hover:bg-gold/10 transition-all text-xs font-bold uppercase tracking-widest text-center"
              >
                Syllix-One
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Entity</p>
              <p className="text-sm opacity-70">Syllix-One Group</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Focus</p>
              <p className="text-sm opacity-70">AI Literacy & Inclusion</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Location</p>
              <p className="text-sm opacity-70">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

