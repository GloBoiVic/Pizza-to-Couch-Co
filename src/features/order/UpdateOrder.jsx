import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button.jsx';
import { updateOrder } from '../../services/apiRestaurant.js';

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button variant={'primary'}>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
}
