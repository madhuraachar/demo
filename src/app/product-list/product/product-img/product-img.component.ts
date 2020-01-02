import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.css']
})
export class ProductImgComponent implements OnInit {
  @Input()imageURL: string;
  @Input()offerText: string;
  constructor() { }

  ngOnInit() {
  }

}
