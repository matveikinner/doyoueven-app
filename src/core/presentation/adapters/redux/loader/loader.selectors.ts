import { RootState } from '../../../frameworks/redux.config';
import { LoaderState } from './loader.types';

// eslint-disable-next-line import/prefer-default-export
export const selectLoader = (state: RootState): LoaderState => state.core.loader;
