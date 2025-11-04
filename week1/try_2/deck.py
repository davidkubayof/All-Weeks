import random

optinal_suies = ["H" , "C" , "D" ," S " ]
optinal_ranks = ranks = {
                "2": 2,
                "3": 3,
                "4": 4,
                "5": 5,
                "6": 6,
                "7": 7,
                "8": 8,
                "9": 9,
                "10":10,
                "J": 11,
                "Q": 12,
                "K": 13,
                "A": 14,}

def create_card(rank:str, suite:str) -> dict:
        ranks = {
                "2": 2,
                "3": 3,
                "4": 4,
                "5": 5,
                "6": 6,
                "7": 7,
                "8": 8,
                "9": 9,
                "10":10,
                "J": 11,
                "Q": 12,
                "K": 13,
                "A": 14,}
        if (rank not in ranks or suite not in optinal_suies):
                return None
        
        return {"rank": rank,
                "suite": suite ,
                "value" : ranks[rank]
                }

def compare_cards(p1_card: dict, p2_card: dict) -> str:
#     if ("value" not in 
    p1_value = p1_card["value"]
    p2_value = p2_card["value"]
    if (p1_value > p2_value):
        return "p1"
    elif (p1_value < p2_value):
        return "p2"
    return "WAR"

def create_deck() -> list[dict]:
        result = []
        for suite in optinal_suies:
              for rank in optinal_ranks:
                    tmp_card = create_card(rank,suite)
                    if (tmp_card!= None):
                          result.append(tmp_card)
        return result

def shuffle(deck: list[dict]) -> list[dict]:   
        for i in range(1000):
                while (True):
                        index1 = random.randint(0,len(deck)-1)
                        index2 = random.randint(0,len(deck)-1)

                        if (index1!=index2):
                            break
                tmp_card = deck[index2] 
                deck[index2] = deck[index1]
                deck[index1] = tmp_card
        return deck

def create_player(name: str= "AI") -> dict:
      return{
            "name":name,
            "hand":[],
            "won_pile": []

      }

def init_game()-> dict:
      player_1 = create_player("david")
      player_2 = create_player()
      deck = create_deck()
      shuffle(deck)
      player_1 ["hend"] = deck[:26]
      player_2 ["hend"] = deck[:26]
      return {
            "deck": deck,
            "player_1": player_1,
            "player_2":player_2
      }

# def play_round(player_1: dict, player_2: dict)-> None:
#       p1_card = player_1["hend"].pop()
#       p2_card = player_1["hend"].pop()
#       result_comper = comper_card(p1)


if(__name__ == "__main__"):
        game_dict= init_game()
        while(len(game_dict["player_1"]["hend"])>0 and  ):
            play_round(game_dict["player_1"],game_dict["player_2"])
        log_winner(game_dict["player_1"])
def log_winner(p1_won_pile: list , p2_won_pile):