import readline from 'readline-sync';

class CliMenu {
  static guestMenu() {
    console.log('\n1. Register\n2. Login\n3. Exit');
    return readline.question('Choose: ');
  }

  static userMenu() {
    console.log('\n1. Add note\n2. List notes\n3. Delete note\n4. Logout');
    return readline.question('Choose: ');
  }

  static askCredentials() {
    const username = readline.question('Username: ');
    const password = readline.question('Password: ', { hideEchoBack: true });
    return { username, password };
  }

  static askNoteText() {
    return readline.question('Note text: ');
  }

  static askNoteId() {
    return readline.question('Note ID to delete: ');
  }

  static message(msg) {
    console.log(msg);
  }
}
export default CliMenu;