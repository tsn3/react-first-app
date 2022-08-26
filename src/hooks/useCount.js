import {useDispatch} from "react-redux";
import {
  decrement,
  increment,
} from "../Components/MultiFunction/actions";

export const useCount = () => {
  const dispatch = useDispatch();

  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}