import { combineReducers } from 'redux';
import exerciseReducer from './exercise/exercise.reducer';

export const rootReducer = combineReducers({
  exercises: exerciseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
