import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import RoleCockpit from './components/RoleCockpit';
import WarRoom from './components/WarRoom';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import SkillsGrid from './components/SkillsGrid';
import ContactFooter from './components/ContactFooter';
import TerminalModal from './components/TerminalModal';
import ResumeModal from './components/ResumeModal';
import ProjectDrawer from './components/ProjectDrawer';
import { soundManager } from './utils/soundEffects';

export default function App() {
  const [activeTrack, setActiveTrack] = useState('devops');
  const [viewMode, setViewMode] = useState('spec'); // 'spec' | 'warroom'
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDark, setIsDark] = useState(false);

  // Load theme preference
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('neo_theme_dark');
      if (storedTheme === 'true') {
        setIsDark(true);
      }
    } catch (e) {}
  }, []);

  const handleToggleTheme = (val) => {
    setIsDark(val);
    try {
      localStorage.setItem('neo_theme_dark', val ? 'true' : 'false');
    } catch (e) {}
  };

  // Global Keyboard Shortcuts (Emil Kowalski Design Eng Standard)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger hotkeys if typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        soundManager.playClick();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === '1') {
        soundManager.playClick();
        setActiveTrack('devops');
        toast.info('Switched to DevOps Track [1]');
      } else if (e.key === '2') {
        soundManager.playClick();
        setActiveTrack('devsecops');
        toast.info('Switched to DevSecOps Track [2]');
      } else if (e.key === '3') {
        soundManager.playClick();
        setActiveTrack('sre');
        toast.info('Switched to SRE Track [3]');
      } else if (e.key === 'w' || e.key === 'W') {
        soundManager.playClick();
        setViewMode(prev => prev === 'spec' ? 'warroom' : 'spec');
      } else if (e.key === 'r' || e.key === 'R') {
        soundManager.playSuccess();
        setIsResumeOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-150 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#fcf8f2] text-black'}`}>
      {/* Neo-Brutalist Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: isDark ? '#1a1a1a' : '#ffffff',
            border: isDark ? '2px solid #fde047' : '2px solid #000000',
            color: isDark ? '#ffffff' : '#000000',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: isDark ? '4px 4px 0px #fde047' : '4px 4px 0px #000000',
            borderRadius: '0px',
          }
        }}
      />

      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        setIsDark={handleToggleTheme}
      />

      <main>
        {viewMode === 'warroom' ? (
          <div>
            <WarRoom />
            {/* Contextual link to return to spec */}
            <div className={`border-b-2 border-black py-4 px-4 text-center font-mono text-xs font-bold ${isDark ? 'bg-[#181818] text-[#fde047]' : 'bg-[#fde047] text-black'}`}>
              <span>Want to inspect the raw architecture and code specifications? </span>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setViewMode('spec');
                }}
                className={`underline border px-2 py-0.5 ml-1.5 shadow-neo-sm transition-colors ${
                  isDark ? 'bg-black text-[#fde047] border-[#fde047]' : 'bg-white text-black border-black hover:bg-black hover:text-white'
                }`}
              >
                Switch to Spec Cockpit [W] &rarr;
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Hero
              onOpenTerminal={() => setIsTerminalOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />
            <RoleCockpit
              activeTrack={activeTrack}
              setActiveTrack={setActiveTrack}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
            
            {/* Teaser section to explore War Room */}
            <div className={`border-b-2 border-black py-10 px-4 text-center neo-grid ${isDark ? 'bg-[#121212]' : 'bg-[#fde047]'}`}>
              <div className={`mx-auto max-w-2xl neo-card-lg p-6 sm:p-8 ${isDark ? 'bg-[#1a1a1a] text-white border-[#fde047]' : 'bg-white text-black'}`}>
                <span className="border-2 border-black bg-[#86efac] text-black px-3 py-1 font-mono text-xs font-black uppercase tracking-wider shadow-neo-sm">
                  Interactive Simulation
                </span>
                <h3 className="text-2xl font-black uppercase mt-3 mb-1">
                  Experience the Cluster Operations Center
                </h3>
                <p className={`text-xs sm:text-sm font-medium mb-6 max-w-lg mx-auto ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                  Run live chaos experiments, trigger zero-downtime canary rollouts, and test security admission controls on our simulated AWS EKS cluster.
                </p>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setViewMode('warroom');
                  }}
                  className="neo-btn bg-[#fde047] text-black px-6 py-3 font-mono text-xs font-black uppercase"
                >
                  🕹️ Launch Cluster War Room [Press W]
                </button>
              </div>
            </div>

            <Experience />
            <Certifications />
            <SkillsGrid />
          </div>
        )}
      </main>

      <ContactFooter onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Deep-Dive Spec Drawer */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
