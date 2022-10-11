import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import Logincheck from "./Logincheck";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  whitelist: ["Logincheck"],
  // blacklist -> 그것만 제외합니다
};

//Logincheck 새로고침 보완
const rootReducer = combineReducers({ Logincheck, userReducer });
export default persistReducer(persistConfig, rootReducer);
