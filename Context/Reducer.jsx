const Reducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      let prod = state.cart.find((e) => e.title === action.payload.title);
      if (prod) {
        prod.qty += 1;
        return state;
      }
      let id = action.payload.id;
      let price = action.payload.price;
      let image = action.payload.img;
      let qty = 1;
      let title = action.payload.title;
      let item = { id, price, qty, title, image };
      return {
        cart: [...state.cart , item],
        subTotal: 0,
      };

    default:
      break;
  }
  return state;
};

export default Reducer;
