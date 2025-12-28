import { readUsersFromFile , saveUsersToFile } from "../utils/utils.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await readUsersFromFile();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to read users" });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await readUsers();
    
    const user = users.find(u => String(u.id) === id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);

  } catch (err) {
    res.status(500).json({ error: "Failed to read users" });
  }
};

export const addUser = async (req,res) => {
    try {
        const name = req.body.name
        const users = await readUsers();

        const obj = { "id": users.length+1 , "name": name }

        saveUsersToFile(obj)
        
        res.json(obj)
        
    } catch (error) {
        res.status(500).json({ error: "Failed to add user" });
    }
}
