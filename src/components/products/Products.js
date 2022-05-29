import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const [filterType, setFilterType] = useState("all");
  const [mainProducts, setMainProducts] = useState(products);

  const handleFilter = (e) => {
    const { value } = e.target;
    setFilterType((prev) => (prev = value));
    const filteredProducts = products.filter(
      (product) => product.type === value || value == "all"
    );
    setMainProducts(filteredProducts);
  };

  // useEffect(() => {
  //   getProductsType()
  // })

  const getProductsType = () => {
    const productTypes = new Set();
    products.forEach((product) => {
      productTypes.add(product.type);
    });

    return Array.from(productTypes);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">Filter</h1>
        <select onChange={handleFilter} value={filterType}>
          <option value="all">All</option>
          {getProductsType().map((type) => (
            <option
              key={`PRODUCT_TYPE_${type}`}
              className="uppercase"
              value={type}
            >
              {type}
            </option>
          ))}
        </select>
        <div>
          <div>
            <button className="border rounded-sm border-gray-300 px-3 hover:bg-yellow-300 py-2 font-semibold text-md">
              Cakes
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {mainProducts.map((product) => (
          <div className="h-92">
            <div
              key={`PRODUCT_${product.name}`}
              className="h-72 w-92 border border-gray-300 p-4 m-8 hover:-translate-y-3 duration-400"
            >
              <product.model product={product} />
              <Link to={`product/${product.id}`}>
                <button className="bg-black text-white rounded px-3 py-2 font-bold">
                  View
                </button>
              </Link>
              <div className="flex justify-between">
                <div className="flex align-center justify-center gap-2">
                  <p className="text-xl">{product.name}</p>
                  <p className="bg-yellow-200 rounded px-4">
                    <span>★</span>
                    {product.rating}/5
                  </p>
                </div>
                <p>₹ {product.price}</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                et.
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
