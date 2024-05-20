import { createContext, useState } from "react";

export const FavPlacesContext = createContext({
  places: [],
  addPlace: (place) => {},
});

export const FavPlacesProvider = ({ children }) => {
  const [favPlaces, setFavPlaces] = useState([]);

  const addPlace = (place) => {
    setFavPlaces((prev) => [...prev, place]);
  };

  const value = {
    places: favPlaces,
    addPlace,
  };

  return (
    <FavPlacesContext.Provider value={value}>
      {children}
    </FavPlacesContext.Provider>
  );
};
