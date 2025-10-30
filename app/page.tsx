// app/page.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

// =============================================================================
// DATA (from your data.ts)
// =============================================================================
export interface Project {
  id: string;
  name: string;
  context: string;
  year: string;
  description: string;
  tech: string[];
  link: string;
  linkText: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    id: "treatment-drl",
    name: "Medical Treatment DRL",
    context: "Sequential Decision-Making Research",
    year: "2025",
    description:
      "ICU treatment timing system trained on MIMIC-III data. A2C agent achieved 99.5% clinical appropriateness with +76–145 reward improvement over baselines. Implemented rule-based safety filter boosting PPO/DQN appropriateness by 40 points. Custom 26D Gym environment with temporal lab trends and treatment effect simulation.",
    tech: ["Stable-Baselines3", "Gym", "NumPy", "Pandas", "MIMIC-III"],
    link: "https://github.com/RYANX9/medical-treatment-drl/",
    linkText: "View Code",
    image: "/clinrl.jpeg",
  },
  {
    id: "airm",
    name: "AIRM Brain Tumor System",
    context: "Clinical AI Research",
    year: "2024",
    description:
      "Clinical-grade diagnostic system achieving 99% four-class tumor classification with radiologist-validated interface. End-to-end DICOM pipeline development investigating optimal preprocessing strategies for limited medical imaging datasets. Deployment-ready architecture with clinical workflow integration.",
    tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
    link: "https://youtu.be/2OeqBKF3X_A",
    linkText: "Watch Demo",
    image: "/brain.jpg",
  },
  {
    id: "hemavision",
    name: "HemaVision",
    context: "Medical Automation",
    year: "2023–2024",
    description:
      "Automated hematology platform achieving 97% multi-class blood cell classification. Reduced diagnostic time from 45 minutes to 3 minutes through optimized detection pipeline. Research investigating efficient segmentation architectures for microscopy imaging in clinical workflows.",
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
    link: "https://youtu.be/YxhA877Wyn0",
    linkText: "Watch Demo",
    image: "/blood.jpg",
  },
  {
    id: "healthcost",
    name: "Healthcare Cost Prediction",
    context: "Deep Learning Methodology",
    year: "2024",
    description:
      "Conv1D neural network achieving R² = 0.88 for insurance cost forecasting. Feature engineering with SHAP analysis identified key cost drivers. Systematic ablation study investigating optimal temporal convolution strategies for healthcare prediction tasks.",
    tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
    link: "https://github.com/RYANX9/healthcare-cost-prediction",
    linkText: "View Code",
    image: "/healthcarecost.png",
  },
];

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export default function Page() {
  // Filter out any empty projects just in case
  const projects = projectsData.filter((p) => p.id);

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-gray-100 font-sans p-3 md:p-4">
      {/* This is the main grid layout.
        - On desktop (md:): 3x2 grid, filling the screen, no scroll.
        - On mobile: 1-column grid, which will scroll naturally.
      */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 md:h-[calc(100vh-2rem)]"
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ======================= */}
        {/* CELL 1: INTRO / NAME */}
        {/* ======================= */}
        <motion.div
          variants={gridItemVariants}
          className="row-span-1 flex flex-col justify-between p-6 md:p-8 border border-gray-800 rounded-xl bg-[#111111]"
        >
          {/* Top part for alignment */}
          <div className="text-xs text-gray-600 font-mono tracking-widest">
            AHMED MESSAAD
          </div>

          {/* Bottom part with BIG/SMALL typo */}
          <div className="mt-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-gray-50 leading-none">
              AI Research
              <br />
              Engineer
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-400 max-w-md">
              Specializing in clinically-deployable computer vision and
              reinforcement learning systems.
            </p>
          </div>
        </motion.div>

        {/* ======================= */}
        {/* CELL 2: PROJECT 1 */}
        {/* ======================= */}
        <motion.div variants={gridItemVariants}>
          <ProjectCard project={projects[0]} />
        </motion.div>

        {/* ======================= */}
        {/* CELL 3: PROJECT 2 */}
        {/* ======================= */}
        <motion.div variants={gridItemVariants}>
          <ProjectCard project={projects[1]} />
        </motion.div>

        {/* ======================= */}
        {/* CELL 4: PROJECT 3 */}
        {/* ======================= */}
        <motion.div variants={gridItemVariants}>
          <ProjectCard project={projects[2]} />
        </motion.div>

        {/* ======================= */}
        {/* CELL 5: PROJECT 4 */}
        {/* ======================= */}
        <motion.div variants={gridItemVariants}>
          <ProjectCard project={projects[3]} />
        </motion.div>

        {/* ======================= */}
        {/* CELL 6: LINKS / CV */}
        {/* ======================= */}
        <motion.div
          variants={gridItemVariants}
          className="row-span-1 flex flex-col p-6 md:p-8 border border-gray-800 rounded-xl bg-[#111111] space-y-4"
        >
          <div className="text-xs text-gray-600 font-mono tracking-widest">
            CONNECT
          </div>

          {/* Links List */}
          <div className="flex flex-col flex-1 justify-center space-y-3">
            <LinkButton
              href="/ahmed_messaad_cv.pdf"
              title="Download CV"
              icon={<Download className="w-4 h-4" />}
              isDownload={true}
            />
            <LinkButton
              href="mailto:ahmed.messaad@outlook.com"
              title="ahmed.messaad@outlook.com"
              icon={<ArrowUpRight className="w-4 h-4" />}
            />
            <LinkButton
              href="https://linkedin.com/in/ahmedmessaad"
              title="LinkedIn"
              icon={<ArrowUpRight className="w-4 h-4" />}
            />
            <LinkButton
              href="https://github.com/RYANX9"
              title="GitHub"
              icon={<ArrowUpRight className="w-4 h-4" />}
            />
          </div>
          <div className="text-xs text-gray-700 font-mono mt-auto pt-4">
            M'sila, Algeria
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

/**
 * ProjectCard Component
 * This is the equal-sized card for the grid.
 */
interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  if (!project) return null; // Handle cases with fewer than 4 projects

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="h-full min-h-[40vh] md:min-h-0 w-full p-6 md:p-7 flex flex-col justify-between border border-gray-800 rounded-xl relative overflow-hidden group"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.03,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 z-0" />

      {/* Content */}
      <div className="relative z-10 flex justify-between text-gray-300">
        <span className="text-xs font-mono uppercase tracking-widest">
          {project.context}
        </span>
        <span className="text-xs font-mono">{project.year}</span>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-50">
          {project.name}
        </h3>
        <div className="flex items-center space-x-2 mt-2 text-sm text-cyan-400">
          <span>{project.linkText}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.a>
  );
}

/**
 * LinkButton Component
 * A reusable component for the links in the 6th grid cell.
 */
interface LinkButtonProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  isDownload?: boolean;
}

function LinkButton({ href, title, icon, isDownload = false }: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target={isDownload ? undefined : "_blank"}
      download={isDownload ? true : undefined}
      rel={isDownload ? undefined : "noreferrer"}
      className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-200 group hover:border-gray-600 transition-colors duration-200"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <span className="text-sm font-medium">{title}</span>
      <div className="text-gray-500 group-hover:text-gray-200 transition-colors duration-200">
        {icon}
      </div>
    </motion.a>
  );
}
