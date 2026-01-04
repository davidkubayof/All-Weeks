import { getSupabase } from "../DB/supabase.db.js"

export async function creatUserD(objUser){
        const { data , error } = await getSupabase().from('users').insert(objUser).select()    
        if(error){throw error}        
        return data[0]
}

export async function validUserD(objUser){
        const { data , error } = await getSupabase().from('users').select('*').eq("username",objUser.username).eq("password",objUser.password)    
        if(error){throw error}                
        return data[0]
}