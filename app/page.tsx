"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Database,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Share2,
  Terminal,
} from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import { ThemeToggle } from "./components/theme-toggle";
import {
  ContourField,
  CutMark,
  DimensionGrid,
  GlassSheen,
  GrainOverlay,
  MeasureAnnotation,
  PinMarker,
  StitchCorners,
  StitchRing,
  StitchSeam,
  ThreadSpool,
  WeavePattern,
} from "./components/illustrations";
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
  type Project,
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

// A hand-placed, slightly rotated pill badge — the Gumroad/Ko-fi sticker beat.
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

// Track badge — colorful now (mint = research, coral = systems), used wherever
// content needs to say which lane it belongs to.
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

// Quiet, technical section opener — kept from the spec-sheet register on
// purpose, so the loud sections (hero, work) read louder by contrast.
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

// coverIcon exists on Project but was never actually rendered anywhere —
// every project without a photo fell back to the same generic gray hatch
// regardless of track. This maps the field to a real glyph, tinted per
// track, so "no photo" still says something specific about the project.
const COVER_ICONS = { terminal: Terminal, database: Database, api: Share2 } as const;

function CoverGlyph({ icon, track }: { icon?: Project["coverIcon"]; track: Track }) {
  if (!icon) return null;
  const Icon = COVER_ICONS[icon];
  const accent = track === "research" ? "var(--sage)" : "var(--clay)";
  return (
    <span
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2"
      style={{ borderColor: accent, color: accent }}
    >
      <Icon size={18} />
    </span>
  );
}

// Replaces the old track-blind diagonal hatch: research placeholders get
// the contour texture, systems placeholders get the dimension grid — the
// same vocabulary already used for the track badges, just applied to the
// one spot on the page that previously ignored it.
function ProjectPlaceholder({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {project.track === "research" ? (
        <ContourField opacity={0.35} />
      ) : (
        <DimensionGrid opacity={0.32} />
      )}
      <div className="relative flex flex-col items-center gap-2">
        <CoverGlyph icon={project.coverIcon} track={project.track} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">
          {project.category}
        </span>
      </div>
    </div>
  );
}

const MONTHS: Record<string, string> = {
  january: "01",
  february: "02",
  march: "03",
  april: "04",
  may: "05",
  june: "06",
  july: "07",
  august: "08",
  september: "09",
  october: "10",
  november: "11",
  december: "12",
};

// MeasureAnnotation is documented to pair with a real value, never a
// placeholder — this turns "December 2023" into the "MM.YYYY" register
// the rest of the spec-sheet chrome already uses.
function formatShortDate(date: string): string {
  const [month, year] = date.split(" ");
  const code = MONTHS[month?.toLowerCase() ?? ""];
  return code && year ? `${code}.${year}` : date;
}

const nav = [
  { href: "#work", label: "Work" },
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#papers", label: "Papers" },
  { href: "#connect", label: "Connect" },
];

// Experience + education merged into one reverse-chronological log.
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleProjects = filter === "all" ? projects : projects.filter((p) => p.track === filter);
  const featuredProject = visibleProjects.find((p) => p.featured);
  const restProjects = visibleProjects.filter((p) => !p.featured);

  return (
    <div className="relative overflow-x-hidden">
      {/* ================= HEADER — sticky, on its own, above the hero =============
          Pulled out of the hero section so it can stick independently of the
          hero's own padding. Opaque-ish frosted glass (.site-header) is the
          one place on the page blur exists purely for legibility, not theme —
          it needs to sit over whatever's scrolling underneath it. */}
      <header className="site-header sticky top-0 z-50" data-scrolled={scrolled}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 font-mono text-xs uppercase tracking-widest text-[var(--ink-dim)]">
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
            <ThemeToggle />
            <Sticker color="mint" rotate="-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--mint-ink)" }} />
              Available
            </Sticker>
          </div>
        </div>
      </header>

      {/* ================= HERO — this is "him" ================= */}
      <section id="top" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 pt-10 md:pt-14">
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
              {/* The one physical sample on the sheet: pinned top-left
                  (PinMarker), registration-marked bottom-right (CutMark),
                  and checked under a loupe (GlassSheen) — the sample under
                  inspection is the only other place glass appears besides
                  the header. Grain sits under the loupe, not over it, so
                  the "film" texture reads on the photo, not the lens. */}
              <div className="relative rounded-[28px] border-2 border-[var(--line-strong)] p-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover grayscale contrast-125"
                    priority
                  />
                  <GrainOverlay opacity={0.05} />
                </div>
                <PinMarker className="absolute -top-2 -left-2 z-20" color="var(--gold)" />
                <CutMark className="absolute -bottom-2 -right-2 z-20" color="var(--ink-faint)" size={20} />
                <GlassSheen className="-bottom-6 -right-6 z-20" size={100} />
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
      <section id="work" className="scroll-mt-24 border-t border-[var(--line)]">
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
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-10 block rounded-[28px] border-2 p-8 transition hover:-translate-y-1"
                style={{ borderColor: "var(--coral)" }}
              >
                <div className="absolute -top-3 right-8 z-20">
                  <Sticker color="gold" rotate="-6">
                    ★ Featured
                  </Sticker>
                </div>
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                  {featuredProject.image ? (
                    <div className="relative h-48 overflow-hidden rounded-2xl border border-[var(--line)] md:h-full">
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.name}
                        fill
                        className="object-cover grayscale contrast-125 transition duration-500 group-hover:grayscale-0"
                      />
                      <CutMark className="absolute left-3 top-3" color="var(--ink-faint)" />
                    </div>
                  ) : (
                    <div
                      className="relative h-48 overflow-hidden rounded-2xl border md:h-full"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <ProjectPlaceholder project={featuredProject} />
                      {/* Registration mark on the featured card only — a
                          rarity signal, same reasoning as the hero photo. */}
                      <CutMark className="absolute left-3 top-3" color="var(--coral)" />
                    </div>
                  )}
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

                    {/* Spec plate: the only project card whose numbers get
                        laminated under glass. It's the flagship item on the
                        sheet, so it's the one entry that gets the "under
                        glass" treatment — everything else stays flat. */}
                    <div className="spec-plate mt-5 p-4">
                      <div className="flex flex-wrap gap-2">
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
                </div>
              </a>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {restProjects.map((p) => (
                <a
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
                    <div className="relative mt-4 h-36 w-full overflow-hidden rounded-xl border border-[var(--line)]">
                      <ProjectPlaceholder project={p} />
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
      <section id="about" className="scroll-mt-24 border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHead index="02" title="Two threads" description={about.heading} />
          <Reveal delay={0.05}>
            <div className="relative mt-8 grid gap-6 md:grid-cols-2">
              {/* The one place StitchRing is allowed to be a "ring": the
                  literal seam between the two threads the whole site is
                  about. Not on the hero photo (a ring around a rectangular
                  frame reads wrong) — only where two things actually meet. */}
              <StitchRing
                className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-70 md:block"
                size={72}
              />
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

      {/* Weave band: the two thread textures interleaving into one fabric,
          used exactly once, exactly where About's "two threads" argument
          resolves into a single chronological Log below it. */}
      <div className="relative h-10 overflow-hidden border-y border-[var(--line)]" aria-hidden="true">
        <WeavePattern className="opacity-30" />
      </div>

      {/* ---- Log ---- */}
      <section id="log" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHead index="03" title="Log" description="Work history and education, most recent first." />
          <div className="relative mt-8 divide-y divide-[var(--line)] border-t border-[var(--line)]">
            {/* Every entry below is pinned to one continuous thread — the
                actual through-line of a career — so the gutter gets a
                running seam instead of staying blank. Sits at the join
                between the date column and the content column. */}
            <div className="pointer-events-none absolute left-[126px] top-0 hidden h-full w-8 opacity-35 md:block">
              <StitchSeam orientation="vertical" />
            </div>
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
      <section id="stack" className="scroll-mt-24 border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHead index="04" title="Stack" description="Everything below has shipped in something real." />
          <Reveal delay={0.05}>
            {/* The most literally "blueprint" section on the page — the
                only one framed with corner registration ticks, so the
                framing matches the content instead of every box getting
                the same treatment. */}
            <div className="relative mt-8 space-y-4 rounded-2xl border border-[var(--line)] p-6">
              <StitchCorners />
              {skills.map((s) => (
                <div key={s.group} className="flex flex-wrap items-center gap-2 border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0">
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
      <section id="papers" className="scroll-mt-24 border-t border-[var(--line)]">
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
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <p
                      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest"
                      style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                    >
                      <Award size={12} /> {pub.award}
                    </p>
                    {/* A real value, not filler — the paper's own date,
                        reformatted into the site's MM.YYYY spec register. */}
                    <MeasureAnnotation label={formatShortDate(pub.date)} color="var(--gold)" />
                  </div>
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
      <section id="connect" className="scroll-mt-24 border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead index="06" title="Connect" />
          <Reveal delay={0.05}>
            <h3 className="mt-8 max-w-xl text-2xl font-bold leading-tight md:text-3xl">{contact.heading}</h3>
            <p className="mt-4 max-w-lg text-[var(--ink-dim)]">{contact.body}</p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 font-mono text-sm font-bold uppercase tracking-widest transition hover:-translate-y-0.5"
              style={{ background: "var(--coral)", color: "var(--coral-ink)" }}
            >
              <Mail size={16} /> {profile.email}
            </a>

            <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-widest">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--ink)]"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--line-strong)] px-4 py-2.5 transition hover:border-[var(--ink)]"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
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

      <footer className="relative overflow-hidden border-t border-[var(--line)] py-8">
        {/* Leftover material in the corner — the one quiet-margin spot the
            ThreadSpool component is documented for. */}
        <ThreadSpool className="pointer-events-none absolute -bottom-2 right-6 opacity-50 md:right-10" color="var(--sage)" />
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 font-mono text-[11px] uppercase tracking-widest text-[var(--ink-faint)]">
          <span>Designed in {profile.location.toUpperCase()}. Built with Next.js.</span>
          <span>AM — 2026</span>
        </div>
      </footer>
    </div>
  );
}
