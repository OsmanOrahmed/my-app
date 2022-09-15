import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  
  public name:string='';
  public price:number=0;
  public quantity:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
