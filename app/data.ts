// All portfolio content lives here. Edit this file to change anything on the site —
// no need to touch component code for text, project, or link changes.

export const profile = {
  name: "Ahmed Messaad",
  role: "ML Engineer — Medical AI",
  tagline: "Building AI systems for clinical environments",
  location: "Sétif, Algeria",
  email: "ahmed.messaad@outlook.com",
  github: "https://github.com/RYANX9",
  linkedin: "https://linkedin.com/in/ahmedmessaad",
  resume: "/resume.pdf",
  avatar: "/ahmed.jpg",
  about: [
    "I build applied deep learning systems aimed at clinical and diagnostic use cases — imaging, sequential decision-making, and tabular health data.",
    "My focus is the gap between a model that scores well on a benchmark and one that could actually sit inside a clinical workflow: interpretability, safety constraints, and deployment-shaped engineering.",
  ],
};

export const stats = [
  { value: "99.5%", label: "clinical appropriateness, ICU treatment agent" },
  { value: "99%", label: "four-class tumor classification accuracy" },
  { value: "97%", label: "multi-class blood cell classification" },
  { value: "45→3min", label: "diagnostic time reduction, HemaVision" },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  link: string;
  linkText: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "treatment-drl",
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
    id: "airm",
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
    name: "Healthcare Cost Prediction",
    category: "Deep Learning",
    year: "2024",
    tagline: "Forecasting cost from temporal patterns",
    description:
      "A Conv1D network reaching R² = 0.88 for insurance cost forecasting. SHAP analysis identified the key cost drivers, backed by a systematic ablation study on temporal convolution strategies for healthcare prediction.",
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
    name: "My Daily Health",
    category: "Research Thesis",
    year: "2023",
    tagline: "One architecture search, five disease domains",
    description:
      "Multi-disease diagnostic platform reaching 90–99% accuracy across five disease domains. Ran a systematic comparative evaluation of 12 deep learning architectures with stratified cross-validation, investigating transfer learning for multi-domain medical classification.",
    tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
    metrics: [
      { label: "accuracy", value: "90–99%" },
      { label: "architectures tested", value: "12" },
      { label: "domains", value: "5" },
    ],
    link: "https://youtu.be/kh7WBjNPpEM",
    linkText: "Watch demo",
    image: "/daily.png",
  },
];

export const skills = [
  { group: "Modeling", items: ["PyTorch", "TensorFlow", "Stable-Baselines3", "Scikit-learn"] },
  { group: "Vision & Imaging", items: ["EfficientNet", "YOLOv8", "U-Net", "PyDICOM"] },
  { group: "Data & Eval", items: ["Pandas", "NumPy", "SHAP", "Plotly"] },
  { group: "Systems", items: ["SQL", "Flask", "PyQt5", "OpenCV"] },
];

export const contact = {
  heading: "Open to research collaborations and ML engineering roles",
  body: "Reach out if you're working on something in medical AI, or if you're a lab looking for an applied ML engineer.",
};
