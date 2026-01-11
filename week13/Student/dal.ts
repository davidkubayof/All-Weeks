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
async function findOne(email:string) {
  const res = await Student.findOne({ where: { email: email}});
  console.log(res);
}
findOne('FAKE@GMAIL.COM')