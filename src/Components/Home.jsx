import axios from 'axios';
import React, {useEffect, useState } from 'react'
import Card from './Card';
import Loading from './Loading';

const AllProducts = (props) => {
    // let {loadProgress} = props;
    const [data, setData] = useState()
    const getData = async () => {
        props.data(20)
        let a = await axios.get('https://fakestoreapi.com/products');
        let b = await a.data;
        setData(b)
        props.data(100)

    }
    // load initial data
    useEffect(() => {
        getData();
    }, [])
    
  return (
    <>    
    
    <p className='text-center py-3 text-2xl text-violet-800'>Shop Latest Items</p>
   {data? <div className='flex flex-wrap justify-evenly md:mx-16 lg:px-6'>
        {data.map((item)=>{
            return (        
                <Card props={{id: item.id , title: item.title , description: item.description , price: item.price , image: item.image}}/>
            )
        })}
    </div>: 
    <Loading/>}
    </>
  )
}

export default AllProducts