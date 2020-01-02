import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product-list/product/product.component';
import { ProductImgComponent } from './product-list/product/product-img/product-img.component';
import { ProductDetailsComponent } from './product-list/product/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './product-list/product/product-details/button/button.component';
import { FooterComponent } from './footer/footer.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductImgComponent,
    ProductDetailsComponent,
    ButtonComponent,
    FooterComponent,
    ModalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
