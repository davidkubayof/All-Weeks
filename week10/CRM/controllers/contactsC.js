import { readFileByPath } from '../utils/utils.js'

export const searchByNameOrPhone = (req,res) => {
    try {
        res.json(req.query);

    } catch (error) {
        res.status(500).json({ error: "Failed to conact server " });
    }

}
export const getContact = async (req,res) => {
    try {
        const contacts = await readFileByPath('./data/contacts.json')
        const indexConact = contacts.findIndex(contact => contact.id === req.params.id)
        if(indexConact !== -1){
            res.json(contacts[indexConact]);
        } else {
            res.send('not exists id: ')
        }
        

    } catch (error) {
        res.status(404).json({ error: "server " });
    }

}