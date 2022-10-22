import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Loading from "./Loading";

const Catagory = (props) => {
  const [data, setData] = useState();
  let prod = useParams();
  const getData = async () => {
    props.data(20);
    let a = await axios.get(
      "https://rohansingh182003.github.io/JSON-files-for-rapid-development/store_api.json"
    );
    let b = await a.data;
    let newarr = await b.filter((e) => e.category === prod.category);
    setData(newarr);
    props.data(100);
  };
  // load initial data
  useEffect(() => {
    getData();
  }, [prod.category]);

  return (
    <>
      <p className="text-center py-3 text-2xl text-secondary">
        Category :{" "}
        <span className="font-semibold capitalize"> {prod.category}</span>
      </p>
      {data ? (
        <div className="flex flex-wrap justify-evenly md:mx-16 lg:px-6">
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
        <Loading />
      )}
    </>
  );
};

export default Catagory;
