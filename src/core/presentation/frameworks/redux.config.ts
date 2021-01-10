/**
 * Default imports
 */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import coreRootReducer from '../adapters/redux';
import authRootReducer from '../../../auth/presentation/adapters/redux';
import rootSaga from '../adapters/sagas';

/**
 * Inversify DI imports to provide them as context to Sagas
 */
import EXERCISE_TYPES from '../../../workouts/data/exercise.types';
import AUTH_TYPES from '../../../auth/data/auth.types';
import IExerciseInteractor from '../../../workouts/domain/interfaces/exercise.interactor.interface';
import exerciseContainer from '../../../workouts/data/inversify.config';
import authContainer from '../../../auth/data/inversify.config';
import IAuthInteractor from '../../../auth/domain/interfaces/auth.interactor.interface';

// const middlewares = [];
// const enhancers = [];

/**
 * Fix to TypeScript, see
 * https://stackoverflow.com/a/52801110/12660598
 */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Inversify Context injection to redux Saga
// Rule violation here, as exporting TYPES from data layer
const authInteractor = authContainer.get<IAuthInteractor>(AUTH_TYPES.AuthInteractor);
const exerciseInteractor = exerciseContainer.get<IExerciseInteractor>(EXERCISE_TYPES.ExerciseInteractor);

const sagaMiddleware = createSagaMiddleware({
  /**
   * Pass context to later use DI in Redux Sagas, see
   * https://stackoverflow.com/a/55558745/12660598
   */
  context: {
    authInteractor,
    exerciseInteractor,
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authRootReducer,
  core: coreRootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
