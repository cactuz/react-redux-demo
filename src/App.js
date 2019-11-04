import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
import reducer from "./reducers/";   //without a file, js will look for an index.js and invoke the export default

const initialState = { tech: "Awesome " };
const store = createStore(reducer, initialState);   //createStore creates a reducer which is the store "manager";
// a reducer is required to access the application state

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
