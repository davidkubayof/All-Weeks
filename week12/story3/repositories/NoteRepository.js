import notes from '../data/notes.js';

class NoteRepository {
  static add(note) {
    notes.push(note);
  }

  static listByOwner(username) {
    return notes.filter(n => n.ownerUsername === username);
  }

  static deleteById(ownerUsername, noteId) {
    const index = notes.findIndex(
      n => n.ownerUsername === ownerUsername && n.id === noteId
    );
    if (index !== -1) notes.splice(index, 1);
  }
}
export default NoteRepository;