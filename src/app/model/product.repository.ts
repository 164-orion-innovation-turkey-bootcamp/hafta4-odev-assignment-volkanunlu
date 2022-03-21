import { Category } from './category.model';
import { RestService } from './rest.service';
import { Product } from './product.model';
import { Injectable, OnInit } from '@angular/core';

//bu ts dosyası servis dosyasına gidecek ve productla ilgili metotları çağıracak.


@Injectable()

export class ProductRepository implements OnInit{

    private products: Product []= [];

    constructor(private restService:  RestService){       
        this.restService.getProducts().subscribe(products => this.products=this.products);
    }
    
    ngOnInit(){
    }

    getProduct(id :number):Product | undefined{ 

        return this.products.find(i =>i.id ===id);
    }

     //ileride hata alırsan sonuna ! eklemeyi dene.

    getProducts(category:Category= null):Product[] {
        if(category)
       return this.products.filter(p=> p.category==category.name); 
       else
            return this.products;
    }

}