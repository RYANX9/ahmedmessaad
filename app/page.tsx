"use client";

import { useEffect, useRef } from "react";
import {
  rail,
  topbar,
  hero,
  sectionHeads,
  workIntro,
  cases,
  about,
  contact,
} from "./data";

export default function Home() {
  const deckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  // Cards subtly separate while scrolling: they feel like physical
  // photographs being dealt out rather than ordinary page sections.
  useEffect(() => {
    let ticking = false;

    function arrange() {
      ticking = false;
      if (window.innerWidth <= 760) return;
      const deck = deckRef.current;
      if (!deck) return;
      const rect = deck.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.95))
      );
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const spread = Math.max(0, progress - 0.08) * 28;
        const direction = i % 2 ? 1 : -1;
        card.style.translate = `${direction * spread}px ${i * spread * 0.15}px`;
      });
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(arrange);
        ticking = true;
      }
    }

    arrange();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", arrange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", arrange);
    };
  }, []);

  return (
    <>
      <header className="top">
        <a className="logo" href="#">
          {rail.mark}
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
          <div className="hero-title">
            {hero.headline.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          <div className="hero-method">
            <span className="method-label">{hero.method.label}</span>
            <ol>
              {hero.method.steps.map((step, i) => (
                <li key={step} data-i={i + 1}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="hero-bottom">
          <span>{rail.hint}</span>
          <p>
            {hero.statement.map((seg, i) =>
              seg.bold ? <strong key={i}>{seg.text}</strong> : <span key={i}>{seg.text}</span>
            )}
          </p>
        </div>
      </section>

      <section className="gallery" id="work">
        <div className="gallery-head">
          <div className="gallery-eyebrow">{sectionHeads.work.label}</div>
          <h2>
            {workIntro.heading.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h2>
          <p>{workIntro.paragraph}</p>
          <span className="gallery-note">{workIntro.note}</span>
        </div>

        <div className="deck" ref={deckRef}>
          {cases.map((c, i) => (
            <article
              className="card"
              key={c.num}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <div className="card-top">
                <span className="card-number">{c.num}</span>
                <span className="card-kind">{c.category}</span>
              </div>

              <div className="card-main">
                <div>
                  <h3>
                    {c.titleLines[0]} <em>{c.titleLines[1]}</em>
                  </h3>
                </div>
                <div className="card-info">
                  <p>{c.summary}</p>
                  {c.extra && <p className="card-extra">{c.extra}</p>}
                  {c.facts.map((f) => (
                    <p className="card-meta" key={f.label}>
                      {f.label}: {f.value}
                    </p>
                  ))}
                  <a className="card-link" href={c.link.href} target="_blank" rel="noreferrer">
                    {c.link.label} ↗
                  </a>
                </div>
              </div>

              <div className="card-photo" data-symbol={c.artSymbol}>
                <div className="mark" />
                <span>{c.artLabel}</span>
              </div>

              <div className="stamp">
                <b>{c.metric.big}</b>
                {c.metric.small}
              </div>
            </article>
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
          <div className="contact-bottom">
            <span>
              {rail.firstName} {rail.lastName} / {rail.location} / {rail.year}
            </span>
            <div className="contact-links">
              {contact.links.map((link) => (
                <a
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
          <div className="contact-footer-right">
            {contact.footerLeft} — {contact.footerRight}
          </div>
        </div>
      </section>
    </>
  );
}
