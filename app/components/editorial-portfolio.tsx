"use client";

import { useState } from "react";
import styles from "./editorial-portfolio.module.css";

type Experiment = {
  id: string;
  name: string;
  tech: string;
  result: string;
  description: string;
  link: string;
  linkLabel: string;
};

const experiments: Experiment[] = [
  {
    id: "05",
    name: "Healthcare Cost Prediction",
    tech: "CONV1D · SHAP · 47 FEATURES",
    result: "R² 0.88",
    description:
      "A predictive healthcare model using engineered features and explainability tooling to move beyond a single prediction toward understanding what drives the estimate. Feature engineering and SHAP analysis expose which signals influence projected healthcare cost.",
    link: "https://github.com/RYANX9/healthcare-cost-prediction",
    linkLabel: "READ THE CODE",
  },
  {
    id: "06",
    name: "My Daily Health",
    tech: "MULTI-DISEASE · DEEP LEARNING",
    result: "M.SC. THESIS",
    description:
      "A multi-disease diagnostic platform developed as an M.Sc. thesis, bringing multiple model architectures and disease domains into one usable system rather than a stack of disconnected notebooks.",
    link: "https://youtu.be/kh7WBjNPpEM",
    linkLabel: "WATCH THE DEMO",
  },
  {
    id: "07",
    name: "Crypto Trading",
    tech: "PPO · A2C · SMA BASELINE",
    result: "DRL",
    description:
      "A deep reinforcement-learning trading experiment comparing PPO and A2C against a simpler SMA baseline in a noisy, non-stationary environment. Greater model complexity did not guarantee a better strategy — an honest negative result kept in the record.",
    link: "https://github.com/RYANX9/deep-rl-trading",
    linkLabel: "READ THE EXPERIMENT",
  },
  {
    id: "08",
    name: "Day Tracker",
    tech: "POSTGRESQL · WEB PUSH",
    result: "SYSTEM",
    description:
      "A personal productivity system connecting tasks, budgets, streaks, reminders, notes and web push into one practical application, designed around a daily human workflow rather than an algorithm.",
    link: "https://github.com/RYANX9/rystudio",
    linkLabel: "READ THE CODE",
  },
  {
    id: "09",
    name: "Git-Backed CMS",
    tech: "GITHUB API · ADMIN SYSTEM",
    result: "PRODUCT",
    description:
      "A portfolio administration system where content edits flow through the GitHub Contents API, keeping the repository itself as the source of truth — every edit made through the admin dashboard is a real, versioned git commit.",
    link: "https://zaid-saad.vercel.app",
    linkLabel: "SEE THE PRODUCT",
  },
];

export default function EditorialPortfolio() {
  const [openExperiment, setOpenExperiment] = useState<string | null>(null);

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <a href="#" className={styles.brand}>
          AHMED MESSAAD
        </a>

        <nav className={styles.nav}>
          <a href="#work">WORK</a>
          <a href="#research">RESEARCH</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* HERO */}
      <section className={`${styles.hero} ${styles.section}`}>
        <div className={styles.heroMain}>
          <div className={styles.heroEyebrow}>
            AI / ML ENGINEER &nbsp;·&nbsp; RESEARCHER
          </div>

          <h1>
            I build
            <br />
            <span className={styles.heroIndented}>
              <em>intelligent</em>
            </span>
            <br />
            systems.
          </h1>

          <div className={styles.heroBottom}>
            <div className={styles.heroDescription}>
              Researching, engineering and deploying intelligent systems
              across medicine, computer vision and software.
            </div>

            <div className={styles.heroFields}>
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

        <div className={styles.heroScroll}>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={`${styles.introduction} ${styles.section}`}>
        <div className={styles.introductionGrid}>
          <h2>
            Models are
            <br />
            only the
            <br />
            beginning.
          </h2>

          <div className={styles.introductionText}>
            <p>
              My work sits between research and implementation: understanding
              a problem, building the model, testing it against reality, and
              turning the result into something usable.
            </p>

            <p>
              Most of my research has focused on healthcare — medical imaging,
              clinical decision support, and machine learning systems designed
              around real-world constraints.
            </p>

            <div className={styles.mono}>
              RESEARCH / ENGINEERING / EXPERIMENTATION
            </div>
          </div>
        </div>
      </section>

      {/* WORK INTRO */}
      <section
        className={`${styles.workIntro} ${styles.section}`}
        id="work"
      >
        <div className={styles.workIntroInner}>
          <div className={`${styles.label} ${styles.mono}`}>
            SELECTED WORK / 01—04
          </div>

          <h2>
            Four systems that
            <br />
            explain <em>what I do.</em>
          </h2>
        </div>
      </section>

      {/* PROJECT 01 — HEMAVISION */}
      <section
        className={`${styles.project} ${styles.project01} ${styles.section}`}
      >
        <div className={styles.container}>
          <div className={styles.projectGrid}>
            <div className={styles.projectIndex}>01</div>

            <div className={styles.projectMain}>
              <div>
                <div className={styles.projectKicker}>
                  MEDICAL AI / COMPUTER VISION
                </div>

                <h3>
                  Hema<em>Vision</em>
                </h3>

                <div className={styles.projectDescription}>
                  <p>
                    A computer-vision system for hematology analysis from
                    microscope imagery. The system combines object detection,
                    segmentation and classification into a workflow designed
                    for practical laboratory use.
                  </p>
                </div>
              </div>

              <a
                className={styles.projectLink}
                href="https://dz.linkedin.com/in/ahmedmessaad"
                target="_blank"
                rel="noopener noreferrer"
              >
                PROJECT / DETAILS ↗
              </a>
            </div>

            <div className={styles.projectSide}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>97%</span>
                <span className={styles.metricLabel}>
                  MULTI-CLASS ACCURACY
                </span>
              </div>

              <div className={styles.metric}>
                <span className={styles.metricValue}>45 → 3</span>
                <span className={styles.metricLabel}>
                  MINUTES / ANALYSIS TIME
                </span>
              </div>

              <div className={styles.projectTech}>
                YOLOv8
                <br />
                U-NET
                <br />
                OPENCV
                <br />
                PYTORCH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 02 — AIRM */}
      <section
        className={`${styles.project} ${styles.project02} ${styles.section}`}
      >
        <div className={styles.container}>
          <div className={styles.projectGrid}>
            <div className={styles.projectIndex}>02</div>

            <div className={styles.projectMain}>
              <div>
                <div className={styles.projectKicker}>
                  MEDICAL IMAGING / DEEP LEARNING
                </div>

                <h3>AIRM</h3>

                <div className={styles.projectDescription}>
                  <p>
                    A medical imaging system for brain-tumor classification
                    from DICOM MRI data. The work combines deep-learning models
                    with a dedicated clinical application designed around
                    diagnostic workflows.
                  </p>
                </div>
              </div>

              <a
                className={styles.projectLink}
                href="https://dz.linkedin.com/in/ahmedmessaad"
                target="_blank"
                rel="noopener noreferrer"
              >
                PROJECT / DETAILS ↗
              </a>
            </div>

            <div className={styles.projectSide}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>99%</span>
                <span className={styles.metricLabel}>
                  CLASSIFICATION ACCURACY
                </span>
              </div>

              <div className={styles.metric}>
                <span className={styles.metricValue}>04</span>
                <span className={styles.metricLabel}>
                  TUMOR CLASSES
                </span>
              </div>

              <div className={styles.projectTech}>
                DICOM / MRI
                <br />
                DEEP LEARNING
                <br />
                PYQT5
                <br />
                CLINICAL VALIDATION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 03 — MEDICAL TREATMENT DRL */}
      <section
        className={`${styles.project} ${styles.project03} ${styles.section}`}
        id="research"
      >
        <div className={styles.container}>
          <div className={styles.projectGrid}>
            <div className={styles.projectIndex}>03</div>

            <div className={styles.projectMain}>
              <div>
                <div className={styles.projectKicker}>
                  DEEP REINFORCEMENT LEARNING / CLINICAL DECISION SUPPORT
                </div>

                <h3>
                  Medical
                  <br />
                  Treatment <em>DRL</em>
                </h3>

                <div className={styles.projectDescription}>
                  <p>
                    A reinforcement-learning experiment for ICU treatment
                    timing using MIMIC-III. The system models treatment
                    decisions as a sequential problem and introduces a safety
                    filter to constrain model actions.
                  </p>
                </div>
              </div>

              <a
                className={styles.projectLink}
                href="https://dz.linkedin.com/in/ahmedmessaad"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESEARCH / DETAILS ↗
              </a>
            </div>

            <div className={styles.projectSide}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>99.5%</span>
                <span className={styles.metricLabel}>
                  REPORTED CLINICAL APPROPRIATENESS
                </span>
              </div>

              <div className={styles.metric}>
                <span className={styles.metricValue}>26D</span>
                <span className={styles.metricLabel}>
                  ENVIRONMENT STATE
                </span>
              </div>

              <div className={styles.projectTech}>
                MIMIC-III
                <br />
                A2C
                <br />
                SAFETY FILTER
                <br />
                CLINICAL DECISION SUPPORT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 04 — SPECMOB */}
      <section
        className={`${styles.project} ${styles.project04} ${styles.section}`}
      >
        <div className={styles.container}>
          <div className={styles.projectGrid}>
            <div className={styles.projectIndex}>04</div>

            <div className={styles.projectMain}>
              <div>
                <div className={styles.projectKicker}>
                  SOFTWARE SYSTEM / PRODUCT
                </div>

                <h3>
                  Spec<em>mob</em>
                </h3>

                <div className={styles.projectDescription}>
                  <p>
                    A smartphone discovery and comparison platform built
                    around structured specifications, comparison logic and
                    guided recommendations. Instead of simply listing
                    devices, the system helps users decide what fits their
                    needs.
                  </p>
                </div>
              </div>

              <a
                className={styles.projectLink}
                href="https://specmob.vercel.app/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                VISIT SPECMOB ↗
              </a>
            </div>

            <div className={styles.projectSide}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>04</span>
                <span className={styles.metricLabel}>
                  DEVICES / COMPARISON
                </span>
              </div>

              <div className={styles.metric}>
                <span className={styles.metricValue}>01</span>
                <span className={styles.metricLabel}>
                  END-TO-END PRODUCT
                </span>
              </div>

              <div className={styles.projectTech}>
                NEXT.JS
                <br />
                FASTAPI
                <br />
                POSTGRESQL
                <br />
                RECOMMENDATION ENGINE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section className={`${styles.experiments} ${styles.section}`}>
        <div className={styles.experimentsInner}>
          <div className={styles.experimentsHeading}>
            <h2>Experiments.</h2>

            <div className={styles.mono}>05—09 / OTHER WORK</div>
          </div>

          {experiments.map((exp) => {
            const isOpen = openExperiment === exp.id;
            return (
              <div className={styles.experimentItem} key={exp.id}>
                <button
                  type="button"
                  className={styles.experimentRow}
                  onClick={() => setOpenExperiment(isOpen ? null : exp.id)}
                  aria-expanded={isOpen}
                  aria-controls={`experiment-detail-${exp.id}`}
                >
                  <span className={styles.experimentNumber}>{exp.id}</span>
                  <span className={styles.experimentName}>{exp.name}</span>
                  <span className={styles.experimentTech}>{exp.tech}</span>
                  <span className={styles.experimentResult}>{exp.result}</span>
                  <span className={styles.experimentToggle} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`experiment-detail-${exp.id}`}
                  className={styles.experimentDetail}
                  data-open={isOpen}
                >
                  <div className={styles.experimentDetailInner}>
                    <p>{exp.description}</p>
                    <a
                      className={styles.experimentLink}
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.linkLabel} ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* APPROACH */}
      <section className={`${styles.approach} ${styles.section}`}>
        <div className={styles.approachInner}>
          <div className={styles.approachTop}>
            <h2>
              Research
              <br />
              becomes
              <br />
              <em>systems.</em>
            </h2>

            <div className={styles.approachCopy}>
              <p>
                I am interested in the space between a promising model and a
                useful system.
              </p>

              <p>
                That means working across data, modeling, evaluation,
                interfaces and deployment rather than treating the model as
                the finished product.
              </p>

              <div className={styles.mono}>
                FROM HYPOTHESIS → EXPERIMENT → SYSTEM
              </div>
            </div>
          </div>

          <div className={styles.methodList}>
            <div className={styles.method}>
              <div className={styles.methodNumber}>01</div>
              <h4>Understand</h4>
              <p>
                Define the problem, data and constraints before choosing the
                model.
              </p>
            </div>

            <div className={styles.method}>
              <div className={styles.methodNumber}>02</div>
              <h4>Build</h4>
              <p>
                Develop models and systems around the actual problem rather
                than the benchmark alone.
              </p>
            </div>

            <div className={styles.method}>
              <div className={styles.methodNumber}>03</div>
              <h4>Test</h4>
              <p>
                Measure performance, limitations and behavior under realistic
                conditions.
              </p>
            </div>

            <div className={styles.method}>
              <div className={styles.methodNumber}>04</div>
              <h4>Deploy</h4>
              <p>
                Turn validated ideas into applications that
                people can actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section
        className={`${styles.profile} ${styles.section}`}
        id="about"
      >
        <div className={styles.profileInner}>
          <div className={styles.profileGrid}>
            <h2>
              Ahmed
              <br />
              Messaad.
            </h2>

            <div className={styles.profileCopy}>
              <p>
                AI / ML Engineer, researcher and full-stack developer working
                across machine learning, medical AI and software systems.
              </p>

              <p>
                My academic background is in Electronics of Embedded Systems,
                with research experience spanning computer vision, medical
                imaging, deep learning and reinforcement learning.
              </p>

              <div className={styles.mono}>
                CURRENTLY INTERESTED IN
                <br />
                MEDICAL AI · COMPUTER VISION · DEEP LEARNING · DRL
              </div>
            </div>
          </div>

          <div className={styles.profileDetails}>
            <div className={styles.profileDetail}>
              <div className={styles.profileLabel}>EDUCATION</div>
              <div className={styles.profileValue}>
                M.Sc. Electronics of Embedded Systems
              </div>
            </div>

            <div className={styles.profileDetail}>
              <div className={styles.profileLabel}>INSTITUTION</div>
              <div className={styles.profileValue}>
                Université Mohamed Boudiaf de M&apos;sila
              </div>
            </div>

            <div className={styles.profileDetail}>
              <div className={styles.profileLabel}>FOCUS</div>
              <div className={styles.profileValue}>
                Medical AI / Computer Vision / Deep Learning / DRL
              </div>
            </div>

            <div className={styles.profileDetail}>
              <div className={styles.profileLabel}>TOOLS</div>
              <div className={styles.profileValue}>
                Python / PyTorch / TensorFlow / Next.js / FastAPI / SQL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className={`${styles.contact} ${styles.section}`}
        id="contact"
      >
        <div className={styles.contactInner}>
          <div className={styles.contactLabel}>10 / CONTACT</div>

          <h2>
            Let&apos;s build
            <br />
            something <em>useful.</em>
          </h2>

          <a
            className={styles.contactEmail}
            href="mailto:ahmed.messaad@outlook.com"
          >
            AHMED.MESSAAD@OUTLOOK.COM ↗
          </a>

          <div className={styles.contactLinksRow}>
            <a
              className={styles.contactLink}
              href="https://github.com/RYANX9"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              className={styles.contactLink}
              href="https://linkedin.com/in/ahmedmessaad"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN ↗
            </a>
            <a
              className={styles.contactLink}
              href="https://kaggle.com/ahmedmessaad"
              target="_blank"
              rel="noopener noreferrer"
            >
              KAGGLE ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span>AHMED MESSAAD</span>
        <span>AI / ML · RESEARCH · ENGINEERING</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
