import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { AddCatagoryComponent } from './add-catagory/add-catagory.component';


const routes: Routes = [  
  
  {path:"",redirectTo:"/showProduct",pathMatch:"full"},
  {path:"addproduct",component:AddProductComponent},
  {path:"showProduct",component:ShowProductComponent},
  { path: 'update/:id', component: ProductUpdateComponent },
  { path: 'catagory', component: AddCatagoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompanent=[AddProductComponent,ShowProductComponent,ShowProductComponent]