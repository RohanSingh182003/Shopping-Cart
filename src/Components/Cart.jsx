import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../Context/AppContext";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  const [product, setProduct] = useState([])
  const [key, setKey] = useState(null)

  const addToCart = (id , title , price , image) => {
    dispatch({
      type: "addToCart",
      payload: {id , title , price , image},
    });
    setKey(Math.random())
  }

  const removefromCart = (id) => {
    dispatch({
      type:"removeItemFromCart",
      payload:{id}
    })
    setKey(Math.random())
  }

  const clearFromCart = (id) => {
    dispatch({
      type:"clearItemFromCart",
      payload:{id}
    })
    setKey(Math.random())
  }


  useEffect(() => {
    setProduct(state.cart)
  }, [key])


  return (
    <div className="flex flex-col lg:pl-56">
      <p className="text-3xl text-center border-b py-2 text-violet-800">Cart</p>
      <div className="h-[80vh] overflow-y-scroll scrollbar-hide">
        {product.length > 0 ? product.map((item) => {
          return (
            <div key={item.id} className="w-full p-2 lg:px-12 border flex flex-col md:flex-row items-center my-2 rounded-md">
              <div className="w-64 h-52 grid place-items-center">
                <img src={item.image} className="max-h-52" />
              </div>
              <div className="grid place-items-center w-full">
                <p className="text-xl px-3">{item.title}</p>
                <p className="my-1 text-xl text-green-600 font-bold">
                  ${item.price}
                </p>
                <div className="flex w-32 items-center justify-between text-xl my-2">
                  <button
                    onClick={() => addToCart(item.id , item.title , item.price , item.image)}
                    className="w-7 fony-bold bg-green-500 text-white cursor-pointer rounded-full hover:bg-green-600"
                  >
                    +
                  </button>
                  <p className="">{item.qty}</p>
                  <button
                  onClick={()=> removefromCart(item.id)}
                  className="w-7 fony-bold bg-red-500 text-white cursor-pointer rounded-full hover:bg-red-600">
                    -
                  </button>
                </div>
                <button
                onClick={()=> clearFromCart(item.id)}
                className="bg-red-500 text-xl rounded-md px-2 py-1 w-44 text-white font-bold hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>
          );
        }) :
        <div className="w-full h-full grid place-items-center">
          <div className="text-center">
        <h2 className="text-3xl font-semibold text-violet-700">Cart Empty</h2>
        <p className="my-3 text-violet-500">Shop Now , We have best products for you with attractive offers!</p>
        </div>
        </div>
        }
      </div>
    </div>
  );
};

export default Cart;
