import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingCompanent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { AddProductService } from './add-product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { AddCatagoryComponent } from './add-catagory/add-catagory.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ShowProductComponent,
    ProductUpdateComponent,
    AddCatagoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AddProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
