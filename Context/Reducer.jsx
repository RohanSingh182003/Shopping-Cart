import { toast } from "react-toastify";

const Reducer = (state, action) => {
  // calculates subtotal
  const subTotal = (state) => {
    let subt = 0;
    state.forEach((ele) => {
      subt = subt + ele.price * ele.qty;
    });
    return subt;
  };

  switch (action.type) {
    case "addToCart":
      let prod = state.cart.find((e) => e.id === action.payload.id);
      if (prod) {
        prod.qty += 1;
        return {
          cart: [...state.cart],
          subTotal: subTotal(state.cart),
        };
      }
      let id = action.payload.id;
      let price = action.payload.price;
      let image = action.payload.img;
      let qty = 1;
      let title = action.payload.title;
      let color = action.payload.color;
      let size = action.payload.size;
      let item = { id, price, qty, title, image , color , size };
      toast.success('Item added into cart.')
      return {
        cart: [...state.cart, item],
        subTotal: state.subTotal + price,
      };

    case "removeItemFromCart":
      let remove_prod = state.cart.find((e) => e.id === action.payload.id);
      if (remove_prod.qty > 1) {
        remove_prod.qty -= 1;
        return {
          cart: [...state.cart],
          subTotal: subTotal(state.cart),
        };
      } else {
        let del_prod = state.cart.filter((e) => e.id != action.payload.id);
        return {
          cart: del_prod,
          subTotal: subTotal(del_prod),
        };
      }

    case "clearItemFromCart":
      let clear_prod = state.cart.filter((e) => e.id != action.payload.id);
      return {
        cart: clear_prod,
        subTotal: subTotal(clear_prod),
      };

    case "clearCart":
      return {
        cart: [],
        subTotal: 0,
      };

    default:
      break;
  }
  return state;
};

export default Reducer;
