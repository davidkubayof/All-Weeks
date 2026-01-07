function validateBook(book) {
    if(typeof(book) !== "object"){
        return {
            valid: false,
            field:`book should be object ${book}`
        }
    }
    const {id , title , category , copies , minCopies , expiresAt} = book
    if(typeof(id) !== "string" || !id.trim()){
        return {
            valid: false,
            field:`id should be string and not empty ${id}`
        }
    }
    if(typeof(title) !== "string" || !title.trim()){
        return {
            valid: false,
            field:`title should be string and not empty ${title}`
        }
    } 
    if(typeof(category) !== "string" || !category.trim()){
        return {
            valid: false,
            field:`category should be string and not empty ${category}`
        }
    } 
    if(typeof(copies) !== "number" || copies >= 0){
        return {
            valid: false,
            field:`copies should be number and >= 0 ${copies}`
        }
    } 
    if(typeof(minCopies) !== "number"){
        return {
            valid: false,
            field:`minCopies should be number ${minCopies}`
        }
    } 
    if(typeof(expiresAt) !== null || typeof(expiresAt) !== "string"){
        return {
            valid: false,
            field:`expiresAt should be null or a valid date ${expiresAt}`
        }
    } 
    return {
            valid: true,
            field:`book pass ${book}`
        }
}    