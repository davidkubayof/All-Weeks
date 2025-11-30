class Person:
    def __init__(self, person_id, name, age, email):
        self.person_id = person_id
        self.name = name
        self.age = age
        self.email = email
        self.cars = []
    
    def add_car(self, car):
        """Add a car to person's cars list"""
        self.cars.append(car)
        car.owner_id = self.person_id
     
    def get_cars_count(self):
        """Return the number of cars owned"""
        return len(self.cars)
    
    def __str__(self):
        """String representation of person"""
        return f"Person(ID: {self.person_id}, Name: {self.name}, Age: {self.age}, Email: {self.email}, Cars: {self.get_cars_count()})"
    
    def to_dict(self):
        """Convert person to dictionary"""
        return {
            'person_id': self.person_id,
            'name': self.name,
            'age': self.age,
            'email': self.email,
            'cars_count': self.get_cars_count()
        }
"""
1. צור 3 אנשים עם הפרטים הבאים:
   - דוד כהן, גיל 35, david@example.com
   - שרה לוי, גיל 28, sarah@example.com
   - יוסי אברהם, גיל 42, yossi@example.com
"""