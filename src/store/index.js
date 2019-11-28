import { createStore } from "redux";
import reducer from "../reducers"; //without a file, js will look for an index.js and invoke the export default

const initialState = { tech: "React " };
export const store = createStore(reducer, initialState); //createStore creates a reducer which is the store "manager";
// a reducer is required to access the application state; returns and object with has state and setState()