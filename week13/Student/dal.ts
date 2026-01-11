import { Student } from "./student.modol.ts";

async function addStudent(studentObj: {
  fullName: string;
  email: string;
  phone: string;
}) {
  const res = await Student.create(studentObj);
  console.log(res);
  console.log(`Added student with id ${res.dataValues.id}`);
}

// addStudent({fullName:"DK",email:"FAKE@GMAIL.COM",phone:"+97255123456"})

async function addStudents(
  studentObj: [
    { fullName: string; email: string; phone: string },
    { fullName: string; email: string; phone: string }
  ]
) {
  const res = await Student.bulkCreate(studentObj);
  console.log(res);
  console.log(`Added student with id ${res}`);
}

// addStudents([{fullName:"DK",email:"FAKE@GMAIL.COM",phone:"+97255123456"},{fullName:"DKgraew",email:"hestjFAKE@GMAIL.COM",phone:"+9725512345647"}])
async function findAll() {
  const res = await Student.findAll();
  console.log(res);
}
// findAll()
async function findByPk(num:number) {
  const res = await Student.findByPk(num);
  console.log(res);
}
// findByPk(4)
async function findOneByEmail(email:string) {
  const res = await Student.findOne({ where: { email: email}});
  console.log(res);
}
// findOneByEmail('FAKE@GMAIL.COM')
async function findOneByEmailAndFullname(email:string,fullName:string) {
  const res = await Student.findOne({ where: {email ,fullName}});
  console.log(res);
}
// findOneByEmailAndFullname('FAKE@GMAIL.COM',"DK")

async function updated(id:number , phone:string) {
  const res = await Student.update({phone},{where:{id}});
  console.log(res);
}
// updated(6,"yrjeskj")

async function destroy(id:number) {
  const res = await Student.destroy({ where: {id}});
  console.log(res);
}
// destroy(6)

