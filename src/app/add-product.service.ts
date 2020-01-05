import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http:HttpClient) { }
  public addProduct(product){
    return this.http.post(`${this.baseUrl}/save-product`,product,{responseType:'json'});
  }
   showProduct() : Observable<any>{
    return this.http.get(`${this.baseUrl}/showe-product`);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  showProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  public updateProduct(product){
    return this.http.post(`${this.baseUrl}/update-product`,product,{responseType:'json'});
  }
  //start catagory
  public addCatagory(catagory){
    return this.http.post(`${this.baseUrl}/save-catogary`,catagory,{responseType:'json'});
  }
  getCatagory() : Observable<any>{
    return this.http.get(`${this.baseUrl}/showe-catagory`);
  }
  deleteCatagory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  getCatagoryById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getcatagory/${id}`);
  }

}
