import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "../constants";

export const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Platforms", href: "#platforms", id: "platforms" },
  { name: "Publications", href: "#publications", id: "publications" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scrollspy to detect active section
      const sections = navLinks.map(link => link.id);
      const navElement = document.querySelector("nav");
      const navHeight = navElement ? navElement.offsetHeight : 80;
      const scrollPos = window.scrollY + navHeight + 40;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        let el = document.getElementById(id);
        if (!el && id === "publications") el = document.getElementById("books");
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Check if URL has hash on initial load and scroll smoothly
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      setTimeout(() => {
        let el = document.getElementById(hashId);
        if (!el && hashId === "books") el = document.getElementById("publications");
        if (!el && hashId === "publications") el = document.getElementById("books");
        if (el) {
          const navElement = document.querySelector("nav");
          const navHeight = navElement ? navElement.offsetHeight : 80;
          const targetTop = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: hashId === "home" ? 0 : Math.max(0, targetTop - navHeight - 16),
            behavior: "smooth"
          });
          setActiveSection(hashId);
        }
      }, 200);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace(/^#/, "");
    
    let target = document.getElementById(id);
    if (!target && id === "publications") target = document.getElementById("books");
    if (!target && id === "books") target = document.getElementById("publications");

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (target) {
      try {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch {
        const navElement = document.querySelector("nav");
        const navHeight = navElement ? navElement.offsetHeight : 80;
        const targetTop = target.getBoundingClientRect().top + (window.pageYOffset || window.scrollY || 0);
        window.scrollTo({
          top: Math.max(0, targetTop - navHeight - 16),
          behavior: "smooth"
        });
      }
    }

    try {
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    } catch {
      // Ignore SecurityError in sandboxed iframes or privacy browsers
    }

    setActiveSection(id);
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      handleNavClick(e, href);
    }, 120);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-navy-dark/95 backdrop-blur-md py-3 shadow-xl border-b border-gold/25 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center lg:items-end">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter uppercase whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
          >
            {PERSONAL_INFO.firstName} <span className="text-gold">{PERSONAL_INFO.lastName}</span>
          </a>
          <span className="text-[10px] md:text-xs tracking-micro uppercase opacity-60 mt-0.5 hidden xl:block">
            {PERSONAL_INFO.tagline}
          </span>
        </motion.div>

        {/* Desktop Nav - visible on lg (1024px+) screens */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[10px] xl:text-[11px] font-bold uppercase tracking-widest px-2.5 xl:px-3.5 py-1.5 rounded-sm transition-all cursor-pointer pointer-events-auto ${
                  isActive
                    ? "border border-gold text-gold bg-gold/10 shadow-sm"
                    : "border border-transparent text-ivory/80 hover:border-gold/50 hover:text-gold hover:bg-gold/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile & Tablet Toggle - visible on screens under 1024px */}
        <button
          className="lg:hidden text-gold p-2 -mr-2 cursor-pointer focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-navy-light text-ivory border-b border-gold/20 shadow-2xl"
          >
            <div className="flex flex-col p-5 space-y-2 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleMobileNavClick(e, link.href)}
                    className={`text-sm font-semibold uppercase tracking-widest py-2.5 px-3 rounded-sm transition-colors cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "text-gold bg-gold/10 font-bold border-l-2 border-gold"
                        : "text-ivory/80 hover:text-gold hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
