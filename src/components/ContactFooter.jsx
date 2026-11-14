import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactFooter() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-graphite-950 pt-16 pb-12 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Contact CTA Card */}
        <div className="rounded-2xl border border-graphite-800 bg-graphite-900/60 p-8 sm:p-10 mb-12 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-console-green mb-2">
                <Mail className="h-3.5 w-3.5" />
                <span>LET'S CONNECT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Looking for a DevOps, DevSecOps or SRE Engineer?
              </h2>
              <p className="text-sm text-graphite-300 leading-relaxed max-w-xl">
                I am actively seeking fresher and internship opportunities where I can apply my experience in automated infrastructure, secure delivery pipelines, and production observability.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-console-green px-5 py-3 text-xs font-mono font-medium text-graphite-950 hover:bg-emerald-400 transition-colors shadow-subtle"
              >
                <Mail className="h-4 w-4" />
                <span>SEND DIRECT EMAIL</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 rounded-lg border border-graphite-700 bg-graphite-850 px-5 py-3 text-xs font-mono text-graphite-200 hover:text-white hover:border-graphite-500 transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-console-green" /> : <Copy className="h-4 w-4 text-graphite-400" />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : `COPY ${profile.email}`}</span>
              </button>
            </div>

          </div>

          {/* Quick Contact Info Strip */}
          <div className="mt-8 pt-8 border-t border-graphite-800/80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-graphite-400">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-console-green shrink-0" />
              <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors truncate">
                {profile.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-console-green shrink-0" />
              <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">
                {profile.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-console-green shrink-0" />
              <span>{profile.location}</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Vercel DevOps Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-graphite-500 border-t border-graphite-800/40 pt-8">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-console-green"></span>
            <span>Deployed on Vercel Edge • Automated GitOps CI/CD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
