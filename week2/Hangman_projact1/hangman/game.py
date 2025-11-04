def init_state(secret: str, max_tries: int) -> dict:   
    state = {
    "secret": secret, # המילה הסודית
    "display":["_"] * len(secret), # "_" ,רשימת תווים לתצוגה
    "guessed": set(), # אותיות שנוחשו
    "wrong_guesses": 0, # כמה טעויות בוצעו
    "max_tries": max_tries # מגבלה
    }
    return state




def validate_guess(ch: str, guessed: set[str]) -> tuple[bool, str]:
    if len(ch) == 1 and ch not in guessed and ch != "*":
        return  True, "is legal and not guessed yet "
    return False , "is Not legal or was guessed"



def apply_guess(state: dict, ch: str) -> bool:
    if ch in state["secret"] :
        return True
    return False


def is_won(state: dict) -> bool:
    return "_" not in state["display"]





















# #  לוגיקת משחק,מצב לולאה עדכון 

# def init_state(secret: str, max_tries: int) -> dict :
#     return{
#         "secret": secret, # המילה הסודית
#         "display": [], # "_" ,רשימת תווים לתצוגה
#         "guessed": [], # אותיות שנוחשו
#         "wrong_guesses": 0, # כמה טעויות בוצעו
#         "max_tries": max_tries  # מגבלה 
#         }

# def validate_guess(ch: str, guessed: set[str]) -> tuple[bool, str]:
#     messge = ""
#     if ch != 1 and ch.isalpha==False:
#         messge = "you need to entar a letter! "
#         return False , messge 

#     if ch in guessed:
#         messge = "Entar a letter you haven't entared yet! "
#         return False , messge 

#     else:
#         messge = "proper"
#         return True, messge 
# #.(בודק תקינות: אות יחידה, לא נוחשה קודם. מחזיר תקין, הודעה/
# def apply_guess(state: dict, ch: str) -> bool:
#     if ch in state["secret"]:
#         return  True

# def is_won(state: dict) -> bool:
#     if "_" not in state["display"]:
#         return True


