class Weapon:
    total_weapons = 0 
    def __init__(self , name: str , ammo: int):
        self.name = name
        self.ammo = ammo
        Weapon.add__weapon()      
        
    
    def __str__(self):
        return f"{self.name}  , {self.ammo} ammo"
    
    @classmethod
    def add__weapon(cls):
        cls.total_weapons +=1 

class Soldier:
    def __init__(self , name: str , rank: int , weapon: Weapon):
        self.name = name
        self.rank = rank
        self.weapon = weapon

    def report(self):
        return f"rank: {self.rank} , name: {self.name} , weapon: {self.weapon}"

class Unit:
    def __init__(self , unit_name: str , commander:  Soldier , soldiers: list[Soldier]):
        self.unit_name = unit_name
        self.commander = commander
        self.soldiers = soldiers

    def briefing(self):
        print(f"unit_name: {self.unit_name} , commander: {self.commander.report()}")


class Agent:
    def __init__(self,codename: str , clearance_level: int):
        self.codename = codename
        self.clearance_level = clearance_level

class Mission:
    def __init__(self , mission_name: str  , target: str , assigned_agent: Agent):
        self.mission_name = mission_name
        self.target = target
        self.assigned_agent = assigned_agent


    def briefing(self):
        print(self.mission_name , self.target , self.assigned_agent)

class MissionManager:
    def __init__(self):
        pass
    def to__add():
        pass
    def remove():
        pass













