import React, { Component } from "react";
// import * as actions from "./actions";
import { PropTypes } from "prop-types";


export default class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    addaAction: PropTypes.func.isRequired,
    minusAction: PropTypes.func.isRequired,
    addAsyncAction:PropTypes.func.isRequired
  };
  add = () => {
    const number = this.select.value * 1;
    this.props.addaAction(number);
  };
  minus = () => {
    const number = this.select.value * 1;
    this.props.minusAction(number);
  };
  addAsync=()=>{
    const number = this.select.value * 1;
    this.props.addAsyncAction(number);
  }
  odd = () => {};
  // async = () => {
  //   setTimeout(() => {
  //     const number = this.select.value * 1;
  //     this.props.addaAction(number);
  //   }, 1000);
  // };

  render() {
    // const count = this.props.store.getState();
    // debugger;
    const { count } = this.props;
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
        <button onClick={this.addAsync}>async</button>
      </div>
    );
  }
}
