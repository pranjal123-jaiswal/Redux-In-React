import { combineReducers } from "redux";
import amount from "./amount";

const Reducer = combineReducers({
    amountReducer: amount
})
export default Reducer;