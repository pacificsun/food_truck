import { SEARCH_START, SEARCH_SUCESS, SEARCH_FAIL } from './search.types';

export const onSearchStart = () => ({
  type: SEARCH_START
});

export const onSearchSucess = text => ({
  type: SEARCH_SUCESS,
  payload: text
});

export const onSearchFail = error => ({
  type: SEARCH_FAIL,
  payload: error
});
