import { Container } from 'inversify';
import coreContainer from '../../core/data/inversify.config';
import ExerciseInteractor from '../domain/interactors/exercise.interactor';
import IExerciseInteractor from '../domain/interfaces/exercise.interactor.interface';
import IExerciseRepository from '../domain/interfaces/exercise.repository.interface';
import ExerciseRepositoryImplementation from './exercise.repository.implementation';
import TYPES from './exercise.types';
import ExerciseLocalRepository from './local/exercise.local.repository';
import ExerciseRemoteRepository from './network/exercise.remote.repository';
import ExerciseService from './network/exercise.service';

// See issue about combining multiple containers
// https://github.com/inversify/InversifyJS/issues/776#issuecomment-685415856

const container = new Container();
const inheritContainer = container.createChild();
const exerciseContainer = Container.merge(coreContainer, inheritContainer);

exerciseContainer.bind<IExerciseRepository>(TYPES.ExerciseService).to(ExerciseService);
exerciseContainer.bind<IExerciseRepository>(TYPES.ExerciseRepository).to(ExerciseRepositoryImplementation);
exerciseContainer.bind<IExerciseRepository>(TYPES.ExerciseLocalRepository).to(ExerciseLocalRepository);
exerciseContainer.bind<IExerciseRepository>(TYPES.ExerciseRemoteRepository).to(ExerciseRemoteRepository);
exerciseContainer.bind<IExerciseInteractor>(TYPES.ExerciseInteractor).to(ExerciseInteractor);

export default exerciseContainer;
