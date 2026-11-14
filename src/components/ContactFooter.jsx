import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactFooter({ onOpenResume }) {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-[#fcf8f2] pt-16 pb-12 px-4 sm:px-6 border-t-2 border-black neo-grid">
      <div className="mx-auto max-w-7xl">
        
        {/* Contact CTA Card */}
        <div className="neo-card-lg bg-white p-8 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border-2 border-black bg-[#86efac] px-3.5 py-1 font-mono text-xs font-black text-black shadow-neo-sm mb-3">
                <Mail className="h-4 w-4" />
                <span>LET'S CONNECT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase mb-3">
                Looking for a DevOps, DevSecOps or SRE Engineer?
              </h2>
              <p className="text-base font-medium text-gray-800 leading-relaxed max-w-xl">
                I am actively seeking fresher and internship opportunities where I can apply my experience in automated infrastructure, secure delivery pipelines, and production observability.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="neo-btn flex items-center justify-center gap-2 bg-[#22c55e] p-3.5 font-black text-black uppercase text-center"
              >
                <Mail className="h-4 w-4" />
                <span>SEND DIRECT EMAIL</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="neo-btn flex items-center justify-center gap-2 bg-[#fde047] p-3.5 font-bold text-black uppercase text-center"
              >
                {copied ? <Check className="h-4 w-4 text-black" /> : <Copy className="h-4 w-4 text-black" />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : `COPY ${profile.email}`}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="neo-btn flex items-center justify-center gap-2 bg-[#93c5fd] p-3.5 font-black text-black uppercase text-center"
              >
                <span>VIEW 1-PAGE ATS RESUME</span>
              </button>
            </div>

          </div>

          {/* Quick Contact Info Strip */}
          <div className="mt-8 pt-8 border-t-2 border-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs font-bold text-black">
            <div className="flex items-center gap-2 bg-[#faf8f5] p-2.5 border border-black shadow-neo-sm">
              <Mail className="h-4 w-4 text-black shrink-0" />
              <a href={`mailto:${profile.email}`} className="underline truncate">
                {profile.email}
              </a>
            </div>

            <div className="flex items-center gap-2 bg-[#faf8f5] p-2.5 border border-black shadow-neo-sm">
              <Phone className="h-4 w-4 text-black shrink-0" />
              <a href={`tel:${profile.phone}`} className="underline">
                {profile.phone}
              </a>
            </div>

            <div className="flex items-center gap-2 bg-[#faf8f5] p-2.5 border border-black shadow-neo-sm">
              <MapPin className="h-4 w-4 text-black shrink-0" />
              <span>{profile.location}</span>
            </div>

            <div className="flex items-center gap-4 bg-[#faf8f5] p-2.5 border border-black shadow-neo-sm justify-around">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#2563eb]"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#2563eb]"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Vercel Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold text-black border-t-2 border-black pt-6">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 bg-[#fde047] border border-black px-2.5 py-1 shadow-neo-sm">
            <span className="h-2 w-2 rounded-full bg-[#22c55e] border border-black"></span>
            <span>DEPLOYED ON VERCEL EDGE • CONTINUOUS GITOPS CI/CD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
