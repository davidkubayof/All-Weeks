import Note from '../models/Note.js';
import NoteRepository from '../repositories/NoteRepository.js';

class VaultService {
  static addNote(ownerUsername, text) {
    if (!text) throw new Error('Note text is required');
    if (text.length > 120) throw new Error('Note too long');

    NoteRepository.add(new Note(ownerUsername, text));
  }

  static listNotes(ownerUsername) {
    return NoteRepository.listByOwner(ownerUsername);
  }

  static deleteNote(ownerUsername, noteId) {
    NoteRepository.deleteById(ownerUsername, noteId);
  }
}
export default VaultService;