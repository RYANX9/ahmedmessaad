"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
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

export default function PortfolioDesign3() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "treatment-drl",
      name: "Medical Treatment DRL",
      context: "Sequential Decision-Making Research",
      year: "2025",
      description: "ICU treatment timing system trained on MIMIC-III data. A2C agent achieved 99.5% clinical appropriateness with +76–145 reward improvement over baselines.",
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
      description: "Clinical-grade diagnostic system achieving 99% four-class tumor classification with radiologist-validated interface. End-to-end DICOM pipeline development.",
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
      description: "Automated hematology platform achieving 97% multi-class blood cell classification. Reduced diagnostic time from 45 minutes to 3 minutes.",
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
      description: "Conv1D neural network achieving R² = 0.88 for insurance cost forecasting. Feature engineering with SHAP analysis identified key cost drivers.",
      tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
      link: "https://github.com/RYANX9/healthcare-cost-prediction",
      linkText: "View Code",
      image: "/healthcarecost.png",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#fafafa] text-black">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .font-mono {
          font-family: 'IBM Plex Mono', monospace;
        }

        @media (max-width: 1023px) {
          html {
            scroll-behavior: smooth;
          }
        }
      `}</style>

      {/* DESKTOP: 3x3 Grid - No Scroll */}
      <div className="hidden lg:block h-screen overflow-hidden">
        <div className="h-full grid grid-cols-3 grid-rows-3 gap-[1px] bg-black p-[1px]">
          
          {/* TOP LEFT - Hero Name with Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#fafafa] p-10 flex flex-col justify-between"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <motion.img
                src="/noun.svg"
                alt="Logo"
                className="w-5 h-5"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
                Portfolio 2025
              </span>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h1 className="font-display text-[64px] xl:text-[72px] leading-[0.85] font-bold tracking-tight">
                AHMED<br/>MESSAAD
              </h1>
            </motion.div>
          </motion.div>

          {/* TOP MIDDLE - About */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#fafafa] p-10 flex flex-col justify-between"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
            >
              About
            </motion.div>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-mono text-[11px] leading-relaxed text-gray-700 tracking-wide"
            >
              AI Research Engineer specializing in clinically-deployable computer vision systems. Focused on transfer learning optimization and interpretable medical AI.
            </motion.p>
          </motion.div>

          {/* TOP RIGHT - Profile Image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#fafafa] overflow-hidden relative"
          >
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              src="/ahmed.jpg"
              alt="Ahmed Messaad"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* MIDDLE ROW - Projects with Background Images */}
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85 group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between text-white">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-300"
                >
                  Project {String(idx + 1).padStart(2, '0')}
                </motion.div>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 + idx * 0.1 }}
                >
                  <h3 className="font-display text-[18px] xl:text-[20px] leading-tight font-semibold mb-2 group-hover:text-gray-200 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex justify-between items-end">
                    <p className="font-mono text-[10px] text-gray-300 tracking-wide">
                      {project.context}
                    </p>
                    <p className="font-mono text-[10px] text-gray-400">
                      {project.year}
                    </p>
                  </div>
                </motion.div>

                {/* Hover indicator */}
                <motion.div 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ 
                    opacity: hoveredCard === project.id ? 1 : 0,
                    x: hoveredCard === project.id ? 0 : -5
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 right-10 font-mono text-[9px] text-gray-300 tracking-wider"
                >
                  VIEW →
                </motion.div>
              </div>
            </motion.a>
          ))}

          {/* BOTTOM LEFT - Recognition */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-[#fafafa] p-10 flex flex-col justify-between"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
            >
              Recognition
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <h3 className="font-display text-[18px] leading-tight font-semibold mb-3">
                ICSTEM 2023<br/>Outstanding Research
              </h3>
              <p className="font-mono text-[10px] text-gray-500 tracking-wide">
                Istanbul, Turkey
              </p>
            </motion.div>
          </motion.div>

          {/* BOTTOM MIDDLE - CV Download */}
          <motion.a
            href="/ahmed_messaad_cv.pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-[#fafafa] p-10 flex flex-col justify-between group cursor-pointer hover:bg-[#f5f5f5] transition-colors duration-300"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
            >
              Curriculum Vitae
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex items-end justify-between"
            >
              <h3 className="font-display text-[18px] leading-tight font-semibold group-hover:text-gray-600 transition-colors duration-300">
                DOWNLOAD<br/>RÉSUMÉ
              </h3>
              <svg 
                className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-all duration-300 group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.a>

          {/* BOTTOM RIGHT - Contact */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={() => window.location.href = 'mailto:ahmed.messaad@outlook.com'}
            className="bg-black text-white p-10 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400 relative z-10"
            >
              Get in Touch
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="relative z-10"
            >
              <h3 className="font-display text-[38px] xl:text-[42px] leading-[0.9] font-bold mb-4">
                CONTACT
              </h3>
              <div className="space-y-1">
                <p className="font-mono text-[9px] text-gray-300 tracking-wider">
                  ahmed.messaad@outlook.com
                </p>
                <p className="font-mono text-[9px] text-gray-400 tracking-wider">
                  LinkedIn • GitHub
                </p>
              </div>
            </motion.div>

            {/* Hover effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white"
            />
          </motion.div>

        </div>
      </div>

      {/* MOBILE & TABLET: Vertical Scrollable */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-[1px] bg-black p-[1px]">
          
          {/* Hero Name with Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fafafa] p-8 md:p-12 min-h-[50vh] flex flex-col justify-between"
          >
            <div className="flex items-center gap-2">
              <motion.img
                src="/noun.svg"
                alt="Logo"
                className="w-4 h-4"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
                Portfolio 2025
              </span>
            </div>
            <div>
              <h1 className="font-display text-[56px] md:text-[80px] leading-[0.85] font-bold tracking-tight">
                AHMED<br/>MESSAAD
              </h1>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#fafafa] overflow-hidden h-[60vh] md:h-[70vh]"
          >
            <img
              src="/ahmed.jpg"
              alt="Ahmed Messaad"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* About */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fafafa] p-8 md:p-12 min-h-[40vh] flex flex-col justify-between"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
              About
            </div>
            <p className="font-mono text-[12px] md:text-[13px] leading-relaxed text-gray-700 tracking-wide">
              AI Research Engineer specializing in clinically-deployable computer vision systems. Focused on transfer learning optimization and interpretable medical AI for resource-constrained environments.
            </p>
          </motion.div>

          {/* Projects with Background Images */}
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative min-h-[45vh] overflow-hidden active:opacity-90 transition-opacity duration-200"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between text-white">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-300">
                  Project {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div>
                  <h3 className="font-display text-[24px] md:text-[28px] leading-tight font-semibold mb-3">
                    {project.name}
                  </h3>
                  <div className="flex justify-between items-end">
                    <p className="font-mono text-[11px] text-gray-200 tracking-wide">
                      {project.context}
                    </p>
                    <p className="font-mono text-[11px] text-gray-400">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Recognition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fafafa] p-8 md:p-12 min-h-[30vh] flex flex-col justify-between"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
              Recognition
            </div>
            <div>
              <h3 className="font-display text-[22px] md:text-[26px] leading-tight font-semibold mb-3">
                ICSTEM 2023<br/>Outstanding Research
              </h3>
              <p className="font-mono text-[11px] text-gray-500 tracking-wide">
                Istanbul, Turkey
              </p>
            </div>
          </motion.div>

          {/* CV Download */}
          <motion.a
            href="/ahmed_messaad_cv.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fafafa] p-8 md:p-12 min-h-[30vh] flex flex-col justify-between active:bg-[#f5f5f5] transition-colors duration-200"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
              Curriculum Vitae
            </div>
            <div className="flex items-end justify-between">
              <h3 className="font-display text-[22px] md:text-[26px] leading-tight font-semibold">
                DOWNLOAD<br/>RÉSUMÉ
              </h3>
              <svg 
                className="w-6 h-6 md:w-7 md:h-7 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => window.location.href = 'mailto:ahmed.messaad@outlook.com'}
            className="bg-black text-white p-8 md:p-12 min-h-[45vh] flex flex-col justify-between cursor-pointer active:bg-[#1a1a1a] transition-colors duration-200"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
              Get in Touch
            </div>
            
            <div>
              <h3 className="font-display text-[48px] md:text-[64px] leading-[0.9] font-bold mb-6">
                CONTACT
              </h3>
              <div className="space-y-2">
                <p className="font-mono text-[10px] md:text-[11px] text-gray-300 tracking-wider">
                  ahmed.messaad@outlook.com
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/ahmedmessaad"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] md:text-[11px] text-gray-400 tracking-wider hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-gray-600">•</span>
                  <a 
                    href="https://github.com/RYANX9"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-[10px] md:text-[11px] text-gray-400 tracking-wider hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
