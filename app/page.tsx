"use client";

import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 'airm',
      title: 'AIRM Brain Tumor System',
      year: '2024',
      metric: '99% Accuracy',
      desc: 'Production-ready diagnostic system with end-to-end DICOM pipeline validated by radiologists',
      tech: 'EfficientNet-B7 • PyDICOM • PyQt5',
      link: 'https://youtu.be/2OeqBKF3X_A'
    },
    {
      id: 'hema',
      title: 'HemaVision',
      year: '2023–24',
      metric: '97% Classification',
      desc: 'Automated hematology platform reducing diagnostic time from 45 minutes to 3 minutes',
      tech: 'YOLOv8 • U-Net • OpenCV',
      link: 'https://youtu.be/YxhA877Wyn0'
    },
    {
      id: 'health',
      title: 'My Daily Health',
      year: '2023',
      metric: '90-99% Range',
      desc: 'Multi-disease diagnostic platform with systematic evaluation across five domains',
      tech: 'TensorFlow • ResNet • Flask',
      link: 'https://youtu.be/kh7WBjNPpEM'
    },
    {
      id: 'cost',
      title: 'Healthcare Cost Prediction',
      year: '2024',
      metric: 'R² = 0.88',
      desc: 'Conv1D neural network with SHAP analysis for insurance cost forecasting',
      tech: 'Conv1D • SHAP • Scikit-learn',
      link: 'https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks'
    }
  ];

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden font-mono">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Space+Mono:wght@400;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'JetBrains Mono', monospace; }
        
        .neural-line {
          stroke: rgba(0, 255, 170, 0.15);
          stroke-width: 1;
          fill: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .neural-line.active {
          stroke: rgba(0, 255, 170, 0.6);
          stroke-width: 2;
          filter: drop-shadow(0 0 8px rgba(0, 255, 170, 0.5));
        }
        
        .pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .glow {
          filter: drop-shadow(0 0 12px rgba(0, 255, 170, 0.6));
        }
        
        .scan-line {
          animation: scan 8s linear infinite;
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .node-enter {
          animation: nodeEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        @keyframes nodeEnter {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .glitch {
          animation: glitch 3s infinite;
        }
        
        @keyframes glitch {
          0%, 90%, 100% { transform: translate(0); }
          92% { transform: translate(-2px, 2px); }
          94% { transform: translate(2px, -2px); }
          96% { transform: translate(-1px, 1px); }
        }
      `}</style>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,170,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Scan line effect */}
      <div className="scan-line absolute w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {/* Desktop: Connect all nodes */}
        <g className="hidden lg:block">
          {/* Profile to Projects */}
          <path d="M 20,50 Q 50,50 50,25" className={`neural-line ${activeNode ? 'active' : ''}`} />
          <path d="M 20,50 Q 50,50 72,20" className={`neural-line ${activeNode === 'airm' ? 'active' : ''}`} />
          <path d="M 20,50 Q 50,50 72,45" className={`neural-line ${activeNode === 'hema' ? 'active' : ''}`} />
          <path d="M 20,50 Q 50,50 72,70" className={`neural-line ${activeNode === 'health' ? 'active' : ''}`} />
          <path d="M 20,50 Q 50,50 72,95" className={`neural-line ${activeNode === 'cost' ? 'active' : ''}`} />
          
          {/* Profile to About/Contact */}
          <path d="M 20,50 L 20,82" className="neural-line" />
          <path d="M 20,82 L 35,82" className="neural-line" />
          <path d="M 65,82 L 80,82" className="neural-line" />
          <path d="M 80,82 L 80,50" className="neural-line" />
        </g>
      </svg>

      {/* Main Grid Container - Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[20%_60%_20%] lg:grid-rows-[15%_35%_35%_15%] w-full h-full p-4 gap-4 relative" style={{ zIndex: 2 }}>
        
        {/* Top Left - Name Header */}
        <div className={`col-start-1 row-start-1 border border-emerald-400/30 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="text-center">
            <div className="text-emerald-400 text-xs mb-1 tracking-widest">AI RESEARCH ENGINEER</div>
            <div className="text-white text-lg font-bold tracking-wider">AHMED MESSAAD</div>
          </div>
        </div>

        {/* Top Center - Main Title */}
        <div className={`col-start-2 row-start-1 border border-emerald-400/30 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">
              EXPLAINABLE AI <span className="text-emerald-400">×</span> CLINICAL SYSTEMS
            </h1>
            <div className="text-emerald-400/70 text-xs tracking-widest">TRANSFER LEARNING • COMPUTER VISION • MEDICAL IMAGING</div>
          </div>
        </div>

        {/* Top Right - CV Download */}
        <div className={`col-start-3 row-start-1 border border-emerald-400/30 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <a 
            href="/ahmed_messad_cv.pdf"
            download
            className="group flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <svg className="w-8 h-8 text-emerald-400 group-hover:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 15L12 3M12 15L8 11M12 15L16 11M20 17H4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-emerald-400 text-xs tracking-widest">DOWNLOAD CV</span>
          </a>
        </div>

        {/* Left - Profile Image */}
        <div className={`col-start-1 row-start-2 row-span-2 border border-emerald-400/30 bg-black/60 backdrop-blur-sm overflow-hidden relative group transition-all duration-1000 delay-300 node-enter ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src="/ahmed.jpg" 
            alt="Ahmed Messaad"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-emerald-400 text-xs mb-1 tracking-widest">PROFILE_ID: 001</div>
            <div className="text-white text-sm font-bold">M'SILA, ALGERIA</div>
          </div>
          {/* Pulsing corner indicator */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full pulse" />
        </div>

        {/* Center - Projects Grid */}
        <div className="col-start-2 row-start-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => { setActiveNode(project.id); setHoveredNode(project.id); }}
              onMouseLeave={() => { setActiveNode(null); setHoveredNode(null); }}
              className={`border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4 cursor-pointer relative overflow-hidden group transition-all duration-1000 node-enter ${isLoaded ? 'opacity-100' : 'opacity-0'} ${hoveredNode === project.id ? 'border-emerald-400 glow' : ''}`}
              style={{ transitionDelay: `${400 + idx * 100}ms` }}
            >
              {/* Project number */}
              <div className="absolute top-2 right-2 text-emerald-400/40 text-4xl font-bold leading-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="relative z-10">
                <div className="text-emerald-400 text-[10px] mb-1 tracking-widest">PROJECT_{project.id.toUpperCase()}</div>
                <h3 className="text-white text-sm font-bold mb-2 leading-tight">{project.title}</h3>
                
                {hoveredNode === project.id ? (
                  <div className="space-y-2 animate-in fade-in duration-300">
                    <p className="text-white/70 text-xs leading-relaxed">{project.desc}</p>
                    <div className="text-emerald-400/70 text-[10px] tracking-wide">{project.tech}</div>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-400 text-xs hover:gap-3 transition-all mt-2"
                    >
                      VIEW DEMO
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full pulse" />
                      <span className="text-emerald-400 text-xs">{project.metric}</span>
                    </div>
                    <div className="text-white/50 text-xs">{project.year}</div>
                  </div>
                )}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Right - Recognition */}
        <div className={`col-start-3 row-start-2 row-span-2 border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4 flex flex-col justify-between transition-all duration-1000 delay-800 node-enter ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <div className="text-emerald-400 text-[10px] mb-2 tracking-widest">ACHIEVEMENTS</div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-emerald-400/50 pl-3">
                <div className="text-white text-xs font-bold mb-1">ICSTEM 2023</div>
                <div className="text-white/60 text-[10px]">Outstanding Research</div>
                <div className="text-emerald-400/70 text-[9px] mt-1">Istanbul, Turkey</div>
              </div>
              
              <div className="border-l-2 border-emerald-400/30 pl-3">
                <div className="text-white text-xs font-bold mb-1">FIA Robotics</div>
                <div className="text-white/60 text-[10px]">Finalist 2023</div>
              </div>
              
              <div className="border-l-2 border-emerald-400/30 pl-3">
                <div className="text-white text-xs font-bold mb-1">Academic Excellence</div>
                <div className="text-white/60 text-[10px]">5-Star Recognition</div>
              </div>
            </div>
          </div>
          
          <div className="text-emerald-400/40 text-[9px] tracking-wider">
            VERIFIED • SYSTEM_ACTIVE
          </div>
        </div>

        {/* Bottom Left - About */}
        <div className={`col-start-1 col-span-1 row-start-4 border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4 flex items-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="text-emerald-400 text-[10px] mb-2 tracking-widest">ABOUT</div>
            <p className="text-white/70 text-xs leading-relaxed">
              Developing clinically-deployable AI systems bridging research and healthcare impact.
            </p>
          </div>
        </div>

        {/* Bottom Center - Education */}
        <div className={`col-start-2 row-start-4 border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4 flex items-center justify-between transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="text-emerald-400 text-[10px] mb-1 tracking-widest">EDUCATION</div>
            <div className="text-white text-sm font-bold">M.Sc. Embedded Systems Electronics</div>
            <div className="text-white/60 text-xs mt-1">University Mohamed Boudiaf</div>
          </div>
          <div className="text-right">
            <div className="text-emerald-400 text-xs">THESIS</div>
            <div className="text-white/50 text-[10px] max-w-[200px]">Multi-Disease Diagnostic Platform</div>
          </div>
        </div>

        {/* Bottom Right - Contact */}
        <div className={`col-start-3 row-start-4 border border-emerald-400/30 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex gap-4">
            <a href="mailto:ahmed.messaad@outlook.com" className="text-emerald-400 text-xs hover:text-white transition-colors tracking-widest">EMAIL</a>
            <span className="text-emerald-400/30">|</span>
            <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" className="text-emerald-400 text-xs hover:text-white transition-colors tracking-widest">LINKEDIN</a>
            <span className="text-emerald-400/30">|</span>
            <a href="https://github.com/RYANX9" target="_blank" rel="noreferrer" className="text-emerald-400 text-xs hover:text-white transition-colors tracking-widest">GITHUB</a>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col h-full overflow-y-auto p-4 gap-4">
        {/* Header */}
        <div className="border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4 text-center">
          <div className="text-emerald-400 text-xs mb-1 tracking-widest">AI RESEARCH ENGINEER</div>
          <div className="text-white text-xl font-bold tracking-wider mb-2">AHMED MESSAAD</div>
          <div className="text-emerald-400/70 text-[10px] tracking-widest">EXPLAINABLE AI × CLINICAL SYSTEMS</div>
        </div>

        {/* Profile */}
        <div className="border border-emerald-400/30 bg-black/60 backdrop-blur-sm overflow-hidden relative h-64">
          <img src="/ahmed.jpg" alt="Ahmed Messaad" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>
          <div className="absolute bottom-4 left-4">
            <div className="text-emerald-400 text-xs tracking-widest">M'SILA, ALGERIA</div>
          </div>
        </div>

        {/* About */}
        <div className="border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4">
          <div className="text-emerald-400 text-xs mb-2 tracking-widest">ABOUT</div>
          <p className="text-white/70 text-sm leading-relaxed">
            Developing clinically-deployable AI systems bridging research and healthcare impact. Specializing in explainable deep learning, transfer learning optimization, and medical imaging.
          </p>
        </div>

        {/* Projects */}
        {projects.map((project, idx) => (
          <div key={project.id} className="border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="text-emerald-400 text-[10px] tracking-widest">PROJECT_{String(idx + 1).padStart(2, '0')}</div>
              <div className="text-emerald-400 text-xs">{project.metric}</div>
            </div>
            <h3 className="text-white text-base font-bold mb-2">{project.title}</h3>
            <p className="text-white/70 text-xs mb-3 leading-relaxed">{project.desc}</p>
            <div className="text-emerald-400/70 text-[10px] mb-3">{project.tech}</div>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-emerald-400 text-xs inline-flex items-center gap-2">
              VIEW DEMO →
            </a>
          </div>
        ))}

        {/* Recognition */}
        <div className="border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4">
          <div className="text-emerald-400 text-xs mb-3 tracking-widest">ACHIEVEMENTS</div>
          <div className="space-y-3">
            <div className="border-l-2 border-emerald-400 pl-3">
              <div className="text-white text-sm font-bold">ICSTEM 2023 • Istanbul</div>
              <div className="text-white/60 text-xs">Outstanding Research</div>
            </div>
            <div className="border-l-2 border-emerald-400/50 pl-3">
              <div className="text-white text-sm font-bold">FIA Robotics Finalist</div>
              <div className="text-white/60 text-xs">2023</div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4">
          <div className="text-emerald-400 text-xs mb-2 tracking-widest">EDUCATION</div>
          <div className="text-white text-base font-bold mb-1">M.Sc. Embedded Systems Electronics</div>
          <div className="text-white/60 text-sm">University Mohamed Boudiaf</div>
        </div>

        {/* Contact */}
        <div className="border border-emerald-400/30 bg-black/60 backdrop-blur-sm p-4 mb-20">
          <div className="text-emerald-400 text-xs mb-3 tracking-widest">CONTACT</div>
          <div className="flex flex-col gap-2">
            <a href="mailto:ahmed.messaad@outlook.com" className="text-white text-sm hover:text-emerald-400 transition-colors">ahmed.messaad@outlook.com</a>
            <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" className="text-white text-sm hover:text-emerald-400 transition-colors">LinkedIn →</a>
            <a href="https://github.com/RYANX9" target="_blank" rel="noreferrer" className="text-white text-sm hover:text-emerald-400 transition-colors">GitHub →</a>
          </div>
        </div>

        {/* CV Download - Fixed */}
        <a 
          href="/ahmed_messad_cv.pdf"
          download
          className="fixed bottom-4 right-4 border border-emerald-400/30 bg-black/90 backdrop-blur-sm px-4 py-2 text-emerald-400 text-xs tracking-widest hover:bg-emerald-400/10 transition-colors"
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Cursor follower */}
      <div 
        className="hidden lg:block pointer-events-none fixed w-4 h-4 border border-emerald-400/50 rounded-full transition-transform duration-100 ease-out"
        style={{ 
          left: mousePos.x - 8, 
          top: mousePos.y - 8,
          transform: hoveredNode ? 'scale(2)' : 'scale(1)',
          zIndex: 9999
        }}
      />
    </div>
  );
}
