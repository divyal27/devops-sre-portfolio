import React from 'react';
import { Terminal, Mail, FileDown, Layers, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Header({
  viewMode,
  setViewMode,
  onOpenTerminal,
  onOpenResume
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-graphite-800/80 bg-graphite-950/95 backdrop-blur-md">
      {/* Top telemetry status ribbon */}
      <div className="border-b border-graphite-800/40 bg-graphite-900/60 px-4 py-1.5 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-console-green opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-console-green"></span>
            </span>
            <span className="font-mono text-[11px] text-graphite-300">
              CLUSTER: <span className="text-console-green">HEALTHY</span> • 3 NODES AP-SOUTH-1 (EKS 1.30)
            </span>
          </div>
          <div className="hidden font-mono text-[11px] text-graphite-400 sm:block">
            DIVYAL PADALKAR • DEVOPS / DEVSECOPS / SRE • PUNE, IN
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Left: Name and Dual Cockpit Selector */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white hover:text-console-green transition-colors">
            <span className="text-console-green font-bold">&gt;</span>
            <span>divyal.padalkar</span>
          </a>

          {/* DUAL COCKPIT MODE SELECTOR */}
          <div className="hidden md:flex items-center rounded-lg border border-graphite-800 bg-graphite-900/90 p-0.5 font-mono text-xs">
            <button
              onClick={() => setViewMode('spec')}
              className={`flex items-center gap-1.5 rounded px-2.5 py-1 transition-all ${
                viewMode === 'spec'
                  ? 'bg-graphite-800 text-white font-medium shadow-sm border border-graphite-700'
                  : 'text-graphite-400 hover:text-white'
              }`}
            >
              <Layers className="h-3 w-3 text-blue-400" />
              <span>Spec Cockpit</span>
            </button>

            <button
              onClick={() => setViewMode('warroom')}
              className={`flex items-center gap-1.5 rounded px-2.5 py-1 transition-all ${
                viewMode === 'warroom'
                  ? 'bg-graphite-800 text-white font-medium shadow-sm border border-graphite-700'
                  : 'text-graphite-400 hover:text-white'
              }`}
            >
              <Activity className="h-3 w-3 text-console-green" />
              <span>Cluster War Room (NOC)</span>
            </button>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Download 1-Page ATS Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 rounded border border-console-green/40 bg-console-green/10 px-3 py-1.2 text-xs font-mono font-medium text-console-green hover:bg-console-green hover:text-graphite-950 transition-colors"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">ATS Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>

          {/* Interactive Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 rounded border border-graphite-700 bg-graphite-900/80 px-2.5 py-1 text-xs font-mono text-graphite-200 hover:border-console-green/60 hover:text-console-green transition-colors"
            title="Open Interactive DevOps CLI"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          <a
            href="https://github.com/divyal27"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-graphite-800 p-1.5 text-graphite-400 hover:border-graphite-600 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/divyal-padalkar2704/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-graphite-800 p-1.5 text-graphite-400 hover:border-graphite-600 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Mobile Dual Cockpit Switcher Tab */}
      <div className="flex md:hidden border-t border-graphite-800 bg-graphite-900/90 font-mono text-xs">
        <button
          onClick={() => setViewMode('spec')}
          className={`flex-1 py-2 text-center flex items-center justify-center gap-1.5 ${
            viewMode === 'spec' ? 'text-white border-b-2 border-console-green bg-graphite-850' : 'text-graphite-400'
          }`}
        >
          <Layers className="h-3 w-3 text-blue-400" />
          <span>Spec Cockpit</span>
        </button>
        <button
          onClick={() => setViewMode('warroom')}
          className={`flex-1 py-2 text-center flex items-center justify-center gap-1.5 ${
            viewMode === 'warroom' ? 'text-white border-b-2 border-console-green bg-graphite-850' : 'text-graphite-400'
          }`}
        >
          <Activity className="h-3 w-3 text-console-green" />
          <span>Cluster War Room (NOC)</span>
        </button>
      </div>
    </header>
  );
}
