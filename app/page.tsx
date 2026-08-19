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
import { ContourField, DimensionGrid, StitchCorners, StitchSeam, WeavePattern } from "./components/illustrations";

// ---------------------------------------------------------------------------
// UI primitives
// ---------------------------------------------------------------------------

const TRACK_META: Record<Track, { label: string; color: string; pale: string; accent: string }> = {
  research: { label: "Research", color: "var(--sage-deep)", pale: "var(--sage-pale)", accent: "var(--sage)" },
  systems: { label: "Systems", color: "var(--clay-deep)", pale: "var(--clay-pale)", accent: "var(--clay)" },
};

function TrackTag({ track, className = "" }: { track: Track; className?: string }) {
  const meta = TRACK_META[track];
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${className}`}
      style={{ color: meta.color }}
    >
      <span className="h-1 w-1 rounded-full" style={{ background: meta.accent }} />
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
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight">A. Messaad</span>
          <span className="hidden font-mono text-[11px] tracking-[0.1em] text-[var(--ink-faint)] sm:inline">
            ml + systems
          </span>
        </a>
        <nav className="hidden gap-6 font-mono text-[13px] uppercase tracking-[0.08em] text-[var(--ink-dim)] lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-[var(--clay-deep)]">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resume}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink)] transition hover:border-[var(--clay)] hover:text-[var(--clay-deep)]"
        >
          <FileDown size={13} /> resume
        </a>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero — two swatches, stitched
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-[55%] bg-[var(--sage-pale)]/40">
          <ContourField opacity={0.5} />
        </div>
        <div className="absolute inset-y-0 right-0 w-[55%] bg-[var(--clay-pale)]/35">
          <DimensionGrid opacity={0.4} />
        </div>
        <div className="absolute inset-y-0 left-1/2 w-40 -translate-x-1/2">
          <StitchSeam />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
            {profile.location} &nbsp;·&nbsp; {profile.role}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl">
              I build the{" "}
              <span className="rounded px-1.5" style={{ background: "var(--sage-pale)", color: "var(--sage-deep)" }}>
                model
              </span>
              .
              <br />
              Then I build the{" "}
              <span className="rounded px-1.5" style={{ background: "var(--clay-pale)", color: "var(--clay-deep)" }}>
                product
              </span>{" "}
              around it.
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
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--paper)] transition hover:bg-[var(--clay-deep)]"
              >
                See the work
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink)] transition hover:border-[var(--clay)] hover:text-[var(--clay-deep)]"
              >
                <Mail size={13} /> Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-xs -rotate-1">
              <div
                className="relative overflow-hidden rounded-md border border-[var(--line-strong)] bg-[var(--panel-soft)] p-3"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={400}
                    height={480}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                <StitchCorners />
              </div>
              <p className="mt-3 text-center font-mono text-[11px] tracking-[0.08em] text-[var(--ink-faint)]">
                pinned &nbsp;·&nbsp; two tracks, one workflow
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Stats — readout strip
// ---------------------------------------------------------------------------

function Stats() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto flex max-w-6xl flex-wrap px-6 py-10">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.05}
            className={`flex-1 basis-1/2 px-4 py-3 sm:basis-1/3 md:basis-0 ${
              i > 0 ? "border-[var(--line)] md:border-l" : ""
            }`}
          >
            <div
              className="font-display text-2xl font-semibold md:text-3xl"
              style={{ color: i % 2 === 0 ? "var(--sage-deep)" : "var(--clay-deep)" }}
            >
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
// About — two swatches
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
          const Texture = thread.track === "research" ? ContourField : DimensionGrid;
          return (
            <Reveal key={thread.track} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-md border border-[var(--line)] bg-[var(--panel-soft)] p-7">
                <Texture opacity={0.18} />
                <StitchCorners />
                <span className="relative font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: meta.color }}>
                  swatch / {meta.label}
                </span>
                <h3 className="relative mt-3 font-display text-lg font-semibold">{thread.label}</h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-[var(--ink-dim)]">{thread.body}</p>
                <div className="relative mt-6 flex gap-2.5">
                  {icons.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="flex h-9 w-9 items-center justify-center rounded-md"
                      style={{ background: meta.pale, color: meta.color }}
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
          <Eyebrow>Log</Eyebrow>
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
                  <p className="mt-0.5 font-mono text-[13px] text-[var(--sage-deep)]">{job.org}</p>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">{job.summary}</p>

                  <ul className="mt-4 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--ink-dim)]">
                        <span className="mt-0.5 shrink-0 font-mono text-[var(--clay)]">&rsaquo;</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--line-strong)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink-dim)]"
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
          <Eyebrow>Education</Eyebrow>
          <h3 className="mt-2 font-display text-xl font-semibold">Education</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.id} delay={i * 0.08}>
              <div className="h-full rounded-md border border-[var(--line)] bg-[var(--paper)] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-base font-semibold">{ed.degree}</h4>
                  <span className="font-mono text-[11px] text-[var(--ink-faint)]">{ed.period}</span>
                </div>
                <p className="mt-0.5 font-mono text-[13px] text-[var(--sage-deep)]">{ed.institution}</p>
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
// Projects — photo swatches + drafted cards
// ---------------------------------------------------------------------------

const COVER_ICONS: Record<NonNullable<Project["coverIcon"]>, LucideIcon> = {
  terminal: Terminal,
  database: Database,
  api: Waypoints,
};

function PhotoSwatch({ p }: { p: Project }) {
  return (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-md border border-[var(--line)]">
      <div className="relative h-48 w-full overflow-hidden bg-[var(--panel)]">
        {p.image && (
          <Image src={p.image} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
        )}
        <StitchCorners />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--paper)]/85 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--sage-deep)]">
          {p.year}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-3 gap-y-1 bg-[var(--paper)]/90 px-3 py-2 font-mono text-[11px] text-[var(--sage-deep)]">
          {p.metrics.map((m) => (
            <span key={m.label}>
              {m.value} <span className="text-[var(--ink-faint)]">{m.label}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[var(--panel-soft)] p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--sage-deep)]">
            {p.category}
          </span>
          <TrackTag track={p.track} />
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold">{p.name}</h3>
        <p className="mt-1 text-sm italic text-[var(--ink-faint)]">{p.tagline}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)]">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--line)] pt-4">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-[var(--line-strong)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink-dim)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function DraftedCard({ p }: { p: Project }) {
  const Icon = p.coverIcon ? COVER_ICONS[p.coverIcon] : Terminal;
  return (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-md border border-[var(--line)] bg-[var(--panel-soft)]">
      <div className="relative h-10 overflow-hidden border-b border-[var(--line)]">
        <DimensionGrid opacity={0.3} />
        <Icon size={14} strokeWidth={1.6} className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--clay-deep)]" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--clay-deep)]">
            {p.category}
          </span>
          <TrackTag track={p.track} />
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold">{p.name}</h3>
        <p className="mt-1 text-sm italic text-[var(--ink-faint)]">{p.tagline}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)]">{p.description}</p>

        <div className="mt-4 space-y-1 border-t border-[var(--line)] pt-4 font-mono text-[12px] text-[var(--ink-dim)]">
          {p.metrics.map((m) => (
            <div key={m.label}>
              <span className="text-[var(--ink-faint)]">{m.label}</span>{" "}
              <span className="text-[var(--clay)]">&rsaquo;</span> {m.value}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-[var(--line-strong)] px-2.5 py-1 font-mono text-[11px] text-[var(--ink-dim)]">
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
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Selected work</h2>
          <p className="mt-2 text-[15px] text-[var(--ink-dim)]">Applied ML research and the full-stack systems built alongside it.</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {projectFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`rounded-full border px-4 py-1.5 font-mono text-[13px] tracking-[0.02em] transition ${
                    active
                      ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                      : "border-[var(--line-strong)] text-[var(--ink-dim)] hover:border-[var(--clay)] hover:text-[var(--clay-deep)]"
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
              {p.image ? <PhotoSwatch p={p} /> : <DraftedCard p={p} />}
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
        <Eyebrow>Toolkit</Eyebrow>
        <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Toolkit</h2>
        <p className="mt-2 text-[15px] text-[var(--ink-dim)]">Everything below has shipped in something real, not just a tutorial.</p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const meta = TRACK_META[s.track];
          return (
            <Reveal key={s.group} delay={i * 0.05}>
              <div className="h-full rounded-md border border-[var(--line)] bg-[var(--panel-soft)] p-6">
                <TrackTag track={s.track} />
                <h3 className="mt-2.5 font-display text-base font-semibold">{s.group}</h3>
                <ul className="mt-3 space-y-1.5 font-mono text-[13px] text-[var(--ink-dim)]">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span style={{ color: meta.accent }}>&rsaquo;</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Publications & honors
// ---------------------------------------------------------------------------

function Publications() {
  return (
    <section id="publications" className="border-t border-[var(--line)] bg-[var(--panel)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <Eyebrow>Citations</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Publications & honors</h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {publications.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 0.08}>
              <div className="rounded-md border border-[var(--line)] bg-[var(--paper)] p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="font-mono text-xs text-[var(--sage-deep)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="whitespace-nowrap font-mono text-xs text-[var(--ink-faint)]">{pub.date}</span>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold">{pub.title}</h3>
                <p className="mt-1 font-mono text-[13px] text-[var(--ink-dim)]">{pub.venue}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)]">{pub.detail}</p>
                {pub.award && (
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--clay-pale)] bg-[var(--clay-pale)]/50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--clay-deep)]">
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
              <div className="flex h-full items-start gap-3 rounded-md border border-[var(--line)] bg-[var(--paper)] p-5">
                <Award size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[var(--clay-deep)]" />
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
// Contact — where the weave closes
// ---------------------------------------------------------------------------

function Contact() {
  return (
    <>
      <section id="contact" className="relative overflow-hidden border-t border-[var(--line)]">
        <WeavePattern className="opacity-70" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold md:text-3xl">{contact.heading}</h2>
            <p className="mt-4 max-w-lg text-[15px] text-[var(--ink-dim)]">{contact.body}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[var(--paper)] transition hover:bg-[var(--clay-deep)]"
              >
                <Mail size={14} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] transition hover:border-[var(--sage)] hover:text-[var(--sage-deep)]"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] transition hover:border-[var(--sage)] hover:text-[var(--sage-deep)]"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={profile.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] transition hover:border-[var(--sage)] hover:text-[var(--sage-deep)]"
              >
                <FaKaggle size={14} /> Kaggle
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-6 text-center font-mono text-[11px] tracking-[0.06em] text-[var(--ink-faint)]">
        built by {profile.name}
      </footer>
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Portfolio() {
  return (
    <div className="relative overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
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
