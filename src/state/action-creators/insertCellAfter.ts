import { InsertCellAfterAction } from '../actions';
import { ActionType } from '../action-types';
import { CellTypes } from '../cell';

export const insertCellAfter = (id: string | null, type: CellTypes): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type
    }
  };
};
