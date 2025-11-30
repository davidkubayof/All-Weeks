# #1 add item
# def add_item(my_list, item):  
#     my_list.append(item)
#     return my_list
# print(add_item([1, 2, 3], 4))
# #2 find len of list
# def get_list_length(my_list): 
#     return len(my_list)
# print(get_list_length([1, 2, 3, 4, 5]))
# #3 find item in list with index
# def get_item(my_list ,index):
#     return my_list[index]
# print(get_item(['a', 'b', 'c'], 1))
# #4 if item exists
# def item_exists(my_list,item):
#     return item in my_list
# print(item_exists((1,2,3),2))
# #5 remove item
# def remove_item(my_list , item):
#     if item in my_list:
#         my_list.remove(item)
#         return my_list
#     return False
# print(remove_item([1,2,3,2],2))
# #6 merge_lists
# def merge_lists(list1,list2):
#     return list1 + list2
# print(merge_lists([1,2],[3,4]))
# #7 count item in list
# def count_occurrences(my_list , item):
#     counter = 0
#     for num in my_list:
#         if num == item:
#             counter+=1
#     return counter
# print(count_occurrences([1,2,2,3,2],2))
# #8 reverse_list
# def reverse_list(mylist):
#     return mylist[::-1]
# print(reverse_list([1,2,3,4]))
# #9 find min and max
# def find_min_max(numbers):
#     return min(numbers),max(numbers)
# print(find_min_max([3,1,4,1,5]))
# #10 remove duplacat
# def remove_duplicates(my_list):
#     new = []
#     for i in my_list:
#         if i not in new:
#             new.append(i)
#     return new
# print(remove_duplicates([1,2,2,3,1,4]))
# #11 filter even
# def filter_even_numbers(numbers):
#     return [num for num in numbers if num % 2 == 0]
# print(filter_even_numbers([1,2,3,4,5,6]))
# #12 sort by len
# def sort_by_length(words):
#     new = []
#     hig_len = 0
#     wo = ""
#     for word in words:
#         if len(word)> hig_len:
#             hig_len = len(word)
#             wo = word
#     new.append(word)
        
#     return new
# print(sort_by_length(['apple','hi','banana']))
# #13
# def flatten_list(nested_list):
#     new = []
#     for listi in nested_list:
#         for nes in listi:
#             new.append(nes)
#     return new
# print(flatten_list([[1, 2], [3, 4], [5]]))
#14
# def slice_list(my_list, start, end):
#     return my_list[start:end]
# print(slice_list([0, 1, 2, 3, 4, 5], 2, 5))
#15
class Inventory:     
    def __init__(self):         
        self.products = [] 

    def add_product(self , name, quantity, price):
        self.products.append([name, quantity, price])
        return self.products

    def remove_product1(self ,name):
        for product in self.products[:]:
            for nam in product:
                if nam == name:
                    self.products.remove(product)
        return self.products
    
    def remove_product2(self,name):
        for product in self.products[:]:
            if product[0]== name:
                self.products.remove(product)
        return self.products

    def update_quantity(self ,name, quantity):
        for product in self.products:
            if product[0] == name:
               product[1] = quantity
    
    def get_total_value(self):
        conter = 0
        for product in self.products:
            conter += product[1]*product[2]
        return conter

    def get_low_stock(self ,threshold):
        low = []
        for product in self.products:
            if product[1] < threshold:
                low.append(product)
        return low
 
    def sort_by_price(self):
        products = self.products[:]  # העתקה כדי לא לשנות את המקור
        sorted_list = []

        while products:
            # מציאת המוצר עם המחיר הנמוך ביותר
            lowest = products[0]

            print(lowest)
            for product in products:
                if product[2] < lowest[2]:
                    lowest = product
            sorted_list.append(lowest)
            products.remove(lowest)

        return sorted_list

Inv=Inventory()
Inv.add_product("david",2,1)
Inv.add_product("davi",3,12)
Inv.add_product("davi",4,13)
#print(Inv.sort_by_price())
Inv.sort_by_price()




