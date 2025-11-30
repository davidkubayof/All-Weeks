from sqlmodel import SQLModel, Field
#מגדיר את הטבלה
class Agents(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    user_name: str = Field(default=None , unique=True)
    password: str

# מוסיף ערכים לעמודות בדאטה
def add_Agents(session,user_name: str, password: str):
    agents = Agents(user_name=user_name , password=password)
    session.add(agents)
    session.commit()
    session.refresh(agents)
    print(f"Added course with id={agents.id}")





