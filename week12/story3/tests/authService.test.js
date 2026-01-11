import assert from 'assert';
import AuthService from '../services/AuthService.js';
import users from '../data/users.js';
import notes from '../data/notes.js';

// reset data 
users.length = 0;
notes.length = 0;

/* REGISTER SUCCESS */
const user = AuthService.register('alice', 'password123');
assert.strictEqual(user.username, 'alice');
assert.strictEqual(users.length, 1);

/* AUTO NOTES CREATED */
const userNotes = notes.filter(n => n.ownerUsername === 'alice');
assert.strictEqual(userNotes.length, 2);

/* REGISTER DUPLICATE */
assert.throws(() => {
  AuthService.register('alice', 'password123');
});

/* LOGIN SUCCESS */
const loggedUser = AuthService.login('alice', 'password123');
assert.strictEqual(loggedUser.username, 'alice');

/* LOGIN FAIL */
assert.throws(() => {
  AuthService.login('alice', 'wrongpass');
});

console.log('✅ AuthService tests passed');
