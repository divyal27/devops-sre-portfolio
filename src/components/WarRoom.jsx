import React, { useState, useEffect } from 'react';
import { Activity, ShieldAlert, Cpu, Server, Play, RotateCcw, Flame, CheckCircle2, AlertTriangle, ArrowUpRight, Zap } from 'lucide-react';

export default function WarRoom() {
  const [trafficRate, setTrafficRate] = useState(142); // req/s
  const [latency, setLatency] = useState(24); // ms
  const [clusterState, setClusterState] = useState('STEADY_STATE'); // STEADY_STATE, CHAOS_RECOVERING, CANARY_ROLLOUT, ATTACK_BLOCKED, HPA_SCALING
  const [eventLogs, setEventLogs] = useState([
    { time: '19:42:01', level: 'INFO', msg: 'Cluster ap-south-1 healthy. 3/3 worker nodes ready.' },
    { time: '19:42:15', level: 'INFO', msg: 'ArgoCD sync check: git commit 8e42f9b reconciled.' },
    { time: '19:42:30', level: 'INFO', msg: 'SLO evaluation: error budget burn rate 0.2x (within 99.95% target).' }
  ]);

  const [pods, setPods] = useState([
    { id: 'api-1', name: 'api-gateway', node: 'node-1', status: 'Running', restarts: 0, cpu: '18%' },
    { id: 'api-2', name: 'api-gateway', node: 'node-2', status: 'Running', restarts: 0, cpu: '22%' },
    { id: 'auth-1', name: 'auth-service', node: 'node-1', status: 'Running', restarts: 0, cpu: '14%' },
    { id: 'argo-1', name: 'argocd-controller', node: 'node-3', status: 'Running', restarts: 0, cpu: '28%' },
    { id: 'prom-1', name: 'prometheus-k8s', node: 'node-2', status: 'Running', restarts: 0, cpu: '35%' },
    { id: 'sec-1', name: 'trivy-admission', node: 'node-3', status: 'Running', restarts: 0, cpu: '12%' },
  ]);

  const addLog = (level, msg) => {
    const time = new Date().toTimeString().split(' ')[0];
    setEventLogs(prev => [{ time, level, msg }, ...prev.slice(0, 14)]);
  };

  // Chaos: Kill Random Pod
  const handleChaosKill = () => {
    setClusterState('CHAOS_RECOVERING');
    addLog('WARN', 'CHAOS INJECTION: SIGKILL delivered to pod/api-gateway-1.');
    
    // Pod fails
    setPods(prev => prev.map(p => p.id === 'api-1' ? { ...p, status: 'CrashLoop', restarts: p.restarts + 1 } : p));
    setLatency(82);

    setTimeout(() => {
      addLog('INFO', 'K8s ReplicaSet detected 1/2 available replicas. Scheduling replacement pod on node-1.');
    }, 1200);

    setTimeout(() => {
      setPods(prev => prev.map(p => p.id === 'api-1' ? { ...p, status: 'Running' } : p));
      setLatency(24);
      setClusterState('STEADY_STATE');
      addLog('INFO', 'HEALTH RESTORED: pod/api-gateway-1 successfully running. MTTR: 2.8s.');
    }, 2800);
  };

  // GitOps Canary Release
  const handleCanaryDeploy = () => {
    setClusterState('CANARY_ROLLOUT');
    addLog('INFO', 'GITOPS EVENT: ArgoCD detected commit "release-v2.1.0". Initiating Canary rollout.');

    const canaryPod = { id: 'api-v2', name: 'api-gateway-v2', node: 'node-3', status: 'Canary (20%)', restarts: 0, cpu: '15%' };
    setPods(prev => [...prev, canaryPod]);

    setTimeout(() => {
      addLog('INFO', 'Canary analysis: 0 HTTP 5xx errors recorded over 30s. Shifting 50% traffic to v2.');
      setPods(prev => prev.map(p => p.id === 'api-v2' ? { ...p, status: 'Canary (50%)' } : p));
    }, 1500);

    setTimeout(() => {
      addLog('INFO', 'Canary passed: Promoting v2.1.0 to 100%. Draining legacy v1 replicas.');
      setPods(prev => prev.map(p => p.id === 'api-v2' ? { ...p, status: 'Running', name: 'api-gateway' } : p).filter(p => p.id !== 'api-1'));
      setClusterState('STEADY_STATE');
    }, 3000);
  };

  // DevSecOps Malicious CVE Injection
  const handleCVEAttack = () => {
    setClusterState('ATTACK_BLOCKED');
    addLog('ALERT', 'SECURITY EVENT: Deployment of untrusted image "repo/insecure-app:latest" intercepted.');
    addLog('WARN', 'Kyverno Admission Controller evaluating image signature with Cosign...');

    setTimeout(() => {
      addLog('CRITICAL', 'POLICY VIOLATION: Image unsigned + Trivy detected CVE-2024-38063 (CVSS 9.8).');
      addLog('INFO', 'ADMISSION REJECTED: Deployment blocked before hitting cluster worker nodes.');
      setClusterState('STEADY_STATE');
    }, 1600);
  };

  // Traffic Spike (HPA Autoscale)
  const handleTrafficSpike = () => {
    setClusterState('HPA_SCALING');
    setTrafficRate(890);
    setLatency(48);
    addLog('WARN', 'TRAFFIC SURGE: Ingress rate spiked to 890 req/s. Target CPU utilization exceeded (78%).');

    setTimeout(() => {
      addLog('INFO', 'HPA TRIGGER: HorizontalPodAutoscaler scaling api-gateway from 2 -> 4 replicas.');
      const newPod1 = { id: 'api-hpa-1', name: 'api-gateway-scale1', node: 'node-2', status: 'Running', restarts: 0, cpu: '34%' };
      const newPod2 = { id: 'api-hpa-2', name: 'api-gateway-scale2', node: 'node-3', status: 'Running', restarts: 0, cpu: '32%' };
      setPods(prev => [...prev, newPod1, newPod2]);
      setLatency(22);
    }, 1600);

    setTimeout(() => {
      addLog('INFO', 'CAPACITY STABILIZED: Load rebalanced across 3 availability zones.');
      setClusterState('STEADY_STATE');
    }, 3200);
  };

  // Reset to default
  const handleReset = () => {
    setTrafficRate(142);
    setLatency(24);
    setClusterState('STEADY_STATE');
    setPods([
      { id: 'api-1', name: 'api-gateway', node: 'node-1', status: 'Running', restarts: 0, cpu: '18%' },
      { id: 'api-2', name: 'api-gateway', node: 'node-2', status: 'Running', restarts: 0, cpu: '22%' },
      { id: 'auth-1', name: 'auth-service', node: 'node-1', status: 'Running', restarts: 0, cpu: '14%' },
      { id: 'argo-1', name: 'argocd-controller', node: 'node-3', status: 'Running', restarts: 0, cpu: '28%' },
      { id: 'prom-1', name: 'prometheus-k8s', node: 'node-2', status: 'Running', restarts: 0, cpu: '35%' },
      { id: 'sec-1', name: 'trivy-admission', node: 'node-3', status: 'Running', restarts: 0, cpu: '12%' },
    ]);
    addLog('INFO', 'Cluster topology restored to steady-state baseline.');
  };

  return (
    <section className="bg-graphite-950 py-12 px-4 sm:px-6 border-b border-graphite-800">
      <div className="mx-auto max-w-7xl">
        
        {/* War Room Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-graphite-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-console-green mb-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-console-green opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-console-green"></span>
              </span>
              <span>LIVE CLUSTER WAR ROOM • MISSION CONTROL NOC</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Interactive Production Operations Center
            </h2>
            <p className="text-xs sm:text-sm text-graphite-400 mt-1">
              Simulate live chaos engineering, GitOps canaries, shift-left attack blocking, and auto-scaling events.
            </p>
          </div>

          {/* Cluster Status Badge */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-graphite-800 bg-graphite-900/90 px-4 py-2 text-right">
              <div className="text-[10px] font-mono text-graphite-500 uppercase">System Status</div>
              <div className="font-mono text-xs font-bold text-console-green flex items-center gap-1.5 justify-end">
                <span>{clusterState}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="rounded-lg border border-graphite-700 bg-graphite-850 p-2.5 text-graphite-300 hover:text-white hover:border-graphite-500 transition-colors"
              title="Reset Cluster"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Real-time Telemetry Dials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="rounded-lg border border-graphite-800 bg-graphite-900/70 p-3.5">
            <div className="text-[10px] font-mono text-graphite-400 uppercase">Ingress Traffic</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
              {trafficRate} <span className="text-xs font-normal text-graphite-500">req/s</span>
            </div>
            <div className="text-[10px] text-console-green mt-0.5">● ALB HTTP 200 OK</div>
          </div>

          <div className="rounded-lg border border-graphite-800 bg-graphite-900/70 p-3.5">
            <div className="text-[10px] font-mono text-graphite-400 uppercase">p99 Latency</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
              {latency} <span className="text-xs font-normal text-graphite-500">ms</span>
            </div>
            <div className="text-[10px] text-graphite-400 mt-0.5">Target: &lt;50ms</div>
          </div>

          <div className="rounded-lg border border-graphite-800 bg-graphite-900/70 p-3.5">
            <div className="text-[10px] font-mono text-graphite-400 uppercase">SLO Availability</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-console-green mt-1">
              99.982%
            </div>
            <div className="text-[10px] text-graphite-400 mt-0.5">Target: 99.950%</div>
          </div>

          <div className="rounded-lg border border-graphite-800 bg-graphite-900/70 p-3.5">
            <div className="text-[10px] font-mono text-graphite-400 uppercase">Error Budget</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
              84.6%
            </div>
            <div className="text-[10px] text-console-green mt-0.5">Burn Rate: 0.2x</div>
          </div>
        </div>

        {/* Interactive Incident Playground Controls */}
        <div className="rounded-xl border border-graphite-800 bg-graphite-900/40 p-4 sm:p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              Interactive Incident Drills (Click to Execute):
            </span>
            <span className="text-[11px] font-mono text-graphite-500">Live Reaction Loop</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            <button
              onClick={handleChaosKill}
              className="flex items-center justify-between gap-2 rounded border border-graphite-700 bg-graphite-850 px-3.5 py-2.5 text-graphite-200 hover:border-red-500/60 hover:text-red-400 transition-colors text-left"
            >
              <div>
                <div className="font-bold">💥 Chaos: Kill Pod</div>
                <div className="text-[10px] text-graphite-400 font-normal">Test K8s self-healing</div>
              </div>
              <Play className="h-3 w-3 shrink-0" />
            </button>

            <button
              onClick={handleCanaryDeploy}
              className="flex items-center justify-between gap-2 rounded border border-graphite-700 bg-graphite-850 px-3.5 py-2.5 text-graphite-200 hover:border-blue-500/60 hover:text-blue-400 transition-colors text-left"
            >
              <div>
                <div className="font-bold">🚀 GitOps: Canary Release</div>
                <div className="text-[10px] text-graphite-400 font-normal">ArgoCD 20% &rarr; 100% sync</div>
              </div>
              <Play className="h-3 w-3 shrink-0" />
            </button>

            <button
              onClick={handleCVEAttack}
              className="flex items-center justify-between gap-2 rounded border border-graphite-700 bg-graphite-850 px-3.5 py-2.5 text-graphite-200 hover:border-console-green/60 hover:text-console-green transition-colors text-left"
            >
              <div>
                <div className="font-bold">🛡️ DevSecOps: Block CVE</div>
                <div className="text-[10px] text-graphite-400 font-normal">Kyverno policy drop</div>
              </div>
              <Play className="h-3 w-3 shrink-0" />
            </button>

            <button
              onClick={handleTrafficSpike}
              className="flex items-center justify-between gap-2 rounded border border-graphite-700 bg-graphite-850 px-3.5 py-2.5 text-graphite-200 hover:border-amber-500/60 hover:text-amber-400 transition-colors text-left"
            >
              <div>
                <div className="font-bold">⚡ Surge: HPA Autoscale</div>
                <div className="text-[10px] text-graphite-400 font-normal">Scale replicas 2 &rarr; 4</div>
              </div>
              <Play className="h-3 w-3 shrink-0" />
            </button>
          </div>
        </div>

        {/* Visual Node & Pod Topology Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* 3 Worker Nodes Grid */}
          <div className="lg:col-span-8 space-y-4">
            <div className="font-mono text-xs text-graphite-400 uppercase tracking-wider flex items-center justify-between">
              <span>EKS Worker Node Topology (ap-south-1)</span>
              <span className="text-[11px] text-graphite-500">{pods.length} Active Workloads</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {['node-1', 'node-2', 'node-3'].map((nodeName, nidx) => {
                const nodePods = pods.filter(p => p.node === nodeName);
                return (
                  <div key={nidx} className="rounded-lg border border-graphite-800 bg-graphite-900/80 p-4">
                    <div className="flex items-center justify-between border-b border-graphite-800/80 pb-2 mb-3 font-mono text-xs">
                      <div className="flex items-center gap-1.5 text-white font-semibold">
                        <Server className="h-3.5 w-3.5 text-console-green" />
                        <span>{nodeName}</span>
                      </div>
                      <span className="text-[10px] text-console-green">Ready</span>
                    </div>

                    <div className="space-y-2">
                      {nodePods.map((p) => (
                        <div
                          key={p.id}
                          className={`rounded border p-2 font-mono text-xs transition-all ${
                            p.status === 'CrashLoop'
                              ? 'border-red-500/80 bg-red-950/40 text-red-300'
                              : p.status.includes('Canary')
                              ? 'border-blue-500/80 bg-blue-950/40 text-blue-300'
                              : 'border-graphite-800 bg-graphite-850 text-graphite-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium truncate">{p.name}</span>
                            <span className="text-[10px] text-graphite-400">{p.cpu}</span>
                          </div>
                          <div className="text-[10px] text-graphite-400 mt-1 flex items-center justify-between">
                            <span>Status: {p.status}</span>
                            <span>rst: {p.restarts}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Real-time Syslog & Event Stream */}
          <div className="lg:col-span-4">
            <div className="rounded-lg border border-graphite-800 bg-graphite-900/90 p-4 font-mono text-xs h-full flex flex-col">
              <div className="flex items-center justify-between border-b border-graphite-800 pb-2 mb-3">
                <span className="text-graphite-300 font-semibold uppercase tracking-wider text-[11px]">
                  Real-Time Event Stream
                </span>
                <span className="text-[10px] text-console-green flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-console-green animate-pulse"></span>
                  Streaming
                </span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 text-[11px] leading-relaxed max-h-72">
                {eventLogs.map((log, lidx) => (
                  <div key={lidx} className="flex items-start gap-2 border-l border-graphite-800 pl-2">
                    <span className="text-graphite-500 shrink-0">{log.time}</span>
                    <span className={`shrink-0 font-bold ${
                      log.level === 'CRITICAL' || log.level === 'ALERT' ? 'text-red-400' :
                      log.level === 'WARN' ? 'text-amber-400' : 'text-console-green'
                    }`}>
                      [{log.level}]
                    </span>
                    <span className="text-graphite-300 break-words">{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
