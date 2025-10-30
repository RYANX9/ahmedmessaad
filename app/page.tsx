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
  ];

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        body { overflow-x: hidden; }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* DESKTOP */}
      <div className="hidden lg:flex w-screen h-screen overflow-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="flex-[1.2] flex flex-col justify-center px-12 relative">
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-8 left-0 right-0 flex justify-between items-center px-12"
          >
            <motion.img src="/noun.svg" alt="Logo" className="w-8 h-8" style={{ rotate: logoRotate }} />
            <a
              href="/ahmed_messaad_cv.pdf"
              download
              className="text-sm tracking-[0.2em] uppercase font-sans font-light hover:font-normal transition-all"
            >
              Download CV
            </a>
          </motion.nav>

          <div className="mt-12">
            <div className="text-sm tracking-[0.3em] uppercase font-sans font-light mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-black" />
              AI Research Engineer
            </div>

            <h1 className="font-display text-[100px] leading-[0.9] font-bold tracking-tight mb-8">
              Ahmed<br />
              <span className="italic font-light">Messaad</span>
            </h1>

            <p className="text-lg font-sans font-light leading-relaxed max-w-md text-gray-700">
              Specializing in clinically-deployable computer vision systems. 
              Focused on interpretable AI and transfer learning for healthcare.
            </p>

            <div className="mt-12 flex gap-6">
              <motion.a
                href="mailto:ahmed.messaad@outlook.com"
                className="px-8 py-4 bg-black text-white text-sm tracking-wider uppercase font-sans"
                whileHover={{ scale: 1.05 }}
              >
                Get in Touch
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/ahmedmessaad"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-black text-sm tracking-wider uppercase font-sans hover:bg-black hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </section>

        {/* 2. PROJECTS SECTION */}
        <section className="flex-[1.1] flex flex-col justify-center items-center bg-gray-50 space-y-10 overflow-hidden">
          <h2 className="font-display text-5xl font-bold mb-4">
            Selected <span className="italic font-light">Work</span>
          </h2>
          <div className="grid grid-cols-3 gap-6 w-[90%]">
            {projects.map((project) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                className="relative group overflow-hidden"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[300px] object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 text-white text-center"
                  animate={{ opacity: activeProject === project.id ? 1 : 0 }}
                >
                  <h3 className="font-display text-2xl mb-2">{project.name}</h3>
                  <p className="text-sm font-sans">{project.context}</p>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* 3. PROFILE IMAGE SECTION */}
        <section className="flex-[0.9] flex items-center justify-center bg-white relative overflow-hidden">
          <motion.div
            className="relative"
            style={{ x: mousePosition.x, y: mousePosition.y }}
          >
            <img
              src="/ahmed.jpg"
              alt="Ahmed Messaad"
              className="w-[420px] h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <motion.div
              className="absolute bottom-6 right-6 bg-black text-white px-5 py-3 text-center rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-4xl font-display font-bold">4</div>
              <div className="text-xs tracking-[0.2em] uppercase font-sans font-light">
                Major Projects
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* MOBILE FALLBACK */}
      <div className="lg:hidden px-6 py-12 space-y-10">
        <img src="/noun.svg" alt="Logo" className="w-8 h-8 mb-4" />
        <h1 className="font-display text-[60px] font-bold">
          Ahmed<br />
          <span className="italic font-light">Messaad</span>
        </h1>
        <img src="/ahmed.jpg" alt="Ahmed" className="w-full h-[400px] object-cover rounded-2xl" />
        <p className="text-base font-sans text-gray-700">
          Specializing in clinically-deployable computer vision systems.
        </p>
        <div className="space-y-4">
          <a href="mailto:ahmed.messaad@outlook.com" className="block w-full py-4 bg-black text-white text-center">Contact</a>
          <a href="/ahmed_messaad_cv.pdf" download className="block w-full py-4 border border-black text-center">CV</a>
        </div>
      </div>
    </main>
  );
}
