import requests
import os
from dotenv import load_dotenv
import subprocess

load_dotenv()

def ask_question(topic):
    prompt = f"You are a technical interviewer. Your job is to give medium difficulty computer science interview questions about DSA"
    result = subprocess.run(['ollama', 'run', 'llama3', prompt], capture_output = True, text = True)
    if result.returncode == 0:
        print("Ran " + result.stdout.strip())
        return result.stdout.strip()
    else:
        return "Error in getting question"