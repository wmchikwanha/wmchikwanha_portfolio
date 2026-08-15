import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Mental Health",
    school: "Southern Cross University, Australia",
    year: "2022"
  },
  {
    degree: "Master of Education (eLearning)",
    school: "University of New England, Australia",
    year: "2018"
  },
  {
    degree: "Graduate Certificate of Counselling",
    school: "Monash University, Australia",
    year: "2023"
  },
  {
    degree: "BSc Economics",
    school: "University of Zimbabwe",
    year: "1995"
  }
];

const certs = [
  { title: "Managing AI Projects", issuer: "Johns Hopkins University" },
  { title: "AI for Education (Intermediate)", issuer: "Kennesaw State University" },
  { title: "Trustworthy AI for Healthcare", issuer: "Politecnico di Milano" },
  { title: "Ethics of AI", issuer: "University of Helsinki" },
  { title: "Build & Execute AI Strategy", issuer: "Coursera Network" }
];

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
      <div>
        <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <GraduationCap className="text-gold" />
          Academic Excellence
        </h3>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-navy-light rounded-2xl border border-gold/10 flex justify-between items-center group hover:border-gold/40 transition-all"
            >
              <div>
                <h4 className="text-lg font-bold group-hover:text-gold transition-colors">{edu.degree}</h4>
                <p className="text-gold-light text-sm italic opacity-90">{edu.school}</p>
              </div>
              <span className="text-gold font-bold font-serif text-lg ml-4">{edu.year}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
          <Award className="text-gold" />
          Professional Certifications
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 border border-gold/20 rounded-xl hover:bg-gold/10 transition-colors bg-navy-light/20"
            >
              <h4 className="text-sm font-bold mb-1">{cert.title}</h4>
              <p className="text-[10px] uppercase tracking-widest text-gold-light font-bold">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
