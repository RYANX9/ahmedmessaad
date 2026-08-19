"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Award, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import {
  about,
  contact,
  education,
  experience,
  honors,
  profile,
  projectFilters,
  projects,
  publications,
  skills,
  stats,
  type Project,
  type Track,
} from "./data";
import {
  Blob,
  DoodleApi,
  DoodleDatabase,
  DoodleFlask,
  DoodleScan,
  DoodleStethoscope,
  DoodleTerminal,
  ScribbleUnderline,
  VitalLine,
} from "./components/illustrations";

// ---------------------------------------------------------------------------
// UI primitives — small enough to live alongside the sections that use them.
// ---------------------------------------------------------------------------

const TRACK_META: Record<Track, { label: string; dot: string; text: string }> = {
  research: { label: "Research", dot: "bg-[var(--sage-deep)]", text: "text-[var(--sage-deep)]" },
  systems: { label: "Systems", dot: "bg-[var(--lavender-deep)]", text: "text-[var(--lavender-deep)]" },
};

function TrackBadge({ track, className = "" }: { track: Track; className?: string }) {
  const meta = TRACK_META[track];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${meta.text} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
      {meta.label}
    </span>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

const COVER_ICONS = {
  terminal: DoodleTerminal,
  database: DoodleDatabase,
  api: DoodleApi,
};

function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    );
  }

  const Icon = project.coverIcon ? COVER_ICONS[project.coverIcon] : DoodleTerminal;
  return (
    <div className="flex h-full w-full items-center justify-center bg-[var(--lavender)]/25 transition duration-500 group-hover:bg-[var(--lavender)]/35">
      <Icon className="h-20 w-20 text-[var(--lavender-deep)] transition duration-500 group-hover:scale-110" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold">
          Ahmed Messaad
        </a>
        <nav className="hidden gap-7 text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[var(--ink)]/70 transition hover:text-[var(--ink)]">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resume}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--sage-deep)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--ink)]"
        >
          <FileDown size={15} /> Resume
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
      <Blob className="pointer-events-none absolute -right-24 -top-16 w-[420px] opacity-25 md:w-[520px]" color="var(--sage)" />
      <Blob className="pointer-events-none absolute -left-32 top-40 w-[300px] opacity-20" color="var(--lavender)" />

      <div className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <Reveal>
          <p className="mb-4 inline-block rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--sage-deep)]">
            {profile.location}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
            I build the model.
            <br />
            Then I build the{" "}
            <span className="relative inline-block">
              product
              <ScribbleUnderline className="absolute -bottom-2 left-0 w-full text-[var(--coral)]" />
            </span>{" "}
            around it.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[var(--ink)]/75">
            Applied deep learning for clinical and diagnostic use cases, and the Next.js, Postgres,
            and API engineering that turns a model into something people can actually use.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <TrackBadge track="research" />
            <TrackBadge track="systems" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--sage-deep)]"
            >
              See the work <ArrowUpRight size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--ink)]"
            >
              <Mail size={16} /> Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px] bg-[var(--coral)]/40" />
            <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--card)]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={400}
                height={480}
                className="h-auto w-full object-cover grayscale-[15%]"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>

      <VitalLine className="mt-16 h-10 w-full text-[var(--sage-deep)]/40" />
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-3 md:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="font-display text-3xl font-semibold text-[var(--sage-deep)] md:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-[var(--ink)]/65">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const RESEARCH_ICONS = [DoodleStethoscope, DoodleScan, DoodleFlask];
const SYSTEMS_ICONS = [DoodleTerminal, DoodleDatabase, DoodleApi];

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--ink)]/50">{about.eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{about.heading}</h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {about.threads.map((thread, i) => {
          const icons = thread.track === "research" ? RESEARCH_ICONS : SYSTEMS_ICONS;
          const ring = thread.track === "research" ? "text-[var(--sage-deep)]" : "text-[var(--lavender-deep)]";
          return (
            <Reveal key={thread.track} delay={i * 0.1}>
              <div className="h-full rounded-[28px] border border-[var(--line)] bg-[var(--card)] p-8">
                <TrackBadge track={thread.track} />
                <h3 className="mt-3 font-display text-xl font-semibold">{thread.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]/75">{thread.body}</p>
                <div className={`mt-6 flex gap-4 ${ring}`}>
                  {icons.map((Icon, idx) => (
                    <Icon key={idx} className="h-9 w-9" />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg italic leading-relaxed text-[var(--ink)]/70">
          {about.closing}
        </p>
      </Reveal>
    </section>
  );
}

function Background() {
  return (
    <section id="experience" className="border-t border-[var(--line)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold">Experience</h2>
          <p className="mt-2 text-[var(--ink)]/65">Contract research and engineering roles, in order.</p>
        </Reveal>

        <div className="mt-12 space-y-10 border-l border-[var(--line)] pl-8">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08} className="relative">
              <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--sage-deep)] bg-[var(--card)]" />
              <TrackBadge track="research" />
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <span className="text-sm text-[var(--ink)]/55">{job.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-[var(--ink)]/70">{job.org}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink)]/75">{job.summary}</p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[15px] leading-relaxed text-[var(--ink)]/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--ink)]/40" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-2.5 py-1 text-xs text-[var(--ink)]/70">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-20 font-display text-2xl font-semibold">Education</h3>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.id} delay={i * 0.08}>
              <div className="h-full rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-lg font-semibold">{ed.degree}</h4>
                  <span className="text-sm text-[var(--ink)]/55">{ed.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-[var(--ink)]/70">{ed.institution}</p>
                {ed.detail && <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/70">{ed.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.track === filter);

  return (
    <section id="work" className="border-t border-[var(--line)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold">Selected work</h2>
          <p className="mt-2 text-[var(--ink)]/65">Applied ML research and the full-stack systems built alongside it.</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {projectFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                      : "border-[var(--line)] bg-[var(--paper)] text-[var(--ink)]/70 hover:border-[var(--ink)]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--paper)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(35,41,31,0.25)]"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <ProjectCover project={p} />
                  <span className="absolute left-4 top-4 rounded-full bg-[var(--paper)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                    {p.year}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--coral-deep)]">
                      {p.category}
                    </span>
                    <TrackBadge track={p.track} />
                  </div>
                  <h3 className="mt-2 flex items-center gap-1.5 font-display text-xl font-semibold">
                    {p.name}
                    <ArrowUpRight size={17} className="opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-sm italic text-[var(--ink)]/55">{p.tagline}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]/75">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-3 border-t border-[var(--line)] pt-4">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="text-sm">
                        <span className="font-semibold text-[var(--sage-deep)]">{m.value}</span>{" "}
                        <span className="text-[var(--ink)]/55">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--ink)]/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold">Toolkit</h2>
        <p className="mt-2 text-[var(--ink)]/65">Everything below has shipped in something real, not just a tutorial.</p>
      </Reveal>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.06}>
            <div className="h-full rounded-[24px] border border-[var(--line)] bg-[var(--card)] p-6">
              <TrackBadge track={s.track} />
              <h3 className="mt-2 font-display text-lg font-semibold">{s.group}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-[var(--ink)]/75">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publications" className="border-t border-[var(--line)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold">Publications & honors</h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {publications.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 0.08}>
              <div className="rounded-[24px] border border-[var(--line)] bg-[var(--paper)] p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{pub.title}</h3>
                  <span className="whitespace-nowrap text-sm text-[var(--ink)]/55">{pub.date}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[var(--ink)]/70">{pub.venue}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink)]/75">{pub.detail}</p>
                {pub.award && (
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--coral)]/20 px-3 py-1 text-xs font-semibold text-[var(--coral-deep)]">
                    <Award size={13} /> {pub.award}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-14 font-display text-xl font-semibold">Honors</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {honors.map((h, i) => (
            <Reveal key={h.id} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-[20px] border border-[var(--line)] bg-[var(--paper)] p-5">
                <Award size={18} className="mt-0.5 shrink-0 text-[var(--coral-deep)]" />
                <div>
                  <p className="text-sm font-semibold leading-snug">{h.label}</p>
                  <p className="mt-1 text-xs text-[var(--ink)]/60">{h.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      <section id="contact" className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
        <div className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24">
          <Blob className="pointer-events-none absolute -bottom-24 -right-24 w-[380px] opacity-20" color="var(--coral)" />
          <Reveal>
            <h2 className="font-display max-w-xl text-3xl font-semibold md:text-4xl">{contact.heading}</h2>
            <p className="mt-4 max-w-lg text-[var(--paper)]/70">{contact.body}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--paper)]"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--paper)]/30 px-6 py-3 text-sm font-semibold transition hover:border-[var(--paper)]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--paper)]/30 px-6 py-3 text-sm font-semibold transition hover:border-[var(--paper)]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={profile.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--paper)]/30 px-6 py-3 text-sm font-semibold transition hover:border-[var(--paper)]"
              >
                <FaKaggle size={16} /> Kaggle
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[var(--ink)] py-6 text-center text-xs text-[var(--paper)]/40">
        Built by {profile.name}
      </footer>
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Portfolio() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Background />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </div>
  );
}
