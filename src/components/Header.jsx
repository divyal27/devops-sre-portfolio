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
    <header className="sticky top-0 z-40 w-full border-b-2 border-black bg-[#fcf8f2] backdrop-blur-md">
      {/* Top neo-brutalist status ribbon */}
      <div className="border-b-2 border-black bg-[#fde047] px-4 py-1.5 text-xs font-mono font-bold text-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] border border-black animate-pulse"></span>
            <span>CLUSTER STATUS: HEALTHY • 3 NODES ONLINE [AWS EKS 1.30]</span>
          </div>
          <div className="hidden sm:block uppercase tracking-wider">
            DIVYAL PADALKAR • DEVOPS / DEVSECOPS / SRE • PUNE, IN
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        
        {/* Left: Hostname & Dual Cockpit Selector */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-extrabold tracking-tight text-black hover:text-[#2563eb] transition-colors">
            <span className="bg-[#86efac] border-2 border-black px-1.5 py-0.5 text-black shadow-neo-sm">
              &gt;_
            </span>
            <span className="text-base">divyal.padalkar</span>
          </a>

          {/* DUAL COCKPIT MODE SELECTOR */}
          <div className="hidden md:flex items-center gap-1.5 font-mono text-xs">
            <button
              onClick={() => setViewMode('spec')}
              className={`flex items-center gap-1.5 rounded-none px-3 py-1.5 border-2 border-black font-bold transition-all ${
                viewMode === 'spec'
                  ? 'bg-[#93c5fd] shadow-neo translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white hover:bg-gray-100 shadow-neo-sm'
              }`}
            >
              <Layers className="h-3.5 w-3.5 text-black" />
              <span>Spec Cockpit</span>
            </button>

            <button
              onClick={() => setViewMode('warroom')}
              className={`flex items-center gap-1.5 rounded-none px-3 py-1.5 border-2 border-black font-bold transition-all ${
                viewMode === 'warroom'
                  ? 'bg-[#86efac] shadow-neo translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white hover:bg-gray-100 shadow-neo-sm'
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-black" />
              <span>Cluster War Room</span>
            </button>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          
          {/* Download 1-Page ATS Resume */}
          <button
            onClick={onOpenResume}
            className="neo-btn flex items-center gap-1.5 bg-[#86efac] px-3.5 py-1.5 font-mono text-xs font-bold text-black"
          >
            <FileDown className="h-4 w-4" />
            <span className="hidden sm:inline">ATS Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>

          {/* Interactive Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="neo-btn flex items-center gap-1.5 bg-[#fde047] px-3 py-1.5 font-mono text-xs font-bold text-black"
            title="Open Interactive DevOps CLI"
          >
            <Terminal className="h-4 w-4" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          <a
            href="https://github.com/divyal27"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn bg-white p-1.5 text-black"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/divyal-padalkar2704/"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn bg-white p-1.5 text-black"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Mobile Dual Cockpit Switcher Tab */}
      <div className="flex md:hidden border-t-2 border-black bg-white font-mono text-xs font-bold">
        <button
          onClick={() => setViewMode('spec')}
          className={`flex-1 py-2.5 text-center flex items-center justify-center gap-1.5 border-r-2 border-black ${
            viewMode === 'spec' ? 'bg-[#93c5fd]' : 'bg-white'
          }`}
        >
          <Layers className="h-3.5 w-3.5 text-black" />
          <span>Spec Cockpit</span>
        </button>
        <button
          onClick={() => setViewMode('warroom')}
          className={`flex-1 py-2.5 text-center flex items-center justify-center gap-1.5 ${
            viewMode === 'warroom' ? 'bg-[#86efac]' : 'bg-white'
          }`}
        >
          <Activity className="h-3.5 w-3.5 text-black" />
          <span>War Room (NOC)</span>
        </button>
      </div>
    </header>
  );
}
