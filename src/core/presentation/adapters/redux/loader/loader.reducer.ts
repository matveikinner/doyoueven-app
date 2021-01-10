import { CREATE_LOADER, REMOVE_LOADER } from './loader.constants';
import { LoaderActionTypes, LoaderState } from './loader.types';

const initialState: LoaderState = {
  active: false,
};

const loaderReducer = (state = initialState, action: LoaderActionTypes): LoaderState => {
  switch (action.type) {
    case CREATE_LOADER:
      return {
        ...state,
        active: true,
      };
    case REMOVE_LOADER:
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
