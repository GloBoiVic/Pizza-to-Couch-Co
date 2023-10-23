import { useDispatch } from 'react-redux';
import Button from '../../ui/Button.jsx';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))} variant={'round'}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))} variant={'round'}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
