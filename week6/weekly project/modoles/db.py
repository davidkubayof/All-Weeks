import mysql.connector
from mysql.connector import Error

class DB_connector:
    def __init__(self , host , user ,db_name, password=""):
        self.config={
            "host":host,
            "user":user,
            "password":password,
            "database": db_name
            }
        self.connection = None

    def exec_query(self ,query: str , params = None):
        results = None
        try:
            self.connection = mysql.connector.connect(**self.config , use_pure=True)
            if(self.connection.is_connected()):
                cursor = self.connection.cursor(dictionary=True)
                cursor.execute(query, params=params)
            query_type = query.strip().upper().split()[0]
            if query_type in ["INSERT", "UPDATE", "DELETE", "CREATE", "ALTER", "DROP"]:
                self.connection.commit()
                results = cursor.rowcount
            else:
                results = cursor.fetchall()
        except Error as e:
            print(e.msg)
        finally:
            if(self.connection and self.connection.is_connected()):
                cursor.close()
                self.connection.close()
        return results

db = DB_connector('127.0.0.1',"root","classicmodels")




def user_input_sql():
    user_name = input("enter a command sql: ")
    s = f"SELECT customerName  FROM customers WHERE customerName LIKE '%{user_name}%'"
    result = db.exec_query(s)
    return result
print(user_input_sql())