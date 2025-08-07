from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.api.interview_routes import router

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)