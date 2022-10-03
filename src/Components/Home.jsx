import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext';
import Card from './Card';

const Home = () => {
    const [data, setData] = useState()
    const getData = async () => {
        let a = await axios.get('https://fakestoreapi.com/products');
        let b = await a.data;
        setData(b)
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
    <div className="h-96 w-full flex flex-col justify-center items-center">
            <p className="text-2xl text-violet-600 font-semibold">Products are loading!</p>
            <p className="text-xs my-2 text-violet-400">Please wait , we are thankful for your patience.</p>
        </div>}
    </>
  )
}

export default Home