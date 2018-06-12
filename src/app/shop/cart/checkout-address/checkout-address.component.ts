import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {
  userModel = {
    name: null,
    address: null,
    email : null,
    phone: null
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('guestInfor')) {
      this.userModel = JSON.parse(localStorage.getItem('guestInfor'));
    }
  }

  saveGuestInfo() {
    localStorage.setItem('guestInfor', JSON.stringify(this.userModel));
    this.router.navigate(['../checkout-review'], {relativeTo: this.route});
  }

  validGuestInfo() {
    if ( this.userModel.name && this.userModel.email && this.userModel.phone ) {
      return false;
    }
    return true;
  }
}
