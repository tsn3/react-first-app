import {useDispatch} from "react-redux";
import {
  addCustomerAction,
  addManyCustomersAction,
  removeCustomerAction
} from "../Components/MultiFunction/actions";

export const useCustomer = () => {

  const dispatch = useDispatch();

  return {
    addCustomer: (name) => dispatch(addCustomerAction(name)),
    addManyCustomers: () => dispatch(addManyCustomersAction()),
    removeCustomer: (customer) => dispatch(removeCustomerAction(customer)),
  }
}