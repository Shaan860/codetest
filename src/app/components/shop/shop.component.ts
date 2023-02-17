import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy{
   pageTitle : String = "Welcome To Shop Page";
   pid:any;
   subs:any;

   constructor(private route: ActivatedRoute,
               private router: Router,
               private productService: ProductlistService ){}

   ngOnInit(): void {
    this.subs = this.route.paramMap.subscribe(
      params => {
        this.pid = params.get('id');
      }
    )

  //  this.getSingleData(this.pid);
   }


  // getSingleData(id:string){
  //   // this.productService.getProducts().subscribe(data => console.log('inside component', data.find((p)=> p.id == id)))
  //   this.productService.getSingle(id).subscribe(data => console.log(data));
  // }

   onBack():void {
      this.router.navigate(['/product-list']);
   }
   
   ngOnDestroy(): void {
     this.subs.unsubscribe();
   }
}
