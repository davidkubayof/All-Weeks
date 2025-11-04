# def create_player(name:str) -> dict:
#     pass
# def init_game()->dict:
#     pass
# def play_round(p1:dict,p2:dict):
#     pass


from utils.deck import create_deck, shuffle, compare_cards

# יוצרת שחקן עם שם, יד וערימת ניצחונות ריקה
def create_player(name: str = "AI") -> dict:
    return {"name": name, "hand": [], "won_pile": []}


# מאתחלת את המשחק – יוצרת שחקנים, חפיסה, מחלקת קלפים
def init_game() -> dict:
    deck = create_deck()
    deck = shuffle(deck)

    player_1 = create_player("Player 1")
    player_2 = create_player("AI")

    player_1["hand"] = deck[:26]
    player_2["hand"] = deck[26:]

    return {
        "deck": deck,
        "player_1": player_1,
        "player_2": player_2
    }


# משחקת סיבוב אחד – כל שחקן שולף קלף ומשווים ביניהם
def play_round(player_1: dict, player_2: dict) -> None:
    # בודקים שיש קלפים לשני השחקנים
    if not player_1["hand"] or not player_2["hand"]:
        return

    # כל שחקן שולף קלף מראש הרשימה
    p1_card = player_1["hand"].pop(0)
    p2_card = player_2["hand"].pop(0)

    print(f"{player_1['name']} plays {p1_card['rank']}{p1_card['suite']} | "
          f"{player_2['name']} plays {p2_card['rank']}{p2_card['suite']}")

    # השוואת קלפים
    result = compare_cards(p1_card, p2_card)

    if result == "p1":
        player_1["won_pile"].extend([p1_card, p2_card])
        print(f"{player_1['name']} wins the round!")
    elif result == "p2":
        player_2["won_pile"].extend([p1_card, p2_card])
        print(f"{player_2['name']} wins the round!")
    else:
        # במצב של WAR לא קורה כלום
        print("WAR! No one wins this round.")
