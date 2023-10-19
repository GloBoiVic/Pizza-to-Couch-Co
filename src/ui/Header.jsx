import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder.jsx';

function Header() {
  return (
    <header>
      <Link to="/">Pizza to Couch Co.</Link>
      <SearchOrder />
      <p>Victor</p>
    </header>
  );
}

export default Header;
