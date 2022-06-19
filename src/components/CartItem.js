import { ChevronUp, ChevronDown } from "../icons";

import { removeItem } from "../features/cart/cartSlice";

import { useDispatch } from "react-redux";

export const CartItem = ({
  id,
  img,
  title,
  price,
  amount,
  label,
  artist,
  length,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <h4>
        {title} by {artist}
      </h4>
      <div>
        <h5>
          {label} <div>length: {length}</div>
        </h5>
      </div>

      <h4 className="item-price"> ${price}</h4>

      <button
        onClick={() => {
          dispatch(removeItem(id));
        }}
        className="remove-btn"
      >
        {" "}
        remove{" "}
      </button>

      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p> {amount}</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
