import { createStore, appyMiddleware } from "redux";
import thunk from "react-redux";
import reducer from "./reducer/index.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(appyMiddleware(thunk)));

export default store;