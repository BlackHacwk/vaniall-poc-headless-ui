import {combineReducers} from "redux";
import {SELECT_PACKAGE, SET_CURRENT} from "../actions/action-types";
import {metadataReducer} from "./metadataReducer";

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

export default combineReducers({ nav: navReducer, selectedPackage: packageReducer, metadata: metadataReducer });