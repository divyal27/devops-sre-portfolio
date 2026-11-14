import React, { useState } from 'react';
import { Activity, ShieldAlert, Cpu, Server, Play, RotateCcw, Flame, CheckCircle2, AlertTriangle, ArrowUpRight, Zap } from 'lucide-react';

export default function WarRoom() {
  const [trafficRate, setTrafficRate] = useState(142); // req/s
  const [latency, setLatency] = useState(24); // ms
  const [clusterState, setClusterState] = useState('STEADY_STATE');
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

  const handleChaosKill = () => {
    setClusterState('CHAOS_RECOVERING');
    addLog('WARN', 'CHAOS INJECTION: SIGKILL delivered to pod/api-gateway-1.');
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
    <section className="bg-[#fcf8f2] py-12 px-4 sm:px-6 border-b-2 border-black neo-grid">
      <div className="mx-auto max-w-7xl">
        
        {/* War Room Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-black pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-black bg-[#86efac] px-3.5 py-1 font-mono text-xs font-black text-black shadow-neo-sm mb-2">
              <span className="h-2 w-2 rounded-full bg-black animate-ping"></span>
              <span>LIVE CLUSTER WAR ROOM • MISSION CONTROL NOC</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
              Interactive Production Operations Center
            </h2>
            <p className="text-sm font-medium text-gray-800 mt-1">
              Simulate live chaos engineering, GitOps canaries, shift-left attack blocking, and auto-scaling events.
            </p>
          </div>

          {/* Cluster Status Badge */}
          <div className="flex items-center gap-3">
            <div className="border-2 border-black bg-white px-4 py-2 text-right shadow-neo-sm">
              <div className="text-[10px] font-mono font-bold text-gray-500 uppercase">System Status</div>
              <div className="font-mono text-xs font-black text-black flex items-center gap-1.5 justify-end">
                <span className="bg-[#86efac] border border-black px-1.5 py-0.2">{clusterState}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="neo-btn bg-[#fde047] p-3 text-black font-black"
              title="Reset Cluster"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Real-time Telemetry Dials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="neo-card bg-[#fde047] p-4">
            <div className="text-[11px] font-mono font-black text-black uppercase">Ingress Traffic</div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-black mt-1">
              {trafficRate} <span className="text-xs font-normal text-black">req/s</span>
            </div>
            <div className="text-[11px] font-bold text-black mt-1 border-t border-black/40 pt-1">● ALB HTTP 200 OK</div>
          </div>

          <div className="neo-card bg-[#86efac] p-4">
            <div className="text-[11px] font-mono font-black text-black uppercase">p99 Latency</div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-black mt-1">
              {latency} <span className="text-xs font-normal text-black">ms</span>
            </div>
            <div className="text-[11px] font-bold text-black mt-1 border-t border-black/40 pt-1">Target: &lt;50ms</div>
          </div>

          <div className="neo-card bg-[#93c5fd] p-4">
            <div className="text-[11px] font-mono font-black text-black uppercase">SLO Availability</div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-black mt-1">
              99.982%
            </div>
            <div className="text-[11px] font-bold text-black mt-1 border-t border-black/40 pt-1">Target: 99.950%</div>
          </div>

          <div className="neo-card bg-[#fdba74] p-4">
            <div className="text-[11px] font-mono font-black text-black uppercase">Error Budget</div>
            <div className="text-2xl sm:text-3xl font-mono font-black text-black mt-1">
              84.6%
            </div>
            <div className="text-[11px] font-bold text-black mt-1 border-t border-black/40 pt-1">Burn Rate: 0.2x</div>
          </div>
        </div>

        {/* Interactive Incident Playground Controls */}
        <div className="neo-card-lg bg-white p-5 sm:p-6 mb-8">
          <div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
            <span className="font-mono text-xs font-black text-black uppercase tracking-wider">
              Interactive Incident Drills (Click to Execute):
            </span>
            <span className="text-xs font-mono font-bold text-gray-600">Live Reaction Loop</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
            <button
              onClick={handleChaosKill}
              className="neo-btn flex items-center justify-between gap-2 bg-[#f472b6] p-3 text-black font-black text-left"
            >
              <div>
                <div className="text-sm">💥 Chaos: Kill Pod</div>
                <div className="text-[10px] text-gray-900 font-bold">Test K8s self-healing</div>
              </div>
              <Play className="h-4 w-4 shrink-0 fill-black" />
            </button>

            <button
              onClick={handleCanaryDeploy}
              className="neo-btn flex items-center justify-between gap-2 bg-[#93c5fd] p-3 text-black font-black text-left"
            >
              <div>
                <div className="text-sm">🚀 GitOps: Canary</div>
                <div className="text-[10px] text-gray-900 font-bold">ArgoCD 20% &rarr; 100% sync</div>
              </div>
              <Play className="h-4 w-4 shrink-0 fill-black" />
            </button>

            <button
              onClick={handleCVEAttack}
              className="neo-btn flex items-center justify-between gap-2 bg-[#86efac] p-3 text-black font-black text-left"
            >
              <div>
                <div className="text-sm">🛡️ DevSecOps: Block</div>
                <div className="text-[10px] text-gray-900 font-bold">Kyverno policy drop</div>
              </div>
              <Play className="h-4 w-4 shrink-0 fill-black" />
            </button>

            <button
              onClick={handleTrafficSpike}
              className="neo-btn flex items-center justify-between gap-2 bg-[#fde047] p-3 text-black font-black text-left"
            >
              <div>
                <div className="text-sm">⚡ Surge: Autoscale</div>
                <div className="text-[10px] text-gray-900 font-bold">Scale replicas 2 &rarr; 4</div>
              </div>
              <Play className="h-4 w-4 shrink-0 fill-black" />
            </button>
          </div>
        </div>

        {/* Visual Node & Pod Topology Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* 3 Worker Nodes Grid */}
          <div className="lg:col-span-8 space-y-4">
            <div className="font-mono text-xs font-black text-black uppercase tracking-wider flex items-center justify-between">
              <span>EKS Worker Node Topology (ap-south-1)</span>
              <span className="bg-white border border-black px-2 py-0.5 text-[11px] font-bold">{pods.length} Active Workloads</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['node-1', 'node-2', 'node-3'].map((nodeName, nidx) => {
                const nodePods = pods.filter(p => p.node === nodeName);
                return (
                  <div key={nidx} className="neo-card bg-white p-4">
                    <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3 font-mono text-xs">
                      <div className="flex items-center gap-1.5 text-black font-black">
                        <Server className="h-4 w-4 text-black" />
                        <span>{nodeName}</span>
                      </div>
                      <span className="bg-[#86efac] border border-black px-1.5 py-0.2 text-[10px] font-bold">Ready</span>
                    </div>

                    <div className="space-y-2">
                      {nodePods.map((p) => (
                        <div
                          key={p.id}
                          className={`border-2 border-black p-2 font-mono text-xs shadow-neo-sm transition-all ${
                            p.status === 'CrashLoop'
                              ? 'bg-[#f472b6] text-black font-black'
                              : p.status.includes('Canary')
                              ? 'bg-[#93c5fd] text-black font-bold'
                              : 'bg-[#faf8f5] text-black'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold truncate">{p.name}</span>
                            <span className="text-[10px] bg-white border border-black px-1 font-bold">{p.cpu}</span>
                          </div>
                          <div className="text-[10px] text-gray-800 font-medium mt-1 flex items-center justify-between">
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
            <div className="neo-card bg-white p-4 font-mono text-xs h-full flex flex-col">
              <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3">
                <span className="text-black font-black uppercase tracking-wider text-xs">
                  Real-Time Event Stream
                </span>
                <span className="text-[10px] bg-[#86efac] border border-black px-1.5 py-0.5 font-bold flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse"></span>
                  Streaming
                </span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 text-[11px] leading-relaxed max-h-72">
                {eventLogs.map((log, lidx) => (
                  <div key={lidx} className="flex items-start gap-1.5 border-l-2 border-black pl-2 py-0.5">
                    <span className="text-gray-500 font-bold shrink-0">{log.time}</span>
                    <span className={`shrink-0 font-black px-1 border border-black text-[10px] ${
                      log.level === 'CRITICAL' || log.level === 'ALERT' ? 'bg-[#f472b6] text-black' :
                      log.level === 'WARN' ? 'bg-[#fde047] text-black' : 'bg-[#86efac] text-black'
                    }`}>
                      {log.level}
                    </span>
                    <span className="text-black font-medium break-words">{log.msg}</span>
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
