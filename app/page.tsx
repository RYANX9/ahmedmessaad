"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import { Stamp, Seal, BlueprintPanel, IndexMark, Redaction, Marquee } from "./components/illustrations";
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

const TRACK_META: Record<Track, { label: string; color: string; tone: "stain" | "graphite" }> = {
  research: { label: "Research", color: "var(--stain)", tone: "stain" },
  systems: { label: "Systems", color: "var(--graphite)", tone: "graphite" },
};

function TrackTag({ track }: { track: Track }) {
  const t = TRACK_META[track];
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
      style={{ color: t.color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: t.color }} />
      {t.label}
    </span>
  );
}

// Four-cornered bracket frame for the hero portrait — echoes BlueprintPanel's
// corner marks so the "specimen photograph" reads as part of the same file.
function CornerFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {[
        ["-left-2 -top-2", "border-l-2 border-t-2"],
        ["-right-2 -top-2", "border-r-2 border-t-2"],
        ["-left-2 -bottom-2", "border-l-2 border-b-2"],
        ["-right-2 -bottom-2", "border-r-2 border-b-2"],
      ].map(([pos, border]) => (
        <span
          key={pos}
          className={`pointer-events-none absolute z-10 h-5 w-5 ${pos} ${border}`}
          style={{ borderColor: "var(--stain)" }}
        />
      ))}
      {children}
    </div>
  );
}

const nav = [
  { href: "#exhibits", label: "Exhibits" },
  { href: "#record", label: "Record" },
  { href: "#inventory", label: "Inventory" },
  { href: "#papers", label: "Papers" },
  { href: "#contact", label: "Contact" },
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

const filters: { id: "all" | Track; label: string }[] = [
  { id: "all", label: "All files" },
  { id: "research", label: "Research" },
  { id: "systems", label: "Systems" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.track === filter);
  const lead = visible.find((p) => p.featured) ?? visible[0];
  const rest = visible.filter((p) => p.id !== lead?.id);

  return (
    <div className="relative overflow-x-hidden">
      {/* ============================================================ NAV */}
      <header className="sticky top-0 z-40 border-b" style={{ borderColor: "var(--line)", background: "var(--paper-translucent)", backdropFilter: "blur(6px)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em]">
          <a href="#top" className="font-bold text-[var(--ink)]">
            Case No. AM&ndash;2026
          </a>
          <nav className="hidden gap-7 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-[var(--ink-dim)] transition hover:text-[var(--stain)]">
                {n.label}
              </a>
            ))}
          </nav>
          <span className="hidden text-[var(--ink-faint)] sm:inline">Status: Open</span>
        </div>
      </header>

      {/* ============================================================ HERO */}
      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <Reveal>
              <Stamp tone="stain" rotate={-4}>
                Dossier &middot; Opened 2026
              </Stamp>
              <h1 className="font-display mt-6 text-[15vw] font-black uppercase leading-[0.82] tracking-tight text-[var(--ink)] md:text-[6.4rem]">
                Ahmed
                <br />
                <span style={{ WebkitTextStroke: "1.5px var(--ink)", color: "var(--paper)" }}>Messaad</span>
              </h1>
              <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--graphite)]">
                {profile.role}
              </p>
              <p className="font-serif mt-5 max-w-lg text-2xl italic leading-snug text-[var(--ink-dim)]">
                &ldquo;{profile.tagline}&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap items-center gap-4 font-mono text-xs font-bold uppercase tracking-[0.16em]">
                <a
                  href="#exhibits"
                  className="inline-flex items-center gap-2 px-6 py-3 transition hover:-translate-y-0.5"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  Open exhibits <ArrowUpRight size={13} />
                </a>
                <a
                  href={profile.resume}
                  className="inline-flex items-center gap-2 border px-6 py-3 transition hover:border-[var(--ink)]"
                  style={{ borderColor: "var(--line-strong)" }}
                >
                  <FileDown size={13} /> Case brief
                </a>
                <a href="#contact" className="text-[var(--ink-dim)] underline decoration-dotted underline-offset-4 hover:text-[var(--stain)]">
                  Contact
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-7 sm:grid-cols-3" style={{ borderColor: "var(--line)" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">{s.label}</dt>
                    <dd className="font-display mt-1 text-3xl font-bold text-[var(--ink)]">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mx-auto max-w-xs md:max-w-none">
              <CornerFrame>
                <div className="relative aspect-[4/5] w-full overflow-hidden border" style={{ borderColor: "var(--line-strong)" }}>
                  <Image src={profile.avatar} alt={profile.name} fill priority className="object-cover grayscale contrast-125" />
                  <div className="absolute bottom-3 left-3">
                    <Stamp tone="graphite" rotate={2} className="scale-90 origin-bottom-left">
                      Fig. 1 &mdash; Subject
                    </Stamp>
                  </div>
                </div>
              </CornerFrame>
              <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                {profile.location} &middot; Ref. 001
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ ABOUT */}
      <section
        id="record"
        className="relative border-t py-20"
        style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <IndexMark index="Exh. 00" label="Case summary" />
            <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-[0.95] md:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {about.threads.map((thread, i) => (
              <Reveal key={thread.track} delay={i * 0.08}>
                <div className="border-t pt-5" style={{ borderColor: "var(--line-strong)" }}>
                  <TrackTag track={thread.track} />
                  <h3 className="font-display mt-3 text-2xl font-bold">{thread.label}</h3>
                  <p className="font-serif mt-3 max-w-md text-[15px] leading-relaxed text-[var(--ink-dim)]">
                    {thread.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 max-w-2xl border-l-2 pl-6" style={{ borderColor: "var(--stain)" }}>
              <p className="font-serif text-lg italic leading-relaxed text-[var(--ink-dim)]">{about.closing}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
                &mdash; margin note, case file AM&ndash;2026
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ WORK */}
      <section id="exhibits" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <IndexMark index="Exh. 01&ndash;06" label="Work on file" />
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display max-w-xl text-4xl font-bold uppercase leading-[0.95] md:text-5xl">
              Exhibits
            </h2>
            <div className="flex gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
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
                <Stamp tone="stain" rotate={-3}>
                  Primary exhibit
                </Stamp>
              </div>

              {lead.image ? (
                <div className="relative h-56 w-full overflow-hidden border md:h-72" style={{ borderColor: "var(--line)" }}>
                  <Image src={lead.image} alt={lead.name} fill className="object-cover grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />
                </div>
              ) : (
                <BlueprintPanel label={`${lead.category} / ${lead.id}`} className="h-56 w-full md:h-72" />
              )}

              <div>
                <div className="flex items-center justify-between">
                  <TrackTag track={lead.track} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">{lead.year}</span>
                </div>
                <h3 className="font-display mt-3 flex items-center gap-2 text-3xl font-bold">
                  {lead.name}
                  <ArrowUpRight size={20} className="opacity-0 transition group-hover:opacity-100" style={{ color: "var(--stain)" }} />
                </h3>
                <p className="font-mono mt-1 text-xs uppercase tracking-wide text-[var(--ink-faint)]">{lead.category}</p>
                <p className="font-serif mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ink-dim)]">
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
                <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">
                  {String(i + 2).padStart(2, "0")}
                </span>

                {p.image ? (
                  <div className="relative h-36 w-full overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                    <Image src={p.image} alt={p.name} fill className="object-cover grayscale contrast-125 transition duration-500 group-hover:grayscale-0" />
                  </div>
                ) : (
                  <BlueprintPanel label={p.category} className="h-36 w-full" />
                )}

                <div className="mt-4 flex items-center justify-between">
                  <TrackTag track={p.track} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">{p.year}</span>
                </div>
                <h3 className="font-display mt-2 flex items-center gap-1.5 text-xl font-bold">
                  {p.name}
                  <ArrowUpRight size={15} className="opacity-0 transition group-hover:opacity-100" />
                </h3>
                <p className="font-mono mt-0.5 text-[11px] uppercase tracking-wide text-[var(--ink-faint)]">{p.category}</p>
                <p className="font-serif mt-3 text-sm leading-relaxed text-[var(--ink-dim)]">{p.description}</p>

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
      <section className="border-t py-20" style={{ borderColor: "var(--line)", background: "var(--paper-raised)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <IndexMark index="Exh. 07" label="Timeline of record" />
            <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[0.95] md:text-5xl">The Record</h2>
          </Reveal>

          <div className="relative mt-12 border-l" style={{ borderColor: "var(--line-strong)" }}>
            {log.map((entry, i) => (
              <Reveal key={entry.id} delay={(i % 4) * 0.05} className="relative grid gap-3 py-7 pl-8 md:grid-cols-[150px_1fr]">
                <span
                  className="absolute -left-[5px] top-9 h-2.5 w-2.5 rounded-full"
                  style={{ background: entry.tag === "WORK" ? "var(--stain)" : "var(--graphite)" }}
                />
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--ink-faint)]">
                  <div>{entry.period}</div>
                  <Stamp tone={entry.tag === "WORK" ? "stain" : "graphite"} rotate={-2} className="mt-2 scale-[0.82] origin-left">
                    {entry.tag}
                  </Stamp>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{entry.title}</h3>
                  <p className="font-mono mt-1 text-xs uppercase tracking-wide text-[var(--ink-dim)]">{entry.org}</p>
                  <p className="font-serif mt-2 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">{entry.body}</p>
                  {entry.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {entry.bullets.map((b) => (
                        <li key={b} className="font-serif flex gap-2.5 text-sm leading-relaxed text-[var(--ink-dim)]">
                          <span className="mt-2 h-1 w-1 shrink-0" style={{ background: "var(--stain)" }} />
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
      <section id="inventory" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <IndexMark index="Exh. 08" label="Inventory" />
          <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[0.95] md:text-5xl">Inventory</h2>
        </Reveal>

        <div className="mt-10 divide-y" style={{ borderColor: "var(--line)" }}>
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.04}>
              <div className="grid gap-3 border-t py-5 md:grid-cols-[220px_1fr] md:items-baseline" style={{ borderColor: "var(--line)" }}>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: TRACK_META[s.track].color }} />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink)]">
                    {s.group}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-2 font-serif text-[15px] text-[var(--ink-dim)]">
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
            <IndexMark index="Exh. 09" label="Published record" />
            <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[0.95] md:text-5xl">Papers</h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {publications.map((pub, i) => (
              <Reveal key={pub.id} delay={i * 0.06}>
                <div className="flex flex-col gap-5 border-t pt-6 sm:flex-row" style={{ borderColor: "var(--line-strong)" }}>
                  <Seal title={pub.award ? "Award" : "Published"} sub={pub.date} />
                  <div>
                    <h3 className="font-display text-xl font-bold">{pub.title}</h3>
                    <p className="font-mono mt-1 text-xs uppercase tracking-wide text-[var(--ink-dim)]">{pub.venue}</p>
                    <p className="font-serif mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink-dim)]">{pub.detail}</p>
                    {pub.award && (
                      <p className="font-mono mt-3 inline-block border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ borderColor: "var(--stain)", color: "var(--stain)" }}>
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
          <IndexMark index="Exh. 10" label="Closing statement" />
          <Redaction widths={[42, 28]} className="mt-5" />
          <h2 className="font-display mt-6 max-w-2xl text-4xl font-bold uppercase leading-[0.95] md:text-5xl">
            {contact.heading}
          </h2>
          <p className="font-serif mt-5 max-w-lg text-lg leading-relaxed text-[var(--ink-dim)]">{contact.body}</p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-9 inline-flex items-center gap-2 px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] transition hover:-translate-y-0.5"
            style={{ background: "var(--stain)", color: "var(--paper)" }}
          >
            <Mail size={16} /> {profile.email}
          </a>

          <div className="mt-7 flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-[0.14em]">
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
          <Stamp tone="graphite" rotate={-3} className="scale-90">
            Case closed &middot; AM&ndash;2026
          </Stamp>
        </div>
      </footer>
    </div>
  );
}
