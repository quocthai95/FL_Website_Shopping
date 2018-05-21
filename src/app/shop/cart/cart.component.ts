import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productOrder = null;
  totalPrice: number;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('productOrder')) {
      this.productOrder = JSON.parse(localStorage.getItem('productOrder'));
      this.checkTotalPrice();
    }

  }

  checkTotalPrice() {
    this.totalPrice = 0;
    this.productOrder.forEach(item => {
      this.totalPrice += item.price * item.quantity;
    });
  }
}
