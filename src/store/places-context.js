import { createContext, useState } from "react";

export const PlacesContext = createContext();

export const PlacesContextProvider = ({ children }) => {
    const [placesList, setPlacesList] = useState([]);

    const addPlace = (place) => {
        setPlacesList((prevPlacesList) => {
            return [place, ...prevPlacesList];
        });
    };

    const value = {
        placesList,
        addPlace,
    };
    return (
        <PlacesContext.Provider value={value}>
            {children}
        </PlacesContext.Provider>
    );
};
