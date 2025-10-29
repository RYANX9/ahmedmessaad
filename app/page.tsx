"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Play, Mic, Mail, Linkedin, Github } from "lucide-react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface Project {
  id: string;
  title: string;
  link: string;
  date: string;
  desc: string;
  tech: string[];
  icon: string;
}

const projects: Project[] = [
  {
    id: "airm",
    title: "AIRM Brain Tumor System",
    link: "https://youtu.be/2OeqBKF3X_A",
    date: "2024",
    desc: "99% accuracy diagnostic system with DICOM pipeline and clinical UI.",
    tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
    icon: "🧠",
  },
  {
    id: "hemavision",
    title: "HemaVision",
    link: "https://youtu.be/YxhA877Wyn0",
    date: "2023–2024",
    desc: "97% hematology classifier reducing diagnostics to 3 minutes.",
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
    icon: "🩸",
  },
  {
    id: "dailyhealth",
    title: "My Daily Health",
    link: "https://youtu.be/kh7WBjNPpEM",
    date: "2023",
    desc: "90-99% multi-disease platform with 12-architecture evaluation.",
    tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
    icon: "🏥",
  },
  {
    id: "costpred",
    title: "Healthcare Cost Prediction",
    link: "https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks",
    date: "2024",
    desc: "R²=0.88 Conv1D forecaster with SHAP feature insights.",
    tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
    icon: "💰",
  },
];

export default function Page() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Voice Recognition Setup
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionAPI) {
      const rec = new (SpeechRecognitionAPI as any)();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = "en-US";
      rec.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase();
        const projectIndex = projects.findIndex(p => command.includes(p.title.toLowerCase().split(' ')[0]));
        if (projectIndex !== -1) setCurrentProject(projectIndex);
      };
      rec.onerror = () => setIsVoiceActive(false);
      rec.onend = () => setIsVoiceActive(false);
      setRecognition(rec);
    }

    // EEG Waveform Canvas Background
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let phase = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#00ff88";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 2) {
        const y = canvas.height / 2 + Math.sin(x * 0.01 + phase) * 50 + Math.sin(x * 0.005 + phase * 0.5) * 20;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
      phase += 0.05;
      requestAnimationFrame(animate);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // No-Scroll Desktop Clamp
    if (window.innerWidth >= 1024) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (window.innerWidth >= 1024) {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };
  }, []);

  const toggleVoice = () => {
    if (isVoiceActive) {
      recognition?.stop();
    } else {
      recognition?.start();
      setIsVoiceActive(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const orbitVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <main
      ref={containerRef}
      className="h-screen w-screen bg-black text-white font-sans flex items-center justify-center overflow-hidden relative"
      style={{ height: "100vh" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-20"
      />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=IBM+Plex+Mono:wght@400;700&family=Inter:wght@300;400;700&family=Crimson+Pro:ital,wght@0,400;1,400&display=swap');
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .font-serif { font-family: 'Crimson Pro', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-accent { font-family: 'Space Grotesk', sans-serif; letter-spacing: 0.05em; }
        @keyframes neon-pulse {
          0%, 100% { text-shadow: 0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 20px #00ff88; }
          50% { text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88; }
        }
        .neon { animation: neon-pulse 2s ease-in-out infinite; }
        @keyframes edge-glow {
          0%, 100% { stroke-opacity: 0.3; }
          50% { stroke-opacity: 0.8; }
        }
        .glow-line { stroke: #00ff88; stroke-width: 1; fill: none; animation: edge-glow 3s ease-in-out infinite; }
      `}</style>

      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full h-full p-4 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Central Profile Node */}
        <motion.div
          className="relative flex flex-col items-center text-center z-10"
          variants={itemVariants}
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-[#00ff88] shadow-[0_0_20px_#00ff88] neon relative"
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/ahmed.jpg"
              alt="Ahmed Messaad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-transparent rounded-full animate-pulse" />
          </motion.div>
          <motion.h1
            className="mt-4 text-2xl lg:text-4xl font-bold font-mono neon"
            variants={itemVariants}
          >
            Ahmed Messaad
          </motion.h1>
          <motion.p
            className="text-sm lg:text-base text-gray-300 font-sans mt-2 max-w-xs"
            variants={itemVariants}
          >
            AI Research Engineer • Explainable Medical Vision
          </motion.p>
          <motion.p
            className="text-xs lg:text-sm text-gray-400 italic font-serif mt-1"
            variants={itemVariants}
          >
            M.Sc. Embedded Systems • ICSTEM 2023 Outstanding
          </motion.p>
        </motion.div>

        {/* Orbiting Projects Ring */}
        <motion.svg
          className="w-64 h-64 lg:w-96 lg:h-96 relative z-0"
          viewBox="0 0 384 384"
          variants={orbitVariants}
          initial="initial"
          animate="animate"
        >
          {projects.map((_, i) => (
            <circle
              key={i}
              cx="192"
              cy="192"
              r={80 + i * 20}
              className="glow-line opacity-30"
              style={{ transformOrigin: "center" }}
            />
          ))}
          <AnimatePresence mode="wait">
            <motion.g
              key={currentProject}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              style={{
                transform: `rotate(${currentProject * 90}deg) translate(192px, 0) rotate(${-currentProject * 90}deg)`,
                transformOrigin: "192px 192px",
              }}
            >
              <motion.circle
                cx="192"
                cy="192"
                r={60}
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                className="glow-line"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.foreignObject
                x="152"
                y="152"
                width="80"
                height="80"
                className="pointer-events-auto"
              >
                <motion.div
                  className="w-full h-full bg-black/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center p-2 text-xs lg:text-sm border border-[#00ff88]/50 neon cursor-pointer hover:bg-[#00ff88]/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl mb-1">{projects[currentProject].icon}</div>
                  <div className="font-mono font-bold">{projects[currentProject].title}</div>
                  <div className="text-gray-400 mt-1">{projects[currentProject].date}</div>
                  <a
                    href={projects[currentProject].link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#00ff88] hover:underline text-xs mt-1"
                  >
                    View ↗
                  </a>
                </motion.div>
              </motion.foreignObject>
            </motion.g>
          </AnimatePresence>
        </motion.svg>

        {/* About & Contact Orbit */}
        <motion.div
          className="flex flex-col items-center gap-6 lg:gap-8 z-10"
          variants={itemVariants}
        >
          {/* About Node */}
          <motion.div
            className="bg-black/50 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-[#00ff88]/30 w-48 lg:w-64 text-center"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring" }}
          >
            <Sparkles className="w-8 h-8 mx-auto mb-2 text-[#00ff88]" />
            <h3 className="text-sm lg:text-base font-accent uppercase tracking-wider text-gray-300 mb-2">About</h3>
            <p className="text-xs lg:text-sm text-gray-400 leading-relaxed font-sans">
              Clinically-deployable AI bridging research & impact. Focus: Explainable DL, transfer optimization, resource-constrained diagnostics.
            </p>
          </motion.div>

          {/* Contact Node */}
          <motion.div
            className="bg-black/50 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-[#00ff88]/30 w-48 lg:w-64 text-center cursor-pointer hover:bg-[#00ff88]/10 transition-all"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring" }}
            onClick={() => (window.location.href = "mailto:ahmed.messaad@outlook.com")}
          >
            <div className="flex justify-center gap-2 mb-2">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleVoice();
                }}
                className="p-2 rounded-full bg-[#00ff88]/20 border border-[#00ff88]/50 hover:bg-[#00ff88]/30 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isVoiceActive ? <Play className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </motion.button>
              <a
                href="/ahmed_messad_cv.pdf"
                download
                className="p-2 rounded-full bg-gray-800 border border-gray-600 hover:bg-gray-700 transition"
              >
                CV
              </a>
            </div>
            <h3 className="text-sm lg:text-base font-accent uppercase tracking-wider text-gray-300 mb-2">Contact</h3>
            <div className="flex justify-center gap-2 mb-2">
              <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" className="text-[#00ff88] hover:scale-110 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/RYANX9" target="_blank" rel="noreferrer" className="text-[#00ff88] hover:scale-110 transition">
                <Github className="w-4 h-4" />
              </a>
              <Mail className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#00ff88] transition" onClick={(e) => { e.stopPropagation(); window.location.href = "mailto:ahmed.messaad@outlook.com"; }} />
            </div>
            <div className="text-xs text-gray-500 font-mono">ahmed.messaad@outlook.com</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Stack Fallback */}
      <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 overflow-y-auto">
        <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <img src="/ahmed.jpg" alt="Ahmed Messaad" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#00ff88] shadow-[0_0_20px_#00ff88]" />
          <h1 className="text-2xl font-mono neon mb-2">Ahmed Messaad</h1>
          <p className="text-sm text-gray-300">AI Research Engineer</p>
        </motion.div>
        <AnimatePresence>
          <motion.div
            key={currentProject}
            className="bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-[#00ff88]/50 w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-2">{projects[currentProject].icon}</div>
            <h3 className="font-bold text-sm mb-1">{projects[currentProject].title}</h3>
            <p className="text-xs text-gray-400 mb-2">{projects[currentProject].desc}</p>
            <div className="text-xs text-gray-500 mb-2">{projects[currentProject].tech.join(" • ")}</div>
            <a href={projects[currentProject].link} target="_blank" rel="noreferrer" className="text-[#00ff88] text-xs">View Demo ↗</a>
            <button onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)} className="ml-2 text-[#00ff88]">Next</button>
          </motion.div>
        </AnimatePresence>
        <motion.div className="flex gap-4 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 text-center border border-[#00ff88]/30">
            <Sparkles className="w-6 mx-auto mb-2 text-[#00ff88]" />
            <p className="text-xs text-gray-400">Clinically-deployable AI systems for healthcare impact.</p>
          </div>
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 text-center border border-[#00ff88]/30 w-32">
            <div className="flex justify-center gap-2 mb-2">
              <button onClick={toggleVoice} className="p-1 rounded bg-[#00ff88]/20 border border-[#00ff88]/50">
                <Mic className="w-3 h-3" />
              </button>
            </div>
            <div className="text-xs space-y-1">
              <a href="https://linkedin.com/in/ahmedmessaad" className="block text-[#00ff88]">LinkedIn</a>
              <a href="https://github.com/RYANX9" className="block text-[#00ff88]">GitHub</a>
              <Mail className="w-4 h-4 mx-auto text-gray-400 cursor-pointer" onClick={() => window.location.href = "mailto:ahmed.messaad@outlook.com"} />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
