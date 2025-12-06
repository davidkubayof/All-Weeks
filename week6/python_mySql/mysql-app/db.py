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

def show_all_products():
    all = db.exec_query("SELECT * FROM products")
    return all

def show_all_employees():
    all = db.exec_query("SELECT * FROM employees WHERE firstName LIKE '%M%';")
    return all

def user_input_sql():
    sql_command = input("enter a command sql: ")
    result = db.exec_query(sql_command)
    return result

def meno():
    print("                  meno in sql:")
    print("                  choses num:")
    print("                  1. employees:")
    print("                  2. products:")
    print("                  3. offices")
    choes = int(input("enter a number"))
    if choes == 1:
        sql_command = "SELECT * FROM employees"
        result = db.exec_query(sql_command)
        print(result)
    elif choes == 2:
        sql_command = "SELECT * FROM products"
        result = db.exec_query(sql_command)
        print(result)
    elif choes == 3:
        sql_command = "SELECT * FROM offices"
        result = db.exec_query(sql_command)
        print(result)
meno()