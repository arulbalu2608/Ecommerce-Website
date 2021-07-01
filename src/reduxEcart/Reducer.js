import { ECART_ACTION } from "./ActionType";

const initial = {
  loading: false,
  data: [],
  error: "",
  detailItem: [],
  cartItem: [],
};

const Fetchreducer = (state = initial, action) => {
  switch (action.type) {
    case ECART_ACTION.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ECART_ACTION.SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case ECART_ACTION.FAILED:
      return {
        ...state,
        error: action.error,
      };
    case ECART_ACTION.BUYITEM:
      return {
        ...state,
        detailItem: action.item,
      };

    case ECART_ACTION.ADDCART:
      return {
        ...state,
        cartItem: state.cartItem.concat([action.item]),
      };

    case ECART_ACTION.DELETE:
      return {
        ...state,
        cartItem: state.cartItem.filter((ar) => ar.id !== action.id),
      };
    default:
      return state;
  }
};

export default Fetchreducer;
