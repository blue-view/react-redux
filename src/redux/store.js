import { createStore, applyMiddleware } from "redux";
import { counter } from "./reduxs";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)));
export default store;
