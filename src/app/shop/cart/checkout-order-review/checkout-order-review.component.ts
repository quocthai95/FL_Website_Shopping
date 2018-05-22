import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../../../shared/shared-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-checkout-order-review',
  templateUrl: './checkout-order-review.component.html',
  styleUrls: ['./checkout-order-review.component.css']
})
export class CheckoutOrderReviewComponent implements OnInit, OnDestroy {
  totalPrice = 0;
  productOrder: null;
  subscription: Subscription;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    if (localStorage.getItem('totalPrice')) {
      this.totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    }
    this.productOrder = JSON.parse(localStorage.getItem('productOrder'));
    this.subscription = this.sharedDataService.totalPriceObs.subscribe((data: number) => {
      this.totalPrice = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
