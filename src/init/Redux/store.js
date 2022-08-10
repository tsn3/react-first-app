import {createStore} from 'redux';

const initialState = {
  count: 0
}

const reducer = (state= initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - action.payload}
    default: return state
  }
}

export const store = createStore(reducer)
store.subscribe(() => {
  console.log( store.getState() )
})
const increment = (payload = 1) => {
  return {
    type: 'increment',
    payload
  }
}
const decrement = (payload = 1) => {
  return {
    type: 'decrement',
    payload
  }
}
store.dispatch(increment())
store.dispatch(increment(10))
store.dispatch(decrement())
store.dispatch(decrement())