"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle } from "lucide-react";

// Combined Design — Desktop "deck" (no scroll), responsive mobile with scroll
// Tailwind CSS assumed. Framer Motion + lucide-react assumed installed.

interface Project {
  id: string;
  title: string;
  link: string;
  date: string;
  desc: string;
  tech: string[];
}

const projects: Project[] = [
  {
    id: "airm",
    title: "AIRM Brain Tumor System",
    link: "https://youtu.be/2OeqBKF3X_A",
    date: "2024",
    desc: "Production-ready diagnostic system achieving 99% accuracy across four tumor categories. Built end-to-end DICOM pipeline with clinical interface validated by radiologists.",
    tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
  },
  {
    id: "hemavision",
    title: "HemaVision",
    link: "https://youtu.be/YxhA877Wyn0",
    date: "2023–2024",
    desc: "Automated hematology platform with 97% classification accuracy. Reduced diagnostic time from 45 minutes to 3 minutes while maintaining clinical-grade precision.",
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
  },
  {
    id: "daily",
    title: "My Daily Health",
    link: "https://youtu.be/kh7WBjNPpEM",
    date: "2023",
    desc: "Multi-disease diagnostic platform with 90-99% accuracy across five disease domains. Systematic evaluation of 12 architectures using stratified cross-validation.",
    tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
  },
  {
    id: "cost",
    title: "Healthcare Cost Prediction",
    link: "https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks",
    date: "2024",
    desc: "Conv1D neural network achieving R² = 0.88 for insurance cost forecasting. Feature engineering with SHAP analysis identified key cost drivers.",
    tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
  },
];

export default function Design3Combined() {
  const [current, setCurrent] = useState(0);
  const [footerOpen, setFooterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  // Prevent desktop scrolling (deck experience) — allow mobile scroll
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const isDesktop = window.innerWidth >= 1024;
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.style.overflow = isDesktop ? "hidden" : "auto";
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Autoplay carousel on desktop/tablet; pause on mobile
  useEffect(() => {
    const start = () => {
      stopAutoplay();
      autoplayRef.current = window.setInterval(() => {
        setCurrent((p) => (p + 1) % projects.length);
      }, 6000);
    };

    const stop = () => stopAutoplay();

    const isDesktopLike = typeof window !== "undefined" && window.innerWidth >= 768;
    if (isDesktopLike) start();
    window.addEventListener("blur", stop);
    window.addEventListener("focus", start);
    window.addEventListener("visibilitychange", () => {
      if (document.hidden) stop(); else start();
    });

    return () => {
      stop();
      window.removeEventListener("blur", stop);
      window.removeEventListener("focus", start);
    };
  }, []);

  function stopAutoplay() {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  const next = () => {
    stopAutoplay();
    setCurrent((c) => (c + 1) % projects.length);
  };
  const prev = () => {
    stopAutoplay();
    setCurrent((c) => (c - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Motion variants
  const containerIn = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
  const slideLeft = { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  const slideRight = { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  const float = { animate: { y: [-3, 3, -3], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } } };

  return (
    <main className="min-h-screen w-full bg-[#0b0c0e] text-white font-sans antialiased">
      {/* Global fonts + utility styles (kept minimal) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=IBM+Plex+Mono:wght@400;600&family=Space+Grotesk:wght@400;600&display=swap');
        :root { --accent: #00c2d6; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { background: #0b0c0e; }
        /* Hide scrollbar on desktop deck when overflow hidden */
        @media (min-width: 1024px) {
          ::-webkit-scrollbar { display: none; }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 lg:h-20 z-50 bg-transparent backdrop-blur-sm px-6 lg:px-12 flex items-center justify-between">
        <div className="font-mono text-sm lg:text-base tracking-wider">AHMED MESSAAD</div>
        <div className="flex items-center gap-3">
          <a href="/ahmed_messad_cv.pdf" download className="hidden lg:inline-flex items-center bg-[#101113] border border-[#222326] px-3 py-2 rounded-md text-sm hover:bg-[#161718] transition">
            DOWNLOAD CV
          </a>
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#2a2a2a] bg-[#0f1113] hover:bg-[#131416] transition lg:hidden text-sm"
          >
            Projects
          </button>
        </div>
      </header>

      {/* Layout: Desktop is deck (no scroll), Mobile stacks and scrolls */}
      <div className="pt-20 lg:pt-24 lg:h-screen lg:overflow-hidden">
        <div className="max-w-[1400px] mx-auto h-full px-4 lg:px-8 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left — Intro / Profile (col-span 5) */}
          <motion.section
            className="lg:col-span-5 col-span-12 flex flex-col justify-center gap-6 lg:gap-8 py-6"
            initial="hidden"
            animate="visible"
            variants={containerIn}
          >
            <motion.div className="rounded-2xl p-6 bg-gradient-to-b from-[#0f1113] to-[#0b0c0e] border border-[#202124] shadow-xl flex flex-col gap-4 lg:gap-6" variants={slideLeft}>
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-xl flex-shrink-0"
                  whileHover={{ scale: 1.03, rotate: 1.5 }}
                  {...float}
                >
                  <img src="/ahmed.jpg" alt="Ahmed Messaad" className="w-full h-full object-cover" />
                </motion.div>
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">Ahmed Messaad</h1>
                  <div className="text-sm text-gray-400 mt-1">AI Research Engineer • M'sila, Algeria</div>
                </div>
              </div>

              <p className="text-sm text-gray-300 max-w-xl">
                I build clinically-deployable computer vision systems — focusing on transfer learning optimization, interpretable models, and robust DICOM pipelines for low-resource settings.
              </p>

              <div className="flex items-center gap-3">
                <a href="mailto:ahmed.messaad@outlook.com" className="px-4 py-2 rounded-full border border-[#2a2a2a] text-sm hover:border-gray-400 transition">Contact</a>
                <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/6 text-sm hover:bg-white/8 transition">LinkedIn</a>
              </div>

              <div className="text-xs text-gray-400 mt-2">
                <strong className="text-gray-200">Expertise:</strong> Deep learning for medical imaging, transfer learning, DICOM integration, clinical validation.
              </div>
            </motion.div>

            <motion.div className="rounded-2xl p-5 bg-[#06070a] border border-[#1e2022]" variants={slideLeft}>
              <div className="text-xs text-gray-400">Recognition</div>
              <h3 className="text-lg font-semibold mt-1">ICSTEM 2023 — Outstanding Research</h3>
              <p className="text-sm text-gray-300 mt-2">Brain Disease Diagnosis Using Deep Learning — Istanbul, Turkey</p>
              <div className="flex gap-2 text-xs text-gray-400 mt-3">FIA Robotics Finalist 2023 • 5-Star Academic Excellence</div>
            </motion.div>
          </motion.section>

          {/* Center — Visual / Deck Profile (col-span 4) */}
          <section className="lg:col-span-4 col-span-12 flex items-center justify-center relative">
            <motion.div
              id="deck-visual"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-[420px] lg:h-[620px] rounded-3xl overflow-hidden border border-[#222427] bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: `url('/ahmed.jpg')` }}
            >
              {/* Subtle overlay to keep text legible if added later */}
              <div className="w-full h-full bg-gradient-to-b from-transparent to-black/40"></div>
            </motion.div>
          </section>

          {/* Right — Projects & About (col-span 3) */}
          <aside className="lg:col-span-3 col-span-12 flex flex-col gap-6 py-6">
            <motion.div className="rounded-2xl p-4 bg-white/3 border border-[#202124] min-h-[220px] flex flex-col justify-between" variants={slideRight} initial="hidden" animate="visible">
              <div>
                <div className="text-xs text-gray-300">Project</div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={projects[current].id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.45 }}
                    className="mt-2"
                  >
                    <h4 className="text-lg font-semibold">{projects[current].title}</h4>
                    <a href={projects[current].link} target="_blank" rel="noreferrer" className="text-sm text-cyan-300 hover:underline mt-2 inline-block">View Demo ↗</a>
                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">{projects[current].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="text-xs text-gray-400">{projects[current].date} • {projects[current].tech.join(' • ')}</div>
                <div className="flex gap-2">
                  <button onClick={prev} aria-label="Previous project" className="px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition">← Prev</button>
                  <button onClick={next} aria-label="Next project" className="px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition">Next →</button>
                </div>
              </div>
            </motion.div>

            <motion.div className="rounded-2xl p-4 bg-white/6 border border-[#222427]" variants={slideRight}>
              <div className="text-xs text-gray-300">Education</div>
              <h4 className="text-lg font-semibold mt-1">M.Sc. Embedded Systems Electronics</h4>
              <p className="text-sm text-gray-300 mt-2">University Mohamed Boudiaf • Thesis: Multi-Disease Diagnostic Platform Using Ensemble Deep Learning</p>
              <div className="text-xs text-gray-400 mt-3">Research Interests: Explainable AI • Edge Computing • Clinical Validation</div>
            </motion.div>
          </aside>

        </div>
      </div>

      {/* Floating footer — contact / identity */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 70 }}
          className="rounded-full bg-white/4 backdrop-blur-md border border-white/6 px-4 py-2 flex items-center gap-3 cursor-pointer"
          onClick={() => setFooterOpen((s) => !s)}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }}>
            <Sparkle className="w-4 h-4 text-gray-200" />
          </motion.div>
          <div className="text-sm">Ahmed Messaad</div>

          <div className="hidden sm:flex text-xs text-gray-300 gap-2 items-center">
            <span>•</span>
            <span>AI Research Engineer</span>
            <span>•</span>
            <a href="mailto:ahmed.messaad@outlook.com" className="underline">ahmed.messaad@outlook.com</a>
          </div>
        </motion.div>

        <AnimatePresence>
          {footerOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="mt-2 w-full flex flex-col items-center text-xs text-gray-300 bg-[#0b0c0e]/90 rounded-md p-3"
            >
              <a href="mailto:ahmed.messaad@outlook.com" className="underline mb-1">ahmed.messaad@outlook.com</a>
              <div>AI Research Engineer</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: stacked content allowed to scroll — below we ensure small screens are comfortable */}
      <style jsx>{`
        @media (max-width: 1023px) {
          #deck-visual { height: 38vh !important; }
        }
      `}</style>
    </main>
  );
}
