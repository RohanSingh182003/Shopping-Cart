import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import AppContext from "./AppContext";
import Reducer from "./Reducer";

const AppState = (props) => {
  const initialState = {
    cart: [],
    subTotal: 0,
  };
  const reducer = Reducer;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
