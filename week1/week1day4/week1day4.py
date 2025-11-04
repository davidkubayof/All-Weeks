# #1
# def my_decorator(func):
#     def wrapper():
#         print("Start function")
#         func()
#         print("end function")
#     return wrapper

# @my_decorator
# def say_whee():
#     print("whee!")

# say_whee()


# #2
# import time 

# def timing(func):
#     def wrapper():
#         start_time = time.time()
#         func()
#         end_time = time.time()
#         print("Running time is" , end_time - start_time)

#     return wrapper

# @timing
# def loop():
#     for i in range(500):
#         print(i+1,end=" ")
# loop()

#3
# def logging(func):
#     def wrapper(*arguments):
#         print(f"that all Arguments: {arguments}")
#         func(*arguments)
#     return wrapper

# @logging
# def print_arguments(*arguments):
#     listi = []
#     for i in arguments:
#         print(i,end=" ")        
# print_arguments("david" , "kobyof")

#4
# def change(func):
#     def myinner():
#        return func().upper()
#     return  myinner

# @change
# def myfunction():
#     return "Hello Sally"

# print(myfunction())

#5




#1///
# def my_doco(func):
#     def warpp():
#         print("Start function")
#         func()
#         print("End function")
        
#     return warpp
    
# @my_doco
# def momo():
#     print("hello")

# momo()



    