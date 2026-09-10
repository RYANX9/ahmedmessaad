"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./editorial-portfolio.module.css";

const projects = [
  {
    number: "01",
    type: "MEDICAL AI / COMPUTER VISION",
    title: "HemaVision",
    intro:
      "A computer-vision system for hematology analysis from microscope imagery.",
    description:
      "The system combines object detection, segmentation and classification into a workflow designed for practical laboratory use. YOLOv8, U-Net and OpenCV are used across the processing pipeline.",
    facts: [
      ["97%", "MULTI-CLASS ACCURACY"],
      ["45 → 3", "MINUTES / ANALYSIS TIME"],
      ["YOLOv8", "OBJECT DETECTION"],
      ["U-Net", "SEGMENTATION"],
    ],
    linkLabel: "VIEW RESEARCH",
    link: "https://www.linkedin.com/in/ahmedmessaad/",
  },
  {
    number: "02",
    type: "MEDICAL IMAGING / DEEP LEARNING",
    title: "AIRM",
    intro:
      "A medical-imaging system for brain-tumor classification from MRI data.",
    description:
      "AIRM works with DICOM MRI data and a four-class classification pipeline. The research model reached around 99% accuracy and was developed into a PyQt5 application for practical experimentation.",
    facts: [
      ["~99%", "CLASSIFICATION ACCURACY"],
      ["04", "CLASSES"],
      ["DICOM", "MEDICAL IMAGING"],
      ["PyQt5", "APPLICATION"],
    ],
    linkLabel: "VIEW RESEARCH",
    link: "https://www.linkedin.com/in/ahmedmessaad/",
  },
  {
    number: "03",
    type: "REINFORCEMENT LEARNING / CLINICAL DECISION SUPPORT",
    title: "Treatment DRL",
    intro:
      "An experimental reinforcement-learning environment for treatment decisions in intensive-care data.",
    description:
      "Using MIMIC-III data, treatment timing is modeled as a sequential decision problem. An A2C agent operates inside a 26-dimensional environment with a custom safety filter.",
    facts: [
      ["MIMIC-III", "CLINICAL DATA"],
      ["A2C", "RL ALGORITHM"],
      ["26D", "STATE SPACE"],
      ["SAFETY", "FILTER"],
    ],
    linkLabel: "VIEW RESEARCH",
    link: "https://www.linkedin.com/in/ahmedmessaad/",
  },
  {
    number: "04",
    type: "PRODUCT / FULL-STACK ENGINEERING",
    title: "Specmob",
    intro:
      "A smartphone research platform designed to help people make better phone decisions.",
    description:
      "Specmob combines a phone catalogue with search, filtering, comparison, recommendation and scoring systems. The product is built with Next.js, FastAPI and PostgreSQL.",
    facts: [
      ["NEXT.JS", "FRONTEND"],
      ["FASTAPI", "BACKEND"],
      ["POSTGRESQL", "DATABASE"],
      ["SMART SCORE", "RANKING SYSTEM"],
    ],
    linkLabel: "VISIT SPECMOB",
    link: "https://specmob.vercel.app/",
  },
];

const experiments = [
  {
    number: "05",
    title: "Healthcare Cost Prediction",
    meta: "MACHINE LEARNING / EXPLAINABILITY",
    text:
      "A Conv1D prediction system using 47 engineered features, with SHAP used to expose which variables influenced the model.",
    result: "R² 0.88",
  },
  {
    number: "06",
    title: "My Daily Health",
    meta: "MEDICAL AI / MASTER'S THESIS",
    text:
      "A multi-disease diagnostic platform developed as the foundation of the master's research work, exploring multiple disease areas and deep-learning architectures.",
    result: "5 DISEASE AREAS",
  },
  {
    number: "07",
    title: "Crypto Trading",
    meta: "DEEP REINFORCEMENT LEARNING / EXPERIMENT",
    text:
      "An experiment comparing PPO and A2C against a simpler SMA strategy, exploring where reinforcement learning does and does not make sense in noisy markets.",
    result: "RL VS BASELINE",
  },
  {
    number: "08",
    title: "Day Tracker",
    meta: "PRODUCT ENGINEERING",
    text:
      "A personal productivity system combining tasks, budgets, streaks, reminders and notes around a PostgreSQL-backed application.",
    result: "FULL-STACK SYSTEM",
  },
  {
    number: "09",
    title: "Git-Backed CMS",
    meta: "SOFTWARE ENGINEERING",
    text:
      "An administrative publishing system using GitHub as the source of truth, with a dashboard built around the GitHub Contents API.",
    result: "GITHUB API",
  },
];

const researchAreas = [
  "MEDICAL AI",
  "COMPUTER VISION",
  "DEEP LEARNING",
  "REINFORCEMENT LEARNING",
];

const additionalAreas = [
  "MEDICAL IMAGING",
  "CLINICAL DECISION SUPPORT",
];

const stack = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "OpenCV",
];

export function EditorialPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        documentHeight > 0 ? window.scrollY / documentHeight : 0
      );

      const sectionIds = [
        "top",
        "work",
        "experiments",
        "profile",
        "contact",
      ];

      let current = "top";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (
          element &&
          window.scrollY >= element.offsetTop - window.innerHeight * 0.3
        ) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!cursorRef.current || window.innerWidth < 1000) {
        return;
      }

      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className={styles.page}>
      <div
        className={styles.progress}
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />

      <div
        ref={cursorRef}
        className={styles.cursor}
        aria-hidden="true"
      />

      {/* NAVIGATION */}

      <header className={styles.header}>
        <button
          className={styles.brand}
          onClick={() => scrollTo("top")}
          type="button"
          aria-label="Go to top"
        >
          AHMED MESSAAD
        </button>

        <nav className={styles.desktopNavigation}>
          <button
            className={
              activeSection === "work" ? styles.navigationActive : ""
            }
            onClick={() => scrollTo("work")}
            type="button"
          >
            WORK
          </button>

          <button
            className={
              activeSection === "profile" ? styles.navigationActive : ""
            }
            onClick={() => scrollTo("profile")}
            type="button"
          >
            ABOUT
          </button>

          <button
            className={
              activeSection === "contact" ? styles.navigationActive : ""
            }
            onClick={() => scrollTo("contact")}
            type="button"
          >
            CONTACT
          </button>
        </nav>

        <button
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </header>

      {/* MOBILE NAVIGATION */}

      <div
        className={`${styles.mobileNavigation} ${
          menuOpen ? styles.mobileNavigationOpen : ""
        }`}
      >
        <button onClick={() => scrollTo("work")} type="button">
          WORK
        </button>

        <button onClick={() => scrollTo("profile")} type="button">
          ABOUT
        </button>

        <button onClick={() => scrollTo("contact")} type="button">
          CONTACT
        </button>
      </div>

      {/* HERO */}

      <section id="top" className={styles.hero}>
        <div className={styles.heroTop}>
          <span>AI / ML ENGINEER</span>
          <span>RESEARCHER</span>
        </div>

        <div className={styles.heroIndex}>00 / POSITION</div>

        <div className={styles.heroMain}>
          <h1 className={styles.heroTitle}>
            I build
            <br />
            <em>intelligent</em>
            <br />
            systems.
          </h1>

          <div className={styles.heroDescription}>
            <p>
              Researching, engineering and deploying intelligent systems
              across medicine, computer vision and software.
            </p>
          </div>
        </div>

        <div className={styles.heroFields}>
          {researchAreas.map((area, index) => (
            <div className={styles.heroField} key={area}>
              <span>0{index + 1}</span>
              <span>{area}</span>
            </div>
          ))}
        </div>

        <button
          className={styles.heroScroll}
          onClick={() => scrollTo("work")}
          type="button"
        >
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </button>
      </section>

      {/* APPROACH */}

      <section className={styles.approach}>
        <div className={styles.approachNumber}>—</div>

        <div className={styles.approachContent}>
          <p className={styles.kicker}>THE APPROACH</p>

          <h2>
            Models are
            <br />
            only the
            <br />
            <em>beginning.</em>
          </h2>

          <div className={styles.approachText}>
            <p>
              My work sits between research and implementation: understanding
              a problem, building the model, testing it against reality, and
              turning the result into something usable.
            </p>

            <p>
              Most of my research has focused on healthcare — medical
              imaging, clinical decision support, and machine-learning
              systems designed around real-world constraints.
            </p>
          </div>

          <div className={styles.approachTags}>
            <span>RESEARCH</span>
            <span>/</span>
            <span>ENGINEERING</span>
            <span>/</span>
            <span>EXPERIMENTATION</span>
          </div>
        </div>
      </section>

      {/* WORK */}

      <section id="work" className={styles.work}>
        <div className={styles.sectionIntro}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>01</span>
            <span className={styles.sectionLabel}>SELECTED WORK</span>
          </div>

          <p className={styles.sectionDescription}>
            Research projects, intelligent systems
            <br />
            and products built from the ground up.
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.project} key={project.number}>
              <div className={styles.projectRail}>
                <span>{project.number}</span>
              </div>

              <div className={styles.projectBody}>
                <div className={styles.projectMeta}>
                  <span>{project.type}</span>
                  <span>{project.number} / 04</span>
                </div>

                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <p className={styles.projectIntro}>
                  {project.intro}
                </p>

                <div className={styles.projectDetails}>
                  <div className={styles.projectDescription}>
                    <span className={styles.detailLabel}>
                      PROJECT / DETAILS ↗
                    </span>

                    <p>{project.description}</p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.projectLink}
                    >
                      <span>{project.linkLabel}</span>
                      <span>↗</span>
                    </a>
                  </div>

                  <div className={styles.projectFacts}>
                    {project.facts.map(([value, label]) => (
                      <div className={styles.projectFact} key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESEARCH */}

      <section className={styles.research}>
        <div className={styles.researchRail}>
          <span className={styles.sectionNumber}>—</span>
          <span className={styles.sectionLabel}>RESEARCH FIELD</span>
        </div>

        <div className={styles.researchContent}>
          <p className={styles.kicker}>WHERE THE WORK LIVES</p>

          <h2>
            Research when
            <br />
            the problem
            <br />
            <em>deserves it.</em>
          </h2>

          <div className={styles.researchList}>
            {[...researchAreas, ...additionalAreas].map((area, index) => (
              <div className={styles.researchRow} key={area}>
                <span>0{index + 1}</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIMENTS */}

      <section id="experiments" className={styles.experiments}>
        <div className={styles.sectionIntro}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>02</span>
            <span className={styles.sectionLabel}>
              EXPERIMENTS / BUILDS
            </span>
          </div>

          <p className={styles.sectionDescription}>
            Not everything needs a case study.
            <br />
            Some work is here because it taught me something.
          </p>
        </div>

        <div className={styles.experimentList}>
          {experiments.map((experiment) => (
            <article
              className={styles.experiment}
              key={experiment.number}
            >
              <span className={styles.experimentNumber}>
                {experiment.number}
              </span>

              <div className={styles.experimentName}>
                <span>{experiment.meta}</span>
                <h3>{experiment.title}</h3>
              </div>

              <p className={styles.experimentText}>
                {experiment.text}
              </p>

              <strong className={styles.experimentResult}>
                {experiment.result}
              </strong>
            </article>
          ))}
        </div>
      </section>

      {/* TOOLS */}

      <section className={styles.tools}>
        <div className={styles.toolsIntro}>
          <span className={styles.sectionNumber}>—</span>

          <div>
            <p className={styles.kicker}>TOOLS</p>

            <h2>
              Enough
              <br />
              to build
              <br />
              <em>the thing.</em>
            </h2>
          </div>
        </div>

        <div className={styles.toolsList}>
          {stack.map((item, index) => (
            <div className={styles.toolRow} key={item}>
              <span>0{index + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROFILE */}

      <section id="profile" className={styles.profile}>
        <div className={styles.sectionIntro}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>03</span>
            <span className={styles.sectionLabel}>ABOUT</span>
          </div>

          <p className={styles.sectionDescription}>
            Researcher by training.
            <br />
            Builder by practice.
          </p>
        </div>

        <div className={styles.profileGrid}>
          <div className={styles.profileLead}>
            <h2>
              Ahmed
              <br />
              Messaad
            </h2>

            <p>
              AI / ML engineer, researcher and full-stack developer focused
              on intelligent systems with real-world applications.
            </p>
          </div>

          <div className={styles.profileInformation}>
            <div className={styles.profileBlock}>
              <span>EDUCATION</span>

              <p>
                M.Sc. Electronics of Embedded Systems
                <br />
                Université Mohamed Boudiaf de M&apos;sila
                <br />
                2023
              </p>
            </div>

            <div className={styles.profileBlock}>
              <span>FOCUS</span>

              <p>
                Medical AI
                <br />
                Computer Vision
                <br />
                Deep Learning
                <br />
                Clinical Decision Support
              </p>
            </div>

            <div className={styles.profileBlock}>
              <span>WORK</span>

              <p>
                Medical AI systems
                <br />
                Research prototypes
                <br />
                Full-stack products
                <br />
                Applied machine learning
              </p>
            </div>

            <div className={styles.profileBlock}>
              <span>RECOGNITION</span>

              <p>
                Research award
                <br />
                Academic recognitions
                <br />
                Clinical collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section id="contact" className={styles.contact}>
        <div className={styles.contactHeader}>
          <span className={styles.sectionNumber}>04</span>
          <span className={styles.sectionLabel}>CONTACT</span>
        </div>

        <div className={styles.contactContent}>
          <p className={styles.kicker}>
            OPEN TO RESEARCH · ENGINEERING
          </p>

          <h2>
            Let&apos;s build
            <br />
            something
            <br />
            <em>useful.</em>
          </h2>

          <a
            href="mailto:ahmed.messaad@outlook.com"
            className={styles.email}
          >
            ahmed.messaad@outlook.com
            <span>↗</span>
          </a>
        </div>

        <footer className={styles.footer}>
          <span>AHMED MESSAAD</span>

          <div className={styles.footerLinks}>
            <a
              href="https://www.linkedin.com/in/ahmedmessaad/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>

            <a
              href="https://github.com/RYANX9"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://ahmed-messaad.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              PORTFOLIO
            </a>
          </div>

          <span>© 2026</span>
        </footer>
      </section>
    </main>
  );
}

export default EditorialPortfolio;
