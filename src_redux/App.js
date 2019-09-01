import React, { Component } from "react";
import { addaAction, minusAction } from "./redux/actions";
// import * as actions from "./actions";


export default class App extends Component {
  add = () => {
    const number = this.select.value * 1;
    this.props.store.dispatch(addaAction(number));
  };
  minus = () => {
    const number = this.select.value * 1;
    this.props.store.dispatch(minusAction(number));
  };
  odd = () => {};
  async = () => {
    setTimeout(() => {
      const number = this.select.value * 1;
      this.props.store.dispatch(addaAction(number));
    }, 1000);
  };

  render() {
    const count = this.props.store.getState();
    debugger;
    return (
      <div>
        <p>{count}</p>
        <select ref={select => (this.select = select)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
        <button onClick={this.odd}>odd</button>
        <button onClick={this.async}>async</button>
      </div>
    );
  }
}
