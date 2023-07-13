import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/product-actions";
import { shoppingCart } from "../../assets/images/images";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const add = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <article className="shadow-md rounded-md bg-white p-2 grid content-between">
      <div className="mb-2">
        <img
          className="rounded-md"
          src={`https://shopapi.liateam.com${product.small_pic}`}
          alt={product.title}
          width="100%"
          height="100%"
        />

        <h2>{product.title}</h2>
      </div>

      <div className="flex justify-between">
        <div className="text-red-600">{product.price.final_price}</div>
        <img
          onClick={() => add(product)}
          className="rounded-md cursor-pointer"
          src={shoppingCart}
          alt=""
        />
      </div>
    </article>
  );
}

export default ProductCard;
