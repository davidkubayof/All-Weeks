# # הפעלת המשחק
# from game_logic import game
# from utils import deck


# if __name__ == "__main__":
#     play_round = play_round()
#     init_game = init_game()
    
    
    
from game_logic.game import init_game, play_round

if __name__ == "__main__":
    # מאתחלים את המשחק
    game = init_game()
    p1 = game["player_1"]
    p2 = game["player_2"]

    # משחקים סיבובים עד שנגמרים הקלפים
    while p1["hand"] and p2["hand"]:
        play_round(p1, p2)

    # מחשבים את התוצאה הסופית
    p1_score = len(p1["won_pile"])
    p2_score = len(p2["won_pile"])

    print("\n--- GAME OVER ---")
    print(f"{p1['name']} won {p1_score} cards.")
    print(f"{p2['name']} won {p2_score} cards.")

    # קביעת מנצח
    if p1_score > p2_score:
        print(f"{p1['name']} wins the game!")
    elif p2_score > p1_score:
        print(f"{p2['name']} wins the game!")
    else:
        print("It's a draw!")
