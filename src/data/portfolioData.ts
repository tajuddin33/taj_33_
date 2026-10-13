export interface CaseStudy {
  id: string;
  title: string;
  yearDuration: string;
  categoryTag: string;
  roleBadge: string;
  domainBadge: string;
  category: 'all' | 'systems' | 'fintech' | 'genai';
  imageUrl: string;
  imageAlt: string;
  summary: string;
  quantifiedImpactTitle: string;
  quantifiedImpactMetric: string;
  quantifiedImpactDescription: string;
  tags: string[];
  techStack: string[];
  specs: {
    problemStatement: string;
    architectureOverview: string;
    keyDeliverables: string[];
    metrics: { label: string; value: string; change: string }[];
    designTokensCount: number;
    userSegments: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-cloud-os',
    title: 'Apex Cloud OS',
    yearDuration: '2024 • 8 MONTHS',
    categoryTag: 'ENTERPRISE CLOUD',
    roleBadge: 'Lead Product Designer',
    domainBadge: 'SaaS & Infra',
    category: 'systems',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAma4UesFrdCI1fDsn2-mCjWElEWhg67x4UqqMtBzCjOBKEmCKTrHZp6D322GAvHsXBUCUvO4Onz_TpdM9gw9UVjuTs4qwom0-1S9w_rUX5MwFP1AzZ9bo857iMh7smiSw6hWF518vf8KkKMU1cKpinOjsKcxoZJQ2KAi1U7YIf6MIzlSmpYFKAiL0q_2_SHTGd4wNVynEbmVNpkqlD4jizmDosJ97YxKGE94Q7a-uDY58bAFEVPGqB',
    imageAlt: 'Modern dark-mode enterprise cloud infrastructure monitoring console interface UI displaying real-time cluster health, latency graphs, distributed tracing charts, and node orchestration panels',
    summary: 'End-to-end infrastructure triage interface engineered for Site Reliability Engineers managing millions of concurrent node workloads.',
    quantifiedImpactTitle: 'QUANTIFIED IMPACT',
    quantifiedImpactMetric: '42% Triage Reduction',
    quantifiedImpactDescription: 'Eliminated modal fatigue via command palette search and ergonomic visual telemetry grouping.',
    tags: ['Information Density', 'Dark Mode', 'Keyboard Ergonomics'],
    techStack: ['React', 'WebSocket', 'Tailwind', 'Canvas2D'],
    specs: {
      problemStatement: 'SREs handling P0 outages were overwhelmed by 14 disparate dashboards with inconsistent alarm thresholds, leading to average MTTR of 38 minutes.',
      architectureOverview: 'Unified telemetry stream combining node health, distributed tracing, and automated remediation actions into a single-pane command center.',
      keyDeliverables: [
        'Command palette (⌘K) multi-cluster search indexing 200k+ microservices in <12ms',
        'High-density telemetry cards with micro-sparklines and real-time WebSocket diffing',
        'Adaptive dark theme calibrated for 12-hour continuous monitoring operations',
        'State-machine driven incident playbooks with one-click rollbacks'
      ],
      metrics: [
        { label: 'Mean Time to Detect (MTTD)', value: '1.4 min', change: '-64%' },
        { label: 'Triage Workflow Efficiency', value: '42% faster', change: '+42%' },
        { label: 'Weekly Active SRE Operators', value: '18,400', change: '+210%' }
      ],
      designTokensCount: 184,
      userSegments: 'Principal SREs, Cloud Architects & DevOps Teams'
    }
  },
  {
    id: 'loomis-pay',
    title: 'Loomis Pay & UPI Rails',
    yearDuration: '2023 • 6 MONTHS',
    categoryTag: 'NEXT-GEN PAYMENTS & UPI',
    roleBadge: 'Principal UX Designer',
    domainBadge: 'Fintech',
    category: 'fintech',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0SUb-xiSjk5FPCL-aDAZTfDDuAuK3ypiCXk_CcF8T0skrEFiibHpYiafxKlJkdlG4QGFVJ6C0FnXdUmMe2-Zg10Jt9K-4sMO0iRnVskS_kYn5kZxHsCQWW6RTGx7NS1HLya1s6U7aNGwOq45_7FOm70xt48-pFeleLypH4c7GXzPifC-5E7cQ191n9TJN5NmXNfB9HmzjJW_eCWPxLy1RnM7fIcCRabOgaOH1XzOGYL_EOUasHZg7',
    imageAlt: 'Sophisticated global fintech checkout and multi-currency mobile payment screen layout showing currency exchange rates, tactile one-tap biometric verification, localized fee breakdown cards',
    summary: 'Frictionless multi-rail checkout architected to unify UPI Autopay, Bharat QR, RuPay, and international cross-border corridors into a resilient zero-confusion transactional flow.',
    quantifiedImpactTitle: 'QUANTIFIED IMPACT (INDIAN & GLOBAL SCALE)',
    quantifiedImpactMetric: '+31% Checkout Success Rate',
    quantifiedImpactDescription: 'Streamlined UPI intent switching and progressive form disclosure, drastically minimizing OTP drop-offs and network retry friction.',
    tags: ['UPI 2.0 & Autopay', 'Tier-2/3 Localization', 'Micro-interactions'],
    techStack: ['Flutter', 'React Native', 'W3C Web Payments', 'Kotlin'],
    specs: {
      problemStatement: 'High transaction failures during peak payment events due to poor bank server timeout handling, ambiguous UPI app routing, and friction in multi-party fee breakdowns.',
      architectureOverview: 'Adaptive transactional checkout funnel with instant fallback rails, tactile biometric auth, and transparent price itemization.',
      keyDeliverables: [
        'Zero-hop UPI intent routing reducing merchant checkout hops from 5 steps to 1 tap',
        'Resilient offline-first queue and retry mechanics for spotty 4G/5G edge connectivity',
        'Bilingual Tier-2/Tier-3 localized typography supporting Hindi, Tamil, Telugu, and English',
        'Biometric passkey authentication compliant with RBI and NPCI tokenization standards'
      ],
      metrics: [
        { label: 'Checkout Success Rate', value: '94.8%', change: '+31%' },
        { label: 'Payment Latency P95', value: '1.2s', change: '-48%' },
        { label: 'Monthly GMV Processed', value: '$240M+', change: '+180%' }
      ],
      designTokensCount: 220,
      userSegments: 'Direct-to-Consumer Merchants, Indian Shoppers & Tier-2 Digital Natives'
    }
  },
  {
    id: 'canvas-ai-studio',
    title: 'Canvas AI Studio',
    yearDuration: '2024 • 9 MONTHS',
    categoryTag: 'CREATIVE TOOLING',
    roleBadge: 'Product & Interaction',
    domainBadge: 'Gen-AI Workspace',
    category: 'genai',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUMXeYqdPEABA38sM_ivaR-4z0NIDg7aEHIQWPdnmVZqYNH_jsKxWXBbwgDbJtEh4ZjmKKFK-A4uGXH4pGAD-9xkBp0KOQgGaziT-I9MxziaN_OwThdONQQM1Qtzwu0bTPaT_OHfw9iK2bxNTHz5aoduemJamTfRhRjn3ow055wudZeZsvY0AKCW9Yom4-iSHh20G40hEeA05QzLnpviFGUO3hVFYUhM8DljMjNi7RtNq4vDcOEOt1',
    imageAlt: 'Infinite creative workspace desktop application with floating minimal toolbars, generative AI prompt inspector, multi-layer canvas node graphs, and real-time multiplayer cursor tags',
    summary: 'Spatial interaction design for infinite collaborative visual canvases, translating generative prompt models into direct canvas manipulation.',
    quantifiedImpactTitle: 'USER TRACTION',
    quantifiedImpactMetric: '120K Weekly Active Creators',
    quantifiedImpactDescription: 'Pioneered contextual toolbar anchoring that reduced cursor travel distance by 61% during rapid iterations.',
    tags: ['Multi-Modal Inputs', 'Spatial UI', 'Node Architecture'],
    techStack: ['WebGL', 'Rust Engine', 'TypeScript', 'Web Workers'],
    specs: {
      problemStatement: 'Generative AI tools felt like disconnected text-box chat interfaces rather than spatial design tools that visual thinkers naturally use.',
      architectureOverview: 'Infinite zoomable 60fps canvas bridging node graph logic, real-time diffusion inpainting, and multiplayer collaborative cursors.',
      keyDeliverables: [
        'Floating contextual spatial inspector that docks seamlessly around selected nodes',
        'Direct prompt-to-region generative inpainting with tactile brush pressure feedback',
        'Non-destructive version history branch graphs rendered with hardware acceleration',
        'Multi-agent generative scaffolding assistants that suggest complementary visual assets'
      ],
      metrics: [
        { label: 'Weekly Active Creators', value: '120,000', change: '+320%' },
        { label: 'Cursor Travel Distance', value: '39% of baseline', change: '-61%' },
        { label: 'Canvas Frame Rate', value: '60 FPS stable', change: 'Zero Drop' }
      ],
      designTokensCount: 310,
      userSegments: 'Art Directors, Visual Designers, 3D Artists & Creative Agencies'
    }
  },
  {
    id: 'kinetix-design-system',
    title: 'Kinetix Design System',
    yearDuration: '2023 • 12 MONTHS',
    categoryTag: 'MULTI-BRAND SCALE',
    roleBadge: 'Design Architect',
    domainBadge: 'Core Infrastructure',
    category: 'systems',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEwAGEdBd7Jt7VZ4_qsSWV1HL07CJRAs7H2R5i6lhTuAH8DdEFZnliWMdnnNEsMrS6zZP2bOWAgP6zxSd2nfe_jDbBPrLRdpm8V40Dy8aF1gsDMt1cqZxgsP_G4fqYQ0FtmrSyvTIx1MZ4J_ZKg30g9QdrptSW8IsJq1lQBcgLBXhEthaSgqttmwPB9hwE7XDl0IziFxCVGF8ZzhPvUD4P4hu6K0PUKlQzW9DWn_kerkKrPmunzCGc',
    imageAlt: 'Design system token architecture visual overview showcasing typography scales, tokenized elevation tiers, automated Figma to code sync status indicators, and modular accessible component states',
    summary: 'Multi-brand tokenized design architecture powering 14 core product squads across Web, iOS, and Android with zero-drift synchronization.',
    quantifiedImpactTitle: 'OPERATIONAL VELOCITY',
    quantifiedImpactMetric: '100% Token Sync & WCAG AAA',
    quantifiedImpactDescription: 'Unified 450+ cross-platform components, cutting designer-to-developer handoff cycles from days to minutes.',
    tags: ['Token Pipelines', 'Cross-Platform', 'Accessibility AAA'],
    techStack: ['Style Dictionary', 'CI/CD', 'Figma API', 'Tokens Studio'],
    specs: {
      problemStatement: '14 squads building redundant button and form variants across React, Swift, and Kotlin with massive color contrast discrepancies and brand fragmentation.',
      architectureOverview: 'Single source of truth token hierarchy using JSON Schema with automated GitHub Actions PR generation and chromatic visual regression testing.',
      keyDeliverables: [
        'Semantic design token taxonomy supporting 3 distinct enterprise sub-brands',
        'Automated Figma-to-code pipeline emitting TypeScript, CSS variables, and Compose/SwiftUI tokens',
        'WCAG 2.1 AAA accessible contrast checking automated in pull request reviews',
        'Interactive component playground and interactive documentation portal'
      ],
      metrics: [
        { label: 'Component Reusability', value: '92%', change: '+58%' },
        { label: 'Handoff Cycle Time', value: '18 min', change: '-85%' },
        { label: 'Accessibility Audit Score', value: '100 / 100', change: 'AAA Tier' }
      ],
      designTokensCount: 520,
      userSegments: '14 Engineering Squads, 32 Product Designers, 120+ Microservices'
    }
  }
];

export const METHODOLOGY_PILLARS = [
  {
    pillarNumber: 'PILLAR 01',
    title: 'Product Architecture & User Flows',
    icon: 'account_tree',
    description: 'Untangling high-cardinality SaaS hierarchies, edge-case failure modes, and ensuring informational models align intuitively with human logic.',
    tags: ['Information Flow', 'Edge Resiliency']
  },
  {
    pillarNumber: 'PILLAR 02',
    title: 'Design Systems & Token Ops',
    icon: 'view_quilt',
    description: 'Engineering automated token sync pipelines, cross-platform alignment (Web/iOS/Android), semantic dark/light hierarchies, and linting rules.',
    tags: ['Design Tokens', 'Cross-Platform']
  },
  {
    pillarNumber: 'PILLAR 03',
    title: 'Interactive Prototyping & Motion',
    icon: 'touch_app',
    description: 'Crafting tactile state-machine transitions, physics-based springs, and code-level interactive sandboxes that validate user confidence early.',
    tags: ['Micro-gestures', 'Spring Physics']
  },
  {
    pillarNumber: 'PILLAR 04',
    title: 'UX Telemetry & Quant Research',
    icon: 'analytics',
    description: 'Pairing generative user interviews with telemetry funnel benchmarking, unmoderated usability metrics, and quantified business outcome KPIs.',
    tags: ['A/B Validation', 'Telemetry KPIs']
  }
];

export interface ThemePreset {
  id: string;
  name: string;
  colorHex: string;
  bgHex: string;
  borderHex: string;
}

export const THEME_PRESETS: ThemePreset[] = [
  { id: 'blue', name: 'Electric Cobalt', colorHex: '#0051d5', bgHex: '#eff6ff', borderHex: '#bfdbfe' },
  { id: 'emerald', name: 'Cyber Emerald', colorHex: '#059669', bgHex: '#ecfdf5', borderHex: '#a7f3d0' },
  { id: 'violet', name: 'Hyper Violet', colorHex: '#7c3aed', bgHex: '#f5f3ff', borderHex: '#ddd6fe' },
  { id: 'monolith', name: 'Monolith Dark', colorHex: '#0f172a', bgHex: '#f8fafc', borderHex: '#cbd5e1' }
];
