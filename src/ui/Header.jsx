import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';
import Username from '../features/user/Username.jsx';

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-red-400 border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizza to Couch Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
