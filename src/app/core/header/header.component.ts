import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItems = 0;
  subscription: Subscription;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    if (localStorage.getItem('productOrder')) {
      this.cartItems = JSON.parse(localStorage.getItem('productOrder')).length;
    }
    this.subscription = this.sharedDataService.cartItemsObs.subscribe((data: number) => {
      this.cartItems = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
