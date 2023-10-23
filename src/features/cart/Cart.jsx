import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton.jsx';
import Button from '../../ui/Button.jsx';
import CartItem from './CartItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice.js';
import { getUserName } from '../user/userSlice.js';
import EmptyCart from './EmptyCart.jsx';

function Cart() {
  const username = useSelector(getUserName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu"> &larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold mt-7">Your cart, {username}</h2>

      <ul className="mt-3 border-b divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button variant={'primary'} to="/order/new">
          Order pizzas
        </Button>

        <Button onClick={handleClearCart} variant="secondary">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
