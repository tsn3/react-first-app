import {DECREMENT, INCREMENT} from "../../Components/MultiFunction/constants";

const initialState = {
  count: 0
}

export const countReducer = (state= initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1}
    case DECREMENT:
      return {...state, count: state.count - 1}
    case 'money':
      console.log('line 19')
      return state
    default:
      return state
    // if (action.type === 'money') {
    //   console.log(action.title)
    //   return '5'
    // }
    // else {
    //   return state
    // }
  }
}