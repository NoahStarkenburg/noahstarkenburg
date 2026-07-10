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
  photo: "/noah.jpg",
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

/**
 * Awards and recognition shown as credibility pills in the hero.
 * Add an `href` (a PR, repo, or write-up) to make a pill a link.
 */
export const highlights: { label: string; href?: string }[] = [
  { label: "3rd place · AWS Cloudathon" },
  // 🔴 TODO: add the Kong repo or your PR URL to make this clickable.
  { label: "Open-source contributor · Kong (3.1k★ Go)" },
];

/** Technologies scrolled in the marquee band. Curated for relevance. */
export const marquee: string[] = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Java",
  "Spring Boot",
  "Go",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "AWS",
  "RabbitMQ",
  "gRPC",
  "Entity Framework Core",
];

/** Short "about" paragraphs. The first is the lead (rendered larger). */
export const about: string[] = [
  "I'm a software engineer who likes building things that ship and hold up: full-stack web apps, backend APIs, and the data and infrastructure underneath them.",
  "I earned my B.S. in Software Development from Grand Canyon University in April 2026, and I've spent the last year working across two software roles. At Byline Bank I build automations and internal tools on the Microsoft Power Platform with PowerShell integrations. At FamilyCore I worked on a production AI application built on .NET: RAG and agent pipelines over Google Gemini, plus the REST APIs, PostgreSQL data layer, and background jobs underneath.",
  "Outside of work I build to learn. I've shipped a full-stack marketplace with Stripe payments, a real-time chat system in Go backed by Redis and RabbitMQ, and several backend services in C# and Java. I care about clean code, good tests, and understanding how things work under the hood.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
  // Optional company logo. Drop the file in /public (e.g. "/logos/byline.png")
  // and set the path here. While empty, a clean company monogram shows instead.
  logo?: string;
};

// Reverse chronological: most recent first.
export const experience: Experience[] = [
  {
    company: "Byline Bank",
    role: "Automation Engineer (Intern)",
    period: "Apr 2026 - Present",
    logo: "/byline-bank.jpg",
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
    logo: "/familycore.jpg",
    summary:
      "Full-stack development on a production AI application built on .NET, from the retrieval and agent pipelines to the APIs, data layer, and infrastructure underneath.",
    bullets: [
      "Built the core AI system: an agent loop over Google Gemini that plans and calls tools, plus a retrieval-augmented generation (RAG) pipeline using pgvector for semantic search over users' documents.",
      "Engineered the document ingestion pipeline end to end (upload, OCR, chunking, and embedding) that feeds retrieval, with Hangfire background jobs handling async processing, automatic retries, and status tracking.",
      "Built the REST API layer in ASP.NET Core with request validation, structured logging, correlation IDs, and policy-based authorization.",
      "Designed a multi-schema PostgreSQL data layer with Entity Framework Core, pairing pgvector similarity search with relational data.",
      "Containerized the full stack with Docker Compose, running AWS S3 for object storage in production and MinIO as a drop-in S3 replacement for local development.",
      "Wrote integration tests with xUnit, Testcontainers, and Moq with per-test data isolation, and built an evaluation suite to catch regressions in the AI pipeline.",
    ],
    stack: [
      "ASP.NET Core (.NET 8)",
      "C#",
      "Google Gemini",
      "RAG",
      "pgvector",
      "PostgreSQL",
      "Entity Framework Core",
      "AWS S3",
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
  // Screenshots shown in the click-through gallery when a card is opened.
  // Drop files in /public (e.g. "/projects/knowledgemarket-1.png") and list
  // them here in order. Until you add any, a branded cover slide shows instead.
  images?: string[];
};

// 🔴 TODO: confirm each repo below is pushed and public on your GitHub.
// Any that aren't will 404 until you push them.
export const projects: Project[] = [
  {
    title: "KnowledgeMarket",
    tagline: "Full-stack course marketplace",
    description:
      "A full-stack course marketplace where instructors publish paid courses and learners buy and access them. A React 19 single-page app on an ASP.NET Core API with 70+ endpoints, Stripe payments with webhook-driven fulfillment, JWT auth in HttpOnly cookies with CSRF protection, full-text search, and a Dockerized CI/CD pipeline.",
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
      // Deploying it? Add the URL here and a "Live demo" button appears automatically:
      // { label: "Live demo", href: "https://your-demo-url" },
      { label: "Repository", href: "https://github.com/NoahStarkenburg/KnowledgeMarket" },
    ],
    images: [
      "/projects/knowledgemarket/01-landing.png",
      "/projects/knowledgemarket/02-courses.png",
      "/projects/knowledgemarket/03-course-detail.png",
      "/projects/knowledgemarket/04-dashboard-learning.png",
      "/projects/knowledgemarket/05-lesson-list.png",
      "/projects/knowledgemarket/06-lesson-view.png",
      "/projects/knowledgemarket/07-creator-dashboard.png",
      "/projects/knowledgemarket/08-creator-studio.png",
    ],
  },
  {
    title: "Pulse Chat",
    tagline: "Horizontally-scalable real-time chat in Go, built from first principles",
    description:
      "A multi-room chat system implementing WebSocket fan-out, Redis Pub/Sub for cross-instance delivery, Redis-backed presence and rate limiting, and Postgres persistence. Each layer is built by hand to understand how real-time distributed systems actually work at the wire level, rather than gluing frameworks together. Session auth, graceful shutdown, ADRs, and CI throughout.",
    status: "In progress",
    year: "2026",
    stack: ["Go", "WebSockets", "Redis", "RabbitMQ", "PostgreSQL", "Distributed Systems"],
    links: [{ label: "Repository", href: "https://github.com/NoahStarkenburg/pulse-chat" }],
    images: [],
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
    images: [],
  },
  {
    title: "Nimbus",
    tagline: "A fun Discord bot for my friends' server",
    description:
      "A Discord bot I built for me and my friends, mostly for fun. It has slash-command games like tic-tac-toe and Connect 4, AI chat and image generation, a coin economy with daily rewards and gambling, XP and leveling, trivia, and everyday utilities like weather and definitions. It can even turn memes into videos and upload them straight to Instagram. Written in Python and self-hostable, so anyone can run their own.",
    status: "Side project",
    year: "2025",
    stack: ["Python", "discord.py", "SQLite", "Google Gemini", "Instagram"],
    links: [
      { label: "Repository", href: "https://github.com/NoahStarkenburg/nimbus-discord-bot" },
    ],
    images: [],
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
