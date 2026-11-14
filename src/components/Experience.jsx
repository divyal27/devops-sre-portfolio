import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="border-b border-graphite-800/80 bg-graphite-950 py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-console-green mb-2">
            <Briefcase className="h-3.5 w-3.5" />
            <span>TRACK RECORD &amp; EDUCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Hands-on Engineering Experience
          </h2>
          <p className="text-sm text-graphite-400 mt-1">
            Real production impact, automated infrastructure provisioning, and incident resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-8 space-y-6">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-graphite-800 bg-graphite-900/60 p-6 sm:p-7 shadow-elevated"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-graphite-800/70 pb-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {job.role}
                    </h3>
                    <div className="text-sm text-console-green font-mono font-medium">
                      {job.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-graphite-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-5">
                  {job.achievements.map((ach, aidx) => (
                    <div key={aidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-graphite-300 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-console-green shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-graphite-800/60">
                  {job.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="rounded bg-graphite-800 px-2 py-0.5 font-mono text-[11px] text-graphite-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Academic Background */}
          <div className="lg:col-span-4">
            <div className="rounded-xl border border-graphite-800 bg-graphite-900/60 p-6 shadow-elevated h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-graphite-400 uppercase tracking-wider mb-4">
                  <GraduationCap className="h-4 w-4 text-console-green" />
                  <span>Academic Foundation</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {education.degree}
                </h3>
                <div className="text-sm text-graphite-300 font-medium mb-3">
                  {education.institution}
                </div>

                <div className="space-y-1.5 font-mono text-xs text-graphite-400 mb-6">
                  <div>Period: <span className="text-white">{education.period}</span></div>
                  <div>Location: <span className="text-white">{education.location}</span></div>
                  <div>Focus: <span className="text-console-green">Cloud Infrastructure, Distributed Systems &amp; Reliability</span></div>
                </div>

                <div className="rounded border border-graphite-800 bg-graphite-950 p-4 font-mono text-xs text-graphite-400 leading-relaxed">
                  "Applied coursework across Computer Networks, Operating Systems, Cloud Computing, and Information Security directly in live production environments."
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-graphite-800/80 font-mono text-[11px] text-graphite-500">
                GRADUATION: 2027 • SPPU UNIVERSITY
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
