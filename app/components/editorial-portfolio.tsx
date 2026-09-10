"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./editorial-portfolio.module.css";

const projects = [
  {
    number: "01",
    type: "Medical AI / Computer Vision",
    title: "HemaVision",
    intro:
      "A computer-vision system for hematology analysis, built to reduce the distance between microscopic images and a usable clinical result.",
    description:
      "The system combines YOLOv8, U-Net and OpenCV to detect and segment blood-cell imagery before classification. The work reached 97% multi-class accuracy and reduced an analysis workflow from roughly 45 minutes to around 3 minutes.",
    facts: ["97% accuracy", "45 → 3 min", "YOLOv8 / U-Net", "PyTorch"],
    linkLabel: "View research",
    link: "https://www.linkedin.com/in/ahmedmessaad/",
  },
  {
    number: "02",
    type: "Medical Imaging / Deep Learning",
    title: "AIRM",
    intro:
      "A medical-imaging system for brain-tumor classification from MRI data, designed as a complete application rather than a model in isolation.",
    description:
      "AIRM works with DICOM MRI data and a four-class classification pipeline. The underlying model reached around 99% accuracy, while a PyQt5 application turned the research model into an interface suitable for practical experimentation.",
    facts: ["~99% accuracy", "4 classes", "DICOM / MRI", "PyTorch / PyQt5"],
    linkLabel: "View research",
    link: "https://www.linkedin.com/in/ahmedmessaad/",
  },
  {
    number: "03",
    type: "Deep Reinforcement Learning / Clinical Decision Support",
    title: "Treatment DRL",
    intro:
      "An experimental reinforcement-learning environment for studying treatment decisions in intensive-care data.",
    description:
      "Using MIMIC-III data, the system models treatment timing as a sequential decision problem. An A2C agent operates inside a 26-dimensional environment and is constrained by a custom safety filter designed to keep recommendations within clinically acceptable boundaries.",
    facts: ["MIMIC-III", "A2C", "26-dimensional state", "Safety filter"],
    linkLabel: "View research",
    link: "https://www.linkedin.com/in/ahmedmessaad/",
  },
  {
    number: "04",
    type: "Product / Full-stack Engineering",
    title: "Specmob",
    intro:
      "A smartphone research platform built around one question: how can a person make a better phone decision without being pushed toward a sponsored choice?",
    description:
      "Specmob combines a large phone catalogue with search, filtering, comparison, recommendation and scoring systems. The product is built with Next.js, FastAPI and PostgreSQL, with a published scoring methodology and a consistent Smart Score across the experience.",
    facts: ["Next.js", "FastAPI", "PostgreSQL", "Comparison + recommendation"],
    linkLabel: "Visit Specmob",
    link: "https://specmob.vercel.app/",
  },
];

const experiments = [
  {
    number: "05",
    title: "Healthcare Cost Prediction",
    meta: "Machine Learning / Explainability",
    text:
      "A Conv1D prediction system using 47 engineered features, with SHAP used to expose which variables influenced the model.",
    result: "R² 0.88",
  },
  {
    number: "06",
    title: "My Daily Health",
    meta: "Medical AI / Thesis",
    text:
      "A multi-disease diagnostic platform developed as the foundation of the master’s research work, exploring multiple disease areas and deep-learning architectures.",
    result: "5 disease areas",
  },
  {
    number: "07",
    title: "Crypto Trading",
    meta: "Deep Reinforcement Learning / Experiment",
    text:
      "An experiment comparing PPO and A2C against a simpler SMA strategy, exploring where reinforcement learning does — and does not — make sense in noisy markets.",
    result: "RL vs baseline",
  },
  {
    number: "08",
    title: "Day Tracker",
    meta: "Product Engineering",
    text:
      "A personal productivity system combining tasks, budgets, streaks, reminders and notes around a PostgreSQL-backed application.",
    result: "Full-stack system",
  },
  {
    number: "09",
    title: "Git-Backed CMS",
    meta: "Software Engineering",
    text:
      "An administrative publishing system using GitHub as the source of truth, with a dashboard built around the GitHub Contents API.",
    result: "GitHub API",
  },
];

const researchAreas = [
  "Medical AI",
  "Computer Vision",
  "Deep Learning",
  "Reinforcement Learning",
  "Medical Imaging",
  "Clinical Decision Support",
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

export default function EditorialPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(max > 0 ? window.scrollY / max : 0);

      const sections = ["top", "work", "experiments", "profile", "contact"];

      let current = "top";

      for (const id of sections) {
        const element = document.getElementById(id);

        if (element && window.scrollY >= element.offsetTop - 180) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      if (!cursorRef.current || window.innerWidth < 900) return;

      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    window.addEventListener("pointermove", handlePointer);

    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className={styles.page}>
      <div
        className={styles.progress}
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div ref={cursorRef} className={styles.cursor} />

      <header className={styles.header}>
        <button
          className={styles.logo}
          onClick={() => scrollTo("top")}
          aria-label="Back to top"
        >
          <span>AM</span>
          <span className={styles.logoLine} />
          <span>AI / ML</span>
        </button>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <button
            className={activeSection === "work" ? styles.navActive : ""}
            onClick={() => scrollTo("work")}
          >
            Work
          </button>
          <button
            className={activeSection === "experiments" ? styles.navActive : ""}
            onClick={() => scrollTo("experiments")}
          >
            Experiments
          </button>
          <button
            className={activeSection === "profile" ? styles.navActive : ""}
            onClick={() => scrollTo("profile")}
          >
            Profile
          </button>
          <button
            className={activeSection === "contact" ? styles.navActive : ""}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </nav>

        <button
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <button onClick={() => scrollTo("work")}>01 / Work</button>
        <button onClick={() => scrollTo("experiments")}>
          02 / Experiments
        </button>
        <button onClick={() => scrollTo("profile")}>03 / Profile</button>
        <button onClick={() => scrollTo("contact")}>04 / Contact</button>
      </div>

      <section id="top" className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>AHMED MESSAAD</span>
          <span>ALGERIA / 2026</span>
        </div>

        <div className={styles.heroMain}>
          <div className={styles.heroIndex}>00</div>

          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AI / ML ENGINEER · RESEARCHER</p>

            <h1>
              I build
              <br />
              intelligent
              <br />
              <em>systems.</em>
            </h1>

            <div className={styles.heroBottom}>
              <p>
                From medical imaging and clinical decision support to full-stack
                products. I work where research has to become something usable.
              </p>

              <button
                className={styles.textLink}
                onClick={() => scrollTo("work")}
              >
                <span>Explore the work</span>
                <span className={styles.arrow}>↓</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.heroAside}>
          <span>01</span>
          <span>09</span>
        </div>

        <div className={styles.heroFooter}>
          <span>MEDICAL AI</span>
          <span>COMPUTER VISION</span>
          <span>DEEP LEARNING</span>
          <span>REINFORCEMENT LEARNING</span>
        </div>
      </section>

      <section className={styles.statement}>
        <div className={styles.statementNumber}>—</div>

        <div className={styles.statementContent}>
          <p className={styles.sectionKicker}>THE APPROACH</p>

          <h2>
            A model is only
            <br />
            the beginning.
          </h2>

          <p className={styles.statementText}>
            The interesting part is what happens after it works: when an
            experiment becomes an application, when a prediction needs an
            interface, or when a research idea has to survive contact with a
            real problem.
          </p>
        </div>
      </section>

      <section id="work" className={styles.workSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionNumber}>01</span>
            <span className={styles.sectionLabel}>SELECTED WORK</span>
          </div>

          <p>
            Four projects that best describe
            <br />
            how I think and build.
          </p>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <article className={styles.project} key={project.number}>
              <div className={styles.projectNumberWrap}>
                <span className={styles.stickyNumber}>{project.number}</span>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectTop}>
                  <span className={styles.projectType}>{project.type}</span>

                  <span className={styles.projectCounter}>
                    {project.number} / 04
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className={styles.projectIntro}>{project.intro}</p>

                <div className={styles.projectRule} />

                <div className={styles.projectDetails}>
                  <p>{project.description}</p>

                  <div className={styles.projectFacts}>
                    {project.facts.map((fact) => (
                      <span key={fact}>{fact}</span>
                    ))}
                  </div>
                </div>

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
            </article>
          ))}
        </div>
      </section>

      <section className={styles.researchSection}>
        <div className={styles.researchSide}>
          <span className={styles.sectionNumber}>—</span>
          <span className={styles.sectionLabel}>RESEARCH FIELD</span>
        </div>

        <div className={styles.researchMain}>
          <p className={styles.sectionKicker}>WHERE THE WORK LIVES</p>

          <h2>
            Research when
            <br />
            the problem
            <br />
            <em>deserves it.</em>
          </h2>

          <div className={styles.researchGrid}>
            {researchAreas.map((area, index) => (
              <div className={styles.researchItem} key={area}>
                <span>0{index + 1}</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experiments" className={styles.experimentsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionNumber}>02</span>
            <span className={styles.sectionLabel}>EXPERIMENTS / BUILDS</span>
          </div>

          <p>
            Not everything needs a case study.
            <br />
            Some work is here because it taught me something.
          </p>
        </div>

        <div className={styles.experimentsList}>
          {experiments.map((experiment) => (
            <article
              className={styles.experiment}
              key={experiment.number}
            >
              <span className={styles.experimentNumber}>
                {experiment.number}
              </span>

              <div className={styles.experimentTitle}>
                <span>{experiment.meta}</span>
                <h3>{experiment.title}</h3>
              </div>

              <p>{experiment.text}</p>

              <strong className={styles.experimentResult}>
                {experiment.result}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stackSection}>
        <div className={styles.stackIntro}>
          <span className={styles.sectionNumber}>—</span>

          <div>
            <p className={styles.sectionKicker}>TOOLS</p>
            <h2>
              Enough
              <br />
              to build
              <br />
              <em>the thing.</em>
            </h2>
          </div>
        </div>

        <div className={styles.stackList}>
          {stack.map((item, index) => (
            <div className={styles.stackItem} key={item}>
              <span>0{index + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="profile" className={styles.profileSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionNumber}>03</span>
            <span className={styles.sectionLabel}>PROFILE</span>
          </div>

          <p>Researcher by training. Builder by practice.</p>
        </div>

        <div className={styles.profileLayout}>
          <div className={styles.profileLead}>
            <h2>
              Ahmed
              <br />
              Messaad
            </h2>

            <p>
              AI / ML Engineer, researcher and full-stack developer focused on
              intelligent systems with real-world applications.
            </p>
          </div>

          <div className={styles.profileDetails}>
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

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactTop}>
          <span className={styles.sectionNumber}>04</span>
          <span className={styles.sectionLabel}>CONTACT</span>
        </div>

        <div className={styles.contactContent}>
          <p className={styles.sectionKicker}>HAVE A PROBLEM WORTH BUILDING?</p>

          <h2>
            Let&apos;s make
            <br />
            something
            <br />
            <em>useful.</em>
          </h2>

          <a
            className={styles.emailLink}
            href="mailto:ahmed.messaad@outlook.com"
          >
            ahmed.messaad@outlook.com
            <span>↗</span>
          </a>
        </div>

        <footer className={styles.footer}>
          <span>AHMED MESSAAD</span>

          <div>
            <a
              href="https://www.linkedin.com/in/ahmedmessaad/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/RYANX9"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://ahmed-messaad.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </div>

          <span>© 2026</span>
        </footer>
      </section>
    </main>
  );
}
