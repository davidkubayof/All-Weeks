# class Engine:
#     pass

# class Car:
#     def __init__(self, enine):
#         self.enine = enine

# car1 = Car(Engine())



# class Vehicles:
#     def __init__(self , max_speed):
#         self.max_speed = max_speed

            
#     def drive(self):
#         print(f"this can drive max {self.max_speed}")

# class Car(Vehicles):
#     pass

# class Motorcycle(Vehicles):
#     pass

# motorcycle1 = Motorcycle(140)
# motorcycle1.drive()

# car1 = Car(100)
# car1.drive()

# class Employee:
#     def __init__(self , name, salary):
#         self.name = name
#         self.salary = salary

# class Manager(Employee):
#     def manage(self):
        

# class Developer(Employee):
#     def __init__(self, name, salary):
        
    
#     def write_code(self):
#         pass




#Single Responsibility Principle (S)

# class Book:
#     book_list = []
#     def __init__(self, title: str , author: str , content: str):
#         self.title = title 
#         self.author = author 
#         self.content = content
#     def __str__(self):
#         return f"title {self.title} author {self.author} content {self.content}"
    
   
# class Seved_to_list:
#     def __init__(self):
#         self.books_list = []
#     def seved_to_list(self , content):
#         self.books_list.append(content)
#     def print_list(self):
#         for b in self.books_list:
#             print(book1)

# book1 = Book("love","david","i dont know")
# seved_to_list = Seved_to_list()
# seved_to_list.seved_to_list(book1)
# seved_to_list.print_list()


# class Student:
#     def __init__(self , name: str ,grades: list[int]):
#         self.name = name
#         self.grades = grades

# class GradeCalculator:
#     def __init__(self):
#         pass
#     @staticmethod
#     def calculat_avreg(grades):
#         return sum(grades) / len(grades)

# student1 = Student("momo", [100,90,93])
# print(student1.name,GradeCalculator.calculat_avreg(student1.grades))



# class Order:
#     def __init__(self, items: list[str] , total_price: float):
#         self.items = items
#         self.total_price = total_price


# class InvoicePrinter(Order):
#     def __init__(self):
#         pass
#     def print_invoice(self):
#         print(f"items {self.items} total {self.total_price} ")



# order1 = Order(["BOX","closet","car"],100.0)
# InvoicePrinter.print_invoice(order1)

# class Shape:
#     def __init__(self,Length,width):
#         self.Length = Length
#         self.width = width
        
#     def area(self):
#         return
    
# class Circle:
#     def __init__(self):
#         pass

# class Square:
#     def __init__(self):
#         pass

# class Rectangle:
#     def __init__(self):
#         pass


from abc import ABC, abstractmethod
from math import pi

class Shape(ABC):
   def __init__(self, shape_type):
       self.shape_type = shape_type #

   @abstractmethod
   def calculate_area(self):
       pass
   
class Circle(Shape):
   def __init__(self, radius):
       super().__init__("circle")
       self.radius = radius

   def calculate_area(self):
       return pi * self.radius ** 2

class Square(Shape):
    def __init__(self, side):
        super().__init__("square")
        self.side = side
    
    def calculate_area(self):
        return self.side * self.side

class Rectangle(Shape):
   def __init__(self, width, height):
       super().__init__("rectangle")
       self.width = width
       self.height = height

   def calculate_area(self):
       return self.width * self.height
shapes = [Circle(3), Square(4), Rectangle(2, 6)]

for shape in shapes:
    print(f"{shape.shape_type.capitalize()} area: {shape.calculate_area():.2f}")
