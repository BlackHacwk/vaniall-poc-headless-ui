import * as JSONRPC from '../constants/jsonrpcConstants';
import {POLICY_METADATA_POST_FAILURE, POLICY_METADATA_POST_SUCCESS} from "./action-types";
import {api} from "../api";



export const postGetPolicyMetaData = (bearerToken) => dispatch => api.post(JSONRPC.PC_EDGE_API_URL + '/gateway/policy', {
        id: 'a7eb6534-772c-475a-b270-97752998eeec',
        jsonrpc: '2.0',
        method: 'getMetaData',
        params: []
    }, {
        headers: {
            'Accept-Language': JSONRPC.EN_US,
            'Content-Type': JSONRPC.CONTENT_TYPE_APP_JSON,
            Authorization: 'Bearer ' + bearerToken,
        }
    })
        .then(response => dispatch({type: POLICY_METADATA_POST_SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: POLICY_METADATA_POST_FAILURE, error: error}));

