#Exercise 1:
class Agent:
    def __init__(self,code_name: str , _clearance_level: int):
        self.code_name = code_name
        self._clearance_level = _clearance_level

    def report(self):
        return f"Agent {self.code_name} reporting.Clearance Level: {self._clearance_level}"

    def get_val(self):
        return self._clearance_level
    
    def setter_change(self, value):
        if 0 < self._clearance_level < 10 :
            self._clearance_level = value

agent1 = Agent("David",8)
print(agent1.report())

print(agent1.get_val(),"befor")
agent1.setter_change(6)
print(agent1.get_val(),"after")
agent1.report()
#Exercise 2:
class Mission:  
    def __init__(self, mission_name: str , target_location: str ,assigned_agent:  Agent):
        self.mission_name = mission_name
        self.target_location = target_location
        self.assigned_agent =  assigned_agent
    
    def brief(self):
        print(f"Mission: {self.mission_name}, Target: {self.target_location},Agent: {self.assigned_agent.code_name}")
mission1 = Mission("NEW YORK: ","USA: ", agent1)
mission1.brief()






class FieldAgent(Agent):
    def __init__(self, region , code_name, _clearance_level):
        super().__init__(code_name,_clearance_level)
        self.region = region

    def report(self):
        return f"region {self.region}  Agent {self.code_name} reporting.Clearance Level: {self._clearance_level}"


fieldAgent = FieldAgent("G","Danial",9)
print(fieldAgent.report())


class CyberAgent(Agent):
    def __init__(self,specialty):
        self.specialty = specialty

    def report():
        pass