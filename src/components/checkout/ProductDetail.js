import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartProduct } from "../../redux/actions/cart";
import { setProductMaterial } from "../../redux/actions/product";
import detailsImg from "../../assets/img/details.svg";
import { ToastContainer, toast } from "react-toastify";

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

  const handleToast = () => {
   toast.success("Product added to cart", {
     position: "top-right",
     autoClose: 1000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   });
  }

  const addProductToCart = () => {
    const selectedProduct = {
      ...product,
      quantity,
    };
    dispatch(setCartProduct(selectedProduct));
    handleToast()
  };

  const handleMaterials = (productId, material) => {
    dispatch(setProductMaterial(productId, material));
    setCherry((prev) => !prev);
  };
  return (
    <div className="m-11 p-12">
      <div className="grid grid-cols-2 gap-5">
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
          <div className="my-3">
            <p className="flex items-center gap-2 text-lg font-semibold">
              Details <img className="h-4 w-4" src={detailsImg} alt="details" />
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium saepe distinctio totam nihil. Quaerat odit repellat a?
              Consequuntur, animi est.
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold">Quantity</p>
            <div className="flex">
              <button
                onClick={handleQuantityDecrement}
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-16 rounded-l cursor-pointer outline-none"
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <button className="disabled w-14 bg-gray-200">{quantity}</button>
              <button
                onClick={handleQuantityIncrement}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-16 rounded-r cursor-pointer"
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>

          <div className="my-3">
            <p className="text-lg font-semibold">Customize</p>
            <div className="flex flex-wrap gap-3">
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
          <div className="flex my-5 gap-2">
            <button
              onClick={addProductToCart}
              className="border-2 border-red-300 px-3 py-2 "
            >
              Add to cart
            </button>
            <button className="bg-red-300 text-white font-bold px-3 py-2 ">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
