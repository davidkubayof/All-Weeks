import * as bcrypt from 'bcrypt';

export async function hash(pass:string): Promise<string> {
    const hashed = await bcrypt.hash(pass,10);
    return hashed;
}
export async function compare(pass:string,hashed:string): Promise<boolean> {
    const boolean = await bcrypt.compare(pass,hashed);
    return boolean;
}