"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  FileDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import {
  profile,
  about,
  stats,
  experience,
  education,
  projects,
  projectFilters,
  skills,
  publications,
  honors,
  contact,
  type Track,
} from "./data";

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

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

// Tick-mark corner brackets — the recurring "viewfinder" motif on framed panels.
function Corners() {
  const base = "absolute h-3 w-3 border-[var(--ink-faint)]";
  return (
    <>
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

// A section opener styled like a spec-sheet header: index code, title, rule.
function SectionHead({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-widest text-[var(--red)]">
        <span>{index}</span>
        <span className="text-[var(--ink-faint)]">/ SECTION</span>
      </div>
      <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h2>
      {description && <p className="mt-2 max-w-xl text-[var(--ink-dim)]">{description}</p>}
      <div className="mt-6 h-px w-full bg-[var(--line)]" />
    </Reveal>
  );
}

// Track is encoded by shape, not color — a circle for research, a square for
// systems — so the single red accent stays reserved for interaction/status.
function TrackTag({ track }: { track: Track }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-[var(--line-strong)] px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-dim)]">
      <span className={`h-1.5 w-1.5 bg-[var(--ink-dim)] ${track === "research" ? "rounded-full" : ""}`} />
      {track}
    </span>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 font-mono text-sm">
      <span className="text-[var(--ink-faint)]">{label}</span>
      <span className="leader" />
      <span className="text-[var(--ink)]">{value}</span>
    </div>
  );
}

const nav = [
  { href: "#work", label: "Index" },
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#papers", label: "Papers" },
  { href: "#connect", label: "Connect" },
];

// Experience + education merged into one reverse-chronological log — a real
// design decision, not decoration: both are "things that happened, in order."
type LogEntry = {
  id: string;
  tag: "WORK" | "EDU";
  period: string;
  title: string;
  org: string;
  body: string;
  bullets?: string[];
  tech?: string[];
};

const log: LogEntry[] = [
  ...experience.map((e) => ({
    id: e.id,
    tag: "WORK" as const,
    period: e.period,
    title: e.role,
    org: e.org,
    body: e.summary,
    bullets: e.bullets,
    tech: e.tech,
  })),
  ...education.map((e) => ({
    id: e.id,
    tag: "EDU" as const,
    period: e.period,
    title: e.degree,
    org: e.institution,
    body: e.detail ?? "",
  })),
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((p) => p.track === filter);

  return (
    <div className="relative overflow-x-hidden">
      {/* ---------- Hero (with nav inline) ---------- */}
      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 md:pt-12">
        <div className="mb-16 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[var(--ink-dim)]">
          <a href="#top" className="text-[var(--ink)]">
            AM — 01
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-[var(--ink)]">
                {n.label}
              </a>
            ))}
          </nav>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--red)]" />
            AVAILABLE
          </span>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-start">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--red)]">
                MODEL — PORTFOLIO / REV. 2026
              </p>
              <h1 className="mt-4 text-6xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-4 font-mono text-sm uppercase tracking-widest text-[var(--ink-dim)]">
                {profile.role}
              </p>
              <p className="mt-6 max-w-xl text-lg text-[var(--ink-dim)]">{profile.tagline}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 grid gap-x-10 gap-y-4 border-y border-[var(--line)] py-6 sm:grid-cols-2">
                <SpecRow label="LOCATION" value={profile.location} />
                <SpecRow label="FOCUS" value="ML + FULL-STACK" />
                <SpecRow label="TRACKS" value="RESEARCH / SYSTEMS" />
                <SpecRow label="STATUS" value="OPEN TO WORK" />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
                <a
                  href="#work"
                  className="border border-[var(--ink)] px-5 py-3 transition hover:bg-[var(--ink)] hover:text-[var(--bg)]"
                >
                  [ See work ]
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="border border-[var(--line-strong)] px-5 py-3 transition hover:border-[var(--red)] hover:text-[var(--red)]"
                >
                  [ Contact ]
                </a>
                <a
                  href={profile.resume}
                  className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-5 py-3 transition hover:border-[var(--red)] hover:text-[var(--red)]"
                >
                  <FileDown size={13} /> Resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative border border-[var(--line-strong)] p-2">
              <Corners />
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover grayscale contrast-125"
                  priority
                />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">
                <span>IMG_001</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 01 / Spec sheet (stats) ---------- */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead index="01" title="Spec sheet" />
          <div className="mt-10 divide-y divide-[var(--line)]">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4 py-4 font-mono">
                <span className="text-xs uppercase tracking-widest text-[var(--ink-dim)]">{s.label}</span>
                <span className="leader" />
                <span className="whitespace-nowrap text-2xl font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 02 / Profile (about) ---------- */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead index="02" title="Profile" description={about.heading} />
          <Reveal delay={0.05}>
            <div
              className="mt-10 grid gap-px overflow-hidden border border-[var(--line)] md:grid-cols-2"
              style={{ background: "var(--line)" }}
            >
              {about.threads.map((thread) => (
                <div key={thread.track} className="bg-[var(--bg)] p-8">
                  <TrackTag track={thread.track} />
                  <h3 className="mt-3 text-xl font-semibold">{thread.label}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-dim)]">{thread.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-2xl text-center font-mono text-sm italic text-[var(--ink-faint)]">
              {about.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- 03 / Log (experience + education) ---------- */}
      <section id="log" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead index="03" title="Log" description="Work history and education, most recent first." />
          <div className="mt-10 divide-y divide-[var(--line)] border-t border-[var(--line)]">
            {log.map((entry, i) => (
              <Reveal
                key={entry.id}
                delay={(i % 4) * 0.05}
                className="grid gap-4 py-8 md:grid-cols-[140px_1fr]"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                  <div>{entry.period}</div>
                  <div
                    className={`mt-2 inline-block border px-2 py-0.5 ${
                      entry.tag === "WORK"
                        ? "border-[var(--red)] text-[var(--red)]"
                        : "border-[var(--line-strong)] text-[var(--ink-dim)]"
                    }`}
                  >
                    {entry.tag}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{entry.title}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--ink-dim)]">
                    {entry.org}
                  </p>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">{entry.body}</p>
                  {entry.bullets && (
                    <ul className="mt-4 space-y-2">
                      {entry.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-[15px] leading-relaxed text-[var(--ink-dim)]">
                          <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--ink-faint)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {entry.tech && (
                    <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide text-[var(--ink-dim)]">
                      {entry.tech.map((t) => (
                        <span key={t} className="border border-[var(--line)] px-2 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 04 / Index (projects) ---------- */}
      <section id="work" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            index="04"
            title="Index"
            description="Applied ML research and the full-stack systems built alongside it."
          />

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest">
              {projectFilters.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`border px-4 py-2 transition ${
                      active
                        ? "border-[var(--red)] text-[var(--red)]"
                        : "border-[var(--line-strong)] text-[var(--ink-dim)] hover:border-[var(--ink)]"
                    }`}
                  >
                    [ {f.label} ]
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="mt-10 grid gap-px border border-[var(--line)] sm:grid-cols-2"
              style={{ background: "var(--line)" }}
            >
              {visibleProjects.map((p, i) => (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col bg-[var(--bg)] p-7 transition hover:bg-[var(--bg-raised)]"
                >
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[var(--ink-faint)]">
                    <span>INDEX / {String(i + 1).padStart(2, "0")}</span>
                    <TrackTag track={p.track} />
                  </div>

                  {p.image ? (
                    <div className="relative mt-5 h-40 w-full overflow-hidden border border-[var(--line)]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover grayscale contrast-125 transition duration-500 group-hover:grayscale-0"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative mt-5 h-40 w-full overflow-hidden border border-[var(--line)]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, var(--line) 0, var(--line) 1px, transparent 1px, transparent 10px)",
                      }}
                    >
                      <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                        SYSTEM // {p.category}
                      </div>
                    </div>
                  )}

                  <h3 className="mt-5 flex items-center gap-1.5 text-xl font-semibold">
                    {p.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:opacity-100 group-hover:text-[var(--red)]"
                    />
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--ink-faint)]">
                    {p.category} — {p.year}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-dim)]">{p.description}</p>

                  <div className="mt-5 space-y-1.5 border-t border-[var(--line)] pt-4 font-mono text-xs">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="flex items-baseline justify-between gap-4">
                        <span className="uppercase tracking-widest text-[var(--ink-faint)]">{m.label}</span>
                        <span className="leader" />
                        <span className="text-[var(--ink)]">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide text-[var(--ink-dim)]">
                    {p.tech.map((t) => (
                      <span key={t} className="border border-[var(--line)] px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 05 / Stack (skills) ---------- */}
      <section id="stack" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead index="05" title="Stack" description="Everything below has shipped in something real." />
          <Reveal delay={0.05}>
            <div
              className="mt-10 grid gap-px border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3"
              style={{ background: "var(--line)" }}
            >
              {skills.map((s) => (
                <div key={s.group} className="bg-[var(--bg)] p-6">
                  <TrackTag track={s.track} />
                  <h3 className="mt-3 text-base font-semibold">{s.group}</h3>
                  <ul className="mt-3 space-y-1.5 font-mono text-[13px] text-[var(--ink-dim)]">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="text-[var(--ink-faint)]">·</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 06 / Papers (publications + honors) ---------- */}
      <section id="papers" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead index="06" title="Papers" />
          <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {publications.map((pub, i) => (
              <Reveal key={pub.id} delay={i * 0.05} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold">{pub.title}</h3>
                  <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                    {pub.date}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--ink-dim)]">{pub.venue}</p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">{pub.detail}</p>
                {pub.award && (
                  <p className="mt-3 inline-flex items-center gap-1.5 border border-[var(--red)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-[var(--red)]">
                    <Award size={12} /> {pub.award}
                  </p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div
              className="mt-14 grid gap-px border border-[var(--line)] sm:grid-cols-3"
              style={{ background: "var(--line)" }}
            >
              {honors.map((h) => (
                <div key={h.id} className="bg-[var(--bg)] p-5">
                  <Award size={16} className="text-[var(--ink-dim)]" />
                  <p className="mt-3 text-sm font-semibold leading-snug">{h.label}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-[var(--ink-faint)]">
                    {h.org}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 07 / Connect (contact) ---------- */}
      <section id="connect" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead index="07" title="Connect" />
          <Reveal delay={0.05}>
            <h3 className="mt-8 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">{contact.heading}</h3>
            <p className="mt-4 max-w-lg text-[var(--ink-dim)]">{contact.body}</p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex items-center gap-3 border-b border-[var(--line-strong)] pb-2 text-2xl font-semibold transition hover:border-[var(--red)] hover:text-[var(--red)] md:text-3xl"
            >
              {profile.email}
              <ArrowUpRight size={22} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={profile.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                <FaKaggle size={14} /> Kaggle
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--red)] hover:text-[var(--red)]"
              >
                <Mail size={14} /> Email
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 font-mono text-[11px] uppercase tracking-widest text-[var(--ink-faint)]">
          <span>Designed in {profile.location.toUpperCase()}. Built with Next.js.</span>
          <span>AM — 2026</span>
        </div>
      </footer>
    </div>
  );
}
