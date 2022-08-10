import {createStore} from 'redux';

const initaialState = {
  count: 0
}

const reducer = (state= initaialState, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - 1}
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
const decrement = () => {
  return {
    type: 'decrement'
  }
}
store.dispatch(increment())
store.dispatch(increment(10))
store.dispatch(decrement())
store.dispatch(decrement())