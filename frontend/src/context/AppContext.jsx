import { createContext } from "react";
import { doctors } from "../assets/assets";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';

    const value = {
        doctors,
        currencySymbol,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

// Correcting the PropTypes definition
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Directly specify 'children'
};

export default AppContextProvider;
