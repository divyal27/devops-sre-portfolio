import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Terminal } from 'lucide-react';
import NetworkTopologyStream from './NetworkTopologyStream';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const { profile, telemetryMetrics } = portfolioData;

  const cardColors = ['bg-[#fde047]', 'bg-[#86efac]', 'bg-[#93c5fd]', 'bg-[#fdba74]'];

  const handleResumeClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    onOpenResume();
  };

  return (
    <section className="relative border-b-2 border-black bg-[#fcf8f2] pt-12 pb-16 px-4 sm:px-6 neo-grid overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Left Column: Heading & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 border-2 border-black bg-[#86efac] px-3.5 py-1 font-mono text-xs font-black text-black shadow-neo-sm"
            >
              <span className="h-2 w-2 rounded-full bg-black animate-pulse"></span>
              <span>PRODUCTION INFRASTRUCTURE &amp; RELIABILITY</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-none uppercase">
              Automating Infra.<br />
              <motion.span
                whileHover={{ rotate: -1 }}
                className="bg-[#fde047] px-2 py-0.5 border-2 border-black inline-block mt-2 shadow-neo cursor-pointer"
              >
                Securing Pipelines.
              </motion.span><br />
              <span className="text-gray-800">Guaranteeing Uptime.</span>
            </h1>

            <motion.p
              whileHover={{ y: -2 }}
              className="text-base sm:text-lg text-gray-900 font-medium leading-relaxed max-w-2xl bg-white p-4 border-2 border-black shadow-neo transition-transform"
            >
              I am <strong className="underline decoration-2">{profile.name}</strong>, a DevOps &amp; SRE Engineer with hands-on production internship experience building declarative infrastructure with Terraform on AWS EKS, enforcing shift-left DevSecOps gates, and architecting multi-window SLO telemetry.
            </motion.p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleResumeClick}
                className="neo-btn flex items-center gap-2 bg-[#22c55e] px-5 py-3 font-mono text-xs font-black text-black uppercase"
              >
                <span>DOWNLOAD ATS RESUME</span>
                <ArrowDown className="h-4 w-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#cockpit"
                className="neo-btn flex items-center gap-2 bg-white px-5 py-3 font-mono text-xs font-bold text-black uppercase"
              >
                <span>EXPLORE 3-ROLE TRACKS</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenTerminal}
                className="neo-btn flex items-center gap-2 bg-[#fde047] px-4 py-3 font-mono text-xs font-bold text-black uppercase"
              >
                <Terminal className="h-4 w-4" />
                <span>CLI Console</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Neo-Brutalist Code/Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="neo-card-lg bg-white overflow-hidden font-mono text-xs">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b-2 border-black bg-[#93c5fd] px-3.5 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#f43f5e] border border-black"></div>
                  <div className="h-3 w-3 rounded-full bg-[#fde047] border border-black"></div>
                  <div className="h-3 w-3 rounded-full bg-[#22c55e] border border-black"></div>
                  <span className="ml-2 text-xs font-bold text-black">eks-cluster-prod.tf</span>
                </div>
                <span className="text-[11px] font-bold bg-white px-2 py-0.5 border border-black shadow-neo-sm">
                  HCL / AWS EKS
                </span>
              </div>

              {/* Code Snippet */}
              <div className="p-4 space-y-1.5 text-black leading-relaxed overflow-x-auto bg-[#faf8f5]">
                <div className="text-gray-500 font-bold">// Production GitOps EKS Architecture</div>
                <div>
                  <span className="font-bold text-[#7c3aed]">module</span> <span className="font-bold text-[#2563eb]">"eks_platform"</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-gray-700">source</span> = <span className="font-semibold text-[#059669]">"terraform-aws-modules/eks/aws"</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-700">cluster_name</span> = <span className="font-semibold text-[#059669]">"prod-sre-cluster"</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-700">cluster_version</span> = <span className="font-bold text-[#d97706]">"1.30"</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-700">gitops_controller</span> = <span className="font-semibold text-[#059669]">"argocd-ha"</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-700">security_gates</span> = [<span className="font-semibold text-[#059669]">"trivy"</span>, <span className="font-semibold text-[#059669]">"sonarqube"</span>, <span className="font-semibold text-[#059669]">"cosign"</span>]
                </div>
                <div className="pl-4">
                  <span className="text-gray-700">telemetry_stack</span> = &#123;
                </div>
                <div className="pl-8">
                  <span className="text-gray-700">prometheus</span> = <span className="font-bold text-[#2563eb]">true</span>,
                </div>
                <div className="pl-8">
                  <span className="text-gray-700">multi_burn_rate_alerts</span> = <span className="font-bold text-[#2563eb]">true</span>
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
                <div className="pt-2 text-black font-bold flex items-center gap-2 border-t-2 border-black mt-2">
                  <span className="bg-[#22c55e] px-1 text-black border border-black font-black">OK</span>
                  <span>STATUS: 3 NODES SYNCED • 0 DRIFT • SLO: 99.95%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real Production Telemetry Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {telemetryMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, rotate: (idx % 2 === 0 ? 0.8 : -0.8) }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`neo-card ${cardColors[idx % cardColors.length]} p-4 sm:p-5 cursor-default`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono font-black text-black uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="border border-black bg-white px-1.5 py-0.5 text-[10px] font-mono font-bold text-black shadow-neo-sm">
                  {metric.badge}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-black tracking-tight">
                {metric.value}
              </div>
              <p className="mt-1 text-xs font-medium text-gray-900 leading-tight">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live Topology Flow Stream */}
        <NetworkTopologyStream />

      </div>
    </section>
  );
}
