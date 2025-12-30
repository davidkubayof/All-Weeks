import { readAllD, insertOne } from "../DAL/students.dal.js";
//
export async function readStudentS(){
    const allStudents = await readAllD();
    console.log(typeof(allStudents));
    console.log(allStudents);
    
    if (allStudents===false) {
      console.log("AAAAA");
      
      throw new Error("Missing required fields")
    }
    
    return allStudents;
}

export async function createStudentS(student){
    const {name,age,className} = student

    if (!name || !age || !className) {
      throw new Error("Missing required fields")
    }

    const newStudent = await insertOne(student);
    return newStudent;
}

