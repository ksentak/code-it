import { InsertCellAfterAction } from '../state/actions';

interface AddCellButtonProps {
  action: () => InsertCellAfterAction;
  btnText: string;
}

const AddCellButton: React.FC<AddCellButtonProps> = ({ action, btnText }) => {
  return (
    <button className='button is-rounded is-primary is-small' onClick={action}>
      <span className='icon is-small'>
        <i className='fas fa-plus'></i>
      </span>
      <span>{btnText}</span>
    </button>
  );
};

export default AddCellButton;
