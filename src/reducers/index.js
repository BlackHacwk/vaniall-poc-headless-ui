import {combineReducers} from "redux";
import {
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_UPDATE_SUCCESS,
    REQUEST_CONTACTS_SUCCESS,
    SELECT_PACKAGE,
    SET_CURRENT
} from "../actions/action-types";

const navReducer = (state = null, action) => {
    if (action.type === SET_CURRENT)
        return action.payload;

    return state;
};

const packageReducer = (state = null, action) => {
    if (action.type === SELECT_PACKAGE)
        return action.payload;

    return state;
};

const accountReducer = (state = null, action) => {
    switch (action.type) {
        case REQUEST_ACCOUNT_SUCCESS: return action.payload;
        case REQUEST_ACCOUNT_UPDATE_SUCCESS: return action.payload;

        default: return state;
    }
};

const contactReducer = (state = [], action) => {
    if (action.type === REQUEST_CONTACTS_SUCCESS)
        return action.payload;

    return state;
};

export default combineReducers({
    nav: navReducer,
    selectedPackage: packageReducer,
    account: accountReducer,
    contacts: contactReducer
});