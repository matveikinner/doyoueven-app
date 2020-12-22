import ExerciseStructure from '../entities/structures/exercise.structure';

export default interface IExerciseService {
  getAll(): Promise<ExerciseStructure[]>;
}

// import { Customer } from '../../domain/model/customer';

// export default interface CustomerRepository {
//   get(customerCode: string): Promise<Customer>;
//   setProxyUrlInterceptor(url: string): void;
// }
