import { getContext, put } from 'redux-saga/effects';
import { createLoader, removeLoader } from '../../../../../core/presentation/adapters/redux/loader/loader.actions';
import IExerciseInteractor from '../../../../domain/interfaces/exercise.interactor.interface';
import { createExerciseFailure, createExerciseSuccess } from '../../redux/exercise/exercise.actions';
import { CreateExerciseRequest } from '../../redux/exercise/exercise.types';

export function* createExerciseRequestSaga({ payload }: CreateExerciseRequest) {
  // Fire up the loader
  yield put(createLoader());
  const exerciseInteractor: IExerciseInteractor = (yield getContext('exerciseInteractor')) as IExerciseInteractor;
  try {
    yield exerciseInteractor.create(payload);
    yield put(createExerciseSuccess());
  } catch (err) {
    console.log(err);
    yield put(createExerciseFailure());
  } finally {
    yield put(removeLoader());
  }
}

export function* removeExeriseRequest(): any {
  // 1. Sync with local database through repository pattern
  // 2. Do HTTP Request
  yield put(createExerciseSuccess());
}
