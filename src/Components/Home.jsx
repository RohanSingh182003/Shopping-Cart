import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext';

const Home = () => {
    const [data, setData] = useState()
    const getData = async () => {
        let a = await fetch('https://fakestoreapi.com/products');
        let b = await a.json();
        setData(b)
    }
    useEffect(() => {
        getData();
    }, [])
    const {dispatch} = useContext(AppContext)
    
  return (
    <>    
    
    <p className='text-center py-2 text-2xl text-violet-800 lg:ml-56'>Shop Latest Items</p>
    <div className='flex flex-wrap justify-evenly pb-6 h-[80vh] overflow-y-scroll lg:ml-56 lg:px-6 scrollbar-hide'>
        {data && data.map((item)=>{
            return (        
                <div key={item.id} className='w-48 border p-2 my-4 rounded-md'>
                    <div className='w-48 h-44 flex justify-center py-2'>
                    <img src={item.image} className="h-full" />
                    </div>
                    <div className='flex flex-col'>
                    <div className='h-24 overflow-hidden'>
                    <p className='text-lg text-center border-t'>{item.title.slice(0,14)+'...'}</p>
                    <p className='text-sm text-gray-600 text-center'>{item.description.slice(0,30)+'...'}</p>
                    <p className='text-gray-700 text-right mx-2 font-semibold'>${item.price}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <button onClick={()=>{dispatch({type:'addToCart', payload:{
                            id:item.id,
                            title:item.title,
                            price:item.price,
                            img: item.image
                        }})}} className='p-2 bg-green-500 text-white w-full rounded-md hover:bg-green-600'>
                            Add To Cart
                        </button>
                    </div>
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Home