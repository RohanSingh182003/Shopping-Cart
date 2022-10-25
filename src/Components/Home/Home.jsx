import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import Loading from "../Loading";
import Footer from "../Footer";
// import Crousel from "./Crousel";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let a = await axios.get(
      "https://rohansingh182003.github.io/JSON-files-for-rapid-development/store_api.json"
    );
    let b = await a.data;
    setData(b);
  };
  // load initial data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <Crousel/> */}
      <p className="text-center py-3 text-2xl ">Shop Latest Items</p>
      {data.length>0 ? (
        <div>
          <div className="flex flex-wrap justify-evenly md:mx-16 lg:px-6">
            {data.map((item, index) => {
              return (
                <Card
                  key={index}
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
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AllProducts;
