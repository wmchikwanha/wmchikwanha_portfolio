import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gold italic">Journey</span></h2>
        <div className="w-24 h-1 bg-gold" />
      </div>

      <div className="space-y-8 relative">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 group"
          >
            <div className="md:w-1/4 shrink-0">
               <div className="sticky top-32">
                 <span className="text-[10px] font-mono text-gold opacity-50 block mb-1">0{idx + 1}</span>
                 <p className="text-xl font-bold md:max-w-[150px] leading-none mb-2">{exp.period}</p>
                 <div className="w-8 h-[2px] bg-gold/30 group-hover:w-full transition-all duration-700" />
               </div>
            </div>

            <div className="md:w-3/4 grow bg-white/5 border border-white/10 p-8 md:p-10 hover:border-gold/30 transition-all shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase size={64} />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{exp.title}</h3>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-6 opacity-80">
                {exp.company === "Syllix-One / Stratedge Learning & Publishing" ? (
                  <>
                    <a href="https://syllix-one.com" target="_blank" rel="noreferrer" className="hover:underline decoration-gold/50">Syllix-One</a>
                    {" / "}
                    <a href="https://stratedgelearn.com" target="_blank" rel="noreferrer" className="hover:underline decoration-gold/50">Stratedge Learning</a>
                    {" & "}
                    <a href="https://sites.google.com/view/stratedgelearn/published-works" target="_blank" rel="noreferrer" className="hover:underline decoration-gold/50">Publishing</a>
                  </>
                ) : (
                  exp.company
                )}
                {" • "}
                {exp.location}
              </p>
              
              <p className="text-sm font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
