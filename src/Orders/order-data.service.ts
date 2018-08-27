import { Injectable } from "@angular/core";
import { IOrderDataObject } from "./order-data";

@Injectable({
    providedIn: 'root'
})

export class OrderDataService {
    getOrderData(): IOrderDataObject[] {
        return [
            {
                "data": {
                    "AccountsReceivableReference": "Po:                          Our Ord:     135",
                    "AccountsReceivableTermsCode": "30",
                    "AccumulatedFreightAmount": 0,
                    "AccumulatedMiscellaneousChargesAmount": 0,
                    "AccumulatedSalesTaxAmount": 0,
                    "AccumulatedTotalSalesAmount": 0,
                    "AccumulatedTotalTaxableAmount": 0,
                    "AwardProbability": 0,
                    "BillToAddressLine1": "2844 Torneapple River Drive",
                    "BillToAddressLine4": "Cascade, MI 49546",
                    "BillToCity": "Cascade",
                    "BillToCountry": "US",
                    "BillToCustomerName": "Village Bike Shop",
                    "BillToCustomerNumber": "905",
                    "BillToState": "MI",
                    "BillToZip": "49546",
                    "CommissionAmount": 25.75,
                    "CommissionPercent": 5,
                    "ContactEmailAddress": "GMcgovern@villagebike.com",
                    "ContactName": "George McGovern",
                    "ContactPhoneNumber": "616-285-1670",
                    "CurrencyCode": "USD",
                    "CurrencyTransactionRate": 1,
                    "CustomerBalanceMethod": "O",
                    "CustomerNumber": "905",
                    "CustomerOrderComments": [
                        {
                            "Comment": "Test some comments from the iPad",
                            "CommentType": "L",
                            "Extra10": 0,
                            "Extra11": 0,
                            "Extra12": 0,
                            "Extra13": 0,
                            "Extra14": 0,
                            "Extra15": 0,
                            "ID": 10003,
                            "LevelNumber": "M",
                            "LineSequenceNumber": 0,
                            "OrderNumber": "135",
                            "OrderType": "O",
                            "RowVersion": "3779088534875406336",
                            "SequenceNumber": 1
                        }
                    ],
                    "DetermineRateBy": "I",
                    "DiscountPercent": 0,
                    "EdiCode": "V",
                    "EDIDocumentSequence": 0,
                    "EnteredDate": "2018-04-25T00:00:00",
                    "ExtraField10": 0,
                    "ExtraField11": 0,
                    "ExtraField12": 0,
                    "ExtraField13": 0,
                    "ExtraField14": 0,
                    "ExtraField15": 0,
                    "FormNumber": 1,
                    "FreightAmount": 0,
                    "FreightCostCenter": "3000SM00",
                    "FreightCostUnit": "3000",
                    "FreightGLAccountNumber": "3155",
                    "FreightPayCodeLiteral": [
                        {
                            "Key": "C",
                            "Value": "Collect"
                        },
                        {
                            "Key": "P",
                            "Value": "Prepaid"
                        },
                        {
                            "Key": "N",
                            "Value": "None"
                        }
                    ],
                    "FreightPaymentCode": "N",
                    "HoldCode": "",
                    "ID": 20062,
                    "InvoiceNumber": "",
                    "IsBillToFreeForm": false,
                    "IsClosed": false,
                    "IsCopyToBillOfMaterial": false,
                    "IsExchangeRate": false,
                    "IsMultipleLocation": false,
                    "IsOrderTaxable": true,
                    "IsPartiallyPosted": false,
                    "IsPrepayment": false,
                    "IsShipToFreeForm": false,
                    "ManufacturingLocation": "MA",
                    "Messages": [],
                    "MiscellaneousAmount": 0,
                    "MiscellaneousCostCenter": "3000SM00",
                    "MiscellaneousCostUnit": "3000",
                    "MiscellaneousGLAccountNumber": "3155",
                    "OECashNumber": "",
                    "OrderDate": "2018-04-25T00:00:00",
                    "OrderNumber": "135",
                    "OrderType": "O",
                    "OriginalTransactionRate": 1,
                    "PackingSlipNumber": 0,
                    "PaymentAmount": 0,
                    "PaymentDiscountAmount": 0,
                    "PreSelectStatus": "1",
                    "ProgTermNumber": 0,
                    "PurchaseOrderNumber": "",
                    "ReturnMaterialAuthorizationNumber": "",
                    "RowVersion": "-9119220797913694208",
                    "SalespersonCommissionAmount": 25.75,
                    "SalespersonCommissionAmount2": 0,
                    "SalespersonCommissionAmount3": 0,
                    "SalespersonNumber": 11052,
                    "SalespersonNumber2": 0,
                    "SalespersonNumber3": 0,
                    "SalespersonPercentCommission": 100,
                    "SalespersonPercentCommission2": 0,
                    "SalespersonPercentCommission3": 0,
                    "SalesTaxAmount1": 28.33,
                    "SalesTaxAmount2": 0,
                    "SalesTaxAmount3": 0,
                    "SelectionCode": "C",
                    "ShipToAddressLine1": "2844 Torneapple River Drive",
                    "ShipToAddressLine4": "Cascade, MI 49546",
                    "ShipToCity": "Cascade",
                    "ShipToCountry": "US",
                    "ShipToName": "Village Bike Shop",
                    "ShipToState": "MI",
                    "ShipToZip": "49546",
                    "ShipViaCode": "UPS",
                    "Status": "1",
                    "TaxCode": "OHS",
                    "TaxPercent": 5.5,
                    "TaxPercent2": 0,
                    "TaxPercent3": 0,
                    "TotalCost": 1029,
                    "TotalDollars": 4353.47,
                    "TotalSaleAmt": 1960.34,
                    "TotalSalesDiscount": 0,
                    "TotalTaxableAmount": 1960.34,
                    "TotalTaxableCost": 1029,
                    "TotalWeight": 2418
                },
                "metadata": {},
                "message": null,
                "validations": null
            }
        ]
    }
}