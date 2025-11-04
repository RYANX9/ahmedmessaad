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
    tech: ["PPO", "A2C", "PyTorch", "Gymnasium", "NumPy"],
    metrics: { winRate: "66%", sharpe: "0.185", drawdown: "17.25%" },
    link: "https://github.com/RYANX9/deep-rl-trading"
  },
  {
    id: "treatment-drl",
    name: "Medical Treatment Optimization",
    category: "Sequential Decision-Making",
    year: "2025",
    tagline: "ICU decisions, algorithmic precision",
    description: "ICU treatment timing system trained on MIMIC-III clinical data. A2C agent achieved 99.5% clinical appropriateness with +76-145 reward improvement. Rule-based safety filter increased PPO/DQN appropriateness by 40 points. Custom 26D Gym environment modeling temporal dynamics.",
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
    tech: ["YOLOv8", "U-Net", "OpenCV", "PyTorch"],
    metrics: { accuracy: "97%", time: "3min", speedup: "15x" },
    link: "https://youtu.be/YxhA877Wyn0"
  },
  {
    id: "healthcost",
    name: "Healthcare Cost Forecasting",
    category: "Deep Learning",
    year: "2024",
    tagline: "Temporal patterns, financial futures",
    description: "Conv1D architecture achieving R²=0.88 for insurance cost prediction. SHAP analysis identified primary cost drivers. Systematic ablation study investigating temporal convolution strategies for time-series healthcare prediction tasks.",
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
    tech: ["TensorFlow", "ResNet", "EfficientNet", "Flask"],
    metrics: { accuracy: "90-99%", domains: "5", models: "12" },
    link: "https://youtu.be/kh7WBjNPpEM"
  }
];

export default function SwissPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Trigger initial animation
    setTimeout(() => setHasAnimated(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Animate projects on scroll
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;
          if (isVisible) {
            ref.style.opacity = '1';
            ref.style.transform = 'translateY(0)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        * { font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', sans-serif; }
        html { scroll-behavior: smooth; }
        .grid-lines {
          background-image: 
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-on-load {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slide {
          animation: slideInFromLeft 0.6s ease-out forwards;
        }
        .project-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
      `}</style>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode ? 'bg-black border-b border-white' : 'bg-white border-b border-black'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6 flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-light tracking-wider hover:opacity-60 transition-opacity">
            AHMED MESSAAD
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 lg:gap-12 items-center">
            {['about', 'work', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  activeSection === section 
                    ? darkMode ? 'text-white font-medium' : 'text-black font-medium'
                    : darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-black'
                }`}
              >
                {section}
              </button>
            ))}
            
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className={`px-4 py-2 border transition-all text-xs uppercase tracking-widest ${
                darkMode 
                  ? 'border-white hover:bg-white hover:text-black' 
                  : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              Resume
            </a>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-10 rounded-full border ${
                darkMode ? 'border-white hover:bg-white/10' : 'border-black hover:bg-black/5'
              } flex items-center justify-center transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        } ${darkMode ? 'border-t border-white bg-black' : 'border-t border-black bg-white'}`}>
          <div className="px-6 py-6 space-y-4">
            {['about', 'work', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left text-xs uppercase tracking-widest transition-colors ${
                  activeSection === section 
                    ? 'font-medium' 
                    : darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {section}
              </button>
            ))}
            <a
              href="/resume.pdf"
              download
              className={`block w-full text-left px-4 py-2 border transition-all text-xs uppercase tracking-widest ${
                darkMode 
                  ? 'border-white hover:bg-white hover:text-black' 
                  : 'border-black hover:bg-black hover:text-white'
              }`}
            >
              Download Resume
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 text-xs uppercase tracking-widest"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={`min-h-screen flex items-center justify-center ${darkMode ? 'border-b border-white' : 'border-b border-black'}`}>
        <div className="text-center px-6 md:px-12">
          <h1 className={`text-6xl md:text-8xl lg:text-[120px] font-light leading-none mb-6 md:mb-8 tracking-tight ${hasAnimated ? 'animate-on-load' : 'opacity-0'}`}>
            AHMED MESSAAD
          </h1>
          <p className={`text-lg md:text-2xl font-light tracking-wide mb-4 ${hasAnimated ? 'animate-fade' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Machine Learning Engineer
          </p>
          <p className={`text-xs md:text-sm uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'} ${hasAnimated ? 'animate-fade' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Reinforcement Learning · Computer Vision · Healthcare AI
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={darkMode ? 'border-b border-white' : 'border-b border-black'}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-4 md:mb-8 animate-slide">
              <h2 className={`text-xs uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>About</h2>
              <img 
                src="/noun.svg" 
                alt="About icon" 
                className={`w-4 h-4 ${darkMode ? 'invert' : ''}`}
              />
            </div>
          </div>
          <div className="md:col-span-9">
            <p className="text-xl md:text-3xl font-light leading-relaxed mb-8 md:mb-12 animate-fade" style={{ animationDelay: '0.1s' }}>
              Specializing in deep reinforcement learning and clinical AI systems. Building production-grade diagnostic tools and sequential decision-making agents for healthcare applications.
            </p>
            
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 md:pt-12 ${darkMode ? 'border-t border-white' : 'border-t border-black'}`}>
              <div className="animate-fade" style={{ animationDelay: '0.2s' }}>
                <h3 className={`text-xs uppercase tracking-widest mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Core Expertise</h3>
                <ul className="space-y-2 text-sm">
                  <li>Deep Reinforcement Learning</li>
                  <li>Computer Vision</li>
                  <li>Medical Imaging</li>
                  <li>Time Series Analysis</li>
                </ul>
              </div>
              <div className="animate-fade" style={{ animationDelay: '0.3s' }}>
                <h3 className={`text-xs uppercase tracking-widest mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Frameworks</h3>
                <ul className="space-y-2 text-sm">
                  <li>PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Stable-Baselines3</li>
                  <li>OpenCV</li>
                </ul>
              </div>
              <div className="animate-fade" style={{ animationDelay: '0.4s' }}>
                <h3 className={`text-xs uppercase tracking-widest mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://github.com/RYANX9" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
                  <li><a href="#contact" className="hover:underline">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className={darkMode ? 'border-b border-white' : 'border-b border-black'}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-24">
            <div className="md:col-span-3">
              <h2 className={`text-xs uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Selected Work</h2>
            </div>
            <div className="md:col-span-9">
              <p className={`text-lg md:text-xl font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Research and production systems spanning reinforcement learning, medical imaging, and healthcare analytics.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                ref={el => projectRefs.current[index] = el}
                className={`project-item ${darkMode ? 'border-t border-white hover:bg-white/5' : 'border-t border-black hover:bg-gray-50'} py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 transition-colors`}
              >
                <div className="md:col-span-2 flex md:block justify-between items-start">
                  <div className={`text-xs uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.year}</div>
                  <div className={`text-xs mt-0 md:mt-2 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>{String(index + 1).padStart(2, '0')}</div>
                </div>
                
                <div className="md:col-span-7">
                  <div className={`text-xs uppercase tracking-widest mb-2 md:mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.category}</div>
                  <h3 className="text-2xl md:text-3xl font-light mb-3 md:mb-4">{project.name}</h3>
                  <p className={`text-sm italic mb-4 md:mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.tagline}</p>
                  <p className="text-sm leading-relaxed mb-6 md:mb-8">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className={`text-xs px-3 py-1 ${darkMode ? 'border border-white' : 'border border-black'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:underline"
                  >
                    View Project
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <div className="md:col-span-3">
                  <div className={`text-xs uppercase tracking-widest mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Metrics</div>
                  <div className="space-y-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className={`${darkMode ? 'border-l-2 border-white' : 'border-l-2 border-black'} pl-4`}>
                        <div className="text-xl md:text-2xl font-light">{value}</div>
                        <div className={`text-xs uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6 md:px-12">
          <h2 className={`text-xs uppercase tracking-widest mb-6 md:mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Get In Touch</h2>
          <p className="text-3xl md:text-5xl font-light mb-8 md:mb-12">Let's collaborate</p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center text-sm">
            <a href="https://github.com/RYANX9" target="_blank" rel="noopener noreferrer" className="hover:underline uppercase tracking-wider">
              GitHub
            </a>
            <a href="mailto:your.email@example.com" className="hover:underline uppercase tracking-wider">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={darkMode ? 'border-t border-white py-8' : 'border-t border-black py-8'}>
        <div className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <div>© 2025 Ahmed Messaad</div>
          <div className="uppercase tracking-widest">ML Engineer</div>
        </div>
      </footer>
    </div>
  );
}
