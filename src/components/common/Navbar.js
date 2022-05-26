import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const total_products = useSelector((state) => state.cart.total_products);

  const [ show, setShow ] = useState(false)

  return (
    <div className="container w-full flex justify-center ">
      <div className="w-1/2  rounded-md p-5 mt-1 border border-gray-300">
        <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link className="flex items-center" to="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap ">
                Bakery Store
              </span>
            </Link>

            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <div className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <Link to="/cart">
                  <p className="block hover:bg-gray-900 hover:text-gray-100 transition-colors duration-200 transform py-2 px-3 text-dark rounded md:bg-transparent md:text-dark ">
                    Cart
                    <span className="px-2 py-2 bg-black text-white">
                      {total_products}
                    </span>
                  </p>
                </Link>

                <div className="relative inline-block ">
                  {/* <!-- Dropdown toggle button --> */}
                  <button onClick={() => setShow(prev => !prev)} className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                    <span className="mx-1">Jane Doe</span>
                    <svg
                      className="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>

                  {/* <!-- Dropdown menu --> */}
                  <div className={`${show ? 'hidden' : ''} absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800`}
                  >
                    <a
                      href="/about"
                      className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {/* <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="jane avatar" /> */}
                      <div className="mx-1">
                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          Jane Doe
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          janedoe@exampl.com
                        </p>
                      </div>
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />

                    <a
                      href="/view"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      view profile
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />

                    <a
                      href="/invite"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Invite colleagues
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />

                    <a
                      href="/help"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Help
                    </a>
                    <a
                      href="/sign-out"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
