import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/app";
import store from "./redux/store";
import {Provider} from 'react-redux'

// function render() {
//   ReactDOM.render(<App store={store} />, document.getElementById("root"));
// }
// render();
// store.subscribe(render);
ReactDOM.render(<Provider store={store}><App  /></Provider>, document.getElementById("root"));