import { Component, OnInit } from "@angular/core";
import { LineItemService } from "./line-item.service";
import { ILineItem } from "./line-item";

@Component({

    templateUrl: './line-item.component.html',
    styleUrls: ['./line-item.component.css']
})

export class LineItemComponent implements OnInit{
    lineItemData: ILineItem;
    errorMessage: string;
    constructor(private lineItemService: LineItemService){
        
    }
    ngOnInit(): void {
        this.lineItemService.getLineItem().subscribe(
            lineItemData => {
                this.lineItemData = lineItemData
            },
            error => this.errorMessage = <any>error
        )
    }
  
}