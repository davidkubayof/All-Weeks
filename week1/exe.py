# #1 creat_dict
# def create_person(name, age, city):
#     return {"name": name , "age": age , "city": city}
# print(create_person("david", 25, "TLV"))
# #2 hes key
# def has_key(dicti , key):
#     return key in dicti
# print(has_key({'name': 'David'}, 'name'))
# #3 get val 
# def safe_get(dictionary, key, default = False):
#     for k in dictionary:  
#         if k == key:
#             return dictionary[key]
#     return default
# print(safe_get({'name': 'David'}, 'email'))
#4 count words
# def count_words(text):
#     words = []
#     word = ""
#     for w in text:
#         if w != " ":
#             word +=w
#         elif w == " ":    
#             words.append(word)
#             word = ""
#     words.append(word)

#     dicti = {}
#     for wor in words:
#         if wor not in dicti:
#             dicti[wor] = 1
#         elif wor in dicti:
#             dicti[wor] += 1
#     return dicti    

# print(count_words("hello world hello"))
#5 marge
# def merge_dicts(dict1, dict2):
#     for key in dict2:
#         if key not in dict1:
            
#             dict1[key] = dict2[key]
#             print(dict1[key],dict2[key])
#     dict2 = dict1
#     return dict1
                
# print(merge_dicts({"a" : 4,"b": 7}, { "b" : 5 ,"c":9 }))