import { createStore } from "redux";
import productReducer from "../reducers/product-reducer";

export let store = createStore(productReducer);
