import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApplicationService } from '../../../../shared-module/application.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, OnDestroy {
  @Input()productIndex: number;
  count = 0;
  $cartProductEvent: Subscription;
  constructor(private applicationService: ApplicationService) { }

  ngOnInit() {
    this.$cartProductEvent = this.applicationService.cartProductEvent.subscribe(cartProduct=>{
      this.count = this.applicationService.getcartCount(this.productIndex);
    });
  }

  addToCart(){
      this.applicationService.addToCart(this.productIndex);
  }
  removeCart(){
    this.applicationService.removeCart(this.productIndex);
  }

  ngOnDestroy(){
    this.$cartProductEvent.unsubscribe();
  }

}
