import { CREATE_EXERCISE_FAILURE, CREATE_EXERCISE_REQUEST, CREATE_EXERCISE_SUCCESS } from './exercise.constants';
import { ExerciseActionTypes, ExerciseState } from './exercise.types';

const initialState: ExerciseState = {
  exercises: [],
};

const exerciseReducer = (state = initialState, action: ExerciseActionTypes): ExerciseState => {
  switch (action.type) {
    case CREATE_EXERCISE_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_EXERCISE_SUCCESS:
      return {
        ...state,
      };
    case CREATE_EXERCISE_FAILURE:
      return {
        ...state,
      };
    // case REMOVE_EXERCISE:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

export default exerciseReducer;
