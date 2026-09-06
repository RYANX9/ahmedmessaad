export type Project = {
  id: string
  type: string
  rail: string
  title: string
  titleItalic?: string
  description: string
  linkLabel: string
  link: string
  meta: { label: string; value: string }[]
  longDescription: string
  result: string
  resultLabel: string
  resultNote: string
  artLabel: string
  artCoord: string
}

export const projects: Project[] = [
  {
    id: "01",
    type: "Product / Full-stack",
    rail: "01 / PRODUCT / DISCOVERY",
    title: "Specmob.",
    description: "A phone discovery system built around the way people actually search. Search, filtering, comparison and recommendation across a large device catalogue.",
    linkLabel: "Open live site",
    link: "https://specmob.vercel.app",
    meta: [
      { label: "Stack", value: "Next.js / FastAPI / PostgreSQL" },
      { label: "Interface", value: "Search / compare / guided pick" },
      { label: "Intelligence", value: "Typo-tolerant search + Gemini copy layer" },
    ],
    longDescription: "The product connects structured specifications with a usable discovery experience. Instead of presenting a database, it turns technical constraints into decisions: what fits a budget, which camera matters, what charges fastest, what should be compared.",
    result: "01→N",
    resultLabel: "From one query to a shortlist",
    resultNote: "query → signal → choice",
    artLabel: "SEARCH / MATCH / RANK",
    artCoord: "X 042 — Y 918",
  },
  {
    id: "02",
    type: "Clinical AI / Vision",
    rail: "02 / CLINICAL / VISION",
    title: "Blood",
    titleItalic: "understood.",
    description: "A hematology platform that turns microscope imagery into a structured diagnostic workflow. Validated by a practicing clinical hematologist, then featured on BBC News Arabic's 4Tech program.",
    linkLabel: "BBC coverage",
    link: "https://www.youtube.com/watch?v=fX77vZlHkng",
    meta: [
      { label: "Result", value: "97% multi-class accuracy" },
      { label: "Workflow", value: "45 min → 3 min diagnostic time" },
      { label: "Validation", value: "Clinical hematologist" },
    ],
    longDescription: "Computer vision models identify blood-cell classes while the surrounding application turns inference into something a clinician can inspect and use. YOLOv8, U-Net, OpenCV and PyTorch sit underneath the product.",
    result: "97%",
    resultLabel: "Multi-class accuracy",
    resultNote: "image → segmentation → diagnosis",
    artLabel: "CELL / SEGMENT / DIAGNOSE",
    artCoord: "VISION / HEMATOLOGY",
  },
  {
    id: "03",
    type: "Medical Imaging",
    rail: "03 / MEDICAL / IMAGING",
    title: "Read the",
    titleItalic: "scan.",
    description: "A hospital-oriented MRI pipeline for four-class brain-tumor classification.",
    linkLabel: "Watch demo",
    link: "https://youtu.be/2OeqBKF3X_A",
    meta: [
      { label: "Result", value: "99% classification accuracy" },
      { label: "Input", value: "DICOM MRI pipeline" },
      { label: "Interface", value: "PyQt5 clinical application" },
    ],
    longDescription: "The project was built around the gap between a trained classifier and a usable clinical tool: DICOM handling, preprocessing, inference, interface design and radiologist validation are treated as one system.",
    result: "99%",
    resultLabel: "Four-class classification",
    resultNote: "DICOM / MRI / inference",
    artLabel: "DICOM / MRI / INFERENCE",
    artCoord: "4-CLASS / SCAN",
  },
  {
    id: "04",
    type: "Deep RL / Healthcare",
    rail: "04 / RL / HEALTHCARE",
    title: "When should",
    titleItalic: "treatment happen?",
    description: "A reinforcement-learning system for ICU treatment timing.",
    linkLabel: "View code",
    link: "https://github.com/RYANX9/medical-treatment-drl/",
    meta: [
      { label: "Data", value: "MIMIC-III" },
      { label: "Agent", value: "A2C" },
      { label: "Safety", value: "Custom filter + 26-D Gym environment" },
    ],
    longDescription: "The research frames treatment timing as a sequential decision problem. The important part is not just the agent: state design, reward construction and a safety layer sit between an RL policy and a clinical recommendation.",
    result: "99.5%",
    resultLabel: "Clinical appropriateness",
    resultNote: "state → action → reward",
    artLabel: "STATE / ACTION / REWARD",
    artCoord: "ICU / SEQUENTIAL",
  },
  {
    id: "05",
    type: "Machine Learning",
    rail: "05 / ML / EXPLANATION",
    title: "Find the",
    titleItalic: "drivers.",
    description: "A cost-prediction model designed to explain its own decisions.",
    linkLabel: "View code",
    link: "https://github.com/RYANX9/healthcare-cost-prediction",
    meta: [
      { label: "Model", value: "Conv1D" },
      { label: "Result", value: "R² 0.88" },
      { label: "Interpretation", value: "47 engineered features + SHAP" },
    ],
    longDescription: "Prediction is only half of the job. Feature engineering and SHAP analysis expose which signals influence projected healthcare cost and make the model easier to interrogate.",
    result: "0.88",
    resultLabel: "Coefficient of determination",
    resultNote: "features → model → explanation",
    artLabel: "FEATURES / MODEL / EXPLAIN",
    artCoord: "SHAP / SIGNAL",
  },
  {
    id: "06",
    type: "Research / Thesis",
    rail: "06 / HEALTH / MULTI-MODEL",
    title: "One interface.",
    titleItalic: "Five diseases.",
    description: "A multi-disease diagnostic platform developed as an M.Sc. thesis.",
    linkLabel: "Watch demo",
    link: "https://youtu.be/kh7WBjNPpEM",
    meta: [
      { label: "Domains", value: "Five disease areas" },
      { label: "Architectures", value: "12 evaluated" },
      { label: "Reported accuracy", value: "90–99%" },
    ],
    longDescription: "The project explores how multiple diagnostic models can coexist inside one product rather than becoming disconnected notebooks. It brings model selection, inference and user interaction into one application.",
    result: "12",
    resultLabel: "Architectures evaluated",
    resultNote: "many models / one system",
    artLabel: "12 MODELS / 5 DOMAINS",
    artCoord: "MULTI-SYSTEM MAP",
  },
  {
    id: "07",
    type: "Deep RL / Experiment",
    rail: "07 / RL / FAILURE",
    title: "The useful",
    titleItalic: "failure.",
    description: "An honest experiment where PPO/A2C did not beat a simple SMA strategy.",
    linkLabel: "View code",
    link: "https://github.com/RYANX9/deep-rl-trading",
    meta: [
      { label: "Agents", value: "PPO / A2C" },
      { label: "Baseline", value: "SMA" },
      { label: "Finding", value: "RL limits in noisy markets" },
    ],
    longDescription: "Not every experiment should end in a victory lap. The result became the finding: in a noisy, non-stationary environment, greater model complexity did not guarantee a better strategy.",
    result: "SMA",
    resultLabel: "Baseline that won the test",
    resultNote: "hypothesis → test → evidence",
    artLabel: "PPO / A2C / BASELINE",
    artCoord: "COMPARISON / NOISE",
  },
  {
    id: "08",
    type: "Software / Systems",
    rail: "08 / PRODUCTIVITY / SYSTEM",
    title: "Life,",
    titleItalic: "structured.",
    description: "A personal productivity system for tasks, budgets, streaks, reminders and notes.",
    linkLabel: "View code",
    link: "https://github.com/RYANX9/rystudio",
    meta: [
      { label: "Storage", value: "PostgreSQL" },
      { label: "Features", value: "Todos / budget / streaks / notes" },
      { label: "Realtime", value: "Web push reminders" },
    ],
    longDescription: "A quieter kind of engineering: taking a collection of daily behaviours and turning them into one coherent system. The project is less about algorithms and more about designing reliable state around a human workflow.",
    result: "24/7",
    resultLabel: "A system built for daily use",
    resultNote: "intent → routine → memory",
    artLabel: "DAY / HABIT / MEMORY",
    artCoord: "WEEK 38",
  },
  {
    id: "09",
    type: "Software / Systems",
    rail: "09 / CMS / GIT",
    title: "Ship without",
    titleItalic: "a database.",
    description: "A client portfolio whose admin panel commits straight back to the repo. Built for Zaid Saad, a Flutter and Firebase developer, with no separate database or CMS involved.",
    linkLabel: "Visit site",
    link: "https://zaid-saad.vercel.app",
    meta: [
      { label: "Client", value: "Zaid Saad — Flutter / Firebase developer" },
      { label: "Storage", value: "None — git is the database" },
      { label: "Write path", value: "GitHub Contents API" },
    ],
    longDescription: "An /admin dashboard edits site content and posts to an API route that regenerates the data file and commits it straight back to the repository through the GitHub Contents API. The live data file stays the single source of truth, and every edit is a real, versioned git commit.",
    result: "0",
    resultLabel: "Databases required",
    resultNote: "edit → commit → publish",
    artLabel: "EDIT / COMMIT / DEPLOY",
    artCoord: "SOURCE OF TRUTH",
  },
]

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const aboutFacts = [
  { label: "2023", value: "M.Sc. Electronics of Embedded Systems — Université Mohamed Boudiaf de M’sila", note: "Education" },
  { label: "Research", value: "Medical AI, computer vision, deep reinforcement learning, clinical decision support", note: "Focus" },
  { label: "Recognition", value: "Research award and additional academic recognitions", note: "Selected" },
  { label: "Industry", value: "AIRM contract / Hemolab contract / shipped software systems", note: "Applied" },
]
