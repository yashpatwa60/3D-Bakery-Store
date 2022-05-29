import React from 'react'
import cakeImg from "../assets/img/cake1.jpg"
import cupcakeImg from "../assets/img/cupcake.jpg"
import icecreamImg from "../assets/img/icecream.jpg"

const Banner = () => {
    return (
      <div className="flex text-center gap-4 justify-center">
        <div style={{ height: "250px", width: "250px" }}>
          <img src={cakeImg} alt="cake" />
          <p className="text-lg font-semibold underline decoration-pink-500">Cakes</p>
        </div>
        <div style={{ height: "250px", width: "250px" }}>
          <img src={cupcakeImg} alt="cupcake" />
          <p className="text-lg font-semibold underline decoration-pink-500">PanCakes</p>
        </div>
        <div style={{ height: "250px", width: "250px" }}>
          <img src={icecreamImg} alt="icecream" />
          <p className="text-lg font-semibold underline decoration-pink-500">Ice Creams</p>
        </div>
      </div>
    );
}

export default Banner
