from db import DC_connector
from ui import ui
from db_orm import DB_orm
from models.cutomers import Customers

if __name__ == "__main__":
    db = DB_connector("localhost","root","classicmodels")
    data = db.exec_query("SELECT * FROM customers")
    if data:
        if isinstance(data ,list):
            for roe in data:
                





                