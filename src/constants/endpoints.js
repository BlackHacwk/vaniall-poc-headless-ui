export const host = "https://dev-pe.usaadev.guidewire.net";
export const context_root = "/pc/service/edge";

export const account_endpoint = "/gateway/account";
export const metadata_endpoint = "/gateway/ProducerEngage/common/js/src/config/uimetadata/presentation-metadata.json";
export const policy_change_endpoint = "/gatewaypolicychange/policychange";
export const contact_endpoint = "/gateway/contact";
export const message_endpoint = "/gateway/activity";
export const quote_endpoint = "/gatewayquote/quote";
export const custom_quote_endpoint = "/gatewayquote/customquote";

export const gbb_data = {
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

export const message_data = (priority, description) => ({
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
});

export const contacts_data = policyNumber => ({
    "id": "a7eb6534-772c-475a-b270-97752998eeec",
    "jsonrpc": "2.0",
    "method": "getPolicyContactSummaries",
    "params": [policyNumber, [], 0, 5]
});