"use client";

import styles from "./editorial-portfolio.module.css";

export default function EditorialPortfolio() {
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

          <div className={styles.experimentRow}>
            <div className={styles.experimentNumber}>05</div>
            <div className={styles.experimentName}>
              Healthcare Cost Prediction
            </div>
            <div className={styles.experimentTech}>
              CONV1D · SHAP · 47 FEATURES
            </div>
            <div className={styles.experimentResult}>R² 0.88</div>
          </div>

          <div className={styles.experimentRow}>
            <div className={styles.experimentNumber}>06</div>
            <div className={styles.experimentName}>My Daily Health</div>
            <div className={styles.experimentTech}>
              MULTI-DISEASE · DEEP LEARNING
            </div>
            <div className={styles.experimentResult}>M.SC. THESIS</div>
          </div>

          <div className={styles.experimentRow}>
            <div className={styles.experimentNumber}>07</div>
            <div className={styles.experimentName}>Crypto Trading</div>
            <div className={styles.experimentTech}>
              PPO · A2C · SMA BASELINE
            </div>
            <div className={styles.experimentResult}>DRL</div>
          </div>

          <div className={styles.experimentRow}>
            <div className={styles.experimentNumber}>08</div>
            <div className={styles.experimentName}>Day Tracker</div>
            <div className={styles.experimentTech}>
              POSTGRESQL · WEB PUSH
            </div>
            <div className={styles.experimentResult}>SYSTEM</div>
          </div>

          <div className={styles.experimentRow}>
            <div className={styles.experimentNumber}>09</div>
            <div className={styles.experimentName}>Git-Backed CMS</div>
            <div className={styles.experimentTech}>
              GITHUB API · ADMIN SYSTEM
            </div>
            <div className={styles.experimentResult}>PRODUCT</div>
          </div>
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
                Turn validated ideas into applications that people can
                actually use.
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
