import React, { useState, useContext } from "react";
const cargoDetailsContext = React.createContext();
const cargoDetailsToggleContext = React.createContext();

export function useCargoContext() {
    return useContext(cargoDetailsContext);
}

export function useCargoToggleContext() {
    return useContext(cargoDetailsToggleContext);
}

export function CargoProvider({ children }) {
    const [cargoDetails, setCargoDetails] = useState(null)

    /* Función para cambiar algo */
    const handleChangeCargoContext = (data) => {
        console.log("Data in provider: ", data)
        setCargoDetails(data)
    }
    return (
        <cargoDetailsContext.Provider value={cargoDetails}>
            <cargoDetailsToggleContext.Provider value={handleChangeCargoContext}>
                {children}
            </cargoDetailsToggleContext.Provider>
        </cargoDetailsContext.Provider>
    );
}