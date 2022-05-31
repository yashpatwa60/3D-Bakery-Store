import React from "react";
import homeImg from "../assets/img/chocolate-bg.jpg";
import Footer from "../components/common/Footer";
import Products from "../components/products/Products";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <div className="flex align-center m-11 p-12">
        <div className="flex-1">
          <img
            style={{ height: "350px", width: "500px" }}
            src={homeImg}
            alt="donut"
          />
        </div>
        <div className="flex-1">
          <p className="text-6xl">
            Welcome To <span className="hover:underline decoration-amber-700 text-[#be6b2c]">3D-Bakery Store</span>
          </p>
          <p className="text-3xl font-extralight mt-1 mb-3">
            Buy from the best store with best user experience
          </p>
          <p className="text-xl hover:underline decoration-pink-500 font-thin">
            All of our products are made from scratch using family recipes with
            only the highest quality ingredients. We bake and sell fresh daily
            to ensure only the best products are sold to our customers.
          </p>
          <p className="inline-flex rounded-lg text-white font-semibold items-center my-6 px-3 py-2 bg-blue-400">
            Purchase Now
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
        </div>
      </div>
      <div>
        <Banner />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default Home;
