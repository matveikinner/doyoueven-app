import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from './user.constants';
import { UserActionTypes, UserState } from './user.types';

const initialState: UserState = {
  accessToken: '',
  isLoggedIn: false,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
