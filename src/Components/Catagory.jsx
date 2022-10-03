import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Catagory = (props) => {
  const [data, setData] = useState();
  let prod = useParams();
  const getData = async () => {
    props.data(20)
    let a = await axios.get("https://fakestoreapi.com/products");
    let b = await a.data;
    let newarr = await b.filter((e) => e.category === prod.category);
    setData(newarr);
    props.data(100)
  };
  // load initial data
  useEffect(() => {
    getData();
  }, [prod.category]);

  return (
    <>
      <p className="text-center py-3 text-2xl text-violet-800">
        Category :{" "}
        <span className="font-semibold capitalize"> {prod.category}</span>
      </p>
      {data ? (
        <div className="flex flex-wrap justify-evenly md:mx-16 lg:px-6">
          {data.map((item) => {
            return (
              <Card
                props={{
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  price: item.price,
                  image: item.image,
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-80 md:h-96 w-full flex flex-col justify-center items-center">
            <p className="text-2xl text-violet-600 font-semibold">Products are loading!</p>
            <p className="text-xs my-2 text-violet-400">Please wait , we are thankful for your patience.</p>
        </div>
      )}
    </>
  );
};

export default Catagory;
