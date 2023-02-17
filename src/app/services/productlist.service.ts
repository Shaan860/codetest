import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  private productsUrl = '../assets/cars.json';
  private productlistUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http : HttpClient) { }

  getProducts(): Observable <Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(data => console.log('Products', JSON.stringify(data))),
      catchError(this.errorHandle)
    );
  }
  
  errorHandle(error: HttpErrorResponse){
    return throwError(error.message || 'Server Error');
  }

  // getSingle(id:string){
  //   return this.http.get('assets/`${id}`/cars.json')
  //   }

  // Demo url for single data or multiple data
  getListProducts(){
   return this.http.get(this.productlistUrl).subscribe(data => console.log('list data', data));
  }
  getSingleProduct(id:string){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(data => console.log('single data', data));
  }
  
}
