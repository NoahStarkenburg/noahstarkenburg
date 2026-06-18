/**
 * SITE CONTENT — edit this file to update the whole site.
 *
 * Everything visible is driven from here, so you never have to touch the
 * components to change copy, add a project, or fix a detail.
 *
 * Search for "TODO" to find spots that need your input (repo links to confirm
 * or push, the resume PDF).
 */

export const profile = {
  name: "Noah Starkenburg",
  role: "Software Engineer",
  // Big hero statement. Keep it short and concrete.
  statement: "Software engineer building full-stack web apps and backend services.",
  // 1 to 2 sentence support line under the statement.
  hook: "B.S. in Software Development (2026) with hands-on experience across two software roles. I work across the stack in C#, Java, Go, and TypeScript, and I care about clean APIs, reliable data, and tested code.",
  location: "Hoffman Estates, IL",
  availability: "Open to software engineer and developer roles",
  email: "noahstarkenburg@gmail.com",
  // 🔴 TODO: drop your resume PDF into /public and keep this filename in sync.
  resume: "/Noah-Starkenburg-Resume.pdf",
  socials: {
    github: "https://github.com/NoahStarkenburg",
    linkedin: "https://www.linkedin.com/in/noah-starkenburg-7babb8332",
    email: "mailto:noahstarkenburg@gmail.com",
  },
};

/** Quick-hit facts shown as a small strip in the hero. */
export const facts: { label: string; value: string }[] = [
  { label: "Based in", value: "Hoffman Estates, IL" },
  { label: "Focus", value: "Backend & full-stack" },
  { label: "Education", value: "B.S. Software Dev, GCU 2026" },
  { label: "Status", value: "Open to roles" },
];

/** Short "about" paragraphs. The first is the lead (rendered larger). */
export const about: string[] = [
  "I'm a software engineer who likes building things that ship and hold up: full-stack web apps, backend APIs, and the data and infrastructure underneath them.",
  "I earned my B.S. in Software Development from Grand Canyon University in April 2026, and I've spent the last year working across two software roles. At Byline Bank I build automations and internal tools on the Microsoft Power Platform with PowerShell integrations. At FamilyCore I worked across a .NET platform: REST APIs, PostgreSQL, Docker, background jobs, and an automated test suite.",
  "Outside of work I build to learn. I've shipped a full-stack marketplace with Stripe payments, a real-time chat system in Go backed by Redis and RabbitMQ, and several backend services in C# and Java. I care about clean code, good tests, and understanding how things work under the hood.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

// Reverse chronological: most recent first.
export const experience: Experience[] = [
  {
    company: "Byline Bank",
    role: "Automation Engineer (Intern)",
    period: "Apr 2026 - Present",
    summary:
      "Automation and internal tools for IT and other departments on the Microsoft Power Platform, with PowerShell integrations.",
    bullets: [
      "Automated Active Directory account-lockout response: a PowerShell service on the domain controller detects locked-out users and triggers a Power Automate flow that notifies the user by email and Microsoft Teams and alerts the help desk, with automatic mass-lockout detection when 5 or more unique users lock out within 4 hours. Saves an estimated $20K per year.",
      "Built change monitoring across all external-collaboration SharePoint sites: a PowerShell script subscribes each site to a webhook that fires on any change and posts to a Power Automate flow, automatically emailing the site owner.",
      "Built a Copilot Studio assistant grounded in SharePoint knowledge sources that answers employee questions and opens Freshservice IT tickets directly from chat.",
      "Deliver IT and cross-department automations on the Power Platform used across the company.",
    ],
    stack: [
      "Power Automate",
      "PowerShell",
      "Power Platform",
      "Active Directory",
      "SharePoint",
      "Microsoft Teams",
      "Freshservice",
    ],
  },
  {
    company: "FamilyCore",
    role: "Software Developer",
    period: "Sep 2025 - Apr 2026",
    summary:
      "Full-stack development on a production .NET platform, from REST APIs and databases to background jobs and tests.",
    bullets: [
      "Built the REST API layer in ASP.NET Core with request validation, structured logging, correlation IDs, and policy-based authorization.",
      "Designed a multi-schema PostgreSQL data layer with Entity Framework Core, plus document ingestion, OCR, and search.",
      "Containerized the full stack with Docker Compose (ASP.NET Core, PostgreSQL, MinIO object storage).",
      "Implemented Hangfire background jobs for async document ingestion with automatic retries and status tracking.",
      "Wrote integration tests with xUnit, Testcontainers, and Moq, with per-test data isolation, and built an evaluation suite to catch regressions.",
      "Worked on the AI features too: a planner-and-tool-execution loop over Google Gemini and a retrieval pipeline using pgvector.",
    ],
    stack: [
      "ASP.NET Core (.NET 8)",
      "C#",
      "PostgreSQL",
      "Entity Framework Core",
      "Docker",
      "Hangfire",
      "xUnit",
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  status: "Shipped" | "In progress" | "Side project";
  year: string;
  featured?: boolean;
  stack: string[];
  links: { label: string; href: string }[];
};

// 🔴 TODO: confirm each repo below is pushed and public on your GitHub.
// Any that aren't will 404 until you push them.
export const projects: Project[] = [
  {
    title: "KnowledgeMarket",
    tagline: "Full-stack course marketplace",
    description:
      "A full-stack course marketplace where instructors publish paid courses and learners buy and access them. A React 19 single-page app on an ASP.NET Core API with 40+ endpoints, Stripe payments with webhook-driven fulfillment, JWT auth in HttpOnly cookies with CSRF protection, full-text search, and a Dockerized CI/CD pipeline.",
    status: "Shipped",
    year: "2025",
    featured: true,
    stack: [
      "ASP.NET Core",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "JWT",
      "Docker",
      "GitHub Actions",
    ],
    links: [
      { label: "Repository", href: "https://github.com/NoahStarkenburg/KnowledgeMarket" },
      // 🔴 TODO: deploy it and add a live link. A clickable demo is the single
      //          highest-impact thing you can add to the site.
    ],
  },
  {
    title: "Pulse Chat",
    tagline: "Real-time chat system in Go",
    description:
      "A real-time, multi-room chat system in Go, built to learn distributed systems from the ground up. WebSocket transport, Redis Pub/Sub for cross-instance message fan-out, RabbitMQ with durable workers for async jobs, PostgreSQL for message history, and Prometheus metrics, all containerized for horizontal scaling.",
    status: "In progress",
    year: "2026",
    featured: true,
    stack: ["Go", "WebSockets", "Redis", "RabbitMQ", "PostgreSQL", "Prometheus", "Docker"],
    links: [{ label: "Repository", href: "https://github.com/NoahStarkenburg/pulse-chat" }],
  },
  {
    title: "Conduit",
    tagline: "API gateway in Go",
    description:
      "A self-hostable API gateway in Go that sits in front of LLM providers. Adds response caching, multi-provider routing with circuit breakers, streaming passthrough, per-tenant rate limiting, and Prometheus and OpenTelemetry observability. Ships as a single binary and Docker image.",
    status: "In progress",
    year: "2026",
    stack: ["Go", "Redis", "gRPC", "OpenTelemetry", "Prometheus", "Docker"],
    // 🔴 TODO: add the repo link once it's public.
    links: [],
  },
];

export type SkillGroup = { label: string; items: string[] };

// Ordered by relevance to software-engineer roles. AI/ML is intentionally last.
export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "C#", "Python", "TypeScript", "JavaScript", "SQL", "Go"],
  },
  {
    label: "Backend",
    items: [
      "ASP.NET Core",
      "Entity Framework Core",
      "REST APIs",
      "Spring Boot",
      "Node.js / Express",
      "JWT Auth",
      "Hangfire",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML / CSS"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "DevOps & Infrastructure",
    items: [
      "Docker / Compose",
      "GitHub Actions",
      "CI/CD",
      "AWS (S3, RDS, ECS)",
      "Google Cloud (GCP)",
      "Kubernetes",
      "RabbitMQ",
      "Nginx",
    ],
  },
  {
    label: "Testing & Practices",
    items: [
      "xUnit",
      "Testcontainers",
      "Integration testing",
      "Agile / Scrum",
      "Git",
      "Postman",
      "Swagger / OpenAPI",
    ],
  },
  {
    label: "AI / ML",
    items: ["LLM integration", "RAG pipelines", "pgvector", "Agentic patterns", "LLM evals"],
  },
];

export const nav: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
