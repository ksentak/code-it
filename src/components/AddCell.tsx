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
        {/* 
          Todo: Extract duplicates

          - Keaton, 2021/08/09
         */}
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellBefore(nextCellId, 'code')}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus'></i>
          </span>
          <span>Code</span>
        </button>
        <button
          className='button is-rounded is-primary is-small'
          onClick={() => insertCellBefore(nextCellId, 'text')}
        >
          <span className='icon is-small'>
            <i className='fas fa-plus'></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className='divider'></div>
    </div>
  );
};
export default AddCell;
