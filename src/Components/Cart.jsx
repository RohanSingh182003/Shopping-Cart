import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../Context/AppContext";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const [key, setKey] = useState(null);

  const renderItem = () => {
    setKey(Math.random());
  };

  const addToCart = (id, title, price, image, color, size) => {
    dispatch({
      type: "addToCart",
      payload: { id, title, price, image, color, size },
    });
    renderItem();
  };

  const removefromCart = (title) => {
    dispatch({
      type: "removeItemFromCart",
      payload: { title },
    });
    renderItem();
  };

  const clearFromCart = (title) => {
    dispatch({
      type: "clearItemFromCart",
      payload: { title },
    });
    renderItem();
  };

  const clearCart = () => {
    dispatch({
      type: "clearCart",
    });
    renderItem();
  };

  useEffect(() => {
    setProduct(state.cart);
  }, [key]);

  return (
    <div className="flex flex-col lg:px-36">
      <p className="text-3xl text-center border-b py-2 text-secondary">Cart</p>
      <div>
        {product.length > 0 ? (
          product.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full p-2 lg:px-12 border flex flex-col md:flex-row items-center my-2 rounded-md"
              >
                <div className="w-64 h-52 grid place-items-center">
                  <img src={item.image} className="max-h-52" />
                </div>
                <div className="grid place-items-center w-full">
                  <p className="text-xl px-3">{item.title}</p>
                  <p className="my-1 text-xl text-success font-bold">
                    ₹ {item.price}
                  </p>
                  <div className="w-16 flex justify-between">
                    {item.color !=  null && (
                      <button
                        style={{ backgroundColor: item.color }}
                        className="w-6 h-6 rounded-full border-2"
                      ></button>
                    )}
                    {item.size != null && (
                      <p className="text-xl text-gray-800">{item.size}</p>
                    )}
                  </div>
                  <div className="flex w-28 items-center justify-between text-xl my-2 border">
                    <button
                      onClick={() =>
                        addToCart(item.id, item.title, item.price, item.image)
                      }
                      className="w-7 font-bold text-success cursor-pointer border-r"
                    >
                      <p className="text-2xl"> + </p>
                    </button>
                    <p className="">{item.qty}</p>
                    <button
                      onClick={() => removefromCart(item.title)}
                      className="w-7 font-bold text-error cursor-pointer border-l"
                    >
                      <p className="text-2xl"> - </p>
                    </button>
                  </div>
                  <button
                    onClick={() => clearFromCart(item.title)}
                    className="btn btn-error w-28 bg-red-500 hover:bg-red-600 border-none text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full h-80 md:h-96 grid place-items-center">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-secondary">
                Cart Empty
              </h2>
              <p className="my-3 text-secondary">
                Shop Now , We have best products for you with attractive offers!
              </p>
            </div>
          </div>
        )}
        {product.length > 0 && (
          <div className="py-6 flex px-10 justify-between items-center border-t mt-4 sticky bottom-0 bg-white">
            <p className="text-xl text-green-600 font-bold">
              <span className="text-secondary"> Total Price : </span>
              <span>₹ {Math.floor(state.subTotal)}</span>
            </p>
            <div className="flex w-40 justify-between items-center">
              <Link
                to={"/checkout"}
              >
                <button className="btn btn-secondary">Checkout</button>
              </Link>
              <MdDeleteForever
                onClick={clearCart}
                className="text-4xl text-red-600 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
