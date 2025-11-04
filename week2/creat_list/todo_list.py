#יצרתי רשימה רייקה
todo_list = ["dav_1","dav_2","dav_3"]
#הפונקציה מוסיפה משימה לרשימה הגלובלית
def add_task(tasks: list, task: str) -> None:
    tasks.append(task)
#הפונקציה מציגה את כל המשימות עם מספר לפי סדר בתנאי שהרשימה רייקה ואם רייקה מדפיס רייק
def show_all_tasks(tasks: list) -> None:
    if tasks:   
        counter = 0
        for i in tasks:
            counter += 1
            print(counter,".",i)
    else:
         print(None , "The list is empty")
# מציג תפריט בחירה למשתמש
def get_user_choice() -> str:
    print("""
        1. add_task
        2. show_all_tasks
        3. exit
        4. del itam
        5. Edit name
        """)
    try:
        user_choice = int(input("enter a num of your choice! "))
        return user_choice
    except:
        print("is not good")
        get_user_choice()
#מוחקת משימה מהרשימה לפי אינדקס
def delete_task(tasks: list, index: int) -> bool:
    if len(tasks) >= index and index >= 1:
        print("del task",index ,tasks.pop(index-1))
        return True 
    return False
#עורכת משימה קיימת ברשימה
def edit_task(tasks: list, index: int, new_task: str) -> bool:
    if len(tasks) >= index and index >= 1:   
        tasks[index-1] = new_task
        return True
    return False






