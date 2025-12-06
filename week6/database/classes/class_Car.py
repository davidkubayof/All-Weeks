from datetime import datetime

class Car:
    def __init__(self, car_id, brand, model, year, color, owner_id=None):
        self.car_id = car_id
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color
        self.owner_id = owner_id

    def get_age(self):
        """Calculate car age"""
        year = datetime.now()
        return f"year = {year.year - self.year}"
        
    def __str__(self):
        """String representation of car"""
        return f"car_id: {self.car_id} brand: {self.brand} model: {self.model} year: {self.year} color: {self.color} owner_id: {self.owner_id}"    
    
    def to_dict(self):
        """Convert car to dictionary"""
        return {
            'car_id': self.car_id,
            'brand': self.brand,
            'model': self.model,
            'year': self.year,
            'color': self.color,
            'owner_id': self.owner_id
        }

"""
2. צור 5 מכוניות:
   - Toyota Corolla 2020 לבן - לדוד
   - Honda Civic 2019 כחול - לדוד
   - Mazda 3 2021 אדום - לשרה
   - Hyundai i30 2022 שחור - ליוסי
   - Kia Sportage 2023 אפור - ליוסי


"""