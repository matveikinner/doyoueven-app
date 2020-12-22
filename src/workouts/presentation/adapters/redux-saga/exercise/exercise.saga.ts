import { getContext, put } from 'redux-saga/effects';
import { createExerciseSuccess } from '../../redux/exercise/exercise.actions';
// import { IUserService } from '../services/user/user.interface';
// import { userLoginSuccess } from '../store/user/user.actions';
// import { UserState } from '../store/user/user.types';

// export function* createExerciseSaga(): any {
//   const userService: IUserService = (yield getContext('userService')) as IUserService;
//   try {
//     const user = (yield userService.userLoginRequest()) as UserState;
//     yield put(userLoginSuccess(user));
//   } catch (err) {
//     console.log(err);
//   }
// }

export function* createExerciseRequestSaga(): any {
  // 1. Sync with local database through repository pattern
  // 2. Do HTTP Request
  // 3. Invokes proper interactor to handle the HTTP requests etc. with ex. try / catch
  yield put(createExerciseSuccess());
}

export function* removeExeriseRequest(): any {
  // 1. Sync with local database through repository pattern
  // 2. Do HTTP Request
  yield put(createExerciseSuccess());
}
