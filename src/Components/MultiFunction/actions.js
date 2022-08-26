import {INCREMENT, DECREMENT, ADD_CUSTOMER, ADD_MANY_CUSTOMERS, REMOVE_CUSTOMER} from "./constants";

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})