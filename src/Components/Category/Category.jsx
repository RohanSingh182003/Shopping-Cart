import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";
import Loading from "../Loading";
import Filter from "./Filter";

const Catagory = () => {
  const [data, setData] = useState();
  let prod = useParams();
  const getData = async () => {
    let a = await axios.get(
      "https://rohansingh182003.github.io/JSON-files-for-rapid-development/store_api.json"
    );
    let b = await a.data;
    let newarr = await b.filter((e) => e.category === prod.category);
    setData(newarr);
  };
  // load initial data
  useEffect(() => {
    getData();
  }, [prod.category]);

  return (
    <>
      <p className="text-center py-3 text-2xl text-secondary">
        Category :{" "}
        <span className="font-semibold capitalize text-gray-900"> {prod.category}</span>
      </p>
      <div className="grid md:grid-cols-5 px-8">
        {/* filter component */}
          <Filter category={prod.category}/>
        {/* products */}
      {data ? (
        <div className="flex flex-wrap justify-evenly lg:px-6 col-span-4">
          {data.map((item) => {
            return (
              <Card
                props={{
                  id: item?.id,
                  title: item?.title,
                  price: item?.price,
                  image: item?.image,
                  size: item?.size,
                  color: item?.color,
                }}
              />
            );
          })}
        </div>
      ) : (
        <Loading/>
      )}
      </div>
    </>
  );
};

export default Catagory;
