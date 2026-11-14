import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activeTrack, setActiveTrack] = useState('devops');
  const [viewMode, setViewMode] = useState('spec'); // 'spec' | 'warroom'
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Keyboard shortcut listener: Ctrl + ~ or Ctrl + ` to toggle CLI
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf8f2] text-black">
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {viewMode === 'warroom' ? (
          <div>
            {/* Live Operations Center / Cluster War Room */}
            <WarRoom />
            {/* Contextual link to return to spec */}
            <div className="bg-[#fde047] border-b-2 border-black py-4 px-4 text-center font-mono text-xs font-bold text-black">
              <span>Want to inspect the raw architecture and code specifications? </span>
              <button
                onClick={() => setViewMode('spec')}
                className="underline bg-white border border-black px-2 py-0.5 ml-1.5 shadow-neo-sm hover:bg-black hover:text-white transition-colors"
              >
                Switch to Spec Cockpit &rarr;
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Hero
              onOpenTerminal={() => setIsTerminalOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />
            <RoleCockpit activeTrack={activeTrack} setActiveTrack={setActiveTrack} />
            
            {/* Teaser section to explore War Room */}
            <div className="border-b-2 border-black bg-[#fde047] py-10 px-4 text-center neo-grid">
              <div className="mx-auto max-w-2xl neo-card-lg bg-white p-6 sm:p-8">
                <span className="border-2 border-black bg-[#86efac] px-3 py-1 font-mono text-xs font-black text-black uppercase tracking-wider shadow-neo-sm">
                  Interactive Simulation
                </span>
                <h3 className="text-2xl font-black text-black uppercase mt-3 mb-1">
                  Experience the Cluster Operations Center
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-800 mb-6 max-w-lg mx-auto">
                  Run live chaos experiments, trigger zero-downtime canary rollouts, and test security admission controls on our simulated AWS EKS cluster.
                </p>
                <button
                  onClick={() => setViewMode('warroom')}
                  className="neo-btn bg-[#fde047] px-6 py-3 font-mono text-xs font-black text-black uppercase"
                >
                  🕹️ Launch Cluster War Room (NOC Mode)
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
    </div>
  );
}
