import React, { useEffect, useReducer, useState } from 'react'
import AppContext from './AppContext'
import Reducer from './Reducer'

const AppState = (props) => {
  const [data, setData] = useState([])

  const getData = async () => {
    let a = await fetch('https://fakestoreapi.com/products');
    let b = await a.json();
    setData(b)
    // return b;
}
useEffect(() => {
  getData();
  console.log(state);
}, [])
    const reducer = Reducer;
    let initialState = {
      products : data,  
      cart: [],
      subTotal : 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{state , dispatch}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppState