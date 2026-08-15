import { Linkedin, Globe, Phone, Mail } from "lucide-react";
import { PERSONAL_INFO, LINKS } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-navy border-t border-gold/10 overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-gold/5 pointer-events-none select-none tracking-tighter italic uppercase">
        {PERSONAL_INFO.lastName}
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-gold tracking-widest mb-2 uppercase">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-xs uppercase tracking-[0.4em] opacity-40">
             {PERSONAL_INFO.tagline.split('•')[0].trim()}
          </p>
        </div>

        <div className="flex gap-4">
          <a href={LINKS.linkedin} target="_blank" className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
            <Linkedin size={18} />
          </a>
          <a href={LINKS.syllixOne} target="_blank" className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
            <Globe size={18} />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all">
            <Mail size={18} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">
            © {currentYear} Syllix-One Group. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            Registered Digital Services - {PERSONAL_INFO.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
