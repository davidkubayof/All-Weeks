# דוד קוביוף  325035095

#listi = ("ts" ,"2025-10-08T06:41:00Z", "service", "auth", "level", "INFO", "message", "user login ok")
# listi = ("2025-10-08T06:41:00Z;auth;INFO;user login ok")
# def parse_line(line: str):
#     if len(listi) == 4:
#         print("good")
        
#     else:
#         print("None")

# parse_line(listi)




#1
# string =("2025-10-08T06:41:00Z;auth;INFO;user login ok")
# def prase_line(string):
#     x = string.split(';')
#     if len(x) == 4:
#         if len(x[0]) and len(x[1]) and len(x[2]) and len(x[3]) > 0:
#             a = dict(timestamp =x[0], service = x[1] ,level = x[2] , message = x[3])
#             print(a)
#     else:
#         print(None)
# prase_line(string)


#2
# data = ['2025-10-08T06:41:00Z;auth;INFO;user login ok']
# def parse_logs(lines: list[str]) -> list[dict]:
    

# # parse_logs(lines='2025-10-08T06:41:00Z;auth;INFO;user login ok')

# def parse_line(line: str) -> dict | None:
#     split_data = line.split(" , ")
#     if len (split_data) ==4:
#         return dict(ts=split_data[0],service = split_data[1],leval = split_data[2],massage = split_data[3])
#     else: 
#         return None
# parse_line("<timestamp>;<service>;<level>;<message>")
# parse_line("2026-10-08T06:41:00Z;auth;INFO;user login ok")