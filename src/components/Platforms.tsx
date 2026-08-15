import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PERSONAL_INFO, LINKS, PLATFORMS } from "../constants";

export default function Platforms() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Parent Entity Highlight */}
        <div className="lg:col-span-4 md:sticky md:top-32 border-gold-thin p-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy-light p-10 border border-gold shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold opacity-5 rotate-45 translate-x-12 -translate-y-12" />
            
            <h2 className="text-gold text-[10px] font-bold uppercase tracking-micro mb-2">The Parent Entity</h2>
            <h3 className="text-4xl font-extrabold tracking-tighter mb-4">Syllix-One</h3>
            <p className="text-sm leading-relaxed opacity-70 mb-8 font-light italic">
              Digital transformation advisory and inclusive AI platform provider across Africa.
            </p>
            <a 
              href={LINKS.syllixOne} 
              target="_blank"
              className="text-[10px] font-bold border-b border-gold pb-1 uppercase tracking-widest hover:text-gold transition-colors inline-block"
            >
              Visit syllix-one.com
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-12">
          <div className="border-b border-white/10 pb-6">
            <h2 className="text-gold text-[10px] font-bold uppercase tracking-micro">Digital Ecosystem</h2>
            <p className="text-2xl md:text-3xl font-bold tracking-tight mt-2">Specialized AI Systems</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {PLATFORMS.map((app, idx) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 p-6 border border-white/5 bg-navy-light/40 hover:border-gold/30 transition-all group"
              >
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 shrink-0 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500 font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <p className="text-sm font-bold tracking-tight mb-1">{app.name}</p>
                  <p className="text-[11px] opacity-60 leading-normal mb-3">{app.description}</p>
                  <a 
                    href={app.link} 
                    target="_blank"
                    className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-1 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  >
                    View <ExternalLink size={10} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
