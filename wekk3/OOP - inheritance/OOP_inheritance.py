# from abc import ABC , abstractmethod


# class Vehicles:
#     def __init__(self,  brand, model):
#         self.brand = brand
#         self.model = model

#     def move(self):
#         return "The vehicle is moving"

# class Car(Vehicles):
#     def move(self):
#         return f"{self.brand},{self.model} The car drives"

# class Plane(Vehicles):
#     def move(self):
#         return f"{self.brand},{self.model} The plane flies"

# vehicles1 = Vehicles("BMW! ","Q8! ")
# print(vehicles1.move())

# car1 = Car("Tasle: ","xr ")
# print(car1.move())

# plane1  = Plane("toyota: ","rrr ")
# print(plane1.move())


# class Animals:
#     def __init__(self,name):
#         self.name = name

#     def sound(self):
#         return

#     def __str__(self):
#         return self.sound()

# class Dog(Animals):
#     def sound(self):
#         return f"{self.name}  Woof"

# class Cat(Animals):
#     def sound(self):
#         return f"{self.name}  Meow"
    
# list_of_anim = [Cat("mi"), Dog("rex")]
# for i in list_of_anim:
#     print(i)












class Animal:
    def __str__(self):
a = Animal("det")
Animal.__str__(a)
