import sqlite3
#
from classes.class_Person import Person
from classes.class_Car import Car

class DatabaseManager:
    def __init__(self, db_name='persons_cars.db'):
        """Initialize database connection"""
        self.db_name = db_name
        self.connection = sqlite3.connect(db_name)
        self.cursor = self.connection.cursor()
        
    def create_tables(self):
        try:    
            self.cursor.execute("""CREATE TABLE IF NOT EXISTS persons(
            person_id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            email TEXT UNIQUE NOT NULL
            )""")
            # TODO: Create cars table
            self.cursor.execute("""CREATE TABLE IF NOT EXISTS cars(
            car_id INTEGER PRIMARY KEY,
            brand TEXT NOT NULL,
            model TEXT NOT NULL,
            year INTEGER NOT NULL,
            color TEXT NOT NULL,
            owner_id INTEGER,
            FOREIGN KEY (owner_id) REFERENCES persons(person_id)
            )""")
            self.connection.commit()
            print("Tables created successfully")
        except sqlite3.Error as e:
            print(f"Error while creating tables: {e}")

    def insert_person(self, person):
        """Insert a person into database"""
        self.cursor.execute(f"""
        INSERT INTO persons(name,age,email)
        VALUES(?,?,?)""",(person.name, person.age, person.email))
        
        self.connection.commit()
  
    def insert_car(self, car):
        """Insert a car into database"""
        self.cursor.execute(f"""
        INSERT INTO persons(name,age,email)
        VALUES(?,?,?)""",(car.name, car.age, car.email))
        
        self.connection.commit()
    
    def get_all_persons(self):
        """Get all persons from database"""
        # TODO: implement and return list of Person objects
        pass
    
    def get_all_cars(self):
        """Get all cars from database"""
        # TODO: implement and return list of Car objects
        pass
    
    def get_person_by_id(self, person_id):
        """Get person by ID"""
        # TODO: implement
        pass
    
    def get_cars_by_owner(self, owner_id):
        """Get all cars owned by a person"""
        # TODO: implement
        pass
    
    def update_person(self, person):
        """Update person details"""
        # TODO: implement
        pass
    
    def delete_person(self, person_id):
        """Delete person from database"""
        # TODO: implement
        pass
    
    def close(self):
        """Close database connection"""
        self.connection.close()



# car1 = Car(None, "Toyota", "Corolla", 2022, "Red", pers1.person_id)  # p1.person_id = 1
# db.insert_car(car1)


# 3. שמור הכל במסד נתונים SQLite3
