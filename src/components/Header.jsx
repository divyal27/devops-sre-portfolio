import React from 'react';
import { Terminal, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Header({ onOpenTerminal, activeTrack, setActiveTrack }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-graphite-800/80 bg-graphite-950/90 backdrop-blur-md">
      {/* Top telemetry status ribbon */}
      <div className="border-b border-graphite-800/40 bg-graphite-900/60 px-4 py-1.5 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-console-green opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-console-green"></span>
            </span>
            <span className="font-mono text-[11px] text-graphite-300">
              CLUSTER: <span className="text-console-green">ONLINE</span> • 3 REGIONS HEALTHY (AWS EKS)
            </span>
          </div>
          <div className="hidden font-mono text-[11px] text-graphite-400 sm:block">
            PUNE, IN [SPPU '27] • OPEN FOR DEVOPS / SRE ROLES
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white hover:text-console-green transition-colors">
            <span className="text-console-green font-bold">&gt;</span>
            <span>divyal.padalkar</span>
            <span className="rounded bg-graphite-800 px-1.5 py-0.5 text-[10px] text-graphite-400 font-mono">v3.8</span>
          </a>
        </div>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-graphite-400">
          <a href="#cockpit" className="hover:text-white transition-colors">./projects</a>
          <a href="#experience" className="hover:text-white transition-colors">./experience</a>
          <a href="#certifications" className="hover:text-white transition-colors">./certifications</a>
          <a href="#skills" className="hover:text-white transition-colors">./skills</a>
          <a href="#contact" className="hover:text-white transition-colors">./contact</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Interactive Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 rounded border border-graphite-700 bg-graphite-900/80 px-2.5 py-1 text-xs font-mono text-graphite-200 hover:border-console-green/60 hover:text-console-green transition-colors"
            title="Open Interactive DevOps CLI (Ctrl + ~)"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">CLI</span>
            <span className="rounded bg-graphite-800 px-1 py-0.2 text-[9px] text-graphite-400">~</span>
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

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1 rounded bg-white px-3 py-1.2 text-xs font-medium text-graphite-950 hover:bg-graphite-200 transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Connect</span>
          </a>
        </div>
      </div>
    </header>
  );
}
