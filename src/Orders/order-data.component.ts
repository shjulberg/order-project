import { Component, OnInit, Input } from "@angular/core";
import { OrderDataService } from "./order-data.service";
import { IOrderDataObject, IData, ICustomerOrderComment, IFreightPayCodeLiteral, CommentObj } from "./order-data";
@Component({
    templateUrl: './order-data.component.html',
    styleUrls: ['./order-data.component.css']
})

export class OrderDataComponent implements OnInit{
  orderData: IOrderDataObject;
  data: IData;
  errorMessage: string;
  pageTitle: string = 'Order Detail';
  freightCode: string;

  constructor(private orderService: OrderDataService){

  }

  ngOnInit(){
      this.orderService.getOrderData().subscribe(
          orderData => {
            this.orderData = orderData,
            this.data = orderData.data;
            this.assignLocalVarsFromData(this.data);
          },
        error => this.errorMessage = <any>error
      );

  }

  assignLocalVarsFromData(data: IData){
    //freight
    this.freightCode = this.getFreightCodeByKey("N",data.FreightPayCodeLiteral);

  }

  getFreightCodeByKey(Key: string, FreightCodes: IFreightPayCodeLiteral[]){
    let value = "";
    let index = FreightCodes.map(function(i) {return i.Key}).indexOf(Key);
    return FreightCodes[index].Value;
  }

  addComment(comment: string){
    var newComment = new CommentObj();
    let numComments = this.orderData.data.CustomerOrderComments.length;
    newComment.OrderNumber = this.orderData.data.OrderNumber;
    newComment.CommentType = "L";
    newComment.ID = this.orderData.data.CustomerOrderComments[numComments-1].ID + 1;
    newComment.Comment = comment;
    this.orderData.data.CustomerOrderComments.push(newComment);
  }
}