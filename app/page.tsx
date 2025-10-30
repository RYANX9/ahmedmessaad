"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  context: string;
  year: string;
  image: string;
  link: string;
}

export default function PortfolioDesign4() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // NOTE: Scroll logic (useScroll, useTransform, logoRotate) removed to eliminate desktop scroll

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10, // Reduced parallax for fixed layout
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects: Project[] = [
    {
      id: "treatment-drl",
      name: "Medical Treatment DRL",
      context: "Sequential Decision-Making",
      year: "2025",
      image: "/clinrl.jpeg",
      link: "https://github.com/RYANX9/medical-treatment-drl/",
    },
    {
      id: "airm",
      name: "AIRM Brain Tumor System",
      context: "Clinical AI Research",
      year: "2024",
      image: "/brain.jpg",
      link: "https://youtu.be/2OeqBKF3X_A",
    },
    {
      id: "hemavision",
      name: "HemaVision",
      context: "Medical Automation",
      year: "2023",
      image: "/blood.jpg",
      link: "https://youtu.be/YxhA877Wyn0",
    },
    {
      id: "healthcost",
      name: "Healthcare Cost Prediction",
      context: "Deep Learning Methodology",
      year: "2024",
      image: "/healthcarecost.png",
      link: "https://github.com/RYANX9/healthcare-cost-prediction",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* DESKTOP LAYOUT - Fixed Height, Bento Grid Style */}
      <div className="hidden lg:block relative h-screen overflow-hidden">
        
        {/* Floating Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fixed top-8 left-0 right-0 z-50 flex justify-between items-center px-12 pointer-events-none"
        >
          <motion.div 
            className="pointer-events-auto"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="/noun.svg"
              alt="Logo"
              className="w-8 h-8"
              // Removed style={{ rotate: logoRotate }}
            />
          </motion.div>
          
          <motion.a
            href="/ahmed_messaad_cv.pdf"
            download
            className="pointer-events-auto text-sm tracking-[0.2em] uppercase font-sans font-light hover:font-normal transition-all duration-300 relative group"
            whileHover={{ x: -5 }}
          >
            Download CV
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-500" />
          </motion.a>
        </motion.nav>

        {/* Main Content Grid - Full Viewport Height */}
        <div className="grid grid-cols-12 h-full w-full">
            
            {/* LEFT SIDE: Hero/Bio/Contact - col-span-5 */}
            <div className="col-span-5 relative flex flex-col justify-between px-12 pt-32 pb-12">
                
                {/* Hero Top Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex-shrink"
                >
                    <div className="text-sm tracking-[0.3em] uppercase font-sans font-light mb-6 flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-black" />
                        AI Research Engineer
                    </div>
                    
                    <h1 className="font-display text-[80px] leading-[0.9] font-bold tracking-tight mb-6">
                        Ahmed<br/>
                        <span className="italic font-light">Messaad</span>
                    </h1>
                    
                    <motion.p 
                        className="text-base font-sans font-light leading-relaxed max-w-sm text-gray-700 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Specializing in clinically-deployable computer vision systems. 
                        Focused on transfer learning optimization and interpretable 
                        medical AI for resource-constrained environments.
                    </motion.p>

                    <motion.div
                        className="flex gap-4 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <motion.a
                            href="mailto:ahmed.messaad@outlook.com"
                            className="px-6 py-3 bg-black text-white text-sm tracking-wider uppercase font-sans relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Get in Touch</span>
                            <motion.div
                                className="absolute inset-0 bg-gray-800"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                        
                        <motion.a
                            href="https://linkedin.com/in/ahmedmessaad"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 border border-black text-sm tracking-wider uppercase font-sans hover:bg-black hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            LinkedIn
                        </motion.a>
                    </motion.div>

                </motion.div>

                {/* Recognition Badge & Integrated Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="flex-shrink-0"
                >
                    <div className="p-6 border-l-2 border-black mb-6">
                        <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-2 text-gray-500">
                            International Recognition
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-1">
                            ICSTEM 2023
                        </h3>
                        <p className="text-sm font-sans text-gray-600">
                            Outstanding Research • Istanbul, Turkey
                        </p>
                    </div>

                    <div className="text-xs tracking-[0.2em] uppercase font-sans font-light text-gray-500 mt-4">
                        © 2025 Ahmed Messaad / <a href="https://github.com/RYANX9" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT SIDE: Bento Grid (Image + Stats + 4 Projects) - col-span-7 */}
            <div className="col-span-7 relative h-full bg-gray-50 p-6 flex flex-col gap-4">
                
                {/* Bento Grid Container - Full Height */}
                <div className="grid grid-cols-4 grid-rows-3 gap-4 h-full">
                    
                    {/* Item 1: Profile Image Bento Box (Spans 2 columns, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            x: mousePosition.x / 2,
                            y: mousePosition.y / 2,
                        }}
                        className="col-span-2 row-span-2 relative overflow-hidden bg-black shadow-lg"
                    >
                        <img
                            src="/ahmed.jpg"
                            alt="Ahmed Messaad"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-4 text-white p-4 flex flex-col justify-end">
                            <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-1">
                                AI Research Engineer
                            </div>
                            <div className="font-display text-5xl font-bold">
                                Profile
                            </div>
                        </div>
                    </motion.div>

                    {/* Item 2: Stats Bento Box (Spans 2 columns, 1 row) */}
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="col-span-2 row-span-1 flex flex-col justify-center items-center bg-white p-6 shadow-sm border border-gray-100"
                    >
                        <div className="text-7xl font-display font-bold text-black">4</div>
                        <div className="text-xs tracking-[0.2em] uppercase font-sans font-light mt-2 text-center">
                            Major Projects
                        </div>
                    </motion.div>

                    {/* Project Items (4 projects in 4 small boxes, filling the bottom row and the remaining space) */}
                    {projects.map((project, idx) => (
                        <motion.a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            // Projects are placed in the remaining 4 boxes (2 columns * 2 rows + 2 columns * 1 row = 6 boxes used by image/stats. We use the remaining 6 boxes for projects. Let's make it 4x3 grid total)
                            // The image is 2x2. The stat is 2x1. This leaves a 4x3 grid structure.
                            // The image spans 2x2 (top left). The stats span 2x1 (top right).
                            // This leaves the bottom row (4x1) + 2 boxes on the right.

                            // Re-calculating grid for simpler 4-box layout for projects
                            // Top Row: [Image 2x2] | [Stats 2x1]
                            // Bottom Row: [Project 1] [Project 2] [Project 3] [Project 4]
                            className={`relative overflow-hidden bg-black group transition-all duration-300 hover:scale-[1.03] shadow-md ${
                                idx === 0 ? 'col-span-1 row-span-1' : '' // All projects 1x1 on the bottom row
                            } ${
                                idx < 2 ? 'col-span-1 row-span-1' : 'col-span-1 row-span-1'
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 + idx * 0.1 }}
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                            />
                            
                            {/* Project Info Overlay */}
                            <div className="absolute inset-0 p-4 text-white flex flex-col justify-end">
                                <div className="text-xs tracking-[0.2em] uppercase font-sans font-light mb-1 text-gray-300">
                                    {project.year}
                                </div>
                                <h3 className="font-display text-xl font-bold leading-tight">
                                    {project.name.split(' ').slice(0, 2).join(' ')}
                                </h3>
                                
                                <motion.div
                                    className="mt-2 text-sm tracking-[0.1em] uppercase font-sans"
                                    animate={{ x: activeProject === project.id ? 5 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    View →
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                    
                    {/* New layout to fit the grid: P1(col 1, row 3), P2(col 2, row 3), P3(col 3, row 3), P4(col 4, row 3) */}
                    {/* The project items need to start at row 3 (the bottom row). The original map loop implicitly places them. */}

                    {/* The existing map loop will place them consecutively: 
                        P1: col-start-1, row-start-3
                        P2: col-start-2, row-start-3
                        P3: col-start-3, row-start-3
                        P4: col-start-4, row-start-3
                    */}
                    
                </div>
            </div>
            
        </div>
        
      </div>

      {/* MOBILE LAYOUT (Unchanged) */}
      <div className="lg:hidden px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/noun.svg"
            alt="Logo"
            className="w-8 h-8 mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-6">
            AI Research Engineer
          </div>
          
          <h1 className="font-display text-[60px] leading-[0.9] font-bold mb-8">
            Ahmed<br/>
            <span className="italic font-light">Messaad</span>
          </h1>
          
          <img
            src="/ahmed.jpg"
            alt="Ahmed Messaad"
            className="w-full h-[500px] object-cover mb-8"
          />
          
          <p className="text-base font-sans font-light leading-relaxed mb-8 text-gray-700">
            Specializing in clinically-deployable computer vision systems. 
            Focused on transfer learning optimization and interpretable medical AI.
          </p>

          <div className="flex flex-col gap-4 mb-16">
            <a
              href="mailto:ahmed.messaad@outlook.com"
              className="w-full py-4 bg-black text-white text-center text-sm tracking-wider uppercase font-sans"
            >
              Get in Touch
            </a>
            <a
              href="/ahmed_messaad_cv.pdf"
              download
              className="w-full py-4 border border-black text-center text-sm tracking-wider uppercase font-sans"
            >
              Download CV
            </a>
          </div>

          <div className="mb-16 p-6 border-l-2 border-black">
            <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-2 text-gray-500">
              Recognition
            </div>
            <h3 className="font-display text-2xl font-semibold mb-1">
              ICSTEM 2023
            </h3>
            <p className="text-sm font-sans text-gray-600">
              Outstanding Research • Istanbul
            </p>
          </div>

          <h2 className="font-display text-5xl font-bold mb-8">
            Selected <span className="italic font-light">Work</span>
          </h2>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[300px] object-cover mb-4"
                />
                <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-2 text-gray-500">
                  {String(idx + 1).padStart(2, '0')} / {project.year}
                </div>
                <h3 className="font-display text-3xl font-bold mb-3">
                  {project.name}
                </h3>
                <p className="text-base font-sans font-light text-gray-600">
                  {project.context}
                </p>
              </a>
            ))}
          </div>

          <footer className="mt-24 py-16 -mx-6 px-6 bg-black text-white">
            <h2 className="font-display text-5xl font-bold mb-8">
              Let's create<br/>
              <span className="italic font-light">something</span>
            </h2>
            <a
              href="mailto:ahmed.messaad@outlook.com"
              className="text-xl font-sans font-light mb-8 block"
            >
              ahmed.messaad@outlook.com
            </a>
            <div className="space-y-4 mb-12">
              <a 
                href="https://linkedin.com/in/ahmedmessaad"
                target="_blank"
                rel="noreferrer"
                className="block text-lg font-sans"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/RYANX9"
                target="_blank"
                rel="noreferrer"
                className="block text-lg font-sans"
              >
                GitHub
              </a>
            </div>
            <div className="text-xs tracking-[0.2em] uppercase font-sans font-light text-gray-500">
              © 2025 Ahmed Messaad
            </div>
          </footer>
        </motion.div>
      </div>
    </main>
  );
}
