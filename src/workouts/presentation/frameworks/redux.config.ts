import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../adapters/redux';
import rootSaga from '../adapters/redux-saga/exercise';
// import TYPES from '../services/service.types';
// import { IUserService } from '../services/user/user.interface';
// import appContainer from './inversify.config';

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
// const userService = appContainer.get<IUserService>(TYPES.IUserService);

const sagaMiddleware = createSagaMiddleware({
  /**
   * Pass context to later use DI in Redux Sagas, see
   * https://stackoverflow.com/a/55558745/12660598
   */
  // context: {
  //   userService,
  // },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
