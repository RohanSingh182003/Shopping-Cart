import React, { useContext, useState } from "react";
import AppContext from "../../../Context/AppContext";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";
import OrdersComponent from "./OrdersComponent";
import BeASellorComponent from "./BeASellorComponent";
import LoginComponent from "./LoginComponent";
import Toast from "./Toast";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="sticky top-0 bg-secondary h-full">
      <Toast />
      <div className="px-2 flex justify-between lg:justify-around items-center h-16">
        <label className="btn btn-circle swap swap-rotate btn-secondary">
          <input onClick={() => setToggle(!toggle)} type="checkbox" />
          {toggle ?<AiOutlineClose className="text-2xl mx-2 text-white cursor-pointer fill-current"/> :<BiMenuAltLeft className="text-2xl mx-2 text-white cursor-pointer fill-current"/>
          }
        </label>
        <Link
          to="/"
          className="text-center text-2xl text-white font-semibold mx-2"
        >
          <button>Ecommerce</button>
        </Link>
        {/* cart */}
        <Link onClick={() => setToggle(false)} to="/cart">
          <div className="p-1 mx-2 relative">
            <AiOutlineShoppingCart className="text-3xl text-white cursor-pointer" />
            <div className="absolute w-4 text-center bg-secondary rounded-full text-xs top-0 right-2">
              <p className="text-sm text-white font-semibold ">
                {state.cart.length}
              </p>
            </div>
          </div>
        </Link>
      </div>
      {toggle && (
        <div className="bg-white">
          <div className="flex flex-col md:flex-row items-center w-full justify-evenly bg-secondary">
            <div className="flex justify-evenly items-center mt-2 md:mt-0 w-full">
              <FilterComponent />
              <BeASellorComponent />
              <OrdersComponent />
            </div>
            <div className="flex justify-evenly items-center mt-2 md:mt-0 w-full">
              <SearchComponent />
              <LoginComponent />
            </div>
          </div>
          <ul className="w-full h-[76vh] md:h-auto flex flex-col md:flex-row justify-evenly items-center py-2 text-white bg-secondary">
            <Link
              onClick={() => setToggle(false)}
              to={"/"}
              className="cursor-pointer text-xl hover:underline hover:underline-offset-2 md:text-sm lg:text-lg"
            >
              All Products
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={`/men's clothing`}
              className="cursor-pointer text-xl hover:underline hover:underline-offset-2 md:text-sm lg:text-lg"
            >
              Men's Fashion
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={`/women's clothing`}
              className="cursor-pointer text-xl hover:underline hover:underline-offset-2 md:text-sm lg:text-lg"
            >
              Women's Fashion
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={"/electronics"}
              className="cursor-pointer text-xl hover:underline hover:underline-offset-2 md:text-sm lg:text-lg"
            >
              Electronics
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={"/jewelery"}
              className="cursor-pointer text-xl hover:underline hover:underline-offset-2 md:text-sm lg:text-lg"
            >
              Jewelery
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
