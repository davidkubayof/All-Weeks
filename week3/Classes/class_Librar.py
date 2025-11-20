class Library:
    def __init__(self):
        self.list_of_books = []
        self.list_of_user = []

    def add_book(self , book):
        self.book = book
        self.list_of_books.append([book])
        return self.list_of_books
    
    def add_user(self ,user):
        self.user = user
        self.list_of_user.append([self.user])
        return self.list_of_user

    def borrow_book(self , user_id, book_isbn):#take
        self.user_id = user_id
        self.book_isbn = book_isbn
        for book in self.list_of_books:
            if book_isbn == self.book.ISBN:
                self.user.borrowed_books.append(book)
                self.book.is_available = False
           
        




    # def return_book(user_id, book_isbn):#bake
    #     pass
    
       
    # def list_available_books(self):
    #     for book in self.list_of_books:
            

    # def search_book(self , title , author):
    #     for book in self.list_of_books:
    #         if title or author in book:
    #             return book