"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import { PulseLine, LiveTag, VitalTag, SectionMark, ReadoutBadge, SchematicPanel, Marquee } from "./components/illustrations";
import { ThemeToggle } from "./components/theme-toggle";
import {
  profile,
  about,
  stats,
  experience,
  education,
  projects,
  skills,
  publications,
  honors,
  contact,
  type Track,
} from "./data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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

const TRACK_META: Record<Track, { label: string; tone: "signal" | "circuit" }> = {
  research: { label: "Signal / Research", tone: "signal" },
  systems: { label: "Circuit / Systems", tone: "circuit" },
};

const nav = [
  { href: "#about", label: "Signal" },
  { href: "#work", label: "Work" },
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#papers", label: "Papers" },
  { href: "#contact", label: "Contact" },
];

type LogEntry = {
  id: string;
  tag: "BUILT" | "STUDIED";
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
    tag: "BUILT" as const,
    period: e.period,
    title: e.role,
    org: e.org,
    body: e.summary,
    bullets: e.bullets,
    tech: e.tech,
  })),
  ...education.map((e) => ({
    id: e.id,
    tag: "STUDIED" as const,
    period: e.period,
    title: e.degree,
    org: e.institution,
    body: e.detail ?? "",
  })),
];

const filters: { id: "all" | Track; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "research", label: "Signal" },
  { id: "systems", label: "Circuit" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.track === filter);
  const lead = visible.find((p) => p.featured) ?? visible[0];
  const rest = visible.filter((p) => p.id !== lead?.id);

  return (
    <div className="relative overflow-x-hidden">
      {/* ============================================================ NAV */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ borderColor: "var(--line)", background: "var(--paper-translucent)", backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">
            A. Messaad
          </a>
          <nav className="hidden gap-7 font-mono text-[11px] uppercase tracking-[0.18em] md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[var(--ink-dim)] transition hover:text-[var(--signal)]">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              <LiveTag label="Open to work" />
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ============================================================ HERO */}
      <section id="top" className="instrument-grid relative mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
        <div className="grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <Reveal>
              <LiveTag label={`Transmitting from ${profile.location}`} />
              <h1
                className="mt-6 leading-[0.86] text-[var(--ink)]"
                style={{ fontSize: "clamp(3.4rem, 11vw, 7.2rem)" }}
              >
                <span className="font-display block font-normal">Ahmed</span>
                <span className="font-display block font-normal italic" style={{ color: "var(--signal)" }}>
                  Messaad
                </span>
              </h1>
              <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[var(--ink-dim)]">
                {profile.role}
              </p>
              <p className="font-display mt-5 max-w-lg text-[1.7rem] italic leading-snug text-[var(--ink-dim)]">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <PulseLine variant="merge" className="mt-8 h-10 w-full max-w-lg" />
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-xs font-semibold uppercase tracking-[0.16em]">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 transition hover:-translate-y-0.5"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  View the work <ArrowUpRight size={13} />
                </a>
                <a
                  href={profile.resume}
                  className="inline-flex items-center gap-2 border px-6 py-3 transition hover:border-[var(--ink)]"
                  style={{ borderColor: "var(--line-strong)" }}
                >
                  <FileDown size={13} /> Download brief
                </a>
                <a href="#contact" className="text-[var(--ink-dim)] underline decoration-dotted underline-offset-4 hover:text-[var(--signal)]">
                  Contact
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-7 sm:grid-cols-3" style={{ borderColor: "var(--line)" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">{s.label}</dt>
                    <dd className="font-mono mt-1 text-2xl font-bold text-[var(--ink)]">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mx-auto max-w-xs md:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden border" style={{ borderColor: "var(--line-strong)" }}>
                <Image src={profile.avatar} alt={profile.name} fill priority className="object-cover grayscale contrast-125" />
                <div className="pointer-events-none absolute inset-0" style={{ background: "var(--signal)", opacity: 0.06, mixBlendMode: "color" }} />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2.5" style={{ background: "var(--paper-translucent)", backdropFilter: "blur(4px)" }}>
                  <LiveTag label={profile.location} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">Ref. 001</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ ABOUT */}
      <section id="about" className="relative border-t py-20" style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionMark label="Signal & system" />
            <h2 className="font-display mt-4 max-w-2xl text-4xl font-normal leading-[0.95] md:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {about.threads.map((thread, i) => (
              <Reveal key={thread.track} delay={i * 0.08}>
                <div className="border-t pt-5" style={{ borderColor: "var(--line-strong)" }}>
                  <VitalTag label={TRACK_META[thread.track].label} tone={TRACK_META[thread.track].tone} />
                  <h3 className="font-display mt-3 text-2xl font-normal">{thread.label}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--ink-dim)]">
                    {thread.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <PulseLine variant="merge" className="mt-14 h-10 w-full max-w-2xl" color="circuit" />
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-6 max-w-2xl border-l-2 pl-6" style={{ borderColor: "var(--signal)" }}>
              <p className="font-display text-xl italic leading-relaxed text-[var(--ink-dim)]">{about.closing}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ WORK */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionMark label="Selected work" />
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display max-w-xl text-4xl font-normal leading-[0.95] md:text-5xl">
              Work
            </h2>
            <div className="flex gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
              {filters.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className="border px-4 py-2 transition"
                    style={
                      active
                        ? { borderColor: "var(--ink)", background: "var(--ink)", color: "var(--paper)" }
                        : { borderColor: "var(--line-strong)", color: "var(--ink-dim)" }
                    }
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {lead && (
          <Reveal delay={0.08}>
            <a
              href={lead.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-10 grid gap-8 border p-7 transition hover:-translate-y-1 md:grid-cols-[1fr_1.1fr] md:items-center md:p-10"
              style={{ borderColor: "var(--line-strong)" }}
            >
              <div className="absolute -top-3 left-7">
                <VitalTag label="Lead project" tone={TRACK_META[lead.track].tone} className="border px-3 py-1.5" style={undefined} />
              </div>

              {lead.image ? (
                <div className="relative h-56 w-full overflow-hidden border md:h-72" style={{ borderColor: "var(--line)" }}>
                  <Image src={lead.image} alt={lead.name} fill className="object-cover grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />
                </div>
              ) : (
                <SchematicPanel label={`${lead.category}`} icon={lead.coverIcon ?? "terminal"} className="h-56 w-full md:h-72" />
              )}

              <div>
                <div className="flex items-center justify-between">
                  <VitalTag label={TRACK_META[lead.track].label} tone={TRACK_META[lead.track].tone} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">{lead.year}</span>
                </div>
                <h3 className="font-display mt-3 flex items-center gap-2 text-3xl font-normal">
                  {lead.name}
                  <ArrowUpRight size={20} className="opacity-0 transition group-hover:opacity-100" style={{ color: "var(--signal)" }} />
                </h3>
                <p className="font-mono mt-1 text-xs uppercase tracking-wide text-[var(--ink-faint)]">{lead.category}</p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ink-dim)]">
                  {lead.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t pt-4" style={{ borderColor: "var(--line)" }}>
                  {lead.metrics.map((m) => (
                    <div key={m.label} className="font-mono text-xs">
                      <span className="font-bold text-[var(--ink)]">{m.value}</span>{" "}
                      <span className="text-[var(--ink-faint)]">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={0.04 * i} className="group">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-full flex-col border p-6 transition hover:-translate-y-1"
                style={{ borderColor: "var(--line)" }}
              >
                {p.image ? (
                  <div className="relative h-36 w-full overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                    <Image src={p.image} alt={p.name} fill className="object-cover grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />
                  </div>
                ) : (
                  <SchematicPanel label={p.category} icon={p.coverIcon ?? "terminal"} className="h-36 w-full" />
                )}

                <div className="mt-4 flex items-center justify-between">
                  <VitalTag label={TRACK_META[p.track].label} tone={TRACK_META[p.track].tone} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">{p.year}</span>
                </div>
                <h3 className="font-display mt-2 flex items-center gap-1.5 text-2xl font-normal">
                  {p.name}
                  <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100" />
                </h3>
                <p className="font-mono mt-0.5 text-[11px] uppercase tracking-wide text-[var(--ink-faint)]">{p.category}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-dim)]">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t pt-3" style={{ borderColor: "var(--line)" }}>
                  {p.metrics.map((m) => (
                    <div key={m.label} className="font-mono text-[11px]">
                      <span className="font-bold text-[var(--ink)]">{m.value}</span>{" "}
                      <span className="text-[var(--ink-faint)]">{m.label}</span>
                    </div>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ LOG */}
      <section id="log" className="border-t py-20" style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionMark label="Timeline of record" />
            <h2 className="font-display mt-4 text-4xl font-normal leading-[0.95] md:text-5xl">The Log</h2>
          </Reveal>

          <div className="relative mt-12 border-l" style={{ borderColor: "var(--line-strong)" }}>
            {log.map((entry, i) => (
              <Reveal key={entry.id} delay={(i % 4) * 0.05} className="relative grid gap-3 py-7 pl-8 md:grid-cols-[150px_1fr]">
                <span
                  className="live-dot absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full"
                  style={{ background: entry.tag === "BUILT" ? "var(--signal)" : "var(--circuit)" }}
                />
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                  <div>{entry.period}</div>
                  <VitalTag
                    label={entry.tag}
                    tone={entry.tag === "BUILT" ? "signal" : "circuit"}
                    className="mt-2"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-normal">{entry.title}</h3>
                  <p className="font-mono mt-1 text-xs uppercase tracking-wide text-[var(--ink-dim)]">{entry.org}</p>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">{entry.body}</p>
                  {entry.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {entry.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-dim)]">
                          <span className="mt-2 h-1 w-1 shrink-0" style={{ background: "var(--signal)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {entry.tech && (
                    <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-wide text-[var(--ink-faint)]">
                      {entry.tech.map((t) => (
                        <span key={t} className="border px-1.5 py-0.5" style={{ borderColor: "var(--line)" }}>
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

      {/* ============================================================ STACK */}
      <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionMark label="Instrument panel" />
          <h2 className="font-display mt-4 text-4xl font-normal leading-[0.95] md:text-5xl">Stack</h2>
        </Reveal>

        <div className="mt-10 divide-y" style={{ borderColor: "var(--line)" }}>
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.04}>
              <div className="grid gap-3 border-t py-5 md:grid-cols-[220px_1fr] md:items-baseline" style={{ borderColor: "var(--line)" }}>
                <VitalTag label={s.group} tone={TRACK_META[s.track].tone} />
                <div className="flex flex-wrap gap-x-2 gap-y-2 text-[15px] text-[var(--ink-dim)]">
                  {s.items.map((it, idx) => (
                    <span key={it}>
                      {it}
                      {idx < s.items.length - 1 && <span className="text-[var(--ink-faint)]">,</span>}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================================================ PAPERS */}
      <section id="papers" className="border-t py-20" style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionMark label="Published record" />
            <h2 className="font-display mt-4 text-4xl font-normal leading-[0.95] md:text-5xl">Papers</h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {publications.map((pub, i) => (
              <Reveal key={pub.id} delay={i * 0.06}>
                <div className="flex flex-col gap-5 border-t pt-6 sm:flex-row" style={{ borderColor: "var(--line-strong)" }}>
                  <ReadoutBadge title={pub.award ? "Award" : "Published"} sub={pub.date} />
                  <div>
                    <h3 className="font-display text-2xl font-normal">{pub.title}</h3>
                    <p className="font-mono mt-1 text-xs uppercase tracking-wide text-[var(--ink-dim)]">{pub.venue}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink-dim)]">{pub.detail}</p>
                    {pub.award && (
                      <p className="font-mono mt-3 inline-block border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ borderColor: "var(--signal)", color: "var(--signal)" }}>
                        {pub.award}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <Marquee items={honors.map((h) => `${h.label} — ${h.org}`)} />
        </Reveal>
      </section>

      {/* ============================================================ CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionMark label="Open channel" />
          <PulseLine variant="steady" className="mt-6 h-10 w-full max-w-md" />
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-normal leading-[0.95] md:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--ink-dim)]">{contact.body}</p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-9 inline-flex items-center gap-2 px-7 py-4 font-mono text-sm font-semibold uppercase tracking-[0.16em] transition hover:-translate-y-0.5"
            style={{ background: "var(--signal)", color: "var(--paper)" }}
          >
            <Mail size={16} /> {profile.email}
          </a>

          <div className="mt-7 flex flex-wrap gap-3 font-mono text-xs font-semibold uppercase tracking-[0.14em]">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border px-4 py-2.5 transition hover:border-[var(--ink)]" style={{ borderColor: "var(--line-strong)" }}>
              <Github size={14} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border px-4 py-2.5 transition hover:border-[var(--ink)]" style={{ borderColor: "var(--line-strong)" }}>
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href={profile.kaggle} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border px-4 py-2.5 transition hover:border-[var(--ink)]" style={{ borderColor: "var(--line-strong)" }}>
              <FaKaggle size={14} /> Kaggle
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t py-8" style={{ borderColor: "var(--line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--ink-faint)]">
          <span>Filed in {profile.location} &middot; Built with Next.js</span>
          <LiveTag label="End of transmission" tone="circuit" />
        </div>
      </footer>
    </div>
  );
}
