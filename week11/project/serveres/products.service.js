import supabase from "../DAL/db.js";
import  productsDal  from "../DAL/products.dal.js";

async function login(username , password){
  try {
    const users = await productsDal.login(username , password)  
    return users
  } catch (error) {
    console.error(error)
  }
}
async function getProducts(){
  try {
    const products = await productsDal.getProducts()  
    return products
    
  } catch (error) {
    console.error(error)
  }
}

export default {
  login,
  getProducts
}
