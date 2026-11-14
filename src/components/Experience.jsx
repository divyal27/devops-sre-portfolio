import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="border-b-2 border-black bg-[#fcf8f2] py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border-2 border-black bg-[#fde047] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm mb-2">
            <Briefcase className="h-3.5 w-3.5" />
            <span>TRACK RECORD &amp; EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
            Hands-on Engineering Experience
          </h2>
          <p className="text-sm font-medium text-gray-700 mt-1">
            Real production impact, automated infrastructure provisioning, and incident resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-8 space-y-6">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="neo-card-lg bg-white p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-black text-black uppercase">
                      {job.role}
                    </h3>
                    <div className="text-sm font-mono font-black text-[#2563eb] mt-0.5">
                      {job.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono font-bold text-black">
                    <span className="flex items-center gap-1 border border-black bg-[#fde047] px-2 py-0.5 shadow-neo-sm">
                      <Calendar className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1 border border-black bg-white px-2 py-0.5 shadow-neo-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-5">
                  {job.achievements.map((ach, aidx) => (
                    <div key={aidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">
                      <span className="h-4 w-4 rounded-full bg-[#22c55e] border border-black flex items-center justify-center shrink-0 mt-0.5 text-black font-black text-[10px]">
                        ✓
                      </span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-black">
                  {job.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="border border-black bg-[#faf8f5] px-2.5 py-0.5 font-mono text-xs font-bold text-black shadow-neo-sm"
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
            <div className="neo-card-lg bg-[#fde047] p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-black text-black uppercase tracking-wider mb-4 border-b-2 border-black pb-2">
                  <GraduationCap className="h-4 w-4 text-black" />
                  <span>Academic Foundation</span>
                </div>

                <h3 className="text-xl font-black text-black uppercase mb-1">
                  {education.degree}
                </h3>
                <div className="text-sm font-bold text-gray-900 mb-4">
                  {education.institution}
                </div>

                <div className="space-y-2 font-mono text-xs font-bold text-black mb-6 bg-white p-4 border-2 border-black shadow-neo-sm">
                  <div>Period: <span className="bg-[#86efac] px-1 border border-black">{education.period}</span></div>
                  <div>Location: <span>{education.location}</span></div>
                  <div>Focus: <span className="text-[#2563eb]">Cloud Infrastructure &amp; Reliability</span></div>
                </div>

                <div className="border-2 border-black bg-white p-4 font-mono text-xs text-gray-800 font-medium leading-relaxed shadow-neo-sm">
                  "Applied coursework across Computer Networks, Operating Systems, Cloud Computing, and Information Security directly in live production environments."
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black font-mono text-xs font-black text-black uppercase">
                GRADUATION: 2027 • SPPU UNIVERSITY
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
