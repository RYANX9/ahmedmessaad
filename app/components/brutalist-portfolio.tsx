"use client";

import React from "react";
import styles from "./brutalist-portfolio.module.css";

const HERO_IMAGE = "/images/ahmed-hero.png";

const secondaryWork = [
  {
    number: "04",

    title: "Healthcare Cost Prediction",
    category: "MACHINE LEARNING",
    description:
      "A healthcare cost prediction system built around 47 engineered features, a Conv1D model, and SHAP-based interpretation. The work reached an R² of 0.88 while keeping the reasoning around the prediction visible.",
    result: "R² 0.88",
    link: "https://github.com/RYANX9/healthcare-cost-prediction",
    linkLabel: "VIEW REPOSITORY",
  },
  {
    number: "05",
    title: "Multi-Disease Diagnostic Platform",
    category: "M.SC. THESIS",
    description:
      "A multi-disease diagnostic platform developed as an M.Sc. thesis, covering five disease categories and combining machine learning with a usable diagnostic interface.",
    result: "90–99%",
    link: "https://youtu.be/kh7WBjNPpEM",
    linkLabel: "WATCH DEMO",
  },
  {
    number: "06",
    title: "Specmob",
    category: "FULL-STACK PRODUCT",
    description:
      "A focused product-search experience for smartphone specifications. Search, filtering, comparison and recommendations are brought into one fast interface.",
    result: "NEXT.JS",
    link: "https://specmob.vercel.app",
    linkLabel: "OPEN SPECmob",
  },
  {
    number: "07",
    title: "Deep RL Trading",
    category: "REINFORCEMENT LEARNING",
    description:
      "An experiment with PPO and A2C trading agents. The important result was not a stronger strategy, but the opposite: in a noisy, non-stationary market, added algorithmic complexity did not automatically beat a simple SMA baseline.",
    result: "PPO / A2C",
    link: "https://github.com/RYANX9/deep-rl-trading",
    linkLabel: "VIEW REPOSITORY",
  },
  {
    number: "08",
    title: "Day Tracker",
    category: "PERSONAL SYSTEM",
    description:
      "A personal productivity system combining tasks, budgets, streaks, reminders and notes. Built around PostgreSQL with web-push notifications and a practical day-to-day workflow.",
    result: "POSTGRESQL",
    link: "https://github.com/RYANX9/rystudio",
    linkLabel: "VIEW REPOSITORY",
  },
  {
    number: "09",
    title: "Git-Backed CMS",
    category: "SOFTWARE SYSTEM",
    description:
      "An administrative interface where content changes are committed directly to a Git repository through the GitHub Contents API. Git remains the source of truth instead of introducing a separate database.",
    result: "GIT AS SOURCE",
    link: "https://zaid-saad.vercel.app",
    linkLabel: "OPEN PROJECT",
  },
  {
    number: "10",
    title: "Portfolio Infrastructure",
    category: "WEB / SYSTEM DESIGN",
    description:
      "The infrastructure behind the portfolio itself: multiple visual modes, component-based architecture and a system designed to let the same body of work be experienced through different interfaces.",
    result: "NEXT.JS",
    link: "https://github.com/RYANX9",
    linkLabel: "GITHUB",
  },
];

const capabilities = [
  "AI / ML",
  "Computer Vision",
  "Medical Imaging",
  "Deep Reinforcement Learning",
  "Clinical Decision Support",
  "Full-Stack Engineering",
  "Research",
  "Applied Systems",
];

export function BrutalistPortfolio() {
  return (
    <main className={styles.page}>
      {/* =========================================================
          TOP BAR
      ========================================================= */}
      <header className={styles.topbar}>
        <a href="#top" className={styles.logo} aria-label="Ahmed Messaad home">
          AM<span className={styles.logoDot}>.</span>
        </a>

        <div className={styles.topbarCenter}>
          <span>AI / ML ENGINEER</span>
          <span className={styles.topbarSlash}>/</span>
          <span>RESEARCHER</span>
          <span className={styles.topbarSlash}>/</span>
          <span>FULL-STACK</span>
        </div>

        <a href="#contact" className={styles.topbarLink}>
          CONTACT <span>↘</span>
        </a>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section id="top" className={styles.hero}>
        <div className={styles.heroGrid} />

        <div className={styles.heroMeta}>
          <span>ALGERIA</span>
          <span>2026</span>
          <span>01 / 10</span>
        </div>

        <div className={styles.heroStatement}>
          <div className={styles.heroKicker}>
            <span className={styles.heroKickerMark}>+</span>
            <span>BUILDING SYSTEMS FROM HARD QUESTIONS</span>
          </div>

          <h1 className={styles.heroTitle}>
            I TURN
            <br />
            DIFFICULT
            <br />
            <span className={styles.heroTitleOutline}>QUESTIONS</span>
            <br />
            INTO
            <br />
            SYSTEMS<span className={styles.heroTitleDot}>.</span>
          </h1>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroVisualFrame}>
            <div className={`${styles.heroCross} ${styles.heroCrossTop}`}>+</div>
            <div className={`${styles.heroCross} ${styles.heroCrossBottom}`}>+</div>

            <div className={styles.heroImageWrap}>
              <img
                src={HERO_IMAGE}
                alt="Ahmed Messaad — AI, research and systems"
                className={styles.heroImage}
              />
            </div>

            <div className={styles.heroCircle} />
            <div className={styles.heroTarget}>
              <span />
            </div>

            <div className={styles.heroImageLabel}>
              <span>AM / 01</span>
              <span>INTELLIGENCE → USE</span>
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.heroBottomBlock}>
            <span className={styles.microLabel}>WORKING METHOD</span>
            <strong>
              OBSERVE.
              <br />
              MODEL.
              <br />
              MAKE USEFUL.
            </strong>
          </div>

          <div className={styles.heroBottomBlock}>
            <span className={styles.microLabel}>THE IDEA IN MOTION</span>
            <strong>
              QUESTION
              <br />
              → INTELLIGENCE
              <br />
              → CONSEQUENCE
            </strong>
          </div>

          <div className={styles.heroBottomText}>
            <p>
              Stay close to the real problem. Let the work determine the form.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / STATEMENT
      ========================================================= */}
      <section className={styles.statementSection}>
        <div className={styles.sectionNumber}>01</div>

        <div className={styles.statementMain}>
          <p className={styles.statementEyebrow}>A PRACTICE BETWEEN</p>

          <h2>
            THOUGHT
            <br />
            <span>AND USE.</span>
          </h2>

          <div className={styles.statementCopy}>
            <p>
              I work in the space between a difficult question and the system
              built to answer it.
            </p>

            <p>
              AI/ML, medical imaging, decision support and full-stack
              engineering are not separate boxes here. They are parts of the
              same process: understand the problem, shape the intelligence,
              then give it somewhere useful to live.
            </p>
          </div>
        </div>

        <div className={styles.statementSide}>
          <div className={styles.sideCross}>×</div>
          <span>METHOD / 001</span>
          <span>RESEARCH → ENGINEERING</span>
          <span>MODEL → INTERFACE</span>
          <span>QUESTION → SYSTEM</span>
        </div>
      </section>

      {/* =========================================================
          SYSTEM STRIP
      ========================================================= */}
      <section className={styles.systemStrip} aria-label="Working method">
        <div className={styles.systemItem}>
          <span>01</span>
          <strong>QUESTION</strong>
        </div>

        <div className={styles.systemArrow}>→</div>

        <div className={styles.systemItem}>
          <span>02</span>
          <strong>MODEL</strong>
        </div>

        <div className={styles.systemArrow}>→</div>

        <div className={styles.systemItem}>
          <span>03</span>
          <strong>MAKE USEFUL</strong>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================= */}
      <section id="work" className={styles.workSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              SELECTED WORK / 01—03
            </span>
            <h2>SELECTED WORK<span>.</span></h2>
          </div>

          <p>
            Three pieces are given room to breathe because they show the
            clearest range of the practice. The rest stay lighter: experiments,
            products and smaller systems that still reveal how I think and
            build.
          </p>
        </div>

        {/* =====================================================
            PROJECT 01 — HEMAVISION
        ===================================================== */}
        <article className={`${styles.project} ${styles.projectLarge}`}>
          <div className={styles.projectIndex}>01</div>

          <div className={styles.projectMain}>
            <div className={styles.projectTopline}>
              <span>MEDICAL AI</span>
              <span>COMPUTER VISION</span>
              <span>01 / 03</span>
            </div>

            <div className={styles.projectHeroBlock}>
              <div className={styles.projectNumberGraphic}>
                <span>01</span>
              </div>

              <div>
                <p className={styles.projectKicker}>HEMAVISION</p>
                <h3>
                  SEE THE
                  <br />
                  BLOOD.
                  <br />
                  <span>READ THE SIGNAL.</span>
                </h3>
              </div>
            </div>

            <div className={styles.projectDescription}>
              <p>
                HemaVision brings microscope imagery into a structured
                diagnostic workflow. Computer vision classifies blood-cell
                imagery, while the surrounding application makes those results
                easier to inspect and use.
              </p>

              <p>
                The system was validated by a practicing clinical hematologist,
                then featured on BBC News Arabic&apos;s 4Tech program.
              </p>
            </div>

            <div className={styles.projectFooter}>
              <a
                href="https://www.bbc.com/arabic"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                SEE THE WORK <span>↗</span>
              </a>

              <span className={styles.projectStatement}>
                THE INTELLIGENCE BELONGS
                <br />
                WHERE THE WORK HAPPENS.
              </span>
            </div>
          </div>

          <aside className={styles.projectAside}>
            <div className={styles.projectAsideLabel}>SIGNAL</div>

            <div className={styles.statBlock}>
              <strong>97%</strong>
              <span>MULTI-CLASS<br />ACCURACY</span>
            </div>

            <div className={styles.statBlock}>
              <strong>45 → 3</strong>
              <span>MINUTES<br />DIAGNOSTIC TIME</span>
            </div>

            <div className={styles.techBlock}>
              <span>STACK</span>
              <p>
                YOLOv8
                <br />
                U-NET
                <br />
                OPENCV
                <br />
                PYTORCH
              </p>
            </div>

            <div className={styles.asideGraphic}>
              <div className={styles.asideCircle} />
              <div className={styles.asideCross}>+</div>
              <div className={styles.asideDot} />
            </div>
          </aside>
        </article>

        {/* =====================================================
            PROJECT 02 — AIRM
        ===================================================== */}
        <article className={`${styles.project} ${styles.projectLarge}`}>
          <div className={styles.projectIndex}>02</div>

          <div className={styles.projectMain}>
            <div className={styles.projectTopline}>
              <span>MEDICAL IMAGING</span>
              <span>CLINICAL TOOL</span>
              <span>02 / 03</span>
            </div>

            <div className={styles.projectHeroBlock}>
              <div className={styles.projectNumberGraphic}>
                <span>02</span>
              </div>

              <div>
                <p className={styles.projectKicker}>AIRM</p>
                <h3>
                  FROM
                  <br />
                  TRAINED MODEL
                  <br />
                  <span>TO WORKING TOOL.</span>
                </h3>
              </div>
            </div>

            <div className={styles.projectDescription}>
              <p>
                AIRM is a hospital-oriented MRI pipeline for four-class
                brain-tumor classification. The system handles DICOM data,
                preprocessing, inference, interface design and validation as
                one continuous workflow.
              </p>

              <p>
                The model reached 99% classification performance and was shaped
                into a PyQt5 clinical application, with validation from a
                radiologist.
              </p>
            </div>

            <div className={styles.projectFooter}>
              <a
                href="https://youtu.be/2OeqBKF3X_A"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                WATCH THE WORK <span>↗</span>
              </a>

              <span className={styles.projectStatement}>
                A PREDICTION MATTERS
                <br />
                WHEN SOMEONE CAN ACT ON IT.
              </span>
            </div>
          </div>

          <aside className={styles.projectAside}>
            <div className={styles.projectAsideLabel}>IMAGING</div>

            <div className={styles.statBlock}>
              <strong>99%</strong>
              <span>CLASSIFICATION<br />PERFORMANCE</span>
            </div>

            <div className={styles.statBlock}>
              <strong>04</strong>
              <span>BRAIN-TUMOR<br />CLASSES</span>
            </div>

            <div className={styles.techBlock}>
              <span>APPLICATION</span>
              <p>
                DICOM
                <br />
                PREPROCESSING
                <br />
                INFERENCE
                <br />
                PYQT5
              </p>
            </div>

            <div className={styles.asideGraphic}>
              <div className={styles.scanGraphic}>
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </aside>
        </article>

        {/* =====================================================
            PROJECT 03 — MEDICAL TREATMENT DRL
        ===================================================== */}
        <article className={`${styles.project} ${styles.projectLarge}`}>
          <div className={styles.projectIndex}>03</div>

          <div className={styles.projectMain}>
            <div className={styles.projectTopline}>
              <span>DEEP REINFORCEMENT LEARNING</span>
              <span>CLINICAL DECISION</span>
              <span>03 / 03</span>
            </div>

            <div className={styles.projectHeroBlock}>
              <div className={styles.projectNumberGraphic}>
                <span>03</span>
              </div>

              <div>
                <p className={styles.projectKicker}>MEDICAL TREATMENT DRL</p>
                <h3>
                  WHEN
                  <br />
                  TREATMENT
                  <br />
                  <span>BECOMES A DECISION.</span>
                </h3>
              </div>
            </div>

            <div className={styles.projectDescription}>
              <p>
                A sequential decision-making system for ICU treatment timing
                built with the MIMIC-III dataset. The research starts from a
                difficult question: how should an agent reason about treatment
                decisions that unfold over time?
              </p>

              <p>
                State design, reward construction, an A2C policy and a safety
                layer were brought together inside a 26-dimensional Gym
                environment.
              </p>
            </div>

            <div className={styles.projectFooter}>
              <a
                href="https://github.com/RYANX9/medical-treatment-drl/"
                target="_blank"
                rel="noreferrer"
                className={styles.projectLink}
              >
                EXPLORE THE RESEARCH <span>↗</span>
              </a>

              <span className={styles.projectStatement}>
                A RESEARCH QUESTION
                <br />
                SHAPED INTO DECISIONS.
              </span>
            </div>
          </div>

          <aside className={styles.projectAside}>
            <div className={styles.projectAsideLabel}>DECISION</div>

            <div className={styles.statBlock}>
              <strong>99.5%</strong>
              <span>CLINICAL<br />APPROPRIATENESS</span>
            </div>

            <div className={styles.statBlock}>
              <strong>26-D</strong>
              <span>GYM<br />ENVIRONMENT</span>
            </div>

            <div className={styles.techBlock}>
              <span>METHOD</span>
              <p>
                MIMIC-III
                <br />
                A2C
                <br />
                REWARD DESIGN
                <br />
                SAFETY LAYER
              </p>
            </div>

            <div className={styles.asideGraphic}>
              <div className={styles.decisionGraphic}>
                <span>STATE</span>
                <b>→</b>
                <span>ACTION</span>
                <b>→</b>
                <span>OUTCOME</span>
              </div>
            </div>
          </aside>
        </article>
      </section>

      {/* =========================================================
          FURTHER WORK
      ========================================================= */}
      <section className={styles.furtherSection}>
        <div className={styles.furtherHeader}>
          <div>
            <span className={styles.sectionEyebrow}>OTHER WORK / 04—10</span>
            <h2>
              FURTHER
              <br />
              WORK<span>.</span>
            </h2>
          </div>

          <p>
            Not everything needs the same scale. These pieces stay concise, but
            each one marks a different way of thinking, testing or building.
          </p>
        </div>

        <div className={styles.workList}>
          {secondaryWork.map((work) => (
            <details key={work.number} className={styles.workItem}>
              <summary className={styles.workSummary}>
                <span className={styles.workNumber}>{work.number}</span>

                <span className={styles.workTitle}>
                  <small>{work.category}</small>
                  {work.title}
                </span>

                <span className={styles.workResult}>{work.result}</span>

                <span className={styles.workToggle}>+</span>
              </summary>

              <div className={styles.workDetails}>
                <p>{work.description}</p>

                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.workLink}
                >
                  {work.linkLabel} <span>↗</span>
                </a>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.capabilitiesTop}>
          <span className={styles.sectionEyebrow}>THE TOOLBOX / 08</span>

          <span className={styles.capabilitiesMark}>×</span>

          <span className={styles.capabilitiesCode}>
            AM / ENGINEERING / RESEARCH
          </span>
        </div>

        <div className={styles.capabilitiesGrid}>
          <div className={styles.capabilitiesIntro}>
            <span>WHAT I WORK WITH</span>
            <p>
              Different tools, one underlying habit: get close enough to the
              problem that the implementation becomes obvious.
            </p>
          </div>

          <div className={styles.capabilitiesList}>
            {capabilities.map((capability, index) => (
              <div key={capability} className={styles.capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{capability}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutNumber}>09</div>

        <div className={styles.aboutMain}>
          <span className={styles.sectionEyebrow}>ABOUT / PRACTICE</span>

          <h2>
            BETWEEN
            <br />
            <span>THOUGHT</span>
            <br />
            &amp; USE.
          </h2>

          <p className={styles.aboutLead}>
            I am Ahmed Messaad — an AI/ML engineer, full-stack developer and
            researcher based in Algeria.
          </p>

          <div className={styles.aboutBody}>
            <p>
              My work sits across medical AI, computer vision, deep
              reinforcement learning, clinical decision support and software
              systems.
            </p>

            <p>
              I am interested in the part after the model: the interface, the
              workflow, the constraints, the validation and the people who
              eventually have to use what was built.
            </p>

            <p>
              The goal is not to make technology look impressive. The goal is
              to make difficult things understandable, testable and useful.
            </p>
          </div>
        </div>

        <aside className={styles.aboutAside}>
          <div className={styles.aboutEducation}>
            <span>EDUCATION</span>
            <strong>
              M.SC.
              <br />
              ELECTRONICS OF
              <br />
              EMBEDDED SYSTEMS
            </strong>
            <p>Université Mohamed Boudiaf de M&apos;sila · 2023</p>
          </div>

          <div className={styles.aboutApplied}>
            <span>APPLIED</span>
            <strong>
              MEDICAL AI
              <br />
              SOFTWARE
              <br />
              RESEARCH
            </strong>
          </div>
        </aside>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactGrid} />

        <div className={styles.contactTop}>
          <span>10 / 10</span>
          <span>LET&apos;S BUILD SOMETHING DIFFICULT</span>
        </div>

        <div className={styles.contactMain}>
          <span className={styles.contactKicker}>OPEN TO GOOD PROBLEMS</span>

          <h2>
            BRING THE
            <br />
            <span>HARD</span>
            <br />
            QUESTION.
          </h2>

          <p>
            Research, engineering, product work, or a problem that does not fit
            neatly inside one discipline. The interesting work usually begins
            where the boundaries stop being useful.
          </p>

          <a
            href="mailto:ahmed.messaad@outlook.com"
            className={styles.emailLink}
          >
            AHMED.MESSAAD@OUTLOOK.COM <span>↗</span>
          </a>
        </div>

        <div className={styles.contactGraphic}>
          <div className={styles.contactCircleOuter} />
          <div className={styles.contactCircleInner} />
          <div className={styles.contactCross}>+</div>
          <span>AM</span>
        </div>

        <div className={styles.contactBottom}>
          <span>ALGERIA / 2026</span>
          <span>AI / SYSTEMS / RESEARCH</span>
          <span>END / BEGIN</span>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span>AM</span>
          <strong>AHMED MESSAAD</strong>
        </div>

        <div className={styles.footerLinks}>
          <a
            href="https://github.com/RYANX9"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://linkedin.com/in/ahmedmessaad"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://kaggle.com/ahmedmessaad"
            target="_blank"
            rel="noreferrer"
          >
            KAGGLE ↗
          </a>
        </div>

        <div className={styles.footerMeta}>
          2026
          <br />
          ALGERIA
        </div>
      </footer>
    </main>
  );
}

export default BrutalistPortfolio;
