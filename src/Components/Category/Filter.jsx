import React, { useState , useEffect } from "react";
import ColorFilter from "./ColorFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import SizeFilter from "./SizeFilter";

const Filter = ({category , data}) => {
  // variants
  // const [color, setColor] = useState([])
  // const [clothingSize, setClothingSize] = useState([])
  let price = [500 , 1000 , 2000 , 5000]
  let rating = [3,4]
  let clothingSize =['XL'];
  let color = ['red']

  // returns unique data
  const getUniqueData = (arr) => {
    const data = arr.reduce((acc,item)=> acc.add(item),new Set())
    return ([...data])
  }

  // returns all unique colors
  const getColorData = () => {
    let allColors = []; // in colors array we get all the colors
    data.forEach(element => {
      allColors.push(...element.color)
    });
    let uniqueColors =  getUniqueData(allColors)
    console.log(uniqueColors)
  }

  // returns all unique size
  const getSizeData = () => {
    let allSizes = []; // in Sizes array we get all the Sizes
    data.forEach(element => {
      allSizes.push(...element.size)
    });
    let uniqueSizes =  getUniqueData(allSizes)
    console.log(uniqueSizes)
  }

  if (data!=undefined) {  
    useEffect(() => {
    getColorData()
    getSizeData()
  }, [data])
  }
  
  return (
    <div className="rounded-md p-4 bg-gradient-to-b from-pink-200 h-fit hidden md:block">
      <h4 className="text-xl text-center pb-2 ">Select Filters</h4>
      <div className="flex flex-col h-full justify-evenly">
        {/* filter by price */}
        <div className="form-control w-full pb-2 ">
          {price.map((item)=>{
            return <PriceFilter price={item} />
          })}
        </div>
        {/* filter by rating */}
        <div className="form-control w-full pb-2 ">
          {rating.map((item)=>{
            return <RatingFilter rating={item}/>
          })}
        </div>
        {/* filter by colors */}
        <div className="form-control w-full pb-2  flex flex-row flex-wrap justify-evenly">
          {category != 'jewelery' && color.map((item)=>{
            return <ColorFilter color={item}/>
          })}
        </div>
        {/* filter by size */}

        {/* men's and women's clothing  */}
        <div className="form-control w-full pb-2  flex flex-row flex-wrap justify-evenly">
          {(category === "men's clothing" || category === "women's clothing") && clothingSize.map((item)=>{
            return <SizeFilter size={item}/>
          })}
        </div>
        {/* remove filters */}
        <button className="btn btn-error w-full text-white shadow-lg">Set Default Filters</button>
      </div>
    </div>
  );
};

export default Filter;
