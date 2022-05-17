import React, { useState } from "react";
import Cupcake from "../products/product/Cupcake";
import Donut from "../products/product/Donut";

const DonutCheckout = () => {
  const [ cherry, setCherry ] = useState(true)
  return (
    <div className="m-11 p-12">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Cupcake cherry={cherry} />
        </div>
        <div>
          <p className="text-3xl text-red-400">Donut</p>
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
              <button className="border-2 px-3 py-2 border-gray-300">-</button>
              <button className="border-2 px-3 py-2 border-gray-300 disabled">
                1
              </button>
              <button className="border-2 px-3 py-2 border-gray-300">+</button>
            </div>
          </div>
          <div className="flex gap-10">
            <button className="border-2 border-red-300 px-3 py-2 ">
              Add to cart
            </button>
            <button className="bg-red-300 text-white font-bold px-3 py-2 ">
              Buy now
            </button>
            <button onClick={() => setCherry(false)} className="bg-red-300 text-white font-bold px-3 py-2 ">
              Add cherry
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutCheckout;
