# #1
# def add_item(my_list, item):
#     my_list.append(item)
#     return my_list

# print(add_item([1, 2, 3], 4))
# #→ [1, 2, 3, 4] 


#2
# def get_list_length(my_list):
#     return len(my_list)
       
# print(get_list_length([1, 2, 3, 4])) 
# #→ 5 


#3
# def get_item(my_list, index):
#     if index < 0 or index >= len(my_list):        
#         return None
    
#     return my_list[index]
# print(get_item(['a', 'b', 'c'], 1))

#4
# def item_exists(my_list, item): 
#     if item in my_list:
#         return True
#     return False
# print(item_exists([1, 2, 3], 2))

#5
# def remove_item(my_list, item): 
#     my_list.remove(item)
#     return my_list
# print(remove_item([1, 2, 3, 2], 2))
#→ [1, 3, 2]


#6
# def merge_lists(list1, list2):
#     list1 += list2
#     return list1

# print(merge_lists([1, 2], [3, 4])) 


##########
# metrix_names = [["yosef", "david"],[ "yossi", "yonni"]]

# for list_names in metrix_names:
#     for name in list_names:
#         print(name)

# list_names = ["yosef", "david","yossi", "yonni"]

# for i, name in enumerate(list_names):
#     print(i+1,name)

#7
# def count_occurrences(my_list, item):
#     return my_list.count(item)

# print(count_occurrences([1, 2, 2, 3, 2], 2))

#8
# def reverse_list(my_list):
#     return my_list[::-1]

# print(reverse_list([1, 2, 3, 4]))

#9
# def find_min_max(numbers):
#     return min(numbers),max(numbers)

# print(find_min_max([3, 1, 4, 1, 5]))


#10
# def remove_duplicates(my_list):
#     new_list = []
#     for item in my_list:
#         if item not in new_list:
#             new_list.append(item)
#     return new_list    
# print(remove_duplicates([1, 2, 2, 3, 1, 4]))

# def remove_duplicates(my_list):
#     return sorted(set(my_list))
# print(remove_duplicates([1, 2, 2, 3, 1, 4]))

#11
#def filter_even_numbers(numbers): 
    #return [item for item in numbers if item %2 == 0]
 
#    for item in numbers:
#        if item % 2 == 0:
#            print(item)

#filter_even_numbers([1, 2, 3, 4, 5, 6])

#print(filter_even_numbers([1, 2, 3, 4, 5, 6]))

#12
# def sort_by_length(words): 
#     words.sort(key=len)
#     return words
# print(sort_by_length(['apple', 'hi', 'banana']))

#13
# def flatten_list(nested_list):
#     new  = []
#     for listi in nested_list:
#         for num in listi:
#             new.append(num)   
#     return new

# print(flatten_list([[1, 2], [3, 4], [5]]))

# def slice_list(my_list, start, end): 
#     return my_list[start:end]
# print(slice_list([0, 1, 2, 3, 4, 5], 2, 5))
# class Product:
#     def __init__(self, name , quantity , price):
#         self.name = name 
#         self.quantity = quantity
#         self.price = price

# class Inventory: 
#     def __init__(self): 
#         self.products = [] 
         
#     def add_product(self,name, quantity, price):
#         p = Product(name, quantity, price)
#         self.products.append(p)

#     def remove_product(self, name):
#         for product in self.products:
#             if product.name == name:
#                 self.products.remove(product)


#     def update_quantity(self, name, quantity):
#          for product in self.products:
#             if product.name == name:
#                 product.quantity += quantity

    # def get_total_value(self):
    #     total_value = 0 
    #     for product in self.products:
    #         price = product.price 
    #         quantity = product.quantity
    #         value = price * quantity
    #         total_value += value
    #     return total_value
    
    # def get_low_stock(self,threshold):
    #       low_inventory = []
    #       for product in self.products:
    #           if product.quantity <= threshold:
    #               low_inventory.append(product.name)
                  
                  



# inv = Inventory()
# inv.add_product("David" , 4 , 100)
# inv.add_product("dhikuh" , 4 , 100)
# # print(inv.get_total_value())
# inv.remove_product("David")


# for p in inv.products:
#     print(f"Name: {p.name}, Quantity: {p.quantity}, Price: ${p.price}")


# print(inv.products)



# class Studant:
#     def __init__(self, name):
#         self.__name = name

#     def get(self):
#         return f"name {self.__name}"

#     def sater(self,name):
#         self.__name = name
#         return f"name sat {self.__name}"

        
# s1 = Studant("david")
# print(s1.get())
# print(s1.sater("simon"))

class Vehicle:
    def __init__(self , brand , model):
        self.brand = brand
        self.model = model

    def start(self):
        return f"{self.brand}{self.model} engine started "
    
# v1 = Vehicle("BMW",2025)

class Car(Vehicle):
    def __init__(self, brand, model, doors):
        super().__init__(brand, model)#####

c1 = Car("BMW",2025,4)
print(c1.start())

class Animal:
    def active(self):
        print("animal speak")

class Speak(Animal):
    def active(self):
        print("speak active")

class Go(Animal,Speak):
    def active(self):
        Speak.active(self)
a1 = Animal()
a1.active()