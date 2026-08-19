// All portfolio content lives here. Edit this file to change anything on the
// site — no need to touch component code for text, project, or link changes.
//
// The site is organized around two tracks that both describe the same person:
//   "research" — applied deep learning for clinical / diagnostic use cases
//   "systems"  — the full-stack engineering that ships a model as a product
// Projects, skills, and experience are all tagged with a track so the UI can
// color-code and filter them consistently (sage = research, lavender = systems).

export type Track = "research" | "systems";

export const profile = {
  name: "Ahmed Messaad",
  role: "AI/ML Engineer & Full-Stack Developer",
  tagline: "I build the model. Then I build the product around it.",
  location: "Algeria",
  email: "ahmed.messaad@outlook.com",
  github: "https://github.com/RYANX9",
  linkedin: "https://linkedin.com/in/ahmedmessaad",
  kaggle: "https://kaggle.com/ahmedmessaad",
  resume: "/resume.pdf",
  avatar: "/ahmed.jpg",
};

export const about = {
  eyebrow: "About",
  heading: "Two disciplines, one workflow",
  threads: [
    {
      track: "research" as Track,
      label: "What I research",
      body: "Applied deep learning for clinical and diagnostic use cases — imaging, sequential decision-making, and tabular health data. My work spans brain tumor classification, automated blood cell detection, and ICU treatment-timing agents, each pushed toward something a clinician could plausibly use, not just a benchmark score.",
    },
    {
      track: "systems" as Track,
      label: "What I build",
      body: "The software that gets a model in front of people. Next.js and React on the frontend, FastAPI or Flask on the backend, Postgres for storage, and the deployment work in between. I've taken a full product — frontend, API, database, and an AI-generated copy layer — from nothing to production, and I keep a handful of Postgres-backed apps running.",
    },
  ],
  closing:
    "The two feed each other. Research work makes me careful about what a model actually knows versus what it merely fits. Systems work makes me care about latency, failure modes, and what happens when the happy path breaks.",
};

export const stats = [
  { value: "99.5%", label: "clinical appropriateness, ICU treatment agent" },
  { value: "99%", label: "four-class brain tumor classification accuracy" },
  { value: "97%", label: "multi-class blood cell classification" },
  { value: "45→3min", label: "diagnostic time cut, HemaVision" },
  { value: "3", label: "full-stack apps shipped to production" },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "airm",
    role: "AI Research Engineer (Contract)",
    org: "AIRM Medical Technologies — Brain Imaging Diagnostics Project",
    period: "Jan 2024 – Dec 2024",
    location: "Algeria",
    summary:
      "Built a production-ready brain tumor classification system for clinical deployment, from model to radiologist-facing interface.",
    bullets: [
      "Engineered an EfficientNet-B7 architecture reaching 99% accuracy across four tumor categories: glioma, meningioma, pituitary adenoma, and healthy tissue.",
      "Built an end-to-end DICOM pipeline — automated parsing, standardized preprocessing, and secure storage integration with hospital MRI scanners.",
      "Designed a PyQt5 clinical interface validated with radiologists, supporting real-time inference and batch processing.",
      "Developed a domain-specific augmentation strategy (rotation, elastic deformation, contrast adjustment) to work around limited annotated medical data.",
      "Delivered technical documentation and a clinical user manual for hospital deployment.",
    ],
    tech: ["PyTorch", "EfficientNet-B7", "PyDICOM", "SimpleITK", "PyQt5", "SQL"],
  },
  {
    id: "hemolab",
    role: "Computer Vision Engineer (Contract)",
    org: "Hemolab Diagnostics — HemaVision Blood Analysis Automation System",
    period: "Aug 2023 – Jun 2024",
    location: "Algeria",
    summary:
      "Led development of an automated hematology platform that replaced manual microscopy for routine blood cell analysis.",
    bullets: [
      "Designed a YOLOv8 detection pipeline for multi-class blood cell identification (RBC, WBC subtypes, platelets) at 97% accuracy.",
      "Implemented U-Net segmentation to isolate individual cells from overlapping clusters in high-density smear images.",
      "Built an automated cell-counting algorithm validated to within ±3% of expert manual counts (n = 150 samples).",
      "Added a disease classification module flagging abnormal cell morphology tied to anemia and leukemia markers, with visual highlighting.",
      "Cut diagnostic analysis time from 45 minutes to 3 minutes per sample without giving up clinical-grade accuracy.",
    ],
    tech: ["PyTorch", "YOLOv8", "U-Net", "OpenCV", "NumPy", "Pandas"],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    id: "msc",
    degree: "M.Sc. Embedded Systems Electronics",
    institution: "University Mohamed Boudiaf of M'sila",
    period: "2021 – 2023",
    detail:
      "Thesis: \"My Daily Health — Multi-Disease Diagnostic Platform Using Ensemble Deep Learning.\" Ensemble of ResNet50, DenseNet-121, and EfficientNet-B3 across five disease domains, 90.3%–99.5% accuracy, evaluated via 5-fold cross-validation over 12 pre-trained architectures.",
  },
  {
    id: "bsc",
    degree: "B.Sc. Electronics",
    institution: "University Mohamed Boudiaf of M'sila",
    period: "2018 – 2021",
    detail:
      "Final project: a microcontroller-based multi-layer security system integrating hardware-software authentication with embedded sensor networks.",
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export type Project = {
  id: string;
  track: Track;
  name: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  link: string;
  linkText: string;
  // Research projects use a real photo from /public. Systems projects use a
  // hand-drawn doodle cover instead (key into the ProjectCover registry) —
  // there's no clinical screenshot to show, and the doodle keeps the visual
  // language consistent with the rest of the site.
  image?: string;
  coverIcon?: "terminal" | "database" | "api";
};

export const projects: Project[] = [
  // --- research ---------------------------------------------------------
  {
    id: "treatment-drl",
    track: "research",
    name: "Medical Treatment DRL",
    category: "Sequential Decision-Making",
    year: "2025",
    tagline: "ICU treatment timing, learned from data",
    description:
      "ICU treatment timing system trained on MIMIC-III data. An A2C agent reached 99.5% clinical appropriateness with a +76–145 reward improvement over baselines. A rule-based safety filter lifted PPO/DQN appropriateness by 40 points. Built on a custom 26-dimensional Gym environment modeling temporal lab trends and treatment effects.",
    tech: ["Stable-Baselines3", "Gym", "NumPy", "Pandas", "MIMIC-III"],
    metrics: [
      { label: "appropriateness", value: "99.5%" },
      { label: "reward gain", value: "+145" },
      { label: "state space", value: "26D" },
    ],
    link: "https://github.com/RYANX9/medical-treatment-drl/",
    linkText: "View code",
    image: "/clinrl.jpeg",
  },
  {
    id: "airm-project",
    track: "research",
    name: "AIRM Brain Tumor System",
    category: "Computer Vision",
    year: "2024",
    tagline: "Diagnostic imaging, radiologist-validated",
    description:
      "Diagnostic system reaching 99% four-class tumor classification, with a radiologist-validated interface. Built an end-to-end DICOM pipeline while investigating preprocessing strategies for limited medical imaging datasets, aimed at real clinical workflow integration.",
    tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
    metrics: [
      { label: "accuracy", value: "99%" },
      { label: "classes", value: "4" },
      { label: "pipeline", value: "DICOM" },
    ],
    link: "https://youtu.be/2OeqBKF3X_A",
    linkText: "Watch demo",
    image: "/brain.jpg",
  },
  {
    id: "hemavision",
    track: "research",
    name: "HemaVision",
    category: "Object Detection",
    year: "2023–2024",
    tagline: "45 minutes of microscopy work, down to 3",
    description:
      "Automated hematology platform reaching 97% multi-class blood cell classification. Cut diagnostic time from 45 minutes to 3 through an optimized detection pipeline, while investigating efficient segmentation architectures for microscopy imaging.",
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
    metrics: [
      { label: "accuracy", value: "97%" },
      { label: "time", value: "3min" },
      { label: "speedup", value: "15x" },
    ],
    link: "https://youtu.be/YxhA877Wyn0",
    linkText: "Watch demo",
    image: "/blood.jpg",
  },
  {
    id: "healthcost",
    track: "research",
    name: "Healthcare Cost Prediction",
    category: "Deep Learning",
    year: "2024",
    tagline: "Forecasting cost from temporal patterns",
    description:
      "A Conv1D network reaching R² = 0.88 for insurance cost forecasting, built on 47 engineered features. SHAP analysis identified the key cost drivers — chronic condition comorbidity, smoking status, and BMI threshold effects — backed by a systematic ablation study on temporal convolution strategies.",
    tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
    metrics: [
      { label: "R²", value: "0.88" },
      { label: "method", value: "SHAP" },
      { label: "arch", value: "Conv1D" },
    ],
    link: "https://github.com/RYANX9/healthcare-cost-prediction",
    linkText: "View code",
    image: "/healthcarecost.png",
  },
  {
    id: "mydailyhealth",
    track: "research",
    name: "My Daily Health",
    category: "Research Thesis",
    year: "2023",
    tagline: "One architecture search, five disease domains",
    description:
      "Multi-disease diagnostic platform reaching 90–99% accuracy across five disease domains: brain tumors, Alzheimer's, respiratory disease, skin cancer, and gastrointestinal disease. Ran a systematic comparative evaluation of 12 deep learning architectures with stratified cross-validation, on a secure, authenticated clinical workflow with sub-200ms inference.",
    tech: ["TensorFlow", "PyTorch", "ResNet", "EfficientNet", "Flask", "SQLite"],
    metrics: [
      { label: "accuracy", value: "90–99%" },
      { label: "architectures tested", value: "12" },
      { label: "domains", value: "5" },
    ],
    link: "https://youtu.be/kh7WBjNPpEM",
    linkText: "Watch demo",
    image: "/daily.png",
  },
  {
    id: "crypto-drl",
    track: "research",
    name: "Deep RL for Crypto Trading",
    category: "Applied ML / Research",
    year: "2025",
    tagline: "Where reinforcement learning lost to a moving average",
    description:
      "PPO and A2C agents trained on hourly BTC data, benchmarked against buy-and-hold, SMA crossover, and RSI mean-reversion baselines. The honest result: SMA crossover beat both RL agents on return and Sharpe ratio — a useful negative result on the limits of DRL in noisy, non-stationary markets.",
    tech: ["PyTorch", "Stable-Baselines3", "Gymnasium", "Pandas"],
    metrics: [
      { label: "SMA return", value: "26.3%" },
      { label: "best RL (A2C)", value: "22.7%" },
      { label: "finding", value: "RL underperformed" },
    ],
    link: "https://github.com/RYANX9/deep-rl-trading",
    linkText: "View code",
    image: "/agent_comparison.png",
  },
  // --- systems ------------------------------------------------------------
  {
    id: "specmob",
    track: "systems",
    name: "Specmob",
    category: "Full-Stack Platform",
    year: "2025",
    tagline: "Phone comparison, built like a real product",
    description:
      "A phone comparison and spec-browsing platform — browse, filter, compare side-by-side, and get a trade-in estimate. Next.js frontend talks to a FastAPI backend with async Postgres, trigram-based typo-tolerant search, tiered response caching, and rate limiting. Product copy is generated by a Gemini call with a deterministic fallback, so the AI layer never blocks a page from rendering.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "asyncpg", "Gemini API"],
    metrics: [
      { label: "stack", value: "full" },
      { label: "search", value: "typo-tolerant" },
      { label: "AI copy", value: "w/ fallback" },
    ],
    link: "https://github.com/RYANX9/Specmob",
    linkText: "View code",
    coverIcon: "database",
  },
  {
    id: "day-tracker",
    track: "systems",
    name: "Day Tracker",
    category: "Web App",
    year: "2025",
    tagline: "Todos, budgets, and streaks — with real push notifications",
    description:
      "A personal productivity system: todos, budget tracking, daily streaks, timed reminders, and quick notes, backed by Postgres. Ships browser push notifications through a service worker and VAPID keys, so reminders land even when the tab is closed.",
    tech: ["Next.js", "PostgreSQL", "Web Push", "Service Workers"],
    metrics: [
      { label: "push", value: "native" },
      { label: "data", value: "Postgres" },
      { label: "type", value: "PWA-ready" },
    ],
    link: "https://github.com/RYANX9/rystudio",
    linkText: "View code",
    coverIcon: "terminal",
  },
  {
    id: "client-cms",
    track: "systems",
    name: "Portfolio + Git-Backed CMS",
    category: "Web App",
    year: "2025",
    tagline: "An admin panel that commits straight to the repo",
    description:
      "A client portfolio site with an admin panel that edits content and pushes changes directly to the repository through the GitHub Contents API — no separate CMS or content database required.",
    tech: ["Next.js", "TypeScript", "GitHub API"],
    metrics: [
      { label: "CMS", value: "git-native" },
      { label: "backend", value: "none needed" },
    ],
    link: "https://github.com/RYANX9/zaid-saad",
    linkText: "View code",
    coverIcon: "api",
  },
];

export const projectFilters: { id: "all" | Track; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "research", label: "Research & Medical AI" },
  { id: "systems", label: "Software & Systems" },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export type SkillGroup = {
  group: string;
  track: Track;
  items: string[];
};

export const skills: SkillGroup[] = [
  { group: "Machine Learning", track: "research", items: ["PyTorch", "TensorFlow / Keras", "ONNX Runtime", "Stable-Baselines3", "Scikit-learn"] },
  { group: "Computer Vision & Imaging", track: "research", items: ["EfficientNet", "ResNet / DenseNet", "YOLOv8", "U-Net", "PyDICOM", "SimpleITK", "OpenCV"] },
  { group: "Data & Interpretability", track: "research", items: ["Pandas", "NumPy", "SHAP", "Plotly", "Matplotlib / Seaborn"] },
  { group: "Frontend", track: "systems", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend & Data", track: "systems", items: ["FastAPI", "Flask", "PostgreSQL", "asyncpg", "REST APIs", "SQL"] },
  { group: "Tooling & Infra", track: "systems", items: ["Docker", "Git", "Linux", "PyQt5", "Tkinter"] },
];

// ---------------------------------------------------------------------------
// Publications & honors
// ---------------------------------------------------------------------------

export type Publication = {
  id: string;
  title: string;
  venue: string;
  date: string;
  detail: string;
  award?: string;
};

export const publications: Publication[] = [
  {
    id: "icstem-2023",
    title: "Helping System for Brain Disease Diagnosis Using Deep Learning",
    venue: "International Conference on Science, Technology, Engineering and Management (ICSTEM 2023), Istanbul, Turkey",
    date: "December 2023",
    detail:
      "Presented transfer learning optimization methods for medical image classification in resource-limited clinical environments, and the practical challenges of deploying AI diagnostics in developing healthcare infrastructure. Paper ID IS-STEMISTAN-061223-17466.",
    award: "Outstanding Research Presentation Award",
  },
];

export const honors = [
  { id: "icstem-award", label: "Outstanding Research Presentation Award", org: "ICSTEM 2023, Istanbul" },
  { id: "fia-2023", label: "Robotics Competition Finalist", org: "54th Algiers International Fair (FIA 2023)" },
  { id: "academic-excellence", label: "Five-Star Academic Excellence Award", org: "University of M'sila, 2023" },
];

export const contact = {
  heading: "Open to research collaborations, ML engineering, and full-stack roles",
  body: "Reach out if you're working on something in medical AI, need an applied ML engineer, or need someone who can take a model all the way to a shipped product.",
};
