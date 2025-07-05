from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai_client import ask_medical_assistant

app = FastAPI()

# Cho phép CORS nếu frontend chạy React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class RequestBody(BaseModel):
    message: str

@app.post("/chat")
async def chat_with_assistant(req: RequestBody):
    try:
        result = ask_medical_assistant(req.message)
        return {"success": True, "data": result}
    except Exception as e:
        return {"success": False, "error": str(e)}
