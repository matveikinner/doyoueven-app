import {
  CREATE_EXERCISE_FAILURE,
  CREATE_EXERCISE_REQUEST,
  CREATE_EXERCISE_SUCCESS,
  REMOVE_EXERCISE_FAILURE,
  REMOVE_EXERCISE_REQUEST,
  REMOVE_EXERCISE_SUCCESS,
} from './exercise.constants';
import { Exercise, ExerciseActionTypes } from './exercise.types';

export const createExerciseRequest = (payload: Exercise): ExerciseActionTypes => ({
  type: CREATE_EXERCISE_REQUEST,
  payload,
});

export const createExerciseSuccess = (): ExerciseActionTypes => ({
  type: CREATE_EXERCISE_SUCCESS,
});

export const createExerciseFailure = (): ExerciseActionTypes => ({
  type: CREATE_EXERCISE_FAILURE,
});

export const removeExerciseRequest = (): ExerciseActionTypes => ({
  type: REMOVE_EXERCISE_REQUEST,
});

export const removeExerciseSuccess = (): ExerciseActionTypes => ({
  type: REMOVE_EXERCISE_SUCCESS,
});

export const removeExerciseFailure = (): ExerciseActionTypes => ({
  type: REMOVE_EXERCISE_FAILURE,
});
