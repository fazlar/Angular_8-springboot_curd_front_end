import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { AddProductService } from '../add-product.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { catagory } from '../catagory';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: product = new product(0,"","",0,0,"");
  message:any
  submitted = false;
  valueError=true;
  catagory: Observable<catagory[]>;
  constructor(private service:AddProductService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getCatagory();
  }
  newProduct(): void {
    this.submitted = false;
    this.product = new product(0,"","",0,0,"");
  }

   submitProduct(){
    let resp=this.service.addProduct(this.product);
    console.log(resp);
    resp.subscribe((data)=>{this.message="product successfuly added"
    this.showProductList();
  },
  error => {
    console.log(error)
    this.message="product save failed"}
  )
    
    
   
      }
      onSubmit() {
        
        this.submitted = true;
        this.submitProduct();    
      }
      showProductList() {
        this.router.navigate(['/showProduct']);
      }
    getCatagory(){
      this.catagory = this.service.getCatagory();
    }
    validDrapdown(value){
     if(value==="default"){
       this.valueError=true;
     }else{
       this.valueError=false;
     }
    }

}
