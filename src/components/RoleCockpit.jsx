import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, ShieldCheck, Activity, ExternalLink, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function RoleCockpit({ activeTrack, setActiveTrack }) {
  const { roleTracks } = portfolioData;
  const current = roleTracks[activeTrack];

  return (
    <section id="cockpit" className="border-b border-graphite-800/80 bg-graphite-950 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-console-green mb-2">
              <Layers className="h-3.5 w-3.5" />
              <span>INTERACTIVE ROLE COCKPIT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Tailored Engineering Showcase
            </h2>
            <p className="text-sm text-graphite-400 mt-1 max-w-xl">
              Switch between target roles to inspect specialized architecture patterns, real pipeline implementations, and production repositories.
            </p>
          </div>

          {/* 3-Track Segmented Controller */}
          <div className="flex items-center rounded-lg border border-graphite-800 bg-graphite-900/80 p-1 font-mono text-xs">
            <button
              onClick={() => setActiveTrack('devops')}
              className={`flex items-center gap-2 rounded px-3 py-2 transition-all ${
                activeTrack === 'devops'
                  ? 'bg-graphite-800 text-white font-medium shadow-sm border border-graphite-700'
                  : 'text-graphite-400 hover:text-white'
              }`}
            >
              <Terminal className="h-3.5 w-3.5 text-blue-400" />
              <span>DevOps</span>
            </button>

            <button
              onClick={() => setActiveTrack('devsecops')}
              className={`flex items-center gap-2 rounded px-3 py-2 transition-all ${
                activeTrack === 'devsecops'
                  ? 'bg-graphite-800 text-white font-medium shadow-sm border border-graphite-700'
                  : 'text-graphite-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-console-green" />
              <span>DevSecOps</span>
            </button>

            <button
              onClick={() => setActiveTrack('sre')}
              className={`flex items-center gap-2 rounded px-3 py-2 transition-all ${
                activeTrack === 'sre'
                  ? 'bg-graphite-800 text-white font-medium shadow-sm border border-graphite-700'
                  : 'text-graphite-400 hover:text-white'
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-amber-400" />
              <span>SRE</span>
            </button>
          </div>
        </div>

        {/* Active Track Highlight Tagline */}
        <div className="mb-8 rounded border border-graphite-800/80 bg-graphite-900/40 px-4 py-2.5 font-mono text-xs text-graphite-300 flex items-center gap-2">
          <span className="text-graphite-500">ACTIVE TRACK:</span>
          <span className="text-white font-semibold">{current.title}</span>
          <span className="text-graphite-600">•</span>
          <span className="text-graphite-400">{current.tagline}</span>
        </div>

        {/* Flagship Project Card */}
        <div className="rounded-xl border border-graphite-800 bg-graphite-900/70 p-6 sm:p-8 shadow-elevated mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-graphite-800 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="rounded bg-graphite-800 px-2 py-0.5 font-mono text-[10px] text-console-green uppercase tracking-wider">
                  Flagship Repository
                </span>
                <span className="font-mono text-xs text-graphite-500">Production-Ready Architecture</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {current.flagship.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={current.flagship.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded bg-white px-4 py-2 text-xs font-mono font-medium text-graphite-950 hover:bg-graphite-200 transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>View on GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <p className="text-sm sm:text-base text-graphite-300 leading-relaxed mb-6">
            {current.flagship.summary}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-2.5 mb-8">
            <h4 className="font-mono text-xs text-graphite-400 uppercase tracking-wider mb-2">Technical Implementation:</h4>
            {current.flagship.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-graphite-300">
                <CheckCircle2 className="h-4 w-4 text-console-green shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Architecture Topology Flow */}
          <div className="rounded-lg border border-graphite-800/90 bg-graphite-950 p-4 sm:p-5 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-graphite-400 uppercase tracking-wider">System Pipeline Topology:</span>
              <span className="font-mono text-[11px] text-graphite-500">End-to-End Delivery Flow</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
              {current.flagship.architectureNodes.map((node, idx) => (
                <div
                  key={idx}
                  className="rounded border border-graphite-800 bg-graphite-900/60 p-3 flex flex-col justify-between"
                >
                  <div className="font-mono text-xs font-semibold text-white mb-1">
                    {node.step}
                  </div>
                  <div className="text-[11px] text-graphite-400 leading-relaxed">
                    {node.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className="font-mono text-[11px] text-graphite-500 uppercase tracking-wider mb-2">Tools &amp; Frameworks:</div>
            <div className="flex flex-wrap gap-2">
              {current.flagship.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded border border-graphite-800 bg-graphite-850 px-2.5 py-1 font-mono text-xs text-graphite-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Track Repositories */}
        <div>
          <h4 className="font-mono text-xs text-graphite-400 uppercase tracking-wider mb-4">
            Additional {current.title} Projects:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.secondaryProjects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-graphite-800 bg-graphite-900/40 p-5 flex flex-col justify-between hover:border-graphite-700 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5 className="font-semibold text-white text-sm sm:text-base">
                      {project.title}
                    </h5>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-graphite-400 hover:text-white transition-colors"
                      aria-label="GitHub link"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-xs text-graphite-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-graphite-800/50">
                  {project.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="rounded bg-graphite-800/80 px-2 py-0.5 font-mono text-[10px] text-graphite-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
