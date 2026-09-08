export const profile = {
  name: "Ahmed Messaad",
  email: "ahmed.messaad@outlook.com",
  github: "https://github.com/RYANX9",
  linkedin: "https://linkedin.com/in/ahmedmessaad",
  kaggle: "https://kaggle.com/ahmedmessaad",
};

export const rail = {
  mark: "AM / 01",
  year: "2026",
  firstName: "Ahmed",
  lastName: "Messaad",
  roles: ["AI / ML engineer", "Full-stack developer", "Researcher"],
  location: "Algeria",
  hint: "Scroll to inspect ↓",
};

export const topbar = {
  label: "Systems / Intelligence / Products",
  nav: [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
};

export const hero = {
  eyebrow: "",
  headline: ["I build the model.", "Then the system."],
  statement: [
    { text: "My work sits between " },
    { text: "machine learning research", bold: true },
    {
      text: " and the software that makes a model useful: clinical AI, medical imaging, decision support, and full-stack products.",
    },
  ],
  method: {
    label: "",
    steps: [
      "Observe the problem.",
      "Build the intelligence.",
      "Ship the interface.",
      "Measure what happened.",
    ],
  },
};

export const sectionHeads = {
  work: {
    label: "Selected work",
    note: "Research becomes interesting when it survives contact with a real workflow.",
  },
  about: {
    label: "About / provenance",
    note: "The work is technical. The through-line is simple: make intelligence useful.",
  },
};

export const workIntro = {
  heading: ["Case", "files."],
  paragraph:
    "Not a gallery of screenshots. A record of problems, systems, decisions and outcomes.",
  note: "Nine projects across clinical intelligence, applied ML, products and research.",
};

// Table of contents: the nine case files grouped into three narrative
// threads. Used for a "Contents" overview section ahead of the deck.
export const contents = {
  eyebrow: "Selected stories",
  count: "09 projects",
  groups: [
    {
      num: "01",
      title: "Clinical intelligence",
      description:
        "Medical AI systems built around diagnosis, imaging, treatment decisions and the reality of clinical workflows.",
      projects: "HemaVision / AIRM / DRL",
    },
    {
      num: "02",
      title: "From model to product",
      description:
        "Models are only one layer. These projects continue through interfaces, APIs, databases, deployment and actual use.",
      projects: "Specmob / Daily Health / Cost",
    },
    {
      num: "03",
      title: "What the experiment taught",
      description:
        "Not every result is a victory. Failed hypotheses, constraints and unexpected findings belong in the archive too.",
      projects: "Trading / Research",
    },
  ],
};

export type CaseStudy = {
  num: string;
  category: string;
  tag: string;
  titleLines: [string, string];
  summary: string;
  extra?: string;
  link: { href: string; label: string };
  facts: { label: string; value: string }[];
  description: string;
  metric: { big: string; small: string };
  artSymbol: string;
  artLabel: string;
  // A small kicker shown on standout cases ("FEATURE", "FINDING").
  // Undefined for the rest.
  feature?: string;
  // A short reflective line — the "so what" of the project, not just
  // the spec sheet. Shown as a pull-quote on the card.
  insight: string;
  // Plain, unlabeled field notes (as opposed to the labelled facts
  // grid) — quick technical/context tags read at a glance.
  fieldNotes: string[];
};

export const cases: CaseStudy[] = [
  {
    num: "01",
    category: "Product / Full-stack",
    tag: "Specmob",
    titleLines: ["Spec", "mob."],
    summary: "A phone discovery system built around the way people actually search.",
    extra: "Search, filtering, comparison and recommendation across a large device catalogue.",
    link: { href: "https://specmob.vercel.app", label: "Open Specmob" },
    facts: [
      { label: "Stack", value: "Next.js / FastAPI / PostgreSQL" },
      { label: "Interface", value: "Search / compare / guided pick" },
      { label: "Intelligence", value: "Typo-tolerant search + Gemini copy layer" },
    ],
    description:
      "A consumer electronics discovery and comparison platform. Search, filtering, comparison and recommendation are connected to a real product experience rather than presented as an isolated ML demo. It turns technical constraints into decisions: what fits a budget, which camera matters, what charges fastest, what should be compared.",
    metric: { big: "01→N", small: "From one query to a shortlist" },
    artSymbol: "specmob",
    artLabel: "query → signal → choice",
    insight: "The model is not the destination. The useful thing is the system around it.",
    fieldNotes: [
      "Next.js / FastAPI / PostgreSQL",
      "Typo-tolerant search",
      "Comparison engine",
      "Recommendation workflow",
    ],
  },
  {
    num: "02",
    category: "Clinical AI / Vision",
    tag: "HemaVision",
    titleLines: ["Blood", "understood."],
    summary:
      "A hematology platform that turns microscope imagery into a structured diagnostic workflow.",
    extra: "Validated by a practicing clinical hematologist, then featured on BBC News Arabic's 4Tech program.",
    link: { href: "https://www.youtube.com/watch?v=fX77vZlHkng", label: "Watch the system" },
    facts: [
      { label: "Result", value: "97% multi-class accuracy" },
      { label: "Workflow", value: "45 min → 3 min diagnostic time" },
      { label: "Validation", value: "Clinical hematologist" },
    ],
    description:
      "A hematology analysis platform designed to turn microscope imagery into a usable diagnostic workflow. The system combines computer vision, segmentation and classification with a product layer built for clinical use. YOLOv8, U-Net, OpenCV and PyTorch sit underneath the product.",
    metric: { big: "97%", small: "Multi-class accuracy" },
    artSymbol: "hemavision",
    artLabel: "image → segmentation → diagnosis",
    feature: "FEATURE",
    insight:
      "45 minutes → 3 minutes. The interesting result was not only the accuracy — it was the reduction of friction around the diagnosis.",
    fieldNotes: [
      "97% multi-class accuracy",
      "YOLOv8 / U-Net / OpenCV / PyTorch",
      "Clinical hematologist validation",
      "Featured by BBC News Arabic 4Tech",
    ],
  },
  {
    num: "03",
    category: "Medical imaging",
    tag: "AIRM",
    titleLines: ["Read the", "scan."],
    summary: "A hospital-oriented MRI pipeline for four-class brain-tumor classification.",
    link: { href: "https://youtu.be/2OeqBKF3X_A", label: "View the system" },
    facts: [
      { label: "Result", value: "99% classification accuracy" },
      { label: "Input", value: "DICOM MRI pipeline" },
      { label: "Interface", value: "PyQt5 clinical application" },
    ],
    description:
      "A medical imaging pipeline for four-class brain tumor classification, built around DICOM data and a PyQt5 clinical interface rather than a notebook-only model. DICOM handling, preprocessing, inference, interface design and radiologist validation are treated as one system.",
    metric: { big: "99%", small: "Four-class classification" },
    artSymbol: "airm",
    artLabel: "DICOM / MRI / inference",
    insight:
      "99% accuracy isn't the product. A model becomes useful when it can survive the path from image to decision.",
    fieldNotes: [
      "Efficient deep learning pipeline",
      "DICOM integration",
      "Radiologist validation",
      "Hospital-oriented workflow",
    ],
  },
  {
    num: "04",
    category: "Deep RL / Healthcare",
    tag: "Medical Treatment DRL",
    titleLines: ["When should", "treatment happen?"],
    summary: "A reinforcement-learning system for ICU treatment timing.",
    link: { href: "https://github.com/RYANX9/medical-treatment-drl/", label: "Read the code" },
    facts: [
      { label: "Data", value: "MIMIC-III" },
      { label: "Agent", value: "A2C" },
      { label: "Safety", value: "Custom filter + 26-D Gym environment" },
    ],
    description:
      "A reinforcement-learning experiment for ICU treatment timing using MIMIC-III. The work tested whether a learned policy could produce clinically appropriate treatment decisions under a constrained environment. State design, reward construction and a safety layer sit between an RL policy and a clinical recommendation.",
    metric: { big: "99.5%", small: "Clinical appropriateness" },
    artSymbol: "medical-drl",
    artLabel: "state → action → reward",
    insight:
      "A 99.5% appropriateness score is only meaningful when the environment, safety filter and evaluation assumptions are visible.",
    fieldNotes: [
      "MIMIC-III",
      "A2C / 26-D environment",
      "Safety-filtered policy",
      "Clinical decision support",
    ],
  },
  {
    num: "05",
    category: "Machine learning",
    tag: "Healthcare Cost",
    titleLines: ["Find the", "drivers."],
    summary: "A cost-prediction model designed to explain its own decisions.",
    link: { href: "https://github.com/RYANX9/healthcare-cost-prediction", label: "Read the code" },
    facts: [
      { label: "Model", value: "Conv1D" },
      { label: "Result", value: "R² 0.88" },
      { label: "Interpretation", value: "47 engineered features + SHAP" },
    ],
    description:
      "A predictive healthcare model using engineered features and explainability tooling to move beyond a single prediction toward understanding what drives the estimate. Feature engineering and SHAP analysis expose which signals influence projected healthcare cost and make the model easier to interrogate.",
    metric: { big: "0.88", small: "Coefficient of determination" },
    artSymbol: "healthcare-cost",
    artLabel: "features → model → explanation",
    insight:
      "R² 0.88 — but the explanation around a prediction matters almost as much as the prediction itself.",
    fieldNotes: ["Conv1D", "47 engineered features", "SHAP explainability"],
  },
  {
    num: "06",
    category: "Research / Thesis",
    tag: "My Daily Health",
    titleLines: ["One interface.", "Five diseases."],
    summary: "A multi-disease diagnostic platform developed as an M.Sc. thesis.",
    link: { href: "https://youtu.be/kh7WBjNPpEM", label: "Watch the demo" },
    facts: [
      { label: "Domains", value: "Five disease areas" },
      { label: "Architectures", value: "12 evaluated" },
      { label: "Reported accuracy", value: "90–99%" },
    ],
    description:
      "A multi-disease diagnostic platform developed as an M.Sc. thesis, bringing multiple model architectures and disease domains into one usable system. It brings model selection, inference and user interaction into one application rather than a stack of disconnected notebooks.",
    metric: { big: "12", small: "Architectures evaluated" },
    artSymbol: "my-daily-health",
    artLabel: "many models / one system",
    insight: "Research becomes more interesting when it has to become a product.",
    fieldNotes: [
      "5 disease domains",
      "12 architectures",
      "90–99% reported accuracy range",
      "M.Sc. thesis",
    ],
  },
  {
    num: "07",
    category: "Deep RL / Experiment",
    tag: "Crypto Trading",
    titleLines: ["The useful", "failure."],
    summary: "An honest experiment where PPO/A2C did not beat a simple SMA strategy.",
    link: { href: "https://github.com/RYANX9/deep-rl-trading", label: "Read the experiment" },
    facts: [
      { label: "Agents", value: "PPO / A2C" },
      { label: "Baseline", value: "SMA" },
      { label: "Finding", value: "RL limits in noisy markets" },
    ],
    description:
      "A deep reinforcement-learning trading experiment comparing PPO and A2C against a simpler SMA baseline in a noisy, non-stationary environment. Not every experiment should end in a victory lap: in a noisy, non-stationary environment, greater model complexity did not guarantee a better strategy.",
    metric: { big: "SMA", small: "Baseline that won the test" },
    artSymbol: "crypto-rl",
    artLabel: "hypothesis → test → evidence",
    feature: "FINDING",
    insight: "The model lost. The experiment didn't.",
    fieldNotes: [
      "PPO / A2C",
      "SMA baseline",
      "Negative result retained",
      "Evidence over vanity",
    ],
  },
  {
    num: "08",
    category: "Software / Systems",
    tag: "Day Tracker",
    titleLines: ["Life,", "structured."],
    summary:
      "A personal productivity system for tasks, budgets, streaks, reminders and notes.",
    link: { href: "https://github.com/RYANX9/rystudio", label: "Read the code" },
    facts: [
      { label: "Storage", value: "PostgreSQL" },
      { label: "Features", value: "Todos / budget / streaks / notes" },
      { label: "Realtime", value: "Web push reminders" },
    ],
    description:
      "A personal productivity system connecting tasks, budgets, streaks, reminders, notes and web push into one practical application. A quieter kind of engineering: taking a collection of daily behaviours and turning them into one coherent system, designed around a human workflow rather than an algorithm.",
    metric: { big: "24/7", small: "A system built for daily use" },
    artSymbol: "day-tracker",
    artLabel: "intent → routine → memory",
    insight: "Small systems become valuable when they remove small amounts of friction every day.",
    fieldNotes: ["PostgreSQL", "Web Push", "Tasks / Budget / Notes", "Personal system"],
  },
  {
    num: "09",
    category: "Software / Systems",
    tag: "Git-Backed CMS",
    titleLines: ["Ship without", "a database."],
    summary: "A client portfolio whose admin panel commits straight back to the repo.",
    extra:
      "Built for Zaid Saad, a Flutter and Firebase developer, with no separate database or CMS involved.",
    link: { href: "https://zaid-saad.vercel.app", label: "See the product" },
    facts: [
      { label: "Client", value: "Zaid Saad — Flutter / Firebase developer" },
      { label: "Storage", value: "None — git is the database" },
      { label: "Write path", value: "GitHub Contents API" },
    ],
    description:
      "A portfolio administration system where content edits flow through the GitHub Contents API, keeping the repository itself as the source of truth. An /admin dashboard edits site content and posts to an API route that regenerates the data file and commits it straight back to the repository, so every edit is a real, versioned git commit.",
    metric: { big: "0", small: "Databases required" },
    artSymbol: "git-cms",
    artLabel: "edit → commit → publish",
    insight: "The portfolio is not only the interface. It is also a system for maintaining the interface.",
    fieldNotes: [
      "GitHub Contents API",
      "Repository as source of truth",
      "Client editing workflow",
      "Editorial principle / 01",
    ],
  },
];

export const about = {
  heading: ["Built between", "research & reality."],
  lead: {
    before: "I am an ",
    emphasis: "AI/ML engineer and full-stack developer",
    after: " focused on applied deep learning for clinical and diagnostic problems.",
  },
  body: "I tend to work across the whole distance between an idea and a working product: data, model architecture, evaluation, interfaces, APIs, databases and deployment. A model that cannot survive outside a notebook is not the finished work.",
  timeline: [
    {
      period: "2023",
      detail: "M.Sc. Electronics of Embedded Systems — Université Mohamed Boudiaf de M'sila",
      tag: "Education",
    },
    {
      period: "Research",
      detail: "Medical AI, computer vision, deep reinforcement learning, clinical decision support",
      tag: "Focus",
    },
    { period: "Recognition", detail: "Research award and additional academic recognitions", tag: "Selected" },
    { period: "Industry", detail: "AIRM contract / Hemolab contract / shipped software systems", tag: "Applied" },
  ],
};

export const contact = {
  heading: ["Have a", "problem?"],
  paragraph:
    "If the interesting part is somewhere between research and a real product, that is usually where I want to work.",
  links: [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Kaggle", href: profile.kaggle },
  ],
  footerLeft: "Ahmed Messaad / AI · ML · Full-stack",
  footerRight: "End of record",
};
