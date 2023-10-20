import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser.jsx';
import Button from './Button.jsx';

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-2xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" variant={'primary'}>
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
