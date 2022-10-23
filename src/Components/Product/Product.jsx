import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../../../Context/AppContext";
import Check_Servicebility from "./Check_Servicebility";

const Product = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState({});
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  let { id } = useParams();

  // to set the title of the product
  const setTitle = (title, color, size) => {
    if (color != null && size != null) {
      return title + " " + "(" + color + "/" + size + ")";
    } else if (color != null) {
      return title + " " + "(" + color + ")";
    } else if (size != null) {
      return title + " " + "(" + size + ")";
    } else {
      return title;
    }
  };

  // add to cart handler function
  const handleAddToCart = (id, title, price, image, color, size) => {
    const handleDispatch = () => {
      dispatch({
        type: "addToCart",
        payload: {
          id: id,
          title: title,
          price: price,
          img: image,
          color: color,
          size: size,
        },
      });
    };
    if (data.color.length > 0 && data.size.length > 0) {
      if (color === null && size === null) {
        setColor(data.color[0]);
        setSize(data.size[0]);
      } else if (color === null) {
        setColor(data.color[0]);
      } else if (size === null) {
        setSize(data.size[0]);
      }
    } else {
      handleDispatch();
    }
    handleDispatch();
  };

  const getData = async (id) => {
    props.data(30);
    let res = await axios.get(
      "https://rohansingh182003.github.io/JSON-files-for-rapid-development/store_api.json"
    );
    let prod = res.data.filter((item) => item.id === Number.parseInt(id));
    setData(prod[0]);
    props.data(100);
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full flex justify-center items-center lg:h-96 h-64 object-cover object-center rounded">
            <img alt="ecommerce" className="h-full rounded" src={data.image} />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {data.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {setTitle(data.title, color, size)}
            </h1>
            {/* <div className="flex mb-4">
            </div> */}
            <p className="leading-relaxed">{data.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {data.color?.length > 0 && (
                <div className="flex">
                  {data.color && <span className="mr-3">Colors</span>}
                  {data.color &&
                    data.color.map((item) => {
                      return (
                        <button
                          key={item}
                          onClick={() => {
                            setColor(item);
                          }}
                          style={{ backgroundColor: item }}
                          className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none focus:ring-pink-200 focus:border-secondary"
                        ></button>
                      );
                    })}
                </div>
              )}
              {data.size?.length > 0 && (
                <div className="flex items-center ml-6">
                  {data.size && <span className="mr-3">Sizes</span>}
                  {data.size &&
                    data.size.map((item) => {
                      return (
                        <button
                          key={item}
                          onClick={() => {
                            setSize(item);
                          }}
                          className="border-2 border-gray-300 rounded-md w-10 h-6 focus:outline-none focus:ring-pink-200 focus:border-secondary"
                        >
                          {item}
                        </button>
                      );
                    })}
                </div>
              )}
            </div>
            <Check_Servicebility />
            <div className="flex flex-wrap justify-between">
              <span className="title-font font-medium text-2xl text-green-700">
                ₹ {data.price}
              </span>
              <div className="flex space-x-2">
                {/* add to cart button */}
                <button
                  onClick={() => {
                    handleAddToCart(
                      data.id,
                      setTitle(data.title, color, size),
                      data.price,
                      data.image,
                      color,
                      size
                    );
                  }}
                  className="btn btn-secondary"
                >
                  Add To cart
                </button>
                {/* buy now button */}
                <Link
                  onClick={() => {
                    dispatch({ type: "clearCart" });
                    dispatch({
                      type: "addToCart",
                      payload: {
                        id: data.id,
                        title: data.title,
                        price: data.price,
                        img: data.image,
                        color: color === null ? null : color,
                        size: size === null ? null : size,
                      },
                    });
                  }}
                  to={"/checkout"}
                >
                  <button className="btn btn-secondary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
