# 🧠 String Operations API (FastAPI)

שרת FastAPI עם מספר נקודות קצה (Endpoints) לעיבוד מחרוזות.  
כל Endpoint מקבל מחרוזת בדרך אחרת (`Query` / `Path` / `Body`), מבצע עליה עיבוד שונה, ומחזיר JSON.

---

## 📁 מבנה הפרויקט


---

## ⚙️ התקנה והפעלה

### 1️⃣ יצירת ריפוזיטורי ו־Clone
```bash
git clone <YOUR_REPO_URL>
cd <YOUR_REPO_NAME>
2️⃣ יצירת סביבה וירטואלית
python3 -m venv .venv

Windows (PowerShell):
.venv\Scripts\Activate.ps1

3️⃣ התקנת ספריות נדרשות
pip install fastapi uvicorn
pip install fastapi[standard]
4️⃣ הפעלת השרת
uvicorn main:app --reload
או 
fastapi dev main.py
curl -s -X POST http://127.0.0.1:8000/remove-vowels \
     -H "Content-Type: application/json" \
     -d '{"text":"Education"}'
git checkout -b feature/reverse
