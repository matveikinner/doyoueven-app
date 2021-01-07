import { inject, injectable } from 'inversify';
import ExerciseModel from '../domain/entities/models/exercise.model';
import IExerciseRepository from '../domain/interfaces/exercise.repository.interface';
import TYPES from './exercise.types';
import ExerciseLocalRepository from './local/exercise.local.repository';
import ExerciseRemoteRepository from './network/exercise.remote.repository';

@injectable()
export default class ExerciseRepositoryImplementation implements IExerciseRepository {
  @inject(TYPES.ExerciseLocalRepository)
  private _exerciseLocalRepository!: ExerciseLocalRepository;

  @inject(TYPES.ExerciseRemoteRepository)
  private _exerciseRemoteRepository!: ExerciseRemoteRepository;

  create(exercise: ExerciseModel): Promise<ExerciseModel> {
    return this._exerciseRemoteRepository.create(exercise).then((res) => {
      this._exerciseLocalRepository.create(exercise);
      return res;
    });
  }
}
