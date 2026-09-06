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
  hint: "Scroll to inspect \u2193",
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
  eyebrow: "A working portfolio \u2014 not a r\u00e9sum\u00e9",
  headline: ["I build the model.", "Then the system."],
  statement: [
    { text: "My work sits between " },
    { text: "machine learning research", bold: true },
    {
      text: " and the software that makes a model useful: clinical AI, medical imaging, decision support, and full-stack products.",
    },
  ],
  method: {
    label: "Method / 01",
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
  note: "Eight projects across clinical intelligence, applied ML, products and research.",
};

export type CaseStudy = {
  num: string;
  category: string;
  tag: string;
  titleLines: [string, string];
  summary: string;
  extra?: string;
  link?: { href: string; label: string };
  facts: { label: string; value: string }[];
  description: string;
  metric: { big: string; small: string };
  artSymbol: string;
  artLabel: string;
};

export const cases: CaseStudy[] = [
  {
    num: "01",
    category: "Product / Full-stack",
    tag: "Specmob",
    titleLines: ["Spec", "mob."],
    summary: "A phone discovery system built around the way people actually search.",
    extra: "Search, filtering, comparison and recommendation across a large device catalogue.",
    link: { href: "https://specmob.vercel.app", label: "Open live site" },
    facts: [
      { label: "Stack", value: "Next.js / FastAPI / PostgreSQL" },
      { label: "Interface", value: "Search / compare / guided pick" },
      { label: "Intelligence", value: "Typo-tolerant search + Gemini copy layer" },
    ],
    description:
      "The product connects structured specifications with a usable discovery experience. Instead of presenting a database, it turns technical constraints into decisions: what fits a budget, which camera matters, what charges fastest, what should be compared.",
    metric: { big: "01\u2192N", small: "From one query to a shortlist" },
    artSymbol: "specmob",
    artLabel: "query \u2192 signal \u2192 choice",
  },
  {
    num: "02",
    category: "Clinical AI / Vision",
    tag: "HemaVision",
    titleLines: ["Blood", "understood."],
    summary:
      "A hematology platform that turns microscope imagery into a structured diagnostic workflow.",
    facts: [
      { label: "Result", value: "97% multi-class accuracy" },
      { label: "Workflow", value: "45 min \u2192 3 min diagnostic time" },
      { label: "Validation", value: "Clinical hematologist" },
    ],
    description:
      "Computer vision models identify blood-cell classes while the surrounding application turns inference into something a clinician can inspect and use. YOLOv8, U-Net, OpenCV and PyTorch sit underneath the product.",
    metric: { big: "97%", small: "Multi-class accuracy" },
    artSymbol: "hemavision",
    artLabel: "image \u2192 segmentation \u2192 diagnosis",
  },
  {
    num: "03",
    category: "Medical imaging",
    tag: "AIRM",
    titleLines: ["Read the", "scan."],
    summary: "A hospital-oriented MRI pipeline for four-class brain-tumor classification.",
    facts: [
      { label: "Result", value: "99% classification accuracy" },
      { label: "Input", value: "DICOM MRI pipeline" },
      { label: "Interface", value: "PyQt5 clinical application" },
    ],
    description:
      "The project was built around the gap between a trained classifier and a usable clinical tool: DICOM handling, preprocessing, inference, interface design and radiologist validation are treated as one system.",
    metric: { big: "99%", small: "Four-class classification" },
    artSymbol: "airm",
    artLabel: "DICOM / MRI / inference",
  },
  {
    num: "04",
    category: "Deep RL / Healthcare",
    tag: "Medical Treatment DRL",
    titleLines: ["When should", "treatment happen?"],
    summary: "A reinforcement-learning system for ICU treatment timing.",
    facts: [
      { label: "Data", value: "MIMIC-III" },
      { label: "Agent", value: "A2C" },
      { label: "Safety", value: "Custom filter + 26-D Gym environment" },
    ],
    description:
      "The research frames treatment timing as a sequential decision problem. The important part is not just the agent: state design, reward construction and a safety layer sit between an RL policy and a clinical recommendation.",
    metric: { big: "99.5%", small: "Clinical appropriateness" },
    artSymbol: "medical-drl",
    artLabel: "state \u2192 action \u2192 reward",
  },
  {
    num: "05",
    category: "Machine learning",
    tag: "Healthcare Cost",
    titleLines: ["Find the", "drivers."],
    summary: "A cost-prediction model designed to explain its own decisions.",
    facts: [
      { label: "Model", value: "Conv1D" },
      { label: "Result", value: "R\u00b2 0.88" },
      { label: "Interpretation", value: "47 engineered features + SHAP" },
    ],
    description:
      "Prediction is only half of the job. Feature engineering and SHAP analysis expose which signals influence projected healthcare cost and make the model easier to interrogate.",
    metric: { big: "0.88", small: "Coefficient of determination" },
    artSymbol: "healthcare-cost",
    artLabel: "features \u2192 model \u2192 explanation",
  },
  {
    num: "06",
    category: "Research / Thesis",
    tag: "My Daily Health",
    titleLines: ["One interface.", "Five diseases."],
    summary: "A multi-disease diagnostic platform developed as an M.Sc. thesis.",
    facts: [
      { label: "Domains", value: "Five disease areas" },
      { label: "Architectures", value: "12 evaluated" },
      { label: "Reported accuracy", value: "90\u201399%" },
    ],
    description:
      "The project explores how multiple diagnostic models can coexist inside one product rather than becoming disconnected notebooks. It brings model selection, inference and user interaction into one application.",
    metric: { big: "12", small: "Architectures evaluated" },
    artSymbol: "my-daily-health",
    artLabel: "many models / one system",
  },
  {
    num: "07",
    category: "Deep RL / Experiment",
    tag: "Crypto Trading",
    titleLines: ["The useful", "failure."],
    summary: "An honest experiment where PPO/A2C did not beat a simple SMA strategy.",
    facts: [
      { label: "Agents", value: "PPO / A2C" },
      { label: "Baseline", value: "SMA" },
      { label: "Finding", value: "RL limits in noisy markets" },
    ],
    description:
      "Not every experiment should end in a victory lap. The result became the finding: in a noisy, non-stationary environment, greater model complexity did not guarantee a better strategy.",
    metric: { big: "SMA", small: "Baseline that won the test" },
    artSymbol: "crypto-rl",
    artLabel: "hypothesis \u2192 test \u2192 evidence",
  },
  {
    num: "08",
    category: "Software / Systems",
    tag: "Day Tracker",
    titleLines: ["Life,", "structured."],
    summary:
      "A personal productivity system for tasks, budgets, streaks, reminders and notes.",
    facts: [
      { label: "Storage", value: "PostgreSQL" },
      { label: "Features", value: "Todos / budget / streaks / notes" },
      { label: "Realtime", value: "Web push reminders" },
    ],
    description:
      "A quieter kind of engineering: taking a collection of daily behaviours and turning them into one coherent system. The project is less about algorithms and more about designing reliable state around a human workflow.",
    metric: { big: "24/7", small: "A system built for daily use" },
    artSymbol: "day-tracker",
    artLabel: "intent \u2192 routine \u2192 memory",
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
      detail: "M.Sc. Electronics of Embedded Systems \u2014 Universit\u00e9 Mohamed Boudiaf de M\u2019sila",
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
  footerLeft: "Ahmed Messaad / AI \u00b7 ML \u00b7 Full-stack",
  footerRight: "End of record",
};
