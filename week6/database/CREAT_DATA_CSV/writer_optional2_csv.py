import csv

# נתונים כרשימה של מילונים
students = [
    {'id': 1, 'name': 'דני', 'age': 20, 'grade': 85, 'city': 'תל אביב'},
    {'id': 2, 'name': 'שרה', 'age': 22, 'grade': 92, 'city': 'ירושלים'},
    {'id': 3, 'name': 'יוסי', 'age': 21, 'grade': 78, 'city': 'חיפה'}
]

# הגדרת שמות העמודות
fieldnames = ['id', 'name', 'age', 'grade', 'city']

# כתיבה עם DictWriter
with open('students_dict.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    # כתיבת כותרות
    writer.writeheader()
    
    # כתיבת הנתונים
    writer.writerows(students)

print("✓ קובץ נוצר עם DictWriter")