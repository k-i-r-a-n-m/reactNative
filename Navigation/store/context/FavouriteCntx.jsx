import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

export const FavouriteContextProvider = ({ children }) => {
  const [favMealsIds, setFavMealsIds] = useState([]);

  const addFav = (id) => {
    setFavMealsIds((prev) => [...prev, id]);
  };

  const removeFav = (id) => {
    setFavMealsIds(favMealsIds.filter((e) => e !== id));
  };

  const value = {
    ids: favMealsIds,
    addFav,
    removeFav,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
