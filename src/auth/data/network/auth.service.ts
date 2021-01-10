import { inject, injectable } from 'inversify';
import IAuthService from '../../domain/interfaces/auth.service.interface';
import CORE_TYPES from '../../../core/data/core.types';
import HttpService from '../../../core/data/network/http.service';
import Credentials from '../../domain/entities/models/credentials.model';
import User from '../../domain/entities/models/user.model';

@injectable()
export default class AuthService implements IAuthService {
  @inject(CORE_TYPES.HttpService) private _httpService!: HttpService;

  async register(credentials: Credentials): Promise<User> {
    return (await this._httpService.getClient().post<User>('auth/register', credentials)).data;
  }

  async login(credentials: Credentials): Promise<User> {
    return (await this._httpService.getClient().post<User>('auth/login', credentials)).data;
  }
}
