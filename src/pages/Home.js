import React from "react";
import homeDonutImg from "../assets/img/home_donut.png";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <>
      <div className="flex justify-between align-center m-11 p-12">
        <div>
          <img
            style={{ height: "350px", width: "500px" }}
            src={homeDonutImg}
            alt="donut"
          />
        </div>
        <div>
          <p className="text-6xl">
            Welcome {`${process.env.REACT_APP_NAME}`} To{" "}
            <span className="text-[#be6b2c]">3D Bakery Store</span>
          </p>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </>
  );
};

export default Home;
