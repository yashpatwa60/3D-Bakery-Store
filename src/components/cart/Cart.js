import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartProduct } from "../../redux/actions/cart.js";
import noProduct from "../../assets/img/no-product-found.png";
import { Link } from "react-router-dom";

import Item from "./Item";

export const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart_products);
  const subtotal = useSelector(state => state.cart.subtotal)

  const handleremoveCartProduct = (id) => {
    dispatch(removeCartProduct(id));
  };

  return (
    <div className="p-11 m-12">
      {cartProducts.length === 0 ? (
        <div className="flex justify-center gap-12">
          <div>
            <img src={noProduct} alt="" />
          </div>
          <div>
            <p className="text-3xl underline decoration-pink-500">
              No products in cart
            </p>
            <Link to="/">
              <p className="inline-flex rounded-lg text-white font-semibold items-center my-3 px-3 py-2 bg-blue-400">
                Go Back to Shopping
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-8">
              {cartProducts.map((product, product_index) => (
                <Item
                  key={`CART_PRODUCT_${product_index}`}
                  handleremoveCartProduct={handleremoveCartProduct}
                  product={product}
                />
              ))}
            </div>
            <div className="col-span-4">
              <div className="p-5 border rounded-lg border-gray-300">
                <p className="text-2xl underline decoration-pink-500 font-semibold uppercase">
                  Order Details
                </p>
                <p className="flex my-2 justify-between">
                  Subtotal <span className="font-semibold">₹ {subtotal}</span>
                </p>
                <p className="flex my-2 justify-between">
                  Estimated Shipping <span className="font-semibold">₹ 30</span>
                </p>
                <p className="flex my-2 justify-between">
                  Shipping Discount <span className="font-thin">50 %</span>
                </p>
                <p className="flex my-2 justify-between text-xl font-semibold">
                  Total <span>₹ 92</span>
                </p>
                <button className="bg-black px-3 py-2 text-white font-bold uppercase">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
