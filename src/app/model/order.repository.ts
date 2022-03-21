import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';

@Injectable()
export class OrderRepository{

    private orders: Order[]= [];

    constructor(private restService: RestService){
    }

    getOrders(): Order []
    {
        return this.orders;
    }


    saveOrder(order:Order): Observable <Order>{
        return this.restService.saveOrder(order);

}