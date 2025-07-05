import os
import json
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENROUTER_API_KEY"), base_url="https://openrouter.ai/api/v1")

def ask_medical_assistant(message: str) -> dict:
    prompt = f"""
Bạn là một bác sĩ AI thông minh. Dưới đây là thông tin từ bệnh nhân:
{message}

Hãy trả lời đúng theo cấu trúc JSON sau, không được thêm chữ nào khác:
{{
  "diagnosis": "...",  // Dự đoán bệnh
  "test_suggestion": "...",  // Gợi ý xét nghiệm
  "specialist": "...",  // Chuyên khoa phù hợp
  "appointment": "..."  // Gợi ý lịch khám (ví dụ: sáng thứ Ba tuần sau)
}}

Chỉ trả về JSON, không được viết thêm lời giải thích.
"""

    response = client.chat.completions.create(
        model="mistralai/mistral-7b-instruct:free",  # hoặc bất kỳ model nào bạn thấy tốt
        messages=[
            {"role": "system", "content": "Bạn là trợ lý y tế thông minh."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7
    )

    content = response.choices[0].message.content

    # Chuyển JSON từ string -> dict
    return json.loads(content)
