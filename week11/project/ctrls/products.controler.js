import productsService from "../serveres/products.service.js";

async function login(req,res){
    try {        
        const {username , password} = req.body;
        const users = await productsService.login(username , password)
                
        if(users.length !== 0){
            res.status(200).json("Login successful ")
        } else {
            res.status(404).json("Wrong username or password ")
        }
    } catch (error) {
        res.sendStatus(401)
    }
}

async function getProducts(req,res){
    const products = await productsService.getProducts()    
    
    if(false){
        res.json(products)
    } else {
        res.status(401).json("Unauthorized")
    }
}

export default {
    login,
    getProducts
}