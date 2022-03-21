import { Category } from './category.model';
import { RestService } from './rest.service';
import { Injectable, OnInit } from '@angular/core';

//bu ts dosyası servis dosyasına gidecek ve productla ilgili metotları çağıracak.


@Injectable()

export class CategoryRepository implements OnInit{

    private categories: Category []= [];

    constructor(private restService:  RestService){
        this.restService.getCategories().subscribe(categories => this.categories=this.categories);
    }
    
    ngOnInit(){
      
    }

    getCategory(id :number):Category | undefined { 

        return this.categories.find(i =>i.id ===id)!;
    }

    getCategories(): Category[]{
        return this.categories;
    }

    

}