
// const PROTOCOL = 'http://';
const PROTOCOL = 'https://';

// const PC_DOMAIN = 'localhost';
// const CC_DOMAIN = 'localhost';
// const CM_DOMAIN = 'localhost';

const PC_DOMAIN = 'dev6-pe.usaadev.guidewire.net';
const CC_DOMAIN = 'dev6-pe.usaadev.guidewire.net';
const CM_DOMAIN = 'dev6-pe.usaadev.guidewire.net';

// const PC_PORT = ':8180';
// const CC_PORT = ':8080';
// const CM_PORT = ':8280';

const PC_PORT = '';
const CC_PORT = '';
const CM_PORT = '';

const PC_CONTEXT_ROOT = '/pc/service/edge';
const CC_CONTEXT_ROOT = '/cc/service/edge';
const CM_CONTEXT_ROOT = '/ab/service/edge';

export const PC_EDGE_API_URL = PROTOCOL + PC_DOMAIN + PC_PORT + PC_CONTEXT_ROOT;
export const CC_EDGE_API_URL = PROTOCOL + CC_DOMAIN + CC_PORT + CC_CONTEXT_ROOT;
export const CM_EDGE_API_URL = PROTOCOL + CM_DOMAIN + CM_PORT + CM_CONTEXT_ROOT;

export const EN_US = 'en_US';
export const CONTENT_TYPE_APP_JSON = 'application/json';