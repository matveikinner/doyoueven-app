import ExerciseModel from '../../../../domain/entities/models/exercise.model';
import {
  CREATE_EXERCISE_FAILURE,
  CREATE_EXERCISE_REQUEST,
  CREATE_EXERCISE_SUCCESS,
  REMOVE_EXERCISE_FAILURE,
  REMOVE_EXERCISE_REQUEST,
  REMOVE_EXERCISE_SUCCESS,
} from './exercise.constants';

export interface Exercise {
  movement: string;
  sets: number;
  reps: number;
  load: number;
  restInBetween: string;
}

export interface CreateExerciseRequest {
  type: typeof CREATE_EXERCISE_REQUEST;
  // Changed from local Exercise to domains ExerciseModel
  payload: ExerciseModel;
}

interface CreateExerciseSuccess {
  type: typeof CREATE_EXERCISE_SUCCESS;
}

interface CreateExerciseFailure {
  type: typeof CREATE_EXERCISE_FAILURE;
}

interface RemoveExerciseRequest {
  type: typeof REMOVE_EXERCISE_REQUEST;
}

interface RemoveExerciseSuccess {
  type: typeof REMOVE_EXERCISE_SUCCESS;
}

interface RemoveExerciseFailure {
  type: typeof REMOVE_EXERCISE_FAILURE;
}

export interface ExerciseState {
  exercises: ExerciseModel[];
}

export type ExerciseActionTypes =
  | CreateExerciseRequest
  | CreateExerciseSuccess
  | CreateExerciseFailure
  | RemoveExerciseRequest
  | RemoveExerciseSuccess
  | RemoveExerciseFailure;
