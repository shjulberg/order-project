import { Injectable } from "@angular/core";
import { IOrderDataObject } from "./order-data";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class OrderDataService {
    private orderDataUrl = 'api/orderData/OeOrderDataStructureJSON.json';

    constructor (private http: HttpClient) {}

    getOrderData(): Observable<IOrderDataObject> {
        return this.http.get<IOrderDataObject>(this.orderDataUrl).pipe(
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