def print_menu():
    menu = 'Menu: \n\n' \
    '   1: show list\n' \
    '   2: add task\n' \
    '   3: update task\n' \
    '   4: delete task\n' \
    '   5: rename task\n' \
    '   6: Exit'
    print(menu)



def is_valid(choice):
    if not choice.isdigit() or len(choice) > 1 or 1 > int(choice) or int(choice) > 6:
        return False
    return True




def input_menu():
    choice = input('Please enter a number 1- 6: ')
    while not is_valid(choice):
        choice = input('Invalid input, Try again please: ')
    return choice


print(input_menu())