import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileDown, Layers, Activity, Volume2, VolumeX, Moon, Sun, Wifi } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundManager } from '../utils/soundEffects';

export default function Header({
  viewMode,
  setViewMode,
  onOpenTerminal,
  onOpenResume,
  isDark,
  setIsDark
}) {
  const [isMuted, setIsMuted] = useState(false);
  const [latencyMs, setLatencyMs] = useState(24);

  useEffect(() => {
    setIsMuted(soundManager.initMuteState());

    // Live latency ping test
    const measurePing = async () => {
      const start = performance.now();
      try {
        await fetch('https://1.1.1.1/cdn-cgi/trace', { mode: 'no-cors', cache: 'no-store' });
        const end = performance.now();
        setLatencyMs(Math.round(end - start) || 28);
      } catch (e) {
        setLatencyMs(Math.floor(22 + Math.random() * 8));
      }
    };
    measurePing();
    const interval = setInterval(measurePing, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const next = !isMuted;
    soundManager.setMuted(next);
    setIsMuted(next);
    if (!next) {
      soundManager.playClick();
    }
  };

  const toggleTheme = () => {
    soundManager.playClick();
    setIsDark(!isDark);
  };

  return (
    <header className={`sticky top-0 z-40 w-full border-b-2 border-black ${isDark ? 'bg-[#121212] text-white' : 'bg-[#fcf8f2] text-black'} backdrop-blur-md transition-colors duration-150`}>
      {/* Top telemetry ribbon */}
      <div className={`border-b-2 border-black ${isDark ? 'bg-[#1a1a1a] text-[#fde047]' : 'bg-[#fde047] text-black'} px-4 py-1.5 text-xs font-mono font-bold`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] border border-black animate-pulse"></span>
              <span>CLUSTER: HEALTHY • 3 NODES AP-SOUTH-1</span>
            </span>
            <span className="border-l border-black/40 pl-3 flex items-center gap-1 text-[11px]">
              <Wifi className="h-3 w-3 text-black" />
              <span>LIVE EDGE PING: <span className="font-black underline">{latencyMs}ms</span></span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[11px] uppercase tracking-wider">
            <span>SHORTCUTS: <kbd className="bg-white text-black px-1 border border-black shadow-neo-sm">[1-3]</kbd> ROLES • <kbd className="bg-white text-black px-1 border border-black shadow-neo-sm">[W]</kbd> WAR ROOM • <kbd className="bg-white text-black px-1 border border-black shadow-neo-sm">[R]</kbd> RESUME</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Left: Hostname & Dual Cockpit Selector */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            href="#"
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-2 font-mono text-sm font-extrabold tracking-tight hover:text-[#2563eb] transition-colors"
          >
            <span className="bg-[#86efac] border-2 border-black px-1.5 py-0.5 text-black shadow-neo-sm">
              &gt;_
            </span>
            <span className="text-base">divyal.padalkar</span>
          </motion.a>

          {/* DUAL COCKPIT MODE SELECTOR */}
          <div className="hidden md:flex items-center gap-2 font-mono text-xs">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                soundManager.playClick();
                setViewMode('spec');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 border-2 border-black font-bold transition-all ${
                viewMode === 'spec'
                  ? 'bg-[#93c5fd] text-black shadow-neo translate-x-[-1px] translate-y-[-1px]'
                  : isDark ? 'bg-[#222] text-white hover:bg-[#333] shadow-neo-sm' : 'bg-white text-black hover:bg-gray-100 shadow-neo-sm'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Spec Cockpit</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                soundManager.playClick();
                setViewMode('warroom');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 border-2 border-black font-bold transition-all ${
                viewMode === 'warroom'
                  ? 'bg-[#86efac] text-black shadow-neo translate-x-[-1px] translate-y-[-1px]'
                  : isDark ? 'bg-[#222] text-white hover:bg-[#333] shadow-neo-sm' : 'bg-white text-black hover:bg-gray-100 shadow-neo-sm'
              }`}
            >
              <Activity className="h-3.5 w-3.5" />
              <span>Cluster War Room</span>
              <span className="text-[10px] bg-black text-white px-1 py-0.2 border border-black">W</span>
            </motion.button>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Cyber Dark / Light Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`neo-btn p-1.5 ${isDark ? 'bg-[#fde047] text-black' : 'bg-white text-black'}`}
            title="Toggle Light / Cyber-Dark Neo-Brutalist Theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.button>

          {/* Sound Synthesizer Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleSound}
            className={`neo-btn p-1.5 ${isMuted ? 'bg-[#faf8f5] text-gray-500' : 'bg-[#86efac] text-black'}`}
            title={isMuted ? 'Unmute Mechanical Sound Effects' : 'Mute Sound Effects'}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </motion.button>

          {/* Download 1-Page ATS Resume */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundManager.playSuccess();
              onOpenResume();
            }}
            className="neo-btn flex items-center gap-1.5 bg-[#86efac] px-3.5 py-1.5 font-mono text-xs font-bold text-black"
          >
            <FileDown className="h-4 w-4" />
            <span className="hidden sm:inline">ATS Resume</span>
            <span className="sm:hidden">Resume</span>
            <span className="hidden lg:inline text-[9px] bg-black text-white px-1 py-0.2 border border-black">R</span>
          </motion.button>

          {/* Interactive Terminal Trigger */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundManager.playClick();
              onOpenTerminal();
            }}
            className="neo-btn flex items-center gap-1.5 bg-[#fde047] px-3 py-1.5 font-mono text-xs font-bold text-black"
            title="Open Interactive DevOps CLI (~ or Ctrl + `)"
          >
            <Terminal className="h-4 w-4" />
            <span className="hidden sm:inline">CLI</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/divyal27"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="neo-btn bg-white p-1.5 text-black"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/divyal-padalkar2704/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClick()}
            className="neo-btn bg-white p-1.5 text-black"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </motion.a>
        </div>
      </div>

      {/* Mobile Dual Cockpit Switcher Tab */}
      <div className={`flex md:hidden border-t-2 border-black font-mono text-xs font-bold ${isDark ? 'bg-[#181818]' : 'bg-white'}`}>
        <button
          onClick={() => {
            soundManager.playClick();
            setViewMode('spec');
          }}
          className={`flex-1 py-2.5 text-center flex items-center justify-center gap-1.5 border-r-2 border-black ${
            viewMode === 'spec' ? 'bg-[#93c5fd] text-black' : isDark ? 'text-white' : 'text-black'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          <span>Spec Cockpit</span>
        </button>
        <button
          onClick={() => {
            soundManager.playClick();
            setViewMode('warroom');
          }}
          className={`flex-1 py-2.5 text-center flex items-center justify-center gap-1.5 ${
            viewMode === 'warroom' ? 'bg-[#86efac] text-black' : isDark ? 'text-white' : 'text-black'
          }`}
        >
          <Activity className="h-3.5 w-3.5" />
          <span>War Room</span>
        </button>
      </div>
    </header>
  );
}
