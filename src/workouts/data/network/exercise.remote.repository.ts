import { inject, injectable } from 'inversify';
import ExerciseModel from '../../domain/entities/models/exercise.model';
import IExerciseRepository from '../../domain/interfaces/exercise.repository.interface';
import TYPES from '../exercise.types';
import ExerciseService from './exercise.service';

@injectable()
export default class ExerciseRemoteRepository implements IExerciseRepository {
  @inject(TYPES.ExerciseService) private _exerciseService!: ExerciseService;

  create(exercise: ExerciseModel): Promise<ExerciseModel> {
    return this._exerciseService.create(exercise);
  }
}
