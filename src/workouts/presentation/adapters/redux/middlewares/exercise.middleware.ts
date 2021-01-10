import { AnyAction, MiddlewareAPI, Dispatch } from 'redux';
// import { RootState } from '..';
// import { CREATE_EXERCISE_REQUEST } from '../exercise/exercise.constants';
// import { ExerciseActionTypes } from '../exercise/exercise.types';

// type Middleware<S, E extends AnyAction> = (
//   api: Dispatch<E> extends Dispatch<AnyAction> ? MiddlewareAPI<Dispatch<E>, S> : never
// ) => (next: Dispatch<E>) => (event: E) => ReturnType<Dispatch<E>>;

// // To isolate side-effects and reduce clutter in Redux Saga
// export const createExerciseFlow: Middleware<RootState, ExerciseActionTypes> = ({ dispatch }) => (next) => (action) => {
//   next(action);

//   if (action.type === CREATE_EXERCISE_REQUEST) {
//     // dispatch(displaySpinner());
//   }

//   return next(action);
// };

// export default [createExerciseFlow];
