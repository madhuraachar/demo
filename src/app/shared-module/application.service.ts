import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Product } from './application.model';


@Injectable({
    providedIn: "root"
})
export class ApplicationService{
    productList = new Subject<Product[]>();
    productListfromJson: Product[] = [];


    cartProduct: Product[] = [];
    cartProductEvent = new Subject<Product[]>();

    checkOutEvent = new Subject<string>();

    constructor(private http: HttpClient){
       // this.getProductListFromJson();
    }

    getProductListFromJson(){
        let promise = new Promise((resolve, reject)=>{
            let url = "../../assets/json/product_list.json";
            this.http.get(url)
                .toPromise()
                .then(
                    res=>{
                        console.log(res);
                        if(res["product"]){
                            let productListObj: Product[] = [];
                            //add index as unique id
                            this.productListfromJson = res["product"].map((product,index)=>{
                                return new Product(
                                    index,
                                    product.brandName,
                                    product.productName,
                                    product.quantity,
                                    product.price,
                                    product.mrp,
                                    product.imageURL,
                                    product.offerText
                                )
                            });
                            this.productList.next(this.productListfromJson);
                            
                        }
                        console.log("productListfromJson", this.productListfromJson)
                        resolve();
                    }
                )
        });
        return promise;
    }

    addToCart(index){
        this.cartProduct.push(this.productListfromJson[index]);
        this.cartProductEvent.next(this.cartProduct);
    }
    removeCart(index){
        const i = this.cartProduct.findIndex(product=>product.id === index);
        //console.log(i)
        if(i != -1){ //if i is -1 ---> not found
            this.cartProduct.splice(i,1);
            this.cartProductEvent.next(this.cartProduct);
        } 
    }

    getcartCount(index){
        return this.cartProduct.filter(product=> product.id === index).length;
    }
    
    getTotalFromCart(){
        let total = 0;
        this.cartProduct.forEach(x=>{
            total = total + (+x.price)
        })
        return total;
    }

    clearCart(){
        this.cartProduct = [];
        this.cartProductEvent.next(this.cartProduct);
    }
}