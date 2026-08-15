import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { PERSONAL_INFO, LINKS } from "../constants";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Let's <span className="text-gold">Connect</span></h2>
          <p className="text-ivory/60 font-serif text-lg leading-relaxed mb-12">
            Interested in collaborating on AI-inclusive educational initiatives or building platforms for the African digital transformation? Reach out via the form or my social channels.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-navy flex items-center justify-center rounded-xl text-gold border border-gold/20">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-1">Email</h4>
                <p className="text-ivory/80 font-light">{PERSONAL_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-navy flex items-center justify-center rounded-xl text-gold border border-gold/20">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-1">Location</h4>
                <p className="text-ivory/80 font-light">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-navy flex items-center justify-center rounded-xl text-gold border border-gold/20">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-1">Phone</h4>
                <p className="text-ivory/80 font-light">{PERSONAL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-navy flex items-center justify-center rounded-xl text-gold border border-gold/20">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-1">LinkedIn</h4>
                <a 
                  href={LINKS.linkedin} 
                  target="_blank" 
                  className="text-ivory/80 font-light hover:text-gold transition-colors"
                >
                  {PERSONAL_INFO.name}
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-navy-light p-8 md:p-12 border border-white/10 shadow-2xl relative"
        >
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="w-16 h-16 bg-gold rounded-sm flex items-center justify-center text-navy">
                <Send size={32} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Message Sent</h3>
              <p className="text-sm text-ivory/60 italic font-serif max-w-xs">
                Your email client should have opened. If not, please send directly to wmchikwanha@gmail.com.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-[10px] font-bold uppercase tracking-widest border-b border-gold pb-1 text-gold"
              >
                New Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="text-gold text-[10px] font-bold uppercase tracking-micro mb-2">Electronic Mail</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold tracking-widest uppercase focus:border-gold outline-none transition-all placeholder:text-white/20"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold tracking-widest uppercase focus:border-gold outline-none transition-all placeholder:text-white/20"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                required
                value={formState.subject}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold tracking-widest uppercase focus:border-gold outline-none transition-all placeholder:text-white/20"
              />
              <textarea
                name="message"
                placeholder="MESSAGE DETAILS..."
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 p-4 text-xs font-bold tracking-widest uppercase focus:border-gold outline-none transition-all resize-none placeholder:text-white/20"
              />
              <button
                type="submit"
                className="w-full bg-gold text-navy py-4 font-black text-xs uppercase tracking-[0.3em] hover:bg-gold-light transition-all active:scale-[0.99] mt-2"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
