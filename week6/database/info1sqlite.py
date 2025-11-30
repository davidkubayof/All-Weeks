from sqlmodel import SQLModel, Field, select, Session, text
from sqlite_orm import Sqlite_orm


class User(SQLModel, table=True):
    __tablename__ = "users"
    id: int = Field(default=None, primary_key=True)
    username: str = Field(default="")
    phone: int
from sqlmodel import SQLModel, create_engine, Field, select, Session


class Sqlite_orm():
    def __init__(self):
        self.engine = create_engine("sqlite:///momo.db")
        SQLModel.metadata.create_all(self.engine)
    def get_all(self, table: SQLModel):
        with Session(self.engine) as session:
            results = session.exec(select(table)).all()
            return results

    def insert_one(self, row_data: SQLModel):
        with Session(self.engine) as session:
            session.add(row_data)
            session.commit()
            session.refresh(row_data)
            return row_data
       
   
