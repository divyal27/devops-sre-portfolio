import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Cloud, GitBranch, Shield, Activity, Database, Wrench } from 'lucide-react';

export default function SkillsGrid() {
  const { skills } = portfolioData;

  const categoryIcons = {
    "Cloud & Infrastructure": Cloud,
    "Containers & Orchestration": Cpu,
    "CI/CD & GitOps": GitBranch,
    "IaC & Automation": Wrench,
    "Observability & Monitoring": Activity,
    "DevSecOps & Compliance": Shield,
    "AIOps & Modern Tooling": Database,
  };

  return (
    <section id="skills" className="border-b border-graphite-800/80 bg-graphite-950 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-console-green mb-2">
            <Wrench className="h-3.5 w-3.5" />
            <span>TOOLING &amp; ECOSYSTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Core Technical Skills
          </h2>
          <p className="text-sm text-graphite-400 mt-1">
            Production-tested technologies across infrastructure, security scanning, and reliability engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = categoryIcons[category] || Wrench;
            return (
              <div
                key={idx}
                className="rounded-xl border border-graphite-800 bg-graphite-900/50 p-5 shadow-elevated"
              >
                <div className="flex items-center gap-2.5 mb-4 border-b border-graphite-800/80 pb-3">
                  <Icon className="h-4 w-4 text-console-green" />
                  <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item, iidx) => (
                    <span
                      key={iidx}
                      className="rounded border border-graphite-800 bg-graphite-850 px-2.5 py-1 font-mono text-xs text-graphite-300 hover:text-white hover:border-graphite-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
