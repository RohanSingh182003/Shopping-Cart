import React, { useContext, useState } from "react";
import AppContext from "../../Context/AppContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="sticky top-0 bg-violet-500">
      <div className="px-2 flex justify-between lg:justify-around items-center h-16  border-b border-violet-600">
        {toggle ? (
          <ImCross
            onClick={() => setToggle(!toggle)}
            className="text-xl mx-2 text-violet-50 cursor-pointer"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => setToggle(!toggle)}
            className="text-2xl mx-2 text-violet-50 cursor-pointer"
          />
        )}
        <Link
          to="/"
          className="text-center text-2xl text-violet-50 font-semibold mx-2"
        >
          <button>Ecommerce</button>
        </Link>
        {/* cart */}
        <Link onClick={() => setToggle(false)} to="/cart">
          <div className="border-2 p-1 rounded-full border-violet-200 mx-2 relative">
            <AiOutlineShoppingCart className="text-2xl text-violet-50 cursor-pointer" />
            <div className="absolute w-4 text-center bg-green-500 rounded-full text-xs -top-1 -right-1">
              {state.cart.length > 0 && (
                <p className="text-xs text-white font-semibold ">
                  {state.cart.length}
                </p>
              )}
            </div>
          </div>
        </Link>
      </div>
      {toggle && (
        <div className="bg-white">
          <div className="flex items-center w-full justify-evenly bg-violet-500">
          <Search/>
          <button className="bg-white text-violet-500 border p-1 rounded-md hover:text-violet-600 cursor-pointer text-sm font-semibold md:text-sm lg:text-lg">My&nbsp;Orders</button>
          <BiUserCircle className="text-4xl font-semibold text-violet-50 cursor-pointer"/>
          </div>
          <ul className="w-full h-[82.5vh] md:h-auto flex flex-col md:flex-row justify-evenly items-center border border-violet-600 py-2 text-violet-50 bg-violet-500">
            <Link
              onClick={() => setToggle(false)}
              to={"/"}
              className="hover:text-violet-100 cursor-pointer text-xl font-semibold md:text-sm lg:text-lg"
            >
              All Products
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={`/men's clothing`}
              className="hover:text-violet-100 cursor-pointer text-xl font-semibold md:text-sm lg:text-lg"
            >
              Men's Fashion
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={`/women's clothing`}
              className="hover:text-violet-100 cursor-pointer text-xl font-semibold md:text-sm lg:text-lg"
            >
              Women's Fashion
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={"/electronics"}
              className="hover:text-violet-100 cursor-pointer text-xl font-semibold md:text-sm lg:text-lg"
            >
              Electronics
            </Link>
            <Link
              onClick={() => setToggle(false)}
              to={"/jewelery"}
              className="hover:text-violet-100 cursor-pointer text-xl font-semibold md:text-sm lg:text-lg"
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
