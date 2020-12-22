import { Container } from 'inversify';
import IExerciseService from '../domain/interfaces/exercise.interface';
import TYPES from './exercise.types';
import ExerciseService from './network/exercise.service';

const exerciseContainer = new Container();

exerciseContainer.bind<IExerciseService>(TYPES.IExerciseService).to(ExerciseService);

export default exerciseContainer;
