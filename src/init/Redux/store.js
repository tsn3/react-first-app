import {createStore, combineReducers, applyMiddleware} from 'redux';
import {countReducer} from "./countReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  count: countReducer,
  customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
store.subscribe(() => {
  console.log( store.getState() )
})
// export const increment = (payload = 1) => {
//   return {
//     type: 'increment',
//     payload
//   }
// }
// const decrement = (payload = 1) => {
//   return {
//     type: 'decrement',
//     payload
//   }
// }
// store.dispatch(increment())
// store.dispatch(increment(10))
// store.dispatch(decrement())
// store.dispatch(decrement())