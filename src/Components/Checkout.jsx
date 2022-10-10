import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import { MdDeleteForever } from "react-icons/md";


const Checkout = (props) => {

    const { state, dispatch } = useContext(AppContext);
    const [product, setProduct] = useState([]);
    const [key, setKey] = useState(null);

    const renderItem = () => {
        setKey(Math.random());
      };
    
      const addToCart = (id, title, price, image) => {
        dispatch({
          type: "addToCart",
          payload: { id, title, price, image },
        });
        renderItem();
      };
    
      const removefromCart = (id) => {
        dispatch({
          type: "removeItemFromCart",
          payload: { id },
        });
        renderItem();
      };
    
      const clearFromCart = (id) => {
        dispatch({
          type: "clearItemFromCart",
          payload: { id },
        });
        renderItem();
      };
    
      useEffect(() => {
        props.data(30)
        setProduct(state.cart);
        props.data(100)
      }, [key]);
  

  return (
    <div>
        <h2 className='text-3xl py-4 md:py-6 border-b text-center text-violet-600'>Enter your Details</h2>
        <div className='flex flex-col space-y-2 justify-center md:grid md:gap-2 md:grid-cols-2 px-4 md:px-16 lg:px-28'>
            <input className='focus:outline-none p-2 border-b-2 border-violet-500 text-violet-700' type="text" name="first_name" id="first_name" placeholder='Enter your first name' />
            <input className='focus:outline-none p-2 border-b-2 border-violet-500 text-violet-700' type="text" name="last_name" id="last_name" placeholder='Enter your last name' />
            <input className='focus:outline-none p-2 border-b-2 border-violet-500 text-violet-700' type="email" name="email" id="email" placeholder='Enter your email address' />
            <input className='focus:outline-none p-2 border-b-2 border-violet-500 text-violet-700' type="number" name="phone" id="phone" placeholder='Enter your phone number' />
            <input className='focus:outline-none p-2 border-b-2 border-violet-500 text-violet-700' type="number" name="pin" id="pin" placeholder='Enter your pin code' />
            <input className='focus:outline-none p-2 border-b-2 border-violet-500 text-violet-700' type="text" name="text" id="text" placeholder='Enter your state name' />
            <textarea className='focus:outline-none p-2 border border-violet-500 text-violet-700 col-span-2 rounded-md'  placeholder='Enter your full address' name="address" id="address" cols="30" rows="10"></textarea>
        </div>
        <h2 className='text-3xl py-4 md:py-6 border-b text-center text-violet-600'>Your products</h2>
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
                  <p className="my-1 text-xl text-green-600 font-bold">
                  ₹ {item.price}
                  </p>
                  <div className="flex w-32 items-center justify-between text-xl my-2">
                    <button
                      onClick={() =>
                        addToCart(item.id, item.title, item.price, item.image)
                      }
                      className="w-7 font-bold text-green-500 cursor-pointer"
                    >
                      <p className="text-2xl"> + </p>
                    </button>
                    <p className="">{item.qty}</p>
                    <button
                      onClick={() => removefromCart(item.id)}
                      className="w-7 font-bold text-red-500 cursor-pointer"
                    >
                      <p className="text-2xl"> - </p>
                    </button>
                  </div>
                  <button
                    onClick={() => clearFromCart(item.id)}
                    className="bg-red-500 text-xl rounded-md px-2 py-1 w-44 text-white font-bold hover:bg-red-600"
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
              <h2 className="text-3xl font-semibold text-violet-700">
                Cart Empty
              </h2>
              <p className="my-3 text-violet-500">
                Shop Now , We have best products for you with attractive offers!
              </p>
            </div>
          </div>
        )}
        {product.length > 0 && (
          <div className="py-6 flex px-10 justify-between items-center border-t mt-4 sticky bottom-0 bg-white">
            <p className="text-xl text-green-600 font-bold">
              <span className="text-violet-700"> Total Price : </span>
              <span>₹ {Math.floor(state.subTotal)}</span>
            </p>
              <Link
                className="p-2 w-fit bg-violet-500 text-white rounded-md hover:bg-violet-600"
                to={"/checkout"}
              >
                <button>Pay now</button>
              </Link>
          </div>
        )}
        </div>
    </div>
  )
}

export default Checkout