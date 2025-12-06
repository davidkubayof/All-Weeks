import csv

# נתונים כרשימה של רשימות
students_data = [
    ['id', 'name', 'age', 'grade', 'city'],
    [1, 'דני', 20, 85, 'תל אביב'],
    [2, 'שרה', 22, 92, 'ירושלים'],
    [3, 'יוסי', 21, 78, 'חיפה'],
    [4, 'רחל', 23, 88, 'באר שבע'],
    [5, 'משה', 20, 95, 'נתניה']
]

# כתיבה לקובץ CSV
with open('students.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerows(students_data)

print("✓ קובץ CSV נוצר בהצלחה!")