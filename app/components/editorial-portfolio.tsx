"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./editorial-portfolio.module.css";

const projects = [
  {
    number: "01",
    type: "Medical AI / Computer Vision",
    title: "HemaVision",
    subtitle: "Automated hematology analysis from microscope imagery.",
    description:
      "A computer-vision system designed to reduce the time required for hematological image analysis. The pipeline combines object detection and segmentation to identify and classify blood-cell patterns from microscope imagery.",
    metrics: [
      ["97%", "multi-class accuracy"],
      ["45 → 3", "minutes per analysis"],
    ],
    stack: "YOLOv8 · U-Net · OpenCV · PyTorch",
    details: [
      "Multi-class blood-cell analysis",
      "Detection and segmentation pipeline",
      "Clinical validation with a hematologist",
      "Featured on BBC News Arabic 4Tech",
    ],
    href: "https://www.linkedin.com/",
  },
  {
    number: "02",
    type: "Medical Imaging / Deep Learning",
    title: "AIRM",
    subtitle: "Brain-tumor classification for MRI imaging.",
    description:
      "A medical-imaging application for classifying brain tumors from DICOM MRI data. The project combines deep transfer learning with a desktop clinical interface designed around practical medical-image workflows.",
    metrics: [
      ["~99%", "four-class accuracy"],
      ["DICOM", "MRI workflow"],
    ],
    stack: "EfficientNet · PyTorch · DICOM · PyQt5",
    details: [
      "Four-class brain-tumor classification",
      "DICOM MRI image processing",
      "Transfer-learning architecture",
      "Clinical review by a radiologist",
    ],
    href: "https://www.linkedin.com/",
  },
  {
    number: "03",
    type: "Deep Reinforcement Learning",
    title: "Treatment DRL",
    subtitle: "Reinforcement learning for ICU treatment timing.",
    description:
      "A clinical decision-support experiment using reinforcement learning to investigate treatment policies from intensive-care data. The system was built around a custom environment and a safety layer intended to constrain unsafe recommendations.",
    metrics: [
      ["99.5%", "reported clinical appropriateness"],
      ["26D", "state representation"],
    ],
    stack: "A2C · MIMIC-III · Python · Clinical RL",
    details: [
      "MIMIC-III intensive-care data",
      "Actor-Critic reinforcement learning",
      "Custom 26-dimensional environment",
      "Safety filtering layer",
    ],
    href: "https://www.linkedin.com/",
  },
  {
    number: "04",
    type: "Product / Full-Stack Engineering",
    title: "Specmob",
    subtitle: "A specification-first way to choose a smartphone.",
    description:
      "A phone research and comparison platform built around structured specifications rather than sponsored recommendations. Users can compare devices, explore category rankings, and get recommendations based on their priorities.",
    metrics: [
      ["4", "phone comparison"],
      ["5", "priority-based picks"],
    ],
    stack: "Next.js · FastAPI · PostgreSQL",
    details: [
      "Specification-based comparison engine",
      "Priority-driven recommendation workflow",
      "Typo-tolerant phone search",
      "Structured phone and pricing data",
    ],
    href: "https://specmob.vercel.app",
  },
];

const experiments = [
  {
    number: "05",
    title: "Healthcare Cost Prediction",
    description:
      "Conv1D-based healthcare cost prediction using 47 engineered features, with SHAP used to inspect feature contribution.",
    result: "R² 0.88",
  },
  {
    number: "06",
    title: "My Daily Health",
    description:
      "Master's thesis project exploring multi-disease diagnosis across five disease areas and twelve deep-learning architectures.",
    result: "5 disease areas",
  },
  {
    number: "07",
    title: "Crypto Trading",
    description:
      "A reinforcement-learning trading experiment comparing PPO and A2C against a simpler SMA baseline.",
    result: "RL vs SMA",
  },
  {
    number: "08",
    title: "Day Tracker",
    description:
      "A productivity system combining tasks, budgets, streaks, notes and reminder workflows.",
    result: "PostgreSQL",
  },
  {
    number: "09",
    title: "Git-Backed CMS",
    description:
      "An administration system using GitHub as the source of truth for managing portfolio content.",
    result: "GitHub API",
  },
];

const researchFields = [
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

export function EditorialPortfolio() {
  const [activeSection, setActiveSection] = useState("work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      );

      const sections = ["work", "research", "experiments", "about", "contact"];

      let current = "work";

      for (const id of sections) {
        const element = document.getElementById(id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.35) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!cursorRef.current || window.innerWidth < 900) return;

      setCursorVisible(true);

      cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <main className={styles.page}>
      <div
        className={styles.progress}
        style={{ width: `${scrollProgress}%` }}
      />

      <div
        ref={cursorRef}
        className={`${styles.cursor} ${
          cursorVisible ? styles.cursorVisible : ""
        }`}
      />

      {/* HEADER */}
      <header className={styles.header}>
        <button
          className={styles.logo}
          onClick={() => scrollTo("top")}
          aria-label="Back to top"
        >
          AM
        </button>

        <nav className={styles.desktopNav}>
          <button
            className={activeSection === "work" ? styles.navActive : ""}
            onClick={() => scrollTo("work")}
          >
            Work
          </button>

          <button
            className={activeSection === "research" ? styles.navActive : ""}
            onClick={() => scrollTo("research")}
          >
            Research
          </button>

          <button
            className={activeSection === "experiments" ? styles.navActive : ""}
            onClick={() => scrollTo("experiments")}
          >
            Experiments
          </button>

          <button
            className={activeSection === "about" ? styles.navActive : ""}
            onClick={() => scrollTo("about")}
          >
            About
          </button>

          <button
            className={activeSection === "contact" ? styles.navActive : ""}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </header>

      {/* MOBILE NAV */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <button onClick={() => scrollTo("work")}>01 / Work</button>
        <button onClick={() => scrollTo("research")}>02 / Research</button>
        <button onClick={() => scrollTo("experiments")}>
          03 / Experiments
        </button>
        <button onClick={() => scrollTo("about")}>04 / About</button>
        <button onClick={() => scrollTo("contact")}>05 / Contact</button>
      </div>

      {/* HERO */}
      <section id="top" className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>AHMED MESSAAD</span>
          <span>AI / ML ENGINEER</span>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>RESEARCH · SYSTEMS · SOFTWARE</p>

          <h1>
            I build the model.
            <br />
            Then the <em>system.</em>
          </h1>

          <div className={styles.heroBottom}>
            <p className={styles.heroStatement}>
              Medical AI researcher and full-stack engineer working across
              machine learning, computer vision, reinforcement learning and
              the software required to make those systems useful.
            </p>

            <button
              className={styles.scrollHint}
              onClick={() => scrollTo("work")}
            >
              <span>SCROLL TO EXPLORE</span>
              <span className={styles.arrow}>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className={styles.statement}>
        <div className={styles.sectionIndex}>00 / POSITION</div>

        <div className={styles.statementText}>
          <p>
            My work sits between{" "}
            <strong>research and implementation.</strong>
          </p>

          <p>
            I am interested in what happens after a model works: how it is
            validated, constrained, connected to data, placed inside an
            application, and ultimately used by a person.
          </p>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className={styles.work}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndex}>01 / SELECTED WORK</div>
          <p>FOUR PROJECTS ACROSS RESEARCH AND PRODUCT</p>
        </div>

        <div className={styles.projects}>
          {projects.map((project) => (
            <article className={styles.project} key={project.number}>
              <div className={styles.projectNumber}>{project.number}</div>

              <div className={styles.projectBody}>
                <div className={styles.projectTop}>
                  <div>
                    <p className={styles.projectType}>{project.type}</p>

                    <h2>{project.title}</h2>

                    <p className={styles.projectSubtitle}>
                      {project.subtitle}
                    </p>
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projectLink}
                  >
                    VIEW PROJECT <span>↗</span>
                  </a>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectDescription}>
                    <p>{project.description}</p>
                  </div>

                  <div className={styles.projectDetails}>
                    {project.metrics.map(([value, label]) => (
                      <div className={styles.metric} key={label}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </div>
                    ))}

                    <div className={styles.stackLine}>
                      <span>STACK</span>
                      <p>{project.stack}</p>
                    </div>
                  </div>
                </div>

                <div className={styles.projectFooter}>
                  {project.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className={styles.research}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndex}>02 / RESEARCH</div>
          <p>AREAS OF FOCUS</p>
        </div>

        <div className={styles.researchLayout}>
          <div className={styles.researchIntro}>
            <p>
              The common thread is not a specific architecture. It is the
              attempt to turn complex data into systems that can support a
              meaningful decision.
            </p>
          </div>

          <div className={styles.researchList}>
            {researchFields.map((field, index) => (
              <div className={styles.researchItem} key={field}>
                <span>0{index + 1}</span>
                <strong>{field}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section id="experiments" className={styles.experiments}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndex}>03 / EXPERIMENTS</div>
          <p>SMALLER SYSTEMS · FAILED HYPOTHESES · SIDE PROJECTS</p>
        </div>

        <div className={styles.experimentList}>
          {experiments.map((experiment) => (
            <article className={styles.experiment} key={experiment.number}>
              <span className={styles.experimentNumber}>
                {experiment.number}
              </span>

              <div className={styles.experimentMain}>
                <h3>{experiment.title}</h3>
                <p>{experiment.description}</p>
              </div>

              <span className={styles.experimentResult}>
                {experiment.result}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className={styles.stackSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndex}>04 / TOOLKIT</div>
          <p>TOOLS I USE TO MOVE FROM EXPERIMENT TO SYSTEM</p>
        </div>

        <div className={styles.stackGrid}>
          {stack.map((item, index) => (
            <div className={styles.stackItem} key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionIndex}>05 / PROFILE</div>
          <p>BACKGROUND</p>
        </div>

        <div className={styles.aboutLayout}>
          <div className={styles.aboutTitle}>
            <h2>
              Researcher
              <br />
              <em>and</em> builder.
            </h2>
          </div>

          <div className={styles.aboutContent}>
            <p className={styles.aboutLead}>
              I hold a Master&apos;s degree in Electronics of Embedded Systems
              from Université Mohamed Boudiaf de M&apos;sila.
            </p>

            <div className={styles.aboutColumns}>
              <div>
                <span className={styles.label}>EDUCATION</span>
                <p>
                  M.Sc. Electronics of Embedded Systems
                  <br />
                  Université Mohamed Boudiaf de M&apos;sila
                  <br />
                  2023
                </p>
              </div>

              <div>
                <span className={styles.label}>FOCUS</span>
                <p>
                  Medical AI
                  <br />
                  Computer Vision
                  <br />
                  Deep Reinforcement Learning
                  <br />
                  Clinical Decision Support
                </p>
              </div>

              <div>
                <span className={styles.label}>WORK</span>
                <p>
                  Research projects
                  <br />
                  AI systems
                  <br />
                  Full-stack applications
                  <br />
                  Data-driven products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionIndex}>06 / CONTACT</div>

        <div className={styles.contactContent}>
          <p className={styles.eyebrow}>OPEN TO RESEARCH · ENGINEERING</p>

          <h2>
            Let&apos;s build
            <br />
            something <em>useful.</em>
          </h2>

          <a
            href="mailto:ahmed.messaad@outlook.com"
            className={styles.email}
          >
            ahmed.messaad@outlook.com
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div>
          <strong>AHMED MESSAAD</strong>
          <span>AI / ML ENGINEER · RESEARCHER · DEVELOPER</span>
        </div>

        <div className={styles.footerLinks}>
          <a
            href="https://github.com/RYANX9"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ahmed.messaad@outlook.com"
          >
            Email
          </a>
        </div>

        <span className={styles.copyright}>
          © {new Date().getFullYear()} AHMED MESSAAD
        </span>
      </footer>
    </main>
  );
}

export default EditorialPortfolio;
