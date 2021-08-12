import AddCellButton from './AddCellButton';
import { useActions } from '../hooks/useActions';
import './AddCell.css';

interface AddCellProps {
  previousCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${forceVisible && 'force-visible'}`}>
      <div className='add-buttons'>
        <AddCellButton action={() => insertCellAfter(previousCellId, 'code')} btnText='Code' />
        <AddCellButton action={() => insertCellAfter(previousCellId, 'text')} btnText='Text' />
      </div>
      <div className='divider'></div>
    </div>
  );
};
export default AddCell;
