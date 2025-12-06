#מגדיר את הטבלה
class Report(SQLModel, table=True):
    id: int = Field(default=None ,primary_key=True)
    TIME: Optional[time]
    reported: str
    nameTerrorist: int = Field(default=None , foreign_key="Terrorist.id")
    nameReport: int = Field(default=None , foreign_key="Agents.id")

# מוסיף ערכים לעמודות בדאטה
def add_Report(TIME: str, reported: int ,nameTerrorist: int, nameReport: int):
    report = Report(TIME=TIME, reported=reported, nameTerrorist=nameTerrorist, nameReport=nameReport)
    with Session(engine) as session:
        session.add(report)
        session.commit()
        session.refresh(report)
        print(f"Added course with id={report.id}")  

      