from sqlmodel import SQLModel, Field ,create_engine, select,Session
from typing import Optional, List

engine = create_engine("mysql+mysqlconnector://root:@localhost/sqlexe?use_pure=True")

class Course(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    hours: int
    is_active: bool = True

class Studant(SQLModel, table=True):
    id: Optional[int] = Field(default=None ,primary_key=True)
    name: str
    hours: int
    is_active: bool = True

def create_db_and_tables(): 
    SQLModel.metadata.create_all(engine)

# def add_course(name: str, hours: int, is_active: bool = True):
#     course = Course(name=name, hours=hours, is_active=is_active)
#     with Session(engine) as session:
#         session.add(course)
#         session.commit()
#         session.refresh(course)
#         print(f"Added course with id={course.id}")

# def get_active_courses():   
#     with Session(engine) as session:
#         statement = select(Course).where(Course.is_active == True)
#         results = session.exec(statement)
#         courses = results.all()
#         return courses
if __name__ == "__main__":
    create_db_and_tables()
    # add_course("SQL Basics", 20, True)
    # add_course("Python Intro", 30, True)
    # add_course("Legacy System", 10, False)
    
    # active = get_active_courses()
    # print("Active courses")
    # for c in active:
    #     print(f"id: {c.id} name: {c.name} hours: {c.hours}  active: {c.is_active}")