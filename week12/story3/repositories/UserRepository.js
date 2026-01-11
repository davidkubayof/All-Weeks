import users from '../data/users.js';

class UserRepository {
  static findByUsername(username) {
    return users.find(u => u.username === username);
  }

  static exists(username) {
    return !!this.findByUsername(username);
  }

  static add(user) {
    users.push(user);
  }
}
export default UserRepository;