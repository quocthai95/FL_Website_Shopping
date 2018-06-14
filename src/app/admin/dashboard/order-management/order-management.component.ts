import { Component, OnInit } from '@angular/core';
import { InitService, DOMAINAPI, showLoadingScreen, hideLoadingScreen } from '../../../shared/init.service';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../../../shared/order.model';

declare const $: any;
@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class OrderManagementComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 8;
  listOrder = [];
  searchType = 'ORDERID';
  searchText = '';

  editItem = {
    guestInfor: {
      name: null,
      email: null,
      phoneNumber: null,
      other: []
    },
    status: null,
    _id: null,
    totalPrice: null,
    listProduct: []
  };

  infoItem = [];
  infoAddress = '';

  constructor(private inItService: InitService, private httpClient: HttpClient) { }

  ngOnInit() {
    showLoadingScreen();
    this.httpClient.get(DOMAINAPI + 'order/listOrder', {
      observe: 'body'
    }).subscribe(
      (response: any) => {
        this.listOrder = response;
        hideLoadingScreen();
      },
      (error => {
        hideLoadingScreen();
        alert('Lỗi không lấy được dữ liệu!');
      })
    );
  }

  returnInfoItem(item) {
    this.infoItem = Object.assign(this.infoItem, item);
  }

  returnInfoStatus(item) {
     this.editItem = Object.assign(this.editItem, item);
  }

  returnInfoAdress(item) {
    this.infoAddress =  item;
  }

  updateOrder(item) {
    showLoadingScreen();
    this.httpClient.patch(DOMAINAPI + 'order/' + item._id, item, {
      observe: 'body'
    }).subscribe(
      () => {
    this.httpClient.get(DOMAINAPI + 'order/listOrder', {
      observe: 'body'
    }).subscribe(
      (response: any) => {
        this.listOrder = response;
        hideLoadingScreen();
      },
      (error => {
        hideLoadingScreen();
        alert('Lỗi không lấy được dữ liệu!');
      })
    );
      },
      (err) => {
        alert('Lỗi cập nhật đơn hàng!');
      }
    );
    $('#editOrder').modal('hide');
  }

  checkStatusFilter() {
    if (this.searchType === 'STATUS') {
      this.searchText = 'PENDING';
    }
  }
}
