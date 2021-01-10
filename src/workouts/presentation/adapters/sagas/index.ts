import { takeLatest } from 'redux-saga/effects';
import { CREATE_EXERCISE_REQUEST } from '../redux/exercise/exercise.constants';
import { createExerciseRequestSaga } from './exercise/exercise.saga';

export default [takeLatest(CREATE_EXERCISE_REQUEST, createExerciseRequestSaga)];
