// ─────────────────────────────────────────────────────────────────────────────
// src/data/projects.ts
//
// Single source of truth for all portfolio project data.
// Replace every [PLACEHOLDER] with your real information before publishing.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = "Completed" | "In Progress" | "Internal" | "Research";

export interface Project {
  /** URL-safe slug — used for /projects/[slug] routing */
  slug: string;
  title: string;
  tagline: string;
  description: string;
  /** Long-form detail shown on the project detail page */
  detail: string;
  /** Primary domain / industry */
  domain: string;
  tags: string[];
  status: ProjectStatus;
  /** Whether to feature on the homepage projects section */
  featured: boolean;
  /** Set to true to highlight as a flagship project */
  flagship?: boolean;
  repoUrl?: string;   // "[YOUR_REPO_URL]" — replace or remove
  demoUrl?: string;   // "[YOUR_DEMO_URL]" — replace or remove
  /** Icon name from Lucide (used in cards) */
  icon: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "ecope",
    title: "ECOPE — Employee Complaint System",
    tagline:
      "Full-stack AI-powered complaint management with RoBERTa classification achieving 96% accuracy and LangChain RAG chatbot.",
    description:
      "Built a full-stack employee complaint system using Python (FastAPI) and Next.js (TypeScript), featuring role-specific dashboards, JWT-based authentication, and an AI-driven complaint classification module.",
    detail: `
ECOPE is a full-stack employee complaint and grievance platform that combines secure web engineering with production-grade AI.

**Backend (FastAPI + Python):**
Role-specific dashboards for employees, managers, and HR administrators. JWT-based secure authentication with token refresh flows and protected routes.

**AI Classification Module:**
Fine-tuned a RoBERTa model to automatically classify incoming complaints by category and severity. Achieved 96% accuracy on the validation set, reducing manual triaging effort by 80%.

**AI Chatbot (LangChain + RAG):**
Engineered a conversational interface backed by a Retrieval-Augmented Generation pipeline, enabling employees and HR to query complaint history and policy documents using natural language.

**Frontend (Next.js + TypeScript):**
Clean, role-aware UI built with Next.js, separating concerns between employee, manager, and admin views.
    `.trim(),
    domain: "AI / Full-Stack",
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PyTorch",
      "LangChain",
      "RoBERTa",
      "RAG",
      "Google Gemini",
      "JWT",
    ],
    status: "Completed",
    featured: true,
    flagship: true,
    repoUrl: undefined,
    icon: "Bot",
    highlights: [
      "96% accuracy with fine-tuned RoBERTa classification model",
      "80% reduction in manual complaint triaging effort",
      "LangChain RAG pipeline for natural language policy queries",
      "JWT-secured role-specific dashboards (employee / manager / HR)",
      "FastAPI backend with full CRUD and authentication flows",
    ],
  },
  {
    slug: "credit-card-processing-system",
    title: "Credit Card Processing System",
    tagline:
      "Microservices-based banking platform automating credit card lifecycle and merchant transactions with Java, Spring Boot, and React.",
    description:
      "Engineered a microservices-based banking platform using Java, Spring Boot, and React.js to automate credit card lifecycle management and merchant transaction processing, backed by PostgreSQL and a custom API Gateway.",
    detail: `
A production-grade microservices architecture for end-to-end credit card management.

**Microservices Architecture:**
Decomposed the banking domain into independently deployable services — card issuance, transaction processing, merchant management, and customer service — each with its own database.

**Customer Service Backend:**
Developed RESTful APIs for customer onboarding, card management, and transaction history with strict data validation and input sanitisation.

**API Gateway:**
Implemented a centralised API Gateway to route inter-service traffic, enforce authentication, and provide a single entry point for the React frontend.

**Database Design:**
Designed a robust PostgreSQL schema optimised for high-volume transaction processing, with proper indexing strategies and referential integrity.

**Frontend (React.js):**
Built a responsive banking dashboard for customers and operations teams to manage cards, view transactions, and initiate disputes.
    `.trim(),
    domain: "FinTech / Backend",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Microservices",
      "API Gateway",
    ],
    status: "Completed",
    featured: true,
    flagship: true,
    repoUrl: undefined,
    icon: "BarChart3",
    highlights: [
      "Microservices architecture with independent deployable services",
      "Centralised API Gateway for inter-service communication",
      "RESTful APIs with secure data validation",
      "PostgreSQL schema optimised for high-volume transactions",
      "React.js dashboard for card and transaction management",
    ],
  },
  {
    slug: "restaurant-online-ordering-system",
    title: "Restaurant Online Ordering System",
    tagline:
      "Scalable food ordering platform with Stripe payment gateway, built with Java, Spring Boot, and React.",
    description:
      "Architected a scalable monolithic food ordering platform using Java, Spring Boot, and React.js to manage customer orders, real-time restaurant menus, and secure payments via Stripe.",
    detail: `
A full-stack food ordering platform built for real-world restaurant operations.

**Backend (Spring Boot + Java):**
Core business logic handling menu management, order lifecycle (placed → preparing → ready → delivered), and real-time status updates. Modular service layer for easy feature extension.

**Payment Integration (Stripe):**
Integrated Stripe's payment gateway to handle secure card transactions, webhook-driven order confirmation, and refund handling.

**Database (PostgreSQL):**
Designed a modular schema covering restaurants, menus, orders, customers, and payments. Optimised queries for efficient data retrieval and synchronisation between services.

**Frontend (React.js):**
Customer-facing ordering interface with real-time menu display, cart management, and order tracking. Restaurant-side dashboard for menu and order management.
    `.trim(),
    domain: "E-Commerce / Full-Stack",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Stripe",
      "Monolithic Architecture",
    ],
    status: "Completed",
    featured: true,
    repoUrl: undefined,
    icon: "Box",
    highlights: [
      "Stripe payment gateway integration with webhook-driven confirmation",
      "Real-time menu and order management system",
      "Modular PostgreSQL schema for efficient data retrieval",
      "Full order lifecycle management (placed → delivered)",
      "Customer and restaurant-side React dashboards",
    ],
  },
  {
    slug: "clarity-xai-radiology",
    title: "CLARITY — XAI for Clinical Radiology",
    tagline:
      "Post-hoc explainability framework for vision-language models in radiology using Mixed-Model Causal Attention Rollout.",
    description:
      "Developed a post-hoc Explainable AI (XAI) framework to enhance the interpretability of decoder-only vision-language models in clinical radiology, tracing generated text back to specific spatial visual patches.",
    detail: `
CLARITY (Conversational LLM-Assisted Radiology Interpretation & Transparency) is a research-grade XAI framework addressing interpretability in clinical AI.

**Problem:**
Decoder-only vision-language models (VLMs) used in radiology generate diagnostic text but provide no mechanism to explain which image regions drove specific predictions — a critical gap for clinical trust.

**Mixed-Model Causal Attention Rollout:**
Implemented a novel attention-propagation technique that traces information flow from each generated token back to the corresponding spatial visual patches in the input image, improving localization fidelity over standard rollout approaches.

**Explainability Metrics:**
Applied Shannon Entropy to quantify attention distribution sharpness and used SigLIP visual encodings to validate patch-level alignment with radiologist-annotated regions.

**Tech Stack:**
Python · PyTorch · MedGamma-4B · HuggingFace Transformers · Shannon Entropy · Computer Vision (SigLIP) · NumPy · SciPy
    `.trim(),
    domain: "AI Research / Healthcare",
    tags: [
      "Python",
      "PyTorch",
      "XAI",
      "Transformers",
      "Computer Vision",
      "SigLIP",
      "MedGamma-4B",
      "NumPy",
      "SciPy",
      "Healthcare AI",
    ],
    status: "Completed",
    featured: true,
    flagship: true,
    repoUrl: undefined,
    icon: "Search",
    highlights: [
      "Mixed-Model Causal Attention Rollout for spatial patch localization",
      "Post-hoc XAI for decoder-only vision-language models",
      "Shannon Entropy-based attention distribution analysis",
      "SigLIP visual encoding alignment with radiologist annotations",
      "Applied to MedGamma-4B in clinical radiology context",
    ],
  },

  {
    slug: "databricks-genie-analytics",
    title: "Databricks Genie Analytics",
    tagline:
      "Natural-language analytics across energy, healthcare, sports, and sales using Databricks Genie Spaces.",
    description:
      "Built agentic analytics experiences with Databricks Genie, enabling business users to query large structured datasets using plain English across multiple industry verticals.",
    detail: `
Databricks Genie Spaces allow non-technical users to interact with enterprise data through conversational AI. 
This project involved designing and configuring Genie Spaces across four domains:

**Energy:** Querying generation, consumption, and grid performance datasets.
**Healthcare:** Analysing patient metrics, operational KPIs, and clinical throughput.
**Sports:** Exploring athlete performance data and team-level analytics.
**Sales:** Building revenue dashboards and opportunity-pipeline summaries powered by natural language.

Key engineering work included data modelling in Unity Catalog, writing trusted-asset SQL, configuring Genie instructions, and iterating on user query patterns to improve answer quality.

[Add specific technical details, architecture decisions, and outcomes here.]
    `.trim(),
    domain: "Data & AI",
    tags: [
      "Databricks",
      "Genie Spaces",
      "Unity Catalog",
      "SQL",
      "LLM",
      "Analytics",
      "PySpark",
    ],
    status: "Completed",
    featured: true,
    flagship: true,
    repoUrl: undefined, // "[YOUR_REPO_URL]" — internal project, add if applicable
    icon: "BarChart3",
    highlights: [
      "Four industry verticals: energy, healthcare, sports, sales",
      "Natural-language querying of structured enterprise data",
      "Unity Catalog data modelling and trusted-asset SQL",
      "Genie Space configuration and instruction tuning",
    ],
  },
  {
    slug: "agentic-ai-mcp",
    title: "Agentic AI & MCP Applications",
    tagline:
      "Multi-agent systems and Model Context Protocol applications for autonomous task execution.",
    description:
      "Developed agentic AI pipelines using the Model Context Protocol (MCP), enabling LLMs to call tools, read external context, and complete multi-step tasks autonomously.",
    detail: `
The Model Context Protocol (MCP) provides a standardised way to expose tools, resources, and prompts to LLM agents. 
This work involved building MCP servers and clients that allow agents to:

- Execute code and shell commands safely
- Read and write structured data sources
- Orchestrate multi-agent workflows with clear delegation boundaries
- Handle errors and retries gracefully across tool invocations

[Add specific frameworks, agent architectures, tool implementations, and use-cases here.]
    `.trim(),
    domain: "Agentic AI",
    tags: [
      "MCP",
      "Agentic AI",
      "LLM",
      "Python",
      "Tool Use",
      "Orchestration",
      "Anthropic Claude",
    ],
    status: "Completed",
    featured: true,
    flagship: true,
    repoUrl: undefined,
    icon: "Bot",
    highlights: [
      "MCP server and client implementation",
      "Multi-step autonomous task execution",
      "Tool and resource exposure via standardised protocol",
      "Error handling and retry strategies",
    ],
  },
  {
    slug: "rag-implementation",
    title: "RAG Implementation & Experimentation",
    tagline:
      "Retrieval-Augmented Generation pipeline with embedding, chunking, and reranking experiments.",
    description:
      "Designed and iterated on RAG pipelines to ground LLM responses in domain-specific document corpora, experimenting with chunking strategies, embedding models, vector stores, and retrieval quality metrics.",
    detail: `
Retrieval-Augmented Generation (RAG) extends LLM capabilities by injecting relevant retrieved context at inference time. 
This project covered the full RAG lifecycle:

**Ingestion:** Document parsing, chunking strategy experiments (fixed, semantic, recursive).
**Embedding:** Evaluation of multiple embedding models for retrieval relevance.
**Vector store:** Storage and similarity search configuration.
**Retrieval & Reranking:** Hybrid search, cross-encoder reranking.
**Generation:** Prompt engineering for faithful, grounded responses.
**Evaluation:** Measuring faithfulness, relevance, and answer correctness.

[Add specific toolchain, datasets, evaluation results, and deployment details here.]
    `.trim(),
    domain: "AI / NLP",
    tags: [
      "RAG",
      "LangChain",
      "LlamaIndex",
      "Vector DB",
      "Embeddings",
      "Python",
      "OpenAI",
    ],
    status: "Completed",
    featured: true,
    repoUrl: undefined,
    icon: "Search",
    highlights: [
      "End-to-end RAG pipeline design and iteration",
      "Chunking strategy and embedding model experiments",
      "Hybrid search with cross-encoder reranking",
      "RAG evaluation metrics: faithfulness, relevance, correctness",
    ],
  },
  {
    slug: "jd-resdex-ai",
    title: "JD Resdex AI",
    tagline:
      "AI-powered job-description processing and intelligent recruitment search engine.",
    description:
      "Built an AI system that parses and enriches job descriptions, extracts structured requirements, and drives intelligent candidate search within a recruitment platform.",
    detail: `
JD Resdex AI automates the labour-intensive process of turning raw job descriptions into structured, searchable intelligence.

**JD Processing:** Parsing unstructured job descriptions using LLMs to extract role requirements, skills, experience bands, and cultural signals.
**Resdex Search:** Translating extracted JD attributes into optimised candidate-search queries against a large resume database.
**Ranking:** Relevance scoring to surface the best-matched candidates.

[Add specific LLMs used, data pipeline architecture, search infrastructure, and platform integration details here.]
    `.trim(),
    domain: "HR Tech / AI",
    tags: [
      "LLM",
      "NLP",
      "Information Extraction",
      "Python",
      "Recruitment AI",
      "Search",
      "FastAPI",
    ],
    status: "Completed",
    featured: true,
    repoUrl: undefined,
    icon: "FileSearch",
    highlights: [
      "LLM-powered structured information extraction from JDs",
      "Automated skill and requirement normalisation",
      "Intelligent candidate search and relevance ranking",
      "Integration with recruitment platform backend",
    ],
  },
  {
    slug: "cad-viewer",
    title: "Web-Based CAD Viewer",
    tagline:
      "Browser-native 3-D CAD viewer: STEP → GLB conversion pipeline with FastAPI and Three.js.",
    description:
      "Engineered a full-stack web application that converts STEP CAD files to GLB format server-side and renders them interactively in the browser using Three.js with orbit controls.",
    detail: `
Engineering CAD files (STEP format) are not natively renderable in a browser. 
This project bridges that gap with a complete pipeline:

**Backend (FastAPI + Python):**
- STEP file upload endpoint
- Server-side STEP → GLB conversion using open-source geometry libraries
- Streaming file delivery to the frontend

**Frontend (React + Three.js):**
- GLBLoader for geometry ingestion
- OrbitControls for pan, rotate, and zoom
- Lighting rig and material defaults suited for mechanical parts
- File drag-and-drop UX

[Add specific geometry libraries, performance benchmarks, and deployment details here.]
    `.trim(),
    domain: "Engineering / 3D",
    tags: [
      "FastAPI",
      "React",
      "Three.js",
      "STEP",
      "GLB",
      "Python",
      "TypeScript",
      "3D Rendering",
    ],
    status: "Completed",
    featured: true,
    repoUrl: undefined,
    icon: "Box",
    highlights: [
      "STEP to GLB server-side conversion pipeline",
      "Interactive 3-D rendering with Three.js OrbitControls",
      "FastAPI file upload and streaming",
      "Drag-and-drop UX with React",
    ],
  },
];

/** Return a single project by slug, or undefined if not found */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Return only projects marked as featured */
export const featuredProjects = projects.filter((p) => p.featured);
