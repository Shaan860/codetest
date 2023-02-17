import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router'
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit , OnDestroy{
   public productID: any;
   public item: any;
   public subs:any;

  constructor(
               private _Activatedroute : ActivatedRoute, 
               private _Route : Router, 
               private _ProductListService: ProductlistService 
              ){}

  ngOnInit(): void {
    this.subs = this._Activatedroute.paramMap.subscribe((param)=>{
    this.productID = param.get('id');
   })
   
  }
  
  onBack():void {
    this._Route.navigate(['/product-list']);
 }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
