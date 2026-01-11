import assert from 'assert';
import UserRepository from '../repositories/UserRepository.js';
import NoteRepository from '../repositories/NoteRepository.js';
import User from '../models/User.js';
import Note from '../models/Note.js';
import users from '../data/users.js';
import notes from '../data/notes.js';

// reset data
users.length = 0;
notes.length = 0;

/* USER REPO */
const user = new User('charlie', 'pass1234');
UserRepository.add(user);

assert.ok(UserRepository.exists('charlie'));
assert.strictEqual(
  UserRepository.findByUsername('charlie').username,
  'charlie'
);

/* NOTE REPO */
const note = new Note('charlie', 'test note');
NoteRepository.add(note);

const list = NoteRepository.listByOwner('charlie');
assert.strictEqual(list.length, 3); // 2 auto + 1 manual

NoteRepository.deleteById('charlie', note.id);
assert.strictEqual(
  NoteRepository.listByOwner('charlie').length,
  2
);

console.log('✅ Repository tests passed');
