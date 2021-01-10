import { getContext, put } from 'redux-saga/effects';
import { createLoader, removeLoader } from '../../../../core/presentation/adapters/redux/loader/loader.actions';
import User from '../../../domain/entities/models/user.model';
import IAuthInteractor from '../../../domain/interfaces/auth.interactor.interface';
import { registerUserFailure, registerUserSuccess } from '../redux/user/user.actions';
import { RegisterUserRequest } from '../redux/user/user.types';

export default function* registerUserRequestSaga({ payload }: RegisterUserRequest) {
  yield put(createLoader());

  const authInteractor: IAuthInteractor = (yield getContext('authInteractor')) as IAuthInteractor;

  try {
    const user = (yield authInteractor.register(payload)) as User;
    yield put(registerUserSuccess(user));
  } catch (err) {
    console.log(err);
    yield put(registerUserFailure());
  } finally {
    yield put(removeLoader());
  }
}
