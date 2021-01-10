import { takeLatest } from 'redux-saga/effects';
import { REGISTER_USER_REQUEST } from '../redux/user/user.constants';
import registerUserRequestSaga from './register.saga';

export default [takeLatest(REGISTER_USER_REQUEST, registerUserRequestSaga)];
