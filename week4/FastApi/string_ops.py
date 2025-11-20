# string_ops.py
import json
from collections import Counter
from pathlib import Path

DATA_DIR = Path("data")
DATA_DIR.mkdir(exist_ok=True)
LETTER_COUNTS_FILE = DATA_DIR / "letter_counts.json"


def reverse_str(s: str) -> str:
    """הופך מחרוזת"""
    return s[::-1]


def to_upper(s: str) -> str:
    """ממיר מחרוזת לאותיות גדולות"""
    return s.upper()


def remove_vowels(s: str) -> str:
    """מסיר את התנועות A,E,I,O,U (כולל lowercase)"""
    vowels = set("aeiouAEIOU")
    return "".join(ch for ch in s if ch not in vowels)


def remove_every_third(s: str) -> tuple[str, list[int], list[str]]:
    """
    מוחק כל תו שלישי (3,6,9...) ומחזיר:
    - המחרוזת החדשה
    - רשימת האינדקסים שנמחקו
    - רשימת התווים שנמחקו
    """
    removed_indexes = []
    removed_chars = []
    result = []

    for i, ch in enumerate(s, start=1):
        if i % 3 == 0:
            removed_indexes.append(i)
            removed_chars.append(ch)
        else:
            result.append(ch)

    return "".join(result), removed_indexes, removed_chars


def letter_counts_map(s: str) -> dict[str, int]:
    """סופר תדירות תווים ושומר לקובץ JSON"""
    s_lower = s.lower()
    counts = dict(Counter(s_lower))
    with open(LETTER_COUNTS_FILE, "w", encoding="utf-8") as f:
        json.dump(counts, f, ensure_ascii=False, indent=2)
    return counts
