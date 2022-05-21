import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartProduct } from "../../redux/actions/cart.js";

import Item from "./Item";

export const Cart = () => {
  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart_products);

  const handleremoveCartProduct = (id) => {
    dispatch(removeCartProduct(id));
    setUpdate((prev) => !prev);
  };

  return (
    <div className="p-11 m-12">
      {cartProducts.length === 0 ? (
        <h1>No products in cart !!!</h1>
      ) : (
        <>
          {cartProducts.map((product) => (
            <Item
              key={`CART_PRODUCT_${product.id}`}
              handleremoveCartProduct={handleremoveCartProduct}
              product={product}
            />
          ))}
        </>
      )}
    </div>
  );
};
