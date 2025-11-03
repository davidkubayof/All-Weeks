# class Car:
#     def __init__(self, make , model, year):
#         self.make = make
#         self.model = model
#         self.year = year

#     def get_car_info(self):
#         return f"make: {self.make},model {self.model},year{self.year}"


# car1 = Car("Tyota","Camre","2025")
#
# 
# print(car1.make)
# print(car1.year)
# print(car1.model)
# 
# car1.color = "black"
# print(car1.color)
# 
# del car1.color
# print(car1.color)







# class BankAccount:
#     def __init__(self, account_number , balance):
#         self.account_number = account_number
#         self.balance = balance

#     def deposit(self,amont):
#         self.balance += amont

#     def withdraw(self, amont):
#         if self.balance >= self.amont:
#             self.balance -= amont
#         else:
#             print("You dont have enough money")

#     def get_balance(self,balance):
        


# Account1 = BankAccount(4343434343,500)
# print(Account1.balance)





# Account1.deposit(500)



# class Point:
#     def __init__(self , x , y):
#         self.x = x
#         self.y = y
       
# class Line: 
#     def __init__(self , a , b):
#         self.a = a
#         self.b = b
    
#     def show(self):
#         print(self.a,self.b)

# @classmethod
# def how_many(cls):
#     print(cls)

# point1 = Point(5,25)
# point2 = Point(10,15)


# line1 = Line(point1,point2)
# print(line1.b)




# class Book:
#     def __init__(self,id,title,author, is_available = True):
#         self.id = id
#         self.title = title
#         self.author = author
#         self.is_available = is_available
    
#     def unavailable_mark(self):
#         """מסמן שהספר מושאל (לא זמין)."""
#         if not self.__is_available:
#             raise ValueError(f"הספר '{self.__title}' כבר מושאל.")
#         self.is_available = False

#     def available_mark(self):
#         """מסמן שהספר חזר (זמין שוב)."""
#         self.is_available = True

# book1 = Books(1234,"Moon", "David")






# class Member:
#     def __init__(self, id , full_name , active_loans_count = 0 ):
#         self.id = id
#         self.full_name = full_name
#         self.active_loans_count = active_loans_count


#     def loans_increment(self):
#         self.active_loans_count +=1
    
#     def loans_decrement(self):
#         self.active_loans_count -=1




# man1 = Member(4321,"DAVKUB")

# class Loan:
#     def __init__(self, loan_id, book_id , member_id,open_date , date_return , status = "open"):
#         self.loan_id = loan_id 
#         self.book_id = book_id
#         self.member_id = member_id
#         self.open_date = open_date
#         self.date_return = date_return
#         self.status = status

#     def return_date(self):
#         if self.status == "open":
#             return self.status == "Closed" 


# loan1 = Loan(1234,234,345,6786)



# class Library:
#     def __init__(self,bookes , membars , statuss):
#         self.bookes = bookes
#         self.membars = membars
#         self.statuss = statuss 

#     def 