from classss.classes import Weapon ,Soldier, Unit

def Military_Simulation():
    weapon1 = Weapon("Pistol1", 10)
    weapon2 = Weapon("Rifle2", 20)
    weapon3 = Weapon("Gun3",30)
    # print("Total weapons created:",Weapon.total_weapons)

    soldier1 = Soldier("John1", 1, weapon1)
    soldier2 = Soldier("Alice2", 2, weapon2)
    soldier3 = Soldier("David3", 3, weapon3)
    
    print(soldier1.report())
    print(soldier2.report())   
    print(soldier3.report())   

    uint1 = Unit("kodkod1", soldier1,[soldier1])
    uint2 = Unit("kodkod2", soldier2,[soldier2])
    uint3 = Unit("kodkod3", soldier3,[soldier3])
    
    
    uint1.briefing()
    uint2.briefing()
    uint3.briefing()
















if __name__ == "__main__":
    Military_Simulation()