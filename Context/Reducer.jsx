const Reducer = (state,action) => {
    switch (action.type) {
        case 'addToCart':
            let id = action.payload.id
            let price = action.payload.price
            let qty = action.payload.qty
            let title = action.payload.title
            let item;
            state.forEach(element => {
                if(element.id == id){
                    item = element;
                    element.qty+=1;
                }
            });
            if(item){
            }
            else{        
                return [
                    ...state,
                    {id,title,price,qty}
                ]
            }
            break;
    
        default:
            break;
    }
  return state
}

export default Reducer