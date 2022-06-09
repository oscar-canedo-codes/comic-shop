import React, { useContext, useState, useEffect } from "react";
import { API } from "../services/api";

export const comicContext = React.createContext();

export const useComicContext = () => {
  return useContext(comicContext);
};

export default function ComicProvider({ children }) {
  const [items, setItems] = useState([]);
  const [comics, setComics] = useState([]);

  const urlPage = `http://localhost:3000/`;

  useEffect(() => {
    API.get("comics").then((response) => {
      setComics(response.data);
      console.log(response.data);
    });
  }, [urlPage]);

  const addToCart = (item) => {
    const found = items.find((comic) => comic._id === item._id);
    if (!found) {

      const article = {
        ...item,
        count: 1,
        price: item.price,
        totalPrice: item.price,
      };
      setItems([...items, article]);
    } else {
      found.count++;
      found.totalPrice = item.price * found.count;
      setItems([...items]);
    }
  };

  const deleteToCart = (itemToDelete) => {
    items.filter((item) => {
        
      if (item._id === itemToDelete._id) {
        itemToDelete = {
          ...itemToDelete,
          count: item.count > 0 ? item.count-- : item.count,
          totalPrice: item.totalPrice - item.price,
        };

        setItems([...items]);

        if (item.count === 0) {
          let filterDeleted = items.filter(
            (item) => item._id !== itemToDelete._id
          );
          setItems(filterDeleted);
        }
      }
    });
  };

  const store = {
    items,
    addToCart,
    comics,
    setItems,
    deleteToCart,
  };

  return <comicContext.Provider value={store}>{children}</comicContext.Provider>;
}