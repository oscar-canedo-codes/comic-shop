import React from "react";
import { Link } from "react-router-dom";
import { useComicContext } from "../../context/ComicContext";

export const Cart = () => {
  const { items, setItems } = useComicContext();

  const deleteItems = (comic) => {

    items.filter((filteredItem) => {
      if (filteredItem._id === comic._id && filteredItem.count > 0) {
        comic.count--;
        comic.totalPrice = comic.totalPrice - comic.price;
        setItems([...items]);
        console.log(comic.count);

        if (comic.count === 0) {
          let array = items.filter((item) => item._id !== comic._id);
          setItems(array);
        }
      }
    });
  };

  return (
    <div id="selector">
      <div className="cartContent">
        {items.length !== 0 &&
          items.map((comic) => {
            return (
              <div className="comicRow">
                <img src={comic.img} alt="image" />
                <p>{comic.name}</p>
                <p id="counter">Quanity x{comic.count}</p>
                <p>{comic.price}€</p>
                <button className="delete" onClick={() => deleteItems(comic)}>
                  Delete Item
                </button>
              </div>
            );
          })}
      </div>
      <div className="bottomCart">
        <div className="cartTotal">
          <h2>Total:</h2>{" "}
          <h2>
            {" "}
            {items.reduce((prev, current) => prev + current.totalPrice, 0)}€
          </h2>
        </div>
          <button className="payment">
            Finalize purchases
          </button>
        <Link to="/" className="backToHome">
          <button className="button"> Return home</button>
        </Link>
      </div>
    </div>
  );
};