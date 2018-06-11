import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SharedDataService } from '../../../shared/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css']
})
export class CheckoutOrderComponent implements OnInit {
  productOrder = null;
  totalPrice = 0;
  popperTitle = `<b>Xác nhận</b>`;
  constructor(private sharedDataService: SharedDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('productOrder')) {
      this.productOrder = JSON.parse(localStorage.getItem('productOrder'));
      this.checkTotalPrice();
    }

  }

  checkTotalPrice() {
    this.totalPrice = 0;
    this.productOrder.forEach(item => {
      this.totalPrice += item.price * item.amount;
    });
    this.sharedDataService.totalPriceObs.next(this.totalPrice);
    localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
  }

  removeItemFromCart(index) {
    this.productOrder.splice(index, 1);
    if (this.productOrder.length === 0) {
      this.productOrder = null;
      this.totalPrice = 0;
      this.sharedDataService.totalPriceObs.next(this.totalPrice);
      this.sharedDataService.cartItemsObs.next(0);
      localStorage.clear();
    } else {
      localStorage.setItem('productOrder', JSON.stringify(this.productOrder));
      this.sharedDataService.cartItemsObs.next(JSON.parse(localStorage.getItem('productOrder')).length);
      this.checkTotalPrice();
    }
  }

  checkout() {
    localStorage.setItem('productOrder', JSON.stringify(this.productOrder));
    this.router.navigate(['../checkout-delivery'], {relativeTo: this.route});
  }

}
