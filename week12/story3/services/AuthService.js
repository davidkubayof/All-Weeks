import User from '../models/User.js';
import UserRepository from '../repositories/UserRepository.js';

class AuthService {
  static register(username, password) {
    if (!username || username.length < 3)
      throw new Error('Username must be at least 3 characters');

    if (!password || password.length < 6)
      throw new Error('Password must be at least 6 characters');

    if (UserRepository.exists(username))
      throw new Error('Username already exists');

    const user = new User(username, password);
    UserRepository.add(user);

    return user;
  }

  static login(username, password) {
    const user = UserRepository.findByUsername(username);
    if (!user || user.password !== password)
      throw new Error('Invalid credentials');

    return user;
  }
}
export default AuthService;