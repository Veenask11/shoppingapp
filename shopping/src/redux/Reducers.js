const initialState = {
  data: [],
  shoppingBag: [],
  totalAmount:0,
 
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "getData": {
      return {
        ...initialState,
        data: action.data,
        loading:true
      };
    }

    case "addToCart": {
      const inCart = state.shoppingBag.find((item) =>
        item.id === action.data.id ? true : false
      );
    
      return {
        ...initialState,
        shoppingBag: inCart
          ? state.shoppingBag.map((item) =>
              item.id === action.data.id
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...state.shoppingBag, { ...action.data }],
      };
    }

    case "increamentCartItem": {
      return {
        ...initialState,
        shoppingBag: state.shoppingBag.map((item) =>
          item.id === action.data.id ? { ...item, count: item.count + 1 } : item
        ),
      };
    }
    case "decreamentCartItem": {
      return {
        ...initialState,
        shoppingBag: state.shoppingBag.map((item) =>
          item.id === action.data.id ? { ...item, count: item.count - 1 } : item
        ),
      };
    }
    
    case "removeCartItem" :{
      return {
        ...initialState,
        shoppingBag: state.shoppingBag.filter((item) =>
          item.id !== action.data.id)
      };
    }
    
    default:
      return state;
  }
}
