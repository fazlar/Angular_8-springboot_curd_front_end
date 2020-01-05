import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from '../add-product.service';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id: number;
  product: product;
  message:String
  submitted = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private service:AddProductService,
    ) { }

  ngOnInit() {
     
     this.id = this.route.snapshot.params['id'];
    
     this.service.showProductById(this.id)
       .subscribe(data => {
        console.log(data)
        this.product = data;
     }, error => console.log(error));

  }
  updateProduct(){
    let resp=this.service.updateProduct(this.product);
    resp.subscribe((data)=>this.message="product update successfuly"),
    error => {console.log(error)
      this.message="product update faild"
    };
    
    
      }
      onSubmit() {
        this.submitted = true;
        this.updateProduct();    
      }
      showProductList() {
        this.router.navigate(['/showProduct'],{relativeTo:this.route});

      }

}
