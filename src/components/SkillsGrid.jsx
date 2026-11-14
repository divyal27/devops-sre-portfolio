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
    <section id="skills" className="border-b-2 border-black bg-[#fcf8f2] py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border-2 border-black bg-[#fde047] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm mb-2">
            <Wrench className="h-3.5 w-3.5" />
            <span>TOOLING &amp; ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
            Core Technical Skills
          </h2>
          <p className="text-sm font-medium text-gray-700 mt-1">
            Production-tested technologies across infrastructure, security scanning, and reliability engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const Icon = categoryIcons[category] || Wrench;
            return (
              <div
                key={idx}
                className="neo-card bg-white p-5"
              >
                <div className="flex items-center gap-2.5 mb-4 border-b-2 border-black pb-3">
                  <div className="p-1.5 border-2 border-black bg-[#fde047] shadow-neo-sm">
                    <Icon className="h-4 w-4 text-black" />
                  </div>
                  <h3 className="font-mono text-xs font-black text-black uppercase tracking-wider">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item, iidx) => (
                    <span
                      key={iidx}
                      className="border border-black bg-[#faf8f5] px-2.5 py-1 font-mono text-xs font-bold text-black hover:bg-[#86efac] transition-colors shadow-neo-sm"
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
