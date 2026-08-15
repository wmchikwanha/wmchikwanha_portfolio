import { motion } from "motion/react";

const skillCategories = [
  {
    title: "AI & Development",
    skills: ["Claude / Anthropic", "OpenAI GPT", "Google Gemini", "Google AI Studio", "Lovable AI", "Replit", "GitHub"]
  },
  {
    title: "EdTech Architecture",
    skills: ["React / TypeScript", "Supabase (PostgreSQL)", "PWA / Service Workers", "IndexedDB", "Web Speech API", "WebRTC / LiveKit", "Offline-First Design"]
  },
  {
    title: "Instructional Design",
    skills: ["eLearning Architecture", "Multilingual NLP", "Curriculum Alignment", "Grant Writing", "Impact Metrics", "Disability Inclusion", "Nvivo"]
  }
];

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Technical <span className="text-gold">Expertise</span></h2>
        <div className="w-24 h-1 bg-gold mb-6" />
        <p className="max-w-2xl text-ivory/60 font-light font-serif">
          Bridging the gap between advanced artificial intelligence and inclusive educational delivery through specialized technical proficiencies.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-gold font-bold uppercase tracking-[0.2em] text-xs border-b border-gold/20 pb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-navy-light text-ivory/80 text-sm font-light rounded-full border border-white/5 hover:border-gold/30 hover:text-gold transition-all duration-300 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Education & Certs Highlight */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 p-8 border border-gold/20 rounded-3xl bg-gold/5 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <p className="text-gold italic font-serif text-xl">
          Postgraduate-qualified across Education, Mental Health, and Counselling from leading Australian Universities.
        </p>
        <div className="flex gap-4">
           {/* Minimalist cert labels */}
           <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Australia</p>
              <div className="w-12 h-1 bg-gold mx-auto" />
           </div>
           <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Zimbabwe</p>
              <div className="w-12 h-1 bg-gold mx-auto" />
           </div>
        </div>
      </motion.div>
    </div>
  );
}
