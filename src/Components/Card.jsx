import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext';
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Card = ({props}) => {
    let {image , price , title , id} = props;
      
    const {state , dispatch} = useContext(AppContext)
  return (
    <div key={id} className='w-48 border p-2 my-4 rounded-md overflow-x-hidden'>
                    <div className='w-48 h-44 flex justify-center py-2'>
                    <img src={image} className="h-full object-cover" />
                    </div>
                    <div className='flex flex-col'>
                    <div className='h-24 overflow-hidden'>
                    <p className='text-lg text-center border-t'>{title.slice(0,30)+'...'}</p>
                    <p className='text-right mx-2 font-semibold text-green-600'>₹ {price}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link to={`/product/${id}`} className='p-2 bg-violet-500 text-white w-full rounded-md hover:bg-violet-600 text-center'><button>
                            Buy Now
                        </button></Link>
                        <BsCartCheckFill onClick={()=>{dispatch({type:'addToCart', payload:{
                            id,
                            title,
                            price,
                            img: image
                        }})}} className='text-4xl text-violet-500 hover:text-violet-600 cursor-pointer mx-2'/>
                    </div>
                    </div>
                </div>
  )
}

export default Card