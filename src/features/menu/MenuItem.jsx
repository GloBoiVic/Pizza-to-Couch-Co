import Button from '../../ui/Button.jsx';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} src={imageUrl} alt={name} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">{ingredients.join(', ')}</p>
        <div className="flex items-center justify-between mt-auto">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>
          )}

          <Button variant="small" disabled={soldOut}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
