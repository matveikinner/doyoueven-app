import Credentials from '../entities/models/credentials.model';
import User from '../entities/models/user.model';

export default interface IAuthService {
  register(credentials: Credentials): Promise<User>;
}
