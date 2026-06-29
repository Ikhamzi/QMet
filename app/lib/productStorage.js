'use client';

const STORAGE_KEY = 'qmet_products';
const SEEDED_KEY  = 'qmet_products_seeded';

// ── Slug ────────────────────────────────────────────────────────────────────
export function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// ── Seed data ────────────────────────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  {
    id: '1', slug: 'iso-9001', title: 'ISO 9001',
    overview: 'ISO 9001 is the internationally recognized standard for Quality Management Systems (QMS). It provides a framework for organizations to consistently deliver products and services that meet customer and regulatory requirements while continually improving performance.',
    requirements: 'Organizations must establish a quality policy and objectives, define the scope of the QMS, maintain documented information, conduct internal audits, and perform management reviews. Leadership commitment, resource management, and risk-based thinking are central requirements.',
    implementationGuidance: 'Begin with a gap analysis against ISO 9001 requirements. Develop a project plan, assign a management representative, and engage all departments. Document key processes, implement changes, train staff, and conduct internal audits before certification.',
    consultingServices: 'Our consultants guide you through every stage of ISO 9001 implementation — from initial gap analysis to certification readiness. We offer on-site workshops, process documentation support, and mock audits tailored to your industry.',
    trainingPrograms: 'We offer awareness training for all staff, lead auditor courses, and internal auditor training certified by recognized bodies. Programs are available in-person and online.',
    templates: 'Quality Manual template, Quality Policy template, Process Map templates, Internal Audit Plan, Non-Conformance Report form, Corrective Action Register.',
    checklists: 'ISO 9001 Gap Analysis Checklist, Internal Audit Checklist, Management Review Agenda Checklist, Document Control Checklist.',
    faqs: 'Q: How long does ISO 9001 certification take?\nA: Typically 3-12 months depending on organization size.\n\nQ: Is ISO 9001 mandatory?\nA: It is voluntary but often required by customers or regulators.',
    articles: 'The Business Case for ISO 9001 | How ISO 9001 Drives Continuous Improvement | Common Mistakes in ISO 9001 Implementation',
    caseStudies: 'A manufacturing SME in Bahrain achieved ISO 9001 certification in 6 months, reducing customer complaints by 40% and winning two new government contracts.',
  },
  {
    id: '2', slug: 'iso-14001', title: 'ISO 14001',
    overview: 'ISO 14001 specifies requirements for an Environmental Management System (EMS). It helps organizations improve environmental performance, fulfill compliance obligations, and achieve environmental goals through systematic management of environmental responsibilities.',
    requirements: 'Organizations must determine environmental aspects and impacts, identify legal and other requirements, set environmental objectives, plan actions to address risks and opportunities, and evaluate environmental performance.',
    implementationGuidance: 'Conduct an initial environmental review. Identify significant environmental aspects such as energy use, waste, and emissions. Develop an EMS aligned with ISO 14001 clauses, train staff on environmental awareness, and establish monitoring procedures.',
    consultingServices: 'Our team assists with environmental aspect identification, legal register development, EMS documentation, and preparation for third-party certification audits.',
    trainingPrograms: 'Environmental awareness sessions, ISO 14001 internal auditor training, and specialist courses on legal compliance and environmental performance metrics.',
    templates: 'Environmental Policy template, Environmental Aspects Register, Legal Register template, Objectives and Targets Tracker, Emergency Preparedness Plan.',
    checklists: 'Environmental Aspect Identification Checklist, Internal EMS Audit Checklist, Legal Compliance Checklist, Emergency Drill Checklist.',
    faqs: 'Q: What industries benefit most from ISO 14001?\nA: Manufacturing, construction, logistics, and energy sectors see the greatest impact.\n\nQ: Can a small business get ISO 14001 certified?\nA: Yes, the standard is scalable to any organization size.',
    articles: 'ISO 14001 and ESG Reporting | Reducing Carbon Footprint with ISO 14001 | The Link Between Environmental Management and Profitability',
    caseStudies: 'A logistics company in the GCC region reduced fuel consumption by 18% within one year of implementing ISO 14001, resulting in significant cost savings and improved sustainability reporting.',
  },
  {
    id: '3', slug: 'iso-27001', title: 'ISO 27001',
    overview: 'ISO 27001 is the global standard for Information Security Management Systems (ISMS). It provides a systematic approach to managing sensitive company information, ensuring it remains secure through people, processes, and technology controls.',
    requirements: 'Establish an ISMS scope, conduct information security risk assessments, define a risk treatment plan, apply Annex A controls, maintain documented policies, perform internal audits, and conduct management reviews.',
    implementationGuidance: 'Start with an asset inventory and risk assessment. Identify vulnerabilities and threats for each asset. Select applicable Annex A controls, document a Statement of Applicability, implement technical and administrative controls, and test through internal audits.',
    consultingServices: 'End-to-end ISO 27001 consultancy including risk assessment facilitation, control selection, policy drafting, Statement of Applicability, and full audit readiness support for GCC organizations.',
    trainingPrograms: 'ISO 27001 Foundation, Lead Implementer, and Lead Auditor certifications. Cybersecurity awareness training for all staff levels.',
    templates: 'ISMS Scope Document, Information Security Policy, Risk Assessment Template, Statement of Applicability, Asset Inventory Register, Incident Response Plan.',
    checklists: 'ISO 27001 Gap Analysis Checklist, Annex A Controls Checklist, Internal ISMS Audit Checklist, Supplier Security Assessment Checklist.',
    faqs: 'Q: What is the difference between ISO 27001 and ISO 27002?\nA: ISO 27001 defines requirements; ISO 27002 provides guidance on implementing the Annex A controls.\n\nQ: How often must risk assessments be conducted?\nA: At least annually or when significant changes occur.',
    articles: 'Why ISO 27001 is Critical for Bahrain FinTech Companies | ISO 27001 vs SOC 2 | Building a Culture of Information Security',
    caseStudies: 'A financial services firm in Bahrain achieved ISO 27001 certification and successfully passed a client security audit, securing a multi-year contract worth $2M.',
  },
  {
    id: '4', slug: 'iso-45001', title: 'ISO 45001',
    overview: 'ISO 45001 is the international standard for Occupational Health and Safety Management Systems (OHSMS). It replaces OHSAS 18001 and provides a framework to improve employee safety, reduce workplace risks, and create better, safer working conditions.',
    requirements: 'Organizations must identify hazards and assess OH&S risks, determine legal requirements, set OH&S objectives, plan for emergency preparedness, investigate incidents, and engage workers at all levels in the OHSMS.',
    implementationGuidance: 'Perform a baseline hazard identification and risk assessment. Engage workers and their representatives. Develop OH&S policies and procedures, implement controls following the hierarchy of controls, and establish monitoring and incident reporting mechanisms.',
    consultingServices: 'Hazard identification workshops, legal register development, OHSMS documentation, safety culture assessments, and certification audit preparation for construction, oil & gas, and manufacturing sectors.',
    trainingPrograms: 'ISO 45001 awareness training, internal auditor certification, safety leadership programs, and industry-specific hazard management courses.',
    templates: 'OH&S Policy template, Hazard Identification and Risk Assessment template, Legal Register, Incident Investigation Report, Emergency Response Plan.',
    checklists: 'Hazard Identification Checklist, Internal OH&S Audit Checklist, Incident Investigation Checklist, Emergency Drill Evaluation Checklist.',
    faqs: 'Q: What replaced OHSAS 18001?\nA: ISO 45001, published in 2018, fully replaced OHSAS 18001.\n\nQ: Who should be involved in implementing ISO 45001?\nA: Leadership, workers, safety officers, and all departmental managers.',
    articles: 'ISO 45001 in the GCC Construction Sector | From OHSAS 18001 to ISO 45001: Migration Guide | How ISO 45001 Reduces Workplace Injury Costs',
    caseStudies: 'A construction contractor in Saudi Arabia migrated from OHSAS 18001 to ISO 45001 in four months, achieving a 30% reduction in lost-time incidents in the following year.',
  },
  {
    id: '5', slug: 'iso-42001', title: 'ISO 42001',
    overview: "ISO 42001 is the world's first international standard for Artificial Intelligence Management Systems (AIMS). It provides requirements and guidance for organizations developing, providing, or using AI products and services responsibly, ethically, and transparently.",
    requirements: 'Define the AI management system scope, identify AI-related risks and impacts, establish an AI policy, implement controls for responsible AI use, monitor AI system performance, and ensure ongoing transparency and accountability for AI decisions.',
    implementationGuidance: 'Inventory all AI systems in use or development. Assess ethical, social, and technical risks. Develop an AI policy aligned with organizational values. Implement governance structures, bias testing, and transparency mechanisms before seeking certification.',
    consultingServices: 'AI governance framework design, ISO 42001 gap analysis, risk assessment for AI systems, policy drafting, and preparation for third-party certification — ideal for technology firms and government entities in Bahrain and the wider GCC.',
    trainingPrograms: 'ISO 42001 Foundation and Lead Implementer courses. AI ethics and governance workshops tailored for technical teams, executives, and board-level stakeholders.',
    templates: 'AI Management System Scope Document, AI Policy template, AI Risk Assessment template, AI Impact Assessment template, AI Incident Log.',
    checklists: 'ISO 42001 Gap Analysis Checklist, AI Risk Identification Checklist, AI Ethics Review Checklist, Internal AIMS Audit Checklist.',
    faqs: "Q: Is ISO 42001 mandatory for AI companies?\nA: Currently voluntary, but increasingly expected by regulators globally.\n\nQ: How does ISO 42001 relate to the EU AI Act?\nA: ISO 42001 certification can demonstrate compliance with several EU AI Act obligations.",
    articles: "ISO 42001: What Every GCC Technology Company Needs to Know | Responsible AI: From Principles to Certification | How ISO 42001 Supports Bahrain's AI Strategy",
    caseStudies: 'A Bahrain-based AI startup achieved ISO 42001 certification, positioning itself as the first certified AI company in the GCC and winning a government digitization contract worth $500K.',
  },
];

export function seedProducts() {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem(SEEDED_KEY)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
  localStorage.setItem(SEEDED_KEY, 'true');
}

export function getProducts() {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveProducts(products) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function addProduct(productData) {
  const products = getProducts();
  const slug = generateSlug(productData.title);
  const newProduct = { id: Date.now().toString(), slug, ...productData };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
}

export function updateProduct(slug, updatedData) {
  const products = getProducts();
  const index = products.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const newSlug = generateSlug(updatedData.title);
  products[index] = { ...products[index], ...updatedData, slug: newSlug };
  saveProducts(products);
  return products[index];
}

export function deleteProduct(slug) {
  saveProducts(getProducts().filter((p) => p.slug !== slug));
}

export function findProductBySlug(slug) {
  return getProducts().find((p) => p.slug === slug) || null;
}
