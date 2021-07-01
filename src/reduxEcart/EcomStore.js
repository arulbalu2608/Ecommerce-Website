import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Fetchreducer from "./Reducer";

const EcomStore = createStore(Fetchreducer, applyMiddleware(thunk));
export default EcomStore;
