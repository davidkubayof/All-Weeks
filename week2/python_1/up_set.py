# def init_list():

#     task_list = []
#     return task_list

# Task List Manager

def show_menu():
    print("\n==== Task List Manager ====")
    print("1. Show all tasks")
    print("2. Add a task")
    print("3. Update a task")
    print("4. Delete a task")
    print("5. Exit")


def show_tasks(tasks):
    if not tasks:
        print("\nNo tasks available.")
    else:
        print("\nYour Tasks:")
        for i, task in enumerate(tasks, start=1):
            print(f"{i}. {task}")


def add_task(tasks):
    task = input("\nEnter the task to add: ").strip()
    if task:
        tasks.append(task)
        print(f"✅ Task '{task}' added successfully.")
    else:
        print("⚠️ Task cannot be empty!")


def update_task(tasks):
    show_tasks(tasks)
    if not tasks:
        return
    try:
        task_no = int(input("\nEnter the task number to update: "))
        if 1 <= task_no <= len(tasks):
            new_task = input("Enter the new task description: ").strip()
            if new_task:
                tasks[task_no - 1] = new_task
                print("✅ Task updated successfully.")
            else:
                print("⚠️ Task cannot be empty!")
        else:
            print("⚠️ Invalid task number.")
    except ValueError:
        print("⚠️ Please enter a valid number.")


def delete_task(tasks):
    show_tasks(tasks)
    if not tasks:
        return
    try:
        task_no = int(input("\nEnter the task number to delete: "))
        if 1 <= task_no <= len(tasks):
            removed = tasks.pop(task_no - 1)
            print(f"🗑️ Task '{removed}' deleted successfully.")
        else:
            print("⚠️ Invalid task number.")
    except ValueError:
        print("⚠️ Please enter a valid number.")


def main():
    tasks = []
    while True:
        show_menu()
        choice = input("\nEnter your choice (1-5): ")

        if choice == "1":
            show_tasks(tasks)
        elif choice == "2":
            add_task(tasks)
        elif choice == "3":
            update_task(tasks)
        elif choice == "4":
            delete_task(tasks)
        elif choice == "5":
            print("👋 Exiting Task Manager. Goodbye!")
            break
        else:
            print("⚠️ Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
