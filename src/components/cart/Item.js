import React from "react";

const Item = ({ product, handleremoveCartProduct }) => {
  const { name, id, price, quantity } = product;
  return (
      <div className="flex border-2 border-gray-300 px-6 py-4 rounded-xl shadow-md">
        <div>
          <product.model product={product} />
        </div>
        <div>
          <p className="text-3xl text-red-400">{product.name}</p>
          <div className="flex gap-2 my-1">
            <p className="text-lg font-semibold">₹ {product.price}</p>

            <p className="inline-block bg-yellow-200 rounded px-4">
              <span>★</span>
              {product.rating}/5
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          </p>
          <button
            onClick={() => handleremoveCartProduct(id)}
            className="px-3 py-1 my-3 bg-black text-white font-bold text-lg"
          >
            X
          </button>
        </div>
        <div>
          <div className="flex">
            <button
              // onClick={handleQuantityDecrement}
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-16 rounded-l cursor-pointer outline-none"
            >
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <button className="disabled w-14 bg-gray-200">{quantity}</button>
            <button
              // onClick={handleQuantityIncrement}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-16 rounded-r cursor-pointer"
            >
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Item;
