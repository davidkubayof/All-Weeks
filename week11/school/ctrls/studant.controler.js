import { createStudentS, readStudentS } from "../services/students.service.js";

export async function readStudentC(req, res) {
  try {
    const result = await readStudentS();
    res.json(result);
  } catch (error) {
    console.error(error);
  }
}
export async function createStudentC(req, res) {
  try {
    const student = req.body;
    const newStudent = await createStudentS(student);

    // הצלחה
    return res.status(201).json({
      success: true,
      data: newStudent,
    });

  } catch (error) {
    if (error.includes("Missing required fields")) {
      return res.status(400).json({
        success: false,
        message: error.message + ": name, age & className"
      });
    }
  }
}

export async function getStudentByIDC(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
  } catch (error) {
    console.error(error);
  }
}
export async function updateStudent(req, res) {
  try {
    const { student } = req.body;
  } catch (error) {
    console.error(error);
  }
}
export async function deleteStudent(req, res) {
  try {
    const { student } = req.body;
  } catch (error) {
    console.error(error);
  }
}
