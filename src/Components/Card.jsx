import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext';

const Card = ({props}) => {
    let {image , price , description , title , id} = props;
      
    const {state , dispatch} = useContext(AppContext)
  return (
    <div key={id} className='w-full md:w-48 border p-2 my-4 rounded-md'>
                    <div className='w-full md:w-48 h-44 flex justify-center py-2'>
                    <img src={image} className="h-full" />
                    </div>
                    <div className='flex flex-col'>
                    <div className='h-24 overflow-hidden'>
                    <p className='text-lg text-center border-t'>{title.slice(0,14)+'...'}</p>
                    <p className='text-sm text-gray-600 text-center'>{description.slice(0,30)+'...'}</p>
                    <p className='text-gray-700 text-right mx-2 font-semibold'>${price}</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <button onClick={()=>{dispatch({type:'addToCart', payload:{
                            id:id,
                            title:title,
                            price:price,
                            img: image
                        }})}} className='p-2 bg-green-500 text-white w-full rounded-md hover:bg-green-600'>
                            Add To Cart
                        </button>
                    </div>
                    </div>
                </div>
  )
}

export default Card