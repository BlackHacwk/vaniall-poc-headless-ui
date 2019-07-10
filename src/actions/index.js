import {
    REQUEST_ACCOUNT_MESSAGE_FAILURE,
    REQUEST_ACCOUNT_MESSAGE_SUCCESS,
    REQUEST_ACCOUNT_SUCCESS,
    REQUEST_ACCOUNT_UPDATE, REQUEST_ACCOUNT_UPDATE_FAILURE, REQUEST_ACCOUNT_UPDATE_SUCCESS,
    REQUEST_CONTACTS,
    REQUEST_CONTACTS_FAILURE,
    REQUEST_CONTACTS_SUCCESS, REQUEST_MESSAGE_UPDATE,
    SELECT_PACKAGE,
    SET_CURRENT
} from "./action-types";
import {api} from "../api";
import {account_endpoint, contact_endpoint, context_root, host, message_endpoint} from "../constants/endpoints";
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

export const requestMessage = (priority,description) => dispatch => {
    const data = {
        "id": "ec907a0c-33d5-427e-9503-3ef0dda7e76d",
        "jsonrpc": "2.0",
        "method": "createNewActivity",
        "params": [
            {
                "subject": "Review 60 day UW Period",
                "description": `${description}`,
                "priority": `${priority}`,
                "recurring": false,
                "mandatory": false,
                "dueDate": "2019-08-28T16:31:38Z",
                "escalationDate": "2019-08-28T16:31:38Z",
                "selectedAssignee": "Super User (Default Root Group)",
                "activityPattern": {
                    "code": "uw_period_60",
                    "priority": `${priority}`
                },
                "policyNumber": "1424066131"
            },
            null
        ]

    };

    api.post(
        host + context_root + message_endpoint,
        data,
        {headers: headers})
        .then(res => dispatch({type: REQUEST_ACCOUNT_MESSAGE_SUCCESS, payload: res.data.result}))
        .catch(e => dispatch({type: REQUEST_ACCOUNT_MESSAGE_FAILURE, error: e}));

    return dispatch({type: REQUEST_MESSAGE_UPDATE});
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