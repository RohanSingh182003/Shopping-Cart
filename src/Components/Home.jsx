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
    <div className='flex flex-wrap justify-evenly md:mx-16 lg:px-6'>
        {data && data.map((item)=>{
            return (        
                <Card props={{id: item.id , title: item.title , description: item.description , price: item.price , image: item.image}}/>
            )
        })}
    </div>
    </>
  )
}

export default Home