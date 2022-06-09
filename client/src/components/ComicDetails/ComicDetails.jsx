import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import { useComicContext } from "../../context/ComicContext";
import { API } from "../../services/api";

export const ComicDetails = () => {

  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const { addToCart, deleteToCart, items } = useComicContext();
  
  let itemCounter = 0;
  let priceCounter = 0;


  useEffect(() => {

   API.get('comics').then((response) => {
      setDetails(response.data.find((product) => product._id === id));
    });
  }, [id]);

  const { title,illustrator, author, img, description, price, _id } = details;

  items.filter((item) => {
      
    if (item._id === _id) {
      itemCounter += item.count;
      priceCounter += item.price * item.count;
    }
  });

  return (

    <div className="container-card">
      {details.length === 0 && (
        <div class="container-spinner">
          <h1 class="loading">Loading..</h1>
          <div class="spinner"></div>
        </div>
      )}

      {details.length !== 0 && (
        <div className="details">
          <div className="image">
            <img src={img} alt="" />
          </div>

          <div className="content">
            <h2>{title}</h2>
            <h3>{illustrator}</h3>
            <h3>{author}</h3>
            <p>{description}</p>

            <h1>Add to cart</h1>
            <div className="flex-buttons">
              <Button onClick={() => deleteToCart(details)}>-</Button>
              {<h1>{itemCounter}</h1>}
              <Button onClick={() => addToCart(details)}>+</Button>
            </div>

            <span className="price">
              {itemCounter === 0 ? price : priceCounter}€
            </span>

            {itemCounter > 0 && (
              <button className="toPurchase">
                <Link to="/cart">Complete purchase</Link>
              </button>
            )}
          </div>
        </div>
      )}

      {details.length !== 0 && (
        <Link to="/">
          <Button>Return to home</Button>
        </Link>
      )}
    </div>
  );
};