import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartProduct } from "../../redux/actions/cart";
import { setProductMaterial } from "../../redux/actions/product";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [cherry, setCherry] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const product = useSelector((state) => state.product.products[productId - 1]);

  const handleQuantityIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleQuantityDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addProductToCart = () => {
    const selectedProduct = {
      ...product,
      quantity,
    };
    dispatch(setCartProduct(selectedProduct));
  };

  const handleMaterials = (productId, material) => {
    dispatch(setProductMaterial(productId, material));
    setCherry(prev => !prev)
  };
  return (
    <div className="m-11 p-12">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <product.model product={product}/>
        </div>
        <div>
          <p className="text-3xl text-red-400">{product.name}</p>
          <p>s s s s s s</p>
          <div>
            <p>Details</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium saepe distinctio totam nihil. Quaerat odit repellat a?
              Consequuntur, animi est.
            </p>
          </div>
          <p>50 ruppee</p>
          <div>
            <p>Quantity</p>
            <div className="flex">
              <button
                onClick={handleQuantityDecrement}
                className="border-2 px-3 py-2 border-gray-300"
              >
                -
              </button>
              <button className="border-2 px-3 py-2 border-gray-300 disabled">
                {quantity}
              </button>
              <button
                onClick={handleQuantityIncrement}
                className="border-2 px-3 py-2 border-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-10">
            <button
              onClick={addProductToCart}
              className="border-2 border-red-300 px-3 py-2 "
            >
              Add to cart
            </button>
            <button className="bg-red-300 text-white font-bold px-3 py-2 ">
              Buy now
            </button>
            {Object.keys(product.materials).map((material, material_id) => (
              <button
                key={`${material}${material_id}`}
                onClick={() => handleMaterials(product.id, material)}
                className="bg-red-300 text-white font-bold px-3 py-2 "
              >
                {`Add Extra ${material}`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
