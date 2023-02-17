import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap, Subscription } from 'rxjs';
import { IconserviceService } from 'src/app/services/iconservice.service';
import { Product } from 'src/app/services/product';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  errMessage: string = '';
  sub!: Subscription;
  products : Product[] = [];
   constructor(private productService : ProductlistService, private iconService : IconserviceService){}

   ngOnInit(): void {
       this.sub = this.productService.getProducts().subscribe({
          next: products => { 
            this.products = products 
          },
          error: err => this.errMessage = err
        });
        
        this.iconService.registerIcon();
   }

   ngOnDestroy(): void {
     this.sub.unsubscribe();
   }
}
