import React from 'react';
import CartContext from 'context/CartContext';
import { CartItem, CartHeader, CartFooter } from './styles';
import { QuantityAdjuster } from '../QuantityAdjuster';
import { RemoveLineItem } from '../RemoveLineItem';

export function CartContents() {
  const { checkout, updateLineItem } = React.useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <>
  <section>
    <img className='w-1/6  mx-auto mt-2 mb-5 ' alt="accueil" src="https://res.cloudinary.com/anthow/image/upload/v1619966614/Coccinelles%20et%20compagnies/logo-titres_tlfbby.svg" />
    </section>
    <section className="flex p-5 flex-col border content-center m-auto w-2/3 mt-10">
      <h1 className="text-4xl mb-5">votre panier</h1>
      {!!checkout?.lineItems && (
        <CartHeader>
          <div>produits</div>
          <div>prix à l'unité</div>
          <div>quantité</div>
          <div>total</div>
        </CartHeader>
      )}
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>{item.variant.price} €</div>
          <div>
            <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
          </div>
          <div>{(item.quantity * item.variant.price).toFixed(2)}€</div>
          <div>
            <RemoveLineItem lineItemId={item.id} />
          </div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            <span>{checkout?.totalPrice}€</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems && <h4>votre panier est vide</h4>}
        <div>
          {!!checkout?.webUrl && (
            <button
            className="  italic block  py-1 px-3 text-3xl   text-center buttoncart rounded-full text-white "
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Paiement
            </button>
          )}
        </div>
    </section>
    </>
  );
}
