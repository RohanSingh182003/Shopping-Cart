import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext';
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Card = ({props}) => {
    let {image , price , title , id , color , size} = props;
      
    const {state , dispatch} = useContext(AppContext)
  return (
    <Link to={`/product/${id}`} key={id} className='w-48 border p-2 my-4 rounded-md overflow-x-hidden'>
                    <div className='w-48 h-44 flex justify-center py-2'>
                    <img src={image} className="h-full object-cover" />
                    </div>
                    <div className='flex flex-col'>
                    <div className='h-24 overflow-hidden'>
                    <p className='text-lg text-center border-t'>{title.slice(0,30)+'...'}</p>
                    <p className='text-right mx-2 font-semibold text-green-600'>₹ {price}</p>
                    </div>
                    <div className='flex flex-wrap items-center justify-between'>
                       {color.length > 0 &&  <div className='flex -space-x-2'>
                            {color.map((item)=>{ return <button style={{backgroundColor: item}} className="h-6 w-6 rounded-full border-2"></button>})}
                        </div>}
                        {size.length > 0 && <div className='flex space-x-1'>
                            {size.map((item)=>{return <p className='uppercase p-1 border-2'>{item}</p>})}
                            </div>}
                    </div>
                    </div>
                </Link>
  )
}

export default Card