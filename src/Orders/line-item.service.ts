import { Injectable } from "@angular/core";
import { ILineItem } from "./line-item";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class LineItemService {
    private lineItemDataUrl = 'api/orderData/OrderLineItemJSON.json';

    constructor (private http: HttpClient) {}

    getLineItem(): Observable<ILineItem>{
        return this.http.get<ILineItem>(this.lineItemDataUrl).pipe(
            tap(data => console.log('All: '+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = `Error: ${err.error.message}`;
        } else {
            errorMessage = `Server error: ${err.status}, : ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}