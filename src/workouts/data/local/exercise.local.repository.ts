import { injectable } from 'inversify';
import ExerciseModel from '../../domain/entities/models/exercise.model';
import IExerciseRepository from '../../domain/interfaces/exercise.repository.interface';

@injectable()
export default class ExerciseLocalRepository implements IExerciseRepository {
  // eslint-disable-next-line class-methods-use-this
  create(exercise: ExerciseModel): ExerciseModel {
    const storedExercise = localStorage.setItem('exercise', JSON.stringify(exercise));
    return exercise;
  }
}
