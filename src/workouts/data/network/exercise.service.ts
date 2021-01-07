import { inject, injectable } from 'inversify';
import TYPES from '../../../core/data/core.types';
import HttpService from '../../../core/domain/network/http.service';
import ExerciseModel from '../../domain/entities/models/exercise.model';
import IExerciseRepository from '../../domain/interfaces/exercise.repository.interface';

@injectable()
class ExerciseService implements IExerciseRepository {
  @inject(TYPES.HttpService) private _httpService!: HttpService;

  async create(exercise: ExerciseModel): Promise<ExerciseModel> {
    return (await this._httpService.getClient().post<ExerciseModel>('', exercise)).data;
  }

  // async getAll(): Promise<ExerciseStructure[]> {
  //   const response = (
  //     await this._httpService.getClient().get<ExerciseStructure[]>('', { params: { property: 'helpers.userCard' } })
  //   ).data;
  //   return response;
  // }
}

export default ExerciseService;
