import { useDispatch } from "react-redux";

export const getApi = () => {
  return (dispatch) => {
    const url = "https://fakestoreapi.com/products";
    const dataResp = [];
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "getData", data: data }));
  };
};

export const addToCartAction = (obj) => {
  return (dispatch) => {
    let count = obj.count;
    obj.data["count"] = count;
    dispatch({ type: "addToCart", data: obj.data });
  };
};

export const increamentCartItemAction = (obj) => {
  return (dispatch) => {
    dispatch({ type: "increamentCartItem", data: obj });
  };
};

export const decreamentItemAction = (obj) => {
  return (dispatch) => {
    dispatch({ type: "decreamentCartItem", data: obj });
  };
};

export const removeItemAction =(obj) =>{
  return (dispatch) => {
    dispatch({ type: "removeCartItem", data: obj });
  };
}
