"use client";

import { useState } from "react";
import { cases, profile, rail, about, type CaseStudy } from "../data";
import styles from "./editorial-portfolio.module.css";

function cx(...names: Array<string | undefined | false>) {
  return names.filter(Boolean).join(" ");
}

const FEATURED_TAGS = ["HemaVision", "AIRM", "Medical Treatment DRL", "Specmob"];

const featuredCases = FEATURED_TAGS
  .map((tag) => cases.find((c) => c.tag === tag))
  .filter((c): c is CaseStudy => Boolean(c));

const experimentCases = cases.filter((c) => !FEATURED_TAGS.includes(c.tag));

function ProjectChapter({ study, index }: { study: CaseStudy; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <section className={cx(styles["project"], styles[`project-${n}`], styles["section"])}>
      <div className={styles["container"]}>
        <div className={styles["project-grid"]}>
          <div className={styles["project-index"]}>{n}</div>

          <div className={styles["project-main"]}>
            <div>
              <div className={styles["project-kicker"]}>{study.category.toUpperCase()}</div>
              <h3>
                {study.titleLines[0]} <em>{study.titleLines[1]}</em>
              </h3>
              <div className={styles["project-description"]}>
                <p>{study.description}</p>
              </div>
            </div>

            <a className={styles["project-link"]} href={study.link.href} target="_blank" rel="noreferrer">
              {study.link.label.toUpperCase()} ↗
            </a>
          </div>

          <div className={styles["project-side"]}>
            <div className={styles["metric"]}>
              <span className={styles["metric-value"]}>{study.metric.big}</span>
              <span className={styles["metric-label"]}>{study.metric.small.toUpperCase()}</span>
            </div>
            <div className={styles["project-tech"]}>
              {study.facts.map((fact) => (
                <div className={styles["tech-row"]} key={fact.label}>
                  <span className={styles["tech-label"]}>{fact.label.toUpperCase()}</span>
                  <span className={styles["tech-value"]}>{fact.value.toUpperCase()}</span>
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
    <div className={styles["experiment-item"]}>
      <button
        type="button"
        className={styles["experiment-row"]}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={styles["experiment-number"]}>{study.num}</span>
        <span className={styles["experiment-name"]}>{study.tag}</span>
        <span className={styles["experiment-tech"]}>
          {study.facts.map((f) => f.value).slice(0, 2).join(" · ").toUpperCase()}
        </span>
        <span className={styles["experiment-result"]}>{study.metric.big}</span>
        <span className={styles["experiment-toggle"]}>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className={styles["experiment-detail"]}>
          <p>{study.description}</p>
          <p className={styles["experiment-insight"]}>{study.insight}</p>
          <a className={styles["project-link"]} href={study.link.href} target="_blank" rel="noreferrer">
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
    <div className={styles["editorial-page"]}>
      <header>
        <a href="#" className={styles["brand"]}>
          {rail.firstName.toUpperCase()} {rail.lastName.toUpperCase()}
        </a>
        <nav>
          <a href="#work">WORK</a>
          <a href="#research">RESEARCH</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className={cx(styles["hero"], styles["section"])}>
        <div className={styles["hero-main"]}>
          <div className={styles["hero-eyebrow"]}>AI / ML ENGINEER · RESEARCHER</div>
          <h1>
            I build <em>intelligent</em>
            <br />
            systems.
          </h1>
          <div className={styles["hero-bottom"]}>
            <div className={styles["hero-description"]}>
              Researching, engineering and deploying intelligent systems across medicine,
              computer vision and software.
            </div>
            <div className={styles["hero-fields"]}>
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
        <div className={styles["hero-scroll"]}>SCROLL TO EXPLORE</div>
      </section>

      <section className={cx(styles["introduction"], styles["section"])}>
        <div className={styles["introduction-grid"]}>
          <h2>Models are only the beginning.</h2>
          <div className={styles["introduction-text"]}>
            <p>
              My work sits between research and implementation: understanding a problem,
              building the model, testing it against reality, and turning the result into
              something usable.
            </p>
            <p>{about.body}</p>
            <div className={styles["mono"]}>RESEARCH / ENGINEERING / EXPERIMENTATION</div>
          </div>
        </div>
      </section>

      <section className={cx(styles["work-intro"], styles["section"])} id="work">
        <div className={styles["work-intro-inner"]}>
          <div className={cx(styles["label"], styles["mono"])}>SELECTED WORK / 01–{featuredCount}</div>
          <h2>
            Four systems that <em>explain what I do.</em>
          </h2>
        </div>
      </section>

      {featuredCases.map((study, i) => (
        <ProjectChapter study={study} index={i} key={study.num} />
      ))}

      <section className={cx(styles["experiments"], styles["section"])} id="research">
        <div className={styles["experiments-inner"]}>
          <div className={styles["experiments-heading"]}>
            <h2>Experiments.</h2>
            <div className={styles["mono"]}>{experimentRange} / OTHER WORK</div>
          </div>

          {experimentCases.map((study) => (
            <ExperimentRow study={study} key={study.num} />
          ))}
        </div>
      </section>

      <section className={cx(styles["approach"], styles["section"])}>
        <div className={styles["approach-inner"]}>
          <div className={styles["approach-top"]}>
            <h2>Research becomes systems.</h2>
            <div className={styles["approach-copy"]}>
              <p>I am interested in the space between a promising model and a useful system.</p>
              <p>
                That means working across data, modeling, evaluation, interfaces and
                deployment rather than treating the model as the finished product.
              </p>
              <div className={styles["mono"]}>FROM HYPOTHESIS → EXPERIMENT → SYSTEM</div>
            </div>
          </div>

          <div className={styles["method-list"]}>
            {[
              { n: "01", t: "Understand", d: "Define the problem, data and constraints before choosing the model." },
              { n: "02", t: "Build", d: "Develop models and systems around the actual problem rather than the benchmark alone." },
              { n: "03", t: "Test", d: "Measure performance, limitations and behavior under realistic conditions." },
              { n: "04", t: "Deploy", d: "Turn validated ideas into applications that people can actually use." },
            ].map((m) => (
              <div className={styles["method"]} key={m.n}>
                <div className={styles["method-number"]}>{m.n}</div>
                <h4>{m.t}</h4>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cx(styles["profile"], styles["section"])} id="about">
        <div className={styles["profile-inner"]}>
          <div className={styles["profile-grid"]}>
            <h2>
              {rail.firstName}
              <br />
              {rail.lastName}.
            </h2>
            <div className={styles["profile-copy"]}>
              <p>
                AI / ML Engineer, researcher and full-stack developer working across
                machine learning, medical AI and software systems.
              </p>
              <p>{about.body}</p>
              <div className={styles["mono"]}>
                CURRENTLY INTERESTED IN
                <br />
                MEDICAL AI · COMPUTER VISION · DEEP LEARNING · DRL
              </div>
            </div>
          </div>

          <div className={styles["profile-details"]}>
            {about.timeline.map((row) => (
              <div className={styles["profile-detail"]} key={row.detail}>
                <div className={styles["label"]}>{row.tag.toUpperCase()}</div>
                <div className={styles["value"]}>{row.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cx(styles["contact"], styles["section"])} id="contact">
        <div className={styles["contact-inner"]}>
          <div className={styles["contact-label"]}>10 / CONTACT</div>
          <h2>
            Let&apos;s build something <em>useful.</em>
          </h2>
          <a className={styles["contact-email"]} href={`mailto:${profile.email}`}>
            {profile.email.toUpperCase()} ↗
          </a>
        </div>
      </section>

      <footer>
        <span>{rail.firstName.toUpperCase()} {rail.lastName.toUpperCase()}</span>
        <span>AI / ML · RESEARCH · ENGINEERING</span>
        <span>© {rail.year}</span>
      </footer>
    </div>
  );
}
