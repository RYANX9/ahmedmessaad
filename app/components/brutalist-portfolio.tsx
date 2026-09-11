"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./brutalist-portfolio.module.css";

const HERO_IMAGE = "/ahmed-hero.png";

type ArchiveItem = {
  number: string;
  category: string;
  title: React.ReactNode;
  description: string;
  href: string;
  linkLabel: string;
};

const archiveItems: ArchiveItem[] = [
  {
    number: "04",
    category: "PREDICTIVE AI",
    title: (
      <>
        Find the <em>drivers.</em>
      </>
    ),
    description:
      "Healthcare cost prediction using Conv1D with 47 engineered features. SHAP analysis surfaces the variables that actually move the prediction.",
    href: "https://github.com/RYANX9/healthcare-cost-prediction",
    linkLabel: "VIEW RESEARCH ↗",
  },
  {
    number: "05",
    category: "DIAGNOSTIC AI",
    title: (
      <>
        One interface. Five <em>diseases.</em>
      </>
    ),
    description:
      "M.Sc. thesis: a multi-disease diagnostic platform covering five diseases, with model performance ranging from 90–99%.",
    href: "https://youtu.be/kh7WBjNPpEM",
    linkLabel: "WATCH THE DEMO ↗",
  },
  {
    number: "06",
    category: "FULL-STACK",
    title: (
      <>
        Find the right <em>machine.</em>
      </>
    ),
    description:
      "Specmob — a smartphone specs search, filter, compare and recommendation system built with Next.js.",
    href: "https://specmob.vercel.app",
    linkLabel: "OPEN SPECMOB ↗",
  },
  {
    number: "07",
    category: "DEEP RL / TRADING",
    title: (
      <>
        The useful <em>failure.</em>
      </>
    ),
    description:
      "PPO and A2C trading agents that failed to beat a simple SMA strategy. A useful result: added complexity does not guarantee a better strategy in noisy, non-stationary markets.",
    href: "https://github.com/RYANX9/deep-rl-trading",
    linkLabel: "READ THE CODE ↗",
  },
  {
    number: "08",
    category: "PRODUCT / FULL-STACK",
    title: (
      <>
        Life, <em>structured.</em>
      </>
    ),
    description:
      "Day Tracker — a productivity system for tasks, budgets, streaks, reminders and notes, backed by PostgreSQL with web push notifications.",
    href: "https://github.com/RYANX9/rystudio",
    linkLabel: "EXPLORE THE SYSTEM ↗",
  },
  {
    number: "09",
    category: "WEB / INFRASTRUCTURE",
    title: (
      <>
        Ship without a <em>database.</em>
      </>
    ),
    description:
      "A Git-backed CMS where the admin panel commits directly to a repository through the GitHub Contents API. Git remains the source of truth.",
    href: "https://zaid-saad.vercel.app",
    linkLabel: "SEE THE SITE ↗",
  },
  {
    number: "10",
    category: "PORTFOLIO / SYSTEMS",
    title: (
      <>
        A surface that carries the <em>work.</em>
      </>
    ),
    description:
      "This portfolio — designed as an interface between the thinking, the systems and the work itself.",
    href: "#contact",
    linkLabel: "GET IN TOUCH ↗",
  },
];

export default function BrutalistPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const archiveRefs = useRef<Array<HTMLDetailsElement | null>>([]);
  const heroImageRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 14);

      if (heroImageRef.current) {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!reduceMotion) {
          const y = Math.min(window.scrollY, 700) * 0.035;
          heroImageRef.current.style.transform = `translateY(${y}px)`;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const revealElements = document.querySelectorAll<HTMLElement>(
      "[data-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealIn);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleArchiveToggle = (index: number) => {
    const current = archiveRefs.current[index];

    if (!current?.open) return;

    archiveRefs.current.forEach((item, itemIndex) => {
      if (itemIndex !== index && item) {
        item.open = false;
      }
    });
  };

  return (
    <main id="top" className={styles.page}>
      {/* NAVIGATION */}
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        aria-label="Main navigation"
      >
        <a href="#top" className={styles.brand}>
          AM / 01
        </a>

        <div className={styles.navCenter}>
          INTELLIGENCE · SYSTEMS · RESEARCH
        </div>

        <div className={styles.navLinks}>
          <a href="#work">INDEX</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroTop}>
          <span>AM / 01 — ALGERIA</span>
          <span className={styles.heroTopRight}>
            PORTFOLIO / 2026 <b>→</b> IDEAS → SYSTEMS
          </span>
        </div>

        <div className={styles.heroMain}>
          <div className={styles.heroHeadline}>
            <h1 id="hero-title" data-reveal>
              I turn difficult
              <br />
              questions into <em>systems.</em>
            </h1>

            <p className={styles.heroStatement} data-reveal>
              Start with the question.
              <br />
              <em>Build what the answer needs.</em>
            </p>

            <p className={styles.heroDescription} data-reveal>
              AI/ML, medical imaging and software — explored as one continuous
              practice: understand the problem, shape the intelligence, then
              give it somewhere useful to live.
            </p>
          </div>

          <div className={styles.heroOrbit} aria-hidden="true">
            <div className={styles.orbitOuter} />
            <div className={styles.orbitInner} />

            <div className={`${styles.spark} ${styles.sparkOne}`}>✦</div>
            <div className={`${styles.spark} ${styles.sparkTwo}`}>✧</div>
            <div className={`${styles.spark} ${styles.sparkThree}`}>·</div>

            <div className={styles.orbitDot} />
            <div className={styles.orbitCross}>+</div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <div className={`${styles.heroLabel} ${styles.heroLabelLeft}`}>
            <span className={styles.heroLabelTitle}>01 / WORKING METHOD</span>

            <strong>
              Observe.
              <br />
              Model.
              <br />
              Make useful.
            </strong>

            <p>
              Stay close to the real problem. Let the work determine the form.
            </p>
          </div>

          <figure
            ref={heroImageRef}
            className={styles.heroImageWrap}
            data-parallax
            data-reveal
          >
            <img
              src={HERO_IMAGE}
              alt="Ahmed Messaad"
              className={styles.heroImage}
            />
            <figcaption className={styles.heroImageCaption}>
              <span>AM</span>
              <span>01</span>
            </figcaption>
          </figure>

          <div className={`${styles.heroLabel} ${styles.heroLabelRight}`}>
            <span className={styles.heroLabelTitle}>THE IDEA IN MOTION</span>

            <strong>
              Question
              <br />
              → intelligence
              <br />→ consequence
            </strong>

            <p>
              A useful idea should survive contact with the people and systems
              around it.
            </p>
          </div>
        </div>

        <div className={styles.heroStamp} aria-hidden="true">
          AM
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className={styles.work}>
        <div className={styles.sectionIntro} data-reveal>
          <span className={styles.mono}>SELECTED WORK / 01—10</span>

          <h2>
            Selected
            <br />
            <em>work.</em>
          </h2>

          <p>
            Projects built around difficult questions — medical imaging,
            clinical intelligence, reinforcement learning, prediction and
            software systems.
          </p>
        </div>

        {/* PROJECT 01 */}
        <article className={styles.case} data-reveal>
          <div className={styles.caseHeader}>
            <div>
              <span className={styles.caseNumber}>01</span>
              <span className={styles.caseCategory}>
                · CLINICAL AI / VISION
              </span>
            </div>

            <span className={styles.caseTag}>HEMAVISION</span>
          </div>

          <div className={styles.caseGrid}>
            <div className={styles.caseVisual}>
              <div className={styles.visualText}>
                SEE <span>→</span> UNDERSTAND <span>→</span> SUPPORT
              </div>

              <div className={styles.visualCross} aria-hidden="true">
                +
              </div>

              <div className={styles.visualOrb} aria-hidden="true">
                <span>✦</span>
              </div>

              <div className={styles.visualBottom}>
                <span>HEMATOLOGY / CV</span>
                <span>01</span>
              </div>
            </div>

            <div className={styles.caseContent}>
              <h3>
                From blood
                <br />
                smear to <em>clarity.</em>
              </h3>

              <p className={styles.caseDescription}>
                HemaVision is a hematology platform that turns microscope
                imagery into structured diagnostic information. Computer
                vision identifies blood-cell classes and feeds a workflow
                designed around how a clinician actually works. The system was
                validated by a practicing clinical hematologist and featured
                on BBC News Arabic&apos;s 4Tech program.
              </p>

              <p className={styles.caseNote}>
                The intelligence belongs where the work happens.
              </p>

              <a
                href="https://www.youtube.com/watch?v=fX77vZlHkng"
                target="_blank"
                rel="noreferrer"
                className={styles.caseLink}
              >
                SEE THE WORK ↗
              </a>

              <div className={styles.metric}>
                <strong>97%</strong>
                <span>MULTI-CLASS ACCURACY</span>
              </div>

              <div className={styles.specs}>
                <div>
                  <strong>SIGNAL</strong>
                  <span>45 min → 3 min diagnostic time</span>
                </div>

                <div>
                  <span>YOLOv8 / U-Net / OpenCV / PyTorch</span>
                </div>

                <div>
                  <span>Clinical hematologist validation</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.caseSymbol} aria-hidden="true">
            ✦
          </div>
        </article>

        {/* PROJECT 02 */}
        <article
          className={`${styles.case} ${styles.caseDark}`}
          data-reveal
        >
          <div className={styles.caseHeader}>
            <div>
              <span className={styles.caseNumber}>02</span>
              <span className={styles.caseCategory}>
                · MEDICAL IMAGING
              </span>
            </div>

            <span className={styles.caseTag}>AIRM</span>
          </div>

          <div className={styles.caseGrid}>
            <div className={styles.caseVisual}>
              <div className={styles.visualText}>
                SCAN <span>→</span> READ <span>→</span> ACT
              </div>

              <div className={styles.scanFrame}>
                <div className={styles.scanCircle}>
                  <span>04</span>
                </div>

                <div className={styles.scanLine} />
              </div>

              <div className={styles.visualBottom}>
                <span>MRI / CLASSIFICATION</span>
                <span>02</span>
              </div>
            </div>

            <div className={styles.caseContent}>
              <h3>
                From trained model
                <br />
                to <em>working tool.</em>
              </h3>

              <p className={styles.caseDescription}>
                AIRM is a hospital-oriented MRI pipeline for four-class
                brain-tumor classification. It handles DICOM input,
                preprocessing, inference, a clinical interface and validation
                as one connected system — rather than treating the model as
                the product.
              </p>

              <p className={styles.caseNote}>
                A prediction matters when someone can act on it.
              </p>

              <a
                href="https://youtu.be/2OeqBKF3X_A"
                target="_blank"
                rel="noreferrer"
                className={styles.caseLink}
              >
                WATCH THE WORK ↗
              </a>

              <div className={styles.metric}>
                <strong>99%</strong>
                <span>FOUR-CLASS CLASSIFICATION</span>
              </div>

              <div className={styles.specs}>
                <div>
                  <strong>EVIDENCE</strong>
                  <span>DICOM MRI pipeline</span>
                </div>

                <div>
                  <span>PyQt5 clinical application</span>
                </div>

                <div>
                  <span>Radiologist validation</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.caseSymbol} aria-hidden="true">
            02
          </div>
        </article>

        {/* PROJECT 03 */}
        <article className={styles.case} data-reveal>
          <div className={styles.caseHeader}>
            <div>
              <span className={styles.caseNumber}>03</span>
              <span className={styles.caseCategory}>
                · DEEP RL / HEALTHCARE
              </span>
            </div>

            <span className={styles.caseTag}>TREATMENT DRL</span>
          </div>

          <div className={styles.caseGrid}>
            <div className={styles.caseVisual}>
              <div className={styles.visualText}>
                STATE <span>→</span> DECISION <span>→</span> SAFETY
              </div>

              <div className={styles.decisionDiagram}>
                <div className={styles.diagramNode}>STATE</div>
                <div className={styles.diagramArrow}>↓</div>
                <div className={styles.diagramNode}>POLICY</div>
                <div className={styles.diagramArrow}>↓</div>
                <div className={styles.diagramNode}>ACTION</div>
              </div>

              <div className={styles.visualBottom}>
                <span>ICU / SEQUENTIAL DECISION</span>
                <span>03</span>
              </div>
            </div>

            <div className={styles.caseContent}>
              <h3>
                When treatment
                <br />
                becomes a <em>decision.</em>
              </h3>

              <p className={styles.caseDescription}>
                Medical Treatment DRL explores ICU treatment timing as a
                sequential decision problem using MIMIC-III. The system
                combines state design, reward construction, an A2C policy and
                a safety layer to constrain actions toward clinically
                appropriate behavior.
              </p>

              <p className={styles.caseNote}>
                A research question shaped into a sequence of decisions.
              </p>

              <a
                href="https://github.com/RYANX9/medical-treatment-drl/"
                target="_blank"
                rel="noreferrer"
                className={styles.caseLink}
              >
                EXPLORE THE RESEARCH ↗
              </a>

              <div className={styles.metric}>
                <strong>99.5%</strong>
                <span>CLINICAL APPROPRIATENESS</span>
              </div>

              <div className={styles.specs}>
                <div>
                  <strong>METHOD</strong>
                  <span>MIMIC-III</span>
                </div>

                <div>
                  <span>A2C agent</span>
                </div>

                <div>
                  <span>Custom safety filter</span>
                </div>

                <div>
                  <span>26-D Gym environment</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.caseSymbol} aria-hidden="true">
            03
          </div>
        </article>

        {/* FURTHER WORK */}
        <div className={styles.archive} data-reveal>
          <div className={styles.archiveHeader}>
            <span className={styles.mono}>FURTHER WORK / 04—10</span>

            <span className={styles.archiveHint}>
              OPEN AN ITEM TO EXPAND
            </span>
          </div>

          <div className={styles.archiveList}>
            {archiveItems.map((item, index) => (
              <details
                key={item.number}
                ref={(element) => {
                  archiveRefs.current[index] = element;
                }}
                className={styles.archiveItem}
                onToggle={() => handleArchiveToggle(index)}
              >
                <summary>
                  <span className={styles.archiveNumber}>
                    {item.number}
                  </span>

                  <span className={styles.archiveCategory}>
                    {item.category}
                  </span>

                  <span className={styles.archiveTitle}>
                    {item.title}
                  </span>

                  <span className={styles.archiveArrow}>↘</span>
                </summary>

                <div className={styles.archiveBody}>
                  <p>{item.description}</p>

                  <a
                    href={item.href}
                    target={item.href.startsWith("#") ? undefined : "_blank"}
                    rel={
                      item.href.startsWith("#") ? undefined : "noreferrer"
                    }
                  >
                    {item.linkLabel}
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* THROUGH-LINE */}
      <section className={styles.systemStrip} data-reveal>
        <div>
          <span>01</span>
          <strong>QUESTION</strong>
        </div>

        <div className={styles.systemCenter}>
          <span>THE THROUGH-LINE</span>
          <strong>QUESTION → MODEL → USE</strong>
        </div>

        <div>
          <span>02</span>
          <strong>MAKE USEFUL</strong>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutHeader} data-reveal>
          <span className={styles.mono}>ABOUT / 01</span>

          <h2>
            Between
            <br />
            <em>thought &amp; use.</em>
          </h2>
        </div>

        <div className={styles.aboutContent}>
          <p className={styles.aboutLead} data-reveal>
            I&apos;m Ahmed Messaad — an AI/ML engineer, full-stack developer
            and researcher working where intelligent systems meet real
            constraints.
          </p>

          <div className={styles.aboutBody} data-reveal>
            <p>
              My work moves between medical AI, computer vision, deep
              reinforcement learning and software systems. The common thread
              is not a particular technology. It&apos;s the attempt to take a
              difficult question seriously enough to build the system it
              requires.
            </p>

            <p>
              That means the model is only part of the work. The data pipeline,
              the interface, the validation, the deployment and the people who
              use the result all matter. I&apos;m interested in the whole
              system — from first question to useful consequence.
            </p>
          </div>
        </div>

        <div className={styles.aboutFacts} data-reveal>
          <div>
            <span>2023</span>
            <strong>
              M.Sc. Electronics of Embedded Systems
              <br />
              Université Mohamed Boudiaf de M&apos;sila
            </strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>
              Medical AI / Computer Vision
              <br />
              Deep Reinforcement Learning / Clinical Decision Support
            </strong>
          </div>

          <div>
            <span>IN PRACTICE</span>
            <strong>
              AIRM contract
              <br />
              Hemolab contract
              <br />
              Shipped software systems
            </strong>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactTop} data-reveal>
          <span className={styles.mono}>CONTACT / 01</span>
        </div>

        <div className={styles.contactMain} data-reveal>
          <h2>
            Bring the
            <br />
            hard question. <em>Let&apos;s work.</em>
          </h2>

          <p>
            If you&apos;re working on something difficult — a clinical
            problem, an intelligent system, a product that needs thinking, or
            research that needs building — I&apos;d like to hear about it.
          </p>

          <a
            href="mailto:ahmed.messaad@outlook.com"
            className={styles.contactEmail}
          >
            ahmed.messaad@outlook.com
          </a>
        </div>

        <footer className={styles.footer}>
          <div>
            AM / 2026 · ALGERIA · INTELLIGENCE / SYSTEMS / RESEARCH
          </div>

          <div className={styles.footerLinks}>
            <a
              href="https://github.com/RYANX9"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>

            <a
              href="https://linkedin.com/in/ahmedmessaad"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>

            <a
              href="https://kaggle.com/ahmedmessaad"
              target="_blank"
              rel="noreferrer"
            >
              KAGGLE
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
