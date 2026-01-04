import { addOne , findMany , eqOrBigerD , updateOne , deletOne , findOneD } from "../DAL/users.js";

export async function creatUserS(data) {
    const res = await addOne(data)
    return res
}
export async function getAllUsersS() {
    const res = await findMany()
    return res
}
export async function eqOrBigerS() {
    const res = await eqOrBigerD()
    return res
}
export async function updatUserS(_id) {
    const res = await updateOne(_id)
    return res
}
export async function deletUserS(_id) {
    const res = await deletOne(_id)
    return res
}
export async function getByIdS(_id) {
    const res = await findOneD(_id)
    return res
}
