import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Shield, Layers, RefreshCw, Cpu, Server } from 'lucide-react';

export default function NetworkTopologyStream() {
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    { id: 'git', title: 'Git Push', desc: 'SHA-256 Commit', icon: GitBranch, color: '#fde047' },
    { id: 'ci', title: 'Trivy Scan', desc: 'CVE Gate: Pass', icon: Shield, color: '#86efac' },
    { id: 'ecr', title: 'Amazon ECR', desc: 'Signed Image', icon: Layers, color: '#93c5fd' },
    { id: 'argo', title: 'ArgoCD', desc: 'GitOps In-Sync', icon: RefreshCw, color: '#f472b6' },
    { id: 'eks', title: 'AWS EKS', desc: 'Zero Downtime', icon: Server, color: '#fdba74' },
  ];

  return (
    <div className="neo-card bg-white p-5 sm:p-6 mb-8 overflow-hidden">
      <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-6 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 bg-[#22c55e] border border-black rounded-full animate-ping"></span>
          <span className="font-black uppercase tracking-wider text-black">
            Live Delivery Flow • Real-Time Packet Stream
          </span>
        </div>
        <span className="bg-[#fde047] border border-black px-2 py-0.5 font-bold shadow-neo-sm hidden sm:inline">
          100% AUTOMATED
        </span>
      </div>

      {/* Interactive Topology Stream Pipeline */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 py-2">
        
        {/* Animated Connecting SVG Line */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-black z-0">
          <motion.div
            className="h-full bg-[#22c55e]"
            animate={{
              left: ['0%', '100%'],
              width: ['10%', '30%', '10%'],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ position: 'absolute' }}
          />
        </div>

        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isHovered = activeStage === stage.id;
          return (
            <motion.div
              key={stage.id}
              onMouseEnter={() => setActiveStage(stage.id)}
              onMouseLeave={() => setActiveStage(null)}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`relative z-10 flex flex-col items-center cursor-pointer p-3 border-2 border-black shadow-neo-sm transition-all ${
                isHovered ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              style={{ minWidth: '130px' }}
            >
              <div
                className="h-10 w-10 border-2 border-black flex items-center justify-center mb-2 shadow-neo-sm"
                style={{ backgroundColor: stage.color }}
              >
                <Icon className="h-5 w-5 text-black" />
              </div>
              <div className="font-mono text-xs font-black uppercase text-center">
                {stage.title}
              </div>
              <div className={`text-[10px] font-mono mt-0.5 text-center ${isHovered ? 'text-gray-300' : 'text-gray-600'}`}>
                {stage.desc}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtext info */}
      <div className="mt-4 pt-3 border-t-2 border-black/10 flex items-center justify-between font-mono text-[11px] text-gray-600">
        <span>Hover over any stage to inspect infrastructure telemetry</span>
        <span className="font-bold text-black flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#22c55e]"></span>
          Continuous Reconciliation Active
        </span>
      </div>
    </div>
  );
}
