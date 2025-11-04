# לוקח מתיקיה פונקציות ומשתנים
from todo_list import add_task , todo_list ,show_all_tasks ,get_user_choice ,delete_task,edit_task


#פונקציה ראשית להפעלת כל הקוד 
def main() -> None:
    while True:
        
        # מקבלת מספר מהמשתמש ומחזירה
        choice = get_user_choice()
        
        if choice == 1:
            #מבקשת מילה מהמשתמש
            add = input("enter a word: ")
            #מסויפה משימה לרשימה 
            add_task(todo_list,add)
        elif choice == 2:
            #מציגה את הרשימה למשתמש
            show_all_tasks(todo_list)
            #יוצא מהלולאה
        elif choice == 3:
            print("you Exit the code")
            break
        #מוחקת משימה מהרשימה לפי אינדקס
        elif choice == 4:
            user_enter = int(input("enter a index: "))
            print(delete_task(todo_list,user_enter)) 

        elif choice == 5:    
            new_word = input("enter a name: ")
            index_edit = int(input("enter a number of index:  "))
            print(edit_task(todo_list,index_edit,new_word))
            print(todo_list)
        #הכניס מספר מחוץ לתפריט
        else:
            print("you enter wornge number")


#תנאי ליבוא מודלים
if __name__ == "__main__":
    main()