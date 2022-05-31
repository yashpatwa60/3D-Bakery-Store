import React from 'react'
import cakeImg from "../assets/img/cake1.jpg"
import cupcakeImg from "../assets/img/cupcake.jpg"
import icecreamImg from "../assets/img/icecream.jpg"

const Banner = () => {
    return (
      <div className="relative bg-[url(./assets/img/new.jpg)] bg-cover p-10 bg-fixed ">
        <div className="absolute inset-0 h-full w-full bg-opacity-75 bg-gray-900"></div>
        <div className="relative flex text-center gap-4 justify-center">
          <div className="bg-cover" style={{ height: "250px", width: "250px" }}>
            <img
              className="hover:scale-110 transition duration-300 ease-in-out"
              src={cakeImg}
              alt="cake"
            />
            <p className="text-lg my-3 text-white font-semibold underline decoration-pink-500">
              Cakes
            </p>
          </div>
          <div style={{ height: "250px", width: "250px" }}>
            <img
              className="hover:scale-110 transition duration-300 ease-in-out"
              src={cupcakeImg}
              alt="cupcake"
            />
            <p className="text-lg my-3 text-white font-semibold underline decoration-pink-500">
              PanCakes
            </p>
          </div>
          <div style={{ height: "250px", width: "250px" }}>
            <img
              className="hover:scale-110 transition duration-300 ease-in-out"
              src={icecreamImg}
              alt="icecream"
            />
            <p className="text-lg my-3 text-white font-semibold underline decoration-pink-500">
              Ice Creams
            </p>
          </div>
        </div>
      </div>
    );
}

export default Banner
