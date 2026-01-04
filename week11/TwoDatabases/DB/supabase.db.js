import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

// const supabase = createClient(process.env.DB_URL, process.env.DB_PUBLIC_SEC);
// export default supabase;

let supabase = null;

export function connectToSupabase() {
  try {
    supabase = createClient(process.env.DB_URL, process.env.DB_PUBLIC_SEC);
    console.log("Connected to Supabase.");
  } catch (err) {
    console.error(err);
  }
}

export function getSupabase(){
    if(!supabase){
        return new Error("Not connected to supabase")
    }
    return supabase;
}
