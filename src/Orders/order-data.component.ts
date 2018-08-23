import { Component } from "@angular/core";
import * as $ from 'jquery';

@Component({
    selector: 'o-order-detail',
    templateUrl: './order-data.component.html',
    styleUrls: ['./order-data.component.css']
})

export class OrderDataComponent{
  pageTitle: string = 'Order Detail';
}