import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useComicContext } from "../../context/ComicContext";

const ShoppingCart = () => {
  const { items } = useComicContext();

  let counter = items.reduce((acc, current) => acc + current.count, 0);

  return (
    <>
      <Link to="/cart">
        <button className="cart">
          <BsCart4 /> <span>{counter}</span>
        </button>
      </Link>
    </>
  );
};

export default ShoppingCart;