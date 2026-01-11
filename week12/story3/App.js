import CliMenu from './ui/CliMenu.js';
import AuthService from './services/AuthService.js';
import VaultService from './services/VaultService.js';

class App {
  constructor() {
    this.currentUser = null;
  }

  start() {
    while (true) {
      try {
        if (!this.currentUser) this.guestFlow();
        else this.userFlow();
      } catch (err) {
        CliMenu.message(err.message);
      }
    }
  }

  guestFlow() {
    const choice = CliMenu.guestMenu();

    if (choice === '1') {
      const { username, password } = CliMenu.askCredentials();
      AuthService.register(username, password);
      CliMenu.message('Registered successfully');
    }

    if (choice === '2') {
      const { username, password } = CliMenu.askCredentials();
      this.currentUser = AuthService.login(username, password);
      CliMenu.message(`Welcome ${username}`);
    }

    if (choice === '3') process.exit();
  }

  userFlow() {
    const choice = CliMenu.userMenu();

    if (choice === '1') {
      VaultService.addNote(this.currentUser.username, CliMenu.askNoteText());
      CliMenu.message('Note added');
    }

    if (choice === '2') {
      const notes = VaultService.listNotes(this.currentUser.username);
      notes.forEach(n =>
        console.log(`${n.id} | ${n.text} | ${n.createdAt}`)
      );
    }

    if (choice === '3') {
      VaultService.deleteNote(
        this.currentUser.username,
        CliMenu.askNoteId()
      );
      CliMenu.message('Note deleted');
    }

    if (choice === '4') {
      this.currentUser = null;
      CliMenu.message('Logged out');
    }
  }
}
export default App;