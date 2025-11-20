class Book:
    def __init__(self, title, author, ISBN):
        self.title = title
        self.author = author
        self.ISBN = ISBN
        self.is_available = True 

    def __str__(self):
        return f"title: {self.title}  author: {self.author} is_available: {self.is_available}"