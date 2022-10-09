import { combineReducers } from "redux";
import Logincheck from "./Logincheck";
import userReducer from "./userReducer";

const rootReducter = combineReducers({ Logincheck, userReducer });
export default rootReducter;
