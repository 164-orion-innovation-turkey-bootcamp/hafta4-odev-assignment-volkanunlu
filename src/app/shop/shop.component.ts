import { Cart } from './../model/cart.model';
import { Product } from './../model/product.model';
import { Category } from './../model/category.model';
import { CategoryRepository } from './../model/category.repository';
import { ProductRepository } from './../model/product.repository';
import { Component } from "@angular/core";
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
    selector:'shop',
    templateUrl:'shop.component.html',

})

export class ShopComponent {

    public selectedCategory: Category=null;
    public productsPerPage = 3;
    public selectedPage=1;

    //1*3 => 3 ürün (0,3)
    //2*3 => 6 ürün (5,3)


    constructor(
        private productRepository:ProductRepository,
        private categoryRepository:CategoryRepository,
        private cart:Cart,
        private router:Router
    ){}


    get products():Product[]{
        let index=(this.selectedPage)*this.productsPerPage;
        //1*3 = 3 indeks numarasından başlayacak şekilde ilerler. (2. sayfa)
        //0*3   = 0 (1.sayfa)

        return this.productRepository.getProducts(this.selectedCategory).slice(index,index+this.productsPerPage);
    }

    get pageNumbers():number[]
    {   
       return Array(
        Math.ceil (this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage)).fill(0).map((a,i)=> i+1)


    }


    changePage(p:number)
    {
        this.selectedPage=p;
    }

    get categories() : Category[]{

        return this.categoryRepository.getCategories();

    }

    ChangeCategory(newCategory?: Category)
    {
        this.selectedCategory=newCategory;
    }

    addProductToCart(product: Product){
        this.cart.addItem(product);
        this.router.navigateByUrl('/cart');



    }

}