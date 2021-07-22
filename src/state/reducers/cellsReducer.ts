import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Cell } from '../cell';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initalState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {}
};

const reducer = (state: CellsState = initalState, action: Action): CellsState => {
  return state;
};

export default reducer;
