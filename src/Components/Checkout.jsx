import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';


const Checkout = (props) => {

    const { state, dispatch } = useContext(AppContext);
    const [product, setProduct] = useState([]);
    const [key, setKey] = useState(null);

    const renderItem = () => {
        setKey(Math.random());
      };
    
      const addToCart = (id, title, price, image , size , color) => {
        dispatch({
          type: "addToCart",
          payload: { id, title, price, image , size , color },
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
        <h2 className='text-3xl py-4 md:py-6 border-b text-center text-secondary'>Enter your Details</h2>
        <div className='flex flex-col space-y-2 justify-center md:grid md:gap-2 md:grid-cols-2 px-4 md:px-16 lg:px-28'>
            <input className='focus:outline-none p-2 border-b-2 border-secondary text-secondary' type="text" name="first_name" id="first_name" placeholder='Enter your first name' />
            <input className='focus:outline-none p-2 border-b-2 border-secondary text-secondary' type="text" name="last_name" id="last_name" placeholder='Enter your last name' />
            <input className='focus:outline-none p-2 border-b-2 border-secondary text-secondary' type="email" name="email" id="email" placeholder='Enter your email address' />
            <input className='focus:outline-none p-2 border-b-2 border-secondary text-secondary' type="number" name="phone" id="phone" placeholder='Enter your phone number' />
            <input className='focus:outline-none p-2 border-b-2 border-secondary text-secondary' type="number" name="pin" id="pin" placeholder='Enter your pin code' />
            <input className='focus:outline-none p-2 border-b-2 border-secondary text-secondary' type="text" name="text" id="text" placeholder='Enter your state name' />
            <textarea className='focus:outline-none p-2 border border-secondary text-secondary col-span-2 rounded-md'  placeholder='Enter your full address' name="address" id="address" cols="30" rows="10"></textarea>
        </div>
        <h2 className='text-3xl py-4 md:py-6 border-b text-center text-secondary'>Your products</h2>
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
                      onClick={() => removefromCart(item.id)}
                      className="w-7 font-bold text-error cursor-pointer border-l"
                    >
                      <p className="text-2xl"> - </p>
                    </button>
                  </div>
                  <button
                    onClick={() => clearFromCart(item.id)}
                    className="btn btn-error bg-red-500 rounded-md px-2 py-1 w-28 text-white font-bold hover:bg-red-600"
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
              <Link
                to={"/checkout"}
              >
                <button className='btn btn-secondary'>Place Order</button>
              </Link>
          </div>
        )}
        </div>
    </div>
  )
}

export default Checkout