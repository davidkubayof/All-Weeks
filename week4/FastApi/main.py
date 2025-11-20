# main.py
from fastapi import FastAPI, Query, Path, Body
from fastapi.responses import JSONResponse
from string_ops import (
    reverse_str,
    to_upper,
    remove_vowels,
    remove_every_third,
    letter_counts_map,
)

app = FastAPI(title="String Operations API")

# =============================
# 1. Reverse — הפיכת מחרוזת
# =============================
@app.get("/reverse")
def reverse_endpoint(text: str = Query(..., description="המחרוזת להפיכה")):
    reversed_text = reverse_str(text)
    return JSONResponse(content={"original": text, "reversed_text": reversed_text})


# =============================
# 2. Uppercase — המרה לאותיות גדולות
# =============================
@app.get("/uppercase/{text}")
def uppercase_endpoint(text: str = Path(..., description="המחרוזת להמרה")):
    upper = to_upper(text)
    return JSONResponse(content={"original": text, "uppercased": upper})


# =============================
# 3. Remove Vowels — מחיקת תנועות
# =============================
@app.post("/remove-vowels")
def remove_vowels_endpoint(payload: dict = Body(...)):
    text = payload.get("text", "")
    without_vowels = remove_vowels(text)
    return JSONResponse(content={"original": text, "without_vowels": without_vowels})


# =============================
# 4. Remove Every Third — מחיקת כל אות שלישית
# =============================
@app.post("/remove-every-third")
def remove_every_third_endpoint(payload: dict = Body(...)):
    text = payload.get("text", "")
    result, removed_indexes, removed_chars = remove_every_third(text)
    return JSONResponse(
        content={
            "original": text,
            "result": result,
            "removed_indexes": removed_indexes,
            "removed_chars": removed_chars,
        }
    )


# =============================
# 5. Letter Counts — ספירת תדירות תווים ושמירה ל-JSON
# =============================
@app.post("/letter-counts")
def letter_counts_endpoint(payload: dict = Body(...)):
    text = payload.get("text", "")
    counts = letter_counts_map(text)
    return JSONResponse(
        content={
            "original": text,
            "counts": counts,
            "saved_to": "data/letter_counts.json",
        }
    )
