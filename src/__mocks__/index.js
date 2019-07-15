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