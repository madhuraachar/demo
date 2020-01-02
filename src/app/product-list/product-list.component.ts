import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared-module/application.model';
import { ApplicationService } from '../shared-module/application.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: Product[] = [];
  $productList: Subscription;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    //get list from json
    this.applicationService.getProductListFromJson();
    
    //product list
    this.applicationService.productList.subscribe(productList=>{
        this.productList = productList;
      //  console.log(this.productList)
    })
  }

  ngOnDestroy(){
    this.$productList.unsubscribe();
  }

}
