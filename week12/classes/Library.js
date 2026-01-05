class MediaItem {
    constructor(title, year, genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
    }
    getSummary(){
        return `${this.title} ${this.year} ${this.genre}`
    }
}
const m1 = new MediaItem("The Book", 1972 ,"Ation");
console.log(m1.getSummary());

class Book extends MediaItem {
    constructor(title, year, genre, author , pageCount ){
        super(title, year, genre)
        this.author = author
        this.pageCount = pageCount
    } 
    getSummary(){
        return `Book: 'Dune' by ${this.author} ${this.pageCount} pages`
    }
}
const b1 = new Book("Frank Herbert",412)
console.log(b1.getSummary());


class Movie extends MediaItem {
    constructor(title, year, genre,director, durationMinutes){
        super(title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes 
    }
    getSummary(){
        return `Movie: 'Dune' directed by ${this.director} ${this.durationMinutes} min`
    }
}
const movie1 = new Movie("Denis Villeneuve",155)
console.log(movie1.getSummary())

class Library {
    constructor(){
        this.listOfItem = []
    }
    addItem(item = {}){
        this.listOfItem.push(item)
    }
    search(term){
        return this.listOfItem.filter(item => item.title.toLowerCase().includes(term))
    }
    listByGenre(genre){
        return this.listOfItem.filter(item => item.genre === genre)
    }
}
const l1 = new Library() 

l1.addItem(new Book("dune",1972,"action","Frank Herbert",412))
l1.addItem(new Movie("Ari",1974,"sins","Robart Herbert",100))

console.log(l1.search("dune"));
console.log(l1.listByGenre("sins"));


