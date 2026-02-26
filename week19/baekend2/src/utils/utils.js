import fs from "fs/promises";

//write
export async function saveDataInFile(path, data) {
  try {
    const json = JSON.stringify(data, null, 2);
    fs.writeFile(path, json);
  } catch (error) {
    console.log({ error: error });
  }
}

//read
export async function readFileByPath(path) {
  try {
    const data = await fs.readFile(path, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log({ error: error });
  }
}
