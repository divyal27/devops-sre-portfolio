import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RoleCockpit from './components/RoleCockpit';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import SkillsGrid from './components/SkillsGrid';
import ContactFooter from './components/ContactFooter';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [activeTrack, setActiveTrack] = useState('devops');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

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
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeTrack={activeTrack}
        setActiveTrack={setActiveTrack}
      />

      <main>
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <RoleCockpit activeTrack={activeTrack} setActiveTrack={setActiveTrack} />
        <Experience />
        <Certifications />
        <SkillsGrid />
      </main>

      <ContactFooter />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
