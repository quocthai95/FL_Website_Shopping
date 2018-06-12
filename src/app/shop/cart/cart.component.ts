import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { SharedDataService } from '../../shared/shared-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  totalPrice = 0;
  subscription: Subscription;

  constructor(private sharedDataService: SharedDataService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    if (localStorage.getItem('totalPrice')) {
      this.totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    }
    this.subscription = this.sharedDataService.totalPriceObs.subscribe((data: number) => {
      this.totalPrice = data;
    });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
