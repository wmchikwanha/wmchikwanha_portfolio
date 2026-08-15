import { motion } from "motion/react";
import { BookOpen, ShoppingCart } from "lucide-react";

import { BOOKS, LINKS } from "../constants";

export default function Books() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-12">
        <div className="lg:col-span-8 bg-white/5 p-10 border border-white/10 flex flex-col justify-between">
          <div>
            <h2 className="text-gold text-[10px] font-bold uppercase tracking-micro mb-6">Stratedge Publishing</h2>
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-16 md:w-20 md:h-28 bg-navy border-gold/40 border flex flex-col justify-between p-2 flex-shrink-0 group-hover:border-gold transition-all">
                  <div className="w-full h-[1px] bg-gold/30" />
                  <span className="text-[8px] font-mono text-gold/60 text-center uppercase tracking-tighter">Vol. 0{i}</span>
                  <div className="w-full h-[1px] bg-gold/30" />
                </div>
              ))}
            </div>
            <p className="text-xl md:text-2xl font-bold tracking-tight mb-4">AI Literacy & Strategic Pocketbooks</p>
            <p className="text-ivory/60 font-light leading-relaxed max-w-2xl text-sm italic">
              A comprehensive 25-volume repertoire empowering professionals and educators with practical AI skills. Published works available across major global platforms.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-6 mt-12">
            <a href={LINKS.amazonStore} target="_blank" className="text-xs text-gold font-bold uppercase tracking-widest border-b border-gold pb-1 hover:opacity-70 transition-opacity">
              Amazon Catalogue →
            </a>
            <a href={LINKS.snapplifyStore} target="_blank" className="text-xs text-gold font-bold uppercase tracking-widest border-b border-gold pb-1 hover:opacity-70 transition-opacity">
              Snapplify Store →
            </a>
            <a href={LINKS.africanBooksCollective} target="_blank" className="text-xs text-gold font-bold uppercase tracking-widest border-b border-gold pb-1 hover:opacity-70 transition-opacity">
              African Books Collective →
            </a>
            <a href={LINKS.appleBooks} target="_blank" className="text-xs text-gold font-bold uppercase tracking-widest border-b border-gold pb-1 hover:opacity-70 transition-opacity">
              Apple Books →
            </a>
            <a href={LINKS.barnesAndNoble} target="_blank" className="text-xs text-gold font-bold uppercase tracking-widest border-b border-gold pb-1 hover:opacity-70 transition-opacity whitespace-nowrap">
              Barnes & Noble →
            </a>
            <a href={LINKS.teachaCourses} target="_blank" className="text-xs text-gold font-bold uppercase tracking-widest border-b border-gold pb-1 hover:opacity-70 transition-opacity">
              Teacha! Courses →
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-gold p-8 grow flex flex-col justify-center text-navy font-black">
             <h3 className="text-3xl tracking-tighter leading-none mb-2">25+</h3>
             <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Volumes Published</p>
          </div>
          <div className="bg-white p-8 grow flex flex-col justify-center text-navy font-bold italic">
             "Equipping Africa with the tools for the next digital frontier."
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4 border-t border-white/10 pt-8">
        {BOOKS.map((book, idx) => (
          <div key={idx} className="flex gap-3 items-center py-2 border-b border-gold/10 group">
             <span className="text-[10px] font-mono text-gold opacity-40">0{idx + 1}</span>
             <p className="text-[11px] font-light opacity-70 group-hover:opacity-100 transition-opacity">{book}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

