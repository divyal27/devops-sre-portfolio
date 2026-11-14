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
    <div className="min-h-screen bg-graphite-950 text-graphite-200">
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
            <div className="bg-graphite-900 border-b border-graphite-800 py-4 px-4 text-center font-mono text-xs">
              <span className="text-graphite-400">Want to inspect the raw architecture and code specifications? </span>
              <button
                onClick={() => setViewMode('spec')}
                className="text-console-green underline hover:text-emerald-400 ml-1 font-semibold"
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
            <div className="border-b border-graphite-800 bg-graphite-900/40 py-8 px-4 text-center">
              <div className="mx-auto max-w-2xl">
                <span className="rounded bg-graphite-800 px-2.5 py-1 font-mono text-[11px] text-console-green uppercase tracking-wider">
                  Interactive Simulation
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-1">
                  Experience the Cluster Operations Center
                </h3>
                <p className="text-xs text-graphite-400 mb-4">
                  Run live chaos experiments, trigger zero-downtime canary rollouts, and test security admission controls on our simulated AWS EKS cluster.
                </p>
                <button
                  onClick={() => setViewMode('warroom')}
                  className="rounded-lg border border-graphite-700 bg-graphite-850 px-4 py-2 font-mono text-xs text-white hover:border-console-green/80 hover:text-console-green transition-colors"
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
