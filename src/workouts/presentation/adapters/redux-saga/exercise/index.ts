import { takeLatest } from 'redux-saga/effects';
import { CREATE_EXERCISE_REQUEST } from '../../redux/exercise/exercise.constants';
import { createExerciseRequestSaga } from './exercise.saga';

export default function* rootSaga(): any {
  yield takeLatest(CREATE_EXERCISE_REQUEST, createExerciseRequestSaga);
}
