import { inject, injectable } from 'inversify';
import AUTH_TYPES from '../../data/auth.types';
import Credentials from '../entities/models/credentials.model';
import User from '../entities/models/user.model';
import IAuthService from '../interfaces/auth.service.interface';

@injectable()
export default class AuthInteractor {
  @inject(AUTH_TYPES.AuthService) private _authService!: IAuthService;

  async register(credentials: Credentials): Promise<User> {
    const user = await this._authService.register(credentials);
    return user;
  }
}
