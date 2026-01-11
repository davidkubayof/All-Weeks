import Note from './Note.js';
import NoteRepository from '../repositories/NoteRepository.js';

class User {
  constructor(username, password) {
    this.id = Date.now().toString();
    this.username = username;
    this.password = password;
    this.createdAt = new Date().toISOString();

    // 🔐 REQUIRED: create example notes automatically
    this.createExampleNotes();
  }

  createExampleNotes() {
    NoteRepository.add(new Note(this.username, 'Welcome to Mini Vault!'));
    NoteRepository.add(new Note(this.username, 'This is your second example note.'));
  }
}
export default User;