"use client";

import Image from "next/image";
import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
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

const TRACK_COLOR: Record<Track, string> = {
  research: "#2563eb",
  systems: "#64748b",
};

function Tag({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-block rounded-sm px-2 py-0.5 text-[11px] font-medium tracking-wide"
      style={{
        background: color ? `${color}12` : "#f1f5f9",
        color: color ?? "#64748b",
        border: `1px solid ${color ? `${color}25` : "#e2e8f0"}`,
      }}
    >
      {children}
    </span>
  );
}

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-3xl px-6 ${className}`}
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {children}
    </section>
  );
}

function Divider() {
  return <div className="mx-auto max-w-3xl px-6"><div style={{ height: 1, background: "#f1f5f9" }} /></div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-8 text-sm font-medium"
      style={{ color: "#94a3b8", letterSpacing: "0.04em" }}
    >
      {children}
    </p>
  );
}

export function MinimalPortfolio() {
  return (
    <div style={{ background: "#ffffff", color: "#0f172a", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* NAV */}
      <nav
        className="sticky top-0 z-40 border-b"
        style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", borderColor: "#f1f5f9" }}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold" style={{ color: "#0f172a" }}>Ahmed Messaad</span>
          <div className="flex gap-6 text-sm" style={{ color: "#64748b" }}>
            {["Work", "Experience", "Skills", "Contact"].map((label) => (
              <a
                key={label}
                href={`#min-${label.toLowerCase()}`}
                className="transition hover:text-[#0f172a]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <Section id="min-top" className="!pt-20 !pb-16">
        <div className="flex items-start gap-8">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full" style={{ border: "2px solid #f1f5f9" }}>
            <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "#0f172a", lineHeight: 1.2 }}>
              Ahmed Messaad
            </h1>
            <p className="mt-1 text-base" style={{ color: "#64748b" }}>{profile.role}</p>
            <p className="mt-3 max-w-lg text-base leading-relaxed" style={{ color: "#475569" }}>
              {profile.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition hover:opacity-90"
                style={{ background: "#0f172a", color: "#fff" }}
              >
                <Mail size={13} /> Get in touch
              </a>
              <a
                href={profile.resume}
                className="inline-flex items-center gap-1.5 rounded-md border px-4 py-2 text-sm font-medium transition hover:border-[#0f172a]"
                style={{ borderColor: "#e2e8f0", color: "#475569" }}
              >
                <FileDown size={13} /> Resume
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm transition hover:border-[#0f172a]"
                style={{ borderColor: "#e2e8f0", color: "#64748b" }}
              >
                <Github size={13} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm transition hover:border-[#0f172a]"
                style={{ borderColor: "#e2e8f0", color: "#64748b" }}
              >
                <Linkedin size={13} />
              </a>
              <a href={profile.kaggle} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm transition hover:border-[#0f172a]"
                style={{ borderColor: "#e2e8f0", color: "#64748b" }}
              >
                <FaKaggle size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-12 grid grid-cols-2 gap-6 rounded-xl p-6 sm:grid-cols-3"
          style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-semibold" style={{ color: "#0f172a" }}>{s.value}</div>
              <div className="mt-0.5 text-xs leading-snug" style={{ color: "#94a3b8" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ABOUT */}
      <Section>
        <SectionLabel>About</SectionLabel>
        <h2 className="mb-6 text-xl font-semibold" style={{ color: "#0f172a" }}>{about.heading}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {about.threads.map((thread) => (
            <div key={thread.track}>
              <div className="mb-2">
                <Tag color={TRACK_COLOR[thread.track]}>{thread.label}</Tag>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{thread.body}</p>
            </div>
          ))}
        </div>
        <p
          className="mt-8 border-l-2 pl-4 text-sm leading-relaxed italic"
          style={{ borderColor: "#e2e8f0", color: "#64748b" }}
        >
          {about.closing}
        </p>
      </Section>

      <Divider />

      {/* WORK */}
      <Section id="min-work">
        <SectionLabel>Projects</SectionLabel>
        <div className="space-y-3">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-lg p-4 transition hover:bg-[#f8fafc]"
              style={{ border: "1px solid #f1f5f9" }}
            >
              {p.image && (
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md" style={{ border: "1px solid #f1f5f9" }}>
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>
              )}
              {!p.image && (
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md text-xs font-mono"
                  style={{ background: "#f1f5f9", color: "#94a3b8", border: "1px solid #e2e8f0" }}
                >
                  {p.year}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold" style={{ color: "#0f172a" }}>{p.name}</h3>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 opacity-0 transition group-hover:opacity-100"
                    style={{ color: "#94a3b8" }}
                  />
                </div>
                <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>{p.category} · {p.year}</p>
                <p className="mt-1.5 text-xs leading-relaxed line-clamp-2" style={{ color: "#64748b" }}>{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Tag color={TRACK_COLOR[p.track]}>{p.track}</Tag>
                  {p.metrics.slice(0, 2).map((m) => (
                    <Tag key={m.label}>{m.value} {m.label}</Tag>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Divider />

      {/* EXPERIENCE */}
      <Section id="min-experience">
        <SectionLabel>Experience</SectionLabel>
        <div className="space-y-10">
          {experience.map((e) => (
            <div key={e.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "#0f172a" }}>{e.role}</h3>
                  <p className="mt-0.5 text-xs" style={{ color: "#64748b" }}>{e.org}</p>
                </div>
                <span className="shrink-0 text-xs" style={{ color: "#94a3b8" }}>{e.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#475569" }}>{e.summary}</p>
              <ul className="mt-3 space-y-1.5">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "#cbd5e1" }} />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {e.tech.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12">
          <SectionLabel>Education</SectionLabel>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.id} className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "#0f172a" }}>{e.degree}</h3>
                  <p className="mt-0.5 text-xs" style={{ color: "#64748b" }}>{e.institution}</p>
                  {e.detail && (
                    <p className="mt-2 text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{e.detail}</p>
                  )}
                </div>
                <span className="shrink-0 text-xs" style={{ color: "#94a3b8" }}>{e.period}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Divider />

      {/* SKILLS */}
      <Section id="min-skills">
        <SectionLabel>Skills</SectionLabel>
        <div className="space-y-5">
          {skills.map((s) => (
            <div key={s.group} className="flex gap-4">
              <div
                className="w-36 shrink-0 pt-0.5 text-xs font-medium"
                style={{ color: TRACK_COLOR[s.track] }}
              >
                {s.group}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((it) => <Tag key={it}>{it}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* PAPERS */}
      <Section id="min-papers">
        <SectionLabel>Papers & Honors</SectionLabel>
        {publications.map((pub) => (
          <div key={pub.id} className="mb-8">
            <h3 className="text-sm font-semibold" style={{ color: "#0f172a" }}>{pub.title}</h3>
            <p className="mt-1 text-xs" style={{ color: "#64748b" }}>{pub.venue}</p>
            <p className="mt-2 text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{pub.detail}</p>
            {pub.award && (
              <div className="mt-2">
                <Tag color="#2563eb">{pub.award}</Tag>
              </div>
            )}
          </div>
        ))}
        <div className="space-y-2 border-t pt-6" style={{ borderColor: "#f1f5f9" }}>
          {honors.map((h) => (
            <div key={h.id} className="flex items-baseline gap-3">
              <span className="text-xs" style={{ color: "#94a3b8" }}>—</span>
              <span className="text-sm" style={{ color: "#475569" }}>
                {h.label} <span style={{ color: "#94a3b8" }}>· {h.org}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* CONTACT */}
      <Section id="min-contact">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="mb-3 text-xl font-semibold leading-snug" style={{ color: "#0f172a", maxWidth: "28rem" }}>
          {contact.heading}
        </h2>
        <p className="mb-6 text-sm leading-relaxed" style={{ color: "#64748b", maxWidth: "34rem" }}>
          {contact.body}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition hover:opacity-90"
          style={{ background: "#0f172a", color: "#fff" }}
        >
          <Mail size={13} /> {profile.email}
        </a>
      </Section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: "#f1f5f9" }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
          <span className="text-xs" style={{ color: "#cbd5e1" }}>
            {profile.location} · Built with Next.js
          </span>
          <span className="text-xs" style={{ color: "#cbd5e1" }}>Ahmed Messaad · 2026</span>
        </div>
      </footer>
    </div>
  );
}
