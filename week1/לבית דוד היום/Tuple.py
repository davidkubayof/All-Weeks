#1
# def get_name_and_age(name, age): 
#     return name,age
# name, age = get_name_and_age(' דוד ', 25 ) 
# print(f"{name} {age}")
# #2
# def calculate_stats(numbers): 
#     min_val = min(numbers)
#     max_val = max(numbers)
#     avg = sum(numbers) / len(numbers)
#     return avg,min_val,max_val
# avg, min_val, max_val = calculate_stats([10, 20, 30, 40, 50]) 
# print(f'עצוממ: {avg}, םומינימ: {min_val}, םומיסקמ: {max_val}') 
# עצוממ : 30.0 , םומינימ : 10 , םומיסקמ : 50



#3
# def split_full_name(full_name):
    
#     return full_name.split(" ") 

# first, last = split_full_name("david kub") 
# print(f' םש יטרפ : {first}, םש החפשמ : {last}') 
#4
# def swap(a, b): 
#     return b,a
# x, y = swap(5, 10)
# print(x, y)  # 10 5 
#5not good
# def get_coordinates(z,y,x):        
# def print_coordinates():   
# get_coordinates(10,20,30)        
# #x = 10, y = 20, z = 30 

# #6
# def get_scores():     
#     return (95, 87, 92, 88, 90) 

# def process_scores(tup: tuple):
#     (first , *midle, last) = l1
#     print(f"ציון ראשון: {first} \n ציונים באמצע: {midle} \n ציון אחרון: {last}")


# l1 = get_scores()
# process_scores(l1)

# #7
# from collections import namedtuple 
# def create_book(title, author, year):    
#     Book = namedtuple('Book',['title', 'author','year'])
#     return Book(title, author, year)
       
# book = create_book(' יראה רטופ ', ' ג.ק . גנילור ', 1997 ) 
# print(f'{book.title} בתכנ לע ידי {book.author} תנשב {book.year}')

# from collections import namedtuple
# # יצירת ה-Named Tuple עבור ספר
# B = namedtuple('B', ['title', 'author', 'year'])
# # פונקציה שמחזירה את ה-named tuple של ספר
# def create_book(title, author, year):
#     return B(title, author, year)
# # דוגמה לשימוש
# book = create_book('הארי פוטר', 'ג.ק. רולינג', 1997)
# print(f'{book.title} נכתב על ידי {book.author} בשנת {book.year}')



# from collections import namedtuple  # רוצ תא ה-Student namedtuple  def create_student(name, grade, age):     pass def is_excellent(student):     
# pass def display_student(student):
#      pass  שומיש תמגוד: student = create_student(' הרש ', 95 , 16 ) display_student(student) 
# print(f'ןייטצמ: {is_excellent(student)}')