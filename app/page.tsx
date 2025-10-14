"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkle } from "lucide-react";

interface Project {
  title: string;
  link: string;
  date: string;
  desc: string;
  tech: string[];
}

export default function Page() {
  const projects: Project[] = [
    {
      title: "AIRM Brain Tumor System",
      link: "https://youtu.be/2OeqBKF3X_A",
      date: "2024",
      desc: "Production-ready diagnostic system achieving 99% accuracy across four tumor categories. Built end-to-end DICOM pipeline with clinical interface validated by radiologists.",
      tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
    },
    {
      title: "HemaVision",
      link: "https://youtu.be/YxhA877Wyn0",
      date: "2023–2024",
      desc: "Automated hematology platform with 97% classification accuracy. Reduced diagnostic time from 45 minutes to 3 minutes while maintaining clinical-grade precision.",
      tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
    },
    {
      title: "My Daily Health",
      link: "https://youtu.be/kh7WBjNPpEM",
      date: "2023",
      desc: "Multi-disease diagnostic platform with 90-99% accuracy across five disease domains. Systematic evaluation of 12 architectures using stratified cross-validation.",
      tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
    },
    {
      title: "Healthcare Cost Prediction",
      link: "https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks",
      date: "2024",
      desc: "Conv1D neural network achieving R² = 0.88 for insurance cost forecasting. Feature engineering with SHAP analysis identified key cost drivers.",
      tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
    },
  ];

  const [current, setCurrent] = useState<number>(0);
  const [footerOpen, setFooterOpen] = useState<boolean>(false);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const toggleFooter = () => {
    setFooterOpen((prev) => !prev);
  };

  // Animation variants
  const leftSlideIn: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const rightSlideIn: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardFloat: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="min-h-screen w-full bg-[#0f1115] text-gray-100 font-sans flex flex-col py-8 md:py-0 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center px-4 sm:px-6 lg:px-8 pb-20 lg:pb-8">

        {/* Left column — Intro with profile picture */}
        <motion.section
          className="lg:col-span-6 w-full flex flex-col justify-center"
          variants={leftSlideIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4 md:space-y-6 flex flex-col items-start"
          >
            <motion.div
              variants={fadeInUp}
              custom={0}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <img
                src="/ahmed.jpg"
                alt="Ahmed Messaad"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl leading-tight font-extrabold tracking-tight"
            >
              Ahmed Messaad
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              custom={2}
              className="text-sm md:text-base text-gray-400 tracking-wide -mt-2"
            >
              AI Research Engineer • M'sila, Algeria
            </motion.div>

            <motion.p
              variants={fadeInUp}
              custom={3}
              className="text-base md:text-xl text-gray-300 max-w-xl"
            >
              Specializing in clinically-deployable computer vision systems. Focused on transfer learning optimization and interpretable medical AI for resource-constrained environments.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={4}
              className="flex items-center gap-3 md:gap-4 mt-2 flex-wrap"
            >
              <motion.a
                href="mailto:ahmed.messaad@outlook.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 md:gap-3 rounded-2xl px-4 py-2 border border-gray-700 text-xs md:text-sm hover:border-gray-500 transition-colors"
              >
                Contact
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ahmedmessaad"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 md:gap-3 rounded-2xl px-4 py-2 bg-white/5 text-xs md:text-sm hover:bg-white/7 transition-colors"
              >
                LinkedIn
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={5}
              className="mt-4 md:mt-6 text-xs md:text-sm text-gray-400 max-w-prose leading-relaxed"
            >
              <strong className="text-gray-200">Expertise:</strong> Deep learning for medical imaging, transfer learning optimization, DICOM pipeline integration, and clinical-grade model deployment. Published researcher at ICSTEM 2023.
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Right column — Projects as slideshow */}
        <motion.aside
          className="lg:col-span-6 w-full flex flex-col justify-center space-y-4 md:space-y-6"
          variants={rightSlideIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={cardFloat}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl min-h-[280px] md:h-[260px] p-5 md:p-6 border border-white/6 bg-white/2 backdrop-blur-md flex flex-col justify-between overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[current].title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs text-gray-300"
                  >
                    Project
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg font-semibold mt-1"
                  >
                    {projects[current].title}
                  </motion.h3>
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    href={projects[current].link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs md:text-sm text-cyan-400 hover:underline inline-block mt-1"
                  >
                    View Demo ↗
                  </motion.a>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-2 md:mt-3 text-xs md:text-sm text-gray-300 leading-relaxed"
                  >
                    {projects[current].desc}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-400 mt-4 gap-2"
                >
                  <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                    <span>{projects[current].date}</span>
                    <span className="text-gray-500">|</span>
                    <span className="break-words">{projects[current].tech.join(" • ")}</span>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 flex gap-2 md:gap-3 z-10">
              <motion.button
                whileHover={{ scale: 1.05, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevProject}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-colors bg-[#0f1115]/80 backdrop-blur-sm"
              >
                ← Prev
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextProject}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-colors bg-[#0f1115]/80 backdrop-blur-sm"
              >
                Next →
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 60, damping: 15 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="rounded-2xl min-h-[140px] p-4 md:p-5 border border-white/6 flex flex-col justify-between bg-[#06070a]"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-xs text-gray-500">International Recognition</div>
              <h3 className="text-base md:text-lg font-semibold mt-1">ICSTEM 2023 — Outstanding Research</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400">"Brain Disease Diagnosis Using Deep Learning" • Istanbul, Turkey</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 md:gap-3 text-xs text-gray-500 mt-3 flex-wrap"
            >
              <span>FIA Robotics Finalist 2023</span>
              <span>•</span>
              <span>5-Star Academic Excellence</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 60, damping: 15 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="rounded-2xl min-h-[130px] p-4 md:p-5 border border-white/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex-1"
            >
              <div className="text-xs text-gray-300">Education</div>
              <h3 className="text-base md:text-lg font-semibold mt-1">M.Sc. Embedded Systems Electronics</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-300 max-w-xs">University Mohamed Boudiaf • Thesis: Multi-Disease Diagnostic Platform Using Ensemble Deep Learning</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xs md:text-sm text-gray-400 sm:text-right"
            >
              <div className="font-medium text-gray-300">Research Interests</div>
              <div className="mt-1">Explainable AI • Edge Computing • Clinical Validation</div>
            </motion.div>
          </motion.div>
        </motion.aside>
      </div>

      {/* Footer Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-4xl z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 60, damping: 15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-white/3 border border-white/6 rounded-full px-4 py-2.5 backdrop-blur-md text-xs md:text-sm mx-auto w-fit cursor-pointer"
          onClick={toggleFooter}
        >
          {/* Always visible content (mobile & desktop) */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkle className="w-4 h-4 text-gray-300" />
            </motion.div>
            <span className="text-xs text-gray-200">Ahmed Messaad</span>
          </div>

          {/* Desktop only */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-300">
            <span>•</span>
            <span>AI Research Engineer</span>
            <span>•</span>
            <a
              href="mailto:ahmed.messaad@outlook.com"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              ahmed.messaad@outlook.com
            </a>
          </div>

          {/* Mobile expandable section */}
          <AnimatePresence>
            {footerOpen && (
              <motion.div
                key="footer-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center sm:hidden text-xs text-gray-300 pt-1"
              >
                <a
                  href="mailto:ahmed.messaad@outlook.com"
                  className="underline underline-offset-2 hover:text-white transition-colors mt-1"
                >
                  Contact
                </a>
                <div className="text-xs">AI Research Engineer</div>

              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
