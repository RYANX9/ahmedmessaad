"use client";

import React, { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  desc: string;
  link: string;
  tech: string[];
  date: string;
}

const projects: Project[] = [
  {
    id: "airm",
    title: "AIRM Brain Tumor System",
    desc: "Production-ready diagnostic system with 99% accuracy. End-to-end DICOM pipeline validated by radiologists.",
    link: "https://youtu.be/2OeqBKF3X_A",
    tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
    date: "2024",
  },
  {
    id: "hemavision",
    title: "HemaVision",
    desc: "Automated hematology platform with 97% accuracy. Reduces diagnostic time to 3 minutes.",
    link: "https://youtu.be/YxhA877Wyn0",
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
    date: "2023–2024",
  },
  {
    id: "dailyhealth",
    title: "My Daily Health",
    desc: "Multi-disease platform with 90-99% accuracy across domains. Evaluated 12 architectures.",
    link: "https://youtu.be/kh7WBjNPpEM",
    tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
    date: "2023",
  },
  {
    id: "healthcost",
    title: "Healthcare Cost Prediction",
    desc: "Conv1D network with R²=0.88. SHAP analysis for cost drivers.",
    link: "https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks",
    tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
    date: "2024",
  },
];

export default function Page() {
  const [activeProject, setActiveProject] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const rotateProject = (dir: number) => {
    setActiveProject((prev) => (prev + dir + projects.length) % projects.length);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;600;700&family=Inter:wght@300;400;500&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap');
        
        body { margin: 0; padding: 0; }
        * { box-sizing: border-box; scrollbar-width: none; }
        *::-webkit-scrollbar { display: none; }
        
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .font-serif { font-family: 'Crimson Pro', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-accent { font-family: 'Space Grotesk', sans-serif; }
        
        .holo-border { box-shadow: 0 0 10px rgba(0, 255, 255, 0.1), inset 0 0 5px rgba(0, 255, 255, 0.05); }
        .holo-glow:hover { box-shadow: 0 0 15px rgba(0, 255, 255, 0.2); transition: box-shadow 0.3s; }
        
        @keyframes orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .orbit-container { animation: orbit 60s linear infinite; }
        .particle-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;
          background: radial-gradient(circle, rgba(0,255,255,0.02) 0%, transparent 50%);
        }
        .particle-bg::before {
          content: ''; position: absolute; width: 2px; height: 2px; background: rgba(255,255,255,0.1);
          box-shadow: 0 0 5px rgba(0,255,255,0.2); animation: twinkle 2s infinite;
        }
        @keyframes twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 0.8; } }
      `}</style>
      
      <div className="particle-bg" style={{ zIndex: -1 }} />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a]/80 backdrop-blur-md z-50 flex justify-between items-center px-6 border-b border-[#2a2a2a]/50">
        <h1 className="font-mono text-xl font-bold tracking-wide">AHMED MESSAAD</h1>
        <a href="/ahmed_messad_cv.pdf" download className="font-mono text-sm px-4 py-2 border border-[#2a2a2a] rounded-lg hover:bg-[#1a1a1a] transition">
          DOWNLOAD CV
        </a>
      </header>
      
      {/* Desktop Layout: Full Viewport Grid */}
      <div className="hidden lg:grid grid-cols-12 grid-rows-1 h-[calc(100vh-4rem)] mt-16 gap-4 p-4 overflow-hidden">
        {/* Profile Section: Col 1-5 */}
        <section className="col-span-5 row-span-1 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between holo-border">
          <div className="flex justify-between">
            <img src="/ahmed.jpg" alt="Ahmed Messaad" className="w-32 h-32 rounded-full object-cover border-2 border-cyan-500/20 shadow-cyan-500/10" />
            <img src="/ai.svg" alt="AI Icon" className="w-16 h-16 invert opacity-50" />
          </div>
          <div>
            <h2 className="text-4xl font-bold font-mono">Ahmed Messaad</h2>
            <p className="text-lg text-gray-400 font-accent">AI Research Engineer • M'sila, Algeria</p>
            <p className="mt-4 text-gray-300">Specializing in explainable AI for medical imaging. Bridging research and clinical deployment.</p>
            <div className="mt-4 flex gap-4">
              <a href="mailto:ahmed.messaad@outlook.com" className="text-cyan-400 hover:underline">Email</a>
              <a href="https://linkedin.com/in/ahmedmessaad" className="text-cyan-400 hover:underline">LinkedIn</a>
              <a href="https://github.com/RYANX9" className="text-cyan-400 hover:underline">GitHub</a>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <strong>Expertise:</strong> Deep learning, transfer learning, DICOM integration. ICSTEM 2023 Outstanding Research.
          </div>
        </section>
        
        {/* Projects Orbit: Col 6-12 */}
        <section className="col-span-7 row-span-1 relative flex items-center justify-center holo-border rounded-2xl overflow-hidden bg-[#0a0a0a]/50 backdrop-blur-sm">
          <div className="orbit-container w-96 h-96 relative">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`absolute w-64 p-4 bg-[#1a1a1a] rounded-xl holo-glow transition-all duration-500 ${i === activeProject ? 'scale-110 z-10' : 'scale-75 opacity-50'}`}
                style={{ transform: `rotate(${i * (360 / projects.length)}deg) translate(150px) rotate(-${i * (360 / projects.length)}deg)` }}
                onClick={() => setActiveProject(i)}
              >
                <h3 className="font-mono text-lg">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.desc}</p>
                <a href={p.link} className="text-cyan-400 text-xs">View →</a>
                <div className="text-xs text-gray-500 mt-2">{p.date} • {p.tech.join(' • ')}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 flex gap-4">
            <button onClick={() => rotateProject(-1)} className="px-4 py-2 bg-[#1a1a1a] rounded-full holo-glow">←</button>
            <button onClick={() => rotateProject(1)} className="px-4 py-2 bg-[#1a1a1a] rounded-full holo-glow">→</button>
          </div>
        </section>
      </div>
      
      {/* Tablet Layout: Flex Col */}
      <div className="hidden md:block lg:hidden mt-16 flex flex-col gap-4 p-4 h-[calc(100vh-4rem)] overflow-auto">
        <section className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-6 flex gap-6 holo-border">
          <img src="/ahmed.jpg" alt="Profile" className="w-24 h-24 rounded-full" />
          <div>
            <h2 className="text-3xl font-mono">Ahmed Messaad</h2>
            <p className="text-gray-400">AI Research Engineer</p>
            <p className="mt-2 text-gray-300">Explainable AI for healthcare.</p>
          </div>
        </section>
        <section className="flex-1 relative rounded-2xl overflow-hidden holo-border bg-[#0a0a0a]/50">
          <div className="orbit-container w-full h-full flex justify-center items-center scale-75">
            {projects.map((p, i) => (
              <div key={p.id} className={`absolute w-48 p-3 bg-[#1a1a1a] rounded-lg holo-glow ${i === activeProject ? 'scale-110' : 'scale-90 opacity-70'}`} style={{ transform: `rotate(${i * 90}deg) translate(120px) rotate(-${i * 90}deg)` }} onClick={() => setActiveProject(i)}>
                <h3 className="text-base font-mono">{p.title}</h3>
                <p className="text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="p-6 bg-[#1a1a1a]/50 rounded-2xl holo-border">
          <div className="flex gap-4 text-cyan-400 text-sm">
            <a href="mailto:ahmed.messaad@outlook.com">Email</a>
            <a href="https://linkedin.com/in/ahmedmessaad">LinkedIn</a>
            <a href="https://github.com/RYANX9">GitHub</a>
          </div>
        </section>
      </div>
      
      {/* Mobile Layout: Stack */}
      <div className="md:hidden mt-16 flex flex-col gap-4 p-4 overflow-auto pb-20">
        <section className="bg-[#1a1a1a]/50 rounded-2xl p-4 holo-border">
          <img src="/ahmed.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
          <h2 className="text-2xl font-mono text-center mt-2">Ahmed Messaad</h2>
          <p className="text-center text-gray-400">AI Research Engineer</p>
          <p className="mt-2 text-sm text-gray-300 text-center">Medical AI specialist.</p>
        </section>
        {projects.map((p, i) => (
          <section key={p.id} className="bg-[#1a1a1a]/50 rounded-2xl p-4 holo-border holo-glow" onClick={() => setActiveProject(i)}>
            <h3 className="font-mono">{p.title}</h3>
            <p className="text-sm text-gray-300">{p.desc}</p>
            <a href={p.link} className="text-cyan-400 text-xs">View →</a>
          </section>
        ))}
        <section className="p-4 bg-[#1a1a1a]/50 rounded-2xl holo-border fixed bottom-0 left-4 right-4">
          <div className="flex justify-around text-cyan-400 text-xs">
            <a href="mailto:ahmed.messaad@outlook.com">Email</a>
            <a href="https://linkedin.com/in/ahmedmessaad">LinkedIn</a>
            <a href="https://github.com/RYANX9">GitHub</a>
          </div>
        </section>
      </div>
      
      {isLoaded && <div className="absolute inset-0 opacity-0 transition-opacity duration-1000" />}
    </main>
  );
}
