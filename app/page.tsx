"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { profile, stats, projects, skills, contact } from "./data";
import {
  Blob,
  VitalLine,
  ScribbleUnderline,
  DoodleStethoscope,
  DoodleScan,
  DoodleFlask,
} from "./components/illustrations";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
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

export default function Portfolio() {
  const nav = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold">
            Ahmed Messaad
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {nav.map((n) => (
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

      {/* ---------- Hero ---------- */}
      <section id="top" className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <Blob className="pointer-events-none absolute -right-24 -top-16 w-[420px] opacity-25 md:w-[520px]" color="var(--sage)" />
        <Blob className="pointer-events-none absolute -left-32 top-40 w-[300px] opacity-20" color="var(--lavender)" />

        <div className="relative grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <Reveal>
            <p className="mb-4 inline-block rounded-full border border-[var(--line)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--sage-deep)]">
              {profile.location}
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              {profile.tagline.split(" for ")[0]} for{" "}
              <span className="relative inline-block">
                clinical environments
                <ScribbleUnderline className="absolute -bottom-2 left-0 w-full text-[var(--coral)]" />
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[var(--ink)]/75">{profile.about[0]}</p>

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

      {/* ---------- Stats ---------- */}
      <section className="border-y border-[var(--line)] bg-[var(--card)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="text-3xl font-semibold text-[var(--sage-deep)] font-display md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-[var(--ink)]/65">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">About</h2>
            <div className="mt-3 flex gap-4 text-[var(--sage-deep)]">
              <DoodleStethoscope className="h-10 w-10" />
              <DoodleScan className="h-10 w-10" />
              <DoodleFlask className="h-10 w-10" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-lg leading-relaxed text-[var(--ink)]/80">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="work" className="border-t border-[var(--line)] bg-[var(--card)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">Selected work</h2>
            <p className="mt-2 text-[var(--ink)]/65">Applied ML systems built for diagnostic and clinical use.</p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.08}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--paper)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(35,41,31,0.25)]"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[var(--paper)] px-3 py-1 text-xs font-semibold text-[var(--ink)]">
                      {p.year}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--coral-deep)]">
                      {p.category}
                    </span>
                    <h3 className="mt-2 flex items-center gap-1.5 font-display text-xl font-semibold">
                      {p.name}
                      <ArrowUpRight
                        size={17}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
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
                        <span
                          key={t}
                          className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--ink)]/70"
                        >
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

      {/* ---------- Skills ---------- */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold">Toolkit</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.06}>
              <div className="rounded-[24px] border border-[var(--line)] bg-[var(--card)] p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--sage-deep)]">{s.group}</h3>
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

      {/* ---------- Contact ---------- */}
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
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[var(--ink)] py-6 text-center text-xs text-[var(--paper)]/40">
        Built by {profile.name}
      </footer>
    </div>
  );
}
