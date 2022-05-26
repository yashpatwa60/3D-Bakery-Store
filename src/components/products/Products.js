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
      </div>
      <div className="grid grid-cols-3 gap-4">
        {mainProducts.map((product) => (
          <div key={`PRODUCT_${product.name}`} className="h-72 w-92 border-2 border-gray-300 p-4 m-8 hover:-translate-y-3 duration-400">
            <product.model product={product}/>
            <Link to={`product/${product.id}`}>
              <button className="bg-black text-white rounded px-3 py-2 font-bold">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
