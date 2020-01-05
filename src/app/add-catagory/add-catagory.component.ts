import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catagory } from '../catagory';
import { AddProductService } from '../add-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  styleUrls: ['./add-catagory.component.css']
})
export class AddCatagoryComponent implements OnInit {
  catagory: catagory = new catagory(0,"");
  message:any
  allcatagory: Observable<catagory[]>;
  constructor(private service:AddProductService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.getCatagory();
  }
  getCatagory(){
    this.allcatagory = this.service.getCatagory();
  }
    submitCatagory(){
      let resp=this.service.addCatagory(this.catagory);
      console.log(resp);
      resp.subscribe((data)=>{this.message="catagory successfuly added"
       this.reload();
    },
    error => {
      console.log(error)
      this.message="catagory save failed"
    
    }
    )
  }
  reload() {
    this.router.navigate(['/catagory']);
    this.getCatagory();
  }
  onSubmit() {
    this.submitCatagory();    
  }
  deleteCatagory(id: number) {
    if (confirm("Are you sure delect this catagory")) {
    this.service.deleteCatagory(id)
      .subscribe(
        data => {
          console.log(data);
          this.reload();
        },
        error => console.log(error));
      }
  }
  updatecatagory(id: number){
    this.service.getCatagoryById(id)
    .subscribe(data => {
      console.log(data)
      this.catagory = data;
   }, error => console.log(error));

  }

}
