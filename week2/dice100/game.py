# import random

# print("שחקן ראשון דוד")
# print("שחקן שני אבי")
# print("לחץ על p להטיל שתי קוביות")
# print("לחץ 2 להעביר את התור לשחקן השני")
# print(" אם עברת השחקן השני מנצח, מטרה להגיע ל100 מבלי לעבור ")
# print("אם שני השחקנים מוותרים על התור שלהם ברציפות המשחק מסתיים והמנצח הוא מי שקרוב ל100")
# print("אם אחרי שנים רצופים יש שיוון כל אחד מטיל שתי קוביות  מי שקיבל תוצאה גדולה יותר הוא המנצח")
# print("אם שחקן מגיע בדיוק למאה ככה אז הוא מנצח")
# play1_david = input("roll or pass to next")#if pass tow go to tie_br if roll go to roll
# play2_avi = input("roll or pass to next")


#הטלת שתי קוביות
# def roll_two_d6(seed = None) -> tuple[int, int]:
#     if seed!= None:
#         random.seed(seed)
#     Dice1 = random.randint(1,6)
#     Dice2 = random.randint(1,6)
#     return Dice1 , Dice2
# print(roll_two_d6())
# #בודקת האם התוצאה עברה את 100 
# def is_bust(score: int) -> bool:
#     if score< 100:
#         return False
#     if  score>100:
#         return True
# #רק אם זה מאה בדיוק יחזיר TRUE
# def is_exact_100(score: int) -> bool:
#     if score == 100:
#         return True
# #בודק מי יותר קרוב ל100
# def closer_to_target(p1: int, p2: int, target: int = 100) -> int | None:
#     if p1 > p2 and p1<=target:
#         return 1
#     elif p1 < p2 and p2<=target:
#         return 2
#     elif p1 == p2:
#         return None
# #כל שחקן מטיל שתי קוביות ומשווה ביינהם 
# def tie_breaker(roller = None) -> int:
#     while True:
#         a = roll_two_d6()
#         b = roll_two_d6()
#         if a>b:
#           return 1
#         if a<b:
#           return 2 
# # r or p
# def turn_decision(input_fn) -> str:
#     pass
    
# def play_game():
    pass