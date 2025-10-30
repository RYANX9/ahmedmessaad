"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const { scrollYProgress } = useScroll();
  
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
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

        body {
          overflow-x: hidden;
        }
      `}</style>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block relative min-h-screen">
        
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
            <motion.img
              src="/noun.svg"
              alt="Logo"
              className="w-8 h-8"
              style={{ rotate: logoRotate }}
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

        {/* Hero Section - Left Aligned */}
        <div className="relative pt-32 pb-20 px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-16">
              
              {/* Left - Main Content */}
              <div className="col-span-7 relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.div 
                    className="text-sm tracking-[0.3em] uppercase font-sans font-light mb-6 flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="w-12 h-[1px] bg-black" />
                    AI Research Engineer
                  </motion.div>
                  
                  <h1 className="font-display text-[120px] leading-[0.9] font-bold tracking-tight mb-8">
                    Ahmed<br/>
                    <span className="italic font-light">Messaad</span>
                  </h1>
                  
                  <motion.p 
                    className="text-lg font-sans font-light leading-relaxed max-w-lg text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Specializing in clinically-deployable computer vision systems. 
                    Focused on transfer learning optimization and interpretable 
                    medical AI for resource-constrained environments.
                  </motion.p>

                  <motion.div
                    className="mt-12 flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.a
                      href="mailto:ahmed.messaad@outlook.com"
                      className="px-8 py-4 bg-black text-white text-sm tracking-wider uppercase font-sans relative overflow-hidden group"
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
                      className="px-8 py-4 border border-black text-sm tracking-wider uppercase font-sans hover:bg-black hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LinkedIn
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Recognition Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="mt-20 p-6 border-l-2 border-black"
                >
                  <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-2 text-gray-500">
                    International Recognition
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-1">
                    ICSTEM 2023
                  </h3>
                  <p className="text-sm font-sans text-gray-600">
                    Outstanding Research • Istanbul, Turkey
                  </p>
                </motion.div>
              </div>

              {/* Right - Profile Image with Parallax */}
              <div className="col-span-5 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                  }}
                  className="sticky top-32"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src="/ahmed.jpg"
                      alt="Ahmed Messaad"
                      className="w-full h-[600px] object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ scaleX: 1 }}
                      animate={{ scaleX: 0 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      style={{ originX: 1 }}
                    />
                  </div>
                  
                  {/* Floating Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className="absolute -bottom-8 -right-8 bg-white p-6 shadow-2xl"
                  >
                    <div className="text-5xl font-display font-bold">4</div>
                    <div className="text-xs tracking-[0.2em] uppercase font-sans font-light mt-1">
                      Major Projects
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section - Staggered Layout */}
        <div className="py-32 px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="font-display text-7xl font-bold mb-4">
                Selected <span className="italic font-light">Work</span>
              </h2>
              <p className="text-sm tracking-[0.3em] uppercase font-sans font-light text-gray-500">
                2023 — Present
              </p>
            </motion.div>

            <div className="space-y-32">
              {projects.map((project, idx) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                  className={`grid grid-cols-12 gap-12 items-center ${
                    idx % 2 === 0 ? "" : "direction-rtl"
                  }`}
                >
                  <motion.div 
                    className={`col-span-6 relative overflow-hidden ${
                      idx % 2 === 0 ? "" : "order-2"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-[500px] object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <div className={`col-span-6 ${idx % 2 === 0 ? "" : "order-1"}`}>
                    <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-4 text-gray-500">
                      {String(idx + 1).padStart(2, '0')} / {project.year}
                    </div>
                    <h3 className="font-display text-5xl font-bold mb-6 leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-lg font-sans font-light text-gray-600 mb-8">
                      {project.context}
                    </p>
                    <motion.div
                      className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-sans"
                      animate={{ x: activeProject === project.id ? 10 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project
                      <motion.span
                        animate={{ x: activeProject === project.id ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-32 px-12 bg-black text-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-7">
                <h2 className="font-display text-8xl font-bold mb-12 leading-tight">
                  Let's create<br/>
                  <span className="italic font-light">something</span>
                </h2>
                <motion.a
                  href="mailto:ahmed.messaad@outlook.com"
                  className="text-3xl font-sans font-light hover:italic transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  ahmed.messaad@outlook.com
                </motion.a>
              </div>
              
              <div className="col-span-5 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs tracking-[0.3em] uppercase font-sans font-light mb-2 text-gray-400">
                      Connect
                    </div>
                    <div className="space-y-2">
                      <a 
                        href="https://linkedin.com/in/ahmedmessaad"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-lg font-sans hover:translate-x-2 transition-transform duration-300"
                      >
                        LinkedIn
                      </a>
                      <a 
                        href="https://github.com/RYANX9"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-lg font-sans hover:translate-x-2 transition-transform duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs tracking-[0.2em] uppercase font-sans font-light text-gray-500 mt-12">
                  © 2025 Ahmed Messaad
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* MOBILE LAYOUT */}
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
