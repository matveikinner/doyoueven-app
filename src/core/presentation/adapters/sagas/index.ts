import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import exerciseSagas from '../../../../workouts/presentation/adapters/sagas';
import authSagas from '../../../../auth/presentation/adapters/sagas';

export default function* rootSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([...authSagas, ...exerciseSagas]);
}
