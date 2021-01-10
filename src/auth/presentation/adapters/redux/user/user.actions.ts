import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from './user.constants';
import { UserActionTypes } from './user.types';
import Credentials from '../../../../domain/entities/models/credentials.model';
import User from '../../../../domain/entities/models/user.model';

export const registerUserRequest = (payload: Credentials): UserActionTypes => ({
  type: REGISTER_USER_REQUEST,
  payload,
});

export const registerUserSuccess = (payload: User): UserActionTypes => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = (): UserActionTypes => ({
  type: REGISTER_USER_FAILURE,
});
