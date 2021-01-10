import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from './user.constants';
import Credentials from '../../../../domain/entities/models/credentials.model';
import User from '../../../../domain/entities/models/user.model';

export interface UserState {
  accessToken: string;
  isLoggedIn: boolean;
}

export interface RegisterUserRequest {
  type: typeof REGISTER_USER_REQUEST;
  payload: Credentials;
}

export interface RegisterUserSuccess {
  type: typeof REGISTER_USER_SUCCESS;
  payload: User;
}

export interface RegisterUserFailure {
  type: typeof REGISTER_USER_FAILURE;
}

export type UserActionTypes = RegisterUserRequest | RegisterUserSuccess | RegisterUserFailure;
