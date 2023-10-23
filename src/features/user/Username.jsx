import { useSelector } from 'react-redux';
import { getUserName } from './userSlice.js';

function Username() {
  const username = useSelector(getUserName);

  if (!username) return null;

  return <div className="hidden text-sm font-semibold sm:block">{username}</div>;
}

export default Username;
