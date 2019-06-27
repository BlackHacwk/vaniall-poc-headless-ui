import {SELECT_PACKAGE, SET_CURRENT} from "./action-types";

export const setCurrentComponent = tag => dispatch => dispatch({type: SET_CURRENT, payload: tag});

export const selectPackage = type => dispatch => dispatch({type: SELECT_PACKAGE, payload: type});