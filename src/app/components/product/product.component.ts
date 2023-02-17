import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private listService: ProductlistService){}

  ngOnInit(): void {
    this.listService.getSingleProduct('1');
    this.listService.getListProducts();
  }
}
