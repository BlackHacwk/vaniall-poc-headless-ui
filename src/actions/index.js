import {
    REQUEST_ACCOUNT,
    REQUEST_ACCOUNT_FAILURE,
    REQUEST_ACCOUNT_SUCCESS,
    SELECT_PACKAGE,
    SET_CURRENT
} from "./action-types";
import {api} from "../api";
import {host, account_endpoint, context_root} from "../constants/endpoints";
import {bearer} from "../constants";

export const setCurrentComponent = tag => dispatch => dispatch({type: SET_CURRENT, payload: tag});

export const selectPackage = type => dispatch => dispatch({type: SELECT_PACKAGE, payload: type});

export const requestAccountDetails = accountNumber => dispatch => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept-Language':'en_US',
        "Access-Control-Allow-Origin": "*",
        'Authorization': bearer
    };
    const data = {"id":"a7eb6534-772c-475a-b270-97752998eeec","jsonrpc":"2.0","method":"getAccountDetails","params":[`${accountNumber}`]};

    api.post(
        host + context_root + account_endpoint,
        data,
        {headers: headers})
        .then(res => dispatch({type: REQUEST_ACCOUNT_SUCCESS, payload: res.data.result}))
        .catch(e => dispatch({type: REQUEST_ACCOUNT_FAILURE, error: e}));


    return dispatch({type: REQUEST_ACCOUNT});
};