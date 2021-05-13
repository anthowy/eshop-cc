import React from 'react';
import { CartWrapper } from './styles';
import CartContext from 'context/CartContext';

export function Cart() {
  const { checkout } = React.useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }
  return (
    <CartWrapper className="mb-3 md:mb-0">
      <img className="w-6  md:hidden" src="https://res.cloudinary.com/anthow/image/upload/v1620127303/Coccinelles%20et%20compagnies/panier-rond-blc_hszoij.svg" />
      <img className="w-6 hidden md:block" src="https://res.cloudinary.com/anthow/image/upload/v1620127251/Coccinelles%20et%20compagnies/panier-rond-black_rxrd5c.svg" />
      <div className="md:text-white text-sm font-regular mt-3 mb-5 md:m-0">
        {totalQuantity} articles(s) / {checkout?.totalPrice || '0.00'}€
      </div>
    </CartWrapper>
  );
}
