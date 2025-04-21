import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import AdminReducer from "../reducers/AdminReducer";
import SchoolReducer from "../reducers/SchoolReducer";

const rootReducer = combineReducers({
    "admin": AdminReducer,
    "school": SchoolReducer,
    
});

const mystore = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default mystore;
