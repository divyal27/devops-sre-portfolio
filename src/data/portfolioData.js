export const portfolioData = {
  profile: {
    name: "Divyal Padalkar",
    title: "DevOps • DevSecOps • Site Reliability Engineer",
    location: "Pune, India",
    email: "divyal0612@gmail.com",
    phone: "+91 7498841528",
    github: "https://github.com/divyal27",
    linkedin: "https://www.linkedin.com/in/divyal-padalkar2704/",
    status: "OPERATIONAL • OPEN FOR ROLES",
    summary: "Final-year Computer Engineering student with hands-on production DevOps internship experience automating infrastructure, CI/CD pipelines, monitoring, and incident triage/root-cause resolution. Focused on high reliability, capacity planning, and automated secure-delivery across AWS, Kubernetes, and Terraform."
  },

  telemetryMetrics: [
    {
      label: "MTTR Reduction",
      value: "-35%",
      subtext: "40m down to 26m avg incident resolution",
      badge: "ELK & Prometheus",
      positive: true
    },
    {
      label: "Env Setup Automation",
      value: "~50%",
      subtext: "Faster staging & prod provisioning",
      badge: "Ansible Playbooks",
      positive: true
    },
    {
      label: "Deployment Failures",
      value: "-30%",
      subtext: "Automated pre-prod quality gates",
      badge: "GitHub Actions",
      positive: true
    },
    {
      label: "Target SLO Uptime",
      value: "99.95%",
      subtext: "Automated multi-burn rate alerts",
      badge: "Google SRE Model",
      positive: true
    }
  ],

  roleTracks: {
    devops: {
      id: "devops",
      title: "DevOps Engineer",
      icon: "Terminal",
      tagline: "Infrastructure as Code, Automated CI/CD, and GitOps on Kubernetes",
      highlightColor: "text-blue-400",
      flagship: {
        title: "GitOps-Driven Kubernetes Platform on AWS EKS",
        repoUrl: "https://github.com/divyal27/GitOps-driven-Kubernetes-Platform-on-AWS-EKS",
        summary: "Production-grade Kubernetes platform provisioned via modular Terraform and managed declaratively using ArgoCD. Eliminates configuration drift with automated reconciliation and zero-downtime rollouts.",
        techStack: ["AWS EKS", "Terraform", "Kubernetes", "ArgoCD", "Helm", "Docker", "GitHub Actions"],
        highlights: [
          "Declarative VPC, subnets, and IAM roles provisioned cleanly via Terraform modular structure.",
          "ArgoCD Application Controller monitors Git repo for state changes and enforces automated reconciliation.",
          "Eliminated manual production deploys with Git-triggered semantic versioned container releases."
        ],
        architectureNodes: [
          { step: "1. Git Push", desc: "Feature branch merged into main triggers GitHub Actions" },
          { step: "2. Build & Test", desc: "Automated Docker build, multi-stage optimization & Trivy scan" },
          { step: "3. ECR Push", desc: "Immutable SHA-tagged container image pushed to Amazon ECR" },
          { step: "4. GitOps Sync", desc: "ArgoCD detects Helm chart update and reconciles EKS target state" },
          { step: "5. EKS Rollout", desc: "Zero-downtime rolling update across worker node groups" }
        ]
      },
      secondaryProjects: [
        {
          title: "Multi-Environment CI/CD with Feature Environments",
          repoUrl: "https://github.com/divyal27/Multi-environment-ci-cd-Pipeline-with-Feature-Environments",
          tech: ["Terraform", "GitHub Actions", "Docker", "AWS"],
          description: "Automated ephemeral preview environments provisioned per pull request with automated teardown on merge."
        },
        {
          title: "Jenkins & Ansible Automated Deployment Pipeline",
          repoUrl: "https://github.com/divyal27/jenkins-ansible-pipeline",
          tech: ["Jenkins", "Ansible", "HCL", "Linux"],
          description: "Configuration management playbooks ensuring idempotent staging and production state enforcement."
        }
      ]
    },

    devsecops: {
      id: "devsecops",
      title: "DevSecOps Engineer",
      icon: "ShieldCheck",
      tagline: "Shift-Left Vulnerability Gates, Supply Chain Security & Zero-Trust Architecture",
      highlightColor: "text-console-green",
      flagship: {
        title: "Shift-Left Security Pipeline",
        repoUrl: "https://github.com/divyal27/shift-left-security-pipeline",
        summary: "End-to-end automated security pipeline embedded directly into GitHub Actions. Enforces strict automated quality gates that fail builds on Critical/High CVEs before merge.",
        techStack: ["GitHub Actions", "Trivy", "SonarQube", "Bandit", "SAST", "Gitleaks", "Cosign"],
        highlights: [
          "Static Application Security Testing (SAST) with SonarQube & Bandit to catch CWE code flaws.",
          "Container image scanning with Trivy targeting OS packages and application dependencies.",
          "Secrets detection with Gitleaks to prevent API tokens and private keys entering source history."
        ],
        architectureNodes: [
          { step: "1. PR Opened", desc: "Triggers automated security scanning matrix on pull request" },
          { step: "2. Secret Detection", desc: "Gitleaks audits commit history for leaked credentials & AWS keys" },
          { step: "3. SAST Scan", desc: "SonarQube & Bandit evaluate code quality and security vulnerabilities" },
          { step: "4. Container Audit", desc: "Trivy scans Docker base layers & dependencies against CVE database" },
          { step: "5. Policy Gate", desc: "Automated pipeline break on any Unpatched Critical/High vulnerability" }
        ]
      },
      secondaryProjects: [
        {
          title: "Container Supply Chain Security & Compliance",
          repoUrl: "https://github.com/divyal27/Container-Supply-Chain-Security-Compliance",
          tech: ["Docker", "Syft", "Grype", "Cosign", "Shell"],
          description: "Cryptographic container signing and SBOM (Software Bill of Materials) validation in build pipelines."
        },
        {
          title: "Zero-Trust AWS Network Security Architecture",
          repoUrl: "https://github.com/divyal27/Zero-Trust-AWS-Network-Security-Architecture",
          tech: ["Terraform", "AWS VPC", "Security Groups", "IAM Least-Privilege"],
          description: "Air-gapped VPC architecture with strictly controlled transit gateways and IAM boundary policies."
        }
      ]
    },

    sre: {
      id: "sre",
      title: "Site Reliability Engineer (SRE)",
      icon: "Activity",
      tagline: "Observability Telemetry, Error-Budget Burn Rates & Automated Remediation",
      highlightColor: "text-amber-400",
      flagship: {
        title: "SlOps SRE Platform",
        repoUrl: "https://github.com/divyal27/slops-sre-platform",
        summary: "Self-service reliability and operations platform implementing the Google SRE framework. Calculates SLI/SLO metrics, monitors multi-window error budget burn rates, and triggers automated alerting.",
        techStack: ["Python", "Kubernetes", "Prometheus", "Grafana", "Alertmanager", "PromQL"],
        highlights: [
          "Engineered PromQL recording rules for high-frequency SLI computation with low storage overhead.",
          "Multi-window, multi-burn-rate alerting rules to eliminate alert fatigue and detect rapid degradation.",
          "Integrated Grafana executive dashboards tracking availability, latency percentiles (p95, p99), and error budgets."
        ],
        architectureNodes: [
          { step: "1. Service Telemetry", desc: "K8s microservices expose Prometheus /metrics endpoints" },
          { step: "2. Scrape & Record", desc: "Prometheus scrapes metrics every 15s; evaluates recording rules" },
          { step: "3. Burn-Rate Engine", desc: "SLO engine calculates 1h/6h/24h error budget consumption" },
          { step: "4. Alertmanager Triage", desc: "Intelligent grouping and routing based on urgency and severity" },
          { step: "5. Dashboards & Fix", desc: "Live Grafana operational heatmaps & automated recovery hooks" }
        ]
      },
      secondaryProjects: [
        {
          title: "Centralized Observability Platform",
          repoUrl: "https://github.com/divyal27/centralized-observability-platform",
          tech: ["TypeScript", "ELK Stack", "Prometheus", "Grafana"],
          description: "Unified logging, distributed tracing, and real-time operational metrics across distributed services."
        },
        {
          title: "SRE Cluster Capacity & Resource Manager",
          repoUrl: "https://github.com/divyal27/sre-capacity-manage",
          tech: ["Python", "Kubernetes API", "HPA/VPA", "FinOps"],
          description: "Workload resource quota optimization preventing OOMKilled crashes and reducing cloud compute waste."
        }
      ]
    }
  },

  experience: [
    {
      company: "Hisan Labs Pvt. Ltd.",
      role: "DevOps Intern",
      period: "Feb 2026 – Present",
      location: "Pune, India",
      achievements: [
        "Automated configuration management across staging and production using Ansible playbooks, ensuring consistent environment configurations and reducing manual setup time by ~50%.",
        "Reduced MTTR by ~35% across 3 critical services by configuring ELK Stack alerting and Prometheus rules, cutting average incident resolution time from 40 min down to 26 min.",
        "Designed GitHub Actions CI/CD workflows for pre-production acceptance testing, enforcing automated quality gates and reducing failed deployments by ~30%."
      ],
      tech: ["Ansible", "ELK Stack", "Prometheus", "GitHub Actions", "Docker", "Linux"]
    },
    {
      company: "Widesoftech Pvt. Ltd.",
      role: "Full Stack Web Development Intern",
      period: "Jan 2026 – Feb 2026",
      location: "Pune, India",
      achievements: [
        "Built and deployed InternMeets, a live student internship platform, handling real-world deployment, debugging, and incident resolution within a cross-functional team in under 4 weeks.",
        "Collaborated on containerizing the application stack and streamlining developer environment setup."
      ],
      tech: ["React", "Node.js", "Docker", "Git", "REST APIs"]
    }
  ],

  certifications: [
    {
      name: "Building with the Claude API",
      issuer: "Anthropic",
      category: "AI & Platform Engineering",
      desc: "Architecting LLM-driven workflows, agentic tool execution, and robust prompt engineering systems."
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic",
      category: "Developer Automation & Agentic Workflows",
      desc: "CLI-driven autonomous coding, project-level automated refactoring, and AI engineering workflows."
    },
    {
      name: "Advanced Testing Practices Using AWS DevOps Tools",
      issuer: "Amazon Web Services (AWS)",
      category: "Cloud CI/CD & Automated Verification",
      desc: "Automated test gates, CodeBuild, CodePipeline, synthetic canary testing, and continuous delivery on AWS."
    }
  ],

  education: {
    institution: "Genba Sopanrao Moze College of Engineering, SPPU",
    degree: "B.E. in Computer Engineering",
    period: "2023 – 2027",
    location: "Pune, India"
  },

  skills: {
    "Cloud & Infrastructure": ["AWS (EKS, VPC, EC2, S3, IAM)", "GCP", "Azure", "Linux (Ubuntu/RHEL)"],
    "Containers & Orchestration": ["Docker", "Kubernetes", "Helm", "Containerd"],
    "CI/CD & GitOps": ["GitHub Actions", "ArgoCD", "Jenkins", "GitLab CI"],
    "IaC & Automation": ["Terraform", "Ansible", "Bash Scripting", "YAML"],
    "Observability & Monitoring": ["Prometheus", "Grafana", "ELK Stack", "Datadog", "AWS CloudWatch"],
    "DevSecOps & Compliance": ["Trivy", "SonarQube", "Bandit", "SAST", "Gitleaks", "Cosign"],
    "AIOps & Modern Tooling": ["Moogsoft", "Splunk ITSI", "LogicMonitor", "Dynatrace"]
  }
};
