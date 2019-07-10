import {POLICY_METADATA_POST_SUCCESS} from "../actions/action-types";


export const metadataReducer = (state = {id: 0}, action) => {
    console.log(action);
    if (action.type === POLICY_METADATA_POST_SUCCESS) return action.payload;
    else return state;
};