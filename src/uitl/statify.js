import JSONPath from 'jsonpath-plus';

export const statify = (data, dispatch, nodeName, actionType) =>
    JSONPath(`$...${nodeName}`, data, payload =>
        dispatch({ type: actionType, payload: payload}));