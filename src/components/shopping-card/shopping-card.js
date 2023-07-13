import React from "react";
import { useDispatch } from "react-redux";
import { incrementCart, decrementCart } from "../../actions/product-actions";

function ShoppingCard({ product }) {
  const dispatch = useDispatch();
  const increment = (product) => {
    dispatch(incrementCart(product));
  };
  const decrement = (product) => {
    dispatch(decrementCart(product));
  };

  return (
    <div className="flex">
      <img
        width="100px"
        height="100px"
        src={`https://shopapi.liateam.com${product.small_pic}`}
        alt={product.title}
      />
      <div>
        <h2>{product.title}</h2>
        <div className="flex gap-x-2">
          <div className="cursor-pointer" onClick={() => increment(product)}>
            +
          </div>
          <div>{product.quantity}</div>
          <div className="cursor-pointer" onClick={() => decrement(product)}>
            -
          </div>
        </div>
        <div className="text-red-500">{product.price.final_price}</div>
      </div>
    </div>
  );
}

export default ShoppingCard;
