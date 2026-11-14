import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Terminal, Shield, Cpu, Activity, ExternalLink } from 'lucide-react';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const { profile, telemetryMetrics } = portfolioData;

  return (
    <section className="relative border-b border-graphite-800/80 bg-graphite-950 pt-12 pb-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-graphite-800 bg-graphite-900/90 px-3 py-1 font-mono text-xs text-graphite-300">
              <span className="h-1.5 w-1.5 rounded-full bg-console-green"></span>
              <span>PRODUCTION INFRASTRUCTURE &amp; RELIABILITY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight sm:leading-none">
              Automating Infrastructure.<br />
              <span className="text-graphite-400 font-normal">Securing Pipelines. Guaranteeing Uptime.</span>
            </h1>

            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed max-w-2xl">
              I am <span className="text-white font-medium">{profile.name}</span>, a DevOps &amp; SRE Engineer with hands-on production internship experience building declarative infrastructure with Terraform on AWS EKS, enforcing shift-left DevSecOps gates, and architecting multi-window SLO telemetry.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded bg-console-green px-4 py-2 text-xs font-mono font-medium text-graphite-950 hover:bg-emerald-400 transition-colors shadow-subtle"
              >
                <span>DOWNLOAD ATS RESUME</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </button>

              <a
                href="#cockpit"
                className="flex items-center gap-2 rounded border border-graphite-700 bg-graphite-900 px-4 py-2 text-xs font-mono text-graphite-200 hover:border-graphite-500 hover:text-white transition-colors"
              >
                <span>EXPLORE 3-ROLE TRACKS</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 rounded border border-graphite-800 bg-graphite-950 px-3.5 py-2 text-xs font-mono text-graphite-300 hover:border-graphite-600 hover:text-white transition-colors"
              >
                <Terminal className="h-3.5 w-3.5 text-console-green" />
                <span>CLI Console</span>
              </button>
            </div>
          </div>

          {/* Right Column: Tactical Terminal Card */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-graphite-800 bg-graphite-900/90 shadow-elevated overflow-hidden font-mono text-xs">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-graphite-800 bg-graphite-850 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-graphite-700"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-graphite-700"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-graphite-700"></div>
                  <span className="ml-2 text-[11px] text-graphite-400">eks-cluster-prod.tf</span>
                </div>
                <span className="text-[10px] text-graphite-500">HCL / AWS EKS</span>
              </div>

              {/* Code / Configuration Snippet */}
              <div className="p-4 space-y-2 text-graphite-300 leading-relaxed overflow-x-auto">
                <div className="text-graphite-500">// Production GitOps EKS Architecture</div>
                <div>
                  <span className="text-purple-400">module</span> <span className="text-blue-300">"eks_platform"</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-graphite-400">source</span> = <span className="text-emerald-300">"terraform-aws-modules/eks/aws"</span>
                </div>
                <div className="pl-4">
                  <span className="text-graphite-400">cluster_name</span> = <span className="text-emerald-300">"prod-sre-cluster"</span>
                </div>
                <div className="pl-4">
                  <span className="text-graphite-400">cluster_version</span> = <span className="text-amber-300">"1.30"</span>
                </div>
                <div className="pl-4">
                  <span className="text-graphite-400">gitops_controller</span> = <span className="text-emerald-300">"argocd-ha"</span>
                </div>
                <div className="pl-4">
                  <span className="text-graphite-400">security_gates</span> = [<span className="text-emerald-300">"trivy"</span>, <span className="text-emerald-300">"sonarqube"</span>, <span className="text-emerald-300">"cosign"</span>]
                </div>
                <div className="pl-4">
                  <span className="text-graphite-400">telemetry_stack</span> = &#123;
                </div>
                <div className="pl-8">
                  <span className="text-graphite-400">prometheus</span> = <span className="text-blue-300">true</span>,
                </div>
                <div className="pl-8">
                  <span className="text-graphite-400">multi_burn_rate_alerts</span> = <span className="text-blue-300">true</span>
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
                <div className="pt-2 text-console-green flex items-center gap-2">
                  <span className="animate-pulse">▶</span>
                  <span>status: 3 nodes synced • 0 drift • SLO: 99.95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Production Telemetry Metric Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {telemetryMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded border border-graphite-800 bg-graphite-900/60 p-4 transition-colors hover:border-graphite-700"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-graphite-400 uppercase tracking-wider">{metric.label}</span>
                <span className="rounded bg-graphite-800/80 px-1.5 py-0.5 text-[10px] font-mono text-graphite-300">
                  {metric.badge}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                {metric.value}
              </div>
              <p className="mt-1 text-xs text-graphite-400 leading-tight">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
