import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  totalPrice = 0;
  subscription: Subscription;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    if (localStorage.getItem('totalPrice')) {
      this.totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    }
    this.subscription = this.sharedDataService.totalPriceObs.subscribe((data: number) => {
      this.totalPrice = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
