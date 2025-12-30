import supabase from "./db.js";

async function login(username , password) {
  try {
      const { data , error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)

      if(error){
        throw error
      }
      return data

  } catch (error) {
      console.error(error)
  }
}

async function getProducts() {
    try {
      const { data , error } = await supabase
        .from('products')
        .select('*')
      if(error){
        throw error
      }
      return data
    } catch (error) {
        console.error(error)    
    }
}

export default {
  login,
  getProducts
}