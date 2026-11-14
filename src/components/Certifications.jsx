import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Check } from 'lucide-react';

export default function Certifications() {
  const { certifications } = portfolioData;

  const certColors = ['bg-[#fde047]', 'bg-[#86efac]', 'bg-[#93c5fd]'];

  return (
    <section id="certifications" className="border-b-2 border-black bg-[#fcf8f2] py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border-2 border-black bg-[#86efac] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm mb-2">
            <Award className="h-3.5 w-3.5" />
            <span>CREDENTIALS &amp; VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
            Industry Certifications
          </h2>
          <p className="text-sm font-medium text-gray-700 mt-1">
            Verified expertise in cloud continuous delivery, automated testing, and agentic workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`neo-card-lg ${certColors[idx % certColors.length]} p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b-2 border-black pb-2">
                  <span className="border border-black bg-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-black shadow-neo-sm">
                    {cert.category}
                  </span>
                  <span className="font-mono text-xs font-black text-black">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg font-black text-black mb-2 leading-snug uppercase">
                  {cert.name}
                </h3>

                <p className="text-xs font-medium text-gray-900 leading-relaxed bg-white/90 p-3 border-2 border-black shadow-neo-sm">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t-2 border-black flex items-center justify-between font-mono text-xs font-bold text-black">
                <span className="flex items-center gap-1 bg-white px-2 py-0.5 border border-black shadow-neo-sm">
                  <Check className="h-4 w-4 text-[#22c55e]" />
                  Verified
                </span>
                <span className="underline">Credential on Resume</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
