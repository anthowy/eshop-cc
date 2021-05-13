import React from 'react';
//import { ProductQuantityAdderWrapper } from './styles';
import CartContext from 'context/CartContext';

export function ProductQuantityAdder({ variantId, available }) {
  const [quantity, setQuantity] = React.useState(1);
  const { updateLineItem } = React.useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <>
    <div className="flex flex-col">
      <p className="mb-3 title-article text-2xl font-bold DancingScript  ">Quantité</p>
      <form onSubmit={handleSubmit}>
        <input 
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="bg-transparent border-boutique h-10  w-32 rounded p-1"
        />
        <button type="submit" className="  hover:opacity-80 block mt-16 p-2 text-2xl w-auto buy-boutique whitespace-nowrap rounded-full text-white "
 disabled={!available} fullWidth>
          Ajouter au panier
        </button>
      </form>
      </div>
      </>
  );
}
