import { CREATE_LOADER, REMOVE_LOADER } from './loader.constants';

export interface CreateLoader {
  type: typeof CREATE_LOADER;
}

export interface RemoveLoader {
  type: typeof REMOVE_LOADER;
}

export interface LoaderState {
  active: boolean;
}

export type LoaderActionTypes = CreateLoader | RemoveLoader;
