import { OrderRepository } from './order.repository';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { CategoryRepository } from './category.repository';
import { ProductRepository } from './product.repository';
import { RestService } from './rest.service';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
    imports : [HttpClientModule],
    providers: [RestService,ProductRepository,CategoryRepository,Cart,Order,OrderRepository]

})

export class ModelModule{}