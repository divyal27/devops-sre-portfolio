import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'DevOps Interactive Telemetry Console v3.8.0 [x86_64]' },
    { type: 'system', text: 'Type "help" to list available infrastructure inspection commands.' },
    { type: 'prompt', text: 'kubectl get nodes', output: 'NAME                                        STATUS   ROLES    AGE   VERSION\nip-10-0-1-102.ap-south-1.compute.internal   Ready    node     42d   v1.30.2\nip-10-0-2-108.ap-south-1.compute.internal   Ready    node     42d   v1.30.2\nip-10-0-3-145.ap-south-1.compute.internal   Ready    node     42d   v1.30.2' }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    setInput('');

    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let output = '';

    switch (cmd) {
      case 'help':
        output = `AVAILABLE COMMANDS:
  help             - Show this instruction manual
  cat resume.json  - Output structured candidate telemetry
  kubectl get pods - Query live workloads on AWS EKS
  gitops status    - Check ArgoCD deployment reconciliation state
  slo report       - Inspect active SLI/SLO error budget telemetry
  security audit   - View Trivy & SonarQube shift-left scan summary
  metrics          - View production MTTR & deployment reduction stats
  contact          - Output verified contact channels & links
  clear            - Wipe console buffer`;
        break;

      case 'cat resume.json':
        output = JSON.stringify({
          candidate: portfolioData.profile.name,
          title: portfolioData.profile.title,
          location: portfolioData.profile.location,
          internships: ["Hisan Labs Pvt. Ltd. (DevOps)", "Widesoftech Pvt. Ltd. (Full Stack)"],
          core_focus: ["AWS EKS", "Terraform", "GitOps", "Shift-Left Security", "SLO Observability"],
          certifications: portfolioData.certifications.map(c => c.name)
        }, null, 2);
        break;

      case 'kubectl get pods':
        output = `NAMESPACE      NAME                               READY   STATUS    RESTARTS   AGE
production     argocd-server-7945d47fbf-k5w9n     1/1     Running   0          18d
production     prometheus-k8s-0                   1/1     Running   0          42d
production     grafana-core-59b8dcfdb5-2l6rq      1/1     Running   0          42d
production     api-gateway-v2-6d88f5f4b9-s8j2k    1/1     Running   0          6d
production     security-gate-agent-77b8f-m4qpx    1/1     Running   0          14d`;
        break;

      case 'gitops status':
        output = `ARGOCD APPLICATION CONTROLLER:
  Application:     eks-platform-production
  Repo:            github.com/divyal27/GitOps-driven-Kubernetes-Platform-on-AWS-EKS
  Target Revision: main (HEAD)
  Sync Status:     Synced (Commit: 8e42f9b)
  Health Status:   Healthy
  Auto-Sync:       Enabled (Prune: true, SelfHeal: true)`;
        break;

      case 'slo report':
        output = `SERVICE LEVEL OBJECTIVES (SLO):
  Service:          API Gateway & Core Delivery
  SLO Target:       99.95% Availability (30-day window)
  Current SLI:      99.982%
  Error Budget:     84.6% remaining
  Burn Rate (1h):   0.4x (Normal - no page required)
  Burn Rate (6h):   0.2x (Normal)
  Alert Status:     CLEARED (PromQL Recording Rules active)`;
        break;

      case 'security audit':
        output = `SHIFT-LEFT SECURITY PIPELINE REPORT:
  Scanner:         Trivy v0.58.0 + SonarQube SAST
  Target Commit:   HEAD
  Vulnerabilities: CRITICAL: 0 | HIGH: 0 | MEDIUM: 2 | LOW: 5
  Quality Gate:    PASSED (No blocking CVEs)
  Secrets Audit:   Gitleaks clean (0 credentials detected)
  Image Signature: Cosign verified (AWS KMS Key)`;
        break;

      case 'metrics':
        output = `HISAN LABS PRODUCTION IMPACT METRICS:
  - MTTR Reduction:       -35% (40 min -> 26 min avg) via ELK & Prometheus
  - Setup Time Saved:     ~50% reduction via Ansible automation playbooks
  - Failed Deployments:   -30% reduction via GitHub Actions quality gates`;
        break;

      case 'contact':
        output = `CONNECT WITH DIVYAL:
  - Email:    divyal0612@gmail.com
  - Phone:    +91 7498841528
  - GitHub:   https://github.com/divyal27
  - LinkedIn: https://www.linkedin.com/in/divyal-padalkar2704/
  - Location: Pune, India`;
        break;

      default:
        output = `zsh: command not found: ${cmd}. Type "help" for a list of valid commands.`;
        break;
    }

    setHistory(prev => [...prev, { type: 'prompt', text: cmd, output }]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl rounded-xl border border-graphite-700 bg-graphite-950 shadow-2xl overflow-hidden font-mono text-xs flex flex-col h-[520px]">
        
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between border-b border-graphite-800 bg-graphite-900 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="ml-2 flex items-center gap-1.5 text-graphite-300 font-semibold text-[11px]">
              <TerminalIcon className="h-3.5 w-3.5 text-console-green" />
              <span>ops-shell ~ divyal@aws-eks-prod</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-graphite-400">
            <span className="text-[10px] bg-graphite-800 px-1.5 py-0.5 rounded">bash</span>
            <button onClick={onClose} className="hover:text-white transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 leading-relaxed text-graphite-300 bg-graphite-950">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'system' && (
                <div className="text-graphite-500">{item.text}</div>
              )}
              {item.type === 'prompt' && (
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-console-green font-bold">ops@cluster:~$</span>
                    <span>{item.text}</span>
                  </div>
                  {item.output && (
                    <pre className="mt-1 whitespace-pre-wrap text-graphite-300 font-mono pl-4 border-l border-graphite-800/80">
                      {item.output}
                    </pre>
                  )}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="border-t border-graphite-800 bg-graphite-900/90 px-4 py-3 flex items-center gap-2">
          <span className="text-console-green font-bold text-xs">ops@cluster:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'help', 'kubectl get pods', 'cat resume.json'..."
            className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-graphite-600"
          />
        </div>

      </div>
    </div>
  );
}
