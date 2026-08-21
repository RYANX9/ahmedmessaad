"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowUpRight, Award } from "lucide-react";
import { FaKaggle } from "react-icons/fa";
import { Navbar } from "./components/navbar";
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
  projectFilters,
  type Track,
} from "./data";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const TRACK_TAG_CLASS: Record<Track, string> = {
  research: "tag-dark",
  systems: "tag-yellow",
};

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | Track>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.track === filter);
  const rows = chunk(visible, 3);

  const researchThread = about.threads.find((t) => t.track === "research");
  const systemsThread = about.threads.find((t) => t.track === "systems");
  const spotlight = projects.find((p) => p.id === "mydailyhealth") ?? projects[0];

  return (
    <div className="wrapper" id="top">
      <Navbar />

      {/* ============================================================ HERO */}
      <section className="card hero-card">
        <div className="hero-top">
          <div>
            <div className="hero-tagline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
              </svg>
              {profile.location} — {profile.role}
            </div>
            <h1 className="hero-title">{profile.tagline}</h1>
            <p className="hero-desc">
              Applied deep learning for clinical and diagnostic use cases, and the full-stack systems that put them
              in front of real people — without the AI layer ever blocking the happy path.
            </p>

            <div className="hero-stats-strip">
              {[stats[0], stats[1], stats[4]].map((s) => (
                <div className="hero-stat" key={s.label}>
                  <span className="hero-stat-val">{s.value}</span>
                  <span className="hero-stat-lab">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo-frame">
            <Image src={profile.avatar} alt={profile.name} fill sizes="340px" style={{ objectFit: "cover" }} priority />
            <span className="hero-photo-badge">
              <span className="status-dot" /> Available for work
            </span>
          </div>
        </div>

        <div className="hero-footer">
          <div className="status-pill">
            <span className="status-dot" /> Open to research &amp; full-stack roles
          </div>
          <div className="action-pill">
            Explore the work
            <a href="#work" className="btn-yellow">
              View projects →
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ TWO VOICES + STATS */}
      <div className="grid-3">
        {researchThread && (
          <div className="card voice-card research">
            <div>
              <span className="tag-label">{researchThread.label}</span>
              <h2>Models that a clinician could use.</h2>
              <p>{researchThread.body}</p>
            </div>
          </div>
        )}
        {systemsThread && (
          <div className="card voice-card systems">
            <div>
              <span className="tag-label">{systemsThread.label}</span>
              <h2>The software that ships it.</h2>
              <p>{systemsThread.body}</p>
            </div>
          </div>
        )}
        <div className="card stat-card">
          {stats.slice(0, 3).map((s) => (
            <div className="stat-row" key={s.label}>
              <span className="stat-val">{s.value}</span>
              <span className="stat-lab">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ WORK */}
      <div id="work" className="section-label-bar">
        Selected work — {projects.filter((p) => p.track === "systems").length} systems,{" "}
        {projects.filter((p) => p.track === "research").length} research
      </div>
      <div className="filter-row">
        {projectFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`filter-pill${filter === f.id ? " active" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {rows.map((row, i) => (
        <div className="grid-3" key={i}>
          {row.map((p) => (
            <a href={p.link} key={p.id} target="_blank" rel="noopener noreferrer" className="card project-card">
              <div>
                <div className="project-preview-box">
                  {p.image ? (
                    <Image src={p.image} alt={p.name} fill sizes="400px" style={{ objectFit: "cover" }} />
                  ) : (
                    <div className="bg-pattern" />
                  )}
                  <span
                    className={`project-pill-tag ${
                      p.category.toLowerCase().includes("bbc") ? "tag-orange" : TRACK_TAG_CLASS[p.track]
                    }`}
                  >
                    {p.category.toLowerCase().includes("bbc") ? "Featured — BBC News" : p.track === "research" ? "Research" : "Systems"}
                  </span>
                  <span className="preview-metric">{p.metrics[0]?.value}</span>
                </div>
                <div className="project-title">{p.name}</div>
                <div className="project-tagline">{p.tagline}</div>
                <div className="project-body">{p.description}</div>
              </div>
              <div>
                <div className="metrics-row">
                  {p.metrics.slice(0, 2).map((m) => (
                    <div className="metric-item" key={m.label}>
                      <span className="metric-val">{m.value}</span>
                      <span className="metric-lab">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="card-action-bar">
                  <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#666" }}>
                    <span className={`track-dot ${p.track}`} /> {p.year}
                  </span>
                  <span className="link-pill">
                    {p.linkText} <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      ))}

      {/* ============================================================ GLOW BANNER */}
      <section className="card glow-banner" id="research">
        <div className="glow-circle" />
        <div className="glow-banner-content">
          <h2>{spotlight.tagline}</h2>
          <p>{spotlight.description}</p>
          <div className="tech-pills">
            {spotlight.tech.map((t) => (
              <span className="tech-pill" key={t}>
                {t}
              </span>
            ))}
          </div>
          <a href={spotlight.link} className="btn-yellow" target="_blank" rel="noopener noreferrer">
            {spotlight.linkText} →
          </a>
        </div>
      </section>

      {/* ============================================================ INVENTORY */}
      <div className="section-label-bar">Inventory — tools &amp; stack</div>
      <div className="grid-3">
        {skills.map((group) => (
          <div className="card skill-card" key={group.group}>
            <div className="skill-card-head">
              <span className={`skill-dot ${group.track}`} />
              <span className="skill-card-title">{group.group}</span>
            </div>
            <div className="skill-chip-row">
              {group.items.map((item) => (
                <span key={item} className={`skill-chip ${group.track}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ============================================================ EXPERIENCE */}
      <div className="grid-7-5" id="experience">
        <div className="card exp-card">
          <h2>Experience</h2>
          {experience.map((e) => (
            <div className="exp-item" key={e.id}>
              <div className="exp-year">{e.period}</div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-org">{e.org}</div>
                <div className="exp-desc">{e.summary}</div>
                <div className="exp-tech">
                  {e.tech.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="card honor-card">
            <h3>Publications &amp; honors</h3>
            {honors.map((h) => (
              <div className="honor-item" key={h.id}>
                <strong>{h.label}</strong>
                <span>{h.org}</span>
              </div>
            ))}
          </div>
          <div className="card edu-card" style={{ background: "var(--bg-card-dark)" }}>
            {education.map((ed) => (
              <div key={ed.id} style={{ marginBottom: 14 }}>
                <h3>{ed.degree}</h3>
                <p>
                  {ed.institution}, {ed.period}. {ed.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ PAPERS */}
      <div className="section-label-bar">Papers — published record</div>
      <div className="card paper-card" id="papers">
        {publications.map((pub) => (
          <div className="paper-item" key={pub.id}>
            <div className="paper-seal">
              <Award size={16} color="var(--accent-orange)" style={{ marginBottom: 4 }} />
              <span>{pub.award ? "Award" : "Published"}</span>
              <span className="sub">{pub.date}</span>
            </div>
            <div>
              <div className="paper-title">{pub.title}</div>
              <div className="paper-venue">{pub.venue}</div>
              <p className="paper-detail">{pub.detail}</p>
              {pub.award && <span className="paper-award">{pub.award}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* ============================================================ FOOTER */}
      <section className="card footer-card" id="contact">
        <div />
        <div>
          <span className="tag-label" style={{ background: "rgba(204,255,0,0.15)", color: "var(--accent-yellow)" }}>
            Open to work
          </span>
          <h2 className="footer-title">{contact.heading}</h2>
          <p className="footer-subtitle">{contact.body}</p>
        </div>
        <div>
          <div className="footer-links">
            <a href={`mailto:${profile.email}`} className="social-btn">
              <Mail size={15} /> Email
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={15} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={profile.kaggle} target="_blank" rel="noopener noreferrer" className="social-btn">
              <FaKaggle size={15} /> Kaggle
            </a>
          </div>
          <div className="footer-bottom">
            {profile.name} — {profile.location} — © 2026
          </div>
        </div>
      </section>
    </div>
  );
}
