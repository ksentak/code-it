import AddCellButton from './AddCellButton';
import { useActions } from '../hooks/useActions';
import './AddCell.css';

interface AddCellProps {
  nextCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible }) => {
  const { insertCellBefore } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <AddCellButton action={() => insertCellBefore(nextCellId, 'code')} btnText='Code' />
        <AddCellButton action={() => insertCellBefore(nextCellId, 'text')} btnText='Text' />
      </div>
      <div className='divider'></div>
    </div>
  );
};
export default AddCell;
