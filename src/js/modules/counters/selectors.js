import { NAME } from './constants';

export const getAll = state => state.get(NAME).toJS();
