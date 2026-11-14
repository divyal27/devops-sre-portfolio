import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Check, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="border-b border-graphite-800/80 bg-graphite-950 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-console-green mb-2">
            <Award className="h-3.5 w-3.5" />
            <span>CREDENTIALS &amp; VERIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Industry Certifications
          </h2>
          <p className="text-sm text-graphite-400 mt-1">
            Verified expertise in cloud continuous delivery, automated testing, and agentic workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-graphite-800 bg-graphite-900/60 p-6 flex flex-col justify-between hover:border-graphite-700 transition-colors shadow-elevated"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded bg-graphite-800 px-2 py-0.5 font-mono text-[10px] text-console-green uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <span className="font-mono text-xs text-graphite-400 font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs text-graphite-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-graphite-800/60 flex items-center justify-between font-mono text-[11px]">
                <span className="text-console-green flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" />
                  Verified Credential
                </span>
                <span className="text-graphite-500">Resume Link</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
