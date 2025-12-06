from classes.class_Db import DatabaseManager
from classes.class_Car import Car
from classes.class_Person import Person
from classes.class_Csv import CSVManager

import sqlite3
import csv
from datetime import datetime


# TODO: Add all classes here (Person, Car, DatabaseManager, CSVManager, etc.)

class PersonCarManagementSystem:
    def __init__(self):
        self.db_manager = DatabaseManager()
        self.db_manager.create_tables()
    
    def display_menu(self):
        """Display main menu"""
        print("\n" + "="*50)
        print("מערכת ניהול אנשים ומכוניות")
        print("="*50)
        print("1. הוסף אדם חדש")
        print("2. הוסף מכונית חדשה")
        print("3. הצג כל האנשים")
        print("4. הצג כל המכוניות")
        print("5. חפש אדם לפי ID")
        print("6. הצג מכוניות של אדם")
        print("7. עדכן פרטי אדם")
        print("8. מחק אדם")
        print("9. ייצא לCSV")
        print("10. ייבא מCSV")
        print("11. סטטיסטיקות")
        print("0. יציאה")
        print("="*50)
    
    def add_person(self,person: Person):
        """Add new person"""
        self.db_manager.insert_person(person)
           
    def add_car(self,car: Car):
        """Add new car"""
        self.db_manager.insert_car(car)
    
    def run(self):
        
        """Main loop"""
        while True:
            self.display_menu()
            choice = input("\nבחר אפשרות: ")
            # TODO: Handle all menu options
            if choice == "0":
                break
            elif choice == "1":
                p1 = self.add_person(Person(None,"david",35,"david@example.com"))
                p2 = self.add_person(Person(None,"dani",28,"sarah@example.com"))
                p3 = self.add_person(Person(None,"denael",42,"yossi@example.com"))
            elif choice == "2":
                self.add_car(Car(None, "Toyota", "Corolla", 2022, "Red", p1.person_id))
                self.add_car(Car(None, "Honda", "Civic", 2019, "bloow", p2.person_id))
                self.add_car(Car(None, "Toyota", "Corolla", 2022, "Red", p3.person_id))
                

if __name__ == "__main__":
    system = PersonCarManagementSystem()
    system.run()