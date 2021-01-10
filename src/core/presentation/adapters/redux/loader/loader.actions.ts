import { CREATE_LOADER, REMOVE_LOADER } from './loader.constants';
import { LoaderActionTypes } from './loader.types';

export const createLoader = (): LoaderActionTypes => ({
  type: CREATE_LOADER,
});

export const removeLoader = (): LoaderActionTypes => ({
  type: REMOVE_LOADER,
});
