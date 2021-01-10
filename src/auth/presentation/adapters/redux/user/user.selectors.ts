import { RootState } from '../../../../../core/presentation/frameworks/redux.config';

// eslint-disable-next-line import/prefer-default-export
export const selectIsLoggedIn = (state: RootState): boolean => state.auth.user.isLoggedIn;
