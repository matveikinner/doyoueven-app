import { RootState } from '..';
import { ExerciseState } from './exercise.types';

// eslint-disable-next-line import/prefer-default-export
export const selectExercise = (state: RootState): ExerciseState => state.exercises;
