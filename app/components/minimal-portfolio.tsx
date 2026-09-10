"use client";

import {
  profile,
  rail,
  topbar,
  hero,
  contents,
  cases,
  about,
  contact,
} from "../data";

function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = !href.startsWith("#") && !href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="minimal-link"
    >
      {children} ↗
    </a>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof cases)[number];
}) {
  return (
    <article className="minimal-project">
      <div className="minimal-project-number">
        {project.num}
      </div>

      <div className="minimal-project-main">
        <div className="minimal-project-meta">
          <span>{project.category}</span>
          <span>{project.tag}</span>
        </div>

        <h3>
          {project.titleLines[0]}{" "}
          <em>{project.titleLines[1]}</em>
        </h3>

        <p className="minimal-summary">
          {project.summary}
        </p>

        <p className="minimal-description">
          {project.description}
        </p>

        {project.extra && (
          <p className="minimal-extra">
            {project.extra}
          </p>
        )}

        <div className="minimal-metric">
          <strong>{project.metric.big}</strong>
          <span>{project.metric.small}</span>
        </div>

        <div className="minimal-facts">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>

        <div className="minimal-bottom">
          <div className="minimal-notes">
            {project.fieldNotes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>

          <ArrowLink href={project.link.href}>
            {project.link.label}
          </ArrowLink>
        </div>
      </div>
    </article>
  );
}

export function MinimalPortfolio() {
  return (
    <main className="minimal-portfolio">
      <style jsx global>{`
        .minimal-portfolio {
          --minimal-bg: #f4f3ef;
          --minimal-text: #111111;
          --minimal-muted: #6d6d68;
          --minimal-line: #d4d3ce;
          --minimal-accent: #111111;

          min-height: 100vh;
          background: var(--minimal-bg);
          color: var(--minimal-text);
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .minimal-portfolio * {
          box-sizing: border-box;
        }

        .minimal-portfolio a {
          color: inherit;
          text-decoration: none;
        }

        .minimal-nav {
          position: sticky;
          top: 0;
          z-index: 20;

          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          padding: 20px 5vw;

          background: rgba(244, 243, 239, 0.92);
          border-bottom: 1px solid var(--minimal-line);

          backdrop-filter: blur(14px);
        }

        .minimal-brand {
          display: flex;
          align-items: center;
          gap: 14px;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .minimal-brand-mark {
          font-size: 12px;
          color: var(--minimal-muted);
        }

        .minimal-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .minimal-nav-links a {
          font-size: 12px;
          color: var(--minimal-muted);
          transition: color 160ms ease;
        }

        .minimal-nav-links a:hover {
          color: var(--minimal-text);
        }

        .minimal-hero {
          display: grid;
          grid-template-columns: 1fr minmax(280px, 420px);
          gap: 8vw;

          min-height: calc(100vh - 66px);
          padding: 10vh 5vw 8vh;
          align-items: end;

          border-bottom: 1px solid var(--minimal-line);
        }

        .minimal-hero-kicker {
          margin-bottom: 30px;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--minimal-muted);
        }

        .minimal-hero h1 {
          max-width: 900px;
          margin: 0;

          font-size: clamp(58px, 9vw, 132px);
          line-height: 0.88;
          letter-spacing: -0.075em;
          font-weight: 700;
        }

        .minimal-hero h1 div:last-child {
          color: #777771;
        }

        .minimal-hero-side {
          align-self: end;
          padding-bottom: 6px;
        }

        .minimal-roles {
          margin-bottom: 30px;

          font-size: 12px;
          line-height: 1.7;
          color: var(--minimal-muted);
        }

        .minimal-statement {
          margin: 0;

          font-size: clamp(17px, 1.7vw, 23px);
          line-height: 1.45;
          letter-spacing: -0.025em;
        }

        .minimal-statement strong {
          font-weight: 700;
        }

        .minimal-method {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 20px;

          margin-top: 48px;
          padding-top: 20px;

          border-top: 1px solid var(--minimal-line);
        }

        .minimal-method-label {
          font-size: 10px;
          color: var(--minimal-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .minimal-method ol {
          margin: 0;
          padding: 0;

          list-style: none;

          font-size: 12px;
          line-height: 2;
        }

        .minimal-method li::before {
          content: "0" counter(list-item) " ";
          margin-right: 10px;
          color: var(--minimal-muted);
        }

        .minimal-scroll {
          position: absolute;
          bottom: 30px;
          left: 5vw;

          font-size: 10px;
          color: var(--minimal-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .minimal-section {
          padding: 9vw 5vw;
          border-bottom: 1px solid var(--minimal-line);
        }

        .minimal-section-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;

          margin-bottom: 7vw;
        }

        .minimal-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .minimal-section-note {
          max-width: 360px;

          font-size: 11px;
          line-height: 1.5;
          color: var(--minimal-muted);
          text-align: right;
        }

        .minimal-contents {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;

          background: var(--minimal-line);
          border: 1px solid var(--minimal-line);
        }

        .minimal-content-card {
          min-height: 280px;
          padding: 28px;

          background: var(--minimal-bg);
        }

        .minimal-content-number {
          display: block;
          margin-bottom: 70px;

          font-size: 11px;
          color: var(--minimal-muted);
        }

        .minimal-content-card h3 {
          margin: 0 0 14px;

          font-size: clamp(22px, 2.4vw, 34px);
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .minimal-content-card p {
          max-width: 330px;
          margin: 0;

          font-size: 12px;
          line-height: 1.6;
          color: var(--minimal-muted);
        }

        .minimal-content-projects {
          display: block;
          margin-top: 28px;

          font-size: 10px;
          line-height: 1.5;
          letter-spacing: 0.04em;
          color: var(--minimal-muted);
        }

        .minimal-work-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(260px, 420px);
          gap: 8vw;
          align-items: end;

          margin-bottom: 8vw;
        }

        .minimal-work-intro h2 {
          margin: 0;

          font-size: clamp(58px, 9vw, 130px);
          line-height: 0.85;
          letter-spacing: -0.075em;
        }

        .minimal-work-intro p {
          margin: 0;

          font-size: 15px;
          line-height: 1.5;
          color: var(--minimal-muted);
        }

        .minimal-projects {
          border-top: 1px solid var(--minimal-text);
        }

        .minimal-project {
          display: grid;
          grid-template-columns: 80px minmax(0, 1fr);

          padding: 55px 0;

          border-bottom: 1px solid var(--minimal-line);
        }

        .minimal-project-number {
          font-size: 11px;
          color: var(--minimal-muted);
        }

        .minimal-project-main {
          max-width: 1100px;
        }

        .minimal-project-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;

          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--minimal-muted);
        }

        .minimal-project-meta span + span::before {
          content: "/";
          margin-right: 16px;
        }

        .minimal-project h3 {
          margin: 0 0 22px;

          font-size: clamp(42px, 6vw, 86px);
          line-height: 0.9;
          letter-spacing: -0.065em;
        }

        .minimal-project h3 em {
          color: #777771;
          font-style: normal;
        }

        .minimal-summary {
          max-width: 680px;
          margin: 0 0 18px;

          font-size: clamp(18px, 2vw, 25px);
          line-height: 1.35;
          letter-spacing: -0.025em;
        }

        .minimal-description {
          max-width: 760px;
          margin: 0;

          font-size: 13px;
          line-height: 1.65;
          color: var(--minimal-muted);
        }

        .minimal-extra {
          max-width: 760px;
          margin: 15px 0 0;

          font-size: 11px;
          line-height: 1.5;
          color: var(--minimal-muted);
        }

        .minimal-metric {
          display: flex;
          align-items: baseline;
          gap: 14px;

          margin: 45px 0;

          padding-top: 18px;
          border-top: 1px solid var(--minimal-line);
        }

        .minimal-metric strong {
          font-size: 42px;
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .minimal-metric span {
          font-size: 10px;
          color: var(--minimal-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .minimal-facts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;

          margin-bottom: 40px;

          background: var(--minimal-line);
          border: 1px solid var(--minimal-line);
        }

        .minimal-facts > div {
          min-height: 100px;
          padding: 18px;

          background: var(--minimal-bg);
        }

        .minimal-facts span {
          display: block;
          margin-bottom: 14px;

          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--minimal-muted);
        }

        .minimal-facts strong {
          display: block;

          font-size: 12px;
          line-height: 1.45;
          font-weight: 500;
        }

        .minimal-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .minimal-notes {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .minimal-notes span {
          padding: 7px 9px;

          border: 1px solid var(--minimal-line);

          font-size: 9px;
          color: var(--minimal-muted);
        }

        .minimal-link {
          flex: 0 0 auto;

          padding-bottom: 4px;

          border-bottom: 1px solid var(--minimal-text);

          font-size: 11px;
          font-weight: 600;
        }

        .minimal-about {
          display: grid;
          grid-template-columns: minmax(180px, 0.6fr) minmax(0, 1.4fr);
          gap: 10vw;
        }

        .minimal-about-title {
          margin: 0 0 45px;

          font-size: clamp(48px, 6vw, 82px);
          line-height: 0.9;
          letter-spacing: -0.07em;
        }

        .minimal-about-lead {
          max-width: 760px;
          margin: 0 0 25px;

          font-size: clamp(20px, 2.3vw, 31px);
          line-height: 1.35;
          letter-spacing: -0.035em;
        }

        .minimal-about-lead em {
          font-style: normal;
        }

        .minimal-about-copy {
          max-width: 680px;
          margin: 0 0 55px;

          font-size: 13px;
          line-height: 1.7;
          color: var(--minimal-muted);
        }

        .minimal-timeline {
          border-top: 1px solid var(--minimal-line);
        }

        .minimal-timeline-row {
          display: grid;
          grid-template-columns: 90px 1fr 100px;
          gap: 20px;

          padding: 17px 0;

          border-bottom: 1px solid var(--minimal-line);

          font-size: 11px;
        }

        .minimal-timeline-period,
        .minimal-timeline-tag {
          color: var(--minimal-muted);
        }

        .minimal-timeline-tag {
          text-align: right;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 9px;
        }

        .minimal-contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10vw;

          padding: 9vw 5vw;
          background: #111;
          color: #f4f3ef;
        }

        .minimal-contact-label {
          margin-bottom: 35px;

          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          opacity: 0.55;
        }

        .minimal-contact h2 {
          margin: 0;

          font-size: clamp(64px, 9vw, 130px);
          line-height: 0.82;
          letter-spacing: -0.075em;
        }

        .minimal-contact-copy {
          max-width: 480px;
          margin: 0 0 50px;

          font-size: 16px;
          line-height: 1.55;
          opacity: 0.65;
        }

        .minimal-contact-links {
          display: grid;
          grid-template-columns: 1fr 1fr;

          border-top: 1px solid rgba(244, 243, 239, 0.25);
        }

        .minimal-contact-links a {
          padding: 18px 0;

          border-bottom: 1px solid rgba(244, 243, 239, 0.25);

          font-size: 12px;
        }

        .minimal-contact-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          grid-column: 1 / -1;

          margin-top: 100px;
          padding-top: 20px;

          border-top: 1px solid rgba(244, 243, 239, 0.25);

          font-size: 9px;
          line-height: 1.5;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          opacity: 0.5;
        }

        @media (max-width: 800px) {
          .minimal-nav {
            padding: 17px 20px;
          }

          .minimal-nav-links {
            gap: 15px;
          }

          .minimal-nav-links a {
            font-size: 10px;
          }

          .minimal-hero {
            display: block;
            min-height: auto;
            padding: 100px 20px 80px;
          }

          .minimal-hero h1 {
            font-size: clamp(58px, 17vw, 100px);
          }

          .minimal-hero-side {
            margin-top: 70px;
          }

          .minimal-scroll {
            display: none;
          }

          .minimal-section {
            padding: 80px 20px;
          }

          .minimal-section-head {
            display: block;
            margin-bottom: 55px;
          }

          .minimal-section-note {
            margin-top: 15px;
            text-align: left;
          }

          .minimal-contents {
            grid-template-columns: 1fr;
          }

          .minimal-content-card {
            min-height: auto;
          }

          .minimal-content-number {
            margin-bottom: 40px;
          }

          .minimal-work-intro {
            display: block;
          }

          .minimal-work-intro h2 {
            margin-bottom: 40px;
            font-size: clamp(65px, 20vw, 110px);
          }

          .minimal-project {
            grid-template-columns: 45px minmax(0, 1fr);
            padding: 45px 0;
          }

          .minimal-project h3 {
            font-size: clamp(42px, 13vw, 70px);
          }

          .minimal-facts {
            grid-template-columns: 1fr;
          }

          .minimal-bottom {
            display: block;
          }

          .minimal-link {
            display: inline-block;
            margin-top: 25px;
          }

          .minimal-about {
            display: block;
          }

          .minimal-about-title {
            margin-bottom: 55px;
          }

          .minimal-timeline-row {
            grid-template-columns: 55px 1fr;
          }

          .minimal-timeline-tag {
            grid-column: 2;
            text-align: left;
          }

          .minimal-contact {
            display: block;
            padding: 80px 20px;
          }

          .minimal-contact h2 {
            font-size: clamp(70px, 20vw, 120px);
            margin-bottom: 70px;
          }

          .minimal-contact-footer {
            margin-top: 70px;
          }
        }
      `}</style>

      <nav className="minimal-nav">
        <a href="#" className="minimal-brand">
          <span className="minimal-brand-mark">
            {rail.mark}
          </span>
          <span>{topbar.label}</span>
        </a>

        <div className="minimal-nav-links">
          {topbar.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="minimal-hero">
        <div>
          <div className="minimal-hero-kicker">
            {rail.firstName} {rail.lastName} / {rail.location} /{" "}
            {rail.year}
          </div>

          <h1>
            {hero.headline.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </h1>
        </div>

        <div className="minimal-hero-side">
          <div className="minimal-roles">
            {rail.roles.map((role) => (
              <div key={role}>{role}</div>
            ))}
          </div>

          <p className="minimal-statement">
            {hero.statement.map((part, index) =>
              part.bold ? (
                <strong key={index}>{part.text}</strong>
              ) : (
                <span key={index}>{part.text}</span>
              )
            )}
          </p>

          <div className="minimal-method">
            <span className="minimal-method-label">
              Method
            </span>

            <ol>
              {hero.method.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <span className="minimal-scroll">
          {rail.hint}
        </span>
      </section>

      <section className="minimal-section">
        <div className="minimal-section-head">
          <span className="minimal-section-label">
            {contents.eyebrow}
          </span>

          <span className="minimal-section-note">
            {contents.count}
          </span>
        </div>

        <div className="minimal-contents">
          {contents.groups.map((group) => (
            <article
              className="minimal-content-card"
              key={group.num}
            >
              <span className="minimal-content-number">
                {group.num}
              </span>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <span className="minimal-content-projects">
                {group.projects}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="minimal-section" id="work">
        <div className="minimal-work-intro">
          <div>
            <div className="minimal-section-label">
              {topbar.nav[0]?.label ?? "Work"}
            </div>

            <h2>
              {hero.headline[0]}
              <br />
              <span style={{ color: "#777771" }}>
                {hero.headline[1]}
              </span>
            </h2>
          </div>

          <p>
            {workIntro.paragraph}
            <br />
            <br />
            {workIntro.note}
          </p>
        </div>

        <div className="minimal-projects">
          {cases.map((project) => (
            <ProjectCard
              key={project.num}
              project={project}
            />
          ))}
        </div>
      </section>

      <section className="minimal-section" id="about">
        <div className="minimal-section-head">
          <span className="minimal-section-label">
            About / provenance
          </span>

          <span className="minimal-section-note">
            {about.timeline.length} milestones
          </span>
        </div>

        <div className="minimal-about">
          <div>
            <h2 className="minimal-about-title">
              {about.heading.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </h2>
          </div>

          <div>
            <p className="minimal-about-lead">
              {about.lead.before}
              <em>{about.lead.emphasis}</em>
              {about.lead.after}
            </p>

            <p className="minimal-about-copy">
              {about.body}
            </p>

            <div className="minimal-timeline">
              {about.timeline.map((item) => (
                <div
                  className="minimal-timeline-row"
                  key={`${item.period}-${item.detail}`}
                >
                  <span className="minimal-timeline-period">
                    {item.period}
                  </span>

                  <span>{item.detail}</span>

                  <span className="minimal-timeline-tag">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="minimal-contact" id="contact">
        <div>
          <div className="minimal-contact-label">
            Contact
          </div>

          <h2>
            {contact.heading.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </h2>
        </div>

        <div>
          <p className="minimal-contact-copy">
            {contact.paragraph}
          </p>

          <div className="minimal-contact-links">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noreferrer"
                }
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="minimal-contact-footer">
          <span>{contact.footerLeft}</span>
          <span>{contact.footerRight}</span>
        </div>
      </section>
    </main>
  );
}
