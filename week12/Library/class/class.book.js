class Book {
    constructor(id,title,copies,minCopies,expiresAt = null){
        this.id = id
        this.title = title
        this.copies = copies
        this.minCopies = minCopies
        this.expiresAt = expiresAt
    }
}