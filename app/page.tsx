"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle } from "lucide-react";

export default function Page() {
  const projects = [
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

  const [current, setCurrent] = useState(0);
  const [footerOpen, setFooterOpen] = useState(false);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const toggleFooter = () => setFooterOpen((prev) => !prev);

  return (
    <main className="min-h-screen w-full bg-[#0f1115] text-gray-100 font-sans flex flex-col py-8 md:py-0 overflow-hidden">
      {/* Page content above (unchanged)... */}
      
      {/* Footer Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-4xl z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 60, damping: 15 }}
          className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-white/3 border border-white/6 rounded-full px-4 py-2.5 backdrop-blur-md text-xs md:text-sm mx-auto w-fit cursor-pointer`}
          onClick={toggleFooter}
        >
          {/* Always visible content */}
          <div className="flex items-center gap-2 md:gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkle className="w-4 h-4 text-gray-300 hidden sm:block" />
            </motion.div>
            <span className="text-xs text-gray-200">Ahmed Messaad — AI Research Engineer</span>
          </div>

          {/* Desktop only */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-300">
            <span>•</span>
            <span>M'sila, Algeria</span>
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
                <div className="text-xs">M'sila, Algeria</div>
                <a
                  href="mailto:ahmed.messaad@outlook.com"
                  className="underline underline-offset-2 hover:text-white transition-colors mt-1"
                >
                  ahmed.messaad@outlook.com
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
