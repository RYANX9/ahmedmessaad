"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./brutalist-portfolio.module.css";

const HERO_IMAGE = "/ahmed-hero.png";

export function BrutalistPortfolio() {
  const [scrolled, setScrolled] = useState(false);

  const heroImageRef = useRef<HTMLElement | null>(null);
  const archiveRefs = useRef<Array<HTMLDetailsElement | null>>([]);

  useEffect(() => {
    const updateNav = () => {
      setScrolled(window.scrollY > 14);
    };

    updateNav();

    window.addEventListener("scroll", updateNav, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateNav);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(
      `.${styles.reveal}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const heroImage = heroImageRef.current;

    if (!heroImage || reduceMotion) {
      return;
    }

    const updateParallax = () => {
      const y = Math.min(window.scrollY, 700);

      heroImage.style.transform = `translateY(${y * 0.035}px)`;
    };

    window.addEventListener("scroll", updateParallax, {
      passive: true,
    });

    updateParallax();

    return () => {
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  const handleArchiveToggle = (index: number) => {
    const current = archiveRefs.current[index];

    if (!current?.open) {
      return;
    }

    archiveRefs.current.forEach((other, otherIndex) => {
      if (otherIndex !== index && other) {
        other.removeAttribute("open");
      }
    });
  };

  return (
    <div className={styles.page}>
      <nav
        id="nav"
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      >
        <a className={styles.brand} href="#top">
          Ahmed Messaad
        </a>

        <div className={`${styles.navCenter} ${styles.mono}`}>
          INTELLIGENCE · SYSTEMS · RESEARCH
        </div>

        <div className={`${styles.navLinks} ${styles.mono}`}>
          <a href="#work">INDEX</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <main id="top">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className={`${styles.hero} ${styles.container} ${styles.reveal}`}>
          <div className={`${styles.heroMeta} ${styles.mono}`}>
            <div className={styles.left}>
              AM / 01{" "}
              <span className={styles.heroMetaMuted}>— ALGERIA</span>
            </div>

            <div className={styles.right}>
              PORTFOLIO / 2026
              <br />
              IDEAS → SYSTEMS
            </div>
          </div>

          <div className={styles.heroHeadline}>
            <h1>
              I turn difficult
              <br />
              questions into <em>systems.</em>
            </h1>

            <div className={styles.heroSubline}>
              <div className={styles.statement}>
                Start with the question.
                <br />
                <em>Build what the answer needs.</em>
              </div>

              <div className={styles.description}>
                AI/ML, medical imaging and software — explored as one
                continuous practice: understand the problem, shape the
                intelligence, then give it somewhere useful to live.
              </div>
            </div>
          </div>

          <div className={styles.heroStage}>
            <div
              className={styles.heroOrbit}
              aria-hidden="true"
            />

            <div
              className={`${styles.spark} ${styles.heroSpark}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.spark} ${styles.heroSparkTwo}`}
              aria-hidden="true"
            />

            <div
              className={styles.heroDot}
              aria-hidden="true"
            />

            <div
              className={`${styles.cross} ${styles.heroCross}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.heroLabel} ${styles.left}`}
            >
              <div className={styles.rule} />

              <div className={`${styles.tag} ${styles.mono}`}>
                01 / WORKING METHOD
              </div>

              <h2>
                Observe.
                <br />
                Model.
                <br />
                Make useful.
              </h2>

              <p>
                Stay close to the real problem. Let the work determine the
                form.
              </p>
            </div>

            <figure
              ref={heroImageRef}
              className={styles.heroImageWrap}
              data-parallax
            >
              <img
                className={styles.heroImage}
                src={HERO_IMAGE}
                alt="Editorial portrait with geometric research and systems motifs"
              />
            </figure>

            <div
              className={`${styles.heroLabel} ${styles.right}`}
            >
              <div className={styles.rule} />

              <div className={`${styles.tag} ${styles.mono}`}>
                THE IDEA IN MOTION
              </div>

              <h2>
                Question
                <br />
                → intelligence
                <br />→ consequence
              </h2>

              <p>
                A useful idea should survive contact with the people and
                systems around it.
              </p>
            </div>

            <div className={styles.heroStamp}>AM</div>
          </div>
        </section>

        {/* =========================================================
            WORK
        ========================================================= */}
        <section className={styles.work} id="work">
          <div className={styles.container}>
            <header
              className={`${styles.sectionIntro} ${styles.reveal}`}
            >
              <div>
                <div className={`${styles.mono} ${styles.violet}`}>
                  SELECTED WORK / 01—10
                </div>

                <h2>
                  Selected
                  <br />
                  <em>work.</em>
                </h2>
              </div>

              <p>
                Three pieces are given room to breathe because they show the
                clearest range of the practice. The rest stay lighter:
                experiments, products and smaller systems that still reveal
                how I think and build.
              </p>
            </header>

            {/* =====================================================
                PROJECT 01 — HEMAVISION
            ===================================================== */}
            <article
              className={`${styles.case} ${styles.reveal}`}
            >
              <div className={`${styles.caseHead} ${styles.mono}`}>
                <span className={styles.type}>
                  01 · CLINICAL AI / VISION
                </span>

                <span className={styles.number}>
                  HEMAVISION
                </span>
              </div>

              <div className={styles.caseBody}>
                <div className={styles.caseMain}>
                  <div>
                    <div className={`${styles.eyebrow} ${styles.mono}`}>
                      SEE → UNDERSTAND → SUPPORT
                    </div>

                    <h3>
                      From blood
                      <br />
                      smear to <em>clarity.</em>
                    </h3>

                    <p className={styles.caseCopy}>
                      HemaVision brings microscope imagery into a structured
                      diagnostic workflow. Computer vision classifies
                      blood-cell imagery, while the surrounding application
                      makes those results easier to inspect and use. The
                      system was validated by a practicing clinical
                      hematologist, then featured on BBC News Arabic&apos;s
                      4Tech program.
                    </p>

                    <span className={`${styles.caseNote} ${styles.mono}`}>
                      The intelligence belongs where the work happens.
                    </span>
                  </div>

                  <a
                    className={`${styles.textLink} ${styles.mono}`}
                    href="https://www.youtube.com/watch?v=fX77vZlHkng"
                    target="_blank"
                    rel="noopener"
                  >
                    SEE THE WORK ↗
                  </a>
                </div>

                <aside className={styles.caseAside}>
                  <div className={styles.metric}>
                    97%

                    <small>
                      MULTI-CLASS ACCURACY
                    </small>
                  </div>

                  <div className={styles.specs}>
                    <strong className={styles.inkSpec}>
                      SIGNAL
                    </strong>
                    <br />
                    45 min → 3 min diagnostic time
                    <br />
                    <br />
                    YOLOv8 / U-Net / OpenCV / PyTorch
                    <br />
                    Clinical hematologist validation
                  </div>
                </aside>
              </div>

              <div className={styles.caseSymbol}>
                ✦
              </div>
            </article>

            {/* =====================================================
                PROJECT 02 — AIRM
            ===================================================== */}
            <article
              className={`${styles.case} ${styles.dark} ${styles.reveal}`}
            >
              <div className={`${styles.caseHead} ${styles.mono}`}>
                <span className={styles.type}>
                  02 · MEDICAL IMAGING
                </span>

                <span className={styles.number}>
                  AIRM
                </span>
              </div>

              <div className={styles.caseBody}>
                <div className={styles.caseMain}>
                  <div>
                    <div className={`${styles.eyebrow} ${styles.mono}`}>
                      SCAN → READ → ACT
                    </div>

                    <h3>
                      From trained model
                      <br />
                      to <em>working tool.</em>
                    </h3>

                    <p className={styles.caseCopy}>
                      A hospital-oriented MRI pipeline for four-class
                      brain-tumor classification. DICOM handling,
                      preprocessing, inference, interface design and
                      validation are shaped as one continuous system. The aim
                      is simple: close the distance between a classifier and
                      a tool a person can actually operate.
                    </p>

                    <span className={`${styles.caseNote} ${styles.mono}`}>
                      A prediction matters when someone can act on it.
                    </span>
                  </div>

                  <a
                    className={`${styles.textLink} ${styles.mono}`}
                    href="https://youtu.be/2OeqBKF3X_A"
                    target="_blank"
                    rel="noopener"
                  >
                    WATCH THE WORK ↗
                  </a>
                </div>

                <aside className={styles.caseAside}>
                  <div className={styles.metric}>
                    99%

                    <small>
                      FOUR-CLASS CLASSIFICATION
                    </small>
                  </div>

                  <div className={styles.specs}>
                    <strong className={styles.whiteSpec}>
                      EVIDENCE
                    </strong>
                    <br />
                    DICOM MRI pipeline
                    <br />
                    <br />
                    PyQt5 clinical application
                    <br />
                    Radiologist validation
                  </div>
                </aside>
              </div>

              <div className={styles.caseSymbol}>
                02
              </div>
            </article>

            {/* =====================================================
                PROJECT 03 — TREATMENT DRL
            ===================================================== */}
            <article
              className={`${styles.case} ${styles.reveal}`}
            >
              <div className={`${styles.caseHead} ${styles.mono}`}>
                <span className={styles.type}>
                  03 · DEEP RL / HEALTHCARE
                </span>

                <span className={styles.number}>
                  TREATMENT DRL
                </span>
              </div>

              <div className={styles.caseBody}>
                <div className={styles.caseMain}>
                  <div>
                    <div className={`${styles.eyebrow} ${styles.mono}`}>
                      STATE → DECISION → SAFETY
                    </div>

                    <h3>
                      When treatment
                      <br />
                      becomes a <em>decision.</em>
                    </h3>

                    <p className={styles.caseCopy}>
                      A reinforcement-learning system for ICU treatment
                      timing using MIMIC-III. The work frames treatment timing
                      as a sequence of decisions, connecting state design,
                      reward construction, an A2C policy and a safety layer
                      before an RL agent reaches a clinical recommendation.
                    </p>

                    <span className={`${styles.caseNote} ${styles.mono}`}>
                      A research question shaped into a sequence of
                      decisions.
                    </span>
                  </div>

                  <a
                    className={`${styles.textLink} ${styles.mono}`}
                    href="https://github.com/RYANX9/medical-treatment-drl/"
                    target="_blank"
                    rel="noopener"
                  >
                    EXPLORE THE RESEARCH ↗
                  </a>
                </div>

                <aside className={styles.caseAside}>
                  <div className={styles.metric}>
                    99.5%

                    <small>
                      CLINICAL APPROPRIATENESS
                    </small>
                  </div>

                  <div className={styles.specs}>
                    <strong className={styles.inkSpec}>
                      METHOD
                    </strong>
                    <br />
                    MIMIC-III
                    <br />
                    A2C agent
                    <br />
                    Custom safety filter
                    <br />
                    26-D Gym environment
                  </div>
                </aside>
              </div>

              <div className={styles.caseSymbol}>
                03
              </div>
            </article>

            {/* =====================================================
                OTHER WORK / 04—10
            ===================================================== */}
            <section
              className={`${styles.archive} ${styles.reveal}`}
            >
              <header className={styles.archiveHead}>
                <div>
                  <div className={`${styles.mono} ${styles.violet}`}>
                    OTHER WORK / 04—10
                  </div>

                  <h3>
                    Further <em>work.</em>
                  </h3>
                </div>

                <p>
                  Not everything needs the same scale. These pieces stay
                  concise, but each one marks a different way of thinking,
                  testing or building.
                </p>
              </header>

              <div className={styles.archiveList}>
                {/* 04 */}
                <details
                  ref={(element) => {
                    archiveRefs.current[0] = element;
                  }}
                  className={styles.archiveItem}
                  onToggle={() => handleArchiveToggle(0)}
                >
                  <summary>
                    <span
                      className={`${styles.archiveNo} ${styles.mono}`}
                    >
                      04
                    </span>

                    <span
                      className={`${styles.archiveType} ${styles.mono}`}
                    >
                      MACHINE LEARNING / REASONING
                    </span>

                    <span className={styles.archiveTitle}>
                      Find the <em>drivers.</em>
                    </span>

                    <span className={styles.archiveToggle}>
                      +
                    </span>
                  </summary>

                  <div className={styles.archiveDetail}>
                    <span className={styles.archiveMark}>
                      04
                    </span>

                    <p>
                      Healthcare cost prediction shaped to show its
                      reasoning: Conv1D modelling, 47 engineered features
                      and SHAP analysis make the drivers behind the
                      prediction easier to inspect.
                    </p>

                    <a
                      className={styles.mono}
                      href="https://github.com/RYANX9/healthcare-cost-prediction"
                      target="_blank"
                      rel="noopener"
                    >
                      VIEW WORK ↗
                    </a>
                  </div>
                </details>

                {/* 05 */}
                <details
                  ref={(element) => {
                    archiveRefs.current[1] = element;
                  }}
                  className={styles.archiveItem}
                  onToggle={() => handleArchiveToggle(1)}
                >
                  <summary>
                    <span
                      className={`${styles.archiveNo} ${styles.mono}`}
                    >
                      05
                    </span>

                    <span
                      className={`${styles.archiveType} ${styles.mono}`}
                    >
                      RESEARCH / DIAGNOSTICS
                    </span>

                    <span className={styles.archiveTitle}>
                      One interface. Five <em>diseases.</em>
                    </span>

                    <span className={styles.archiveToggle}>
                      +
                    </span>
                  </summary>

                  <div className={styles.archiveDetail}>
                    <span className={styles.archiveMark}>
                      05
                    </span>

                    <p>
                      An M.Sc. thesis shaped as one diagnostic application:
                      model selection, inference and user interaction brought
                      together instead of left as separate notebooks.
                    </p>

                    <a
                      className={styles.mono}
                      href="https://youtu.be/kh7WBjNPpEM"
                      target="_blank"
                      rel="noopener"
                    >
                      WATCH THE WORK ↗
                    </a>
                  </div>
                </details>

                {/* 06 */}
                <details
                  ref={(element) => {
                    archiveRefs.current[2] = element;
                  }}
                  className={styles.archiveItem}
                  onToggle={() => handleArchiveToggle(2)}
                >
                  <summary>
                    <span
                      className={`${styles.archiveNo} ${styles.mono}`}
                    >
                      06
                    </span>

                    <span
                      className={`${styles.archiveType} ${styles.mono}`}
                    >
                      PRODUCT / DECISION TOOLS
                    </span>

                    <span className={styles.archiveTitle}>
                      Find the right <em>machine.</em>
                    </span>

                    <span className={styles.archiveToggle}>
                      +
                    </span>
                  </summary>

                  <div className={styles.archiveDetail}>
                    <span className={styles.archiveMark}>
                      06
                    </span>

                    <p>
                      Specmob turns structured smartphone specifications into
                      a decision surface: search, filtering, comparison and
                      guided recommendation in one place.
                    </p>

                    <a
                      className={styles.mono}
                      href="https://specmob.vercel.app"
                      target="_blank"
                      rel="noopener"
                    >
                      OPEN LIVE SITE ↗
                    </a>
                  </div>
                </details>

                {/* 07 */}
                <details
                  ref={(element) => {
                    archiveRefs.current[3] = element;
                  }}
                  className={styles.archiveItem}
                  onToggle={() => handleArchiveToggle(3)}
                >
                  <summary>
                    <span
                      className={`${styles.archiveNo} ${styles.mono}`}
                    >
                      07
                    </span>

                    <span
                      className={`${styles.archiveType} ${styles.mono}`}
                    >
                      EXPERIMENT / DEEP RL
                    </span>

                    <span className={styles.archiveTitle}>
                      The useful <em>failure.</em>
                    </span>

                    <span className={styles.archiveToggle}>
                      +
                    </span>
                  </summary>

                  <div className={styles.archiveDetail}>
                    <span className={styles.archiveMark}>
                      07
                    </span>

                    <p>
                      PPO/A2C did not beat a simple SMA strategy. That was the
                      useful part of the experiment: added complexity did not
                      guarantee a better strategy in noisy, non-stationary
                      markets.
                    </p>

                    <a
                      className={styles.mono}
                      href="https://github.com/RYANX9/deep-rl-trading"
                      target="_blank"
                      rel="noopener"
                    >
                      SEE THE EXPERIMENT ↗
                    </a>
                  </div>
                </details>

                {/* 08 */}
                <details
                  ref={(element) => {
                    archiveRefs.current[4] = element;
                  }}
                  className={styles.archiveItem}
                  onToggle={() => handleArchiveToggle(4)}
                >
                  <summary>
                    <span
                      className={`${styles.archiveNo} ${styles.mono}`}
                    >
                      08
                    </span>

                    <span
                      className={`${styles.archiveType} ${styles.mono}`}
                    >
                      SOFTWARE / EVERYDAY SYSTEM
                    </span>

                    <span className={styles.archiveTitle}>
                      Life, <em>structured.</em>
                    </span>

                    <span className={styles.archiveToggle}>
                      +
                    </span>
                  </summary>

                  <div className={styles.archiveDetail}>
                    <span className={styles.archiveMark}>
                      08
                    </span>

                    <p>
                      A personal productivity system for tasks, budgets,
                      streaks, reminders and notes, with PostgreSQL state and
                      web push reminders shaped around everyday use.
                    </p>

                    <a
                      className={styles.mono}
                      href="https://github.com/RYANX9/rystudio"
                      target="_blank"
                      rel="noopener"
                    >
                      VIEW WORK ↗
                    </a>
                  </div>
                </details>

                {/* 09 */}
                <details
                  ref={(element) => {
                    archiveRefs.current[5] = element;
                  }}
                  className={styles.archiveItem}
                  onToggle={() => handleArchiveToggle(5)}
                >
                  <summary>
                    <span
                      className={`${styles.archiveNo} ${styles.mono}`}
                    >
                      09
                    </span>

                    <span
                      className={`${styles.archiveType} ${styles.mono}`}
                    >
                      SOFTWARE / VERSIONED CONTENT
                    </span>

                    <span className={styles.archiveTitle}>
                      Ship without a <em>database.</em>
                    </span>

                    <span className={styles.archiveToggle}>
                      +
                    </span>
                  </summary>

                  <div className={styles.archiveDetail}>
                    <span className={styles.archiveMark}>
                      09
                    </span>

                    <p>
                      A client portfolio whose admin panel writes directly to
                      the repository through the GitHub Contents API, keeping
                      git as the source of truth and every edit as a real,
                      versioned commit.
                    </p>

                    <a
                      className={styles.mono}
                      href="https://zaid-saad.vercel.app"
                      target="_blank"
                      rel="noopener"
                    >
                      VISIT SITE ↗
                    </a>
                  </div>
                </details>

                {/* 10 */}
                <details
                  ref={(element) => {
                    archiveRefs.current[6] = element;
                  }}
                  className={styles.archiveItem}
                  onToggle={() => handleArchiveToggle(6)}
                >
                  <summary>
                    <span
                      className={`${styles.archiveNo} ${styles.mono}`}
                    >
                      10
                    </span>

                    <span
                      className={`${styles.archiveType} ${styles.mono}`}
                    >
                      SOFTWARE / SELF-PORTRAIT
                    </span>

                    <span className={styles.archiveTitle}>
                      A surface that carries the <em>work.</em>
                    </span>

                    <span className={styles.archiveToggle}>
                      +
                    </span>
                  </summary>

                  <div className={styles.archiveDetail}>
                    <span className={styles.archiveMark}>
                      10
                    </span>

                    <p>
                      This portfolio turns the same principle inward:
                      content, interface and deployment shaped as one
                      connected surface.
                    </p>

                    <a
                      className={styles.mono}
                      href="#contact"
                    >
                      FOLLOW THE THREAD ↘
                    </a>
                  </div>
                </details>
              </div>
            </section>
          </div>
        </section>

        {/* =========================================================
            SYSTEM STRIP
        ========================================================= */}
        <section
          className={styles.systemStrip}
          aria-label="Working method"
        >
          <div className={`${styles.systemInner} ${styles.mono}`}>
            <div className={styles.systemCell}>
              <span>01</span>
              <strong>QUESTION</strong>
            </div>

            <div
              className={`${styles.systemCell} ${styles.systemCenter}`}
            >
              <span>THE THROUGH-LINE</span>
              <strong>QUESTION → MODEL → USE</strong>
            </div>

            <div className={styles.systemCell}>
              <span>02</span>
              <strong>MAKE USEFUL</strong>
            </div>
          </div>
        </section>

        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section
          className={`${styles.about} ${styles.container} ${styles.reveal}`}
          id="about"
        >
          <div className={styles.aboutGrid}>
            <h2 className={styles.aboutTitle}>
              Between
              <br />
              <em>thought &amp; use.</em>
            </h2>

            <div>
              <p className={styles.aboutLead}>
                I work in the space between a difficult question and the
                system built to answer it.
              </p>

              <p className={styles.aboutBody}>
                My practice moves between AI/ML research, medical imaging,
                decision support and full-stack engineering. Data, model
                architecture, evaluation, interfaces, APIs, databases and
                deployment are different parts of the same process — taking
                an idea far enough that someone can inspect it, operate it
                and trust what it is doing.
              </p>

              <div className={styles.facts}>
                <div className={styles.fact}>
                  <strong>2023</strong>
                  <span>
                    M.Sc. Electronics of Embedded Systems — Université
                    Mohamed Boudiaf de M&apos;sila
                  </span>
                </div>

                <div className={styles.fact}>
                  <strong>FOCUS</strong>
                  <span>
                    Medical AI / computer vision / deep reinforcement
                    learning / clinical decision support
                  </span>
                </div>

                <div className={styles.fact}>
                  <strong>IN PRACTICE</strong>
                  <span>
                    AIRM contract / Hemolab contract / shipped software
                    systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT
        ========================================================= */}
        <section className={styles.contact} id="contact">
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <h2>
                Bring the
                <br />
                hard question. <em>Let&apos;s work.</em>
              </h2>

              <div className={styles.contactCopy}>
                <p>
                  Research, engineering, product work, or a problem that does
                  not fit neatly inside one discipline. The interesting work
                  usually begins where the boundaries stop being useful.
                </p>

                <a
                  className={styles.contactMail}
                  href="mailto:ahmed.messaad@outlook.com"
                >
                  ahmed.messaad@outlook.com
                </a>
              </div>
            </div>

            <footer className={`${styles.footer} ${styles.mono}`}>
              <span>
                AM / 2026 · ALGERIA · INTELLIGENCE / SYSTEMS / RESEARCH
              </span>

              <div className={styles.footerLinks}>
                <a
                  href="https://github.com/RYANX9"
                  target="_blank"
                  rel="noopener"
                >
                  GITHUB ↗
                </a>

                <a
                  href="https://linkedin.com/in/ahmedmessaad"
                  target="_blank"
                  rel="noopener"
                >
                  LINKEDIN ↗
                </a>

                <a
                  href="https://kaggle.com/ahmedmessaad"
                  target="_blank"
                  rel="noopener"
                >
                  KAGGLE ↗
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BrutalistPortfolio;
