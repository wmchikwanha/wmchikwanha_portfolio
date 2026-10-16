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
          <a 
            href={LINKS.linkedin} 
            target="_blank" 
            rel="noreferrer"
            title="LinkedIn Profile"
            className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href={LINKS.orcid} 
            target="_blank" 
            rel="noreferrer"
            title="ORCID Record: 0000-0002-1822-2168"
            className="w-10 h-10 border border-[#a6ce39]/40 rounded-full flex items-center justify-center text-[#a6ce39] hover:bg-[#a6ce39] hover:text-navy transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 256 256">
              <path d="M128 0a128 128 0 1 0 128 128A128 128 0 0 0 128 0zm-38.3 194.2H65V74.9h24.7zm-12.3-132a14.7 14.7 0 1 1 14.7-14.7 14.7 14.7 0 0 1-14.7 14.7zm116.8 77.2c0 30.5-20.2 55.4-56.9 55.4h-35.7V74.9h37.5c34.9 0 55.1 23.9 55.1 54.9zm-26.6.2c0-20.1-12.7-34.8-33.1-34.8h-12.3v69.6h12.3c20.7 0 33.1-14.7 33.1-34.8z"/>
            </svg>
          </a>
          <a 
            href={LINKS.syllixOne} 
            target="_blank" 
            rel="noreferrer"
            title="Syllix-One Website"
            className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all"
          >
            <Globe size={18} />
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            title="Send Email"
            className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all"
          >
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
