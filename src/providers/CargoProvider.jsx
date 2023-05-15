import React, { useState, useContext } from "react";
const cargoDetailsContext = React.createContext();
const cargoDetailsToggleContext = React.createContext();

/**
 * This function returns the context object for cargo details.
 * @returns The function `useCargoContext` is returning the result of calling the `useContext` hook
 * with the `cargoDetailsContext` object as its argument. This hook is typically used to access the
 * current value of a context object within a React component. Therefore, the return value of
 * `useCargoContext` is likely the current value of the `cargoDetailsContext` object, which could be an
 * object
 */
export function useCargoContext() {
    return useContext(cargoDetailsContext);
}

/**
 * This function returns the context object for toggling cargo details in a React component.
 * @returns The function `useCargoToggleContext` is returning the context value of
 * `cargoDetailsToggleContext` using the `useContext` hook.
 */
export function useCargoToggleContext() {
    return useContext(cargoDetailsToggleContext);
}

/**
 * This is a React function that provides a context for cargo details and allows for updating the
 * context with new data.
 * @returns The `CargoProvider` component is being returned, which wraps the `children` components with
 * two context providers: `cargoDetailsContext` and `cargoDetailsToggleContext`. The `cargoDetails`
 * state is initialized as `null` and can be updated by calling the `handleChangeCargoContext`
 * function, which sets the new value of `cargoDetails`.
 */
export function CargoProvider({ children }) {
    const [cargoDetails, setCargoDetails] = useState(null)

    /**
     * This function sets the cargo details based on the provided data.
     */
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