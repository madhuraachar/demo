import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApplicationService } from '../shared-module/application.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit, OnDestroy {
  $checkOutEvent: Subscription;
  totalAmount = 0;
  constructor(private applicationService:ApplicationService) { }

  ngOnInit() {
    
    //checking for check out event
    this.$checkOutEvent = this.applicationService.checkOutEvent.subscribe(x=>{
      this.totalAmount = this.applicationService.getTotalFromCart();
      this.openModal();
    });

   
  }

  openModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }

  ngOnDestroy(){
    this.$checkOutEvent.unsubscribe();
  }
  closePopup(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    this.applicationService.clearCart();
  }

}
