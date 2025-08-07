from fastapi import APIRouter, Request
from src.agents.interview_agent import ask_question
#from src.agents.analysis_agent import analyze_answer

router = APIRouter() #router that holds enpoints

@router.post("/api/interview/question") #endpoint for getting a question
async def get_question(request: Request):
    data = await request.json()
    topic = data.get("topic", "data structures")
    question = ask_question(topic)
    return {"question": question}

#@router.post("/api/interview/analyze") #ednpoint for analyzing an answer
#async def analyze(request: Request):
    data = await request.json()
    question = data["question"]
    answer = data["answer"]
    analysis = analyze_answer(question, answer)
    return analysis