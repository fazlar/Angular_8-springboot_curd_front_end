import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import { Observable } from 'rxjs';
import { AddProductService } from '../add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  showProduct: Observable<product[]>;
  
  constructor(private service:AddProductService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.showProduct = this.service.showProduct();
  } 
  reloadData() {
    this.showProduct = this.service.showProduct();
  }
  deleteProduct(id: number) {
    if (confirm("Are you sure delect this Product")) {
    this.service.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
  }
  updateProduct(id: number){
    this.router.navigate(['update', id]);
  }

}
