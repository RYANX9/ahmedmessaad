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
  Menu,
  X,
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

function Sticker({
  children,
  color = "gold",
  rotate = "-4",
  className = "",
}: {
  children: React.ReactNode;
  color?: "gold" | "coral" | "mint";
  rotate?: string;
  className?: string;
}) {
  const map = {
    gold: { bg: "var(--gold)", ink: "var(--gold-ink)" },
    coral: { bg: "var(--coral)", ink: "var(--coral-ink)" },
    mint: { bg: "var(--mint)", ink: "var(--mint-ink)" },
  };
  const c = map[color];
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-2 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest shadow-[3px_3px_0_rgba(0,0,0,0.35)] ${className}`}
      style={{ background: c.bg, color: c.ink, borderColor: c.ink, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}

const TRACK_COLORS: Record<Track, { bg: string; ink: string; label: string }> = {
  research: { bg: "var(--mint)", ink: "var(--mint-ink)", label: "Research" },
  systems: { bg: "var(--coral)", ink: "var(--coral-ink)", label: "Systems" },
};

function TrackBadge({ track, className = "" }: { track: Track; className?: string }) {
  const t = TRACK_COLORS[track];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${className}`}
      style={{ background: t.bg, color: t.ink }}
    >
      {t.label}
    </span>
  );
}

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
      <div className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
        <span>{index}</span>
        <span>/ SECTION</span>
      </div>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      {description && <p className="mt-2 max-w-xl text-[var(--ink-dim)]">{description}</p>}
      <div className="mt-6 h-px w-full bg-[var(--line)]" />
    </Reveal>
  );
}

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#papers", label: "Papers" },
  { href: "#connect", label: "Connect" },
];

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
  const [navOpen, setNavOpen] = useState(false);
  const visibleProjects = filter === "all" ? projects : projects.filter((p) => p.track === filter);
  const featuredProject = visibleProjects.find((p) => p.featured);
  const restProjects = visibleProjects.filter((p) => !p.featured);

  return (
    <div className="relative overflow-x-hidden">
      {/* ================= HERO — this is "him" ================= */}
      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-16 pt-8 md:pt-12">
        <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-[var(--ink-dim)]">
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
          <div className="flex items-center gap-3">
            <Sticker color="mint" rotate="-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--mint-ink)" }} />
              Available
            </Sticker>
            <button
              type="button"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={navOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--line-strong)] transition hover:border-[var(--ink)] md:hidden"
            >
              {navOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <nav className="mb-12 flex flex-col overflow-hidden rounded-2xl border-2 border-[var(--line-strong)] bg-[var(--bg-raised)] font-mono text-xs font-bold uppercase tracking-widest md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setNavOpen(false)}
                className="border-b border-[var(--line)] px-5 py-3.5 last:border-b-0 hover:bg-[var(--bg)] hover:text-[var(--ink)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}

        {!navOpen && <div className="mb-12" />}

        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-center">
          <div>
            <Reveal>
              <Sticker color="gold" rotate="-3">
                Portfolio · Rev 2026
              </Sticker>
              <h1 className="mt-5 text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-4 font-mono text-sm uppercase tracking-widest text-[var(--ink-dim)]">
                {profile.role}
              </p>
              <p className="mt-6 max-w-xl text-lg text-[var(--ink-dim)]">{profile.tagline}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-widest">
                <a
                  href="#work"
                  className="rounded-full px-6 py-3 transition hover:-translate-y-0.5"
                  style={{ background: "var(--coral)", color: "var(--coral-ink)" }}
                >
                  See the work →
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border-2 border-[var(--line-strong)] px-6 py-3 transition hover:border-[var(--ink)]"
                >
                  Contact
                </a>
                <a
                  href={profile.resume}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--line-strong)] px-6 py-3 transition hover:border-[var(--ink)]"
                >
                  <FileDown size={13} /> Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--line)] pt-6">
                {stats.map((s) => (
                  <div key={s.label} className="font-mono text-xs">
                    <span className="text-base font-bold text-[var(--ink)]">{s.value}</span>{" "}
                    <span className="uppercase tracking-wide text-[var(--ink-faint)]">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <div
                className="absolute -inset-8 -z-10 rounded-full opacity-25 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--coral) 0%, transparent 70%)" }}
              />
              <div className="relative rounded-[28px] border-2 border-[var(--line-strong)] p-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover grayscale contrast-125"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-3">
                <Sticker color="gold" rotate="6">
                  Open to work
                </Sticker>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WORK — this is "the work" ================= */}
      <section id="work" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            index="01"
            title="Work"
            description="Applied ML research and the full-stack systems built alongside it."
          />

          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs font-bold uppercase tracking-widest">
              {projectFilters.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className="rounded-full border-2 px-4 py-2 transition"
                    style={
                      active
                        ? { borderColor: "var(--ink)", background: "var(--ink)", color: "var(--bg)" }
                        : { borderColor: "var(--line-strong)", color: "var(--ink-dim)" }
                    }
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {featuredProject && (
            <Reveal delay={0.1}>
              
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 block overflow-hidden rounded-[28px] border-2 p-8 transition hover:-translate-y-1"
                style={{ borderColor: "var(--coral)" }}
              >
                <div className="absolute -top-3 right-8 z-10">
                  <Sticker color="gold" rotate="-6">
                    ★ Featured
                  </Sticker>
                </div>
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                  <div
                    className="relative h-48 overflow-hidden rounded-2xl border border-[var(--line)] md:h-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, var(--line) 0, var(--line) 1px, transparent 1px, transparent 10px)",
                    }}
                  >
                    <div className="flex h-full items-center justify-center font-mono text-sm uppercase tracking-widest text-[var(--ink-faint)]">
                      System // {featuredProject.category}
                    </div>
                  </div>
                  <div>
                    <TrackBadge track={featuredProject.track} />
                    <h3 className="mt-3 flex items-center gap-2 text-3xl font-bold">
                      {featuredProject.name}
                      <ArrowUpRight
                        size={22}
                        className="opacity-0 transition group-hover:opacity-100"
                        style={{ color: "var(--coral)" }}
                      />
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--ink-faint)]">
                      {featuredProject.category} — {featuredProject.year}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-dim)]">
                      {featuredProject.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {featuredProject.metrics.map((m) => (
                        <span
                          key={m.label}
                          className="rounded-full border border-[var(--line-strong)] px-3 py-1 font-mono text-xs"
                        >
                          <span className="font-bold">{m.value}</span>{" "}
                          <span className="text-[var(--ink-faint)]">{m.label}</span>
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide text-[var(--ink-dim)]">
                      {featuredProject.tech.map((t) => (
                        <span key={t} className="rounded-full border border-[var(--line)] px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {restProjects.map((p) => (
                
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col rounded-2xl border-2 bg-[var(--bg-raised)] p-6 transition hover:-translate-y-1 ${
                    p.track === "research"
                      ? "border-[var(--line)] hover:border-[var(--mint)]"
                      : "border-[var(--line)] hover:border-[var(--coral)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <TrackBadge track={p.track} />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">
                      {p.year}
                    </span>
                  </div>

                  {p.image ? (
                    <div className="relative mt-4 h-36 w-full overflow-hidden rounded-xl border border-[var(--line)]">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover grayscale contrast-125 transition duration-500 group-hover:grayscale-0"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative mt-4 h-36 w-full overflow-hidden rounded-xl border border-[var(--line)]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, var(--line) 0, var(--line) 1px, transparent 1px, transparent 10px)",
                      }}
                    >
                      <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                        System // {p.category}
                      </div>
                    </div>
                  )}

                  <h3 className="mt-4 flex items-center gap-1.5 text-lg font-bold">
                    {p.name}
                    <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--ink-faint)]">
                    {p.category}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-dim)]">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="rounded-full border border-[var(--line-strong)] px-2.5 py-1 font-mono text-[11px]"
                      >
                        <span className="font-bold">{m.value}</span>{" "}
                        <span className="text-[var(--ink-faint)]">{m.label}</span>
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= Quiet from here down ================= */}

      {/* ---- About ---- */}
      <section id="about" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHead index="02" title="Two threads" description={about.heading} />
          <Reveal delay={0.05}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {about.threads.map((thread) => (
                <div key={thread.track}>
                  <div className="flex items-center gap-2">
                    <TrackBadge track={thread.track} />
                    <span className="text-sm font-bold">{thread.label}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-dim)]">{thread.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl font-mono text-xs italic text-[var(--ink-faint)]">{about.closing}</p>
          </Reveal>
        </div>
      </section>

      {/* ---- Log ---- */}
      <section id="log" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHead index="03" title="Log" description="Work history and education, most recent first." />
          <div className="mt-8 divide-y divide-[var(--line)] border-t border-[var(--line)]">
            {log.map((entry, i) => (
              <Reveal
                key={entry.id}
                delay={(i % 4) * 0.05}
                className="grid gap-3 py-6 md:grid-cols-[140px_1fr]"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                  <div>{entry.period}</div>
                  <div
                    className={`mt-2 inline-block border px-2 py-0.5 ${
                      entry.tag === "WORK"
                        ? "border-[var(--line-strong)] text-[var(--ink)]"
                        : "border-[var(--line)] text-[var(--ink-faint)]"
                    }`}
                  >
                    {entry.tag}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{entry.title}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--ink-dim)]">
                    {entry.org}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink-dim)]">{entry.body}</p>
                  {entry.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {entry.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-dim)]">
                          <span className="mt-1.5 h-1 w-1 shrink-0 bg-[var(--ink-faint)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {entry.tech && (
                    <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--ink-faint)]">
                      {entry.tech.map((t) => (
                        <span key={t} className="border border-[var(--line)] px-1.5 py-0.5">
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

      {/* ---- Stack ---- */}
      <section id="stack" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHead index="04" title="Stack" description="Everything below has shipped in something real." />
          <Reveal delay={0.05}>
            <div className="mt-8 space-y-4">
              {skills.map((s) => (
                <div key={s.group} className="flex flex-wrap items-center gap-2 border-b border-[var(--line)] pb-4">
                  <span className="mr-2 w-full shrink-0 font-mono text-[11px] uppercase tracking-widest text-[var(--ink-faint)] sm:w-40">
                    {s.group}
                  </span>
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border px-2.5 py-1 font-mono text-[11px] text-[var(--ink-dim)]"
                      style={{ borderColor: s.track === "research" ? "var(--mint)" : "var(--coral)" }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Papers ---- */}
      <section id="papers" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHead index="05" title="Papers" />
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {publications.map((pub, i) => (
              <Reveal key={pub.id} delay={i * 0.05} className="py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-base font-bold">{pub.title}</h3>
                  <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                    {pub.date}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--ink-dim)]">{pub.venue}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink-dim)]">{pub.detail}</p>
                {pub.award && (
                  <p
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest"
                    style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                  >
                    <Award size={12} /> {pub.award}
                  </p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {honors.map((h) => (
                <span
                  key={h.id}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] text-[var(--ink-dim)]"
                  style={{ borderColor: "var(--gold)" }}
                >
                  <Award size={11} style={{ color: "var(--gold)" }} />
                  {h.label}
                  <span className="text-[var(--ink-faint)]">— {h.org}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Connect ---- */}
      <section id="connect" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead index="06" title="Connect" />
          <Reveal delay={0.05}>
            <h3 className="mt-8 max-w-xl text-2xl font-bold leading-tight md:text-3xl">{contact.heading}</h3>
            <p className="mt-4 max-w-lg text-[var(--ink-dim)]">{contact.body}</p>

            
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 font-mono text-sm font-bold uppercase tracking-widest transition hover:-translate-y-0.5"
              style={{ background: "var(--coral)", color: "var(--coral-ink)" }}
            >
              <Mail size={16} /> {profile.email}
            </a>

            <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-widest">
              
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--ink)]"
              >
                <Github size={14} /> GitHub
              </a>
              
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--ink)]"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              
                href={profile.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--ink)]"
              >
                <FaKaggle size={14} /> Kaggle
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
