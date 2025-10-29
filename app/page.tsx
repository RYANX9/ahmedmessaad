"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkle, Mail, Download, Linkedin, Github } from "lucide-react";

/**
 * Combined portfolio single-file React component
 * - Merges strengths of Design #1 (research focus, clean grid) and Design #2 (cinematic intro, staged transitions)
 * - Single file for quick preview / drop-in to Next.js (app router) page.tsx
 * - Tailwind utility classes are used throughout (assumes Tailwind + Framer Motion + lucide-react installed)
 */

type Project = {
  id: string;
  title: string;
  link?: string;
  date?: string;
  desc: string;
  tech: string[];
};

const PROJECTS: Project[] = [
  {
    id: "airm",
    title: "AIRM — Brain Tumor System",
    link: "https://youtu.be/2OeqBKF3X_A",
    date: "2024",
    desc:
      "Production-ready diagnostic system achieving 99% accuracy across four tumor categories. End-to-end DICOM pipeline with clinical interface.",
    tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
  },
  {
    id: "hemav",
    title: "HemaVision",
    link: "https://youtu.be/YxhA877Wyn0",
    date: "2023–2024",
    desc:
      "Automated hematology platform with 97% classification accuracy. Reduced diagnostic time from 45 minutes to 3 minutes.",
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
  },
  {
    id: "daily-health",
    title: "My Daily Health",
    link: "https://youtu.be/kh7WBjNPpEM",
    date: "2023",
    desc:
      "Multi-disease diagnostic platform with 90-99% accuracy across five disease domains. Systematic evaluation of 12 architectures.",
    tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
  },
  {
    id: "cost-pred",
    title: "Healthcare Cost Prediction",
    link: "https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks",
    date: "2024",
    desc:
      "Conv1D neural network achieving R² = 0.88 for insurance cost forecasting. Feature engineering with SHAP analysis.",
    tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
  },
];

const leftSlideIn: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 14 } },
};

const rightSlideIn: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 14, delay: 0.12 } },
};

const fadeInUp: Variants = {
  hidden: { y: 18, opacity: 0 },
  visible: (i = 0) => ({ y: 0, opacity: 1, transition: { delay: 0.08 + i * 0.06, duration: 0.45, ease: "easeOut" } }),
};

const floatY: Variants = {
  initial: { y: 0 },
  animate: { y: [-4, 4, -4], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
};

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);
    const handler = () => setPrefers(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return prefers;
}

function ProjectCardMini({ project, onOpen }: { project: Project; onOpen: (id: string) => void }) {
  return (
    <div
      className="p-3 border border-white/6 rounded-xl mb-3 hover:shadow-lg transition-shadow cursor-pointer bg-white/3"
      onClick={() => onOpen(project.id)}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-gray-300">{project.date}</div>
          <div className="font-semibold text-sm mt-1">{project.title}</div>
        </div>
        <div className="text-xs text-gray-400">{project.tech.join(" • ")}</div>
      </div>
      <p className="text-xs text-gray-300 mt-2 line-clamp-3">{project.desc}</p>
    </div>
  );
}

export default function Page() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    // Cinematic staged intro: short timed sequence that resolves to interactive UI
    if (prefersReduced) {
      setIsIntroComplete(true);
      return;
    }
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setIsIntroComplete(true), 900));
    return () => timers.forEach((t) => clearTimeout(t));
  }, [prefersReduced]);

  const openProject = (id: string) => {
    const idx = PROJECTS.findIndex((p) => p.id === id);
    if (idx >= 0) setActiveIdx(idx);
  };

  const next = () => setActiveIdx((s) => (s + 1) % PROJECTS.length);
  const prev = () => setActiveIdx((s) => (s - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <main className="min-h-screen bg-[#0f1115] text-gray-100 font-sans antialiased p-6 lg:p-10">
      {/* Global fonts + small resets (assumes global fonts imported elsewhere) */}

      {/* Header */}
      <header className={`fixed inset-x-6 top-6 z-40 rounded-xl border border-white/6 bg-black/40 backdrop-blur-md p-3 flex items-center justify-between transition-all ${isIntroComplete ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        <div className="font-mono text-sm font-bold tracking-wider hidden lg:block">AHMED MESSAAD</div>
        <div className="flex items-center gap-3">
          <a href="/ahmed_messad_cv.pdf" download className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/8 hover:bg-white/3 transition">
            <Download className="w-4 h-4" />
            <span className="text-xs font-mono">DOWNLOAD CV</span>
          </a>
          <button
            onClick={() => setShowFooter((s) => !s)}
            className="rounded-md px-3 py-1.5 border border-white/8 hover:bg-white/3 transition flex items-center gap-2">
            <Sparkle className="w-4 h-4" />
            <span className="text-xs">Contact</span>
          </button>
        </div>
      </header>

      {/* Intro grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left — cinematic hero */}
        <motion.section
          variants={leftSlideIn}
          initial="hidden"
          animate={isIntroComplete ? "visible" : "hidden"}
          className="lg:col-span-5 bg-[#0a0a0a] border border-[#232426] rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[360px]"
        >
          <div className="relative">
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
              initial="hidden"
              animate={isIntroComplete ? "visible" : "hidden"}
            >
              <img src="/ahmed.jpg" alt="Ahmed" className="w-full h-full object-cover" />
            </motion.div>

            <motion.h1 variants={fadeInUp} custom={1} className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Ahmed Messaad
            </motion.h1>

            <motion.div variants={fadeInUp} custom={2} className="text-sm text-gray-400 mt-1">
              AI Research Engineer • M'sila, Algeria
            </motion.div>

            <motion.p variants={fadeInUp} custom={3} className="mt-4 text-gray-300 leading-relaxed">
              Building clinically-deployable computer vision systems — focusing on interpretable models, transfer-learning optimization, and robust DICOM pipelines for resource-constrained clinical environments.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} custom={4} className="mt-6 flex gap-3 flex-wrap">
            <a href="mailto:ahmed.messaad@outlook.com" className="px-4 py-2 rounded-2xl border border-white/10 text-sm hover:bg-white/4 transition">Contact</a>
            <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-2xl bg-white/5 text-sm hover:bg-white/8 transition">LinkedIn</a>
          </motion.div>

          <motion.div variants={fadeInUp} custom={5} className="mt-6 text-xs text-gray-400">
            <strong className="text-gray-200">Expertise:</strong> Deep learning for medical imaging • Explainable AI • Clinical validation • Edge deployment
          </motion.div>
        </motion.section>

        {/* Middle — profile canvas (cinematic positioning from design 2) */}
        <motion.section
          variants={floatY}
          initial="initial"
          animate={isIntroComplete ? "animate" : "initial"}
          className="lg:col-span-4 bg-[#151719] border border-[#202223] rounded-2xl p-4 flex items-center justify-center min-h-[360px] relative overflow-hidden"
        >
          {/* Layered card to create depth + reveal effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[85%] rounded-xl border border-white/6 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 w-full max-w-[420px] p-4">
            <motion.div variants={fadeInUp} custom={0} className="text-xs text-gray-300">Profile</motion.div>
            <motion.h3 variants={fadeInUp} custom={1} className="text-lg font-semibold mt-1">Multidisciplinary Research & Systems</motion.h3>
            <motion.p variants={fadeInUp} custom={2} className="mt-3 text-sm text-gray-300 leading-relaxed">
              I design pipelines that move models from prototypes to clinical deployment — prioritizing interpretability, robustness, and efficiency.
            </motion.p>

            <motion.div className="mt-5 flex gap-2" variants={fadeInUp} custom={3}>
              <div className="text-xs text-gray-400">M.Sc. Embedded Systems</div>
              <div className="text-gray-500">•</div>
              <div className="text-xs text-gray-400">ICSTEM 2023 — Outstanding Research</div>
            </motion.div>

            <motion.div className="mt-6 flex gap-2 justify-between items-center" variants={fadeInUp} custom={4}>
              <button onClick={prev} className="px-3 py-1 rounded-full border border-white/10 hover:bg-white/4 transition">← Prev</button>
              <a href={PROJECTS[activeIdx].link} target="_blank" rel="noreferrer" onClick={(e)=>{e.stopPropagation()}} className="text-sm text-cyan-400 hover:underline">View Demo ↗</a>
              <button onClick={next} className="px-3 py-1 rounded-full border border-white/10 hover:bg-white/4 transition">Next →</button>
            </motion.div>
          </div>
        </motion.section>

        {/* Right — projects list (scrollable) */}
        <aside className="lg:col-span-3 row-span-1 bg-[#0a0a0a] border border-[#232426] rounded-2xl p-4 flex flex-col min-h-[360px]">
          <div className="text-xs text-gray-400 uppercase tracking-wider font-accent">Projects</div>
          <div className="mt-3 overflow-y-auto invisible-scroll pr-2">
            {PROJECTS.map((p) => (
              <ProjectCardMini key={p.id} project={p} onOpen={openProject} />
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-white/6 pt-3">
            <div className="text-xs text-gray-400">Focused skills</div>
            <div className="mt-2 text-sm font-mono text-gray-200">Explainable ML • DICOM • Transfer Learning • Edge Deployments</div>
          </div>
        </aside>

        {/* Full-width content below on large screens */}
        <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {/* Large project spotlight */}
          <section className={`col-span-2 bg-white/3 border border-white/6 rounded-2xl p-5 min-h-[220px] transition-all ${isIntroComplete ? "opacity-100" : "opacity-0 translate-y-6"}`}>
            <AnimatePresence mode="wait">
              <motion.div key={PROJECTS[activeIdx].id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-gray-300">Project</div>
                    <h3 className="text-xl font-semibold mt-1">{PROJECTS[activeIdx].title}</h3>
                    <div className="text-xs text-gray-400 mt-1">{PROJECTS[activeIdx].date} • {PROJECTS[activeIdx].tech.join(' • ')}</div>
                  </div>
                  <div className="text-xs text-gray-400">{PROJECTS[activeIdx].link ? <a href={PROJECTS[activeIdx].link} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Demo</a> : null}</div>
                </div>

                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{PROJECTS[activeIdx].desc}</p>

                <div className="mt-4 flex gap-2">
                  <button onClick={prev} className="px-3 py-1 rounded-md border border-white/8">Prev</button>
                  <button onClick={next} className="px-3 py-1 rounded-md border border-white/8">Next</button>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          {/* About & Contact compact cards */}
          <div className="col-span-1 flex flex-col gap-4">
            <section className={`bg-[#0a0a0a] border border-[#232426] rounded-2xl p-4 transition-all ${isIntroComplete ? "opacity-100" : "opacity-0 translate-y-6"}`}>
              <div className="text-xs text-gray-400">About</div>
              <h4 className="font-semibold mt-2">Research & Systems Engineering</h4>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">I build end-to-end solutions that bring models to hospitals: from DICOM ingestion and clinical UI to validation and monitoring.</p>
            </section>

            <section className={`bg-[#151719] border border-[#232426] rounded-2xl p-4 cursor-pointer hover:bg-[#1a1b1c] transition-all`} onClick={()=> window.location.href = 'mailto:ahmed.messaad@outlook.com'}>
              <div className="text-xs text-gray-400">Contact</div>
              <h4 className="font-semibold mt-2">Let’s collaborate</h4>
              <div className="mt-3 flex gap-3 items-center">
                <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" onClick={(e)=>e.stopPropagation()} className="flex items-center gap-2 text-xs text-gray-300 hover:text-white"><Linkedin className="w-4 h-4"/> LinkedIn</a>
                <a href="https://github.com/RYANX9" target="_blank" rel="noreferrer" onClick={(e)=>e.stopPropagation()} className="flex items-center gap-2 text-xs text-gray-300 hover:text-white"><Github className="w-4 h-4"/> GitHub</a>
              </div>
            </section>
          </div>
        </div>

        {/* Mobile stacked fallback: duplicates but only visible on md:hidden via classes if desired (kept minimal) */}
      </div>

      {/* Footer floating */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={isIntroComplete ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.6, type: "spring", stiffness: 80 }} className="bg-white/6 border border-white/8 rounded-full px-4 py-2 backdrop-blur-md flex items-center gap-4">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }}>
            <Sparkle className="w-4 h-4 text-white/90" />
          </motion.div>
          <div className="text-sm font-mono">Ahmed Messaad</div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-gray-300">
            <div>AI Research Engineer</div>
            <a href="mailto:ahmed.messaad@outlook.com" className="underline">ahmed.messaad@outlook.com</a>
          </div>
        </motion.div>
      </div>

      {/* Small style tweaks: ensure invisible scrollbars and responsive fonts (these could be in global styles) */}
      <style jsx>{`
        .invisible-scroll::-webkit-scrollbar { display: none; }
        .invisible-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
