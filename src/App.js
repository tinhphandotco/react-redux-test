import React from 'react';
import { connect } from 'react-redux';

// actions
import {
  addCounter,
  resetCounter
} from 'redux/reducers/counters/action'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <h3>{props.counters.countClick}</h3>
      <button onClick={() => {props.addCounter(1)}}>CLICK</button>
      <button onClick={() => {props.resetCounter()}}>RESET</button>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    counters: store.counters
  }
}

const mapDisPatchToProps = {
  addCounter,
  resetCounter
}

export default connect(mapStateToProps, mapDisPatchToProps)(App);
