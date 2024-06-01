import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartItemId,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const cartItem = useSelector(getCartItemId(pizzaId));
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>

      {cartItem?.quantity}
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
