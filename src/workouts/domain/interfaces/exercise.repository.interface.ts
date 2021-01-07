import ExerciseModel from '../entities/models/exercise.model';

export default interface IExerciseRepository {
  create(exercise: ExerciseModel): Promise<ExerciseModel> | ExerciseModel;
}
