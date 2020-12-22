import { inject, injectable } from 'inversify';
import TYPES from '../../../core/data/core.types';
import { IHttpService } from '../../../core/domain/interfaces/http.interface';
import ExerciseStructure from '../../domain/entities/structures/exercise.structure';
import IExerciseService from '../../domain/interfaces/exercise.interface';

@injectable()
class ExerciseService implements IExerciseService {
  @inject(TYPES.IHttpService) private _httpService!: IHttpService;

  async getAll(): Promise<ExerciseStructure[]> {
    const response = (
      await this._httpService.getClient().get<ExerciseStructure[]>('', { params: { property: 'helpers.userCard' } })
    ).data;
    return response;
  }
}

export default ExerciseService;
