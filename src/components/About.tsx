import { motion } from "motion/react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
      <div className="md:col-span-5 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:sticky md:top-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <br />
            <span className="text-gold italic underline underline-offset-8">Summary</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-8" />
          <p className="text-gold font-medium uppercase tracking-[0.2em] text-xs">
            Expertise in AI & Education
          </p>
        </motion.div>
      </div>

      <div className="md:col-span-7 space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-serif italic text-ivory/90 leading-relaxed"
        >
          "Multidisciplinary technologist and learning architect combining eLearning design, AI systems development, and mental health practice."
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-ivory/70 space-y-6 font-light leading-loose text-lg"
        >
          <p>
            Originator and developer of TandemLearn, a Southern African inclusive education platform providing real-time speech-to-text transcription, Zimbabwean Sign Language overlays, and AI-powered personalised learning for deaf, hard-of-hearing, and neurodiverse students.
          </p>
          <p>
            Experienced in offline-first architecture, multilingual NLP, grant-ready impact measurement, and culturally adaptive instructional design. Postgraduate-qualified across education, mental health, and counselling from leading Australian universities.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h4 className="text-gold font-bold text-3xl mb-1">25+</h4>
              <p className="text-xs uppercase tracking-widest opacity-60">Published Books</p>
            </div>
            <div>
              <h4 className="text-gold font-bold text-3xl mb-1">6+</h4>
              <p className="text-xs uppercase tracking-widest opacity-60">AI Platforms Built</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
