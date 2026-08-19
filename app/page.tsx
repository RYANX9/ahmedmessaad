"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  Award,
  Crosshair,
  Database,
  FileDown,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
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
import { CornerFrame, PulseLine, ScanSweep, TickRuler } from "./components/illustrations";

// ---------------------------------------------------------------------------
// UI primitives
// ---------------------------------------------------------------------------

const TRACK_META: Record<Track, { label: string; color: string; dim: string }> = {
  research: { label: "RESEARCH", color: "var(--phosphor)", dim: "var(--phosphor-dim)" },
  systems: { label: "SYSTEMS", color: "var(--amber)", dim: "var(--amber-dim)" },
};

function TrackTag({ track, className = "" }: { track: Track; className?: string }) {
  const meta = TRACK_META[track];
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${className}`}
      style={{ color: meta.color }}
    >
      <span className="h-1 w-1 rounded-full" style={{ background: meta.color }} />
      {meta.label}
    </span>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, tone = "var(--ink-faint)" }: { children: React.ReactNode; tone?: string }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em]" style={{ color: tone }}>
      {children}
    </p>
  );
}

// ---------------------------------------------------------------------------
// Header
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
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight">A. MESSAAD</span>
          <span className="hidden font-mono text-[11px] tracking-[0.1em] text-[var(--ink-faint)] sm:inline">
            / AI+SYS
          </span>
        </a>
        <nav className="hidden gap-6 font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--ink-dim)] lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-[var(--phosphor)]">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resume}
          className="inline-flex items-center gap-2 border border-[var(--line-bright)] px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink)] transition hover:border-[var(--amber)] hover:text-[var(--amber)]"
        >
          <FileDown size={13} /> resume
        </a>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
          SUBJECT: {profile.name} &nbsp;·&nbsp; LOC: {profile.location} &nbsp;·&nbsp; STATUS: ACTIVE
        </p>
      </Reveal>

      <div className="mt-8 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl">
            I build the <span style={{ color: "var(--phosphor)" }}>model</span>.
            <br />
            Then I build the <span style={{ color: "var(--amber)" }}>product</span> around it.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--ink-dim)]">
            Applied deep learning for clinical and diagnostic use cases, and the Next.js, Postgres,
            and API engineering that turns a model into something people can actually use.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <TrackTag track="research" />
            <TrackTag track="systems" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[var(--phosphor)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--bg)] transition hover:bg-[var(--ink)]"
            >
              See the work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 border border-[var(--line-bright)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink)] transition hover:border-[var(--amber)] hover:text-[var(--amber)]"
            >
              <Mail size={13} /> Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="relative overflow-hidden border border-[var(--line-bright)] bg-[var(--panel)]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={400}
                height={480}
                className="h-auto w-full object-cover grayscale"
                priority
              />
              <CornerFrame color="var(--phosphor)" />
              <ScanSweep />
            </div>
            <p className="mt-3 font-mono text-[11px] tracking-[0.08em] text-[var(--ink-faint)]">
              SERIES 01/09 &nbsp;·&nbsp; MOD RESEARCH+SYS &nbsp;·&nbsp; 400×480
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        <PulseLine className="h-8 w-full text-[var(--phosphor-dim)]" />
        <TickRuler className="mt-2" count={64} />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Stats — readout strip
// ---------------------------------------------------------------------------

function Stats() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto flex max-w-6xl flex-wrap px-6 py-10">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.05}
            className={`flex-1 basis-1/2 px-4 py-3 sm:basis-1/3 md:basis-0 ${
              i > 0 ? "border-[var(--line)] md:border-l" : ""
            }`}
          >
            <div className="font-display text-2xl font-semibold text-[var(--phosphor)] md:text-3xl">
              {s.value}
            </div>
            <div className="mt-1.5 font-mono text-[11px] uppercase leading-snug tracking-[0.04em] text-[var(--ink-faint)]">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// About — two studies
// ---------------------------------------------------------------------------

const RESEARCH_ICONS: LucideIcon[] = [FlaskConical, Crosshair, Activity];
const SYSTEMS_ICONS: LucideIcon[] = [Terminal, Database, Waypoints];

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">{about.heading}</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {about.threads.map((thread, i) => {
          const meta = TRACK_META[thread.track];
          const icons = thread.track === "research" ? RESEARCH_ICONS : SYSTEMS_ICONS;
          return (
            <Reveal key={thread.track} delay={i * 0.08}>
              <div className="relative h-full border border-[var(--line)] bg-[var(--panel)] p-7">
                <CornerFrame color={meta.dim} />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: meta.color }}>
                  STUDY / {meta.label}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{thread.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-dim)]">{thread.body}</p>
                <div className="mt-6 flex gap-2.5">
                  {icons.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="flex h-9 w-9 items-center justify-center border border-[var(--line-bright)]"
                      style={{ color: meta.color }}
                    >
                      <Icon size={16} strokeWidth={1.6} />
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.16}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base italic leading-relaxed text-[var(--ink-dim)]">
          {about.closing}
        </p>
      </Reveal>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Background — experience log + education
// ---------------------------------------------------------------------------

function Background() {
  return (
    <section id="experience" className="border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>// LOG</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Experience</h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08}>
              <div className="grid gap-3 border-t border-[var(--line)] pt-6 sm:grid-cols-[110px_1fr]">
                <div className="font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
                  {job.period}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                  </div>
                  <p className="mt-0.5 font-mono text-[13px] text-[var(--phosphor-dim)]">{job.org}</p>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">{job.summary}</p>

                  <ul className="mt-4 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--ink-dim)]">
                        <span className="mt-0.5 shrink-0 font-mono text-[var(--phosphor)]">&gt;</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-[var(--line-bright)] px-2 py-1 font-mono text-[11px] text-[var(--ink-dim)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Eyebrow>// EDUCATION</Eyebrow>
          <h3 className="mt-2 font-display text-xl font-semibold">Education</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.id} delay={i * 0.08}>
              <div className="h-full border border-[var(--line)] bg-[var(--bg)] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-base font-semibold">{ed.degree}</h4>
                  <span className="font-mono text-[11px] text-[var(--ink-faint)]">{ed.period}</span>
                </div>
                <p className="mt-0.5 font-mono text-[13px] text-[var(--phosphor-dim)]">{ed.institution}</p>
                {ed.detail && <p className="mt-3 text-sm leading-relaxed text-[var(--ink-dim)]">{ed.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Projects — scan slides + terminal windows
// ---------------------------------------------------------------------------

const COVER_ICONS: Record<NonNullable<Project["coverIcon"]>, LucideIcon> = {
  terminal: Terminal,
  database: Database,
  api: Waypoints,
};

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ScanSlide({ p }: { p: Project }) {
  return (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block border border-[var(--line)]">
      <div className="relative h-48 w-full overflow-hidden bg-[var(--panel)]">
        {p.image && (
          <Image src={p.image} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
        )}
        <CornerFrame color="var(--phosphor-dim)" />
        <span className="absolute left-3 top-3 bg-[var(--bg)]/80 px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--phosphor)]">
          {p.year}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-3 gap-y-1 bg-[var(--bg)]/85 px-3 py-2 font-mono text-[11px] text-[var(--phosphor)]">
          {p.metrics.map((m) => (
            <span key={m.label}>
              {m.value} <span className="text-[var(--ink-faint)]">{m.label}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[var(--panel)] p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--phosphor-dim)]">
            {p.category}
          </span>
          <TrackTag track={p.track} />
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold">{p.name}</h3>
        <p className="mt-1 text-sm italic text-[var(--ink-faint)]">{p.tagline}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)]">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--line)] pt-4">
          {p.tech.map((t) => (
            <span key={t} className="border border-[var(--line-bright)] px-2 py-1 font-mono text-[11px] text-[var(--ink-dim)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function TerminalCard({ p }: { p: Project }) {
  const Icon = p.coverIcon ? COVER_ICONS[p.coverIcon] : Terminal;
  return (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block border border-[var(--line)] bg-[var(--panel)]">
      <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-2.5">
        <span className="font-mono text-[12px] text-[var(--ink-dim)]">{slug(p.name)}.ts</span>
        <Icon size={14} strokeWidth={1.6} className="text-[var(--amber)]" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--amber-dim)]">
            {p.category}
          </span>
          <TrackTag track={p.track} />
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold">{p.name}</h3>
        <p className="mt-3 font-mono text-[13px] leading-relaxed text-[var(--ink-dim)]">
          <span className="text-[var(--amber)]">$</span> {p.description}
        </p>

        <div className="mt-4 space-y-1 border-t border-[var(--line)] pt-4 font-mono text-[12px] text-[var(--ink-dim)]">
          {p.metrics.map((m) => (
            <div key={m.label}>
              <span className="text-[var(--ink-faint)]">{m.label}</span>{" "}
              <span className="text-[var(--amber)]">&rsaquo;</span> {m.value}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="border border-[var(--line-bright)] px-2 py-1 font-mono text-[11px] text-[var(--ink-dim)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.track === filter);

  return (
    <section id="work" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>// SELECTED WORK</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Selected work</h2>
          <p className="mt-2 text-[15px] text-[var(--ink-dim)]">Applied ML research and the full-stack systems built alongside it.</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-6 border-b border-[var(--line)]">
            {projectFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`border-b-2 pb-3 font-mono text-[13px] uppercase tracking-[0.06em] transition ${
                    active
                      ? "border-[var(--amber)] text-[var(--ink)]"
                      : "border-transparent text-[var(--ink-faint)] hover:text-[var(--ink-dim)]"
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
              {p.image ? <ScanSlide p={p} /> : <TerminalCard p={p} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Skills — manifest
// ---------------------------------------------------------------------------

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <Eyebrow>// MANIFEST</Eyebrow>
        <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Toolkit</h2>
        <p className="mt-2 text-[15px] text-[var(--ink-dim)]">Everything below has shipped in something real, not just a tutorial.</p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.05}>
            <div className="h-full border border-[var(--line)] bg-[var(--panel)] p-6">
              <TrackTag track={s.track} />
              <h3 className="mt-2.5 font-display text-base font-semibold">{s.group}</h3>
              <ul className="mt-3 space-y-1.5 font-mono text-[13px] text-[var(--ink-dim)]">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[var(--ink-faint)]">&rsaquo;</span> {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Publications & honors — citation log
// ---------------------------------------------------------------------------

function Publications() {
  return (
    <section id="publications" className="border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>// CITATIONS</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Publications & honors</h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {publications.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 0.08}>
              <div className="border border-[var(--line)] bg-[var(--bg)] p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="font-mono text-xs text-[var(--phosphor-dim)]">
                    P.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap font-mono text-xs text-[var(--ink-faint)]">{pub.date}</span>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold">{pub.title}</h3>
                <p className="mt-1 font-mono text-[13px] text-[var(--ink-dim)]">{pub.venue}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)]">{pub.detail}</p>
                {pub.award && (
                  <p className="mt-3 inline-flex items-center gap-1.5 border border-[var(--amber-dim)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--amber)]">
                    <Award size={12} /> {pub.award}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-14 font-display text-lg font-semibold">Honors</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {honors.map((h, i) => (
            <Reveal key={h.id} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3 border border-[var(--line)] bg-[var(--bg)] p-5">
                <Award size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[var(--amber)]" />
                <div>
                  <p className="text-sm font-medium leading-snug">{h.label}</p>
                  <p className="mt-1 font-mono text-[11px] text-[var(--ink-faint)]">{h.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Contact — terminal prompt
// ---------------------------------------------------------------------------

function Contact() {
  return (
    <>
      <section id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <p className="font-mono text-sm text-[var(--phosphor)]">
              $ contact --engineer<span className="animate-cursor-blink">_</span>
            </p>
            <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold md:text-3xl">{contact.heading}</h2>
            <p className="mt-4 max-w-lg text-[15px] text-[var(--ink-dim)]">{contact.body}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-[var(--amber)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--bg)] transition hover:bg-[var(--ink)]"
              >
                <Mail size={14} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line-bright)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] transition hover:border-[var(--phosphor)] hover:text-[var(--phosphor)]"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line-bright)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] transition hover:border-[var(--phosphor)] hover:text-[var(--phosphor)]"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={profile.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line-bright)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] transition hover:border-[var(--phosphor)] hover:text-[var(--phosphor)]"
              >
                <FaKaggle size={14} /> Kaggle
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-6 text-center font-mono text-[11px] tracking-[0.06em] text-[var(--ink-faint)]">
        // built by {profile.name}
      </footer>
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Portfolio() {
  return (
    <div className="relative overflow-x-hidden bg-[var(--bg)] text-[var(--ink)]">
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
