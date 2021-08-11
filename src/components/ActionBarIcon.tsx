import { MoveCellAction, DeleteCellAction } from '../state/actions';

interface ActionBarIconProps {
  action: () => MoveCellAction | DeleteCellAction;
  icon: string;
}

const ActionBarIcon: React.FC<ActionBarIconProps> = ({ action, icon }) => {
  return (
    <button className='button is-primary is-small' onClick={action}>
      <span className='icon'>
        <i className={`fas ${icon}`}></i>
      </span>
    </button>
  );
};

export default ActionBarIcon;
