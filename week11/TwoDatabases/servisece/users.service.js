import { creatUserD , validUserD} from '../DAL/users.supabase.js'

export async function creatUserS(objUser){
    const user = await creatUserD(objUser)
    return user
}
export async function validUserS(objUser){
    const user = await validUserD(objUser)
    return user
}