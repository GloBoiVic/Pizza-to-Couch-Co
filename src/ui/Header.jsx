import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';
import Username from '../features/user/Username.jsx';

function Header() {
  return (
    <header className="px-4 py-3 uppercase bg-yellow-500 border-b border-stone-200">
      <Link to="/" className="tracking-widest">
        Pizza to Couch Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
