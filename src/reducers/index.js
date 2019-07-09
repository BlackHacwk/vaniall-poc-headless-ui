import {combineReducers} from "redux";
import {REQUEST_ACCOUNT_SUCCESS, SELECT_PACKAGE, SET_CURRENT} from "../actions/action-types";

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
    if (action.type === REQUEST_ACCOUNT_SUCCESS)
        return action.payload;

    return state;
};

export default combineReducers({ nav: navReducer, selectedPackage: packageReducer, account: accountReducer });