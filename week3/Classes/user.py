class User:
    def __init__(self,name, id):
        self.name = name
        self.id = id
        self.borrowed_books = []

    def __str__(self):
        return f"name: {self.name} id: {self.id} books: {self.borrowed_books}"
