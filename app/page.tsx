"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowUpRight, Award, FileDown, Github, Linkedin, Mail, Menu, X } from "lucide-react";
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
  type Project,
  type Track,
} from "./data";
import { ProjectIconBadge } from "./components/project-icons";
import { PulseLine } from "./components/signature";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#papers", label: "Papers" },
];

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
  children: ReactNode;
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

const TRACK_COLOR: Record<Track, string> = {
  research: "var(--teal)",
  systems: "var(--orange)",
};

function TrackDot({ track }: { track: Track }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest"
      style={{ color: TRACK_COLOR[track] }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: TRACK_COLOR[track] }} />
      {track === "research" ? "Research" : "Systems"}
    </span>
  );
}

function SectionHead({ title, meta }: { title: string; meta?: string }) {
  return (
    <Reveal className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-[var(--ink)] pb-4">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      {meta && <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--gray)]">{meta}</span>}
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Work: bento grid + update list
// ---------------------------------------------------------------------------

type CardVariant = "orange" | "white" | "dark";

const CARD_STYLE: Record<CardVariant, CSSProperties> = {
  orange: { background: "var(--orange)", color: "#fff", borderColor: "var(--ink)" },
  white: { background: "var(--card)", color: "var(--ink)", borderColor: "var(--ink)" },
  dark: { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" },
};

function cardVariant(p: Project, index: number, total: number): CardVariant {
  if (p.featured) return "orange";
  if (index === total - 1) return "dark";
  return "white";
}

function BentoCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const variant = cardVariant(project, index, total);
  const inverted = variant !== "white";
  const style = CARD_STYLE[variant];

  const expanded = Boolean(project.featured || project.wide);

  return (
    <Reveal delay={index * 0.06} className={expanded ? "sm:col-span-2" : ""}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hard-shadow-hover group flex h-full flex-col justify-between rounded-[20px] border-2 p-5 sm:p-6 md:p-7"
        style={style}
      >
        <div className="flex items-start justify-between gap-4">
          <span
            className="font-mono text-[11px] font-semibold uppercase tracking-widest"
            style={{ color: inverted ? "rgba(255,255,255,0.7)" : "var(--gray)" }}
          >
            {project.category} — {project.year}
          </span>
          <ProjectIconBadge icon={project.icon} track={project.track} inverted={inverted} />
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold md:text-2xl">{project.name}</h3>
          <p className={`mt-2 text-sm leading-relaxed opacity-85 ${expanded ? "max-w-2xl" : ""}`}>
            {expanded ? project.description : project.tagline}
          </p>
        </div>

        {project.metrics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-5">
            {project.metrics.slice(0, expanded ? 3 : 2).map((m) => (
              <div key={m.label}>
                <div className="text-lg font-extrabold">{m.value}</div>
                <div
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: inverted ? "rgba(255,255,255,0.65)" : "var(--gray)" }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold">
          {project.linkText}
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </Reveal>
  );
}

function UpdateRow({ project, index }: { project: Project; index: number }) {
  const metric = project.metrics[0];
  return (
    <Reveal delay={index * 0.05}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hard-shadow-hover group grid grid-cols-[auto_1fr] items-center gap-3 rounded-[18px] border-2 border-[var(--ink)] bg-[var(--card)] p-4 transition-transform duration-300 sm:grid-cols-[auto_1fr_auto] sm:gap-5 sm:p-5 md:p-6"
      >
        <ProjectIconBadge icon={project.icon} track={project.track} size={46} />

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h4 className="text-base font-bold">{project.name}</h4>
            <TrackDot track={project.track} />
          </div>
          <p className="mt-1 text-sm text-[var(--gray)]">{project.tagline}</p>
        </div>

        <div className="col-span-2 flex items-center justify-end gap-5 sm:col-span-1">
          {metric && (
            <div className="hidden text-right sm:block">
              <div className="text-base font-extrabold">{metric.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--gray)]">{metric.label}</div>
            </div>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--ink)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)]">
            View
          </span>
        </div>
      </a>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

type LogEntry = {
  id: string;
  tag: "WORK" | "EDU";
  period: string;
  title: string;
  org: string;
  body: string;
};

const log: LogEntry[] = [
  ...experience.map((e) => ({
    id: e.id,
    tag: "WORK" as const,
    period: e.period,
    title: e.role,
    org: e.org,
    body: e.summary,
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

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const [menuOpen, setMenuOpen] = useState(false);

  const visible = filter === "all" ? projects : projects.filter((p) => p.track === filter);
  const sorted = [...visible].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  const bentoProjects = sorted.slice(0, 4);
  const restProjects = sorted.slice(4);

  return (
    <div className="relative overflow-x-hidden">

      {/* ================= NAV ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-transparent bg-[var(--paper)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:py-7">
          <a href="#top" className="flex items-center gap-2 text-base font-bold sm:text-lg">
            <span className="h-3 w-3 rounded-full" style={{ background: "var(--orange)" }} />
            {profile.name.toLowerCase()}
          </a>
          <div className="hidden gap-8 font-mono text-xs font-semibold uppercase tracking-widest md:flex">
            {navLinks.map((n) => (
              <a key={n.href} href={n.href} className="opacity-70 transition hover:opacity-100">
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#connect" className="hidden font-semibold sm:inline">Get in touch</a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border-2 border-[var(--ink)] px-4 py-2 text-xs font-bold transition hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Hire me
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t-2 border-[var(--line)] md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 font-mono text-sm font-semibold uppercase tracking-widest">
                {[...navLinks, { href: "#connect", label: "Connect" }].map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-2 py-3 transition hover:bg-[var(--line)]"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ================= HERO ================= */}
      <section id="top" className="mx-auto max-w-6xl px-6 pb-12 pt-8 sm:pb-16 sm:pt-10">
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            {profile.tagline}
          </h1>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal delay={0.08} className="max-w-xl">
            <p className="text-lg leading-relaxed text-[var(--gray)]">{about.closing}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full px-6 py-3 text-sm font-bold text-white transition hard-shadow-hover"
                style={{ background: "var(--ink)" }}
              >
                View the work
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--ink)] px-6 py-3 text-sm font-bold transition hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                Get in touch <ArrowUpRight size={14} />
              </a>
              <a
                href={profile.resume}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--ink)] px-6 py-3 text-sm font-bold transition hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                <FileDown size={14} /> Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="w-full max-w-sm md:w-72">
            <PulseLine className="w-full" />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t-2 border-[var(--line)] pt-6">
            {stats.map((s) => (
              <div key={s.label} className="font-mono text-xs">
                <span className="text-base font-extrabold">{s.value}</span>{" "}
                <span className="uppercase tracking-wide text-[var(--gray)]">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= WORK ================= */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <SectionHead title="Work" meta={`${projects.length} projects`} />

        <Reveal delay={0.05} className="mt-7 flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2 font-mono text-xs font-bold uppercase tracking-widest">
            {projectFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className="rounded-full border-2 border-[var(--ink)] px-4 py-2 transition"
                  style={active ? { background: "var(--ink)", color: "var(--paper)" } : { color: "var(--gray)" }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <span className="ml-1 flex items-center gap-4 font-mono text-[11px] text-[var(--gray)]">
            <TrackDot track="research" /> <TrackDot track="systems" />
          </span>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {bentoProjects.map((p, i) => (
            <BentoCard key={p.id} project={p} index={i} total={bentoProjects.length} />
          ))}
        </div>

        {restProjects.length > 0 && (
          <div className="mt-6 flex flex-col gap-4">
            {restProjects.map((p, i) => (
              <UpdateRow key={p.id} project={p} index={i} />
            ))}
          </div>
        )}
      </section>

      {/* ================= TWO THREADS ================= */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <SectionHead title="Two threads" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {about.threads.map((thread, i) => (
            <Reveal key={thread.track} delay={i * 0.06}>
              <div className="h-full rounded-[20px] border-2 border-[var(--ink)] bg-[var(--card)] p-5 sm:p-6 md:p-7">
                <TrackDot track={thread.track} />
                <p className="mt-3 text-sm leading-relaxed text-[var(--gray)]">{thread.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= LOG ================= */}
      <section id="log" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <SectionHead title="Log" meta="2018 — 2024" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {log.map((entry, i) => (
            <Reveal key={entry.id} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-[20px] border-2 border-[var(--ink)] bg-[var(--card)] p-5 sm:p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: "var(--orange)" }}>
                    {entry.period}
                  </span>
                  <span className="rounded-full border border-[var(--line-strong)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[var(--gray)]">
                    {entry.tag}
                  </span>
                </div>
                <h4 className="mt-3 text-lg font-bold">{entry.title}</h4>
                <p className="mt-1 text-sm font-semibold text-[var(--gray)]">{entry.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gray)]">{entry.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= STACK ================= */}
      <section id="stack" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <SectionHead title="Stack" meta="Shipped, not theoretical" />
        <div className="mt-8 flex flex-col gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.04}>
              <div className="flex flex-wrap items-center gap-3 border-b-2 border-[var(--line)] pb-4">
                <span className="w-full shrink-0 font-mono text-xs font-bold uppercase tracking-widest text-[var(--gray)] sm:w-48">
                  {s.group}
                </span>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border-2 px-3 py-1 font-mono text-xs font-semibold"
                      style={{ borderColor: TRACK_COLOR[s.track] }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= PAPERS ================= */}
      <section id="papers" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <SectionHead title="Papers" />
        <div className="mt-8 flex flex-col gap-4">
          {publications.map((pub, i) => (
            <Reveal key={pub.id} delay={i * 0.05}>
              <div className="rounded-[20px] border-2 border-[var(--ink)] bg-[var(--card)] p-5 sm:p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-base font-bold">{pub.title}</h3>
                  <span className="whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-widest text-[var(--gray)]">
                    {pub.date}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-[var(--gray)]">{pub.venue}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--gray)]">{pub.detail}</p>
                {pub.award && (
                  <p
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest"
                    style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
                  >
                    <Award size={12} /> {pub.award}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-5 flex flex-wrap gap-2">
          {honors.map((h) => (
            <span
              key={h.id}
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-[var(--ink)] bg-[var(--card)] px-3 py-1.5 font-mono text-[11px] font-semibold"
            >
              <Award size={11} style={{ color: "var(--orange)" }} />
              {h.label}
              <span className="text-[var(--gray)]">— {h.org}</span>
            </span>
          ))}
        </Reveal>
      </section>

      {/* ================= CONNECT ================= */}
      <section id="connect" className="mx-auto max-w-6xl px-6 pb-14 sm:pb-20">
        <Reveal>
          <div className="rounded-[28px] p-6 text-center sm:p-10 md:p-16" style={{ background: "var(--ink)", color: "var(--paper)" }}>
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-5xl">
              {contact.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base opacity-70">{contact.body}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white"
                style={{ background: "var(--orange)" }}
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-5 py-3 text-sm font-bold transition hover:border-white"
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-5 py-3 text-sm font-bold transition hover:border-white"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={profile.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-5 py-3 text-sm font-bold transition hover:border-white"
              >
                <FaKaggle size={15} /> Kaggle
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-[var(--gray)]">
        <span>{profile.location} — built with Next.js</span>
        <span>AM — 2026</span>
      </footer>
    </div>
  );
}
