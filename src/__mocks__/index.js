export const accountDTO = {
    "jsonrpc": "2.0",
    "id": "a7eb6534-772c-475a-b270-97752998eeec","method": "updateAccountDetails",
    "params": [
        {
            "publicID": "pc:5",
            "producerCodes": [
                {
                    "code": "100-002541",
                    "publicID": "pc:6",
                    "displayValue": "100-002541 Armstrong (Premier)",
                    "description": "Armstrong (Premier)"
                }
            ],
            "totalPremium": {
                "amount": 1338,
                "currency": "usd"
            },
            "accountHolder": {
                "publicID": "test_pp:8",
                "subtype": "Person",
                "emailAddress1": "0013@guidewire.com",
                "primaryAddress": {
                    "publicID": "pc:429",
                    "country": "US",
                    "city": "Hopkinsville",
                    "postalCode": "42240",
                    "county": "San Mateo",
                    "addressLine1": "1199 S Walnut St",
                    "addressLine2": "Floor 0001",
                    "addressLine3": "This is a change",
                    "addressType": "home",
                    "state": "KY",
                    "displayName": "1199 S Walnut St, Floor 0001, This is a change, Hopkinsville, KY 42240"
                },
                "dateOfBirth": {
                    "day": 1,
                    "year": 1979,
                    "month": 0
                },
                "firstName": "Wendell",
                "lastName": "Jackson",
                "licenseNumber": "123456789",
                "licenseState": "OH",
                "gender": "F",
                "accountHolder": true,
                "additionalAddresses": [],
                "cellNumber": "6503333333",
                "homeNumber": "2708862543",
                "primaryPhoneType": "home",
                "displayName": "Wendell Jackson"
            },
            "accountNumber": "C000456354",
            "numberOfOpenActivities": 0,
            "numberOfContacts": 11,
            "numberOfNotes": 5,
            "numberOfDocuments": 0,
            "numberOfWorkOrders": 2,
            "numberOfOpenQuotes": 0,
            "numberOfOpenPolicyCancellations": 0,
            "numberOfOpenPolicyChanges": 1,
            "numberOfOpenPolicyRenewals": 1,
            "numberOfOpenClaims": 1,
            "accountBillingSummary": {
                "collateralRequirement": {
                    "amount": 5000,
                    "currency": "usd"
                },
                "collateralHeld": {
                    "amount": 5000,
                    "currency": "usd"
                },
                "unbilled": {
                    "amount": 35999.38,
                    "currency": "usd"
                },
                "primaryPayer": {
                    "phoneNumber": "850-578-1682 x0007",
                    "address": "4040 Elmwood Ave, Floor 0000, Louisville, KY 40207, US",
                    "name": "Bill Kinman"
                },
                "isDelinquent": false,
                "outstandingCurrent": {
                    "amount": 11077.18,
                    "currency": "usd"
                },
                "outstandingPastDue": {
                    "amount": 1000.18,
                    "currency": "usd"
                },
                "outstandingTotal": {
                    "amount": 12077.18,
                    "currency": "usd"
                },
                "unappliedFunds": {
                    "amount": 0,
                    "currency": "usd"
                }
            },
            "statusDisplayName": "Active",
            "accountCreatedDate": "2019-07-02T01:20:58Z",
            "policySummaries": [
                {
                    "displayStatus": "In Force",
                    "effective": "2019-04-02T05:01:00Z",
                    "isCancelled": false,
                    "isIssued": true,
                    "delinquent": false,
                    "product": {
                        "publicID": "PersonalAuto",
                        "productCode": "PersonalAuto",
                        "productName": "Personal Auto"
                    },
                    "policyNumber": "1424066131",
                    "primaryInsuredName": "Wendell Jackson",
                    "producerCodeOfService": "100-002541",
                    "accountHolder": {
                        "publicID": "test_pp:8",
                        "subtype": "Person",
                        "emailAddress1": "0013@guidewire.com",
                        "primaryAddress": {
                            "publicID": "pc:429",
                            "country": "US",
                            "city": "Hopkinsville",
                            "postalCode": "42240",
                            "county": "San Mateo",
                            "addressLine1": "1199 S Walnut St",
                            "addressLine2": "Floor 0001",
                            "addressLine3": "This is a change",
                            "addressType": "home",
                            "state": "KY",
                            "displayName": "1199 S Walnut St, Floor 0001, This is a change, Hopkinsville, KY 42240"
                        },
                        "dateOfBirth": {
                            "day": 1,
                            "year": 1979,
                            "month": 0
                        },
                        "firstName": "Wendell",
                        "lastName": "Jackson",
                        "licenseNumber": "123456789",
                        "licenseState": "OH",
                        "gender": "F",
                        "accountHolder": true,
                        "additionalAddresses": [],
                        "cellNumber": "6503333333",
                        "homeNumber": "2708862543",
                        "primaryPhoneType": "home",
                        "displayName": "Wendell Jackson"
                    },
                    "accountNumber": "C000456354",
                    "accountHolderName": "Wendell Jackson",
                    "producerCodeOfRecord": "100-002541",
                    "expiration": "2019-10-02T05:01:00Z",
                    "policyLines": [
                        {
                            "lineOfBusinessCode": "PersonalAutoLine",
                            "lineOfBusinessName": "Personal Auto Line"
                        }
                    ],
                    "canUserView": true,
                    "createdByMe": false,
                    "premium": {
                        "amount": 1338,
                        "currency": "usd"
                    }
                }
            ],
            "canUserCreateSubmission": true,
            "canUserView": true
        }
    ]
};

export const selectPackageBody = (sessionId, quoteId, chosenQuoteId) => ({
    "id": "69b6d7d3-5564-4771-9799-bbe822d213a8",
    "jsonrpc": "2.0",
    "method": "bind",
    "params": [
        {
            "sessionUUID": sessionId,
            "quoteID": quoteId,
            "baseData": {
                "periodStatus": "Quoted",
                "accountHolder": {
                    "publicID": "pc:808",
                    "additionalAddresses": [],
                    "subtype": "Person",
                    "primaryAddress": {
                        "publicID": "pc:1012",
                        "country": "US",
                        "city": "San Antonio",
                        "postalCode": "78247",
                        "addressLine1": "123 Main Street",
                        "addressType": "home",
                        "state": "TX",
                        "displayName": "123 Main Street, San Antonio, TX 78247"
                    },
                    "dateOfBirth": {
                        "day": 1,
                        "year": 1970,
                        "month": 0
                    },
                    "firstName": "Bob",
                    "lastName": "Jones",
                    "licenseNumber": "123456",
                    "licenseState": "TX",
                    "gender": "M",
                    "contactName": "Bob Jones",
                    "accountHolder": true,
                    "displayName": "Bob Jones",
                    "tempId": 14
                },
                "termType": "HalfYear",
                "productName": "Personal Auto",
                "periodEndDate": {
                    "day": 16,
                    "year": 2020,
                    "month": 0
                },
                "productCode": "PersonalAuto",
                "periodStartDate": {
                    "day": 16,
                    "year": 2019,
                    "month": 6
                },
                "jobType": "Submission",
                "accountNumber": "1840055994",
                "policyAddress": {
                    "publicID": "pc:1012",
                    "country": "US",
                    "city": "San Antonio",
                    "postalCode": "78247",
                    "addressLine1": "123 Main Street",
                    "addressType": "home",
                    "state": "TX",
                    "displayName": "123 Main Street, San Antonio, TX 78247"
                }
            },
            "lobData": {
                "personalAuto": {
                    "preQualQuestionSets": [
                        {
                            "code": "PAPersonalAutoPreQual",
                            "answers": {
                                "PriorDeclinedPolicy": "false",
                                "PACurrentlyInsured": "yes",
                                "MovingViolations2": "false",
                                "DriverNameConviction": null,
                                "CurrentSuspense": "false",
                                "Suspense": "false"
                            }
                        }
                    ],
                    "offerings": [
                        {
                            "branchName": "CUSTOM",
                            "branchCode": "CUSTOM",
                            "coverages": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 21,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMPDLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "wKgURYAl15EAAAAA",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_314",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    },
                                                    {
                                                        "code": "opt_315",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "50,000"
                                                    }
                                                ],
                                                "patternCode": "PAUMPDLimit",
                                                "updated": false,
                                                "type": "OptionPAUMPDLimitType",
                                                "chosenTerm": "opt_314",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMPDCov",
                                                "chosenTermValue": "25,000",
                                                "name": "Uninsured Motorist - Property Damage Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 68,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMBI",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_208",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40"
                                                    },
                                                    {
                                                        "code": "pack_209",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "25/50"
                                                    },
                                                    {
                                                        "code": "pack_212",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500"
                                                    },
                                                    {
                                                        "code": "pack_202",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_203",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    }
                                                ],
                                                "patternCode": "PAUMBI",
                                                "updated": false,
                                                "type": "PackagePAUMBIType",
                                                "chosenTerm": "pack_209",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMBICov",
                                                "chosenTermValue": "25/50",
                                                "name": "Uninsured Motorist - BI Limits"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 0,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_309",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "5,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 1078,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_185",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "250/500/100",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:471",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement"
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor"
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 154,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACollDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_319",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_320",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_321",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACollDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACollDeductibleType",
                                                        "chosenTerm": "opt_320",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PACollisionCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Collision Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision"
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 95,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACompDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_329",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_330",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_331",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACompDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACompDeductibleType",
                                                        "chosenTerm": "opt_330",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PAComprehensiveCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Comprehensive Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "branchName": "Standard Program",
                            "branchCode": "StandardProgram",
                            "coverages": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 68,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMBI",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_208",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "20/40"
                                                    },
                                                    {
                                                        "code": "pack_209",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "25/50"
                                                    },
                                                    {
                                                        "code": "pack_202",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    }
                                                ],
                                                "patternCode": "PAUMBI",
                                                "updated": false,
                                                "type": "PackagePAUMBIType",
                                                "chosenTerm": "pack_202",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMBICov",
                                                "chosenTermValue": "100K CSL",
                                                "name": "Uninsured Motorist - BI Limits"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 0,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_309",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "5,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 795,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_184",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "100/200/50",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas",
                                        "branch": "StandardProgram"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:473",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 33,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PARental",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "pack_213",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "30 days x 15/day"
                                                            },
                                                            {
                                                                "code": "pack_214",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "30 days x 25/day"
                                                            },
                                                            {
                                                                "code": "pack_215",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "60 days x 20/day"
                                                            }
                                                        ],
                                                        "patternCode": "PARental",
                                                        "updated": false,
                                                        "type": "PackagePARentalType",
                                                        "chosenTerm": "pack_213",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PARentalCov",
                                                        "chosenTermValue": "30 days x 15/day",
                                                        "name": "Rental Package"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 25,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "TowingAndLaborLimit",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "wKgUOm1kelsAAAAA",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "25"
                                                            },
                                                            {
                                                                "code": "wKgUOlDqxZ4AAAAA",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "50"
                                                            },
                                                            {
                                                                "code": "wKgUOjze56oAAAAA",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "75"
                                                            },
                                                            {
                                                                "code": "wKgUOvP5tV8AAAAA",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            }
                                                        ],
                                                        "patternCode": "TowingAndLaborLimit",
                                                        "updated": false,
                                                        "type": "OptionTowingAndLaborLimitType",
                                                        "chosenTerm": "wKgUOlDqxZ4AAAAA",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PATowingLaborCov",
                                                        "chosenTermValue": "50",
                                                        "name": "Towing and Labor Limit"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 154,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACollDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "opt_319",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_320",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_321",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACollDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACollDeductibleType",
                                                        "chosenTerm": "opt_320",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PACollisionCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Collision Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 95,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACompDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "opt_329",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_330",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_331",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACompDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACompDeductibleType",
                                                        "chosenTerm": "opt_330",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PAComprehensiveCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Comprehensive Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            }
                                        ],
                                        "displayCoverages": [
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Rental Reimbursement",
                                                    "description": "Rental Reimbursement",
                                                    "amount": {
                                                        "amount": 33,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PARentalCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "pack_213",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 15/day"
                                                                },
                                                                {
                                                                    "code": "pack_214",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 25/day"
                                                                },
                                                                {
                                                                    "code": "pack_215",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "60 days x 20/day"
                                                                }
                                                            ],
                                                            "publicID": "PARental",
                                                            "name": "Rental Package",
                                                            "coveragePublicID": "PARentalCov",
                                                            "type": "PackagePARentalType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Towing and Labor",
                                                    "description": "Towing and Labor",
                                                    "amount": {
                                                        "amount": 25,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PATowingLaborCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "wKgUOm1kelsAAAAA",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "25"
                                                                },
                                                                {
                                                                    "code": "wKgUOlDqxZ4AAAAA",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "50"
                                                                },
                                                                {
                                                                    "code": "wKgUOjze56oAAAAA",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "75"
                                                                },
                                                                {
                                                                    "code": "wKgUOvP5tV8AAAAA",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                }
                                                            ],
                                                            "publicID": "TowingAndLaborLimit",
                                                            "name": "Towing and Labor Limit",
                                                            "coveragePublicID": "PATowingLaborCov",
                                                            "type": "OptionTowingAndLaborLimitType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Collision",
                                                    "description": "Collision",
                                                    "amount": {
                                                        "amount": 154,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PACollisionCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "opt_319",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_320",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_321",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACollDeductible",
                                                            "name": "Collision Deductible",
                                                            "coveragePublicID": "PACollisionCov",
                                                            "type": "OptionPACollDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Comprehensive",
                                                    "description": "Comprehensive",
                                                    "amount": {
                                                        "amount": 95,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PAComprehensiveCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "opt_329",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_330",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_331",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACompDeductible",
                                                            "name": "Comprehensive Deductible",
                                                            "coveragePublicID": "PAComprehensiveCov",
                                                            "type": "OptionPACompDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "branchName": "Premium Program",
                            "branchCode": "PAPremium",
                            "coverages": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 257,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMBI",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_208",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40"
                                                    },
                                                    {
                                                        "code": "pack_209",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "25/50"
                                                    },
                                                    {
                                                        "code": "pack_212",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500"
                                                    },
                                                    {
                                                        "code": "pack_202",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_203",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    }
                                                ],
                                                "patternCode": "PAUMBI",
                                                "updated": false,
                                                "type": "PackagePAUMBIType",
                                                "chosenTerm": "pack_212",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMBICov",
                                                "chosenTermValue": "250/500",
                                                "name": "Uninsured Motorist - BI Limits"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 83,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_310",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "10,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 1078,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_185",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "250/500/100",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas",
                                        "branch": "PAPremium"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:474",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 33,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PARental",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "pack_213",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "30 days x 15/day"
                                                            },
                                                            {
                                                                "code": "pack_214",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "30 days x 25/day"
                                                            },
                                                            {
                                                                "code": "pack_215",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "60 days x 20/day"
                                                            }
                                                        ],
                                                        "patternCode": "PARental",
                                                        "updated": false,
                                                        "type": "PackagePARentalType",
                                                        "chosenTerm": "pack_215",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PARentalCov",
                                                        "chosenTermValue": "60 days x 20/day",
                                                        "name": "Rental Package"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 25,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "TowingAndLaborLimit",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "wKgUOm1kelsAAAAA",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "25"
                                                            },
                                                            {
                                                                "code": "wKgUOlDqxZ4AAAAA",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "50"
                                                            },
                                                            {
                                                                "code": "wKgUOjze56oAAAAA",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "75"
                                                            },
                                                            {
                                                                "code": "wKgUOvP5tV8AAAAA",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            }
                                                        ],
                                                        "patternCode": "TowingAndLaborLimit",
                                                        "updated": false,
                                                        "type": "OptionTowingAndLaborLimitType",
                                                        "chosenTerm": "wKgUOjze56oAAAAA",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PATowingLaborCov",
                                                        "chosenTermValue": "75",
                                                        "name": "Towing and Labor Limit"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 231,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACollDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_319",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_320",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_321",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACollDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACollDeductibleType",
                                                        "chosenTerm": "opt_319",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PACollisionCov",
                                                        "chosenTermValue": "250",
                                                        "name": "Collision Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 142,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACompDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_329",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_330",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_331",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACompDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACompDeductibleType",
                                                        "chosenTerm": "opt_329",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PAComprehensiveCov",
                                                        "chosenTermValue": "250",
                                                        "name": "Comprehensive Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            }
                                        ],
                                        "displayCoverages": [
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Rental Reimbursement",
                                                    "description": "Rental Reimbursement",
                                                    "amount": {
                                                        "amount": 33,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PARentalCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "pack_213",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 15/day"
                                                                },
                                                                {
                                                                    "code": "pack_214",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 25/day"
                                                                },
                                                                {
                                                                    "code": "pack_215",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "60 days x 20/day"
                                                                }
                                                            ],
                                                            "publicID": "PARental",
                                                            "name": "Rental Package",
                                                            "coveragePublicID": "PARentalCov",
                                                            "type": "PackagePARentalType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Towing and Labor",
                                                    "description": "Towing and Labor",
                                                    "amount": {
                                                        "amount": 25,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PATowingLaborCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "wKgUOm1kelsAAAAA",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "25"
                                                                },
                                                                {
                                                                    "code": "wKgUOlDqxZ4AAAAA",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "50"
                                                                },
                                                                {
                                                                    "code": "wKgUOjze56oAAAAA",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "75"
                                                                },
                                                                {
                                                                    "code": "wKgUOvP5tV8AAAAA",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                }
                                                            ],
                                                            "publicID": "TowingAndLaborLimit",
                                                            "name": "Towing and Labor Limit",
                                                            "coveragePublicID": "PATowingLaborCov",
                                                            "type": "OptionTowingAndLaborLimitType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Collision",
                                                    "description": "Collision",
                                                    "amount": {
                                                        "amount": 231,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PACollisionCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                },
                                                                {
                                                                    "code": "opt_319",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_320",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_321",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACollDeductible",
                                                            "name": "Collision Deductible",
                                                            "coveragePublicID": "PACollisionCov",
                                                            "type": "OptionPACollDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Comprehensive",
                                                    "description": "Comprehensive",
                                                    "amount": {
                                                        "amount": 142,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PAComprehensiveCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                },
                                                                {
                                                                    "code": "opt_329",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_330",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_331",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACompDeductible",
                                                            "name": "Comprehensive Deductible",
                                                            "coveragePublicID": "PAComprehensiveCov",
                                                            "type": "OptionPACompDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "branchName": "Basic Program",
                            "branchCode": "PABasic",
                            "coverages": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 21,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMPDLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "wKgURYAl15EAAAAA",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    }
                                                ],
                                                "patternCode": "PAUMPDLimit",
                                                "updated": false,
                                                "type": "OptionPAUMPDLimitType",
                                                "chosenTerm": "wKgURYAl15EAAAAA",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMPDCov",
                                                "chosenTermValue": "15,000",
                                                "name": "Uninsured Motorist - Property Damage Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 68,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMBI",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_208",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "20/40"
                                                    }
                                                ],
                                                "patternCode": "PAUMBI",
                                                "updated": false,
                                                "type": "PackagePAUMBIType",
                                                "chosenTerm": "pack_208",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMBICov",
                                                "chosenTermValue": "20/40",
                                                "name": "Uninsured Motorist - BI Limits"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 0,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_309",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "5,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 264,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_174",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "20/40/15",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas",
                                        "branch": "PABasic"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:472",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            }
                                        ],
                                        "displayCoverages": [
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Rental Reimbursement",
                                                    "description": "Rental Reimbursement",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PARentalCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Towing and Labor",
                                                    "description": "Towing and Labor",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PATowingLaborCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Collision",
                                                    "description": "Collision",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PACollisionCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Comprehensive",
                                                    "description": "Comprehensive",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PAComprehensiveCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ],
                    "coverables": {
                        "drivers": [
                            {
                                "accidents": "0",
                                "person": {
                                    "publicID": "pc:808",
                                    "additionalAddresses": [],
                                    "subtype": "Person",
                                    "primaryAddress": {
                                        "publicID": "pc:1012",
                                        "country": "US",
                                        "city": "San Antonio",
                                        "postalCode": "78247",
                                        "addressLine1": "123 Main Street",
                                        "addressType": "home",
                                        "state": "TX",
                                        "displayName": "123 Main Street, San Antonio, TX 78247"
                                    },
                                    "dateOfBirth": {
                                        "day": 1,
                                        "year": 1970,
                                        "month": 0
                                    },
                                    "firstName": "Bob",
                                    "lastName": "Jones",
                                    "licenseNumber": "123456",
                                    "licenseState": "TX",
                                    "gender": "M",
                                    "contactName": "Bob Jones",
                                    "accountHolder": true,
                                    "displayName": "Bob Jones",
                                    "tempId": 14
                                },
                                "publicID": "pc:978",
                                "yearLicensed": 2001,
                                "dateOfBirth": {
                                    "day": 1,
                                    "year": 1970,
                                    "month": 0
                                },
                                "licenseNumber": "123456",
                                "licenseState": "TX",
                                "gender": "M",
                                "violations": "0",
                                "isPolicyHolder": true,
                                "$$hashKey": "object:5868"
                            }
                        ],
                        "vehicles": [
                            {
                                "publicID": "pc:471",
                                "model": "Cobalt",
                                "primaryUse": "commuting",
                                "licenseState": "TX",
                                "costNew": {
                                    "amount": 30000,
                                    "currency": "usd"
                                },
                                "make": "Chevrolet",
                                "vin": "1G1AF1F57A7192174",
                                "year": 2010,
                                "displayName": "Chevrolet Cobalt 2010",
                                "$$hashKey": "object:5863"
                            }
                        ]
                    },
                    "lineCoverageArray": {
                        "PAUMPDCov": [
                            {
                                "publicID": "PAUMPDCov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 21,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAUMPDLimit",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "wKgURYAl15EAAAAA",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "15,000"
                                            }
                                        ],
                                        "patternCode": "PAUMPDLimit",
                                        "updated": false,
                                        "type": "OptionPAUMPDLimitType",
                                        "chosenTerm": "wKgURYAl15EAAAAA",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAUMPDCov",
                                        "chosenTermValue": "15,000",
                                        "name": "Uninsured Motorist - Property Damage Limit"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Uninsured Motorist - Property Damage",
                                "name": "Uninsured Motorist - Property Damage",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PAUMPDCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Uninsured Motorist - Property Damage",
                                "name": "Uninsured Motorist - Property Damage",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PAUMPDCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Uninsured Motorist - Property Damage",
                                "name": "Uninsured Motorist - Property Damage",
                                "branch": "StandardProgram"
                            }
                        ],
                        "PAUMBICov": [
                            {
                                "publicID": "PAUMBICov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 68,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAUMBI",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pack_208",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "20/40"
                                            }
                                        ],
                                        "patternCode": "PAUMBI",
                                        "updated": false,
                                        "type": "PackagePAUMBIType",
                                        "chosenTerm": "pack_208",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAUMBICov",
                                        "chosenTermValue": "20/40",
                                        "name": "Uninsured Motorist - BI Limits"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Uninsured Motorist - Bodily Injury",
                                "name": "Uninsured Motorist - Bodily Injury",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PAUMBICov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 257,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAUMBI",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pack_208",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "20/40"
                                            },
                                            {
                                                "code": "pack_209",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "25/50"
                                            },
                                            {
                                                "code": "pack_212",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "250/500"
                                            },
                                            {
                                                "code": "pack_202",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "100K CSL"
                                            },
                                            {
                                                "code": "pack_203",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "250K CSL"
                                            }
                                        ],
                                        "patternCode": "PAUMBI",
                                        "updated": false,
                                        "type": "PackagePAUMBIType",
                                        "chosenTerm": "pack_212",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAUMBICov",
                                        "chosenTermValue": "250/500",
                                        "name": "Uninsured Motorist - BI Limits"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Uninsured Motorist - Bodily Injury",
                                "name": "Uninsured Motorist - Bodily Injury",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PAUMBICov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 68,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAUMBI",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pack_208",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "20/40"
                                            },
                                            {
                                                "code": "pack_209",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "25/50"
                                            },
                                            {
                                                "code": "pack_202",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "100K CSL"
                                            }
                                        ],
                                        "patternCode": "PAUMBI",
                                        "updated": false,
                                        "type": "PackagePAUMBIType",
                                        "chosenTerm": "pack_202",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAUMBICov",
                                        "chosenTermValue": "100K CSL",
                                        "name": "Uninsured Motorist - BI Limits"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Uninsured Motorist - Bodily Injury",
                                "name": "Uninsured Motorist - Bodily Injury",
                                "branch": "StandardProgram"
                            }
                        ],
                        "PAMedPayCov": [
                            {
                                "publicID": "PAMedPayCov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 0,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAMedLimit",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "opt_309",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "5,000"
                                            },
                                            {
                                                "code": "opt_310",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "10,000"
                                            },
                                            {
                                                "code": "opt_311",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "15,000"
                                            },
                                            {
                                                "code": "opt_312",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "20,000"
                                            },
                                            {
                                                "code": "opt_313",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "25,000"
                                            }
                                        ],
                                        "patternCode": "PAMedLimit",
                                        "updated": false,
                                        "type": "OptionPAMedLimitType",
                                        "chosenTerm": "opt_309",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAMedPayCov",
                                        "chosenTermValue": "5,000",
                                        "name": "Medical Limit"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Medical Payments",
                                "name": "Medical Payments",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PAMedPayCov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 83,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAMedLimit",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "opt_309",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "5,000"
                                            },
                                            {
                                                "code": "opt_310",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "10,000"
                                            },
                                            {
                                                "code": "opt_311",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "15,000"
                                            },
                                            {
                                                "code": "opt_312",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "20,000"
                                            },
                                            {
                                                "code": "opt_313",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "25,000"
                                            }
                                        ],
                                        "patternCode": "PAMedLimit",
                                        "updated": false,
                                        "type": "OptionPAMedLimitType",
                                        "chosenTerm": "opt_310",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAMedPayCov",
                                        "chosenTermValue": "10,000",
                                        "name": "Medical Limit"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Medical Payments",
                                "name": "Medical Payments",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PAMedPayCov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 0,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAMedLimit",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "opt_309",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "5,000"
                                            },
                                            {
                                                "code": "opt_310",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "10,000"
                                            },
                                            {
                                                "code": "opt_311",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "15,000"
                                            },
                                            {
                                                "code": "opt_312",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "20,000"
                                            },
                                            {
                                                "code": "opt_313",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "25,000"
                                            }
                                        ],
                                        "patternCode": "PAMedLimit",
                                        "updated": false,
                                        "type": "OptionPAMedLimitType",
                                        "chosenTerm": "opt_309",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAMedPayCov",
                                        "chosenTermValue": "5,000",
                                        "name": "Medical Limit"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Medical Payments",
                                "name": "Medical Payments",
                                "branch": "StandardProgram"
                            }
                        ],
                        "PALiabilityCov": [
                            {
                                "publicID": "PALiabilityCov",
                                "required": true,
                                "selected": true,
                                "amount": {
                                    "amount": 264,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PALiability",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pack_174",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "20/40/15"
                                            },
                                            {
                                                "code": "pack_179",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "25/50/25"
                                            },
                                            {
                                                "code": "pack_182",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "50/100/50"
                                            },
                                            {
                                                "code": "pack_184",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "100/200/50"
                                            },
                                            {
                                                "code": "pack_185",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "250/500/100"
                                            },
                                            {
                                                "code": "pack_188",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "100K CSL"
                                            },
                                            {
                                                "code": "pack_189",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "250K CSL"
                                            },
                                            {
                                                "code": "pack_190",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "500K CSL"
                                            },
                                            {
                                                "code": "pack_191",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "1M CSL"
                                            }
                                        ],
                                        "patternCode": "PALiability",
                                        "updated": false,
                                        "type": "PackagePALiabilityType",
                                        "chosenTerm": "pack_174",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PALiabilityCov",
                                        "chosenTermValue": "20/40/15",
                                        "name": "Auto Liability Package"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Liability - Bodily Injury and Property Damage",
                                "name": "Liability - Bodily Injury and Property Damage",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PALiabilityCov",
                                "required": true,
                                "selected": true,
                                "amount": {
                                    "amount": 1078,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PALiability",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pack_174",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "20/40/15"
                                            },
                                            {
                                                "code": "pack_179",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "25/50/25"
                                            },
                                            {
                                                "code": "pack_182",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "50/100/50"
                                            },
                                            {
                                                "code": "pack_184",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "100/200/50"
                                            },
                                            {
                                                "code": "pack_185",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "250/500/100"
                                            },
                                            {
                                                "code": "pack_188",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "100K CSL"
                                            },
                                            {
                                                "code": "pack_189",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "250K CSL"
                                            },
                                            {
                                                "code": "pack_190",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "500K CSL"
                                            },
                                            {
                                                "code": "pack_191",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "1M CSL"
                                            }
                                        ],
                                        "patternCode": "PALiability",
                                        "updated": false,
                                        "type": "PackagePALiabilityType",
                                        "chosenTerm": "pack_185",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PALiabilityCov",
                                        "chosenTermValue": "250/500/100",
                                        "name": "Auto Liability Package"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Liability - Bodily Injury and Property Damage",
                                "name": "Liability - Bodily Injury and Property Damage",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PALiabilityCov",
                                "required": true,
                                "selected": true,
                                "amount": {
                                    "amount": 795,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PALiability",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pack_174",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "20/40/15"
                                            },
                                            {
                                                "code": "pack_179",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "25/50/25"
                                            },
                                            {
                                                "code": "pack_182",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "50/100/50"
                                            },
                                            {
                                                "code": "pack_184",
                                                "optionValue": 2,
                                                "maxValue": 5,
                                                "name": "100/200/50"
                                            },
                                            {
                                                "code": "pack_185",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "250/500/100"
                                            },
                                            {
                                                "code": "pack_188",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "100K CSL"
                                            },
                                            {
                                                "code": "pack_189",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "250K CSL"
                                            },
                                            {
                                                "code": "pack_190",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "500K CSL"
                                            },
                                            {
                                                "code": "pack_191",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "1M CSL"
                                            }
                                        ],
                                        "patternCode": "PALiability",
                                        "updated": false,
                                        "type": "PackagePALiabilityType",
                                        "chosenTerm": "pack_184",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PALiabilityCov",
                                        "chosenTermValue": "100/200/50",
                                        "name": "Auto Liability Package"
                                    }
                                ],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Liability - Bodily Injury and Property Damage",
                                "name": "Liability - Bodily Injury and Property Damage",
                                "branch": "StandardProgram"
                            }
                        ],
                        "PAUIMPDCov": [
                            {
                                "publicID": "PAUIMPDCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Underinsured Motorist - Property Damage",
                                "name": "Underinsured Motorist - Property Damage",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PAUIMPDCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Underinsured Motorist - Property Damage",
                                "name": "Underinsured Motorist - Property Damage",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PAUIMPDCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": true,
                                "description": "Underinsured Motorist - Property Damage",
                                "name": "Underinsured Motorist - Property Damage",
                                "branch": "StandardProgram"
                            }
                        ],
                        "PALimitedMexicoCov": [
                            {
                                "publicID": "PALimitedMexicoCov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 15,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": false,
                                "description": "Mexico Coverage - Limited",
                                "name": "Mexico Coverage - Limited",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PALimitedMexicoCov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 15,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": false,
                                "description": "Mexico Coverage - Limited",
                                "name": "Mexico Coverage - Limited",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PALimitedMexicoCov",
                                "required": false,
                                "selected": true,
                                "amount": {
                                    "amount": 15,
                                    "currency": "usd"
                                },
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPLiabGrp",
                                "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                "hasTerms": false,
                                "description": "Mexico Coverage - Limited",
                                "name": "Mexico Coverage - Limited",
                                "branch": "StandardProgram"
                            }
                        ],
                        "PADeathDisabilityCov": [
                            {
                                "publicID": "PADeathDisabilityCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPip",
                                "coverageCategoryDisplayName": "Personal Injury",
                                "hasTerms": true,
                                "description": "Death & Disability Benefit",
                                "name": "Death & Disability Benefit",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PADeathDisabilityCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPip",
                                "coverageCategoryDisplayName": "Personal Injury",
                                "hasTerms": true,
                                "description": "Death & Disability Benefit",
                                "name": "Death & Disability Benefit",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PADeathDisabilityCov",
                                "required": false,
                                "selected": false,
                                "updated": false,
                                "isValid": true,
                                "terms": [],
                                "coverageCategoryCode": "PAPip",
                                "coverageCategoryDisplayName": "Personal Injury",
                                "hasTerms": true,
                                "description": "Death & Disability Benefit",
                                "name": "Death & Disability Benefit",
                                "branch": "StandardProgram"
                            }
                        ],
                        "PAPIP_TX": [
                            {
                                "publicID": "PAPIP_TX",
                                "required": false,
                                "selected": true,
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAPIPTX_LIMIT",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "$5,000"
                                            },
                                            {
                                                "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "$10,000"
                                            },
                                            {
                                                "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "$25,000"
                                            },
                                            {
                                                "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "$50,000"
                                            }
                                        ],
                                        "patternCode": "PAPIPTX_LIMIT",
                                        "updated": false,
                                        "type": "OptionPAPIPTX_LIMITType",
                                        "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAPIP_TX",
                                        "chosenTermValue": "$5,000",
                                        "name": "PIP Limit"
                                    }
                                ],
                                "coverageCategoryCode": "PAPip",
                                "coverageCategoryDisplayName": "Personal Injury",
                                "hasTerms": true,
                                "description": "PIP - Texas",
                                "name": "PIP - Texas",
                                "branch": "PABasic"
                            },
                            {
                                "publicID": "PAPIP_TX",
                                "required": false,
                                "selected": true,
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAPIPTX_LIMIT",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "$5,000"
                                            },
                                            {
                                                "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "$10,000"
                                            },
                                            {
                                                "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "$25,000"
                                            },
                                            {
                                                "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "$50,000"
                                            }
                                        ],
                                        "patternCode": "PAPIPTX_LIMIT",
                                        "updated": false,
                                        "type": "OptionPAPIPTX_LIMITType",
                                        "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAPIP_TX",
                                        "chosenTermValue": "$5,000",
                                        "name": "PIP Limit"
                                    }
                                ],
                                "coverageCategoryCode": "PAPip",
                                "coverageCategoryDisplayName": "Personal Injury",
                                "hasTerms": true,
                                "description": "PIP - Texas",
                                "name": "PIP - Texas",
                                "branch": "PAPremium"
                            },
                            {
                                "publicID": "PAPIP_TX",
                                "required": false,
                                "selected": true,
                                "updated": false,
                                "isValid": true,
                                "terms": [
                                    {
                                        "publicID": "PAPIPTX_LIMIT",
                                        "required": true,
                                        "options": [
                                            {
                                                "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "optionValue": 1,
                                                "maxValue": 5,
                                                "name": "$5,000"
                                            },
                                            {
                                                "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                "optionValue": 3,
                                                "maxValue": 5,
                                                "name": "$10,000"
                                            },
                                            {
                                                "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                "optionValue": 4,
                                                "maxValue": 5,
                                                "name": "$25,000"
                                            },
                                            {
                                                "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                "optionValue": 5,
                                                "maxValue": 5,
                                                "name": "$50,000"
                                            }
                                        ],
                                        "patternCode": "PAPIPTX_LIMIT",
                                        "updated": false,
                                        "type": "OptionPAPIPTX_LIMITType",
                                        "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                        "isAscendingBetter": true,
                                        "coveragePublicID": "PAPIP_TX",
                                        "chosenTermValue": "$5,000",
                                        "name": "PIP Limit"
                                    }
                                ],
                                "coverageCategoryCode": "PAPip",
                                "coverageCategoryDisplayName": "Personal Injury",
                                "hasTerms": true,
                                "description": "PIP - Texas",
                                "name": "PIP - Texas",
                                "branch": "StandardProgram"
                            }
                        ]
                    },
                    "additionalCoverageArray": {
                        "471": {
                            "PARentalCov": [
                                {
                                    "publicID": "PARentalCov",
                                    "required": false,
                                    "selected": false,
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Rental Reimbursement",
                                    "name": "Rental Reimbursement",
                                    "branch": "PABasic",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PARentalCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 33,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "PARental",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "pack_213",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "30 days x 15/day"
                                                },
                                                {
                                                    "code": "pack_214",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "30 days x 25/day"
                                                },
                                                {
                                                    "code": "pack_215",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "60 days x 20/day"
                                                }
                                            ],
                                            "patternCode": "PARental",
                                            "updated": false,
                                            "type": "PackagePARentalType",
                                            "chosenTerm": "pack_215",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PARentalCov",
                                            "chosenTermValue": "60 days x 20/day",
                                            "name": "Rental Package"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Rental Reimbursement",
                                    "name": "Rental Reimbursement",
                                    "branch": "PAPremium",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PARentalCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 33,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "PARental",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "pack_213",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "30 days x 15/day"
                                                },
                                                {
                                                    "code": "pack_214",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "30 days x 25/day"
                                                },
                                                {
                                                    "code": "pack_215",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "60 days x 20/day"
                                                }
                                            ],
                                            "patternCode": "PARental",
                                            "updated": false,
                                            "type": "PackagePARentalType",
                                            "chosenTerm": "pack_213",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PARentalCov",
                                            "chosenTermValue": "30 days x 15/day",
                                            "name": "Rental Package"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Rental Reimbursement",
                                    "name": "Rental Reimbursement",
                                    "branch": "StandardProgram",
                                    "vehicleFixedId": 471
                                }
                            ],
                            "PATowingLaborCov": [
                                {
                                    "publicID": "PATowingLaborCov",
                                    "required": false,
                                    "selected": false,
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Towing and Labor",
                                    "name": "Towing and Labor",
                                    "branch": "PABasic",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PATowingLaborCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 25,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "TowingAndLaborLimit",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "wKgUOm1kelsAAAAA",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "25"
                                                },
                                                {
                                                    "code": "wKgUOlDqxZ4AAAAA",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "50"
                                                },
                                                {
                                                    "code": "wKgUOjze56oAAAAA",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "75"
                                                },
                                                {
                                                    "code": "wKgUOvP5tV8AAAAA",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "100"
                                                }
                                            ],
                                            "patternCode": "TowingAndLaborLimit",
                                            "updated": false,
                                            "type": "OptionTowingAndLaborLimitType",
                                            "chosenTerm": "wKgUOjze56oAAAAA",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PATowingLaborCov",
                                            "chosenTermValue": "75",
                                            "name": "Towing and Labor Limit"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Towing and Labor",
                                    "name": "Towing and Labor",
                                    "branch": "PAPremium",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PATowingLaborCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 25,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "TowingAndLaborLimit",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "wKgUOm1kelsAAAAA",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "25"
                                                },
                                                {
                                                    "code": "wKgUOlDqxZ4AAAAA",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "50"
                                                },
                                                {
                                                    "code": "wKgUOjze56oAAAAA",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "75"
                                                },
                                                {
                                                    "code": "wKgUOvP5tV8AAAAA",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "100"
                                                }
                                            ],
                                            "patternCode": "TowingAndLaborLimit",
                                            "updated": false,
                                            "type": "OptionTowingAndLaborLimitType",
                                            "chosenTerm": "wKgUOlDqxZ4AAAAA",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PATowingLaborCov",
                                            "chosenTermValue": "50",
                                            "name": "Towing and Labor Limit"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Towing and Labor",
                                    "name": "Towing and Labor",
                                    "branch": "StandardProgram",
                                    "vehicleFixedId": 471
                                }
                            ],
                            "PACollisionCov": [
                                {
                                    "publicID": "PACollisionCov",
                                    "required": false,
                                    "selected": false,
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Collision",
                                    "name": "Collision",
                                    "branch": "PABasic",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PACollisionCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 231,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "PACollDeductible",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "No Deductible"
                                                },
                                                {
                                                    "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "100"
                                                },
                                                {
                                                    "code": "opt_319",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250"
                                                },
                                                {
                                                    "code": "opt_320",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500"
                                                },
                                                {
                                                    "code": "opt_321",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1,000"
                                                }
                                            ],
                                            "patternCode": "PACollDeductible",
                                            "updated": false,
                                            "type": "OptionPACollDeductibleType",
                                            "chosenTerm": "opt_319",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PACollisionCov",
                                            "chosenTermValue": "250",
                                            "name": "Collision Deductible"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Collision",
                                    "name": "Collision",
                                    "branch": "PAPremium",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PACollisionCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 154,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "PACollDeductible",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "No Deductible"
                                                },
                                                {
                                                    "code": "opt_319",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250"
                                                },
                                                {
                                                    "code": "opt_320",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500"
                                                },
                                                {
                                                    "code": "opt_321",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1,000"
                                                }
                                            ],
                                            "patternCode": "PACollDeductible",
                                            "updated": false,
                                            "type": "OptionPACollDeductibleType",
                                            "chosenTerm": "opt_320",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PACollisionCov",
                                            "chosenTermValue": "500",
                                            "name": "Collision Deductible"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Collision",
                                    "name": "Collision",
                                    "branch": "StandardProgram",
                                    "vehicleFixedId": 471
                                }
                            ],
                            "PAComprehensiveCov": [
                                {
                                    "publicID": "PAComprehensiveCov",
                                    "required": false,
                                    "selected": false,
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Comprehensive",
                                    "name": "Comprehensive",
                                    "branch": "PABasic",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PAComprehensiveCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 142,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "PACompDeductible",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "No Deductible"
                                                },
                                                {
                                                    "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "100"
                                                },
                                                {
                                                    "code": "opt_329",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250"
                                                },
                                                {
                                                    "code": "opt_330",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500"
                                                },
                                                {
                                                    "code": "opt_331",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1,000"
                                                }
                                            ],
                                            "patternCode": "PACompDeductible",
                                            "updated": false,
                                            "type": "OptionPACompDeductibleType",
                                            "chosenTerm": "opt_329",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAComprehensiveCov",
                                            "chosenTermValue": "250",
                                            "name": "Comprehensive Deductible"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Comprehensive",
                                    "name": "Comprehensive",
                                    "branch": "PAPremium",
                                    "vehicleFixedId": 471
                                },
                                {
                                    "publicID": "PAComprehensiveCov",
                                    "required": false,
                                    "selected": true,
                                    "amount": {
                                        "amount": 95,
                                        "currency": "usd"
                                    },
                                    "updated": false,
                                    "isValid": true,
                                    "terms": [
                                        {
                                            "publicID": "PACompDeductible",
                                            "required": true,
                                            "options": [
                                                {
                                                    "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "No Deductible"
                                                },
                                                {
                                                    "code": "opt_329",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250"
                                                },
                                                {
                                                    "code": "opt_330",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500"
                                                },
                                                {
                                                    "code": "opt_331",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1,000"
                                                }
                                            ],
                                            "patternCode": "PACompDeductible",
                                            "updated": false,
                                            "type": "OptionPACompDeductibleType",
                                            "chosenTerm": "opt_330",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAComprehensiveCov",
                                            "chosenTermValue": "500",
                                            "name": "Comprehensive Deductible"
                                        }
                                    ],
                                    "coverageCategoryCode": "PAPPhysDamGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                    "hasTerms": true,
                                    "description": "Comprehensive",
                                    "name": "Comprehensive",
                                    "branch": "StandardProgram",
                                    "vehicleFixedId": 471
                                }
                            ]
                        }
                    }
                }
            },
            "quoteData": {
                "offeredQuotes": [
                    {
                        "publicID": "pc:476",
                        "branchName": "Basic Program",
                        "branchCode": "PABasic",
                        "isCustom": true,
                        "premium": {
                            "taxes": {
                                "amount": 20,
                                "currency": "usd"
                            },
                            "total": {
                                "amount": 388,
                                "currency": "usd"
                            },
                            "termMonths": 6,
                            "totalBeforeTaxes": {
                                "amount": 368,
                                "currency": "usd"
                            },
                            "monthlyPremium": {
                                "amount": 64.67,
                                "currency": "usd"
                            }
                        },
                        "hasBlockingUWIssues": false,
                        "status": "Quoted",
                        "lobs": {
                            "personalAuto": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": true,
                                        "updated": true,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 0,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_309",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "5,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 264,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_174",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "20/40/15",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit",
                                        "branch": "PABasic"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas",
                                        "branch": "PABasic"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:472",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive",
                                                "branch": "PABasic",
                                                "vehicleFixedId": 471
                                            }
                                        ],
                                        "displayCoverages": [
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Rental Reimbursement",
                                                    "description": "Rental Reimbursement",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PARentalCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Towing and Labor",
                                                    "description": "Towing and Labor",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PATowingLaborCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Collision",
                                                    "description": "Collision",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PACollisionCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Comprehensive",
                                                    "description": "Comprehensive",
                                                    "required": false,
                                                    "offering": "PABasic",
                                                    "publicID": "PAComprehensiveCov",
                                                    "terms": [],
                                                    "hasTermPatterns": true
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "$$hashKey": "object:1870"
                    },
                    {
                        "publicID": "pc:477",
                        "branchName": "Standard Program",
                        "branchCode": "StandardProgram",
                        "isCustom": true,
                        "premium": {
                            "taxes": {
                                "amount": 65,
                                "currency": "usd"
                            },
                            "total": {
                                "amount": 1250,
                                "currency": "usd"
                            },
                            "termMonths": 6,
                            "totalBeforeTaxes": {
                                "amount": 1185,
                                "currency": "usd"
                            },
                            "monthlyPremium": {
                                "amount": 208.33,
                                "currency": "usd"
                            }
                        },
                        "hasBlockingUWIssues": false,
                        "status": "Quoted",
                        "lobs": {
                            "personalAuto": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 68,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMBI",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_208",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "20/40"
                                                    },
                                                    {
                                                        "code": "pack_209",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "25/50"
                                                    },
                                                    {
                                                        "code": "pack_202",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    }
                                                ],
                                                "patternCode": "PAUMBI",
                                                "updated": false,
                                                "type": "PackagePAUMBIType",
                                                "chosenTerm": "pack_202",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMBICov",
                                                "chosenTermValue": "100K CSL",
                                                "name": "Uninsured Motorist - BI Limits"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 0,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_309",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "5,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 795,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_184",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "100/200/50",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit",
                                        "branch": "StandardProgram"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas",
                                        "branch": "StandardProgram"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:473",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 33,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PARental",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "pack_213",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "30 days x 15/day"
                                                            },
                                                            {
                                                                "code": "pack_214",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "30 days x 25/day"
                                                            },
                                                            {
                                                                "code": "pack_215",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "60 days x 20/day"
                                                            }
                                                        ],
                                                        "patternCode": "PARental",
                                                        "updated": false,
                                                        "type": "PackagePARentalType",
                                                        "chosenTerm": "pack_213",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PARentalCov",
                                                        "chosenTermValue": "30 days x 15/day",
                                                        "name": "Rental Package"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 25,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "TowingAndLaborLimit",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "wKgUOm1kelsAAAAA",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "25"
                                                            },
                                                            {
                                                                "code": "wKgUOlDqxZ4AAAAA",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "50"
                                                            },
                                                            {
                                                                "code": "wKgUOjze56oAAAAA",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "75"
                                                            },
                                                            {
                                                                "code": "wKgUOvP5tV8AAAAA",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            }
                                                        ],
                                                        "patternCode": "TowingAndLaborLimit",
                                                        "updated": false,
                                                        "type": "OptionTowingAndLaborLimitType",
                                                        "chosenTerm": "wKgUOlDqxZ4AAAAA",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PATowingLaborCov",
                                                        "chosenTermValue": "50",
                                                        "name": "Towing and Labor Limit"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 154,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACollDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "opt_319",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_320",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_321",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACollDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACollDeductibleType",
                                                        "chosenTerm": "opt_320",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PACollisionCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Collision Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 95,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACompDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "opt_329",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_330",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_331",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACompDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACompDeductibleType",
                                                        "chosenTerm": "opt_330",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PAComprehensiveCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Comprehensive Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive",
                                                "branch": "StandardProgram",
                                                "vehicleFixedId": 471
                                            }
                                        ],
                                        "displayCoverages": [
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Rental Reimbursement",
                                                    "description": "Rental Reimbursement",
                                                    "amount": {
                                                        "amount": 33,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PARentalCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "pack_213",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 15/day"
                                                                },
                                                                {
                                                                    "code": "pack_214",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 25/day"
                                                                },
                                                                {
                                                                    "code": "pack_215",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "60 days x 20/day"
                                                                }
                                                            ],
                                                            "publicID": "PARental",
                                                            "name": "Rental Package",
                                                            "coveragePublicID": "PARentalCov",
                                                            "type": "PackagePARentalType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Towing and Labor",
                                                    "description": "Towing and Labor",
                                                    "amount": {
                                                        "amount": 25,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PATowingLaborCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "wKgUOm1kelsAAAAA",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "25"
                                                                },
                                                                {
                                                                    "code": "wKgUOlDqxZ4AAAAA",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "50"
                                                                },
                                                                {
                                                                    "code": "wKgUOjze56oAAAAA",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "75"
                                                                },
                                                                {
                                                                    "code": "wKgUOvP5tV8AAAAA",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                }
                                                            ],
                                                            "publicID": "TowingAndLaborLimit",
                                                            "name": "Towing and Labor Limit",
                                                            "coveragePublicID": "PATowingLaborCov",
                                                            "type": "OptionTowingAndLaborLimitType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Collision",
                                                    "description": "Collision",
                                                    "amount": {
                                                        "amount": 154,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PACollisionCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "opt_319",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_320",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_321",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACollDeductible",
                                                            "name": "Collision Deductible",
                                                            "coveragePublicID": "PACollisionCov",
                                                            "type": "OptionPACollDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Comprehensive",
                                                    "description": "Comprehensive",
                                                    "amount": {
                                                        "amount": 95,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "StandardProgram",
                                                    "publicID": "PAComprehensiveCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "opt_329",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_330",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_331",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACompDeductible",
                                                            "name": "Comprehensive Deductible",
                                                            "coveragePublicID": "PAComprehensiveCov",
                                                            "type": "OptionPACompDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "$$hashKey": "object:1872"
                    },
                    {
                        "publicID": "pc:478",
                        "branchName": "Premium Program",
                        "branchCode": "PAPremium",
                        "isCustom": true,
                        "premium": {
                            "taxes": {
                                "amount": 103,
                                "currency": "usd"
                            },
                            "total": {
                                "amount": 1967,
                                "currency": "usd"
                            },
                            "termMonths": 6,
                            "totalBeforeTaxes": {
                                "amount": 1864,
                                "currency": "usd"
                            },
                            "monthlyPremium": {
                                "amount": 327.83,
                                "currency": "usd"
                            }
                        },
                        "hasBlockingUWIssues": false,
                        "status": "Quoted",
                        "lobs": {
                            "personalAuto": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 257,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMBI",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_208",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40"
                                                    },
                                                    {
                                                        "code": "pack_209",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "25/50"
                                                    },
                                                    {
                                                        "code": "pack_212",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500"
                                                    },
                                                    {
                                                        "code": "pack_202",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_203",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    }
                                                ],
                                                "patternCode": "PAUMBI",
                                                "updated": false,
                                                "type": "PackagePAUMBIType",
                                                "chosenTerm": "pack_212",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMBICov",
                                                "chosenTermValue": "250/500",
                                                "name": "Uninsured Motorist - BI Limits"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 83,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_310",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "10,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 1078,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_185",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "250/500/100",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit",
                                        "branch": "PAPremium"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas",
                                        "branch": "PAPremium"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:474",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 33,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PARental",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "pack_213",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "30 days x 15/day"
                                                            },
                                                            {
                                                                "code": "pack_214",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "30 days x 25/day"
                                                            },
                                                            {
                                                                "code": "pack_215",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "60 days x 20/day"
                                                            }
                                                        ],
                                                        "patternCode": "PARental",
                                                        "updated": false,
                                                        "type": "PackagePARentalType",
                                                        "chosenTerm": "pack_215",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PARentalCov",
                                                        "chosenTermValue": "60 days x 20/day",
                                                        "name": "Rental Package"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 25,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "TowingAndLaborLimit",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "wKgUOm1kelsAAAAA",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "25"
                                                            },
                                                            {
                                                                "code": "wKgUOlDqxZ4AAAAA",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "50"
                                                            },
                                                            {
                                                                "code": "wKgUOjze56oAAAAA",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "75"
                                                            },
                                                            {
                                                                "code": "wKgUOvP5tV8AAAAA",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            }
                                                        ],
                                                        "patternCode": "TowingAndLaborLimit",
                                                        "updated": false,
                                                        "type": "OptionTowingAndLaborLimitType",
                                                        "chosenTerm": "wKgUOjze56oAAAAA",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PATowingLaborCov",
                                                        "chosenTermValue": "75",
                                                        "name": "Towing and Labor Limit"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 231,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACollDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_319",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_320",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_321",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACollDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACollDeductibleType",
                                                        "chosenTerm": "opt_319",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PACollisionCov",
                                                        "chosenTermValue": "250",
                                                        "name": "Collision Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 142,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACompDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_329",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_330",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_331",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACompDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACompDeductibleType",
                                                        "chosenTerm": "opt_329",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PAComprehensiveCov",
                                                        "chosenTermValue": "250",
                                                        "name": "Comprehensive Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive",
                                                "branch": "PAPremium",
                                                "vehicleFixedId": 471
                                            }
                                        ],
                                        "displayCoverages": [
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Rental Reimbursement",
                                                    "description": "Rental Reimbursement",
                                                    "amount": {
                                                        "amount": 33,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PARentalCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "pack_213",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 15/day"
                                                                },
                                                                {
                                                                    "code": "pack_214",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "30 days x 25/day"
                                                                },
                                                                {
                                                                    "code": "pack_215",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "60 days x 20/day"
                                                                }
                                                            ],
                                                            "publicID": "PARental",
                                                            "name": "Rental Package",
                                                            "coveragePublicID": "PARentalCov",
                                                            "type": "PackagePARentalType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Towing and Labor",
                                                    "description": "Towing and Labor",
                                                    "amount": {
                                                        "amount": 25,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PATowingLaborCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "wKgUOm1kelsAAAAA",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "25"
                                                                },
                                                                {
                                                                    "code": "wKgUOlDqxZ4AAAAA",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "50"
                                                                },
                                                                {
                                                                    "code": "wKgUOjze56oAAAAA",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "75"
                                                                },
                                                                {
                                                                    "code": "wKgUOvP5tV8AAAAA",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                }
                                                            ],
                                                            "publicID": "TowingAndLaborLimit",
                                                            "name": "Towing and Labor Limit",
                                                            "coveragePublicID": "PATowingLaborCov",
                                                            "type": "OptionTowingAndLaborLimitType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Collision",
                                                    "description": "Collision",
                                                    "amount": {
                                                        "amount": 231,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PACollisionCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                },
                                                                {
                                                                    "code": "opt_319",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_320",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_321",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACollDeductible",
                                                            "name": "Collision Deductible",
                                                            "coveragePublicID": "PACollisionCov",
                                                            "type": "OptionPACollDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            },
                                            {
                                                "infoVisible": false,
                                                "coverage": {
                                                    "name": "Comprehensive",
                                                    "description": "Comprehensive",
                                                    "amount": {
                                                        "amount": 142,
                                                        "currency": "usd"
                                                    },
                                                    "required": false,
                                                    "offering": "PAPremium",
                                                    "publicID": "PAComprehensiveCov",
                                                    "terms": [
                                                        {
                                                            "hasOptions": true,
                                                            "options": [
                                                                {
                                                                    "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                    "optionValue": 1,
                                                                    "maxValue": 5,
                                                                    "name": "No Deductible"
                                                                },
                                                                {
                                                                    "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                                    "optionValue": 2,
                                                                    "maxValue": 5,
                                                                    "name": "100"
                                                                },
                                                                {
                                                                    "code": "opt_329",
                                                                    "optionValue": 3,
                                                                    "maxValue": 5,
                                                                    "name": "250"
                                                                },
                                                                {
                                                                    "code": "opt_330",
                                                                    "optionValue": 4,
                                                                    "maxValue": 5,
                                                                    "name": "500"
                                                                },
                                                                {
                                                                    "code": "opt_331",
                                                                    "optionValue": 5,
                                                                    "maxValue": 5,
                                                                    "name": "1,000"
                                                                }
                                                            ],
                                                            "publicID": "PACompDeductible",
                                                            "name": "Comprehensive Deductible",
                                                            "coveragePublicID": "PAComprehensiveCov",
                                                            "type": "OptionPACompDeductibleType",
                                                            "hasDependencies": false,
                                                            "aspects": {
                                                                "required": true,
                                                                "valid": true,
                                                                "validationMessages": [],
                                                                "validationRequiredness": false,
                                                                "validationMinMaxValue": false,
                                                                "validationMessageMinMaxValue": "The maximum allowed value is "
                                                            }
                                                        }
                                                    ],
                                                    "hasTermPatterns": true
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "$$hashKey": "object:1871"
                    },
                    {
                        "publicID": "pc:475",
                        "branchName": "CUSTOM",
                        "branchCode": "CUSTOM",
                        "isCustom": true,
                        "premium": {
                            "taxes": {
                                "amount": 79,
                                "currency": "usd"
                            },
                            "total": {
                                "amount": 1510,
                                "currency": "usd"
                            },
                            "termMonths": 6,
                            "totalBeforeTaxes": {
                                "amount": 1431,
                                "currency": "usd"
                            },
                            "monthlyPremium": {
                                "amount": 251.67,
                                "currency": "usd"
                            }
                        },
                        "hasBlockingUWIssues": false,
                        "status": "Quoted",
                        "lobs": {
                            "personalAuto": {
                                "lineCoverages": [
                                    {
                                        "publicID": "PAUMPDCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 21,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMPDLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "wKgURYAl15EAAAAA",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_314",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    },
                                                    {
                                                        "code": "opt_315",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "50,000"
                                                    }
                                                ],
                                                "patternCode": "PAUMPDLimit",
                                                "updated": false,
                                                "type": "OptionPAUMPDLimitType",
                                                "chosenTerm": "opt_314",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMPDCov",
                                                "chosenTermValue": "25,000",
                                                "name": "Uninsured Motorist - Property Damage Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Property Damage",
                                        "name": "Uninsured Motorist - Property Damage"
                                    },
                                    {
                                        "publicID": "PAUMBICov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 68,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAUMBI",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_208",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40"
                                                    },
                                                    {
                                                        "code": "pack_209",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "25/50"
                                                    },
                                                    {
                                                        "code": "pack_212",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500"
                                                    },
                                                    {
                                                        "code": "pack_202",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_203",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    }
                                                ],
                                                "patternCode": "PAUMBI",
                                                "updated": false,
                                                "type": "PackagePAUMBIType",
                                                "chosenTerm": "pack_209",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAUMBICov",
                                                "chosenTermValue": "25/50",
                                                "name": "Uninsured Motorist - BI Limits"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Uninsured Motorist - Bodily Injury",
                                        "name": "Uninsured Motorist - Bodily Injury"
                                    },
                                    {
                                        "publicID": "PAMedPayCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 0,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAMedLimit",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "opt_309",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "5,000"
                                                    },
                                                    {
                                                        "code": "opt_310",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "10,000"
                                                    },
                                                    {
                                                        "code": "opt_311",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "15,000"
                                                    },
                                                    {
                                                        "code": "opt_312",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "20,000"
                                                    },
                                                    {
                                                        "code": "opt_313",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "25,000"
                                                    }
                                                ],
                                                "patternCode": "PAMedLimit",
                                                "updated": false,
                                                "type": "OptionPAMedLimitType",
                                                "chosenTerm": "opt_309",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAMedPayCov",
                                                "chosenTermValue": "5,000",
                                                "name": "Medical Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Medical Payments",
                                        "name": "Medical Payments"
                                    },
                                    {
                                        "publicID": "PALiabilityCov",
                                        "required": true,
                                        "selected": true,
                                        "amount": {
                                            "amount": 1078,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PALiability",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pack_174",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "20/40/15"
                                                    },
                                                    {
                                                        "code": "pack_179",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "25/50/25"
                                                    },
                                                    {
                                                        "code": "pack_182",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "50/100/50"
                                                    },
                                                    {
                                                        "code": "pack_184",
                                                        "optionValue": 2,
                                                        "maxValue": 5,
                                                        "name": "100/200/50"
                                                    },
                                                    {
                                                        "code": "pack_185",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "250/500/100"
                                                    },
                                                    {
                                                        "code": "pack_188",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "100K CSL"
                                                    },
                                                    {
                                                        "code": "pack_189",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "250K CSL"
                                                    },
                                                    {
                                                        "code": "pack_190",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "500K CSL"
                                                    },
                                                    {
                                                        "code": "pack_191",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "1M CSL"
                                                    }
                                                ],
                                                "patternCode": "PALiability",
                                                "updated": false,
                                                "type": "PackagePALiabilityType",
                                                "chosenTerm": "pack_185",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PALiabilityCov",
                                                "chosenTermValue": "250/500/100",
                                                "name": "Auto Liability Package"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Liability - Bodily Injury and Property Damage",
                                        "name": "Liability - Bodily Injury and Property Damage"
                                    },
                                    {
                                        "publicID": "PAUIMPDCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": true,
                                        "description": "Underinsured Motorist - Property Damage",
                                        "name": "Underinsured Motorist - Property Damage"
                                    },
                                    {
                                        "publicID": "PALimitedMexicoCov",
                                        "required": false,
                                        "selected": true,
                                        "amount": {
                                            "amount": 15,
                                            "currency": "usd"
                                        },
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPLiabGrp",
                                        "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                        "hasTerms": false,
                                        "description": "Mexico Coverage - Limited",
                                        "name": "Mexico Coverage - Limited"
                                    },
                                    {
                                        "publicID": "PADeathDisabilityCov",
                                        "required": false,
                                        "selected": false,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "Death & Disability Benefit",
                                        "name": "Death & Disability Benefit"
                                    },
                                    {
                                        "publicID": "PAPIP_TX",
                                        "required": false,
                                        "selected": true,
                                        "updated": false,
                                        "isValid": true,
                                        "terms": [
                                            {
                                                "publicID": "PAPIPTX_LIMIT",
                                                "required": true,
                                                "options": [
                                                    {
                                                        "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                        "optionValue": 1,
                                                        "maxValue": 5,
                                                        "name": "$5,000"
                                                    },
                                                    {
                                                        "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                        "optionValue": 3,
                                                        "maxValue": 5,
                                                        "name": "$10,000"
                                                    },
                                                    {
                                                        "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                        "optionValue": 4,
                                                        "maxValue": 5,
                                                        "name": "$25,000"
                                                    },
                                                    {
                                                        "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                        "optionValue": 5,
                                                        "maxValue": 5,
                                                        "name": "$50,000"
                                                    }
                                                ],
                                                "patternCode": "PAPIPTX_LIMIT",
                                                "updated": false,
                                                "type": "OptionPAPIPTX_LIMITType",
                                                "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                                "isAscendingBetter": true,
                                                "coveragePublicID": "PAPIP_TX",
                                                "chosenTermValue": "$5,000",
                                                "name": "PIP Limit"
                                            }
                                        ],
                                        "coverageCategoryCode": "PAPip",
                                        "coverageCategoryDisplayName": "Personal Injury",
                                        "hasTerms": true,
                                        "description": "PIP - Texas",
                                        "name": "PIP - Texas"
                                    }
                                ],
                                "vehicleCoverages": [
                                    {
                                        "fixedId": 471,
                                        "vehicleName": "2010 Chevrolet Cobalt ",
                                        "publicID": "pc:471",
                                        "coverages": [
                                            {
                                                "publicID": "PARentalCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Rental Reimbursement",
                                                "name": "Rental Reimbursement"
                                            },
                                            {
                                                "publicID": "PATowingLaborCov",
                                                "required": false,
                                                "selected": false,
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Towing and Labor",
                                                "name": "Towing and Labor"
                                            },
                                            {
                                                "publicID": "PACollisionCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 154,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACollDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_319",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_320",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_321",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACollDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACollDeductibleType",
                                                        "chosenTerm": "opt_320",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PACollisionCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Collision Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Collision",
                                                "name": "Collision"
                                            },
                                            {
                                                "publicID": "PAComprehensiveCov",
                                                "required": false,
                                                "selected": true,
                                                "amount": {
                                                    "amount": 95,
                                                    "currency": "usd"
                                                },
                                                "updated": false,
                                                "isValid": true,
                                                "terms": [
                                                    {
                                                        "publicID": "PACompDeductible",
                                                        "required": true,
                                                        "options": [
                                                            {
                                                                "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                                "optionValue": 1,
                                                                "maxValue": 5,
                                                                "name": "No Deductible"
                                                            },
                                                            {
                                                                "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                                "optionValue": 2,
                                                                "maxValue": 5,
                                                                "name": "100"
                                                            },
                                                            {
                                                                "code": "opt_329",
                                                                "optionValue": 3,
                                                                "maxValue": 5,
                                                                "name": "250"
                                                            },
                                                            {
                                                                "code": "opt_330",
                                                                "optionValue": 4,
                                                                "maxValue": 5,
                                                                "name": "500"
                                                            },
                                                            {
                                                                "code": "opt_331",
                                                                "optionValue": 5,
                                                                "maxValue": 5,
                                                                "name": "1,000"
                                                            }
                                                        ],
                                                        "patternCode": "PACompDeductible",
                                                        "updated": false,
                                                        "type": "OptionPACompDeductibleType",
                                                        "chosenTerm": "opt_330",
                                                        "isAscendingBetter": true,
                                                        "coveragePublicID": "PAComprehensiveCov",
                                                        "chosenTermValue": "500",
                                                        "name": "Comprehensive Deductible"
                                                    }
                                                ],
                                                "coverageCategoryCode": "PAPPhysDamGrp",
                                                "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                                "hasTerms": true,
                                                "description": "Comprehensive",
                                                "name": "Comprehensive"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "bindData": {
                "chosenQuote": chosenQuoteId,
                "accountNumber": "1840055994",
                "selectedPaymentPlan": "pctest:2",
                "contactPhone": "210-123-1234",
                "billingAddress": {
                    "publicID": "pc:1012",
                    "country": "US",
                    "city": "San Antonio",
                    "postalCode": "78247",
                    "addressLine1": "123 Main Street",
                    "addressType": "home",
                    "state": "TX",
                    "displayName": "123 Main Street, San Antonio, TX 78247"
                },
                "contactEmail": "mrfake@email.com",
                "paymentPlans": [
                    {
                        "billingId": "pctest:2",
                        "downPayment": {
                            "amount": 66.2,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 60.36,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 397.05,
                            "currency": "usd"
                        },
                        "name": "6 Payments Demo",
                        "$$hashKey": "object:5986"
                    },
                    {
                        "billingId": "pctest:3",
                        "downPayment": {
                            "amount": 147.2,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 110.4,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 392.42,
                            "currency": "usd"
                        },
                        "name": "3 Payments Demo",
                        "$$hashKey": "object:5987"
                    },
                    {
                        "billingId": "pctest:4",
                        "downPayment": {
                            "amount": 368,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 0,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 388,
                            "currency": "usd"
                        },
                        "name": "Full Pay",
                        "$$hashKey": "object:5988"
                    },
                    {
                        "billingId": "pctest:5",
                        "downPayment": {
                            "amount": 73.6,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 36.8,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 417.44,
                            "currency": "usd"
                        },
                        "name": "Twice Per Month Demo",
                        "$$hashKey": "object:5989"
                    },
                    {
                        "billingId": "pctest:6",
                        "downPayment": {
                            "amount": 110.39,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 85.87,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 393.16,
                            "currency": "usd"
                        },
                        "name": "Quarterly Demo",
                        "$$hashKey": "object:5990"
                    },
                    {
                        "billingId": "pctest:7",
                        "downPayment": {
                            "amount": 73.52,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 24.54,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 396.88,
                            "currency": "usd"
                        },
                        "name": "Monthly Demo",
                        "$$hashKey": "object:5991"
                    },
                    {
                        "billingId": "pctest:8",
                        "downPayment": {
                            "amount": 36.76,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 12.74,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 397.88,
                            "currency": "usd"
                        },
                        "name": "Every Other Week Demo",
                        "$$hashKey": "object:5992"
                    },
                    {
                        "billingId": "pctest:9",
                        "downPayment": {
                            "amount": 147.2,
                            "currency": "usd"
                        },
                        "installment": {
                            "amount": 110.4,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 388,
                            "currency": "usd"
                        },
                        "name": "6 Payments Demo Missing Bill Date Or Due Date Billing",
                        "$$hashKey": "object:5993"
                    }
                ],
                "paymentDetails": {
                    "paymentMethod": "wire",
                    "bankAccountData": {
                        "bankAccountType": "checking",
                        "bankAccountNumber": "32132131654",
                        "bankABANumber": "52316541",
                        "bankName": "bank"
                    },
                    "creditCardData": null
                }
            },
            "persons": [
                {
                    "publicID": "pc:808",
                    "additionalAddresses": [],
                    "subtype": "Person",
                    "primaryAddress": {
                        "publicID": "pc:1012",
                        "country": "US",
                        "city": "San Antonio",
                        "postalCode": "78247",
                        "addressLine1": "123 Main Street",
                        "addressType": "home",
                        "state": "TX",
                        "displayName": "123 Main Street, San Antonio, TX 78247"
                    },
                    "dateOfBirth": {
                        "day": 1,
                        "year": 1970,
                        "month": 0
                    },
                    "firstName": "Bob",
                    "lastName": "Jones",
                    "licenseNumber": "123456",
                    "licenseState": "TX",
                    "gender": "M",
                    "contactName": "Bob Jones",
                    "accountHolder": true,
                    "displayName": "Bob Jones",
                    "tempId": 14
                }
            ]
        }
    ]
});

export const updateAccountBody = {
    "jsonrpc": "2.0",
    "id": "a7eb6534-772c-475a-b270-97752998eeec","method": "updateAccountDetails",
    "params": [
        {
            "publicID": "pc:5",
            "producerCodes": [
                {
                    "code": "100-002541",
                    "publicID": "pc:6",
                    "displayValue": "100-002541 Armstrong (Premier)",
                    "description": "Armstrong (Premier)"
                }
            ],
            "totalPremium": {
                "amount": 1338,
                "currency": "usd"
            },
            "accountHolder": {
                "publicID": "test_pp:8",
                "subtype": "Person",
                "emailAddress1": "0013@guidewire.com",
                "primaryAddress": {
                    "publicID": "pc:429",
                    "country": "US",
                    "city": "Hopkinsville",
                    "postalCode": "42240",
                    "county": "San Mateo",
                    "addressLine1": "1199 S Walnut St",
                    "addressLine2": "Floor 0001",
                    "addressLine3": "This is a change",
                    "addressType": "home",
                    "state": "KY",
                    "displayName": "1199 S Walnut St, Floor 0001, This is a change, Hopkinsville, KY 42240"
                },
                "dateOfBirth": {
                    "day": 1,
                    "year": 1979,
                    "month": 0
                },
                "firstName": "Wendell",
                "lastName": "Jackson",
                "licenseNumber": "123456789",
                "licenseState": "OH",
                "gender": "F",
                "accountHolder": true,
                "additionalAddresses": [],
                "cellNumber": "6503333333",
                "homeNumber": "2708862543",
                "primaryPhoneType": "home",
                "displayName": "Wendell Jackson"
            },
            "accountNumber": "C000456354",
            "numberOfOpenActivities": 0,
            "numberOfContacts": 11,
            "numberOfNotes": 5,
            "numberOfDocuments": 0,
            "numberOfWorkOrders": 2,
            "numberOfOpenQuotes": 0,
            "numberOfOpenPolicyCancellations": 0,
            "numberOfOpenPolicyChanges": 1,
            "numberOfOpenPolicyRenewals": 1,
            "numberOfOpenClaims": 1,
            "accountBillingSummary": {
                "collateralRequirement": {
                    "amount": 5000,
                    "currency": "usd"
                },
                "collateralHeld": {
                    "amount": 5000,
                    "currency": "usd"
                },
                "unbilled": {
                    "amount": 35999.38,
                    "currency": "usd"
                },
                "primaryPayer": {
                    "phoneNumber": "850-578-1682 x0007",
                    "address": "4040 Elmwood Ave, Floor 0000, Louisville, KY 40207, US",
                    "name": "Bill Kinman"
                },
                "isDelinquent": false,
                "outstandingCurrent": {
                    "amount": 11077.18,
                    "currency": "usd"
                },
                "outstandingPastDue": {
                    "amount": 1000.18,
                    "currency": "usd"
                },
                "outstandingTotal": {
                    "amount": 12077.18,
                    "currency": "usd"
                },
                "unappliedFunds": {
                    "amount": 0,
                    "currency": "usd"
                }
            },
            "statusDisplayName": "Active",
            "accountCreatedDate": "2019-07-02T01:20:58Z",
            "policySummaries": [
                {
                    "displayStatus": "In Force",
                    "effective": "2019-04-02T05:01:00Z",
                    "isCancelled": false,
                    "isIssued": true,
                    "delinquent": false,
                    "product": {
                        "publicID": "PersonalAuto",
                        "productCode": "PersonalAuto",
                        "productName": "Personal Auto"
                    },
                    "policyNumber": "1424066131",
                    "primaryInsuredName": "Wendell Jackson",
                    "producerCodeOfService": "100-002541",
                    "accountHolder": {
                        "publicID": "test_pp:8",
                        "subtype": "Person",
                        "emailAddress1": "0013@guidewire.com",
                        "primaryAddress": {
                            "publicID": "pc:429",
                            "country": "US",
                            "city": "Hopkinsville",
                            "postalCode": "42240",
                            "county": "San Mateo",
                            "addressLine1": "1199 S Walnut St",
                            "addressLine2": "Floor 0001",
                            "addressLine3": "This is a change",
                            "addressType": "home",
                            "state": "KY",
                            "displayName": "1199 S Walnut St, Floor 0001, This is a change, Hopkinsville, KY 42240"
                        },
                        "dateOfBirth": {
                            "day": 1,
                            "year": 1979,
                            "month": 0
                        },
                        "firstName": "Wendell",
                        "lastName": "Jackson",
                        "licenseNumber": "123456789",
                        "licenseState": "OH",
                        "gender": "F",
                        "accountHolder": true,
                        "additionalAddresses": [],
                        "cellNumber": "6503333333",
                        "homeNumber": "2708862543",
                        "primaryPhoneType": "home",
                        "displayName": "Wendell Jackson"
                    },
                    "accountNumber": "C000456354",
                    "accountHolderName": "Wendell Jackson",
                    "producerCodeOfRecord": "100-002541",
                    "expiration": "2019-10-02T05:01:00Z",
                    "policyLines": [
                        {
                            "lineOfBusinessCode": "PersonalAutoLine",
                            "lineOfBusinessName": "Personal Auto Line"
                        }
                    ],
                    "canUserView": true,
                    "createdByMe": false,
                    "premium": {
                        "amount": 1338,
                        "currency": "usd"
                    }
                }
            ],
            "canUserCreateSubmission": true,
            "canUserView": true
        }
    ]
};

export const gbbRes = {
    "jsonrpc": "2.0",
    "id": "69b6d7d3-5564-4771-9799-bbe822d213a8",
    "result": {
        "lobData": {
            "personalAuto": {
                "offerings": [
                    {
                        "branchName": "CUSTOM",
                        "branchCode": "CUSTOM",
                        "coverages": {
                            "lineCoverages": [
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMPDCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 14,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAUMPDLimit",
                                            "options": [
                                                {
                                                    "code": "wKgURYAl15EAAAAA",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "15,000"
                                                },
                                                {
                                                    "code": "opt_314",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "25,000"
                                                },
                                                {
                                                    "code": "opt_315",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "50,000"
                                                }
                                            ],
                                            "patternCode": "PAUMPDLimit",
                                            "updated": false,
                                            "chosenTerm": "opt_314",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAUMPDCov",
                                            "chosenTermValue": "25,000",
                                            "type": "OptionPAUMPDLimitType",
                                            "name": "Uninsured Motorist - Property Damage Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Property Damage",
                                    "name": "Uninsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMBICov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 45,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAUMBI",
                                            "options": [
                                                {
                                                    "code": "pack_208",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "20/40"
                                                },
                                                {
                                                    "code": "pack_209",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "25/50"
                                                },
                                                {
                                                    "code": "pack_212",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250/500"
                                                },
                                                {
                                                    "code": "pack_202",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "100K CSL"
                                                },
                                                {
                                                    "code": "pack_203",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "250K CSL"
                                                }
                                            ],
                                            "patternCode": "PAUMBI",
                                            "updated": false,
                                            "chosenTerm": "pack_209",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAUMBICov",
                                            "chosenTermValue": "25/50",
                                            "type": "PackagePAUMBIType",
                                            "name": "Uninsured Motorist - BI Limits"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Bodily Injury",
                                    "name": "Uninsured Motorist - Bodily Injury"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAMedPayCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 0,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAMedLimit",
                                            "options": [
                                                {
                                                    "code": "opt_309",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "5,000"
                                                },
                                                {
                                                    "code": "opt_310",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "10,000"
                                                },
                                                {
                                                    "code": "opt_311",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "15,000"
                                                },
                                                {
                                                    "code": "opt_312",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "20,000"
                                                },
                                                {
                                                    "code": "opt_313",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "25,000"
                                                }
                                            ],
                                            "patternCode": "PAMedLimit",
                                            "updated": false,
                                            "chosenTerm": "opt_309",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAMedPayCov",
                                            "chosenTermValue": "5,000",
                                            "type": "OptionPAMedLimitType",
                                            "name": "Medical Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Medical Payments",
                                    "name": "Medical Payments"
                                },
                                {
                                    "isValid": true,
                                    "required": true,
                                    "publicID": "PALiabilityCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 719,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PALiability",
                                            "options": [
                                                {
                                                    "code": "pack_174",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "20/40/15"
                                                },
                                                {
                                                    "code": "pack_179",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "25/50/25"
                                                },
                                                {
                                                    "code": "pack_182",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "50/100/50"
                                                },
                                                {
                                                    "code": "pack_184",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "100/200/50"
                                                },
                                                {
                                                    "code": "pack_185",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250/500/100"
                                                },
                                                {
                                                    "code": "pack_188",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "100K CSL"
                                                },
                                                {
                                                    "code": "pack_189",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "250K CSL"
                                                },
                                                {
                                                    "code": "pack_190",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500K CSL"
                                                },
                                                {
                                                    "code": "pack_191",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1M CSL"
                                                }
                                            ],
                                            "patternCode": "PALiability",
                                            "updated": false,
                                            "chosenTerm": "pack_185",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PALiabilityCov",
                                            "chosenTermValue": "250/500/100",
                                            "type": "PackagePALiabilityType",
                                            "name": "Auto Liability Package"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Liability - Bodily Injury and Property Damage",
                                    "name": "Liability - Bodily Injury and Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUIMPDCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Underinsured Motorist - Property Damage",
                                    "name": "Underinsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PALimitedMexicoCov",
                                    "selected": true,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": false,
                                    "description": "Mexico Coverage - Limited",
                                    "name": "Mexico Coverage - Limited"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PADeathDisabilityCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "Death & Disability Benefit",
                                    "name": "Death & Disability Benefit"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAPIP_TX",
                                    "selected": true,
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAPIPTX_LIMIT",
                                            "options": [
                                                {
                                                    "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "$5,000"
                                                },
                                                {
                                                    "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "$10,000"
                                                },
                                                {
                                                    "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "$25,000"
                                                },
                                                {
                                                    "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "$50,000"
                                                }
                                            ],
                                            "patternCode": "PAPIPTX_LIMIT",
                                            "updated": false,
                                            "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAPIP_TX",
                                            "chosenTermValue": "$5,000",
                                            "type": "OptionPAPIPTX_LIMITType",
                                            "name": "PIP Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "PIP - Texas",
                                    "name": "PIP - Texas"
                                }
                            ],
                            "vehicleCoverages": [
                                {
                                    "publicID": "pc:210",
                                    "fixedId": 210,
                                    "coverages": [
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PARentalCov",
                                            "selected": false,
                                            "terms": [],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Rental Reimbursement",
                                            "name": "Rental Reimbursement"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PATowingLaborCov",
                                            "selected": false,
                                            "terms": [],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Towing and Labor",
                                            "name": "Towing and Labor"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PACollisionCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 28,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PACollDeductible",
                                                    "options": [
                                                        {
                                                            "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "No Deductible"
                                                        },
                                                        {
                                                            "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                            "optionValue": 2,
                                                            "maxValue": 5,
                                                            "name": "100"
                                                        },
                                                        {
                                                            "code": "opt_319",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "250"
                                                        },
                                                        {
                                                            "code": "opt_320",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "500"
                                                        },
                                                        {
                                                            "code": "opt_321",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "1,000"
                                                        }
                                                    ],
                                                    "patternCode": "PACollDeductible",
                                                    "updated": false,
                                                    "chosenTerm": "opt_320",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PACollisionCov",
                                                    "chosenTermValue": "500",
                                                    "type": "OptionPACollDeductibleType",
                                                    "name": "Collision Deductible"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Collision",
                                            "name": "Collision"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PAComprehensiveCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 17,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PACompDeductible",
                                                    "options": [
                                                        {
                                                            "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "No Deductible"
                                                        },
                                                        {
                                                            "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                            "optionValue": 2,
                                                            "maxValue": 5,
                                                            "name": "100"
                                                        },
                                                        {
                                                            "code": "opt_329",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "250"
                                                        },
                                                        {
                                                            "code": "opt_330",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "500"
                                                        },
                                                        {
                                                            "code": "opt_331",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "1,000"
                                                        }
                                                    ],
                                                    "patternCode": "PACompDeductible",
                                                    "updated": false,
                                                    "chosenTerm": "opt_330",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PAComprehensiveCov",
                                                    "chosenTermValue": "500",
                                                    "type": "OptionPACompDeductibleType",
                                                    "name": "Comprehensive Deductible"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Comprehensive",
                                            "name": "Comprehensive"
                                        }
                                    ],
                                    "vehicleName": "2007 Honda CRV "
                                }
                            ]
                        }
                    },
                    {
                        "branchName": "Standard Program",
                        "branchCode": "StandardProgram",
                        "coverages": {
                            "lineCoverages": [
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMPDCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Property Damage",
                                    "name": "Uninsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMBICov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 45,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAUMBI",
                                            "options": [
                                                {
                                                    "code": "pack_208",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "20/40"
                                                },
                                                {
                                                    "code": "pack_209",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "25/50"
                                                },
                                                {
                                                    "code": "pack_202",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "100K CSL"
                                                }
                                            ],
                                            "patternCode": "PAUMBI",
                                            "updated": false,
                                            "chosenTerm": "pack_202",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAUMBICov",
                                            "chosenTermValue": "100K CSL",
                                            "type": "PackagePAUMBIType",
                                            "name": "Uninsured Motorist - BI Limits"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Bodily Injury",
                                    "name": "Uninsured Motorist - Bodily Injury"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAMedPayCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 0,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAMedLimit",
                                            "options": [
                                                {
                                                    "code": "opt_309",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "5,000"
                                                },
                                                {
                                                    "code": "opt_310",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "10,000"
                                                },
                                                {
                                                    "code": "opt_311",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "15,000"
                                                },
                                                {
                                                    "code": "opt_312",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "20,000"
                                                },
                                                {
                                                    "code": "opt_313",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "25,000"
                                                }
                                            ],
                                            "patternCode": "PAMedLimit",
                                            "updated": false,
                                            "chosenTerm": "opt_309",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAMedPayCov",
                                            "chosenTermValue": "5,000",
                                            "type": "OptionPAMedLimitType",
                                            "name": "Medical Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Medical Payments",
                                    "name": "Medical Payments"
                                },
                                {
                                    "isValid": true,
                                    "required": true,
                                    "publicID": "PALiabilityCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 530,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PALiability",
                                            "options": [
                                                {
                                                    "code": "pack_174",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "20/40/15"
                                                },
                                                {
                                                    "code": "pack_179",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "25/50/25"
                                                },
                                                {
                                                    "code": "pack_182",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "50/100/50"
                                                },
                                                {
                                                    "code": "pack_184",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "100/200/50"
                                                },
                                                {
                                                    "code": "pack_185",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250/500/100"
                                                },
                                                {
                                                    "code": "pack_188",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "100K CSL"
                                                },
                                                {
                                                    "code": "pack_189",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "250K CSL"
                                                },
                                                {
                                                    "code": "pack_190",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500K CSL"
                                                },
                                                {
                                                    "code": "pack_191",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1M CSL"
                                                }
                                            ],
                                            "patternCode": "PALiability",
                                            "updated": false,
                                            "chosenTerm": "pack_184",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PALiabilityCov",
                                            "chosenTermValue": "100/200/50",
                                            "type": "PackagePALiabilityType",
                                            "name": "Auto Liability Package"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Liability - Bodily Injury and Property Damage",
                                    "name": "Liability - Bodily Injury and Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUIMPDCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Underinsured Motorist - Property Damage",
                                    "name": "Underinsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PALimitedMexicoCov",
                                    "selected": true,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": false,
                                    "description": "Mexico Coverage - Limited",
                                    "name": "Mexico Coverage - Limited"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PADeathDisabilityCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "Death & Disability Benefit",
                                    "name": "Death & Disability Benefit"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAPIP_TX",
                                    "selected": true,
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAPIPTX_LIMIT",
                                            "options": [
                                                {
                                                    "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "$5,000"
                                                },
                                                {
                                                    "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "$10,000"
                                                },
                                                {
                                                    "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "$25,000"
                                                },
                                                {
                                                    "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "$50,000"
                                                }
                                            ],
                                            "patternCode": "PAPIPTX_LIMIT",
                                            "updated": false,
                                            "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAPIP_TX",
                                            "chosenTermValue": "$5,000",
                                            "type": "OptionPAPIPTX_LIMITType",
                                            "name": "PIP Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "PIP - Texas",
                                    "name": "PIP - Texas"
                                }
                            ],
                            "vehicleCoverages": [
                                {
                                    "publicID": "pc:213",
                                    "fixedId": 210,
                                    "coverages": [
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PARentalCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 22,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PARental",
                                                    "options": [
                                                        {
                                                            "code": "pack_213",
                                                            "optionValue": 2,
                                                            "maxValue": 5,
                                                            "name": "30 days x 15/day"
                                                        },
                                                        {
                                                            "code": "pack_214",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "30 days x 25/day"
                                                        },
                                                        {
                                                            "code": "pack_215",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "60 days x 20/day"
                                                        }
                                                    ],
                                                    "patternCode": "PARental",
                                                    "updated": false,
                                                    "chosenTerm": "pack_213",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PARentalCov",
                                                    "chosenTermValue": "30 days x 15/day",
                                                    "type": "PackagePARentalType",
                                                    "name": "Rental Package"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Rental Reimbursement",
                                            "name": "Rental Reimbursement"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PATowingLaborCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 17,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "TowingAndLaborLimit",
                                                    "options": [
                                                        {
                                                            "code": "wKgUOm1kelsAAAAA",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "25"
                                                        },
                                                        {
                                                            "code": "wKgUOlDqxZ4AAAAA",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "50"
                                                        },
                                                        {
                                                            "code": "wKgUOjze56oAAAAA",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "75"
                                                        },
                                                        {
                                                            "code": "wKgUOvP5tV8AAAAA",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "100"
                                                        }
                                                    ],
                                                    "patternCode": "TowingAndLaborLimit",
                                                    "updated": false,
                                                    "chosenTerm": "wKgUOlDqxZ4AAAAA",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PATowingLaborCov",
                                                    "chosenTermValue": "50",
                                                    "type": "OptionTowingAndLaborLimitType",
                                                    "name": "Towing and Labor Limit"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Towing and Labor",
                                            "name": "Towing and Labor"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PACollisionCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 28,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PACollDeductible",
                                                    "options": [
                                                        {
                                                            "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "No Deductible"
                                                        },
                                                        {
                                                            "code": "opt_319",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "250"
                                                        },
                                                        {
                                                            "code": "opt_320",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "500"
                                                        },
                                                        {
                                                            "code": "opt_321",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "1,000"
                                                        }
                                                    ],
                                                    "patternCode": "PACollDeductible",
                                                    "updated": false,
                                                    "chosenTerm": "opt_320",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PACollisionCov",
                                                    "chosenTermValue": "500",
                                                    "type": "OptionPACollDeductibleType",
                                                    "name": "Collision Deductible"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Collision",
                                            "name": "Collision"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PAComprehensiveCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 17,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PACompDeductible",
                                                    "options": [
                                                        {
                                                            "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "No Deductible"
                                                        },
                                                        {
                                                            "code": "opt_329",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "250"
                                                        },
                                                        {
                                                            "code": "opt_330",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "500"
                                                        },
                                                        {
                                                            "code": "opt_331",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "1,000"
                                                        }
                                                    ],
                                                    "patternCode": "PACompDeductible",
                                                    "updated": false,
                                                    "chosenTerm": "opt_330",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PAComprehensiveCov",
                                                    "chosenTermValue": "500",
                                                    "type": "OptionPACompDeductibleType",
                                                    "name": "Comprehensive Deductible"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Comprehensive",
                                            "name": "Comprehensive"
                                        }
                                    ],
                                    "vehicleName": "2007 Honda CRV "
                                }
                            ]
                        }
                    },
                    {
                        "branchName": "Basic Program",
                        "branchCode": "PABasic",
                        "coverages": {
                            "lineCoverages": [
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMPDCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Property Damage",
                                    "name": "Uninsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMBICov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Bodily Injury",
                                    "name": "Uninsured Motorist - Bodily Injury"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAMedPayCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 0,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAMedLimit",
                                            "options": [
                                                {
                                                    "code": "opt_309",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "5,000"
                                                },
                                                {
                                                    "code": "opt_310",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "10,000"
                                                },
                                                {
                                                    "code": "opt_311",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "15,000"
                                                },
                                                {
                                                    "code": "opt_312",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "20,000"
                                                },
                                                {
                                                    "code": "opt_313",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "25,000"
                                                }
                                            ],
                                            "patternCode": "PAMedLimit",
                                            "updated": false,
                                            "chosenTerm": "opt_309",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAMedPayCov",
                                            "chosenTermValue": "5,000",
                                            "type": "OptionPAMedLimitType",
                                            "name": "Medical Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Medical Payments",
                                    "name": "Medical Payments"
                                },
                                {
                                    "isValid": true,
                                    "required": true,
                                    "publicID": "PALiabilityCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 176,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PALiability",
                                            "options": [
                                                {
                                                    "code": "pack_174",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "20/40/15"
                                                },
                                                {
                                                    "code": "pack_179",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "25/50/25"
                                                },
                                                {
                                                    "code": "pack_182",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "50/100/50"
                                                },
                                                {
                                                    "code": "pack_184",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "100/200/50"
                                                },
                                                {
                                                    "code": "pack_185",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250/500/100"
                                                },
                                                {
                                                    "code": "pack_188",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "100K CSL"
                                                },
                                                {
                                                    "code": "pack_189",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "250K CSL"
                                                },
                                                {
                                                    "code": "pack_190",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500K CSL"
                                                },
                                                {
                                                    "code": "pack_191",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1M CSL"
                                                }
                                            ],
                                            "patternCode": "PALiability",
                                            "updated": false,
                                            "chosenTerm": "pack_174",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PALiabilityCov",
                                            "chosenTermValue": "20/40/15",
                                            "type": "PackagePALiabilityType",
                                            "name": "Auto Liability Package"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Liability - Bodily Injury and Property Damage",
                                    "name": "Liability - Bodily Injury and Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUIMPDCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Underinsured Motorist - Property Damage",
                                    "name": "Underinsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PALimitedMexicoCov",
                                    "selected": true,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": false,
                                    "description": "Mexico Coverage - Limited",
                                    "name": "Mexico Coverage - Limited"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PADeathDisabilityCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "Death & Disability Benefit",
                                    "name": "Death & Disability Benefit"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAPIP_TX",
                                    "selected": true,
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAPIPTX_LIMIT",
                                            "options": [
                                                {
                                                    "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "$5,000"
                                                },
                                                {
                                                    "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "$10,000"
                                                },
                                                {
                                                    "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "$25,000"
                                                },
                                                {
                                                    "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "$50,000"
                                                }
                                            ],
                                            "patternCode": "PAPIPTX_LIMIT",
                                            "updated": false,
                                            "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAPIP_TX",
                                            "chosenTermValue": "$5,000",
                                            "type": "OptionPAPIPTX_LIMITType",
                                            "name": "PIP Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "PIP - Texas",
                                    "name": "PIP - Texas"
                                }
                            ],
                            "vehicleCoverages": [
                                {
                                    "publicID": "pc:212",
                                    "fixedId": 210,
                                    "coverages": [
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PARentalCov",
                                            "selected": false,
                                            "terms": [],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Rental Reimbursement",
                                            "name": "Rental Reimbursement"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PATowingLaborCov",
                                            "selected": false,
                                            "terms": [],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Towing and Labor",
                                            "name": "Towing and Labor"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PACollisionCov",
                                            "selected": false,
                                            "terms": [],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Collision",
                                            "name": "Collision"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PAComprehensiveCov",
                                            "selected": false,
                                            "terms": [],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Comprehensive",
                                            "name": "Comprehensive"
                                        }
                                    ],
                                    "vehicleName": "2007 Honda CRV "
                                }
                            ]
                        }
                    },
                    {
                        "branchName": "Premium Program",
                        "branchCode": "PAPremium",
                        "coverages": {
                            "lineCoverages": [
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMPDCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Property Damage",
                                    "name": "Uninsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUMBICov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 171,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAUMBI",
                                            "options": [
                                                {
                                                    "code": "pack_208",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "20/40"
                                                },
                                                {
                                                    "code": "pack_209",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "25/50"
                                                },
                                                {
                                                    "code": "pack_212",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250/500"
                                                },
                                                {
                                                    "code": "pack_202",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "100K CSL"
                                                },
                                                {
                                                    "code": "pack_203",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "250K CSL"
                                                }
                                            ],
                                            "patternCode": "PAUMBI",
                                            "updated": false,
                                            "chosenTerm": "pack_212",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAUMBICov",
                                            "chosenTermValue": "250/500",
                                            "type": "PackagePAUMBIType",
                                            "name": "Uninsured Motorist - BI Limits"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Uninsured Motorist - Bodily Injury",
                                    "name": "Uninsured Motorist - Bodily Injury"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAMedPayCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 55,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAMedLimit",
                                            "options": [
                                                {
                                                    "code": "opt_309",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "5,000"
                                                },
                                                {
                                                    "code": "opt_310",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "10,000"
                                                },
                                                {
                                                    "code": "opt_311",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "15,000"
                                                },
                                                {
                                                    "code": "opt_312",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "20,000"
                                                },
                                                {
                                                    "code": "opt_313",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "25,000"
                                                }
                                            ],
                                            "patternCode": "PAMedLimit",
                                            "updated": false,
                                            "chosenTerm": "opt_310",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAMedPayCov",
                                            "chosenTermValue": "10,000",
                                            "type": "OptionPAMedLimitType",
                                            "name": "Medical Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Medical Payments",
                                    "name": "Medical Payments"
                                },
                                {
                                    "isValid": true,
                                    "required": true,
                                    "publicID": "PALiabilityCov",
                                    "selected": true,
                                    "amount": {
                                        "amount": 719,
                                        "currency": "usd"
                                    },
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PALiability",
                                            "options": [
                                                {
                                                    "code": "pack_174",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "20/40/15"
                                                },
                                                {
                                                    "code": "pack_179",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "25/50/25"
                                                },
                                                {
                                                    "code": "pack_182",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "50/100/50"
                                                },
                                                {
                                                    "code": "pack_184",
                                                    "optionValue": 2,
                                                    "maxValue": 5,
                                                    "name": "100/200/50"
                                                },
                                                {
                                                    "code": "pack_185",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "250/500/100"
                                                },
                                                {
                                                    "code": "pack_188",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "100K CSL"
                                                },
                                                {
                                                    "code": "pack_189",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "250K CSL"
                                                },
                                                {
                                                    "code": "pack_190",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "500K CSL"
                                                },
                                                {
                                                    "code": "pack_191",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "1M CSL"
                                                }
                                            ],
                                            "patternCode": "PALiability",
                                            "updated": false,
                                            "chosenTerm": "pack_185",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PALiabilityCov",
                                            "chosenTermValue": "250/500/100",
                                            "type": "PackagePALiabilityType",
                                            "name": "Auto Liability Package"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Liability - Bodily Injury and Property Damage",
                                    "name": "Liability - Bodily Injury and Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAUIMPDCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": true,
                                    "description": "Underinsured Motorist - Property Damage",
                                    "name": "Underinsured Motorist - Property Damage"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PALimitedMexicoCov",
                                    "selected": true,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPLiabGrp",
                                    "coverageCategoryDisplayName": "Personal Auto Liability Group",
                                    "hasTerms": false,
                                    "description": "Mexico Coverage - Limited",
                                    "name": "Mexico Coverage - Limited"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PADeathDisabilityCov",
                                    "selected": false,
                                    "terms": [],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "Death & Disability Benefit",
                                    "name": "Death & Disability Benefit"
                                },
                                {
                                    "isValid": true,
                                    "required": false,
                                    "publicID": "PAPIP_TX",
                                    "selected": true,
                                    "terms": [
                                        {
                                            "required": true,
                                            "publicID": "PAPIPTX_LIMIT",
                                            "options": [
                                                {
                                                    "code": "pa5eh2en1chae2crsgsr9jsha89b",
                                                    "optionValue": 1,
                                                    "maxValue": 5,
                                                    "name": "$5,000"
                                                },
                                                {
                                                    "code": "pan8j06ilj11eu9pa9hncos4dv0b",
                                                    "optionValue": 3,
                                                    "maxValue": 5,
                                                    "name": "$10,000"
                                                },
                                                {
                                                    "code": "paa8hshhmu6qem34nc7vtr2gh6p9",
                                                    "optionValue": 4,
                                                    "maxValue": 5,
                                                    "name": "$25,000"
                                                },
                                                {
                                                    "code": "paulgsbg5mgfg31rhf65ao0aquga",
                                                    "optionValue": 5,
                                                    "maxValue": 5,
                                                    "name": "$50,000"
                                                }
                                            ],
                                            "patternCode": "PAPIPTX_LIMIT",
                                            "updated": false,
                                            "chosenTerm": "pa5eh2en1chae2crsgsr9jsha89b",
                                            "isAscendingBetter": true,
                                            "coveragePublicID": "PAPIP_TX",
                                            "chosenTermValue": "$5,000",
                                            "type": "OptionPAPIPTX_LIMITType",
                                            "name": "PIP Limit"
                                        }
                                    ],
                                    "updated": false,
                                    "coverageCategoryCode": "PAPip",
                                    "coverageCategoryDisplayName": "Personal Injury",
                                    "hasTerms": true,
                                    "description": "PIP - Texas",
                                    "name": "PIP - Texas"
                                }
                            ],
                            "vehicleCoverages": [
                                {
                                    "publicID": "pc:211",
                                    "fixedId": 210,
                                    "coverages": [
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PARentalCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 22,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PARental",
                                                    "options": [
                                                        {
                                                            "code": "pack_213",
                                                            "optionValue": 2,
                                                            "maxValue": 5,
                                                            "name": "30 days x 15/day"
                                                        },
                                                        {
                                                            "code": "pack_214",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "30 days x 25/day"
                                                        },
                                                        {
                                                            "code": "pack_215",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "60 days x 20/day"
                                                        }
                                                    ],
                                                    "patternCode": "PARental",
                                                    "updated": false,
                                                    "chosenTerm": "pack_215",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PARentalCov",
                                                    "chosenTermValue": "60 days x 20/day",
                                                    "type": "PackagePARentalType",
                                                    "name": "Rental Package"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Rental Reimbursement",
                                            "name": "Rental Reimbursement"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PATowingLaborCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 17,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "TowingAndLaborLimit",
                                                    "options": [
                                                        {
                                                            "code": "wKgUOm1kelsAAAAA",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "25"
                                                        },
                                                        {
                                                            "code": "wKgUOlDqxZ4AAAAA",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "50"
                                                        },
                                                        {
                                                            "code": "wKgUOjze56oAAAAA",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "75"
                                                        },
                                                        {
                                                            "code": "wKgUOvP5tV8AAAAA",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "100"
                                                        }
                                                    ],
                                                    "patternCode": "TowingAndLaborLimit",
                                                    "updated": false,
                                                    "chosenTerm": "wKgUOjze56oAAAAA",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PATowingLaborCov",
                                                    "chosenTermValue": "75",
                                                    "type": "OptionTowingAndLaborLimitType",
                                                    "name": "Towing and Labor Limit"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Towing and Labor",
                                            "name": "Towing and Labor"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PACollisionCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 41,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PACollDeductible",
                                                    "options": [
                                                        {
                                                            "code": "zrujkmcbun4l2aks106hdfimaf9",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "No Deductible"
                                                        },
                                                        {
                                                            "code": "zj9ien18bvclfcbhds4ld86fe0b",
                                                            "optionValue": 2,
                                                            "maxValue": 5,
                                                            "name": "100"
                                                        },
                                                        {
                                                            "code": "opt_319",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "250"
                                                        },
                                                        {
                                                            "code": "opt_320",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "500"
                                                        },
                                                        {
                                                            "code": "opt_321",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "1,000"
                                                        }
                                                    ],
                                                    "patternCode": "PACollDeductible",
                                                    "updated": false,
                                                    "chosenTerm": "opt_319",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PACollisionCov",
                                                    "chosenTermValue": "250",
                                                    "type": "OptionPACollDeductibleType",
                                                    "name": "Collision Deductible"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Collision",
                                            "name": "Collision"
                                        },
                                        {
                                            "isValid": true,
                                            "required": false,
                                            "publicID": "PAComprehensiveCov",
                                            "selected": true,
                                            "amount": {
                                                "amount": 25,
                                                "currency": "usd"
                                            },
                                            "terms": [
                                                {
                                                    "required": true,
                                                    "publicID": "PACompDeductible",
                                                    "options": [
                                                        {
                                                            "code": "zu1i0ad13outmdh0t7ojll6i5cb",
                                                            "optionValue": 1,
                                                            "maxValue": 5,
                                                            "name": "No Deductible"
                                                        },
                                                        {
                                                            "code": "z48j8jgbg6dckbl7ek0sglslvi8",
                                                            "optionValue": 2,
                                                            "maxValue": 5,
                                                            "name": "100"
                                                        },
                                                        {
                                                            "code": "opt_329",
                                                            "optionValue": 3,
                                                            "maxValue": 5,
                                                            "name": "250"
                                                        },
                                                        {
                                                            "code": "opt_330",
                                                            "optionValue": 4,
                                                            "maxValue": 5,
                                                            "name": "500"
                                                        },
                                                        {
                                                            "code": "opt_331",
                                                            "optionValue": 5,
                                                            "maxValue": 5,
                                                            "name": "1,000"
                                                        }
                                                    ],
                                                    "patternCode": "PACompDeductible",
                                                    "updated": false,
                                                    "chosenTerm": "opt_329",
                                                    "isAscendingBetter": true,
                                                    "coveragePublicID": "PAComprehensiveCov",
                                                    "chosenTermValue": "250",
                                                    "type": "OptionPACompDeductibleType",
                                                    "name": "Comprehensive Deductible"
                                                }
                                            ],
                                            "updated": false,
                                            "coverageCategoryCode": "PAPPhysDamGrp",
                                            "coverageCategoryDisplayName": "Personal Auto Physical Damage Group",
                                            "hasTerms": true,
                                            "description": "Comprehensive",
                                            "name": "Comprehensive"
                                        }
                                    ],
                                    "vehicleName": "2007 Honda CRV "
                                }
                            ]
                        }
                    }
                ],
                "coverables": {
                    "drivers": [
                        {
                            "accidents": "0",
                            "violations": "0",
                            "person": {
                                "publicID": "pc:808",
                                "dateOfBirth": {
                                    "day": 1,
                                    "year": 1970,
                                    "month": 0
                                },
                                "firstName": "Bob",
                                "lastName": "Jones",
                                "displayName": "Bob Jones"
                            },
                            "publicID": "pc:466",
                            "yearLicensed": 2000,
                            "dateOfBirth": {
                                "day": 1,
                                "year": 1970,
                                "month": 0
                            },
                            "licenseNumber": "12345678",
                            "licenseState": "TX",
                            "gender": "M",
                            "isPolicyHolder": true
                        }
                    ],
                    "vehicles": [
                        {
                            "publicID": "pc:210",
                            "model": "CRV",
                            "primaryUse": "commuting",
                            "licenseState": "TX",
                            "costNew": {
                                "amount": 15000,
                                "currency": "usd"
                            },
                            "make": "Honda",
                            "vin": "JHLRE38357C030678",
                            "year": 2007,
                            "displayName": "Honda CRV 2007"
                        }
                    ]
                },
                "preQualQuestionSets": [
                    {
                        "code": "PAPersonalAutoPreQual",
                        "answers": {
                            "PriorDeclinedPolicy": "false",
                            "PACurrentlyInsured": "yes",
                            "MovingViolations2": "false",
                            "DriverNameConviction": null,
                            "CurrentSuspense": "false",
                            "Suspense": "false"
                        }
                    }
                ]
            }
        },
        "quoteData": {
            "offeredQuotes": [
                {
                    "premium": {
                        "taxes": {
                            "amount": 10,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 186,
                            "currency": "usd"
                        },
                        "termMonths": 6,
                        "totalBeforeTaxes": {
                            "amount": 176,
                            "currency": "usd"
                        },
                        "monthlyPremium": {
                            "amount": 31,
                            "currency": "usd"
                        }
                    },
                    "publicID": "pc:167",
                    "branchName": "Basic Program",
                    "branchCode": "PABasic",
                    "hasBlockingUWIssues": false,
                    "isCustom": true,
                    "status": "Quoted"
                },
                {
                    "premium": {
                        "taxes": {
                            "amount": 36,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 695,
                            "currency": "usd"
                        },
                        "termMonths": 6,
                        "totalBeforeTaxes": {
                            "amount": 659,
                            "currency": "usd"
                        },
                        "monthlyPremium": {
                            "amount": 115.83,
                            "currency": "usd"
                        }
                    },
                    "publicID": "pc:169",
                    "branchName": "Standard Program",
                    "branchCode": "StandardProgram",
                    "hasBlockingUWIssues": false,
                    "isCustom": true,
                    "status": "Quoted"
                },
                {
                    "premium": {
                        "taxes": {
                            "amount": 58,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 1108,
                            "currency": "usd"
                        },
                        "termMonths": 6,
                        "totalBeforeTaxes": {
                            "amount": 1050,
                            "currency": "usd"
                        },
                        "monthlyPremium": {
                            "amount": 184.67,
                            "currency": "usd"
                        }
                    },
                    "publicID": "pc:168",
                    "branchName": "Premium Program",
                    "branchCode": "PAPremium",
                    "hasBlockingUWIssues": false,
                    "isCustom": true,
                    "status": "Quoted"
                },
                {
                    "premium": {
                        "taxes": {
                            "amount": 45,
                            "currency": "usd"
                        },
                        "total": {
                            "amount": 868,
                            "currency": "usd"
                        },
                        "termMonths": 6,
                        "totalBeforeTaxes": {
                            "amount": 823,
                            "currency": "usd"
                        },
                        "monthlyPremium": {
                            "amount": 144.67,
                            "currency": "usd"
                        }
                    },
                    "publicID": "pc:166",
                    "branchName": "CUSTOM",
                    "branchCode": "CUSTOM",
                    "hasBlockingUWIssues": false,
                    "isCustom": true,
                    "status": "Quoted"
                }
            ]
        },
        "baseData": {
            "periodStatus": "Quoted",
            "accountHolder": {
                "additionalAddresses": [],
                "publicID": "pc:808",
                "subtype": "Person",
                "accountHolder": true,
                "primaryAddress": {
                    "publicID": "pc:1012",
                    "country": "US",
                    "city": "San Antonio",
                    "postalCode": "78247",
                    "addressLine1": "123 Main Street",
                    "addressType": "home",
                    "state": "TX",
                    "displayName": "123 Main Street, San Antonio, TX 78247"
                },
                "dateOfBirth": {
                    "day": 1,
                    "year": 1970,
                    "month": 0
                },
                "firstName": "Bob",
                "lastName": "Jones",
                "licenseNumber": "123456",
                "licenseState": "TX",
                "gender": "M",
                "contactName": "Bob Jones",
                "displayName": "Bob Jones"
            },
            "termType": "HalfYear",
            "productName": "Personal Auto",
            "productCode": "PersonalAuto",
            "jobType": "Submission",
            "periodStartDate": {
                "day": 10,
                "year": 2019,
                "month": 6
            },
            "accountNumber": "1840055994",
            "policyAddress": {
                "publicID": "pc:1012",
                "country": "US",
                "city": "San Antonio",
                "postalCode": "78247",
                "addressLine1": "123 Main Street",
                "addressType": "home",
                "state": "TX",
                "displayName": "123 Main Street, San Antonio, TX 78247"
            },
            "periodEndDate": {
                "day": 10,
                "year": 2020,
                "month": 0
            }
        },
        "sessionUUID": "d4c52235-b69e-498c-b868-d40d8762164d",
        "quoteID": "0002848077",
        "bindData": {
            "accountNumber": "1840055994",
            "selectedPaymentPlan": "pctest:2",
            "chosenQuote": "pc:166"
        }
    }
};