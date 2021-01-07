import ExerciseModel from '../entities/models/exercise.model';

export default interface IExerciseInteractor {
  create(exercise: ExerciseModel): Promise<ExerciseModel>;
}
