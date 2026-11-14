import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, Printer, X, Check, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const { profile, experience, education, certifications, skills } = portfolioData;
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-4xl rounded-xl border border-graphite-700 bg-graphite-900 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Action Bar (Hidden on print) */}
        <div className="print:hidden flex items-center justify-between border-b border-graphite-800 bg-graphite-950 px-5 py-3">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-console-green" />
            <span className="font-mono text-xs font-semibold text-white">
              UNIVERSAL 1-PAGE ATS RESUME • DEVOPS / DEVSECOPS / SRE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded bg-console-green px-3 py-1.5 text-xs font-mono font-medium text-graphite-950 hover:bg-emerald-400 transition-colors"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="rounded p-1 text-graphite-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ATS-Friendly 1-Page Printable Resume Canvas */}
        <div className="p-8 sm:p-12 bg-white text-gray-900 font-sans leading-relaxed text-[13px] print:p-0 print:m-0 print:text-black">
          
          {/* Header */}
          <div className="border-b border-gray-300 pb-4 mb-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-950 uppercase mb-1">
              {profile.name}
            </h1>
            <div className="text-xs text-gray-700 font-medium space-x-2">
              <span>{profile.phone}</span>
              <span>•</span>
              <a href={`mailto:${profile.email}`} className="text-gray-900 underline">{profile.email}</a>
              <span>•</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-800 underline">LinkedIn</a>
              <span>•</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-800 underline">GitHub</a>
              <span>•</span>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-200 pb-0.5 mb-1.5">
              Professional Summary
            </h2>
            <p className="text-gray-800 text-justify text-xs">
              Final-year Computer Engineering student with hands-on DevOps internship experience automating infrastructure, CI/CD pipelines, observability, and incident root-cause triage in production. Experienced across AWS, Kubernetes, Terraform, ArgoCD, and Prometheus with a core focus on high availability, capacity management, and zero-downtime delivery. Seeking DevOps Engineer, SRE, and DevSecOps roles.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-4">
            <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-200 pb-0.5 mb-2">
              Experience
            </h2>

            <div className="mb-3">
              <div className="flex justify-between items-baseline font-bold text-xs text-gray-950">
                <span>DevOps Intern — Hisan Labs Pvt. Ltd.</span>
                <span className="font-normal text-gray-600 text-[11px]">Feb 2026 – Present | Pune, India</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-800 mt-1">
                <li>Automated configuration management across staging and production environments using Ansible playbooks, cutting manual setup time by ~50% and eliminating environment drift.</li>
                <li>Reduced MTTR by ~35% across 3 critical services by configuring ELK Stack alerting and Prometheus recording rules, decreasing average incident resolution time from 40 min to 26 min.</li>
                <li>Engineered GitHub Actions CI/CD workflows for pre-production acceptance testing, enforcing automated quality gates and reducing failed deployments by ~30%.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-bold text-xs text-gray-950">
                <span>Full Stack Web Development Intern — Widesoftech Pvt. Ltd.</span>
                <span className="font-normal text-gray-600 text-[11px]">Jan 2026 – Feb 2026 | Pune, India</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-800 mt-1">
                <li>Built and deployed InternMeets, a live student internship platform, handling containerized deployment, debugging, and production incident resolution in under 4 weeks.</li>
              </ul>
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-200 pb-0.5 mb-2">
              Key Engineering Projects
            </h2>

            <div className="mb-2">
              <div className="flex justify-between items-baseline font-bold text-xs text-gray-950">
                <span>GitOps-Driven Kubernetes Platform on AWS EKS (DevOps Track)</span>
                <a href="https://github.com/divyal27/GitOps-driven-Kubernetes-Platform-on-AWS-EKS" target="_blank" rel="noreferrer" className="font-normal text-blue-700 underline text-[11px]">GitHub Repo</a>
              </div>
              <div className="text-[11px] text-gray-600 italic">AWS, EKS, Docker, Kubernetes, Terraform, ArgoCD, Helm</div>
              <p className="text-xs text-gray-800 mt-0.5">
                Built a production-grade GitOps platform on AWS EKS using modular Terraform and ArgoCD to automate deployments, rollback workflows, and environment reconciliation with zero downtime.
              </p>
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-baseline font-bold text-xs text-gray-950">
                <span>Shift-Left Security Pipeline (DevSecOps Track)</span>
                <a href="https://github.com/divyal27/shift-left-security-pipeline" target="_blank" rel="noreferrer" className="font-normal text-blue-700 underline text-[11px]">GitHub Repo</a>
              </div>
              <div className="text-[11px] text-gray-600 italic">GitHub Actions, DevSecOps, Trivy, SonarQube, Bandit, SAST, Cosign</div>
              <p className="text-xs text-gray-800 mt-0.5">
                Implemented automated DevSecOps pipelines enforcing shift-left security in CI/CD through static source code scanning, container vulnerability scanning, secrets detection, and policy enforcement.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-bold text-xs text-gray-950">
                <span>SlOps SRE Observability &amp; Reliability Platform (SRE Track)</span>
                <a href="https://github.com/divyal27/slops-sre-platform" target="_blank" rel="noreferrer" className="font-normal text-blue-700 underline text-[11px]">GitHub Repo</a>
              </div>
              <div className="text-[11px] text-gray-600 italic">Python, Kubernetes, Prometheus, Grafana, PromQL, Alertmanager</div>
              <p className="text-xs text-gray-800 mt-0.5">
                Built a self-service SRE platform adhering to the Google SRE framework, computing SLI/SLO metrics, multi-window burn rate alerts, and operational Prometheus/Grafana dashboards.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-200 pb-0.5 mb-1.5">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <span className="font-bold text-gray-950">{education.institution}</span>
              <span className="text-gray-600 text-[11px]">{education.period} | {education.location}</span>
            </div>
            <div className="text-xs text-gray-800">{education.degree}</div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-200 pb-0.5 mb-1.5">
              Certifications
            </h2>
            <div className="text-xs text-gray-800">
              <span className="font-semibold">Building with the Claude API</span> (Anthropic) | <span className="font-semibold">Claude Code in Action</span> (Anthropic) | <span className="font-semibold">Advanced Testing Practices Using AWS DevOps Tools</span> (AWS)
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-gray-950 uppercase tracking-wider border-b border-gray-200 pb-0.5 mb-1.5">
              Technical Skills
            </h2>
            <div className="space-y-1 text-[11px] text-gray-800">
              <div><span className="font-bold">Cloud &amp; Infrastructure:</span> AWS (EKS, VPC, EC2, S3, IAM), GCP, Azure, Linux (RHEL, Ubuntu)</div>
              <div><span className="font-bold">Containers &amp; Orchestration:</span> Docker, Kubernetes, Helm, Containerd</div>
              <div><span className="font-bold">CI/CD &amp; GitOps:</span> GitHub Actions, Jenkins, GitLab CI, ArgoCD</div>
              <div><span className="font-bold">IaC &amp; Configuration:</span> Terraform, Ansible, Bash, YAML</div>
              <div><span className="font-bold">Observability &amp; Monitoring:</span> Prometheus, Grafana, ELK Stack, Datadog, AWS CloudWatch</div>
              <div><span className="font-bold">DevSecOps:</span> Trivy, SonarQube, Bandit, SAST, Gitleaks, Cosign</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
