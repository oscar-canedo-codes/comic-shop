import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useComicContext } from "../../context/ComicContext";
import { Button }  from "../Button/Button";

import "./_Comics.scss";

export const Comics = ({ comics }) => {
  return (
    <>
      <div className="container">
        {comics.map((comic) => {
          return (
            <div className="cards__comics">
              <div className="image">
                <img src={comic.img} alt={comic.name} />
              </div>
              <div className="content">
                <h2>{comic.title}</h2>
                <h3>{comic.illustrator}</h3>
                <h3>{comic.author}</h3>
                <p className="description">{comic.description}</p>
                <span className="price">{comic.price}€</span>

                <Link to={`/comic-details/${comic._id}`}>
                  <button className="link">View Article</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};