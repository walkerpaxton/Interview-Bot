# Backend

This is the API and orchestration layer for Interview Bot. It is built with Node.js (Express/Fastify) or Python (FastAPI). The backend manages user authentication, session state, question selection, answer recording, and orchestrates LLM agents for interviewing and analysis.

## Main Folders
- `src/api/`: REST/GraphQL endpoints
- `src/agents/`: LLM agent logic (interview, analysis)
- `src/db/`: Database models and access (ORM)
- `src/services/`: Business logic (session, scoring, etc.)
- `src/utils/`: Shared backend utilities 