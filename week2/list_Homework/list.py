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