import React from "react";
import Cake from "./product/Cake";
import Cupcake from "./product/Cupcake";
import Donut from "./product/Donut";
import PinkDonut from "./product/PinkDonut";
import Donuts from "./product/Donuts";

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="h-72 w-92 border-2 border-gray-300 p-4 m-8 hover:-translate-y-3 duration-400">
        <Donut />
        <button className="bg-black text-white rounded px-3 py-2 font-bold">View</button>
      </div>
      <div className="h-72 w-92 border-2 border-gray-300 p-4 m-8">
        <Cupcake />
      </div>
      <div className="h-72 w-92 border-2 border-gray-300 p-4 m-8">
        <PinkDonut />
      </div>
      <div className="h-72 w-92 border-2 border-gray-300 p-4 m-8">
        <Cake />
        <button className="bg-black text-white rounded px-3 py-2 font-bold">View</button>
      </div>
      <div className="h-72 w-92 border-2 border-gray-300 p-4 m-8">
        <Donuts />
      </div>
      <div className="h-72 w-92 border-2 border-gray-300 p-4 m-8">
        <PinkDonut />
      </div>
    </div>
  );
};

export default Products;
