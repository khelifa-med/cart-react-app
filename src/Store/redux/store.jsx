import { applyMiddleware, createStore } from "redux";
import { Cart_Reducer } from "../Cart/CartReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { Product_Reducer } from "../Products/ProductsReducer";


const APPReducers = combineReducers({
    cart : Cart_Reducer,
    products : Product_Reducer
})

export const store = createStore(APPReducers,applyMiddleware(thunk))