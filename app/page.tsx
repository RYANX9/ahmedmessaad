'use client'; 

import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: "deep-rl-trading",
    name: "Deep RL Trading System",
    category: "Reinforcement Learning",
    year: "2024",
    tagline: "When markets meet neural policies",
    description: "Comparative study of PPO and A2C agents against traditional trading strategies on Bitcoin hourly data. A2C achieved 66% win rate with 22.69% returns. Systematic evaluation across 30 seeds revealed variance patterns and limitations of DRL in non-stationary financial environments.",
    impact: "Outperformed buy-and-hold by 12.3% with robust statistical validation",
    tech: ["PPO", "A2C", "PyTorch", "Gymnasium", "NumPy"],
    metrics: { winRate: "66%", sharpe: "0.185", seeds: "30" },
    link: "https://github.com/RYANX9/deep-rl-trading"
  },
  {
    id: "treatment-drl",
    name: "Medical Treatment Optimization",
    category: "Sequential Decision-Making",
    year: "2025",
    tagline: "ICU decisions, algorithmic precision",
    description: "ICU treatment timing system trained on MIMIC-III clinical data. A2C agent achieved 99.5% clinical appropriateness with +76-145 reward improvement. Rule-based safety filter increased PPO/DQN appropriateness by 40 points. Custom 26D Gym environment modeling temporal dynamics.",
    impact: "99.5% clinical validity on real ICU data, enabling safer automated decisions",
    tech: ["Stable-Baselines3", "Gym", "MIMIC-III", "Pandas"],
    metrics: { appropriate: "99.5%", reward: "+145", dimensions: "26D" },
    link: "https://github.com/RYANX9/medical-treatment-drl/"
  },
  {
    id: "airm",
    name: "Clinical Brain Tumor Classifier",
    category: "Computer Vision",
    year: "2024",
    tagline: "Diagnostic AI at clinical grade",
    description: "Production-grade diagnostic system achieving 99% four-class tumor classification. End-to-end DICOM processing pipeline with radiologist-validated UI. Investigated optimal preprocessing strategies for limited medical imaging datasets and deployment-ready clinical integration.",
    impact: "99% accuracy with full DICOM pipeline, production-ready for clinical deployment",
    tech: ["EfficientNet-B7", "PyDICOM", "PyQt5", "SQL"],
    metrics: { accuracy: "99%", classes: "4", pipeline: "DICOM" },
    link: "https://youtu.be/2OeqBKF3X_A"
  },
  {
    id: "hemavision",
    name: "Automated Hematology Platform",
    category: "Object Detection",
    year: "2023-2024",
    tagline: "Microscopy meets real-time inference",
    description: "Real-time blood cell classification achieving 97% multi-class accuracy. Reduced diagnostic time from 45 to 3 minutes through optimized detection pipeline. Research on efficient segmentation architectures for high-throughput microscopy workflows.",
    impact: "15x faster diagnosis (45min → 3min), enabling high-throughput lab workflows",
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
    metrics: { accuracy: "97%", speedup: "15x", time: "3min" },
    link: "https://youtu.be/YxhA877Wyn0"
  },
  {
    id: "healthcost",
    name: "Healthcare Cost Forecasting",
    category: "Deep Learning",
    year: "2024",
    tagline: "Temporal patterns, financial futures",
    description: "Conv1D architecture achieving R²=0.88 for insurance cost prediction. SHAP analysis identified primary cost drivers. Systematic ablation study investigating temporal convolution strategies for time-series healthcare prediction tasks.",
    impact: "R²=0.88 prediction accuracy with interpretable feature attribution via SHAP",
    tech: ["Conv1D", "SHAP", "Scikit-learn", "Plotly"],
    metrics: { r2: "0.88", method: "SHAP", type: "Conv1D" },
    link: "https://github.com/RYANX9/healthcare-cost-prediction"
  },
  {
    id: "mydailyhealth",
    name: "Multi-Disease Diagnostic System",
    category: "Transfer Learning",
    year: "2023",
    tagline: "One model, five domains",
    description: "Multi-domain diagnostic platform with 90-99% accuracy across five disease categories. Comparative evaluation of 12 architectures using stratified cross-validation. Transfer learning investigation for efficient multi-task medical classification.",
    impact: "Single unified system replacing 5 specialized models, 12-architecture benchmark",
    tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
    metrics: { accuracy: "90-99%", domains: "5", models: "12" },
    link: "https://youtu.be/kh7WBjNPpEM"
  }
];

const skills = [
  { category: "Deep Learning", items: ["PyTorch", "TensorFlow", "Keras", "Stable-Baselines3"] },
  { category: "Reinforcement Learning", items: ["PPO", "A2C", "DQN", "Gymnasium", "Custom Envs"] },
  { category: "Computer Vision", items: ["YOLO", "EfficientNet", "U-Net", "OpenCV", "PyDICOM"] },
  { category: "ML Engineering", items: ["scikit-learn", "NumPy", "Pandas", "SHAP", "Plotly"] },
  { category: "Development", items: ["Python", "Flask", "PyQt5", "SQL", "Git"] }
];

export default function EliteMLPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  const fullText = "Machine Learning Engineer";

  useEffect(() => {
    setTimeout(() => setHasAnimated(true), 100);

    // Typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    // Mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      projectRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.85;
          if (isVisible) {
            ref.style.opacity = '1';
            ref.style.transform = 'translateY(0) scale(1)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) / 50,
    y: (mousePosition.y - window.innerHeight / 2) / 50
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-all duration-500 relative overflow-hidden`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { 
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
          scroll-behavior: smooth;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        
        /* Animated gradient background */
        .gradient-bg {
          background: linear-gradient(-45deg, #000000, #0a0a0a, #000000, #050505);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Grid with glow */
        .grid-glow {
          background-image: 
            linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
          background-size: 50px 50px;
          position: relative;
        }
        
        .grid-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        /* Enhanced animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.2), 0 0 40px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.15); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .animate-on-load {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-slide {
          animation: slideInFromLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .glow-toggle {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .glow-toggle:hover {
          animation: glow 2s ease-in-out infinite;
        }
        
        .project-item {
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .project-card:hover::before {
          opacity: 1;
        }
        
        .project-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .contact-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .nav-shrink {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .skill-badge {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-badge:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(255,255,255,0.1);
        }

        .link-hover {
          position: relative;
        }

        .link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s ease;
        }

        .link-hover:hover::after {
          width: 100%;
        }

        .metric-counter {
          transition: all 0.3s ease;
        }

        .metric-counter:hover {
          transform: scale(1.1);
        }
      `}</style>

      {/* Animated background */}
      <div className="fixed inset-0 gradient-bg grid-glow" style={{
        '--mouse-x': `${(mousePosition.x / window.innerWidth) * 100}%`,
        '--mouse-y': `${(mousePosition.y / window.innerHeight) * 100}%`
      } as React.CSSProperties} />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Enhanced Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 nav-shrink backdrop-blur-xl ${
          scrolled 
            ? darkMode ? 'bg-black/80 border-b border-white/10 py-3' : 'bg-white/80 border-b border-black/10 py-3'
            : 'bg-transparent py-6'
        }`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="mono text-sm font-semibold tracking-wider hover:opacity-60 transition-all duration-300 hover:scale-105"
            >
              AM_ML
            </button>
            
            <div className="hidden md:flex gap-8 lg:gap-12 items-center">
              {['about', 'skills', 'work', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-xs uppercase tracking-widest transition-all duration-300 link-hover ${
                    activeSection === section 
                      ? 'font-semibold scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {section}
                </button>
              ))}
              
              <a
                href="/resume.pdf"
                download
                className={`px-5 py-2.5 border transition-all duration-300 text-xs uppercase tracking-widest hover:scale-105 ${
                  darkMode 
                    ? 'border-white/30 hover:bg-white hover:text-black hover:border-white' 
                    : 'border-black/30 hover:bg-black hover:text-white hover:border-black'
                }`}
              >
                Resume
              </a>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-11 h-11 rounded-full border glow-toggle ${
                  darkMode ? 'border-white/30 hover:border-white' : 'border-black/30 hover:border-black'
                } flex items-center justify-center`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                  </svg>
                )}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 py-6 space-y-4 backdrop-blur-xl bg-black/80 border-t border-white/10">
              {['about', 'skills', 'work', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-sm uppercase tracking-widest hover:translate-x-2 transition-transform"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section - Enhanced */}
        <section 
          ref={heroRef}
          id="hero" 
          className="min-h-screen flex items-center justify-center relative"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`
          }}
        >
          <div className="text-center px-6 md:px-12 max-w-6xl">
            <div className={`mb-6 ${hasAnimated ? 'animate-fade' : 'opacity-0'}`}>
              <span className="inline-block px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-8 shimmer">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className={`text-7xl md:text-9xl lg:text-[140px] font-bold leading-none mb-8 tracking-tighter ${hasAnimated ? 'animate-on-load' : 'opacity-0'}`}>
              AHMED
              <br />
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                MESSAAD
              </span>
            </h1>
            
            <div className={`text-2xl md:text-4xl font-light tracking-wide mb-6 mono ${hasAnimated ? 'animate-fade' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <span>{typedText}</span>
              <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </div>
            
            <p className={`text-sm md:text-base uppercase tracking-[0.3em] opacity-60 mb-12 ${hasAnimated ? 'animate-fade' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              Deep RL · Computer Vision · Healthcare AI
            </p>

            <div className={`flex flex-wrap justify-center gap-6 ${hasAnimated ? 'animate-fade' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
              <a
                href="https://github.com/RYANX9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-xs uppercase tracking-widest">GitHub</span>
              </a>
              
              <a
                href="https://linkedin.com/in/ahmedmessaad"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs uppercase tracking-widest">LinkedIn</span>
              </a>
              
              <a
                href="mailto:ahmed.messaad@outlook.com"
                className="group flex items-center gap-3 px-6 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs uppercase tracking-widest">Contact</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section id="about" className="py-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-6xl font-bold mb-6 animate-slide">About</h2>
                <div className="w-20 h-1 bg-white mb-6 animate-slide" style={{ animationDelay: '0.1s' }}></div>
              </div>
              
              <div className="md:col-span-8 space-y-8">
                <p className="text-2xl md:text-3xl font-light leading-relaxed animate-fade" style={{ animationDelay: '0.2s' }}>
                  Building <span className="font-semibold text-white">production-grade AI systems</span> that solve real-world problems in healthcare, finance, and beyond.
                </p>
                
                <p className="text-lg opacity-70 leading-relaxed animate-fade" style={{ animationDelay: '0.3s' }}>
                  Specializing in deep reinforcement learning and clinical AI systems. My work spans from algorithmic trading systems to ICU treatment optimization, always focusing on rigorous evaluation and production deployment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 animate-fade" style={{ animationDelay: '0.4s' }}>
                  <div className="space-y-3">
                    <div className="text-5xl font-bold">6+</div>
                    <div className="text-sm uppercase tracking-widest opacity-60">Production Systems</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-5xl font-bold">99%</div>
                    <div className="text-sm uppercase tracking-widest opacity-60">Max Classification Accuracy</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-5xl font-bold">15x</div>
                    <div className="text-sm uppercase tracking-widest opacity-60">Diagnostic Speedup</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - NEW */}
        <section id="skills" className="py-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Technical Arsenal</h2>
              <p className="text-lg opacity-60">Tools and frameworks for production ML systems</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category}
                  className="p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5 backdrop-blur-sm animate-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-6 mono">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map(item => (
                      <span 
                        key={item}
                        className="skill-badge px-4 py-2 text-sm border border-white/20 hover:border-white/60 hover:bg-white/10 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section - Enhanced */}
        <section id="work" className="py-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Work</h2>
              <p className="text-lg opacity-60 max-w-2xl mx-auto">
                Research and production systems demonstrating expertise in RL, computer vision, and healthcare AI
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  ref={(el) => { projectRefs.current[index] = el; }}
                  className="project-item project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="border border-white/10 p-8 md:p-12 backdrop-blur-sm hover:border-white/30">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                      {/* Left Column */}
                      <div className="md:col-span-2 space-y-4">
                        <div className="text-sm uppercase tracking-widest opacity-40 mono">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-lg font-semibold mono">{project.year}</div>
                        <div className="text-xs uppercase tracking-widest opacity-60">
                          {project.category}
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="md:col-span-7 space-y-6">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-white transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-lg italic opacity-60 mb-4">{project.tagline}</p>
                        </div>

                        <p className="text-base leading-relaxed opacity-80">
                          {project.description}
                        </p>

                        {/* Impact Statement */}
                        <div className="p-4 border-l-4 border-white/30 bg-white/5">
                          <div className="text-xs uppercase tracking-widest opacity-60 mb-2">Impact</div>
                          <div className="text-sm font-medium">{project.impact}</div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(tech => (
                            <span 
                              key={tech}
                              className="skill-badge px-3 py-1.5 text-xs border border-white/20 mono hover:border-white/60 hover:bg-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-sm uppercase tracking-widest hover:gap-5 transition-all duration-300 group/link"
                        >
                          <span className="link-hover">View Project</span>
                          <svg className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>

                      {/* Metrics Column */}
                      <div className="md:col-span-3 space-y-6">
                        <div className="text-xs uppercase tracking-widest opacity-60 mb-6">Key Metrics</div>
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div 
                            key={key}
                            className="metric-counter border-l-2 border-white/30 pl-4 hover:border-white transition-all duration-300"
                          >
                            <div className="text-3xl font-bold mono">{value}</div>
                            <div className="text-xs uppercase tracking-wider opacity-60 mt-1">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section id="contact" className="min-h-screen flex items-center justify-center border-t border-white/10">
          <div className="text-center px-6 md:px-12 max-w-4xl">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest mb-8 opacity-60">
                Let's Build Something
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 contact-pulse">
              Ready to Collaborate?
            </h2>
            
            <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Open to full-time opportunities, research collaborations, and consulting projects in ML/AI
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
              <a
                href="mailto:ahmed.messaad@outlook.com"
                className="group px-8 py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ahmed.messaad@outlook.com</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a 
                href="https://github.com/RYANX9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-hover uppercase tracking-wider opacity-60 hover:opacity-100 transition-all"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/ahmedmessaad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-hover uppercase tracking-wider opacity-60 hover:opacity-100 transition-all"
              >
                LinkedIn
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="link-hover uppercase tracking-wider opacity-60 hover:opacity-100 transition-all"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        {/* Footer - Enhanced */}
        <footer className="border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-sm opacity-60">
                © 2025 Ahmed Messaad. Built with precision.
              </div>
              <div className="flex items-center gap-8 text-sm">
                <div className="mono opacity-60">Available for opportunities</div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-white z-50 transition-all duration-100"
        style={{ 
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
        }}
      />
    </div>
  );
}
