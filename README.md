# Noah Starkenburg

Software developer in the Chicago area, mostly in C# and .NET. I build full-stack web apps and backend services, and I'm picking up Go on the side. Currently an automation engineer at Byline Bank, with a 2026 B.S. in Software Development from Grand Canyon University.

![C#](https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=csharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=flat-square)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

## Projects

**[KnowledgeMarket](https://github.com/NoahStarkenburg/knowledge-market)** is a full-stack course marketplace, [live on Azure](https://knowledgemarket-bbedacandbcbajbu.z01.azurefd.net): a .NET 9 API with an Angular front end over SQL Server, Stripe payments via signed webhooks, JWT auth in HttpOnly cookies with CSRF protection, and infrastructure in Terraform. Tested with xUnit, Testcontainers and Vitest. It's my long-running portfolio project, where I build whatever I'm learning next.

**[pulse-chat](https://github.com/NoahStarkenburg/pulse-chat)** is a real-time, multi-room chat server in Go that runs as several instances behind a load balancer, fanning messages out between them with Redis Pub/Sub. It has WebSocket rooms, session auth with sessions in Redis, Postgres message history, presence and rate limiting.

**[awesome-collections](https://github.com/NoahStarkenburg/awesome-collections)** holds three Python tools for AI assistants: an MCP server that searches screenshots by OCR text and visual similarity, an MCP server that builds a local timeline of your activity, and a Claude Code skill that finds the lines a dependency upgrade will break.

**[Personal site](https://noahstarkenburg.vercel.app)** ([source](https://github.com/NoahStarkenburg/noahstarkenburg)), built with Next.js and Tailwind.

## Open source

Merged contributions:

- **[mikro-orm](https://github.com/mikro-orm/mikro-orm/pull/7944)**: fixed schema generation so table-per-type inheritance no longer copies a parent's check constraints onto child tables.
- **[go-git](https://github.com/go-git/go-git/pull/2219)**: fixed `RemoveGlob` for files at the repository root.
- **[kong](https://github.com/alecthomas/kong/pull/614)**: let a command node with a `Run()` method run without a subcommand.

## Reach me

[Website](https://noahstarkenburg.vercel.app) · [LinkedIn](https://www.linkedin.com/in/noah-starkenburg-7babb8332) · noahstarkenburg@gmail.com
