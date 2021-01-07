import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import TYPES from '../../data/exercise.types';
import exerciseContainer from '../../data/inversify.config';
import IExerciseInteractor from '../../domain/interfaces/exercise.interactor.interface';
import { rootReducer } from '../adapters/redux';
import rootSaga from '../adapters/redux-saga/exercise';

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
const exerciseInteractor = exerciseContainer.get<IExerciseInteractor>(TYPES.ExerciseInteractor);

const sagaMiddleware = createSagaMiddleware({
  /**
   * Pass context to later use DI in Redux Sagas, see
   * https://stackoverflow.com/a/55558745/12660598
   */
  context: {
    exerciseInteractor,
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
