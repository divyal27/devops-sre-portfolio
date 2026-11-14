import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertOctagon, DollarSign, Layers, Copy, Check } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundManager } from '../utils/soundEffects';

export default function ProjectDrawer({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const handleCopyClone = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(`git clone ${project.repoUrl}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
        {/* Backdrop click to close */}
        <div className="flex-1" onClick={onClose}></div>

        {/* Slide-over Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 350 }}
          className="w-full max-w-2xl bg-white border-l-3 border-black h-full overflow-y-auto shadow-neo-xl flex flex-col justify-between"
        >
          {/* Drawer Titlebar */}
          <div>
            <div className="flex items-center justify-between border-b-2 border-black bg-[#fde047] p-5">
              <div>
                <span className="border border-black bg-black text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider shadow-neo-sm">
                  Deep-Dive Engineering Specification
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-black uppercase mt-1">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  soundManager.playClick();
                  onClose();
                }}
                className="border-2 border-black bg-white p-1.5 text-black hover:bg-black hover:text-white transition-colors shadow-neo-sm"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Body Content */}
            <div className="p-6 space-y-6 text-black">
              
              {/* Executive Overview */}
              <div>
                <h4 className="font-mono text-xs font-black text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-black" />
                  <span>1. The Engineering Challenge</span>
                </h4>
                <p className="text-sm font-medium text-gray-800 leading-relaxed bg-[#fcf8f2] p-4 border-2 border-black shadow-neo-sm">
                  {project.summary || project.description}
                </p>
              </div>

              {/* Failure Mode & Chaos Handling */}
              <div>
                <h4 className="font-mono text-xs font-black text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertOctagon className="h-4 w-4 text-[#f43f5e]" />
                  <span>2. Failure Modes &amp; Automated Resilience</span>
                </h4>
                <div className="border-2 border-black bg-white p-4 space-y-2 shadow-neo-sm">
                  <div className="text-xs font-bold text-black flex items-center gap-2">
                    <span className="bg-[#f472b6] border border-black px-1.5 py-0.2 text-[10px]">SCENARIO</span>
                    <span>OOMKilled Pod or Node Eviction:</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium pl-2 border-l-2 border-black">
                    Configured Kubernetes resource requests/limits, PodDisruptionBudgets (PDB), and Horizontal Pod Autoscalers to guarantee 99.95% availability during node drain events.
                  </p>

                  <div className="text-xs font-bold text-black flex items-center gap-2 pt-2">
                    <span className="bg-[#fde047] border border-black px-1.5 py-0.2 text-[10px]">SCENARIO</span>
                    <span>GitOps Configuration Drift / Broken PR:</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium pl-2 border-l-2 border-black">
                    ArgoCD auto-sync automatically detects state divergence and reconciles back to the declarative Git target within 10 seconds.
                  </p>
                </div>
              </div>

              {/* FinOps & Cloud Cost Optimization */}
              <div>
                <h4 className="font-mono text-xs font-black text-black uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-[#059669]" />
                  <span>3. FinOps &amp; Resource Efficiency</span>
                </h4>
                <div className="border-2 border-black bg-[#86efac] p-4 shadow-neo-sm text-xs font-bold text-black space-y-1">
                  <div>• Efficient multi-tenant namespace resource quotas preventing compute over-provisioning.</div>
                  <div>• Terraform-managed auto-scaling node groups with Spot Instances for dev/staging environments (cutting cloud compute bill by ~40%).</div>
                  <div>• Automated lifecycle policies for container image retention on Amazon ECR.</div>
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              {project.techStack && (
                <div>
                  <h4 className="font-mono text-xs font-black text-black uppercase tracking-wider mb-2">
                    4. Verified Toolchain:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold text-black shadow-neo-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Clone Command */}
              <div className="border-2 border-black bg-[#faf8f5] p-3 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-600 truncate mr-2">git clone {project.repoUrl}.git</span>
                <button
                  onClick={handleCopyClone}
                  className="neo-btn bg-[#fde047] px-2.5 py-1 text-black font-bold flex items-center gap-1 shrink-0"
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="border-t-2 border-black bg-[#faf8f5] p-5 flex items-center justify-between">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playSuccess()}
              className="neo-btn flex items-center gap-2 bg-[#22c55e] px-5 py-3 font-mono text-xs font-black text-black uppercase shadow-neo"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Open Repository on GitHub</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="neo-btn bg-white px-4 py-3 font-mono text-xs font-bold text-black uppercase"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
