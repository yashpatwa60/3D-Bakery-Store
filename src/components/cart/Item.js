import React from 'react'

const Item = ({ model }) => {
    return (
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <div className="flex border-2 border-gray-300 px-6 py-4 rounded-xl shadow-md">
            <div>
              {model}
            </div>
            <div>
              <p>Donut</p>
              <p>Id: eurhgfheuiy483</p>
            </div>
            <div>
              <div className="flex">
                <button className="border-2 px-3 py-2 border-gray-300">
                  -
                </button>
                <button className="border-2 px-3 py-2 border-gray-300 disabled">
                  1
                </button>
                <button className="border-2 px-3 py-2 border-gray-300">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="p-5 border-2 border-gray-300 bg-yellow-200">
            <p className="text-2xl font-semibold uppercase">Order Summary</p>
            <p>
              Subtotal <span>60</span>
            </p>
            <p>
              Estimated Shipping <span>30</span>
            </p>
            <p>
              Shipping Discount <span>-87</span>
            </p>
            <p className="text-xl font-semibold">
              Total <span>92</span>
            </p>
            <button className="bg-black px-3 py-2 text-white font-bold uppercase">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    );
}

export default Item
