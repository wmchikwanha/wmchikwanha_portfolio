import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Menu, X, BookOpen, HeartPulse, GraduationCap, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO, LINKS, HERO_IMAGE, PLATFORMS, BOOKS, EXPERIENCE } from "./constants";

const NAV = [
  ["Work", "#work"],
  ["Platforms", "#platforms"],
  ["Publications", "#publications"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

const FOCUS = [
  { icon: GraduationCap, title: "Inclusive EdTech", text: "Tools that adapt teaching to the whole learner: disability, neurodiversity, home language and culture." },
  { icon: HeartPulse, title: "Digital Health", text: "Human-in-the-loop decision support for mental health and clinical teams. Faster, but always safer." },
  { icon: ShieldCheck, title: "AI Literacy & Governance", text: "Practical training, assessment redesign and governance logs so institutions adopt AI with confidence." },
];

const EDUCATION = [
  { degree: "Graduate Certificate of Counselling", school: "Monash University", year: "2023" },
  { degree: "Master of Mental Health", school: "Southern Cross University", year: "2022" },
  { degree: "Master of Education (eLearning)", school: "University of New England", year: "2018" },
  { degree: "BSc Economics", school: "University of Zimbabwe", year: "1995" },
];

const CERTS = [
  "Managing AI Projects · Johns Hopkins University",
  "Trustworthy AI for Healthcare · Politecnico di Milano",
  "AI for Education · Kennesaw State University",
  "Ethics of AI · University of Helsinki",
];

const TOOLS = ["Claude", "OpenAI", "Gemini", "Google AI Studio", "Lovable", "React / TypeScript", "Supabase", "Offline-first PWAs", "Web Speech & WebRTC", "Instructional design", "Grant writing", "NVivo"];

const STORES = [
  ["Amazon", LINKS.amazonStore],
  ["Apple Books", LINKS.appleBooks],
  ["Barnes & Noble", LINKS.barnesAndNoble],
  ["African Books Collective", LINKS.africanBooksCollective],
  ["Snapplify", LINKS.snapplifyStore],
];

const EMAILS = ["wmchikwanha@gmail.com", "service@syllix-one.com"];

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

function Label({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
      <span className="font-mono text-ink/40">{n}</span>
      <span className="h-px w-8 bg-clay/50" />
      {children}
    </p>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink antialiased selection:bg-clay selection:text-paper">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="font-serif text-xl font-semibold tracking-tight">
            Walter M. Chikwanha
          </a>
          <nav className="hidden gap-7 text-sm md:flex">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="text-ink/70 transition hover:text-clay">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition hover:bg-clay md:inline-block">
            Work with me
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-ink/10 px-5 py-3 md:hidden">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-ink/80">{l}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.35fr_1fr] md:pt-20">
          <motion.div {...fade}>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" /> Open to consulting, research and partnerships
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              AI that meets people <em className="text-clay">where they are.</em>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
              I design lean, human-in-the-loop AI tools for education and health in Africa and Australia, built for neurodiverse learners, under-resourced classrooms and busy clinicians.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#platforms" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:bg-clay">
                See the platforms <ArrowUpRight size={16} />
              </a>
              <a href={LINKS.orcid} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-medium transition hover:border-clay hover:text-clay">
                ORCID {PERSONAL_INFO.orcidId}
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              {[["6+", "AI platforms"], ["25+", "published guides"], ["15 yrs", "education & health"]].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-serif text-3xl font-semibold text-clay">{n}</dt>
                  <dd className="text-xs uppercase tracking-wider text-ink/55">{l}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div {...fade} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-clay/15" />
            <img src={HERO_IMAGE} alt={PERSONAL_INFO.name} className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-paper px-4 py-3 shadow-lg ring-1 ring-ink/10">
              <p className="text-xs text-ink/55">Founder & Director</p>
              <p className="text-sm font-semibold">Syllix-One · Stratedge</p>
            </div>
          </motion.div>
        </section>

        {/* Focus */}
        <section id="work" className="scroll-mt-20 bg-ink py-14 text-paper md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              <span className="font-mono text-paper/40">01</span><span className="h-px w-8 bg-sand/50" />What I do
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
              I find the real bottleneck, then build the smallest tool that removes it.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {FOCUS.map(({ icon: Icon, title, text }) => (
                <motion.div {...fade} key={title} className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-6">
                  <Icon className="text-sand" size={26} />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/65">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section id="platforms" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 md:py-20">
          <Label n="02">Platforms</Label>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl">Working prototypes, not slide decks.</h2>
            <p className="max-w-sm text-sm text-ink/60">Each one is live. Open it and try it.</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORMS.map((p) => (
              <motion.a {...fade} key={p.name} href={p.link} target="_blank" rel="noreferrer"
                className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-clay/40 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-sand/40 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-ink/70">{p.type}</span>
                  <ArrowUpRight size={18} className="text-ink/30 transition group-hover:text-clay" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.description}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="scroll-mt-20 border-y border-ink/10 bg-sand/25 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.6fr]">
            <div>
              <Label n="03">Publications</Label>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">The AI Companion series</h2>
              <p className="mt-4 text-ink/70">
                Plain-language AI guides for the people doing the work: teachers, nurses, allied health and social workers, engineers, tradespeople, executives and parents across Zimbabwe and South Africa.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {STORES.map(([l, h]) => (
                  <a key={l} href={h} target="_blank" rel="noreferrer" className="rounded-full border border-ink/20 bg-paper px-3 py-1.5 text-xs font-medium transition hover:border-clay hover:text-clay">{l}</a>
                ))}
              </div>
            </div>
            <ul className="grid gap-x-6 sm:grid-cols-2">
              {BOOKS.map((b) => (
                <li key={b} className="flex gap-3 border-b border-ink/10 py-3 text-sm leading-snug">
                  <BookOpen size={16} className="mt-0.5 shrink-0 text-clay" />{b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-14 md:py-20">
          <Label n="04">Experience</Label>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Classrooms, clinics and code.</h2>
          <div className="mt-9 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <ol className="relative border-l border-ink/15">
              {EXPERIENCE.map((e) => (
                <motion.li {...fade} key={e.title + e.company} className="mb-7 ml-6">
                  <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-clay" />
                  <p className="text-xs uppercase tracking-wider text-ink/50">{e.period} · {e.location}</p>
                  <h3 className="mt-1 font-semibold">{e.title}, <span className="text-clay">{e.company}</span></h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{e.description.replace(/\s+/g, " ").trim()}</p>
                </motion.li>
              ))}
            </ol>
            <aside className="space-y-8">
              <div className="rounded-2xl bg-ink p-6 text-paper">
                <h3 className="font-serif text-xl">Education</h3>
                <ul className="mt-4 space-y-3">
                  {EDUCATION.map((d) => (
                    <li key={d.degree} className="flex justify-between gap-4 text-sm">
                      <span><span className="font-medium">{d.degree}</span><br /><span className="text-paper/55">{d.school}</span></span>
                      <span className="font-mono text-sand">{d.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl">Certifications</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink/70">
                  {CERTS.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl">Toolkit</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TOOLS.map((t) => <span key={t} className="rounded-full bg-sand/40 px-3 py-1 text-xs">{t}</span>)}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-clay py-14 text-paper md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/70">05 · Contact</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl">Have a bottleneck worth solving?</h2>
              <p className="mt-4 max-w-md text-paper/80">Schools, clinics, NGOs and researchers: tell me what's stuck and I'll come back with a practical blueprint.</p>
            </div>
            <div className="space-y-3 self-end">
              {EMAILS.map((e) => (
                <a key={e} href={`mailto:${e}`} className="flex items-center gap-3 rounded-xl bg-paper/10 px-4 py-3 transition hover:bg-paper/20"><Mail size={18} />{e}</a>
              ))}
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl bg-paper/10 px-4 py-3 transition hover:bg-paper/20"><Phone size={18} />{PERSONAL_INFO.phone}</a>
              <p className="flex items-center gap-3 px-4 py-2 text-paper/80"><MapPin size={18} />{PERSONAL_INFO.location} · working across Africa & Australia</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-ink/55">
        <p>© {new Date().getFullYear()} Walter M. Chikwanha</p>
        <div className="flex flex-wrap gap-5">
          <a href={LINKS.syllixOne} target="_blank" rel="noreferrer" className="hover:text-clay">Syllix-One</a>
          <a href={LINKS.stratedgeLearn} target="_blank" rel="noreferrer" className="hover:text-clay">Stratedge</a>
          <a href={LINKS.orcid} target="_blank" rel="noreferrer" className="hover:text-clay">ORCID</a>
          <a href="https://github.com/wmchikwanha" target="_blank" rel="noreferrer" className="hover:text-clay">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
