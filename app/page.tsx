"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  link: string;
}

export default function PortfolioDesign3() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const projects: Project[] = [
    { id: "1", title: "AIRM Brain Tumor System", year: "2024", category: "Medical AI", link: "https://youtu.be/2OeqBKF3X_A" },
    { id: "2", title: "HemaVision", year: "2023", category: "Hematology Platform", link: "https://youtu.be/YxhA877Wyn0" },
    { id: "3", title: "My Daily Health", year: "2023", category: "Multi-Disease Diagnostic", link: "https://youtu.be/kh7WBjNPpEM" },
    { id: "4", title: "Healthcare Cost Prediction", year: "2024", category: "Neural Networks", link: "https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks" },
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
          
          {/* TOP LEFT - Hero Name */}
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
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
            >
              Portfolio 2025
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

          {/* MIDDLE ROW - Projects */}
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
              className="bg-[#fafafa] p-10 flex flex-col justify-between relative group cursor-pointer hover:bg-[#f5f5f5] transition-colors duration-300"
            >
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
              >
                Project {String(idx + 1).padStart(2, '0')}
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 + idx * 0.1 }}
              >
                <h3 className="font-display text-[18px] xl:text-[20px] leading-tight font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex justify-between items-end">
                  <p className="font-mono text-[10px] text-gray-500 tracking-wide">
                    {project.category}
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
                className="absolute top-10 right-10 font-mono text-[9px] text-gray-400 tracking-wider"
              >
                VIEW →
              </motion.div>
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

          {/* BOTTOM MIDDLE - Education */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-[#fafafa] p-10 flex flex-col justify-between"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
            >
              Education
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <h3 className="font-display text-[18px] leading-tight font-semibold mb-3">
                M.Sc. Embedded<br/>Systems Electronics
              </h3>
              <p className="font-mono text-[10px] text-gray-500 tracking-wide">
                University Mohamed Boudiaf
              </p>
            </motion.div>
          </motion.div>

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
          
          {/* Hero Name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fafafa] p-8 md:p-12 min-h-[50vh] flex flex-col justify-between"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
              Portfolio 2025
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

          {/* Projects */}
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
              className="bg-[#fafafa] p-8 md:p-12 min-h-[35vh] flex flex-col justify-between active:bg-[#f5f5f5] transition-colors duration-200"
            >
              <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
                Project {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div>
                <h3 className="font-display text-[24px] md:text-[28px] leading-tight font-semibold mb-3">
                  {project.title}
                </h3>
                <div className="flex justify-between items-end">
                  <p className="font-mono text-[11px] text-gray-500 tracking-wide">
                    {project.category}
                  </p>
                  <p className="font-mono text-[11px] text-gray-400">
                    {project.year}
                  </p>
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

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fafafa] p-8 md:p-12 min-h-[30vh] flex flex-col justify-between"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">
              Education
            </div>
            <div>
              <h3 className="font-display text-[22px] md:text-[26px] leading-tight font-semibold mb-3">
                M.Sc. Embedded<br/>Systems Electronics
              </h3>
              <p className="font-mono text-[11px] text-gray-500 tracking-wide">
                University Mohamed Boudiaf
              </p>
            </div>
          </motion.div>

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
