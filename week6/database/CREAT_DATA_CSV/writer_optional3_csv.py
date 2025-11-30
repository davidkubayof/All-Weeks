import csv

data = [
    ['שם', 'גיל', 'עיר'],
    ['דני', '20', 'תל אביב'],
    ['שרה', '22', 'ירושלים']
]

# CSV עם נקודה-פסיק (;) כמפריד
with open('students_semicolon.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file, delimiter=';')
    writer.writerows(data)

# CSV עם TAB כמפריד (TSV)
with open('students_tab.tsv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file, delimiter='\t')
    writer.writerows(data)

# CSV עם pipe (|) כמפריד
with open('students_pipe.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file, delimiter='|')
    writer.writerows(data)

print("✓ נוצרו קבצים עם מפרידים שונים")