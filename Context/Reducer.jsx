const Reducer = (state, action) => {
  switch (action.type) {

    case "addToCart":
      let prod = state.cart.find((e) => e.id === action.payload.id);
      console.log(subt);
      if (prod) {
        prod.qty += 1;
        return {
          cart: [...state.cart],
          subTotal: 0
        };
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


      case "removeItemFromCart":
        let remove_prod = state.cart.find((e) => e.id === action.payload.id);
        if (remove_prod.qty>1) {
          remove_prod.qty -= 1;
          return state;
        }
        else{
          let del_prod = state.cart.filter((e)=> e.id != action.payload.id)
          return {
            cart: del_prod,
            subTotal: 0,
          };
        }

        case "clearItemFromCart":
            let clear_prod = state.cart.filter((e)=> e.id != action.payload.id)
            return {
              cart: clear_prod,
              subTotal: 0,
            };

    default:
      break;
  }
  return state;
};

export default Reducer;
