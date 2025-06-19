# Interview Bot: Project Structure & Architecture

This project implements a scalable, modular mock interview platform using a microservices-inspired architecture. Below is the initial directory structure and a description of each component.

## Project Structure

```
Interview-Bot/
│
├── frontend/                # React/Next.js UI for users
│   ├── components/          # Reusable UI components (chat, dropdowns, timer, etc.)
│   ├── pages/               # Next.js pages (main, feedback, history, etc.)
│   ├── styles/              # Tailwind or CSS modules
│   ├── utils/               # Frontend helpers (API, timer, etc.)
│   └── ...
│
├── backend/                 # API and orchestration layer
│   ├── src/
│   │   ├── api/             # REST/GraphQL endpoints
│   │   ├── agents/          # LLM agent logic (interview, analysis)
│   │   ├── db/              # DB models and access (ORM)
│   │   ├── services/        # Business logic (session, scoring, etc.)
│   │   ├── utils/           # Shared backend utilities
│   │   └── ...
│   ├── Dockerfile
│   └── ...
│
├── scraper/                 # Python service for scraping interview questions
│   ├── src/
│   │   ├── spiders/         # Scrapy spiders or scraping scripts
│   │   ├── pipelines/       # Data cleaning, deduplication, diffing
│   │   ├── utils/           # Helper functions (proxies, delays, etc.)
│   │   └── ...
│   ├── requirements.txt
│   └── ...
│
├── database/                # DB schema, migrations, seed data
│   ├── migrations/
│   ├── seed/
│   ├── schema.sql           # SQL or NoSQL schema
│   └── ...
│
├── docker-compose.yml       # Multi-service orchestration
├── .env.example             # Example environment variables
├── README.md                # This file
└── ...
```

## Component Responsibilities

- **frontend/**: User-facing web app. Implements chat UI, dropdowns, timer, feedback/results, and history. Communicates with backend via REST/GraphQL/WebSocket APIs.
- **backend/**: Node.js (Express/Fastify) or Python (FastAPI) API. Handles user auth, session state, question selection, answer recording, and LLM agent orchestration. Talks to DB and LLM APIs.
- **scraper/**: Python (Scrapy/requests/BeautifulSoup/Selenium) service. Periodically scrapes new questions/solutions from LeetCode, GeeksforGeeks, etc. Only commits new/updated content to DB.
- **database/**: DB schema, migrations, and seed data. Supports both relational (PostgreSQL) and optional vector DB (for semantic search/RAG).
- **docker-compose.yml**: Defines all services for local development and deployment.

## Technologies
- **Frontend**: React/Next.js, Tailwind CSS, react-chat-elements
- **Backend**: Node.js (Express/Fastify) or Python (FastAPI), JWT auth, REST/GraphQL, OpenAI/Anthropic API
- **Scraper**: Python, Scrapy/requests/BeautifulSoup, Selenium
- **Database**: PostgreSQL or MongoDB, optional Pinecone/Weaviate for vector search
- **Infra**: Docker, Docker Compose, (Kubernetes-ready)

---

See each subdirectory for further setup and implementation details.