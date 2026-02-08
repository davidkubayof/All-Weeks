import { NoteRepository } from "../repositories/NoteRepository.js";
import { Note } from "../models/Note.js";

export class VaultService {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  addNote(ownerUsername, text) {
    if (!text) throw new Error('Note text is required');
    this.noteRepository.add()
  }

  listNotes(ownerUsername) {

  }

  deleteNote(ownerUsername, noteId) {
    
  }
}