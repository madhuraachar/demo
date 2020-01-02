import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared-module/application.model';
import { ApplicationService } from '../shared-module/application.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy{
  qty = 0;
  total = 0;
  $cartProductEvent: Subscription;
  constructor(private applicationService:ApplicationService) { }

  ngOnInit() {
    this.$cartProductEvent = this.applicationService.cartProductEvent.subscribe((productList: Product[])=>{
      this.qty = productList.length;
      this.total = this.applicationService.getTotalFromCart();
    })
  }

  goToCheckOut(){
    this.applicationService.checkOutEvent.next();
  }

  ngOnDestroy(){
    this.$cartProductEvent.unsubscribe();
  }

}
