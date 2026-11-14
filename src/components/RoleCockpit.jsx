import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Terminal, ShieldCheck, Activity, ExternalLink, Layers, SearchCode } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundManager } from '../utils/soundEffects';

export default function RoleCockpit({ activeTrack, setActiveTrack, onSelectProject }) {
  const { roleTracks } = portfolioData;
  const current = roleTracks[activeTrack];

  return (
    <section id="cockpit" className="border-b-2 border-black bg-[#fcf8f2] py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-black bg-[#fde047] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm mb-2">
              <Layers className="h-3.5 w-3.5" />
              <span>INTERACTIVE ROLE COCKPIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
              Tailored Engineering Showcase
            </h2>
            <p className="text-sm font-medium text-gray-700 mt-1 max-w-xl">
              Switch between target roles to inspect specialized architecture patterns, real pipeline implementations, and production repositories.
            </p>
          </div>

          {/* 3-Track Segmented Controller */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTrack('devops')}
              className={`neo-btn flex items-center gap-2 px-4 py-2 font-black transition-all ${
                activeTrack === 'devops'
                  ? 'bg-[#93c5fd] text-black shadow-neo'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <Terminal className="h-4 w-4" />
              <span>DevOps</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTrack('devsecops')}
              className={`neo-btn flex items-center gap-2 px-4 py-2 font-black transition-all ${
                activeTrack === 'devsecops'
                  ? 'bg-[#86efac] text-black shadow-neo'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>DevSecOps</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTrack('sre')}
              className={`neo-btn flex items-center gap-2 px-4 py-2 font-black transition-all ${
                activeTrack === 'sre'
                  ? 'bg-[#fde047] text-black shadow-neo'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <Activity className="h-4 w-4" />
              <span>SRE</span>
            </motion.button>
          </div>
        </div>

        {/* Active Track Highlight Tagline */}
        <motion.div
          key={activeTrack + '-tag'}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-8 border-2 border-black bg-white p-3 font-mono text-xs font-bold text-black shadow-neo-sm flex items-center gap-2"
        >
          <span className="bg-[#fdba74] px-2 py-0.5 border border-black uppercase">Active Track</span>
          <span className="text-black font-extrabold">{current.title}:</span>
          <span className="text-gray-700 font-medium">{current.tagline}</span>
        </motion.div>

        {/* Flagship Project Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="neo-card-lg bg-white p-6 sm:p-8 mb-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b-2 border-black pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="border-2 border-black bg-[#fde047] px-2.5 py-0.5 font-mono text-xs font-black text-black uppercase shadow-neo-sm">
                    Flagship Repository
                  </span>
                  <span className="font-mono text-xs font-bold text-gray-600">Production-Grade Architecture</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                  {current.flagship.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    soundManager.playClick();
                    onSelectProject(current.flagship);
                  }}
                  className="neo-btn flex items-center gap-1.5 bg-[#fde047] px-4 py-2.5 text-xs font-mono font-black text-black uppercase shadow-neo-sm"
                >
                  <SearchCode className="h-4 w-4" />
                  <span>Inspect Failure &amp; FinOps Spec</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={current.flagship.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playSuccess()}
                  className="neo-btn flex items-center gap-2 bg-[#22c55e] px-4 py-2.5 text-xs font-mono font-black text-black uppercase"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>
              </div>
            </div>

            <p className="text-base text-gray-900 font-medium leading-relaxed mb-6">
              {current.flagship.summary}
            </p>

            {/* Highlights checklist */}
            <div className="space-y-3 mb-8 bg-[#fcf8f2] p-5 border-2 border-black shadow-neo-sm">
              <h4 className="font-mono text-xs font-black text-black uppercase tracking-wider mb-2">
                Key Engineering Highlights:
              </h4>
              {current.flagship.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-900 font-medium">
                  <span className="h-4 w-4 rounded-full bg-[#22c55e] border border-black flex items-center justify-center shrink-0 mt-0.5 text-black font-black text-[10px]">
                    ✓
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Architecture Topology Flow */}
            <div className="border-2 border-black bg-[#faf8f5] p-5 mb-8 shadow-neo-sm">
              <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
                <span className="font-mono text-xs font-black text-black uppercase tracking-wider">
                  System Pipeline Topology:
                </span>
                <span className="font-mono text-[11px] font-bold text-gray-600">End-to-End Delivery Flow</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {current.flagship.architectureNodes.map((node, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="neo-card bg-white p-3.5 flex flex-col justify-between"
                  >
                    <div className="font-mono text-xs font-black text-black mb-1 bg-[#fde047] border border-black px-1.5 py-0.5 inline-block w-fit">
                      {node.step}
                    </div>
                    <div className="text-xs font-medium text-gray-800 leading-relaxed mt-2">
                      {node.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <div className="font-mono text-xs font-black text-black uppercase tracking-wider mb-2.5">
                Tools &amp; Frameworks:
              </div>
              <div className="flex flex-wrap gap-2">
                {current.flagship.techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-neo-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Secondary Track Repositories */}
        <div>
          <h4 className="font-mono text-sm font-black text-black uppercase tracking-wider mb-4">
            Additional {current.title} Projects:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.secondaryProjects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="neo-card bg-white p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5
                      onClick={() => {
                        soundManager.playClick();
                        onSelectProject(project);
                      }}
                      className="font-black text-black text-base uppercase hover:underline cursor-pointer"
                    >
                      {project.title}
                    </h5>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn bg-[#fde047] p-1.5 text-black"
                      aria-label="GitHub link"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-xs font-medium text-gray-800 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-black">
                  {project.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="border border-black bg-[#faf8f5] px-2 py-0.5 font-mono text-[11px] font-bold text-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
