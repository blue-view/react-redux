import React, { Component } from "react";
import { connect } from "react-redux";
import { addaAction, minusAction } from "../redux/actions";
import Counter from '../components/counter'

export default connect(
    state => {
        return ({ count: state });
    },
    { addaAction, minusAction }
  )(Counter);
  