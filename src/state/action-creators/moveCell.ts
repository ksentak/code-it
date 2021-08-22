import { MoveCellAction, Direction } from '../actions';
import { ActionType } from '../action-types';

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction
    }
  };
};
