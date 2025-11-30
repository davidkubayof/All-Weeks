from fastapi import FastAPI, HTTPException, Request, UploadFile, File, Response
from pydantic import BaseModel, EmailStr
import sqlite3
from datetime import datetime
import uvicorn
import csv
import io

app = FastAPI(title="Car Owner Management API", version="1.0.0")

# Middleware שמדפיס כל בקשה שנכנסת לשרת
@app.middleware("http")
def print_middleware(request: Request, call_next):
    # מדפיס את סוג הבקשה (GET/POST/PUT...) ואת הנתיב
    print(f"Request: {request.method} {request.url.path}")
    response = call_next(request)
    return response

DB_FILE = "car_owners_db.sqlite"

# מודל של בעל רכב (לקריאה והצגה)
class CarOwner(BaseModel):
    id: int | None = None
    name: str
    age: int
    email: str
    created_at: str | None = None

# מודל לעדכון בעל רכב (PUT)
class CarOwnerUpdate(BaseModel):
    name: str | None = None
    age: int | None = None
    email: str | None = None

# מודלים לרכב
class Car(BaseModel):
    id: int | None = None
    brand: str
    model: str
    year: int
    color: str
    owner_id: int
    created_at: str | None = None

class CarUpdate(BaseModel):
    brand: str | None = None
    model: str | None = None
    year: int | None = None
    color: str | None = None
    owner_id: int | None = None

# פונקציה שמאתחלת את בסיס הנתונים ויוצרת טבלאות במידה ולא קיימות
def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # יצירת טבלת בעלי רכבים
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS car_owners (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            email TEXT NOT NULL UNIQUE,
            created_at TEXT
        )
    """)
    
    # יצירת טבלת רכבים עם מפתח זר לבעל הרכב
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS cars (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            brand TEXT NOT NULL,
            model TEXT NOT NULL,
            year INTEGER NOT NULL,
            color TEXT NOT NULL,
            owner_id INTEGER NOT NULL,
            created_at TEXT,
            FOREIGN KEY (owner_id) REFERENCES car_owners(id)
        )
    """)
    
    conn.commit()
    conn.close()

# אתחול בסיס הנתונים כשמתחיל הריצה
init_db()

# פונקציה שמחזירה חיבור לבסיס הנתונים
def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row  # מאפשר גישה לעמודות לפי שם
    return conn

# ממיר שורה מבסיס הנתונים למילון
def row_to_dict(row, table_name: str = "car_owners"):
    if table_name == "car_owners":
        return {
            'id': row['id'],
            'name': row['name'],
            'age': row['age'],
            'email': row['email'],
            'created_at': row['created_at']
        }
    else:  # cars
        return {
            'id': row['id'],
            'brand': row['brand'],
            'model': row['model'],
            'year': row['year'],
            'color': row['color'],
            'owner_id': row['owner_id'],
            'created_at': row['created_at']
        }

# פונקציה שמחזירה את כל בעלי הרכבים
def read_car_owners() -> list[dict]:
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # שולף את כל הרשומות (שכחת פה את הפקודה בפונקציה המקורית, צריך execute)
    cursor.execute("SELECT * FROM car_owners")
    rows = cursor.fetchall()
    conn.close()

    return [row_to_dict(row) for row in rows]

# פונקציה שמחזירה בעל רכב לפי ID
def get_car_owner_by_id(owner_id: int) -> dict | None:
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM car_owners WHERE id = ?", (owner_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return row_to_dict(row)
    return None

# פונקציה שיוצרת בעל רכב חדש בבסיס הנתונים
def create_car_owner_in_db(owner: CarOwner) -> dict:
    conn = get_db_connection()
    cursor = conn.cursor()

    now = datetime.now().isoformat()  # תאריך ושעה נוכחיים
    
    cursor.execute("""
        INSERT INTO car_owners (name, age, email, created_at)
        VALUES (?, ?, ?, ?)
    """, (owner.name, owner.age, owner.email, now))
    
    # שולף את השורה שנוצרה
    row_id = cursor.lastrowid
    cursor.execute("SELECT * FROM car_owners WHERE id = ?", (row_id,))
    row = cursor.fetchone()
    
    conn.commit()
    conn.close()
    
    return row_to_dict(row)

# פונקציה שמעדכנת בעל רכב לפי ID
def update_car_owner_in_db(owner_id: int, owner_update: CarOwnerUpdate) -> dict:
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # שולף את השורה הקיימת
    cursor.execute("SELECT * FROM car_owners WHERE id = ?", (owner_id,))
    row = cursor.fetchone()
    
    if not row:
        conn.close()
        return None
    
    update_owner = owner_update.model_dump(exclude_unset=True)
    set_clauses = []
    values = []

    # לכל שדה שהתקבל ב-JSON מוסיפים אותו לעדכון
    if 'name' in update_owner:
        set_clauses.append("name = ?")
        values.append(update_owner['name'])
    
    if 'age' in update_owner:
        set_clauses.append("age = ?")
        values.append(update_owner['age'])
    
    if 'email' in update_owner:
        set_clauses.append("email = ?")
        values.append(update_owner['email'])
     
    # מוסיפים את ה-ID של בעל הרכב בסוף
    values.append(owner_id)
    query = f"UPDATE car_owners SET {', '.join(set_clauses)} WHERE id = ?"
    cursor.execute(query, values)
    
    conn.commit()
    conn.close() 
    
    # מחזיר את הרשומה המעודכנת
    return get_car_owner_by_id(owner_id)

# פונקציה שמוחקת בעל רכב לפי ID
def delete_car_owner_from_db(owner_id: int) -> bool:
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # בודק אם הרשומה קיימת
    cursor.execute("SELECT id FROM car_owners WHERE id = ?", (owner_id,))
    if not cursor.fetchone():
        conn.close()
        return None
    
    # מוחק את הרשומה
    cursor.execute("DELETE FROM car_owners WHERE id = ?", (owner_id,))
    conn.commit()
    conn.close()
    
    return True

# ===========================
# Endpointים של FastAPI עם הסברים בעברית
# ===========================

# Root endpoint שמחזיר הודעת ברכה
@app.get("/")
def read_root():
    """Root endpoint"""
    return {"message": "Welcome to Car Owner Management API", "version": "1.0.0"}

# מחזיר את כל בעלי הרכבים
@app.get("/car-owners", response_model=list[CarOwner])
def get_all_car_owners():
    """Get all car owners"""
    return read_car_owners()

# מחזיר בעל רכב לפי ID
@app.get("/car-owners/{owner_id}", response_model=CarOwner)
def get_car_owner(owner_id: int):
    """Get a specific car owner by ID"""
    return get_car_owner_by_id(owner_id)

# יוצר בעל רכב חדש
@app.post("/car-owners", response_model=CarOwner, status_code=201)
def create_car_owner(owner: CarOwner):
    """Create a new car owner"""
    return create_car_owner_in_db(owner)

# ===========================
# פונקציה לעדכון בעל רכב עם הסבר שורה-שורה
@app.put("/car-owners/{owner_id}", response_model=CarOwner)
def update_car_owner(owner_id: int, owner_update: CarOwnerUpdate):
    """
    Update an existing car owner
    """
    # קורא לפונקציה שמעדכנת את בעל הרכב במסד
    updated_owner = update_car_owner_in_db(owner_id, owner_update)
    
    # אם אין בעל רכב עם ID זה, מחזיר 404
    if not updated_owner:
        raise HTTPException(status_code=404, detail="Car owner not found")
    
    # מחזיר את הרשומה המעודכנת
    return updated_owner

# ===========================
# פונקציה למחיקת בעל רכב עם הסבר שורה-שורה
@app.delete("/car-owners/{owner_id}", status_code=204)
def delete_car_owner(owner_id: int):
    """
    Delete a car owner
    """
    # מנסה למחוק את הרשומה במסד
    deleted = delete_car_owner_from_db(owner_id)
    
    # אם הרשומה לא קיימת, מחזיר 404
    if deleted is None:
        raise HTTPException(status_code=404, detail="Car owner not found")

    # מחזיר 204 (No Content) אם ההצלחה
    return Response(status_code=204)

# ====================== חלק 4 - פונקציות CRUD לטבלת cars ======================

def read_cars(owner_id: int | None = None) -> list[dict]:
    """
    מחזירה את כל הרכבים מהטבלה.
    אם owner_id נשלח – תסנן רק רכבים של בעל הרכב הזה.
    """
    conn = get_db_connection()
    cursor = conn.cursor()

    if owner_id is None:
        cursor.execute("SELECT * FROM cars")
    else:
        cursor.execute("SELECT * FROM cars WHERE owner_id = ?", (owner_id,))

    rows = cursor.fetchall()
    conn.close()

    return [row_to_dict(row, "cars") for row in rows]


def get_car_by_id(car_id: int) -> dict | None:
    """
    מחזירה רכב בודד לפי מזהה (ID).
    אם הרכב לא קיים – נוחזר None.
    """
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM cars WHERE id = ?", (car_id,))
    row = cursor.fetchone()

    conn.close()
    if row:
        return row_to_dict(row, "cars")
    return None


def validate_owner_exists(owner_id: int) -> bool:
    """
    בודקת האם בעל רכב קיים בטבלת car_owners.
    מחזירה True אם קיים, אחרת False.
    שימושי לפני הכנסת רכב חדש או עדכון owner_id.
    """
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT id FROM car_owners WHERE id = ?", (owner_id,))
    exists = cursor.fetchone() is not None

    conn.close()
    return exists


def create_car_in_db(car: Car) -> dict:
    """
    יוצרת רכב בטבלת cars.
    לפני ההכנסה - בודקת האם בעל הרכב (owner_id) קיים.
    אם לא קיים - נזרקת שגיאת HTTP 400.
    """
    if not validate_owner_exists(car.owner_id):
        raise HTTPException(status_code=400, detail="Owner not found")

    conn = get_db_connection()
    cursor = conn.cursor()

    now = datetime.now().isoformat()

    cursor.execute("""
        INSERT INTO cars (brand, model, year, color, owner_id, created_at)
        VALUES (?, ?, ?, ?, ?, ?)
        RETURNING *
    """, (car.brand, car.model, car.year, car.color, car.owner_id, now))

    row = cursor.fetchone()
    conn.commit()
    conn.close()

    return row_to_dict(row, "cars")


def update_car_in_db(car_id: int, car_update: CarUpdate) -> dict | None:
    """
    מעדכנת רכב קיים.
    בונה משפט SET דינמי - כלומר משנה רק את השדות שנשלחו.
    אם owner_id נשלח בעדכון – נבדוק שהוא קיים.
    אם הרכב לא נמצא - מחזירה None.
    """
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM cars WHERE id = ?", (car_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        return None

    update_data = car_update.model_dump(exclude_unset=True)
    set_clauses = []
    values = []

    if "brand" in update_data:
        set_clauses.append("brand = ?")
        values.append(update_data["brand"])

    if "model" in update_data:
        set_clauses.append("model = ?")
        values.append(update_data["model"])

    if "year" in update_data:
        set_clauses.append("year = ?")
        values.append(update_data["year"])

    if "color" in update_data:
        set_clauses.append("color = ?")
        values.append(update_data["color"])

    if "owner_id" in update_data:
        if not validate_owner_exists(update_data["owner_id"]):
            raise HTTPException(status_code=400, detail="Owner not found")
        set_clauses.append("owner_id = ?")
        values.append(update_data["owner_id"])

    values.append(car_id)

    query = f"UPDATE cars SET {', '.join(set_clauses)} WHERE id = ?"
    cursor.execute(query, values)

    conn.commit()
    conn.close()

    return get_car_by_id(car_id)


def delete_car_from_db(car_id: int) -> bool | None:
    """
    מוחקת רכב מהמסד לפי ID.
    מחזירה:
        True  - אם נמחק
        None - אם הרכב לא קיים
    """
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT id FROM cars WHERE id = ?", (car_id,))
    row = cursor.fetchone()
    if row is None:
        conn.close()
        return None

    cursor.execute("DELETE FROM cars WHERE id = ?", (car_id,))
    conn.commit()
    conn.close()

    return True


# ====================== חלק 5 - נתיבי API לרכבים ======================

@app.get("/cars", response_model=list[Car])
def get_all_cars(owner_id: int | None = None):
    """
    נקודת קצה שמחזירה את כל הרכבים.
    אם מגיע owner_id – מוחזרת רק רשימת הרכבים של אותו בעלים.
    """
    return read_cars(owner_id)


@app.get("/cars/{car_id}", response_model=Car)
def get_car(car_id: int):
    """
    נקודת קצה שמחזירה רכב ספציפי לפי מזהה.
    אם הרכב לא נמצא – מחזיר 404.
    """
    car = get_car_by_id(car_id)
    if car is None:
        raise HTTPException(status_code=404, detail="Car not found")
    return car


@app.post("/cars", response_model=Car, status_code=201)
def create_car(car: Car):
    """
    נקודת קצה ליצירת רכב חדש.
    בודקת לפני כן שה-owner_id קיים.
    """
    return create_car_in_db(car)


@app.put("/cars/{car_id}", response_model=Car)
def update_car(car_id: int, car_update: CarUpdate):
    """
    נקודת קצה לעדכון רכב.
    אם הרכב לא קיים – תחזיר 404.
    """
    updated_car = update_car_in_db(car_id, car_update)
    if updated_car is None:
        raise HTTPException(status_code=404, detail="Car not found")
    return updated_car


@app.delete("/cars/{car_id}", status_code=204)
def delete_car(car_id: int):
    """
    נקודת קצה למחיקת רכב.
    אם לא קיים – מחזירה 404.
    אם נמחק בהצלחה – 204 ללא תוכן.
    """
    deleted = delete_car_from_db(car_id)
    if deleted is None:
        raise HTTPException(status_code=404, detail="Car not found")

    return Response(status_code=204)


# פונקציה שמייצאת את כל בעלי הרכב לקובץ CSV (מחזירה bytes)
def export_car_owners_to_csv() -> bytes:
    # פותח חיבור למסד הנתונים
    conn = get_db_connection()
    cur = conn.cursor()
    
    # שולף את כל בעלי הרכב לפי סדר ID
    cur.execute("SELECT id, name, age, email, created_at FROM car_owners ORDER BY id")
    rows = cur.fetchall()
    conn.close()

    # רשימת כותרות לעמודות בקובץ CSV
    fieldnames = ["id", "name", "age", "email", "created_at"]
    
    # יצירת אובייקט StringIO לזיכרון (כדי לכתוב CSV)
    output = io.StringIO()
    
    # יוצר writer של CSV עם הכותרות
    writer = csv.DictWriter(output, fieldnames=fieldnames)
    writer.writeheader()  # כותב את כותרות העמודות
    
    # כותב כל שורה ל-CSV
    for r in rows:
        writer.writerow({fn: r[fn] for fn in fieldnames})
    
    # הופך את המחרוזת לבייטים עם קידוד UTF-8
    csv_bytes = output.getvalue().encode("utf-8-sig")
    output.close()
    return csv_bytes


# פונקציה שמייצאת רכבים לקובץ CSV, אפשר לפי owner_id מסוים
def export_cars_to_csv(owner_id: int | None = None) -> bytes:
    # פותח חיבור למסד הנתונים
    conn = get_db_connection()
    cur = conn.cursor()
    
    # אם לא נשלח owner_id, שולף את כל הרכבים
    if owner_id is None:
        cur.execute("SELECT id, brand, model, year, color, owner_id, created_at FROM cars ORDER BY id")
    else:
        # אם יש owner_id, שולף רק את הרכבים של אותו בעל רכב
        cur.execute("SELECT id, brand, model, year, color, owner_id, created_at FROM cars WHERE owner_id = ? ORDER BY id", (owner_id,))
    
    rows = cur.fetchall()
    conn.close()

    # רשימת כותרות לעמודות
    fieldnames = ["id", "brand", "model", "year", "color", "owner_id", "created_at"]
    
    # יצירת אובייקט StringIO לזיכרון
    output = io.StringIO()
    
    # יוצר writer של CSV עם הכותרות
    writer = csv.DictWriter(output, fieldnames=fieldnames)
    writer.writeheader()
    
    # כותב כל שורה ל-CSV
    for r in rows:
        writer.writerow({fn: r[fn] for fn in fieldnames})
    
    # הופך את המחרוזת לבייטים עם קידוד UTF-8
    csv_bytes = output.getvalue().encode("utf-8-sig")
    output.close()
    return csv_bytes

# ===========================
# פונקציה לייצוא CSV של בעלי הרכב עם הסבר שורה-שורה
@app.get("/car-owners/export-csv")
def download_car_owners_csv():
    """
    Export all car owners to CSV
    """
    # יוצר את קובץ ה-CSV בבייטים
    csv_bytes = export_car_owners_to_csv()
    
    # יוצר שם קובץ עם תאריך ושעה נוכחיים
    filename = f"car_owners_{datetime.utcnow().strftime('%Y%m%d_%H%M%S')}.csv"
    
    # הגדרות headers כדי שהדפדפן ידע להוריד את הקובץ
    headers = {"Content-Disposition": f'attachment; filename="{filename}"'}
    
    # מחזיר את הקובץ
    return Response(content=csv_bytes, media_type="text/csv", headers=headers)

# ===========================
# פונקציה לייצוא CSV של רכבים עם הסבר שורה-שורה
@app.get("/cars/export-csv")
def download_cars_csv(owner_id: int | None = None):
    """
    Export cars to CSV, optionally filtered by owner_id
    """
    # יוצר את קובץ ה-CSV בבייטים, עם פילטר אם התקבל owner_id
    csv_bytes = export_cars_to_csv(owner_id=owner_id)
    
    # מוסיף סיומת בשם הקובץ לפי owner_id אם קיים
    suffix = f"_owner{owner_id}" if owner_id is not None else ""
    
    # יוצר שם קובץ עם תאריך ושעה נוכחיים
    filename = f"cars{suffix}{datetime.utcnow().strftime('%Y%m%d%H%M%S')}.csv"
    
    # הגדרות headers כדי שהדפדפן ידע להוריד את הקובץ
    headers = {"Content-Disposition": f'attachment; filename="{filename}"'}
    
    # מחזיר את הקובץ
    return Response(content=csv_bytes, media_type="text/csv", headers=headers)
