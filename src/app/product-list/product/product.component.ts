import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared-module/application.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()product: Product;
  //@Input()productIndex: number
  constructor() { }

  ngOnInit() {
    
  }

}
