def build_standard_deck() -> list[dict]:
    ranks = ["2","3","4","5","6","7","8","9","10","11","12","13","14"]
    suites =  ["H","D","C","S"]
    listi = []
    
    for suite in suites:
        for rank in ranks:
            carda = "rank",rank
            card =  "suite",suite
            listi.append(carda)
            listi.append(card)
 

    return listi


def shuffle_by_suit(deck: list[dict], swaps: int = 5000) -> list[dict]:
    pass
