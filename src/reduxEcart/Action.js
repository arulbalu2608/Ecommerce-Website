import { ECART_ACTION } from "./ActionType";
import axios from "axios";

export const loading = () => {
  return {
    type: ECART_ACTION.LOADING,
  };
};
export const success = (data) => {
  return {
    type: ECART_ACTION.SUCCESS,
    data,
  };
};

export const fail = (error) => {
  return {
    type: ECART_ACTION.FAILED,
    error,
  };
};
export const addCart = (item) => {
  return {
    type: ECART_ACTION.ADDCART,
    item,
  };
};
export const buyItem = (item) => {
  return {
    type: ECART_ACTION.BUYITEM,
    item,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: ECART_ACTION.DELETE,
    id,
  };
};

export const fetchItem = () => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const data = response.data;
        dispatch(success(data));
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(fail(errormsg));
      });
  };
};
