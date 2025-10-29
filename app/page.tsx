"use client";

import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AIRM Brain Tumor System',
      year: '2024',
      metric: '99%',
      metricLabel: 'Accuracy',
      desc: 'Production-ready diagnostic system achieving 99% accuracy across four tumor categories. Built end-to-end DICOM pipeline with clinical interface validated by radiologists.',
      tech: ['EfficientNet-B7', 'PyDICOM', 'PyQt5', 'SQL'],
      link: 'https://youtu.be/2OeqBKF3X_A',
      gradient: 'from-violet-500/20 to-purple-500/20'
    },
    {
      id: 2,
      title: 'HemaVision',
      year: '2023–24',
      metric: '97%',
      metricLabel: 'Classification',
      desc: 'Automated hematology platform with 97% classification accuracy. Reduced diagnostic time from 45 minutes to 3 minutes while maintaining clinical-grade precision.',
      tech: ['YOLOv8', 'U-Net', 'OpenCV', 'PyTorch'],
      link: 'https://youtu.be/YxhA877Wyn0',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      title: 'My Daily Health',
      year: '2023',
      metric: '90-99%',
      metricLabel: 'Range',
      desc: 'Multi-disease diagnostic platform with 90-99% accuracy across five disease domains. Systematic evaluation of 12 architectures using stratified cross-validation.',
      tech: ['TensorFlow', 'ResNet', 'EfficientNet', 'Flask'],
      link: 'https://youtu.be/kh7WBjNPpEM',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 4,
      title: 'Healthcare Cost Prediction',
      year: '2024',
      metric: 'R²=0.88',
      metricLabel: 'Forecast',
      desc: 'Conv1D neural network achieving R² = 0.88 for insurance cost forecasting. Feature engineering with SHAP analysis identified key cost drivers.',
      tech: ['Conv1D', 'SHAP', 'Scikit-learn', 'Plotly'],
      link: 'https://www.kaggle.com/code/ahmedmessaad/healthcare-cost-prediction-using-neural-networks',
      gradient: 'from-amber-500/20 to-orange-500/20'
    }
  ];

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }
        
        body { 
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .smooth-appear {
          animation: smoothAppear 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes smoothAppear {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.96);
            filter: blur(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        
        .grain {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
          z-index: 100;
        }
        
        .glow-subtle {
          box-shadow: 0 0 60px -10px rgba(139, 92, 246, 0.3);
        }
        
        .border-gradient {
          position: relative;
        }
        
        .border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          100% { left: 100%; }
        }
        
        .parallax {
          transition: transform 0.2s ease-out;
        }
      `}</style>

      {/* Ambient grain texture */}
      <div className="grain" />

      {/* Ambient light orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col h-screen p-8 gap-6">
        
        {/* Header Row */}
        <div className={`flex gap-6 h-[15vh] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          
          {/* Name */}
          <div className="flex-1 border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-8 flex items-center justify-center group hover:bg-white/[0.04] transition-all duration-500"
               style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white mb-1">
                Ahmed Messaad
              </h1>
              <p className="text-sm text-white/40 tracking-wider uppercase">AI Research Engineer</p>
            </div>
          </div>

          {/* Title */}
          <div className="flex-[2.5] border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-8 flex items-center justify-center hover:bg-white/[0.04] transition-all duration-500"
               style={{ transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)` }}>
            <div className="text-center max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white leading-tight mb-2">
                Engineering Explainable AI Systems for Clinical Impact
              </h2>
              <p className="text-xs text-white/40 tracking-widest uppercase">
                Transfer Learning • Computer Vision • Medical Imaging
              </p>
            </div>
          </div>

          {/* CV */}
          <div className="flex-1 border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-8 flex items-center justify-center group hover:bg-white/[0.04] hover:glow-subtle transition-all duration-500"
               style={{ transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)` }}>
            <a href="/ahmed_messad_cv.pdf" download className="flex flex-col items-center gap-2">
              <svg className="w-10 h-10 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 15L12 3M12 15L8 11M12 15L16 11M20 17H4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs text-white/60 group-hover:text-white tracking-widest uppercase">Download CV</span>
            </a>
          </div>
        </div>

        {/* Main Content Row */}
        <div className="flex gap-6 flex-1">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-[20%]">
            
            {/* Profile Image */}
            <div className={`flex-[2] border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl overflow-hidden group relative transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                 style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}>
              <img src="/ahmed.jpg" alt="Ahmed Messaad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/60 text-xs mb-1 tracking-wider uppercase">Location</p>
                <p className="text-white font-medium">M'sila, Algeria</p>
              </div>
            </div>

            {/* About */}
            <div className={`flex-1 border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.04] transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                 style={{ transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)` }}>
              <p className="text-white/30 text-[10px] mb-3 tracking-widest uppercase">About</p>
              <p className="text-white/70 text-xs leading-relaxed">
                Developing clinically-deployable AI systems that bridge academic research and healthcare impact.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 flex-[2.2]">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                onMouseEnter={() => setExpandedProject(project.id)}
                onMouseLeave={() => setExpandedProject(null)}
                className={`border-gradient shimmer rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-1000 hover:scale-[1.02] hover:glow-subtle ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  transitionDelay: `${400 + idx * 100}ms`,
                  transform: expandedProject === project.id ? `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) scale(1.02)` : `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`
                }}
              >
                {/* Background number */}
                <div className="absolute top-4 right-4 text-[120px] font-bold text-white/[0.03] leading-none pointer-events-none">
                  {project.id}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-auto">
                    <p className="text-white/40 text-[10px] mb-2 tracking-widest uppercase">{project.year}</p>
                    <h3 className="text-white text-lg font-semibold mb-3 leading-tight">{project.title}</h3>
                    
                    {expandedProject === project.id ? (
                      <div className="space-y-3 animate-in fade-in duration-500">
                        <p className="text-white/70 text-xs leading-relaxed">{project.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span key={t} className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded-full">{t}</span>
                          ))}
                        </div>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-white text-xs font-medium hover:gap-3 transition-all mt-2"
                        >
                          View Project
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <span className="text-white text-sm font-bold">{project.metric}</span>
                          <span className="text-white/50 text-xs ml-1.5">{project.metricLabel}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-[20%]">
            
            {/* Recognition */}
            <div className={`flex-[2] border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.04] transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                 style={{ transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)` }}>
              <p className="text-white/30 text-[10px] mb-4 tracking-widest uppercase">Recognition</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">ICSTEM 2023</h4>
                  <p className="text-white/50 text-xs">Outstanding Research</p>
                  <p className="text-white/30 text-xs mt-1">Istanbul, Turkey</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">FIA Robotics</h4>
                  <p className="text-white/50 text-xs">Finalist 2023</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Academic Excellence</h4>
                  <p className="text-white/50 text-xs">5-Star Recognition</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className={`flex-1 border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.04] transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                 style={{ transform: `translate(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px)` }}>
              <p className="text-white/30 text-[10px] mb-3 tracking-widest uppercase">Education</p>
              <h4 className="text-white font-semibold text-sm mb-1">M.Sc. Embedded Systems</h4>
              <p className="text-white/50 text-xs">University Mohamed Boudiaf</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`flex gap-6 h-[12vh] transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex-1 border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6 flex items-center justify-center hover:bg-white/[0.04] transition-all duration-500"
               style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}>
            <div className="flex gap-8">
              <a href="mailto:ahmed.messaad@outlook.com" className="text-white/60 hover:text-white text-sm transition-colors tracking-wider">Email</a>
              <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-sm transition-colors tracking-wider">LinkedIn</a>
              <a href="https://github.com/RYANX9" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white text-sm transition-colors tracking-wider">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col h-full overflow-y-auto p-4 gap-4 pb-20">
        <div className="border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6 text-center">
          <h1 className="text-2xl font-bold text-white mb-1">Ahmed Messaad</h1>
          <p className="text-xs text-white/40 tracking-wider uppercase mb-3">AI Research Engineer</p>
          <p className="text-sm font-display text-white/70 leading-relaxed">
            Engineering Explainable AI Systems for Clinical Impact
          </p>
        </div>

        <div className="border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl overflow-hidden h-64">
          <img src="/ahmed.jpg" alt="Ahmed Messaad" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>
        </div>

        <div className="border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6">
          <p className="text-white/30 text-xs mb-2 tracking-widest uppercase">About</p>
          <p className="text-white/70 text-sm leading-relaxed">
            Developing clinically-deployable AI systems that bridge academic research and healthcare impact. Specializing in explainable deep learning, transfer learning optimization, and medical imaging.
          </p>
        </div>

        {projects.map((project) => (
          <div key={project.id} className={`border-gradient shimmer rounded-3xl bg-gradient-to-br ${project.gradient} backdrop-blur-xl p-6`}>
            <p className="text-white/40 text-xs mb-2 tracking-widest uppercase">{project.year}</p>
            <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3">
              <span className="text-white text-sm font-bold">{project.metric}</span>
              <span className="text-white/50 text-xs ml-1.5">{project.metricLabel}</span>
            </div>
            <p className="text-white/70 text-sm mb-3 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.map((t) => (
                <span key={t} className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-white text-sm inline-flex items-center gap-2">
              View Project →
            </a>
          </div>
        ))}

        <div className="border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6">
          <p className="text-white/30 text-xs mb-3 tracking-widest uppercase">Recognition</p>
          <div className="space-y-3">
            <div>
              <h4 className="text-white font-semibold text-sm">ICSTEM 2023 • Istanbul</h4>
              <p className="text-white/50 text-xs">Outstanding Research</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">FIA Robotics Finalist</h4>
              <p className="text-white/50 text-xs">2023</p>
            </div>
          </div>
        </div>

        <div className="border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6">
          <p className="text-white/30 text-xs mb-2 tracking-widest uppercase">Education</p>
          <h4 className="text-white font-semibold text-sm mb-1">M.Sc. Embedded Systems Electronics</h4>
          <p className="text-white/50 text-sm">University Mohamed Boudiaf</p>
        </div>

        <div className="border-gradient shimmer rounded-3xl bg-white/[0.02] backdrop-blur-xl p-6">
          <p className="text-white/30 text-xs mb-3 tracking-widest uppercase">Contact</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:ahmed.messaad@outlook.com" className="text-white text-sm">ahmed.messaad@outlook.com</a>
            <a href="https://linkedin.com/in/ahmedmessaad" target="_blank" rel="noreferrer" className="text-white text-sm">LinkedIn →</a>
            <a href="https://github.com/RYANX9" target="_blank" rel="noreferrer" className="text-white text-sm">GitHub →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
