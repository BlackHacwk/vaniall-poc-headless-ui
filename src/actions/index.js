import {
    REQUEST_MESSAGE_FAILURE,
    REQUEST_MESSAGE_SUCCESS,
    REQUEST_ACCOUNT_UPDATE,
    REQUEST_ACCOUNT_UPDATE_FAILURE,
    REQUEST_ACCOUNT_UPDATE_SUCCESS,
    REQUEST_CONTACTS,
    REQUEST_CONTACTS_FAILURE,
    REQUEST_CONTACTS_SUCCESS,
    REQUEST_GBB_FAILURE,
    REQUEST_GBB_SUCCESS,
    REQUEST_GBB_UPDATE,
    REQUEST_MESSAGE_UPDATE,
    SELECT_PACKAGE,
    SET_CURRENT,
    SET_LICENSE, REQUEST_BUY_PACKAGE, BUY_PACKAGE_SUCCESS, BUY_PACKAGE_FAILURE, SET_SESSION_ID
} from "./action-types";
import {api} from "../api";
import {
    account_endpoint,
    contact_endpoint,
    context_root,
    quote_endpoint,
    host,
    message_endpoint
} from "../constants/endpoints";
import {headers} from "../constants";
import {accountDTO, selectPackageBody} from "../__mocks__";

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
        .then(res => dispatch({type: REQUEST_MESSAGE_SUCCESS, payload: res.data.result}))
        .catch(e => dispatch({type: REQUEST_MESSAGE_FAILURE, error: e}));

    return dispatch({type: REQUEST_MESSAGE_UPDATE});
};

export const setLicense = license => dispatch => {
    accountDTO.params[0].accountHolder.licenseNumber = license;
    dispatch({type: SET_LICENSE, payload: license})
};

export const buyPackage = (packageCode, sessionUUID) => dispatch => {
    api.post(
        host + context_root + quote_endpoint,
        selectPackageBody(sessionUUID),
        {headers: headers})
        .then(res => dispatch({type: BUY_PACKAGE_SUCCESS, payload: res.data}))
        .catch(e => dispatch({type: BUY_PACKAGE_FAILURE, error: e}));

    return dispatch({type: REQUEST_BUY_PACKAGE});
}

export const requestGoodBetterBest = () => dispatch => {
  const data = {
      "id": "69b6d7d3-5564-4771-9799-bbe822d213a8",
      "jsonrpc": "2.0",
      "method": "retrieve",
      "params": [
          {
              "quoteID": "0002848077",
              "postalCode": "78247",
              "productCode": null,
              "effectiveDate": null,
              "gatewayportalnewsubmission": true,
              "displayYourInfoStep": null,
              "account": null,
              "shouldUpdateEffectiveDate": null
          }]
  };

    api.post(
        host + context_root + quote_endpoint,
        data,
        {headers: headers})
        .then(res => {
            dispatch({type: REQUEST_GBB_SUCCESS, payload: res.data});
            dispatch({type: SET_SESSION_ID, payload: res.data.result.sessionUUID});
        })
        .catch(e => dispatch({type: REQUEST_GBB_FAILURE, error: e}));

    return dispatch({type: REQUEST_GBB_UPDATE});
};