import assert from 'assert';
import VaultService from '../services/VaultService.js';
import AuthService from '../services/AuthService.js';   
import users from '../data/users.js';
import notes from '../data/notes.js';

// reset data
users.length = 0;
notes.length = 0;

AuthService.register('bob', 'securepass');

/* ADD NOTE */
VaultService.addNote('bob', 'My private note');
let bobNotes = VaultService.listNotes('bob');
assert.strictEqual(bobNotes.length, 3); // 2 examples + 1 new

/* NOTE OWNERSHIP */
assert.ok(bobNotes.every(n => n.ownerUsername === 'bob'));

/* DELETE NOTE */
const noteId = bobNotes[0].id;
VaultService.deleteNote('bob', noteId);
bobNotes = VaultService.listNotes('bob');
assert.strictEqual(bobNotes.length, 2);

/* VALIDATION */
assert.throws(() => {
  VaultService.addNote('bob', '');
});

assert.throws(() => {
  VaultService.addNote('bob', 'a'.repeat(121));
});

console.log('✅ VaultService tests passed');
