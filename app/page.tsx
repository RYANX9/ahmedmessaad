"use client";

import {
  rail,
  topbar,
  hero,
  workIntro,
  contents,
  cases,
  sectionHeads,
  about,
  contact,
  type CaseStudy,
} from "./data";
import { useState } from "react";
import { MinimalPortfolio } from "./components/minimal-portfolio";
import { EditorialPortfolio } from "./components/editorial-portfolio";
import { DesignToggle, type DesignMode } from "./components/design-toggle";

// Each project gets a small technical "visual" widget in the card footer.
type VisualKind =
  | "flow"
  | "scan"
  | "model"
  | "rl"
  | "graph"
  | "architecture"
  | "experiment";

const VISUAL_KIND: Record<string, VisualKind> = {
  specmob: "flow",
  hemavision: "scan",
  airm: "model",
  "medical-drl": "rl",
  "healthcare-cost": "graph",
  "my-daily-health": "architecture",
  "crypto-rl": "experiment",
  "day-tracker": "flow",
  "git-cms": "flow",
};

function splitArrow(label: string): string[] {
  return label
    .split("→")
    .map((s) => s.trim())
    .filter(Boolean);
}

function ProjectVisual({ c }: { c: CaseStudy }) {
  const kind = VISUAL_KIND[c.artSymbol] ?? "flow";

  switch (kind) {
    case "flow": {
      const nodes = splitArrow(c.artLabel);
      return (
        <div className="flow">
          {nodes.flatMap((n, i) => [
            <div className="flow-node" key={`n${i}`}>{n}</div>,
            i < nodes.length - 1 ? <div className="flow-line" key={`l${i}`} /> : null,
          ])}
        </div>
      );
    }
    case "rl": {
      const nodes = splitArrow(c.artLabel);
      return (
        <div className="rl">
          {nodes.flatMap((n, i) => [
            <div className="rl-node" key={`n${i}`}>{n}</div>,
            i < nodes.length - 1 ? <div className="rl-arrow" key={`a${i}`} /> : null,
          ])}
        </div>
      );
    }
    case "scan":
      return (
        <div className="scan">
          {Array.from({ length: 80 }).map((_, i) => <span key={i} />)}
          <div className="scan-target" />
        </div>
      );
    case "model":
      return (
        <div className="model">
          {Array.from({ length: 8 }).map((_, i) => <div className="model-bar" key={i} />)}
        </div>
      );
    case "graph":
      return (
        <div className="graph">
          <svg viewBox="0 0 600 72" preserveAspectRatio="none">
            <polyline points="0,58 50,53 100,56 150,40 200,45 250,28 300,35 350,17 400,25 460,9 520,16 600,7" />
          </svg>
        </div>
      );
    case "architecture":
      return (
        <div className="architecture">
          {["Input", "Model", "Decision", "Interface"].map((label) => (
            <div className="arch-box" key={label}>{label}</div>
          ))}
        </div>
      );
    case "experiment":
      return (
        <div className="experiment">
          {Array.from({ length: 8 }).map((_, i) => <div className="exp" key={i} />)}
        </div>
      );
  }
}

function DossierPortfolio() {
  return (
    <>
      <header className="top">
        <a className="logo" href="#">
          {rail.mark}
          <span className="topbar-label">{topbar.label}</span>
        </a>
        <nav className="nav">
          {topbar.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-top">
          <div className="hero-index">
            {rail.firstName} {rail.lastName} / {rail.location} / {rail.year}
          </div>
          <div className="hero-note">
            {rail.roles.map((role, i) => (
              <span key={role}>
                {role}
                {i < rail.roles.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="hero-eyebrow">{hero.eyebrow}</span>
          <div className="hero-title">
            {hero.headline.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          <div className="hero-method">
            <span className="method-label">{hero.method.label}</span>
            <ol>
              {hero.method.steps.map((step, i) => (
                <li key={step} data-i={i + 1}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="hero-bottom">
          <span>{rail.hint}</span>
          <p>
            {hero.statement.map((seg, i) =>
              seg.bold ? (
                <strong key={i}>{seg.text}</strong>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </p>
        </div>
      </section>

      <section className="contents-toc">
        <div className="contents-head">
          <span>{contents.eyebrow}</span>
          <span>{contents.count}</span>
        </div>
        <div className="contents-list">
          {contents.groups.map((g) => (
            <div className="contents-row" key={g.num}>
              <span className="contents-num">{g.num}</span>
              <h3 className="contents-title">{g.title}</h3>
              <p className="contents-desc">{g.description}</p>
              <span className="contents-projects">{g.projects}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery" id="work">
        <div className="gallery-head">
          <div>
            <span className="gallery-eyebrow">{sectionHeads.work.label}</span>
            <h2>
              {workIntro.heading.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h2>
            <p className="gallery-lead">{workIntro.paragraph}</p>
          </div>
          <span>{workIntro.note}</span>
        </div>

        <div className="deck">
          {cases.map((c) => (
            <div className="stack-item" key={c.num}>
              <article className="card" data-index={c.num}>
                <div className="project-line">
                  <span className="project-number">{c.num}</span>
                  <span className="project-rule" />
                  <span className="project-type-group">
                    {c.feature && (
                      <span className="project-feature">{c.feature}</span>
                    )}
                    <span className="project-type">{c.category}</span>
                  </span>
                </div>

                <div className="card-content">
                  <h3 className="project-title">
                    {c.titleLines[0]} <em>{c.titleLines[1]}</em>
                  </h3>

                  <div className="project-info">
                    <p className="project-description">{c.description}</p>
                    {c.extra && <p className="project-extra">{c.extra}</p>}
                    <p className="project-insight">{c.insight}</p>

                    <ul className="field-notes">
                      {c.fieldNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>

                    
                      className="project-link"
                      href={c.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {c.link.label} ↗
                    </a>
                  </div>
                </div>

                <div className="card-bottom">
                  <span className="bottom-label">{c.artLabel}</span>
                  <div className="visual">
                    <ProjectVisual c={c} />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="after" id="about">
        <div>
          <div className="after-label">{sectionHeads.about.label}</div>
          <span className="after-note">{sectionHeads.about.note}</span>
        </div>
        <div>
          <h2>
            {about.heading.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h2>
          <p className="about-lead">
            {about.lead.before}
            <em>{about.lead.emphasis}</em>
            {about.lead.after}
          </p>
          <p className="about-copy">{about.body}</p>

          <div className="timeline">
            {about.timeline.map((row) => (
              <div className="timeline-row" key={row.detail}>
                <span className="timeline-period">{row.period}</span>
                <span className="timeline-detail">{row.detail}</span>
                <span className="timeline-tag">{row.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <div className="after-label" style={{ color: "var(--paper)" }}>
            Contact / {cases.length.toString().padStart(2, "0")}
          </div>
          <h2>
            {contact.heading.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h2>
          <p className="contact-paragraph">{contact.paragraph}</p>
        </div>

        <div>
          <div className="contact-links-row">
            <div className="contact-links">
              {contact.links.map((link) => (
                
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          <div className="contact-bottom">
            <span>
              {rail.firstName} {rail.lastName} / {rail.location} / {rail.year}
            </span>
            <div className="contact-footer-right">
              {contact.footerLeft} — {contact.footerRight}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const [designMode, setDesignMode] = useState<DesignMode>("dossier");

  return (
    <>
      {designMode === "dossier" && <DossierPortfolio />}
      {designMode === "minimal" && <MinimalPortfolio />}
      {designMode === "editorial" && <EditorialPortfolio />}

      <DesignToggle mode={designMode} onChange={setDesignMode} />
    </>
  );
}
