import { Component, OnInit } from "@angular/core";
import { OrderDataService } from "./order-data.service";
import { IOrderDataObject } from "./order-data";

@Component({
    selector: 'o-order-detail',
    templateUrl: './order-data.component.html',
    styleUrls: ['./order-data.component.css']
})

export class OrderDataComponent implements OnInit{
  orderData: IOrderDataObject[];
  pageTitle: string = 'Order Detail';
  //orderData: OrderData[];
  orderNumber: string;
  orderDate: string;
  poNumber: string;
  totalCost: string;
  billingCustNumber: string;
  billingCustomer: string;
  billingAddress1: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;

  constructor(private orderService: OrderDataService){

  }

  ngOnInit(){
    this.orderData = this.orderService.getOrderData();
    alert(this.orderData);
    //this.orderNumber = (this.orderData.data as IData).OrderNumber;

  }
}