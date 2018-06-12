import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../../../shared/shared-data.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DOMAINAPI, showLoadingScreen, hideLoadingScreen } from '../../../shared/init.service';

@Component({
  selector: 'app-checkout-order-review',
  templateUrl: './checkout-order-review.component.html',
  styleUrls: ['./checkout-order-review.component.css']
})
export class CheckoutOrderReviewComponent implements OnInit, OnDestroy {
  totalPrice = 0;
  productOrder: Array<any>;
  userInfo = {
    name: null,
    address: null,
    email : null,
    phone: null
  };

  subscription: Subscription;
  constructor(private sharedDataService: SharedDataService, private router: Router,
  private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    if (localStorage.getItem('totalPrice')) {
      this.totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    }
    this.productOrder = JSON.parse(localStorage.getItem('productOrder'));
    this.userInfo = JSON.parse(localStorage.getItem('guestInfor'));
    this.subscription = this.sharedDataService.totalPriceObs.subscribe((data: number) => {
      this.totalPrice = data;
    });
  }

  placeOrder() {
    showLoadingScreen();
    const orderData = {
      guestInfor: {
        other: [this.userInfo.address, new Date()],
        name: this.userInfo.name,
        email: this.userInfo.email,
        phoneNumber: this.userInfo.phone
    },
    status: 'PENDING',
    listProduct: [
        []
    ],
    totalPrice: this.totalPrice
    };
    this.productOrder.forEach(item => {
      orderData.listProduct[0].push(item);
    });

    this.httpClient.post(DOMAINAPI + 'order', orderData, {
      observe: 'body'
    }).subscribe(
      (response: any) => {
        hideLoadingScreen();
        localStorage.removeItem('productOrder');
        localStorage.removeItem('totalPrice');
        this.sharedDataService.totalPriceObs.next(0);
        this.sharedDataService.cartItemsObs.next(0);
        this.router.navigate(['../completed-order'], {relativeTo: this.route, queryParams: {nameCustomer: this.userInfo.name}});
      }, (error => {
        hideLoadingScreen();
        alert('Lỗi đặt hàng! Vui lòng thử lại!');
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
