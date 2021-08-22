import { DeleteCellAction } from '../actions';
import { ActionType } from '../action-types';

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id
  };
};
