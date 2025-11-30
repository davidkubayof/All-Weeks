#מגדיר את הטבלה
class Terrorist(SQLModel, table=True):
    id: int = Field(default=None ,primary_key=True)
    nameTerrorist: str   

# מוסיף ערכים לעמודות בדאטה
def add_Terrorist(nameTerrorist: str):
    terrorist = Terrorist(nameTerrorist=nameTerrorist)
    with Session(engine) as session:
        session.add(terrorist)
        session.commit()
        session.refresh(terrorist)
        print(f"Added course with id={terrorist.id}")

