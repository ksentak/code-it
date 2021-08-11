import ActionBarIcon from './ActionBarIcon';
import { useActions } from '../hooks/useActions';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <ActionBarIcon icon='fa-arrow-up' action={() => moveCell(id, 'up')} />
      <ActionBarIcon icon='fa-arrow-down' action={() => moveCell(id, 'down')} />
      <ActionBarIcon icon='fa-times' action={() => deleteCell(id)} />
    </div>
  );
};

export default ActionBar;
