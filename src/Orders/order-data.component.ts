import { Component, OnInit } from "@angular/core";
import { OrderDataService } from "./order-data.service";
import { IOrderDataObject, ICustomerOrderComment, IFreightPayCodeLiteral } from "./order-data";

@Component({
    selector: 'o-order-detail',
    templateUrl: './order-data.component.html',
    styleUrls: ['./order-data.component.css']
})

export class OrderDataComponent implements OnInit{
  orderData: IOrderDataObject;
  errorMessage: string;
  pageTitle: string = 'Order Detail';
  //orderData: OrderData[];
  orderNumber: string;
  orderDate: string;
  poNumber: string;
  totalCost: number;
  billingCustNumber: string;
  billingCustomer: string;
  billingAddress1: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  salesPersonID: number;
  salesPersonCommissionAmt: number;
  salesPersonCommissionPct: number;
  taxPct: number;
  totalTaxableAmt: number;
  totalTaxableCost: number;
  comments: ICustomerOrderComment[] = [];
  shippingCust: string;
  shippingAddress1: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
  shippingVia: string;
  shippingWeight: number;
  freightAmt: number;
  freightCode: string;

  constructor(private orderService: OrderDataService){

  }

  ngOnInit(){
      this.orderService.getOrderData().subscribe(
          orderData => {
            this.orderData = orderData,
            this.assignLocalVarsFromData(orderData);
          },
        error => this.errorMessage = <any>error
      );

  }

  assignLocalVarsFromData(orderDataObj: IOrderDataObject){
    let data = orderDataObj.data;

    this.orderNumber = data.OrderNumber;
    //summary info
    this.orderDate = data.OrderDate;
    this.poNumber = data.PurchaseOrderNumber;
    this.totalCost = data.TotalCost;
    //billing info
    this.billingCustNumber = data.BillToCustomerNumber;
    this.billingCustomer = data.BillToCustomerName;
    this.billingAddress1 = data.BillToAddressLine1;
    this.billingCity = data.BillToCity;
    this.billingState = data.BillToState;
    this.billingZip = data.BillToZip;
    //customer info
    this.contactName = data.ContactName;
    this.contactEmail = data.ContactEmailAddress;
    this.contactPhone = data.ContactPhoneNumber;
    //salesPerson info
    this.salesPersonID = data.SalespersonNumber;
    this.salesPersonCommissionAmt = data.SalespersonCommissionAmount;
    this.salesPersonCommissionPct = data.SalespersonPercentCommission;
    //tax info
    this.taxPct = data.TaxPercent;
    this.totalTaxableAmt = data.TotalTaxableAmount;
    this.totalTaxableCost = data.TotalTaxableCost;
    //shipping
    this.shippingCust = data.ShipToName;
    this.shippingAddress1 = data.ShipToAddressLine1;
    this.shippingCity = data.ShipToCity;
    this.shippingState = data.ShipToState;
    this.shippingZip = data.ShipToZip;
    this.shippingVia = data.ShipViaCode;
    this.shippingWeight = data.TotalWeight;
    //freight
    this.freightAmt = data.FreightAmount;
    this.freightCode = this.getFreightCodeByKey("N",data.FreightPayCodeLiteral);
    //comments
    this.comments = data.CustomerOrderComments;
  }

  getFreightCodeByKey(Key: string, FreightCodes: IFreightPayCodeLiteral[]){
    let value = "";
    let index = FreightCodes.map(function(i) {return i.Key}).indexOf(Key);
    return FreightCodes[index].Value;
  }
}