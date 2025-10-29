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
    <main className="h-screen w-full bg-[#fafafa] text-black overflow-hidden">
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
      `}</style>

      <div className="h-full grid grid-cols-3 grid-rows-3 gap-[1px] bg-black p-[1px]">
        
        {/* TOP LEFT - Hero Name */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-[#fafafa] p-8 flex flex-col justify-between"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400"
          >
            Portfolio 2024
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h1 className="font-display text-[72px] leading-[0.85] font-bold tracking-tight">
              AHMED<br/>MESSAAD
            </h1>
          </motion.div>
        </motion.div>

        {/* TOP MIDDLE - About */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#fafafa] p-8 flex flex-col justify-between"
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
            className="w-full h-full object-cover"
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
            className="bg-[#fafafa] p-8 flex flex-col justify-between relative group cursor-pointer"
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
              <h3 className="font-display text-[20px] leading-tight font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">
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
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredCard === project.id ? 1 : 0 }}
              className="absolute top-8 right-8 font-mono text-[9px] text-gray-400"
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
          className="bg-[#fafafa] p-8 flex flex-col justify-between"
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
          className="bg-[#fafafa] p-8 flex flex-col justify-between"
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
          className="bg-black text-white p-8 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
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
            <h3 className="font-display text-[42px] leading-[0.9] font-bold mb-4">
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
            className="absolute inset-0 bg-white"
          />
        </motion.div>

      </div>
    </main>
  );
}
