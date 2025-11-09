# user = input("entar a message: ")#jjhj
    
# abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","w","x","y","z"]
# #ATBASH = []
# ATBASH = ""
# for letar in user:
#     for index,let in enumerate(abc):
#         if letar == " ":
#             ATBASH += " "
#         elif let == letar:
#             ATBASH += abc[-index-1]
# print(ATBASH)


#1
# string = input("entar a ket")
# result = ""
# for ch in string:
#     if(ch.islower()):
#         num_ch = ord(ch) -97
#         result += chr(122 - num_ch)
#     elif(ch.isupper()):
#         num_ch = ord(ch) -65
#         result += chr( 90 - num_ch)
#     else:
#         result += ch
              
# with open("file.txt","w") as f:
#     f.write(result)

# with open("file.txt","r") as f:
#     massage = f.read()
#     new = ""
#     for ch in massage:
#         if(ch.islower()):
#             num_ch = ord(ch) -97
#             new += chr(122 - num_ch)
#         elif(ch.isupper()):
#             num_ch = ord(ch) -65
#             new += chr( 90 - num_ch)
#         else:
#             new += ch
#     print(new)
#
#2
# with open("file.txt","r") as r:
#     count = 0 
#     for line in r:
#         count += 1
#         if count % 2 == 0:
#             with open("story_A.txt","a") as r:
#                 r.write(line)                
#         elif count % 2 !=0:
#             with open("story_B.txt","a") as r:
#                 r.write(line)


