import { about, cases, contact, hero, rail, sectionHeads, topbar, workIntro } from "./data";
import { CaseStudyCard } from "./components/case-study";
import { ProgressBar } from "./components/progress-bar";
import { Reveal } from "./components/reveal";

export default function Portfolio() {
  return (
    <>
      <ProgressBar />
      <div className="layout">
        <aside className="rail">
          <div className="rail-top">
            <span className="mark">{rail.mark}</span>
            <span className="year">{rail.year}</span>
          </div>

          <div className="rail-center">
            <div className="name">
              <span>{rail.firstName}</span>
              <span className="serif">{rail.lastName}</span>
            </div>
            <div className="rail-mid">
              <p>
                {rail.roles.map((role, i) => (
                  <span key={role}>
                    {role}
                    {i < rail.roles.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="rail-bottom">
            <span>{rail.location}</span>
            <span>{rail.hint}</span>
          </div>
        </aside>

        <main>
          <header className="topbar">
            <span>{topbar.label}</span>
            <nav className="nav">
              {topbar.nav.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <section className="hero">
            <div className="hero-grid">
              <div>
                <div className="eyebrow">{hero.eyebrow}</div>
                <h1>
                  {hero.headline[0]}
                  <em>{hero.headline[1]}</em>
                </h1>
                <p className="hero-statement">
                  {hero.statement.map((segment, i) =>
                    segment.bold ? <b key={i}>{segment.text}</b> : <span key={i}>{segment.text}</span>
                  )}
                </p>
              </div>
              <div className="hero-note">
                <strong>{hero.method.label}</strong>
                {hero.method.steps.map((step, i) => (
                  <span key={step}>
                    {step}
                    {i < hero.method.steps.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
            <div className="orbit" aria-hidden="true">
              <i />
            </div>
          </section>

          <section id="work" className="section">
            <div className="section-head">
              <span>{sectionHeads.work.label}</span>
              <span className="right">{sectionHeads.work.note}</span>
            </div>

            <Reveal className="work-intro">
              <h2>
                {workIntro.heading[0]}
                <br />
                <i>{workIntro.heading[1]}</i>
              </h2>
              <p>
                {workIntro.paragraph}
                <br />
                <span>{workIntro.note}</span>
              </p>
            </Reveal>

            {cases.map((study) => (
              <CaseStudyCard key={study.num} study={study} />
            ))}
          </section>

          <section id="about" className="section">
            <div className="section-head">
              <span>{sectionHeads.about.label}</span>
              <span className="right">{sectionHeads.about.note}</span>
            </div>

            <Reveal className="about">
              <h2>
                {about.heading[0]}
                <br />
                <i>{about.heading[1]}</i>
              </h2>
              <div className="about-copy">
                <p>
                  {about.lead.before}
                  <em>{about.lead.emphasis}</em>
                  {about.lead.after}
                </p>
                <p>{about.body}</p>
                <div className="timeline">
                  {about.timeline.map((row) => (
                    <div key={row.period} className="time-row">
                      <span>{row.period}</span>
                      <span>{row.detail}</span>
                      <span>{row.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="contact" className="section" style={{ borderBottom: 0 }}>
            <Reveal>
              <div className="contact">
                <div className="contact-grid">
                  <div>
                    <h2>
                      {contact.heading[0]}
                      <br />
                      <em>{contact.heading[1]}</em>
                    </h2>
                  </div>
                  <div className="contact-copy">
                    <p>{contact.paragraph}</p>
                    <div className="links">
                      {contact.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <span>{contact.footerLeft}</span>
                  <span>{contact.footerRight}</span>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
      </div>
    </>
  );
}
