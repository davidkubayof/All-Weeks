from sqlmodel import SQLModel, Field ,create_engine, select,Session
# from typing import Optional, List
# from time import time


from modoles.agents import Agents , add_Agents
# from modoles.terrorist import Terrorist , add_Terrorist
# from modoles.report import Report , add_Report


#  החיבור לסכמה דאטה בייס ספיצפי
engine = create_engine("mysql+mysqlconnector://root:@localhost/system?use_pure=True")
# יוצר לי את כל הטבלאות למעלה 
def create_db_and_tables(): 
    SQLModel.metadata.create_all(engine)

# קורא לי את הערכים שקיימים שם 
def get_active_Agents():   
    with Session(engine) as session:
        statement = select(Agents).where(Agents.id == 1)
        results = session.exec(statement)
        courses = results.all()
        return courses





if __name__ == "__main__":
    create_db_and_tables()

    with Session(engine) as session:
        add_Agents(session ,"SQL Basics","123")

    active = get_active_Agents()
    print("Active courses")
    for c in active:
        print(f"id: {c.id} name: {c.user_name} hours: {c.password}  ")







# add_Agents("SQL Basics","123")
# add_Terrorist("Python Intro")
# add_Report("time","Legacy iz ujihoihwb hhlkjrwhgk") 
 
