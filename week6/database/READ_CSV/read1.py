import csv

# קריאה פשוטה
with open('students.csv', 'r', encoding='utf-8') as file:
    reader = csv.reader(file)
    
    # קריאת כל השורות
    for row in reader:
        print(row)