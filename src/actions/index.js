import {
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_UPDATE, REQUEST_ACCOUNT_UPDATE_FAILURE, REQUEST_ACCOUNT_UPDATE_SUCCESS,
    REQUEST_CONTACTS,
    REQUEST_CONTACTS_FAILURE,
    REQUEST_CONTACTS_SUCCESS,
    SELECT_PACKAGE,
    SET_CURRENT
} from "./action-types";
import {api} from "../api";
import {account_endpoint, contact_endpoint, context_root, host} from "../constants/endpoints";
import {headers} from "../constants";

export const setCurrentComponent = tag => dispatch => dispatch({type: SET_CURRENT, payload: tag});

export const selectPackage = type => dispatch => dispatch({type: SELECT_PACKAGE, payload: type});

export const requestPolicyContacts = policyNumber => dispatch => {
    const data = {"id":"a7eb6534-772c-475a-b270-97752998eeec","jsonrpc":"2.0","method":"getPolicyContactSummaries","params":[policyNumber, [] ,0 ,5]};

    api.post(
        host + context_root + contact_endpoint,
        data,
        {headers: headers})
        .then(res => dispatch({type: REQUEST_CONTACTS_SUCCESS, payload: res.data.result.policyContacts}))
        .catch(e => dispatch({type: REQUEST_CONTACTS_FAILURE, error: e}));


    return dispatch({type: REQUEST_CONTACTS});
};

export const updateAccount = data => dispatch => {

    api.post(
        host + context_root + account_endpoint,
        data,
        {headers: headers})
        .then(res => dispatch({type: REQUEST_ACCOUNT_UPDATE_SUCCESS, payload: res.data.result}))
        .catch(e => dispatch({type: REQUEST_ACCOUNT_UPDATE_FAILURE, error: e}));


    return dispatch({type: REQUEST_ACCOUNT_UPDATE});
};

// export const requestAccountDetails = accountNumber => dispatch => {
//     const data = {"id":"a7eb6534-772c-475a-b270-97752998eeec","jsonrpc":"2.0","method":"getAccountDetails","params":[`${accountNumber}`]};
//
//     api.post(
//         host + context_root + account_endpoint,
//         data,
//         {headers: headers})
//         .then(res => dispatch({type: REQUEST_ACCOUNT_SUCCESS, payload: res.data.result}))
//         .catch(e => dispatch({type: REQUEST_ACCOUNT_FAILURE, error: e}));
//
//
//     return dispatch({type: REQUEST_ACCOUNT});
// };