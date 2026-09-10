"use client";

import { useState } from "react";
import { cases, profile, rail, about, type CaseStudy } from "../data";

const FEATURED_TAGS = ["HemaVision", "AIRM", "Medical Treatment DRL", "Specmob"];

const featuredCases = FEATURED_TAGS
  .map((tag) => cases.find((c) => c.tag === tag))
  .filter((c): c is CaseStudy => Boolean(c));

const experimentCases = cases.filter((c) => !FEATURED_TAGS.includes(c.tag));

function ProjectChapter({ study, index }: { study: CaseStudy; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <section className={`project project-${n} section`}>
      <div className="container">
        <div className="project-grid">
          <div className="project-index">{n}</div>

          <div className="project-main">
            <div>
              <div className="project-kicker">{study.category.toUpperCase()}</div>
              <h3>
                {study.titleLines[0]} <em>{study.titleLines[1]}</em>
              </h3>
              <div className="project-description">
                <p>{study.description}</p>
              </div>
            </div>

            <a className="project-link" href={study.link.href} target="_blank" rel="noreferrer">
              {study.link.label.toUpperCase()} ↗
            </a>
          </div>

          <div className="project-side">
            <div className="metric">
              <span className="metric-value">{study.metric.big}</span>
              <span className="metric-label">{study.metric.small.toUpperCase()}</span>
            </div>
            <div className="project-tech">
              {study.facts.map((fact) => (
                <div className="tech-row" key={fact.label}>
                  <span className="tech-label">{fact.label.toUpperCase()}</span>
                  <span className="tech-value">{fact.value.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperimentRow({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="experiment-item">
      <button
        type="button"
        className="experiment-row"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="experiment-number">{study.num}</span>
        <span className="experiment-name">{study.tag}</span>
        <span className="experiment-tech">
          {study.facts.map((f) => f.value).slice(0, 2).join(" · ").toUpperCase()}
        </span>
        <span className="experiment-result">{study.metric.big}</span>
        <span className="experiment-toggle">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="experiment-detail">
          <p>{study.description}</p>
          <p className="experiment-insight">{study.insight}</p>
          <a className="project-link" href={study.link.href} target="_blank" rel="noreferrer">
            {study.link.label.toUpperCase()} ↗
          </a>
        </div>
      )}
    </div>
  );
}

export function EditorialPortfolio() {
  const featuredCount = String(featuredCases.length).padStart(2, "0");
  const experimentRange =
    experimentCases.length > 0
      ? `${experimentCases[0].num}–${experimentCases[experimentCases.length - 1].num}`
      : "";

  return (
    <div className="editorial-page">
      <header>
        <a href="#" className="brand">
          {rail.firstName.toUpperCase()} {rail.lastName.toUpperCase()}
        </a>
        <nav>
          <a href="#work">WORK</a>
          <a href="#research">RESEARCH</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero section">
        <div className="hero-main">
          <div className="hero-eyebrow">AI / ML ENGINEER · RESEARCHER</div>
          <h1>
            I build <em>intelligent</em>
            <br />
            systems.
          </h1>
          <div className="hero-bottom">
            <div className="hero-description">
              Researching, engineering and deploying intelligent systems across medicine,
              computer vision and software.
            </div>
            <div className="hero-fields">
              <span>01</span> MEDICAL AI
              <br />
              <span>02</span> COMPUTER VISION
              <br />
              <span>03</span> DEEP LEARNING
              <br />
              <span>04</span> REINFORCEMENT LEARNING
            </div>
          </div>
        </div>
        <div className="hero-scroll">SCROLL TO EXPLORE</div>
      </section>

      <section className="introduction section">
        <div className="introduction-grid">
          <h2>Models are only the beginning.</h2>
          <div className="introduction-text">
            <p>
              My work sits between research and implementation: understanding a problem,
              building the model, testing it against reality, and turning the result into
              something usable.
            </p>
            <p>{about.body}</p>
            <div className="mono">RESEARCH / ENGINEERING / EXPERIMENTATION</div>
          </div>
        </div>
      </section>

      <section className="work-intro section" id="work">
        <div className="work-intro-inner">
          <div className="label mono">SELECTED WORK / 01–{featuredCount}</div>
          <h2>
            Four systems that <em>explain what I do.</em>
          </h2>
        </div>
      </section>

      {featuredCases.map((study, i) => (
        <ProjectChapter study={study} index={i} key={study.num} />
      ))}

      <section className="experiments section" id="research">
        <div className="experiments-inner">
          <div className="experiments-heading">
            <h2>Experiments.</h2>
            <div className="mono">{experimentRange} / OTHER WORK</div>
          </div>

          {experimentCases.map((study) => (
            <ExperimentRow study={study} key={study.num} />
          ))}
        </div>
      </section>

      <section className="approach section">
        <div className="approach-inner">
          <div className="approach-top">
            <h2>Research becomes systems.</h2>
            <div className="approach-copy">
              <p>I am interested in the space between a promising model and a useful system.</p>
              <p>
                That means working across data, modeling, evaluation, interfaces and
                deployment rather than treating the model as the finished product.
              </p>
              <div className="mono">FROM HYPOTHESIS → EXPERIMENT → SYSTEM</div>
            </div>
          </div>

          <div className="method-list">
            {[
              { n: "01", t: "Understand", d: "Define the problem, data and constraints before choosing the model." },
              { n: "02", t: "Build", d: "Develop models and systems around the actual problem rather than the benchmark alone." },
              { n: "03", t: "Test", d: "Measure performance, limitations and behavior under realistic conditions." },
              { n: "04", t: "Deploy", d: "Turn validated ideas into applications that people can actually use." },
            ].map((m) => (
              <div className="method" key={m.n}>
                <div className="method-number">{m.n}</div>
                <h4>{m.t}</h4>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="profile section" id="about">
        <div className="profile-inner">
          <div className="profile-grid">
            <h2>
              {rail.firstName}
              <br />
              {rail.lastName}.
            </h2>
            <div className="profile-copy">
              <p>
                AI / ML Engineer, researcher and full-stack developer working across
                machine learning, medical AI and software systems.
              </p>
              <p>{about.body}</p>
              <div className="mono">
                CURRENTLY INTERESTED IN
                <br />
                MEDICAL AI · COMPUTER VISION · DEEP LEARNING · DRL
              </div>
            </div>
          </div>

          <div className="profile-details">
            {about.timeline.map((row) => (
              <div className="profile-detail" key={row.detail}>
                <div className="label">{row.tag.toUpperCase()}</div>
                <div className="value">{row.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-inner">
          <div className="contact-label">10 / CONTACT</div>
          <h2>
            Let&apos;s build something <em>useful.</em>
          </h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email.toUpperCase()} ↗
          </a>
        </div>
      </section>

      <footer>
        <span>{rail.firstName.toUpperCase()} {rail.lastName.toUpperCase()}</span>
        <span>AI / ML · RESEARCH · ENGINEERING</span>
        <span>© {rail.year}</span>
      </footer>

      <style jsx>{`
        .editorial-page {
          --bg: #f5f5f1;
          --text: #111;
          --muted: #777;
          --line: #d2d2cc;
          --serif: "Playfair Display", Georgia, serif;
          --sans: Inter, sans-serif;
          --mono: "DM Mono", monospace;
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        .editorial-page * { box-sizing: border-box; }
        .editorial-page a { color: inherit; text-decoration: none; }
        .editorial-page ::selection { background: #111; color: #f5f5f1; }

        .editorial-page .mono {
          font-family: var(--mono); font-size: 10px; line-height: 1.7;
          letter-spacing: .04em; color: var(--muted);
        }
        .editorial-page .section { position: relative; border-bottom: 1px solid var(--line); }
        .editorial-page .container { width: 86%; max-width: 1450px; margin: 0 auto; }

        .editorial-page h1,
        .editorial-page h2,
        .editorial-page h3 {
          overflow-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
        }

        .editorial-page header {
          position: fixed; z-index: 100; top: 0; left: 0; width: 100%;
          padding: 22px 4vw; display: flex; justify-content: space-between; align-items: center;
          mix-blend-mode: difference; color: white; pointer-events: none;
        }
        .editorial-page header .brand,
        .editorial-page header nav { pointer-events: auto; }
        .editorial-page .brand { font-family: var(--mono); font-size: 10px; letter-spacing: .04em; }
        .editorial-page nav { display: flex; gap: 28px; }
        .editorial-page nav a { font-family: var(--mono); font-size: 10px; transition: opacity .25s ease; }
        .editorial-page nav:hover a:not(:hover) { opacity: .4; }

        .editorial-page .hero {
          min-height: 100vh; position: relative; padding: 16vh 7vw 9vh;
          display: flex; align-items: center; overflow: hidden;
        }
        .editorial-page .hero-main { width: 100%; margin-top: -3vh; }
        .editorial-page .hero-eyebrow { font-family: var(--mono); font-size: 10px; color: var(--muted); margin-bottom: 48px; }
        .editorial-page .hero h1 {
          margin: 0; font-family: var(--serif); font-weight: 400;
          font-size: clamp(48px, 8vw, 120px); line-height: 1; letter-spacing: -.05em;
        }
        .editorial-page .hero h1 em { font-style: italic; }
        .editorial-page .hero-bottom {
          margin-top: 9vh; display: grid; grid-template-columns: 1fr 1fr; gap: 12vw; align-items: end;
        }
        .editorial-page .hero-description { max-width: 510px; font-size: 18px; line-height: 1.4; letter-spacing: -.02em; }
        .editorial-page .hero-fields { max-width: 310px; font-family: var(--mono); font-size: 10px; line-height: 2; color: var(--muted); }
        .editorial-page .hero-fields span { color: var(--text); }
        .editorial-page .hero-scroll {
          position: absolute; right: 4vw; bottom: 7vh; font-family: var(--mono);
          font-size: 9px; color: var(--muted); writing-mode: vertical-rl;
        }

        .editorial-page .introduction { min-height: 85vh; padding: 16vh 0; }
        .editorial-page .introduction-grid { margin-left: 16%; width: 68%; display: grid; grid-template-columns: 1fr 1fr; gap: 9vw; }
        .editorial-page .introduction h2 {
          margin: 0; font-family: var(--serif); font-weight: 400;
          font-size: clamp(36px, 4.5vw, 64px); line-height: 1.05; letter-spacing: -.04em;
        }
        .editorial-page .introduction-text { padding-top: 10px; font-size: 17px; line-height: 1.55; max-width: 430px; }
        .editorial-page .introduction-text p { margin: 0 0 28px; }

        .editorial-page .work-intro { min-height: 55vh; padding: 14vh 0 10vh; }
        .editorial-page .work-intro-inner { margin-left: 16%; }
        .editorial-page .work-intro .label { margin-bottom: 55px; }
        .editorial-page .work-intro h2 {
          margin: 0; max-width: 850px; font-family: var(--serif);
          font-size: clamp(38px, 6vw, 90px); font-weight: 400; line-height: 1.05; letter-spacing: -.05em;
        }
        .editorial-page .work-intro h2 em { font-style: italic; }

        .editorial-page .project { min-height: 100vh; padding: 13vh 0 15vh; }
        .editorial-page .project-grid { display: grid; grid-template-columns: 10% 52% 28%; gap: 5%; min-height: 72vh; }
        .editorial-page .project-index {
          padding-top: 4px; font-family: var(--mono); font-size: 12px; color: var(--muted);
          position: sticky; top: 25vh; height: fit-content;
        }
        .editorial-page .project-main { display: flex; flex-direction: column; justify-content: space-between; }
        .editorial-page .project-kicker { font-family: var(--mono); font-size: 10px; color: var(--muted); margin-bottom: 30px; }
        .editorial-page .project h3 {
          margin: 0; font-family: var(--serif); font-weight: 400;
          font-size: clamp(40px, 5.5vw, 84px); line-height: 1.02; letter-spacing: -.04em;
        }
        .editorial-page .project h3 em { font-style: italic; }
        .editorial-page .project-description { margin-top: 55px; max-width: 600px; font-size: 20px; line-height: 1.35; letter-spacing: -.025em; }
        .editorial-page .project-description p { margin: 0; }
        .editorial-page .project-side { align-self: end; }
        .editorial-page .project-side .metric { border-top: 1px solid var(--line); padding: 18px 0; }
        .editorial-page .metric-value { display: block; font-family: var(--serif); font-size: 38px; line-height: 1; margin-bottom: 8px; }
        .editorial-page .metric-label { font-family: var(--mono); font-size: 9px; color: var(--muted); line-height: 1.6; }
        .editorial-page .project-tech { margin-top: 35px; display: flex; flex-direction: column; gap: 10px; }
        .editorial-page .tech-row { display: flex; justify-content: space-between; gap: 12px; }
        .editorial-page .tech-label { font-family: var(--mono); font-size: 8px; color: var(--muted); white-space: nowrap; }
        .editorial-page .tech-value { font-family: var(--mono); font-size: 9px; text-align: right; }
        .editorial-page .project-link {
          display: inline-block; margin-top: 35px; font-family: var(--mono); font-size: 10px;
          border-bottom: 1px solid #111; padding-bottom: 5px;
        }

        .editorial-page .project-01 .project-main { padding-top: 3vh; }
        .editorial-page .project-02 { padding-top: 18vh; }
        .editorial-page .project-02 .project-grid { grid-template-columns: 10% 45% 34%; }
        .editorial-page .project-02 .project-description { max-width: 530px; }
        .editorial-page .project-03 { padding-top: 17vh; }
        .editorial-page .project-03 .project-description { max-width: 650px; }
        .editorial-page .project-03 .project-side { align-self: center; }
        .editorial-page .project-04 { padding-top: 16vh; padding-bottom: 20vh; }
        .editorial-page .project-04 .project-grid { grid-template-columns: 10% 50% 30%; }
        .editorial-page .project-04 .project-description { max-width: 620px; }

        .editorial-page .experiments { padding: 15vh 0 17vh; }
        .editorial-page .experiments-inner { margin-left: 16%; width: 68%; }
        .editorial-page .experiments-heading {
          display: flex; justify-content: space-between; align-items: end;
          border-bottom: 1px solid var(--line); padding-bottom: 25px;
        }
        .editorial-page .experiments-heading h2 {
          margin: 0; font-family: var(--serif); font-size: clamp(36px, 5vw, 72px);
          font-weight: 400; letter-spacing: -.05em;
        }

        .editorial-page .experiment-item { border-bottom: 1px solid var(--line); }
        .editorial-page .experiment-row {
          width: 100%; display: grid; grid-template-columns: 70px 1fr 1fr 100px 24px;
          gap: 25px; padding: 27px 0; align-items: baseline;
          background: none; border: none; cursor: pointer; text-align: left; color: inherit; font: inherit;
        }
        .editorial-page .experiment-number,
        .editorial-page .experiment-tech,
        .editorial-page .experiment-result,
        .editorial-page .experiment-toggle { font-family: var(--mono); font-size: 9px; line-height: 1.7; }
        .editorial-page .experiment-number { color: var(--muted); }
        .editorial-page .experiment-name { font-family: var(--serif); font-size: 25px; }
        .editorial-page .experiment-result { color: var(--muted); }
        .editorial-page .experiment-toggle { text-align: right; font-size: 14px; }
        .editorial-page .experiment-detail { padding: 0 0 30px; max-width: 640px; }
        .editorial-page .experiment-detail p { margin: 0 0 14px; font-size: 15px; line-height: 1.5; }
        .editorial-page .experiment-insight { font-style: italic; color: var(--muted); }

        .editorial-page .approach { min-height: 80vh; padding: 16vh 0; }
        .editorial-page .approach-inner { margin-left: 16%; width: 68%; }
        .editorial-page .approach-top { display: grid; grid-template-columns: 1fr 1fr; gap: 10vw; }
        .editorial-page .approach h2 {
          margin: 0; font-family: var(--serif); font-size: clamp(36px, 5vw, 72px);
          font-weight: 400; line-height: 1.05; letter-spacing: -.05em;
        }
        .editorial-page .approach-copy { font-size: 17px; line-height: 1.5; max-width: 430px; }
        .editorial-page .approach-copy p { margin: 0 0 25px; }
        .editorial-page .method-list { margin-top: 13vh; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); }
        .editorial-page .method { padding: 25px 25px 25px 0; border-right: 1px solid var(--line); }
        .editorial-page .method:last-child { border-right: 0; }
        .editorial-page .method-number { font-family: var(--mono); font-size: 10px; color: var(--muted); }
        .editorial-page .method h4 { margin: 40px 0 15px; font-family: var(--serif); font-size: 25px; font-weight: 400; }
        .editorial-page .method p { margin: 0; font-size: 12px; line-height: 1.5; max-width: 180px; }

        .editorial-page .profile { min-height: 80vh; padding: 16vh 0; }
        .editorial-page .profile-inner { margin-left: 16%; width: 68%; }
        .editorial-page .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10vw; }
        .editorial-page .profile h2 {
          margin: 0; font-family: var(--serif); font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 400; line-height: 1.05; letter-spacing: -.05em;
        }
        .editorial-page .profile-copy { font-size: 17px; line-height: 1.5; max-width: 450px; }
        .editorial-page .profile-copy p { margin: 0 0 28px; }
        .editorial-page .profile-details { margin-top: 13vh; border-top: 1px solid var(--line); }
        .editorial-page .profile-detail { display: grid; grid-template-columns: 170px 1fr; border-bottom: 1px solid var(--line); padding: 18px 0; }
        .editorial-page .profile-detail .label { font-family: var(--mono); font-size: 9px; color: var(--muted); }
        .editorial-page .profile-detail .value { font-size: 13px; }

        .editorial-page .contact { min-height: 80vh; padding: 17vh 0 12vh; display: flex; align-items: center; }
        .editorial-page .contact-inner { margin-left: 16%; }
        .editorial-page .contact-label { font-family: var(--mono); font-size: 10px; color: var(--muted); margin-bottom: 45px; }
        .editorial-page .contact h2 {
          margin: 0; font-family: var(--serif); font-weight: 400;
          font-size: clamp(44px, 7vw, 110px); line-height: 1; letter-spacing: -.05em;
        }
        .editorial-page .contact h2 em { font-style: italic; }
        .editorial-page .contact-email {
          display: inline-block; margin-top: 70px; font-family: var(--mono); font-size: 11px;
          border-bottom: 1px solid #111; padding-bottom: 7px;
        }
        .editorial-page footer {
          border-top: 1px solid var(--line); padding: 20px 4vw; display: flex;
          justify-content: space-between; font-family: var(--mono); font-size: 9px; color: var(--muted);
        }

        @media (max-width: 900px) {
          .editorial-page header { padding: 18px 24px; }
          .editorial-page nav { gap: 15px; }
          .editorial-page .hero { padding: 120px 24px 70px; }
          .editorial-page .hero-bottom { grid-template-columns: 1fr; gap: 40px; margin-top: 60px; }
          .editorial-page .hero-fields { max-width: none; }
          .editorial-page .hero-scroll { display: none; }
          .editorial-page .container { width: auto; margin: 0 24px; }
          .editorial-page .introduction,
          .editorial-page .work-intro,
          .editorial-page .experiments,
          .editorial-page .approach,
          .editorial-page .profile { padding: 100px 24px; }
          .editorial-page .introduction-grid,
          .editorial-page .work-intro-inner,
          .editorial-page .experiments-inner,
          .editorial-page .approach-inner,
          .editorial-page .profile-inner,
          .editorial-page .contact-inner { margin-left: 0; width: 100%; }
          .editorial-page .introduction-grid,
          .editorial-page .approach-top,
          .editorial-page .profile-grid { grid-template-columns: 1fr; gap: 50px; }
          .editorial-page .project { padding: 100px 24px; }
          .editorial-page .project-grid,
          .editorial-page .project-02 .project-grid,
          .editorial-page .project-04 .project-grid { grid-template-columns: 1fr; gap: 25px; }
          .editorial-page .project-index { position: static; }
          .editorial-page .project-side { margin-top: 45px; align-self: start; }
          .editorial-page .method-list { grid-template-columns: 1fr 1fr; }
          .editorial-page .method:nth-child(2) { border-right: 0; }
          .editorial-page .method:nth-child(3),
          .editorial-page .method:nth-child(4) { border-top: 1px solid var(--line); }
          .editorial-page .experiment-row { grid-template-columns: 40px 1fr 24px; }
          .editorial-page .experiment-tech,
          .editorial-page .experiment-result { display: none; }
          .editorial-page footer { padding: 20px 24px; flex-wrap: wrap; gap: 8px; }
        }

        @media (max-width: 550px) {
          .editorial-page nav a:nth-child(2) { display: none; }
          .editorial-page .method-list { grid-template-columns: 1fr; }
          .editorial-page .method { border-right: 0 !important; border-bottom: 1px solid var(--line); padding-bottom: 35px; }
          .editorial-page .method:last-child { border-bottom: 0; }
          .editorial-page .profile-detail { grid-template-columns: 100px 1fr; }
        }
      `}</style>
    </div>
  );
}
