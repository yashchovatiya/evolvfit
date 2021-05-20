import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"
import dishReducer from "./dish/dish.reducer";

import userReducer from "./user/user.reducer";

const persistConsfig={
    key:"root",
    storage,
    whitelist:["cart"]
}

const rootReducer=combineReducers({
    user:userReducer,
    dish:dishReducer
})

export default persistReducer(persistConsfig,rootReducer);