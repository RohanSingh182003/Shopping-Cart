import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="flex flex-col lg:pl-56">
      <p className="text-3xl text-center border-b py-2 text-violet-800">Cart</p>
      <div className="h-[80vh] overflow-y-scroll scrollbar-hide">
        {state.cart.map((item) => {
          return (
            <div className="w-full p-2 lg:px-12 border flex flex-col md:flex-row items-center my-2 rounded-md">
              <div className="w-64 h-52 grid place-items-center">
                <img src={item.image} className="max-h-52" />
              </div>
              <div className="grid place-items-center w-full">
                <p className="text-xl">{item.title}</p>
                <p className="my-1 text-xl text-green-600 font-bold">
                  ${item.price}
                </p>
                <div className="flex w-32 items-center justify-between text-xl my-2">
                  <button
                    onClick={() => {
                      dispatch({
                        type: "addToCart",
                        payload: {
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          img: item.image,
                        },
                      });
                    }}
                    className="w-7 fony-bold bg-green-500 text-white cursor-pointer rounded-full"
                  >
                    +
                  </button>
                  <p className="">{item.qty}</p>
                  <button className="w-7 fony-bold bg-red-500 text-white cursor-pointer rounded-full">
                    -
                  </button>
                </div>
                <button className="bg-red-500 text-xl rounded-md px-2 py-1 w-44 text-white font-bold">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
