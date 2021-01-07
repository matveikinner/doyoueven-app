import { inject, injectable } from 'inversify';
import TYPES from '../../data/exercise.types';
import ExerciseModel from '../entities/models/exercise.model';
import IExerciseRepository from '../interfaces/exercise.repository.interface';

@injectable()
export default class ExerciseInteractor {
  @inject(TYPES.ExerciseRepository) private _exerciseRepository!: IExerciseRepository;

  async create(exercise: ExerciseModel): Promise<ExerciseModel> {
    const createdExercise = await this._exerciseRepository.create(exercise);
    return createdExercise;
  }
}
