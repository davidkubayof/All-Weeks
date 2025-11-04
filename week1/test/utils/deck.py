

# def create_card(rank:str,suite:str) -> dict:
#     if rank == "J":
#         my_J= {"rank": rank , "suite": suite, "value": 11}
#         return my_J
#     elif rank == "Q":
#         my_Q= {"rank": rank , "suite": suite, "value": 12}
#         return my_Q
#     elif rank == "K":
#         my_K= {"rank": rank , "suite": suite, "value": 13}
#         return my_K
#     elif rank == "A":
#         my_A= {"rank": rank , "suite": suite, "value": 1}
#         return my_A
#     else:
#         my_dict = {"rank": rank , "suite": suite, "value": rank }
#         return my_dict
# create_card("A","H")
# create_card("2","H")
# create_card("3","H")
# create_card("4","H")
# create_card("5","H")
# create_card("6","H")
# create_card("7","H")
# create_card("8","H")
# create_card("9","H")
# create_card("10","H")
# create_card("J","H")
# create_card("Q","H")
# create_card("K","H") 

# def compare_cards(p1_card:dict, p2_card:dict) -> str:
#     p1 = p1_card["value"]
#     p2 = p2_card["value"]
#     if p1 > p2:
#         return "p1"
#     elif p1 < p2:
#         return "p2"
#     elif p1 == p2:
#         return "WAR"
    
# #working
# # def create_deck() -> list[dict]:
# #     for i in range(13):
#         [{"rank": i , "suite":i, "value": i}]
#     return
# create_deck()[0:4]
# print(len(create_deck()))

# def shuffle(deck:list[dict]) -> list[dict]

#     return 




import random

# יוצרת קלף כמילון עם דרגה, סוג וערך מספרי
def create_card(rank: str, suite: str) -> dict:
    values = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
        "2": 2
    }
    # אם הדרגה היא אחת מאותיות התמונות, נשתמש בערך מהמפה
    if rank in values:
        value = values[rank]
    else:
        value = int(rank)

    return {"rank": rank, "suite": suite, "value": value}





def creat(rank: str, suit)


# משווה בין שני קלפים ומחזירה מחרוזת של המנצח
def compare_cards(p1_card: dict, p2_card: dict) -> str:
    if p1_card["value"] > p2_card["value"]:
        return "p1"
    elif p2_card["value"] > p1_card["value"]:
        return "p2"
    else:
        return "WAR"


# יוצרת חפיסה של 52 קלפים (כל הדרגות וכל הסוגים)
def create_deck() -> list[dict]:
    ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    suites = ["H", "C", "D", "S"]
    deck = []
    for rank in ranks:
        for suite in suites:
            deck.append(create_card(rank, suite))
    return deck
# print(create_deck())


# מערבבת את החפיסה לפי אלגוריתם מוגדר
def shuffle(deck: list[dict]) -> list[dict]:
    for _ in range(1000):
        i1 = random.randrange(len(deck))
        i2 = random.randrange(len(deck))
        if i1 != i2:
            deck[i1], deck[i2] = deck[i2], deck[i1]
    return deck






