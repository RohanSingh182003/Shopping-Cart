import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';

const Catagory = () => {
    const [data, setData] = useState()
    let prod = useParams()
    const getData = async () => {
        let a = await axios.get('https://fakestoreapi.com/products');
        let b = await a.data;
        let newarr = await b.filter((e) => e.category === prod.category)
        setData(newarr)
    }
    // load initial data
    useEffect(() => {
        getData();
    }, [prod.category])
    
  return (
    <>    
    
    <p className='text-center py-3 text-2xl text-violet-800'>Category : <span className='font-semibold capitalize'> {prod.category}</span></p>
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

export default Catagory